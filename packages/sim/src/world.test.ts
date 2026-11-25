import { describe, expect, it } from 'vitest';
import { createWorld, hashWorld, stepWorld } from './world';

/**
 * The determinism gate (BUILD.md §3.1): same seed + same number of ticks
 * must produce bit-identical state. Every future sim feature inherits this
 * test pattern — it is what keeps prediction/reconciliation honest.
 */
describe('world determinism', () => {
  it('same seed + same ticks → identical hash', () => {
    const a = createWorld(0xc0ffee);
    const b = createWorld(0xc0ffee);
    for (let i = 0; i < 5000; i++) {
      stepWorld(a);
      stepWorld(b);
    }
    expect(hashWorld(a)).toBe(hashWorld(b));
    expect(a.tick).toBe(5000);
  });

  it('different seeds → different hashes', () => {
    const a = createWorld(1);
    const b = createWorld(2);
    for (let i = 0; i < 100; i++) {
      stepWorld(a);
      stepWorld(b);
    }
    expect(hashWorld(a)).not.toBe(hashWorld(b));
  });

  it('tick count advances exactly once per step', () => {
    const w = createWorld(42);
    expect(w.tick).toBe(0);
    stepWorld(w);
    stepWorld(w);
    expect(w.tick).toBe(2);
  });
});