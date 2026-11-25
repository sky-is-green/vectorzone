import { describe, expect, it } from 'vitest';
import { createWorld, hashWorld, stepWorld } from './world';
import { neutralCommand, type TankCommand } from './tank';

/**
 * The determinism gate (BUILD.md §3.1): same seed + same command stream →
 * bit-identical state. This is what keeps prediction/reconciliation honest.
 */
const cmd = (over: Partial<TankCommand> = {}): TankCommand => ({
  ...neutralCommand(),
  ...over,
});

function run(seed: number, commands: TankCommand[], ticks: number) {
  const w = createWorld(seed);
  for (let i = 0; i < ticks; i++) stepWorld(w, [commands[i % commands.length]]);
  return w;
}

describe('world determinism', () => {
  it('same seed + same commands → identical hash', () => {
    const script = [cmd({ throttle: 1 }), cmd({ turn: 1, turretYaw: -1 }), cmd({ gunPitch: 1 })];
    const a = run(0xc0ffee, script, 3000);
    const b = run(0xc0ffee, script, 3000);
    expect(hashWorld(a)).toBe(hashWorld(b));
    expect(a.tick).toBe(3000);
  });

  it('different commands → different hashes', () => {
    const a = run(1, [cmd({ throttle: 1 })], 600);
    const b = run(1, [cmd({ throttle: -1 })], 600);
    expect(hashWorld(a)).not.toBe(hashWorld(b));
  });

  it('different seeds → different hashes (rng state is part of the hash)', () => {
    const a = run(1, [cmd()], 100);
    const b = run(2, [cmd()], 100);
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