import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { createEnemyTank, type TankCommand } from './tank';
import { createBrain, thinkBrain } from './ai';
import { getCell, setCell } from './grid';
import { makeStructure } from './structure';
import { hasLos } from './awareness';
import { SELF_DESTRUCT_TICKS } from './combat';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function duel(dist: number, kind: 'slow' | 'super' = 'slow', seed = 5) {
  const w = createWorld(seed);
  const e = createEnemyTank(1, kind, 0, dist, Math.PI);
  e.spawnTick = -1000;
  w.tanks.push(e);
  w.brains.set(1, createBrain(kind));
  w.tanks[0].spawnTick = -1000;
  w.nextSpawnTick = 1e9;
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberTick = 1e9;
  w.awareness.set(1, new Map([[0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: 0, source: 'los' }]]));
  return w;
}

function stripGun(t: ReturnType<typeof createEnemyTank>): void {
  for (let z = 0; z < t.turret.size.z; z++)
    for (let y = 0; y < t.turret.size.y; y++)
      for (let x = 0; x < t.turret.size.x; x++)
        if (getCell(t.turret, x, y, z)?.type === 'gun') setCell(t.turret, x, y, z, null);
}

function incoming(w: ReturnType<typeof createWorld>, targetId: number, attackers: number[]): void {
  w.incomingFire.set(targetId, new Map(attackers.map((id) => [id, w.tick])));
}

