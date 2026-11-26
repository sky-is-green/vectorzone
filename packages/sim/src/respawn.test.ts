import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { RESPAWN_TICKS, type SimEvent } from '@vectorzone/sim';
import type { TankCommand } from '@vectorzone/sim';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function deadWorld() {
  const w = createWorld(22);
  w.nextSpawnTick = 1e9;
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberTick = 1e9;
  w.tanks[0].alive = false;
  w.respawnTick = w.tick + RESPAWN_TICKS;
  return w;
}

describe('manual respawn after delay', () => {
  it('stays dead after the timer until a fresh fire press arrives', () => {
    const w = deadWorld();
    for (let i = 0; i < RESPAWN_TICKS + 20; i++) stepWorld(w, [N]);
    expect(w.tanks[0].alive).toBe(false);
    expect(w.respawnTick).toBeGreaterThan(0);

    stepWorld(w, [{ ...N, fire: true }]); // held button is not a fresh press
    expect(w.tanks[0].alive).toBe(false);

    stepWorld(w, [{ ...N, fire: true, firePressed: true }]);
    expect(w.tanks[0].alive).toBe(true);
    expect(w.respawnTick).toBe(0);
  });

  it('ignores a press before the delay expires', () => {
    const w = deadWorld();
    stepWorld(w, [{ ...N, firePressed: true }]);
    expect(w.tanks[0].alive).toBe(false);
    for (let i = 0; i < RESPAWN_TICKS; i++) stepWorld(w, [N]);
    expect(w.tanks[0].alive).toBe(false);
  });

  it('respawn emits no extra death event and restores a fresh tank', () => {
    const w = deadWorld();
    const events: SimEvent[] = [];
    for (let i = 0; i < RESPAWN_TICKS; i++) stepWorld(w, [N]);
    stepWorld(w, [{ ...N, firePressed: true }]);
    events.push(...w.events);
    expect(w.tanks[0].alive).toBe(true);
    expect(w.tanks[0].spawnTick).toBe(w.tick);
    expect(events.some((e) => e.kind === 'tankKilled')).toBe(false);
  });
});