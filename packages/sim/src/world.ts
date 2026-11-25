import { createRng, type Rng } from './rng';

/**
 * M0 world: a minimal deterministic state used to prove the fixed-tick
 * loop and the determinism harness. M1 replaces this with the real
 * block-grid world; the shape (create / step / hash) stays.
 */
export interface World {
  readonly seed: number;
  tick: number;
  /** Deterministic drifting value in [0, 1) — the M0 state we hash. */
  probe: number;
  rng: Rng;
}

/** The sim always runs at 60 Hz (invariant I2), regardless of display rate. */
export const TICK_RATE = 60;
export const TICK_DT = 1 / TICK_RATE;

export function createWorld(seed: number): World {
  return { seed, tick: 0, probe: 0.5, rng: createRng(seed) };
}

/** Advance the world by exactly one fixed tick. */
export function stepWorld(w: World): void {
  w.tick += 1;
  w.probe = w.rng.next();
}

/** Stable hash of world state — the determinism gate compares these. */
export function hashWorld(w: World): string {
  const s = `${w.seed}|${w.tick}|${w.probe}|${w.rng.state()}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}