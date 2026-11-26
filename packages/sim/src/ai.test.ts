import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld, hashWorld } from './world';
import { createEnemyTank, type TankCommand } from './tank';
import { createBrain, thinkBrain, AI_KNOBS } from './ai';
import { makeStructure } from './structure';
import { BOMBER_PERIOD, TELEGRAPH_TICKS } from './director';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function duel(dist: number, kind: 'slow' | 'super' = 'slow') {
  const w = createWorld(5);
  const e = createEnemyTank(1, kind, 0, dist, Math.PI);
  e.spawnTick = -1000;
  w.tanks.push(e);
  w.brains.set(1, createBrain(kind));
  w.tanks[0].spawnTick = -1000;
  w.nextSpawnTick = 1e9; // director idle: test the brain alone
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberTick = 1e9;
  return w;
}

describe('AI imperfection (AI.md)', () => {
  it('no contacts → patrols instead of stopping or omnisciently hunting', () => {
    const w = duel(60);
    w.awareness.clear();
    const cmd = thinkBrain(w, w.brains.get(1)!, w.tanks[1]);
    expect(cmd.fire).toBe(false);
    expect(cmd.throttle).toBeGreaterThan(0);
    expect(w.brains.get(1)!.mode).toBe('patrol');
  });

  it('engages a known contact: fires with cooldown discipline and nonzero error', () => {
    const w = duel(70);
    let shots = 0;
    let errs: number[] = [];
    for (let i = 0; i < 1200; i++) {
      stepWorld(w, [N]);
      for (const ev of w.events) {
        if (ev.kind === 'fire' && ev.owner === 1) shots++;
      }
      const b = w.brains.get(1)!;
      if (b.debug.err > 0) errs.push(b.debug.err);
    }
    expect(shots).toBeGreaterThan(0);
    expect(shots).toBeLessThan(1200 / (AI_KNOBS.slow.cooldown[0] * 60) + 2);
    expect(errs.some((e) => e > 0)).toBe(true);
  });

  it('blocked LOS: both types investigate and never fire through cover', () => {
    const ws = duel(70, 'slow');
    ws.structures.push(makeWall());
    const bs = ws.brains.get(1)!;
    for (let i = 0; i < 40; i++) {
      ws.tick += 24;
      ws.events = [];
      ws.awareness.set(1, new Map([[0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: ws.tick, source: 'ping' }]]));
      bs.nextThink = 0;
      const cmd = thinkBrain(ws, bs, ws.tanks[1]);
      expect(cmd.fire).toBe(false);
    }
    expect(['investigate', 'reposition']).toContain(bs.mode);

    const wu = duel(70, 'super');
    wu.structures.push(makeWall());
    const bu = wu.brains.get(1)!;
    for (let i = 0; i < 40; i++) {
      wu.tick += 15;
      wu.events = [];
      wu.awareness.set(1, new Map([[0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: wu.tick, source: 'ping' }]]));
      bu.nextThink = 0;
      const cmd = thinkBrain(wu, bu, wu.tanks[1]);
      expect(cmd.fire).toBe(false);
    }
    expect(['investigate', 'reposition']).toContain(bu.mode);
  });

  it('determinism: same seed + same script → identical hash with AI active', () => {
    const run = () => {
      const w = duel(80);
      for (let i = 0; i < 1500; i++) stepWorld(w, [i % 200 < 100 ? { ...N, throttle: 1 } : N]);
      return hashWorld(w);
    };
    expect(run()).toBe(run());
  });
});

function makeWall() {
  // tower between the duelists at z=35: 2.4 m tall, blocks eye-level (1.2 m) LOS
  return makeStructure(600, 'tower', 0, 35);
}

