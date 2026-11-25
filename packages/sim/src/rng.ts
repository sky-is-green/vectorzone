/**
 * Seeded PRNG (mulberry32). ALL sim randomness flows through this (invariant I3).
 * Same seed → same sequence, on every machine. That is what makes
 * determinism tests, prediction, and host-authoritative multiplayer possible.
 */
export interface Rng {
  /** Next float in [0, 1). */
  next(): number;
  /** Integer in [min, max], inclusive. */
  int(min: number, max: number): number;
  /** Internal state — included in world hashes. */
  state(): number;
}

export function createRng(seed: number): Rng {
  let s = seed >>> 0;
  const next = (): number => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    next,
    int: (min, max) => min + Math.floor(next() * (max - min + 1)),
    state: () => s,
  };
}