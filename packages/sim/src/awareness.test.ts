import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { createEnemyTank } from './tank';
import { createBrain } from './ai';
import { makeStructure } from './structure';
import { GRACE_TICKS, GUNFIRE_TICKS, MEMORY_TICKS, PROXIMITY } from './awareness';

function twoTanks(dist: number, kind: 'slow' | 'super' = 'slow') {
  const w = createWorld(1);
  const e = createEnemyTank(1, kind, 0, dist, Math.PI);
  e.spawnTick = -1000; // past grace
  w.tanks.push(e);
  w.brains.set(1, createBrain(kind));
  w.tanks[0].spawnTick = -1000;
  w.nextSpawnTick = 1e9;
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberTick = 1e9;
  return w;
}

describe('awareness rules (RADAR.md)', () => {
  it('proximity: enemies within 30 m are known continuously', () => {
    const w = twoTanks(PROXIMITY - 5);
    stepWorld(w);
    const k = w.awareness.get(0)?.get(1);
    expect(k?.source).toBe('proximity');
  });

  it('beyond 30 m with clear LOS: known by sight', () => {
    const w = twoTanks(60);
    for (let i = 0; i < 6; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.source).toBe('los');
  });

  it('cover blocks sight: no contact without LOS', () => {
    const w = twoTanks(60);
    w.structures.push(makeStructure(600, 'tower', 0, 30));
    stepWorld(w);
    expect(w.awareness.get(0)?.get(1)).toBeUndefined();
  });

  it('gunfire reveals the shooter through cover, then fades in 3 s', () => {
    const w = twoTanks(60, 'super');
    w.structures.push(makeStructure(600, 'tower', 0, 30));
    // enemy fires (force cooldown 0 + aim at player via brain? direct event path:
    // make the enemy shoot by giving it a known contact and LOS-free policy)
    w.awareness.set(1, new Map([[0, { x: 0, z: 0, heading: 0, turretYaw: 0, tick: w.tick, source: 'ping' }]]));
    let fired = false;
    for (let i = 0; i < 400 && !fired; i++) {
      stepWorld(w);
      fired = w.events.some((e) => e.kind === 'fire' && e.owner === 1);
    }
    expect(fired).toBe(true);
    const k = w.awareness.get(0)?.get(1);
    expect(k?.source).toBe('gunfire');
    const at = k!.tick;
    for (let i = 0; i < GUNFIRE_TICKS + 5; i++) stepWorld(w);
    const after = w.awareness.get(0)?.get(1);
    expect(after === undefined || after.tick > at).toBe(true);
  });

  it('memory: last-seen persists 5 s after LOS breaks, then drops', () => {
    const w = twoTanks(60);
    for (let i = 0; i < 6; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.source).toBe('los');
    // break LOS with a tower between them; the ghost must hold 5 s.
    // Freeze the enemy (no brain) so it cannot drive back into sight.
    w.structures.push(makeStructure(600, 'tower', 0, 30));
    w.brains.delete(1);
    const seen = w.awareness.get(0)!.get(1)!.tick;
    for (let i = 0; i < MEMORY_TICKS - 10; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.tick).toBe(seen); // ghost held
    for (let i = 0; i < 20; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)).toBeUndefined();
  });

  it('spawn grace: fresh spawns are invisible', () => {
    const w = twoTanks(20);
    w.tanks[1].spawnTick = w.tick; // fresh
    stepWorld(w);
    expect(w.awareness.get(0)?.get(1)).toBeUndefined();
    for (let i = 0; i < GRACE_TICKS + 2; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.source).toBe('proximity');
  });

  it('ion storm blinds: no new LOS contacts while active', () => {
    const w = twoTanks(60);
    w.stormUntil = 1000;
    stepWorld(w);
    expect(w.awareness.get(0)?.get(1)).toBeUndefined();
    w.stormUntil = 0;
    for (let i = 0; i < 6; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.source).toBe('los');
  });

  it('awareness records turret angle for radar orientation', () => {
    const w = twoTanks(20);
    w.tanks[1].turretYaw = 0.7;
    for (let i = 0; i < 6; i++) stepWorld(w);
    expect(w.awareness.get(0)?.get(1)?.turretYaw).toBeCloseTo(0.7);
  });
});