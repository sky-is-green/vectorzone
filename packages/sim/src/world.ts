import { createRng, type Rng } from './rng';
import { createTank, neutralCommand, stepTank, type Tank, type TankCommand } from './tank';
import { CLASSIC_OBSTACLES, type Obstacle } from './arena';

/**
 * The world: everything the sim owns. M1 = one drivable tank in a bounded
 * arena. Structures, shells, and events arrive in M2/M3/M5 — the shape
 * (create / step / hash) stays.
 */
export interface World {
  readonly seed: number;
  tick: number;
  rng: Rng;
  arenaHalf: number; // metres; arena is 2*arenaHalf square (PLAN: 400×400)
  obstacles: Obstacle[];
  tanks: Tank[];
}

/** The sim always runs at 60 Hz (invariant I2), regardless of display rate. */
export const TICK_RATE = 60;
export const TICK_DT = 1 / TICK_RATE;

export function createWorld(seed: number): World {
  return {
    seed,
    tick: 0,
    rng: createRng(seed),
    arenaHalf: 200,
    obstacles: CLASSIC_OBSTACLES,
    tanks: [createTank(0, 0, 0, 0)],
  };
}

/** Advance exactly one fixed tick. commands[i] drives tanks[i]. */
export function stepWorld(w: World, commands: TankCommand[] = []): void {
  w.tick += 1;
  for (let i = 0; i < w.tanks.length; i++) {
    stepTank(w.tanks[i], commands[i] ?? neutralCommand(), TICK_DT, w.arenaHalf, w.obstacles);
  }
}

/** Stable hash of world state — the determinism gate compares these. */
export function hashWorld(w: World): string {
  const parts: string[] = [`${w.seed}|${w.tick}|${w.rng.state()}`];
  for (const t of w.tanks) {
    parts.push(
      [t.id, t.x, t.z, t.heading, t.speed, t.turretYaw, t.gunPitch, t.hull.rev, t.turret.rev]
        .map((n) => n.toFixed(6))
        .join(','),
    );
  }
  const s = parts.join(';');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}