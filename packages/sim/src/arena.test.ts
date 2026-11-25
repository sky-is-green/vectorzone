import { describe, expect, it } from 'vitest';
import { CLASSIC_OBSTACLES, collideObstacles, makeObstacle, obstacleGrid } from './arena';
import { createTank, neutralCommand, stepTank, type TankCommand } from './tank';
import { TICK_DT } from './world';

const cmd = (over: Partial<TankCommand> = {}): TankCommand => ({
  ...neutralCommand(),
  ...over,
});

describe('arena obstacles', () => {
  it('classic layout is sparse solids with sane footprints', () => {
    expect(CLASSIC_OBSTACLES.length).toBeGreaterThan(8);
    for (const o of CLASSIC_OBSTACLES) {
      expect(o.half).toBeGreaterThan(0);
      expect(o.height).toBeGreaterThan(0);
      expect(Math.abs(o.x)).toBeLessThan(190);
      expect(Math.abs(o.z)).toBeLessThan(190);
    }
  });

  it('obstacle grids are solid blocks', () => {
    const cube = obstacleGrid('cube');
    const pyr = obstacleGrid('pyramid');
    expect(cube.size.y).toBe(6);
    expect(pyr.size.y).toBe(5);
  });

  it('a tank driving into a cube is stopped outside its footprint', () => {
    const o = makeObstacle('cube', 0, 20);
    const t = createTank(0, 0, 0, 0); // facing +Z, straight at the cube
    for (let i = 0; i < 600; i++) stepTank(t, cmd({ throttle: 1 }), TICK_DT, 200, [o]);
    const r = (t.hull.size.z * 0.3) / 2;
    expect(t.z).toBeLessThanOrEqual(20 - o.half - r + 1e-6);
    expect(t.z).toBeGreaterThan(20 - o.half - r - 0.5); // resting against it
  });

  it('push-out ejects a tank spawned inside an obstacle', () => {
    const o = makeObstacle('cube', 0, 0);
    const t = createTank(0, 0.2, 0.1, 0);
    collideObstacles(t, [o]);
    const r = (t.hull.size.z * 0.3) / 2;
    const dx = t.x - o.x;
    const dz = t.z - o.z;
    const cx = Math.max(-o.half, Math.min(o.half, dx));
    const cz = Math.max(-o.half, Math.min(o.half, dz));
    expect(Math.hypot(dx - cx, dz - cz)).toBeGreaterThanOrEqual(r - 1e-6);
  });

  it('open ground is unaffected', () => {
    const t = createTank(0, 0, 0, 0);
    for (let i = 0; i < 120; i++) stepTank(t, cmd({ throttle: 1 }), TICK_DT, 200, CLASSIC_OBSTACLES);
    expect(t.z).toBeGreaterThan(1);
  });
});