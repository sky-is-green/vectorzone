import { describe, expect, it } from 'vitest';
import { headingFromDir, projectRadar, radarPointer, relativeHeading } from './radar';

describe('radar projection + orientation', () => {
  it('forward contact points up', () => {
    const p = projectRadar(0, 60, 0);
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeLessThan(0);
  });

  it('right contact points right', () => {
    const p = projectRadar(60, 0, 0);
    expect(p.x).toBeGreaterThan(0);
    expect(p.y).toBeCloseTo(0);
  });

  it('rotates with own hull heading', () => {
    const p = projectRadar(60, 0, Math.PI / 2);
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeLessThan(0); // target is now ahead
  });

  it('clamps off-scope contacts to the rim', () => {
    const p = projectRadar(500, 500, 0, 200, 38);
    expect(Math.hypot(p.x, p.y)).toBeCloseTo(38);
    expect(p.clamped).toBe(true);
  });

  it('headings are relative and direction-derived', () => {
    expect(relativeHeading(Math.PI / 2, 0)).toBeCloseTo(Math.PI / 2);
    expect(headingFromDir(1, 0)).toBeCloseTo(Math.PI / 2);
    expect(headingFromDir(0, 1)).toBeCloseTo(0);
  });

  it('turret pointer follows yaw sign: left is left, right is right', () => {
    expect(radarPointer(-0.7, 10).x).toBeLessThan(0);
    expect(radarPointer(0.7, 10).x).toBeGreaterThan(0);
    expect(radarPointer(0, 10).x).toBeCloseTo(0);
    expect(radarPointer(0, 10).y).toBeLessThan(0);
  });
});