describe('AI aim & hysteresis', () => {
  it('defaults to a low hull aim point and negative gun pitch', () => {
    let hullAims = 0;
    for (let seed = 0; seed < 40; seed++) {
      const w = duel(70, 'super', seed);
      const brain = w.brains.get(1)!;
      thinkBrain(w, brain, w.tanks[1]);
      if (brain.aim && brain.aim.y < 0.8) hullAims++;
    }
    expect(hullAims).toBeGreaterThanOrEqual(36); // turret shots are rare
  });

  it('computes pitch down toward the hull, not flat at turret height', () => {
    const w = duel(70, 'super');
    const brain = w.brains.get(1)!;
    brain.targetId = 0;
    brain.lastTargetSwitchTick = w.tick;
    brain.shotsAtContact = 1;
    brain.aim = { x: 0, z: 0, y: 0.45 };
    const cmd = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.aim?.y).toBeCloseTo(0.45);
    expect(cmd.gunPitch).toBeLessThan(0);
  });

  it('leads a visible moving target instead of aiming at its current position', () => {
    const w = duel(70, 'slow');
    w.tanks[0].heading = Math.PI / 2;
    w.tanks[0].speed = 6;
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.aim!.x).toBeGreaterThan(1);
    expect(brain.aim!.z).toBeCloseTo(0);
  });

  it('holds a stable range band instead of flipping movement at the fringe', () => {
    const w = duel(85, 'super'); // just beyond high=80, inside hold margin
    const brain = w.brains.get(1)!;
    brain.mode = 'engage';
    const near = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('engage');
    expect(near.throttle).toBeGreaterThan(0); // cover-seeking or orbiting, never sitting still

    w.tanks[1].z = 101; // well beyond high+10
    w.awareness.get(1)!.set(0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: w.tick, source: 'los' });
    brain.nextThink = 0;
    const far = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('engage');
    expect(far.throttle).toBeGreaterThan(0); // close the distance
  });

  it('seeks a nearby firing position that preserves LOS and blocks hull shots', () => {
    const w = duel(70, 'slow');
    w.structures = [makeStructure(700, 'wall', 0, 50)];
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.coverGoal).not.toBeNull();
    expect(brain.coverStructureId).toBe(700);
    expect(hasLos(w, [brain.coverGoal!.x, 1.2, brain.coverGoal!.z], [0, 0.45, 0])).toBe(true);
    expect(hasLos(w, [0, 1.2, 0], [brain.coverGoal!.x, 0.45, brain.coverGoal!.z])).toBe(false);
  });

  it('circles the target when no cover is nearby', () => {
    const w = duel(70, 'slow');
    w.structures = [];
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.coverGoal).toBeNull();
    expect(brain.orbitAngle).not.toBeNull();
    const firstAngle = brain.orbitAngle!;
    brain.nextThink = 0;
    brain.nextOrbitTick = 0;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.orbitAngle).not.toBe(firstAngle);
  });

  it('prioritizes cover when under fire', () => {
    const w = duel(70, 'slow');
    w.structures = [makeStructure(700, 'wall', 0, 50)];
    w.threats.set(1, { tick: w.tick, from: 0 });
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.debug.evading).toBe(true);
    expect(brain.coverGoal).not.toBeNull();
  });

  it('advances, retreats, and evades incoming fire instead of sitting still', () => {
    const w = duel(70, 'slow');
    const brain = w.brains.get(1)!;
    const mid = thinkBrain(w, brain, w.tanks[1]);
    expect(mid.throttle).toBeGreaterThan(0);

    w.tanks[1].z = 130;
    brain.nextThink = 0;
    const far = thinkBrain(w, brain, w.tanks[1]);
    expect(far.throttle).toBeGreaterThan(0.5);

    w.tanks[1].z = 20;
    brain.nextThink = 0;
    const close = thinkBrain(w, brain, w.tanks[1]);
    expect(close.throttle).toBeGreaterThan(0);

    w.tanks[1].z = 70;
    w.threats.set(1, { tick: w.tick, from: 0 });
    brain.nextThink = 0;
    const evade = thinkBrain(w, brain, w.tanks[1]);
    expect(evade.throttle).toBeGreaterThan(0);
    expect(brain.debug.evading).toBe(true);
  });

  it('backs out of a stuck combat position without abandoning engage mode', () => {
    const w = duel(70, 'slow');
    const ai = w.tanks[1];
    const brain = w.brains.get(1)!;
    brain.mode = 'engage';
    brain.targetId = 0;
    brain.lastThrottle = 1;
    brain.lastX = ai.x;
    brain.lastZ = ai.z;
    brain.stuckTicks = 180;
    const cmd = thinkBrain(w, brain, ai);
    expect(brain.avoidGoal).not.toBeNull();
    expect(brain.mode).toBe('engage');
    expect(cmd.throttle).toBeGreaterThan(0);
  });

  it('fires while maneuvering, not only while stationary', () => {
    const w = duel(70, 'slow');
    const ai = w.tanks[1];
    const start = { x: ai.x, z: ai.z };
    let shots = 0;
    for (let i = 0; i < 600; i++) {
      stepWorld(w, [N]);
      shots += w.events.filter((e) => e.kind === 'fire' && e.owner === ai.id).length;
    }
    expect(shots).toBeGreaterThan(0);
    expect(Math.hypot(ai.x - start.x, ai.z - start.z)).toBeGreaterThan(1);
  });

  it('prioritizes a recent attacker over ordinary contacts', () => {
    const w = duel(70, 'slow');
    w.structures = [];
    const attacker = createEnemyTank(2, 'slow', 40, 40, 0);
    attacker.spawnTick = -1000;
    w.tanks.push(attacker);
    const brain = w.brains.get(1)!;
    brain.targetId = null;
    brain.lastTargetSwitchTick = -9999;
    w.awareness.get(1)!.set(2, { x: attacker.x, z: attacker.z, heading: 0, turretYaw: 0, tick: w.tick - 20, source: 'ping' });
    w.threats.set(1, { tick: w.tick, from: 2 });
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(2);
  });

  it('forgets the attacker after the retaliation duration', () => {
    const w = duel(70, 'slow');
    const brain = w.brains.get(1)!;
    brain.targetId = null;
    brain.lastTargetSwitchTick = -9999;
    w.threats.set(1, { tick: w.tick - 361, from: 0 });
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(0);
  });

  it('records the attacker when a shell damages the tank', () => {
    const w = duel(70, 'slow');
    w.brains.delete(1); // freeze target so the test shell lands
    w.fences = []; // keep the test lane clear of the classic energy fence
    w.shells.push({ id: 999, owner: 0, pos: [0, 1.2, 70], dir: [0, 0, 1], budget: 6, alive: true });
    stepWorld(w, [N]);
    stepWorld(w, [N]);
    expect(w.threats.get(1)?.from).toBe(0);
  });

  it('locks onto the closest attacker and flees to cover when outnumbered', () => {
    const w = duel(70, 'slow');
    const nearAttacker = createEnemyTank(2, 'slow', 40, 40, 0);
    const farAttacker = createEnemyTank(3, 'slow', 50, 0, 0);
    nearAttacker.spawnTick = -1000;
    farAttacker.spawnTick = -1000;
    w.tanks.push(nearAttacker, farAttacker);
    w.structures = [makeStructure(700, 'tower', -30, 80)];
    const brain = w.brains.get(1)!;
    brain.targetId = null;
    brain.lastTargetSwitchTick = -9999;
    w.awareness.get(1)!.set(2, { x: 40, z: 40, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    w.awareness.get(1)!.set(3, { x: 50, z: 0, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    incoming(w, 1, [0, 2, 3]);
    const cmd = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(2);
    expect(brain.debug.outnumbered).toBe(true);
    expect(brain.fleeGoal).not.toBeNull();
    expect(cmd.throttle).toBeGreaterThan(0);
  });

  it('breaks away from the closest attacker when outnumbered with no cover', () => {
    const w = duel(70, 'slow');
    const attacker = createEnemyTank(2, 'slow', 40, 40, 0);
    attacker.spawnTick = -1000;
    w.tanks.push(attacker);
    w.structures = [];
    const brain = w.brains.get(1)!;
    brain.targetId = null;
    brain.lastTargetSwitchTick = -9999;
    w.awareness.get(1)!.set(2, { x: 40, z: 40, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    incoming(w, 1, [0, 2]);
    const cmd = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(2);
    expect(brain.fleeGoal).toBeNull();
    expect(cmd.throttle).toBeGreaterThan(0);
  });

  it('keeps a visible target instead of switching to a closer hidden attacker', () => {
    const w = duel(70, 'slow');
    w.structures = [makeStructure(701, 'tower', 20, 55)];
    const hidden = createEnemyTank(2, 'slow', 40, 40, 0);
    hidden.spawnTick = -1000;
    w.tanks.push(hidden);
    const brain = w.brains.get(1)!;
    brain.targetId = 0;
    brain.lastTargetSwitchTick = w.tick;
    w.awareness.get(1)!.set(2, { x: 40, z: 40, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    w.threats.set(1, { tick: w.tick, from: 2 });
    incoming(w, 1, [0, 2]);
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(0);
    expect(brain.mode).toBe('engage');
  });

  it('uses target-switch hysteresis for similarly close visible attackers', () => {
    const w = duel(70, 'slow');
    w.structures = [];
    const a = createEnemyTank(2, 'slow', 40, 40, 0);
    const b = createEnemyTank(3, 'slow', 45, 35, 0);
    a.spawnTick = -1000;
    b.spawnTick = -1000;
    w.tanks.push(a, b);
    const brain = w.brains.get(1)!;
    brain.targetId = 2;
    brain.lastTargetSwitchTick = w.tick;
    for (const t of [a, b]) {
      w.awareness.get(1)!.set(t.id, { x: t.x, z: t.z, heading: 0, turretYaw: 0, tick: w.tick, source: 'los' });
    }
    incoming(w, 1, [2, 3]);
    a.x = 80;
    a.z = 80;
    w.awareness.get(1)!.set(2, { x: 80, z: 80, heading: 0, turretYaw: 0, tick: w.tick, source: 'los' });
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(2);
    w.tick += 60;
    brain.nextThink = 0;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(3);
  });

  it('flees under pressure even while investigating a hidden attacker', () => {
    const w = duel(70, 'slow');
    w.structures = [
      makeStructure(701, 'tower', 20, 55),
      makeStructure(702, 'tower', -20, 55),
    ];
    const a = createEnemyTank(2, 'slow', 40, 40, 0);
    const b = createEnemyTank(3, 'slow', -40, 40, 0);
    a.spawnTick = -1000;
    b.spawnTick = -1000;
    w.tanks.push(a, b);
    for (const t of [a, b]) {
      w.awareness.get(1)!.set(t.id, { x: t.x, z: t.z, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    }
    incoming(w, 1, [2, 3]);
    const cmd = thinkBrain(w, w.brains.get(1)!, w.tanks[1]);
    expect(w.brains.get(1)!.mode).toBe('investigate');
    expect(cmd.throttle).toBeGreaterThan(0);
    expect(cmd.fire).toBe(false);
  });

  it('caches a failed flee search instead of scanning every tick', () => {
    const w = duel(70, 'slow');
    w.structures = [];
    const a = createEnemyTank(2, 'slow', 40, 40, 0);
    const b = createEnemyTank(3, 'slow', -40, 40, 0);
    a.spawnTick = -1000;
    b.spawnTick = -1000;
    w.tanks.push(a, b);
    for (const t of [a, b]) {
      w.awareness.get(1)!.set(t.id, { x: t.x, z: t.z, heading: 0, turretYaw: 0, tick: w.tick, source: 'los' });
    }
    incoming(w, 1, [2, 3]);
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    const nextSearch = brain.nextFleeSeekTick;
    expect(brain.fleeGoal).toBeNull();
    w.tick++;
    brain.nextThink = 0;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.nextFleeSeekTick).toBe(nextSearch);
  });

  it('investigates ping information without firing until visual confirmation', () => {
    const w = duel(70, 'slow');
    w.structures.push(makeStructure(600, 'tower', 0, 35));
    w.awareness.get(1)!.set(0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' });
    const cmd = thinkBrain(w, w.brains.get(1)!, w.tanks[1]);
    expect(w.brains.get(1)!.mode).toBe('investigate');
    expect(cmd.throttle).toBeGreaterThan(0);
    expect(cmd.fire).toBe(false);
  });

  it('returns to patrol after its target is destroyed', () => {
    const w = duel(70, 'slow');
    const brain = w.brains.get(1)!;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('engage');
    w.tanks[0].alive = false;
    brain.nextThink = 0;
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('patrol');
    expect(brain.targetId).toBeNull();
    expect(brain.patrolGoal).not.toBeNull();
  });

  it('keeps its current target instead of flicking to an equally fresh contact', () => {
    const w = duel(70, 'slow');
    const other = createEnemyTank(2, 'slow', 40, 40, 0);
    other.spawnTick = -1000;
    w.tanks.push(other);
    const brain = w.brains.get(1)!;
    brain.targetId = 0;
    brain.lastTargetSwitchTick = w.tick;
    w.awareness.get(1)!.set(2, { x: other.x, z: other.z, heading: 0, turretYaw: 0, tick: w.tick + 10, source: 'ping' });
    thinkBrain(w, brain, w.tanks[1]);
    expect(brain.targetId).toBe(0);
  });
});

describe('turret loss self-destruct', () => {
  it('arms a 10-second countdown and detonates on schedule', () => {
    const w = createWorld(8);
    w.nextSpawnTick = 1e9;
    w.nextSuperTick = 1e9;
    w.nextMissileTick = 1e9;
    w.nextBomberTick = 1e9;
    const t = w.tanks[0];
    stripGun(t);
    stepWorld(w, [N]);
    expect(t.selfDestructTick).toBe(w.tick + SELF_DESTRUCT_TICKS);
    expect(w.events.some((e) => e.kind === 'selfDestructArmed')).toBe(true);
    for (let i = 0; i < SELF_DESTRUCT_TICKS - 1; i++) stepWorld(w, [N]);
    expect(t.alive).toBe(true);
    stepWorld(w, [N]);
    expect(t.alive).toBe(false);
    expect(w.events.some((e) => e.kind === 'tankKilled' && e.cause === 'selfDestruct')).toBe(true);
    expect(w.pendingExplosions.some((b) => b.source === 'selfDestruct')).toBe(true);
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'explosion' && e.source === 'selfDestruct')).toBe(true);
  });

  it('self-destruct explosion damages a nearby enemy', () => {
    const w = createWorld(8);
    w.nextSpawnTick = 1e9;
    w.nextSuperTick = 1e9;
    w.nextMissileTick = 1e9;
    w.nextBomberTick = 1e9;
    const enemy = createEnemyTank(1, 'slow', 3, 0, 0);
    enemy.spawnTick = -1000;
    w.tanks.push(enemy); // no brain: stationary target
    const before = enemy.hull.cells.filter((c) => c).length;
    stripGun(w.tanks[0]);
    for (let i = 0; i < SELF_DESTRUCT_TICKS + 2; i++) stepWorld(w, [N]);
    expect(enemy.hull.cells.filter((c) => c).length).toBeLessThan(before);
  });

  it('AI charges its target while the countdown runs', () => {
    const w = duel(50, 'slow');
    stripGun(w.tanks[1]);
    const cmd = thinkBrain(w, w.brains.get(1)!, w.tanks[1]);
    expect(cmd.throttle).toBe(1);
    expect(cmd.fire).toBe(false);
  });
});
