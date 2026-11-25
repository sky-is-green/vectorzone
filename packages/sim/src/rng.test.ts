import { describe, expect, it } from 'vitest';
import { createRng } from './rng';

describe('seeded rng', () => {
  it('same seed → identical sequence', () => {
    const a = createRng(12345);
    const b = createRng(12345);
    for (let i = 0; i < 1000; i++) expect(a.next()).toBe(b.next());
  });

  it('different seeds → different sequences', () => {
    const a = createRng(1);
    const b = createRng(2);
    const seqA = Array.from({ length: 10 }, () => a.next());
    const seqB = Array.from({ length: 10 }, () => b.next());
    expect(seqA).not.toEqual(seqB);
  });

  it('floats stay in [0, 1)', () => {
    const r = createRng(99);
    for (let i = 0; i < 10000; i++) {
      const v = r.next();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });

  it('int stays within inclusive bounds', () => {
    const r = createRng(7);
    for (let i = 0; i < 10000; i++) {
      const v = r.int(-3, 5);
      expect(v).toBeGreaterThanOrEqual(-3);
      expect(v).toBeLessThanOrEqual(5);
      expect(Number.isInteger(v)).toBe(true);
    }
  });
});