describe('director: enemies come to you', () => {
  it('first enemy spawns within sight range, acquires contact, and closes in', () => {
    const w = createWorld(11);
    w.nextBomberTick = 1e9;
    let spawned = false;
    let acquired = false;
    for (let i = 0; i < 900; i++) {
      stepWorld(w, [N]);
      const e = w.tanks[1];
      if (e) {
        spawned = true;
        if (w.awareness.get(e.id)?.has(0)) acquired = true;
      }
    }
    expect(spawned).toBe(true);
    expect(acquired).toBe(true);
    const e = w.tanks[1];
    const d1 = Math.hypot(e.x - w.tanks[0].x, e.z - w.tanks[0].z);
    expect(d1).toBeLessThan(140); // closed in from the 100-140 m spawn ring
  });
});

describe('bomber (AI.md §5.4)', () => {
  it('spawns on cadence, flies straight, telegraphs bombs >= 1.5 s before impact', () => {
    const w = createWorld(9);
    w.nextBomberTick = 10;
    w.nextSpawnTick = 1e9;
    for (let i = 0; i < 12; i++) stepWorld(w, [N]);
    const b = w.bomber!;
    expect(b).toBeTruthy();
    // put the player under its path
    w.tanks[0].x = b.pos[0] + b.dir[0] * 40;
    w.tanks[0].z = b.pos[2] + b.dir[2] * 40;
    let maxTurn = 0;
    let prevDir = [...b.dir];
    let telegraphAt = -1;
    let explosionAt = -1;
    for (let i = 0; i < 600; i++) {
      stepWorld(w, [N]);
      maxTurn = Math.max(maxTurn, Math.hypot(b.dir[0] - prevDir[0], b.dir[2] - prevDir[2]));
      prevDir = [...b.dir];
      if (telegraphAt < 0 && w.events.some((e) => e.kind === 'bombTelegraph')) telegraphAt = w.tick;
      if (telegraphAt >= 0 && explosionAt < 0 && w.events.some((e) => e.kind === 'explosion')) explosionAt = w.tick;
    }
    expect(maxTurn).toBeLessThanOrEqual(0.003); // minor per-tick corrections
    expect(telegraphAt).toBeGreaterThan(0);
    expect(explosionAt - telegraphAt).toBeGreaterThanOrEqual(TELEGRAPH_TICKS);
  });

  it('shooting the bomber kills it and reveals the shooter (gunfire rule)', () => {
    const w = createWorld(9);
    w.nextBomberTick = 10;
    w.nextSpawnTick = 1e9;
    for (let i = 0; i < 12; i++) stepWorld(w, [N]);
    const b = w.bomber!;
    // hold the bomber where a max-elevation shot can reach it (15 m up,
    // ~8.6 m ahead along the gun axis at 60°)
    const t = w.tanks[0];
    t.gunPitch = 1.05;
    let killed = false;
    let airburst = false;
    for (let i = 0; i < 400 && !killed; i++) {
      b.pos[0] = t.x + Math.sin(t.heading) * 8.6;
      b.pos[2] = t.z + Math.cos(t.heading) * 8.6;
      b.pos[1] = 15;
      stepWorld(w, [{ ...N, fire: true }]);
      killed = w.events.some((e) => e.kind === 'kill' && e.what === 'bomber');
      airburst ||= w.events.some((e) => e.kind === 'explosion' && e.pos[1] > 10);
    }
    expect(killed).toBe(true);
    expect(airburst).toBe(true); // visible feedback, not a silent disappear
    expect(w.score).toBeGreaterThanOrEqual(1000);
  });

  it('cadence: next bomber one period after the previous', () => {
    const w = createWorld(9);
    w.nextBomberTick = 10;
    w.nextSpawnTick = 1e9;
    let spawnAt = -1;
    for (let i = 0; i < 20; i++) {
      stepWorld(w, [N]);
      if (spawnAt < 0 && w.bomber) spawnAt = w.tick;
    }
    expect(spawnAt).toBeGreaterThan(0);
    expect(w.nextBomberTick).toBe(spawnAt + BOMBER_PERIOD);
  });
});