import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { makeStructure } from './structure';
import { getCell } from './grid';
import { MATCH_TICKS } from './combat';
import type { TankCommand } from './tank';
import type { Shell } from './combat';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

describe('ramming & shot-blocking (user direction 2026-11-25)', () => {
  it('a tank plows THROUGH a destructible wall, smashing blocks', () => {
    const w = createWorld(21);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    const s = makeStructure(700, 'wall', 0, 20);
    w.structures.push(s);
    const t = w.tanks[0];
    t.heading = 0;
    t.x = 1.2; // graze the right half; left half must survive
    for (let i = 0; i < 600; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(t.z).toBeGreaterThan(22); // passed through, not stopped
    // the path it plowed is gone
    const cx = Math.floor((t.x - s.x) / 0.3 + s.grid.size.x / 2);
    expect(getCell(s.grid, Math.max(0, Math.min(9, cx)), 0, 0)).toBeNull();
    expect(getCell(s.grid, 0, 0, 0)).not.toBeNull(); // untouched half stands
  });

  it('indestructible solids still hard-stop a tank', () => {
    const w = createWorld(21);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    // cube obstacle at (24,30) from CLASSIC_OBSTACLES
    const t = w.tanks[0];
    t.x = 24;
    t.z = 10;
    t.heading = 0;
    for (let i = 0; i < 600; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(t.z).toBeLessThan(28);
  });

  it('indestructible solids block shells', () => {
    const w = createWorld(21);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    const sh: Shell = { id: 900, owner: -1, pos: [24, 0.5, 10], dir: [0, 0, 1], budget: 40, alive: true };
    w.shells.push(sh);
    let impact = false;
    for (let i = 0; i < 30; i++) {
      stepWorld(w, [N]);
      impact ||= w.events.some((e) => e.kind === 'shellImpact');
    }
    expect(impact).toBe(true);
    expect(w.shells.length).toBe(0);
  });

  it('match end freezes the world', () => {
    const w = createWorld(21);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    w.tick = MATCH_TICKS - 1;
    stepWorld(w, [N]);
    expect(w.phase).toBe('over');
    const frozen = w.tick;
    for (let i = 0; i < 60; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(w.tick).toBe(frozen);
    expect(w.tanks[0].z).toBe(0);
  });
});