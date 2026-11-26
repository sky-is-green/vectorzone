import { describe, expect, it } from 'vitest';
import { explosionShake, impactShake } from './feedback';

describe('screen-shake feedback', () => {
  it('distant explosions never shake', () => {
    expect(explosionShake(100, 7, 'volcano')).toBe(0);
    expect(explosionShake(50, 2, 'bomb')).toBe(0);
  });

  it('close explosions shake proportionally', () => {
    const near = explosionShake(2, 7, 'volcano');
    const far = explosionShake(15, 7, 'volcano');
    expect(near).toBeGreaterThan(far);
    expect(far).toBeGreaterThan(0);
  });

  it('airbursts do not shake the ground camera', () => {
    expect(explosionShake(0, 3, 'airburst')).toBe(0);
  });

  it('direct impacts shake only within 5 m', () => {
    expect(impactShake(1)).toBeGreaterThan(0);
    expect(impactShake(10)).toBe(0);
  });
});