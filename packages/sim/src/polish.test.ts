import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { thinkBrain } from './ai';
import { countType } from './grid';
import { PEN_COST, VOLCANO_BLAST_RADIUS, LAVA_TICKS } from './combat';
import type { TankCommand } from './tank';
import type { Shell } from './combat';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function quietWorld() {
  const w = createWorld(77);
  w.nextBomberTick = 1e9;
  w.nextMissileTick = 1e9;
  return w;
}

describe('polish: four AI + FFA + player hunter', () => {
  it('maintains four light tanks and exactly one player tracker', () => {
    const w = quietWorld();
    for (let i = 0; i < 700; i++) stepWorld(w, [N]);
    const lights = w.tanks.filter((t) => t.alive && w.brains.get(t.id)?.kind === 'slow');
    expect(lights.length).toBe(4);
    const trackers = lights.filter((t) => w.brains.get(t.id)!.playerTracker);
    expect(trackers.length).toBe(1);
    expect(w.awareness.get(trackers[0].id)?.has(0)).toBe(true);
  });

  it('non-tracker AI prefer other tanks (FFA) when contacts are known', () => {
    const w = quietWorld();
    for (let i = 0; i < 700; i++) stepWorld(w, [N]);
    const ai = w.tanks.find((t) => t.id !== 0 && t.alive && !w.brains.get(t.id)!.playerTracker)!;
    const other = w.tanks.find((t) => t.id !== 0 && t.id !== ai.id && t.alive)!;
    w.awareness.set(ai.id, new Map([
      [0, { x: w.tanks[0].x, z: w.tanks[0].z, heading: 0, turretYaw: 0, tick: 1, source: 'ping' }],
      [other.id, { x: other.x, z: other.z, heading: other.heading, turretYaw: other.turretYaw, tick: w.tick, source: 'ping' }],
    ]));
    w.brains.get(ai.id)!.lastTargetSwitchTick = -9999;
    w.brains.get(ai.id)!.nextThink = 0;
    thinkBrain(w, w.brains.get(ai.id)!, ai);
    expect(w.brains.get(ai.id)!.targetId).toBe(other.id);
  });

  it('supertank spawns on its hunter schedule', () => {
    const w = quietWorld();
    w.nextSuperTick = 10;
    let alerted = false;
    for (let i = 0; i < 20; i++) {
      stepWorld(w, [N]);
      alerted ||= w.events.some((e) => e.kind === 'superSpawn');
    }
    expect(w.tanks.some((t) => t.alive && w.brains.get(t.id)?.kind === 'super')).toBe(true);
    expect(alerted).toBe(true);
  });
});

describe('polish: airborne guided missiles', () => {
  it('spawns above the arena and emits player lock alerts', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.nextMissileTick = 1;
    let lock = false;
    for (let i = 0; i < 400 && !lock; i++) {
      w.nextMissileTick = w.tick + 1;
      stepWorld(w, [N]);
      lock ||= w.events.some((e) => e.kind === 'missileLock');
      for (const m of w.missiles) expect(m.pos[1]).toBeGreaterThan(8);
    }
    expect(lock).toBe(true);
  });

  it('a guided missile reaches a stationary target before expiring', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.nextMissileTick = 1;
    stepWorld(w, [N]);
    const m = w.missiles[0];
    expect(m?.tracking).toBe(true);
    let minDistance = Infinity;
    let hit = false;
    for (let i = 0; i < 1200; i++) {
      stepWorld(w, [N]);
      const live = w.missiles.find((x) => x.id === m.id);
      if (!live) {
        hit = w.events.some((e) => e.kind === 'explosion' && e.source === 'missile');
        break;
      }
      minDistance = Math.min(minDistance, Math.hypot(live.pos[0] - w.tanks[0].x, live.pos[2] - w.tanks[0].z));
    }
    expect(minDistance).toBeLessThan(3);
    expect(hit).toBe(true);
  });

  it('guided missiles turn slowly enough to dodge', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.nextMissileTick = 1;
    stepWorld(w, [N]);
    const m = w.missiles[0];
    expect(m).toBeTruthy();
    m.tracking = true;
    m.targetId = 0;
    m.turnRate = 0.45;
    m.dir = [1, 0, 0];
    w.tanks[0].x = 0;
    w.tanks[0].z = 100;
    const before = [...m.dir];
    stepWorld(w, [N]);
    const turn = Math.acos(Math.max(-1, Math.min(1, before[0] * m.dir[0] + before[2] * m.dir[2])));
    expect(turn).toBeLessThanOrEqual(0.45 / 60 + 1e-6);
  });
});

describe('polish: deadly volcano', () => {
  it('eruption covers the arena with many projectiles and long-lived lava', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.tick = 28800;
    w.volcano.state = 'rumble';
    w.volcano.untilTick = w.tick + 1;
    stepWorld(w, [N]); // enter erupt
    let volcanicBombs = 0;
    let blastRadius = 0;
    let maxLavaLife = 0;
    for (let i = 0; i < 2000; i++) {
      stepWorld(w, [N]);
      volcanicBombs += w.telegraphs.filter((t) => t.kind === 'volcano').length;
      for (const e of w.events) if (e.kind === 'explosion' && e.source === 'volcano') blastRadius = Math.max(blastRadius, e.radius);
      for (const p of w.lavaPools) maxLavaLife = Math.max(maxLavaLife, p.untilTick - w.tick);
    }
    expect(volcanicBombs).toBeGreaterThanOrEqual(8);
    expect(blastRadius).toBe(VOLCANO_BLAST_RADIUS);
    expect(maxLavaLife).toBeGreaterThan(2000);
    expect(LAVA_TICKS).toBeGreaterThanOrEqual(2400);
  });
});

describe('polish: bomber path + hitbox', () => {
  it('spawn path runs through its target tank', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1;
    stepWorld(w, [N]);
    const b = w.bomber!;
    expect(b).toBeTruthy();
    const t = w.tanks[0];
    const cross = Math.abs((t.x - b.pos[0]) * b.dir[2] - (t.z - b.pos[2]) * b.dir[0]);
    expect(cross).toBeLessThan(0.001);
  });

  it('generous wings hitbox accepts a shell 4 m off the fuselage', () => {
    const w = quietWorld();
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1;
    stepWorld(w, [N]);
    const b = w.bomber!;
    const hp = b.hp;
    const sh: Shell = { id: 999, owner: 0, pos: [b.pos[0] + 4, b.pos[1], b.pos[2]], dir: [0, 0, 0], budget: 6, alive: true };
    w.shells.push(sh);
    stepWorld(w, [N]);
    expect(b.hp).toBeLessThan(hp);
  });
});

describe('polish: object identity', () => {
  it('scanner is large, reinforced, and costly to breach', () => {
    const w = quietWorld();
    const scan = w.structures.find((s) => s.kind === 'scan')!;
    expect(scan.grid.size.x).toBeGreaterThanOrEqual(7);
    expect(scan.grid.size.y).toBeGreaterThanOrEqual(10);
    expect(countType(scan.grid, 'scanner')).toBeGreaterThan(20);
    expect(PEN_COST.scanner).toBeGreaterThan(4);
    const cell = scan.grid.cells.find((c) => c?.type === 'scanner')!;
    expect(cell.hp).toBeGreaterThanOrEqual(6);
  });
});
