import { describe, expect, it } from 'vitest';
import { SOLID_PLACEMENTS, solidGrid } from './arena';
import { CLASSIC_STRUCTURES } from './structure';
import { createWorld, stepWorld } from './world';
import type { TankCommand } from './tank';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

describe('arena solids (all destructible, user direction 2026-11-25)', () => {
  it('classic layout places cubes & pyramids as structures', () => {
    expect(SOLID_PLACEMENTS.length).toBeGreaterThan(8);
    const cubes = CLASSIC_STRUCTURES.filter((s) => s.kind === 'cube');
    const pyrs = CLASSIC_STRUCTURES.filter((s) => s.kind === 'pyramid');
    expect(cubes.length).toBe(7);
    expect(pyrs.length).toBe(6);
    for (const s of [...cubes, ...pyrs]) {
      expect(s.grid.cells.some((c) => c)).toBe(true);
      expect(Math.abs(s.x)).toBeLessThan(190);
      expect(Math.abs(s.z)).toBeLessThan(190);
    }
  });

  it('solid grids are solid blocks', () => {
    expect(solidGrid('cube').size.y).toBe(6);
    expect(solidGrid('pyramid').size.y).toBe(5);
  });

  it('a tank plows through a classic cube, smashing it', () => {
    const w = createWorld(31);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    const cube = w.structures.find((s) => s.kind === 'cube' && s.x === 24 && s.z === 30)!;
    const before = cube.grid.cells.filter((c) => c).length;
    const t = w.tanks[0];
    t.x = 24;
    t.z = 20;
    t.heading = 0;
    for (let i = 0; i < 600; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(t.z).toBeGreaterThan(31); // passed through
    expect(cube.grid.cells.filter((c) => c).length).toBeLessThan(before);
  });

  it('shells tunnel a classic pyramid', () => {
    const w = createWorld(31);
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    const pyr = w.structures.find((s) => s.kind === 'pyramid' && s.x === -15 && s.z === 55)!;
    const before = pyr.grid.cells.filter((c) => c).length;
    w.shells.push({ id: 900, owner: -1, pos: [-15, 0.45, 45], dir: [0, 0, 1], budget: 40, alive: true });
    for (let i = 0; i < 20; i++) stepWorld(w, [N]);
    expect(pyr.grid.cells.filter((c) => c).length).toBeLessThan(before);
  });
});