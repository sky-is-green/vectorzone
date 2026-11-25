import { describe, expect, it } from 'vitest';
import { countType, getCell } from './grid';
import {
  createTank,
  GUN_PITCH_MAX,
  GUN_PITCH_MIN,
  neutralCommand,
  stepTank,
  type TankCommand,
} from './tank';
import { TICK_DT } from './world';

const cmd = (over: Partial<TankCommand> = {}): TankCommand => ({
  ...neutralCommand(),
  ...over,
});

describe('tank layout & stats', () => {
  it('canonical layout has the required parts', () => {
    const t = createTank(0, 0, 0, 0);
    expect(countType(t.hull, 'core')).toBeGreaterThan(0);
    expect(countType(t.hull, 'tread')).toBeGreaterThan(0);
    expect(countType(t.hull, 'engine')).toBeGreaterThan(0);
    expect(countType(t.turret, 'gun')).toBeGreaterThan(0);
    expect(t.stats.topSpeed).toBeGreaterThan(0);
    expect(t.stats.turnRate).toBeGreaterThan(0);
  });

  it('turret pivot sits on the hull deck', () => {
    const t = createTank(0, 0, 0, 0);
    expect(t.turretPivot.y).toBeCloseTo(t.hull.size.y * 0.3);
    // deck cell under the pivot exists
    expect(getCell(t.hull, 3, 2, 6)).not.toBeNull();
  });
});

describe('tank kinematics', () => {
  it('throttle accelerates along heading (+Z at heading 0)', () => {
    const t = createTank(0, 0, 0, 0);
    for (let i = 0; i < 120; i++) stepTank(t, cmd({ throttle: 1 }), TICK_DT, 200);
    expect(t.speed).toBeGreaterThan(0);
    expect(t.z).toBeGreaterThan(1);
    expect(Math.abs(t.x)).toBeLessThan(1e-9);
  });

  it('turn rotates the hull; turret yaw is independent', () => {
    const t = createTank(0, 0, 0, 0);
    for (let i = 0; i < 60; i++) stepTank(t, cmd({ turn: 1 }), TICK_DT, 200);
    expect(t.heading).toBeGreaterThan(0.5);
    expect(t.turretYaw).toBe(0);
    for (let i = 0; i < 60; i++) stepTank(t, cmd({ turretYaw: 1 }), TICK_DT, 200);
    expect(t.turretYaw).toBeGreaterThan(0.5);
  });

  it('gun pitch clamps to its limits', () => {
    const t = createTank(0, 0, 0, 0);
    for (let i = 0; i < 600; i++) stepTank(t, cmd({ gunPitch: 1 }), TICK_DT, 200);
    expect(t.gunPitch).toBeCloseTo(GUN_PITCH_MAX);
    for (let i = 0; i < 1200; i++) stepTank(t, cmd({ gunPitch: -1 }), TICK_DT, 200);
    expect(t.gunPitch).toBeCloseTo(GUN_PITCH_MIN);
  });

  it('arena bounds clamp position', () => {
    const t = createTank(0, 199, 0, Math.PI / 2); // facing +X at the wall
    for (let i = 0; i < 600; i++) stepTank(t, cmd({ throttle: 1 }), TICK_DT, 200);
    expect(t.x).toBeLessThanOrEqual(198.5);
  });

  it('reverse works', () => {
    const t = createTank(0, 0, 0, 0);
    for (let i = 0; i < 120; i++) stepTank(t, cmd({ throttle: -1 }), TICK_DT, 200);
    expect(t.z).toBeLessThan(-1);
  });
});