import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { createEnemyTank, type TankCommand } from './tank';
import { createBrain, thinkBrain } from './ai';
import { getCell, setCell } from './grid';
import { makeStructure } from './structure';
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

  it('holds a stable range band instead of flipping movement at the fringe', () => {
    const w = duel(85, 'super'); // just beyond high=80, inside hold margin
    const brain = w.brains.get(1)!;
    brain.mode = 'engage';
    const near = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('engage');
    expect(near.throttle).toBeGreaterThan(0); // mid-range strafe, never sit still

    w.tanks[1].z = 101; // well beyond high+10
    w.awareness.get(1)!.set(0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: w.tick, source: 'los' });
    brain.nextThink = 0;
    const far = thinkBrain(w, brain, w.tanks[1]);
    expect(brain.mode).toBe('engage');
    expect(far.throttle).toBeGreaterThan(0); // close the distance
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
