/**
 * Tanks: hand-authored block layouts + fixed-tick kinematics (PLAN §5, §7).
 * The turret is an independently rotating sub-grid; the camera rides it.
 * Forward is local +Z; heading/turretYaw are positive-left (CCW from above).
 */
import {
  BLOCK_MASS,
  BLOCK_SIZE,
  countBlocks,
  countType,
  parseLayout,
  type BlockGrid,
} from './grid';

export interface TankCommand {
  throttle: number; // [-1, 1]
  turn: number; // [-1, 1] hull yaw rate
  turretYaw: number; // [-1, 1] turret slew rate
  gunPitch: number; // [-1, 1] elevation rate
  fire: boolean;
}

export const neutralCommand = (): TankCommand => ({
  throttle: 0,
  turn: 0,
  turretYaw: 0,
  gunPitch: 0,
  fire: false,
});

export interface TankStats {
  mass: number;
  topSpeed: number; // m/s
  accel: number; // m/s^2
  turnRate: number; // rad/s
  turretSlew: number; // rad/s
}

export interface Tank {
  id: number;
  hull: BlockGrid;
  turret: BlockGrid;
  x: number;
  z: number;
  heading: number;
  speed: number;
  turretYaw: number; // relative to hull
  gunPitch: number; // radians, + = up
  stats: TankStats;
  /** Turret mount point in hull-local metres. */
  turretPivot: { x: number; y: number; z: number };
}

/**
 * Canonical player tank (PLAN §5.1): 8 wide × 3 tall × 12 long hull,
 * treads on both flanks, engine at the rear, core mid-deck.
 */
export const PLAYER_HULL_LAYERS: string[][] = [
  // y = 0: tread rows + floor
  [
    'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT',
    'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT', 'THHHHHHT',
  ],
  // y = 1: body, engine at rear centre
  [
    'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH',
    'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHEEHHH', 'HHHEEHHH',
  ],
  // y = 2: deck, core mid-centre
  [
    '........', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHCCHHH', 'HHHCCHHH',
    'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', 'HHHHHHHH', '........',
  ],
];

/** Turret sub-grid: 4 × 2 × 6, barrel forward (+z). */
export const PLAYER_TURRET_LAYERS: string[][] = [
  [
    '.GG.', '.GG.', 'HGGH', 'HHHH', 'HHHH', 'HHHH',
  ],
  [
    '....', '....', '.HH.', '.HH.', '.HH.', '.HH.',
  ],
];

export const GUN_PITCH_MIN = -0.09; // ~ -5°
export const GUN_PITCH_MAX = 0.61; // ~ +35°
const GUN_PITCH_RATE = 1.4; // rad/s

const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

/** Layout = stats (PLAN §5.1): mass → speed/accel, tread count → turn rate. */
export function computeStats(hull: BlockGrid, turret: BlockGrid): TankStats {
  let mass = 0;
  for (const g of [hull, turret]) {
    for (const c of g.cells) if (c) mass += BLOCK_MASS[c.type];
  }
  const topSpeed = 90 / Math.sqrt(mass);
  const treads = countType(hull, 'tread');
  return {
    mass,
    topSpeed,
    accel: topSpeed / 2.5,
    turnRate: 1.8 * clamp(treads / 24, 0.5, 1.5),
    turretSlew: 2.2,
  };
}

export function createTank(id: number, x: number, z: number, heading: number): Tank {
  const hull = parseLayout(PLAYER_HULL_LAYERS);
  const turret = parseLayout(PLAYER_TURRET_LAYERS);
  return {
    id,
    hull,
    turret,
    x,
    z,
    heading,
    speed: 0,
    turretYaw: 0,
    gunPitch: 0,
    stats: computeStats(hull, turret),
    turretPivot: { x: 0, y: hull.size.y * BLOCK_SIZE, z: 0.3 },
  };
}

/** One fixed tick of tank kinematics. Pure data in, pure data out. */
export function stepTank(t: Tank, cmd: TankCommand, dt: number, arenaHalf: number): void {
  const target = clamp(cmd.throttle, -1, 1) * t.stats.topSpeed;
  const maxDv = t.stats.accel * dt;
  t.speed += clamp(target - t.speed, -maxDv, maxDv);

  t.heading += clamp(cmd.turn, -1, 1) * t.stats.turnRate * dt;
  t.x += Math.sin(t.heading) * t.speed * dt;
  t.z += Math.cos(t.heading) * t.speed * dt;

  // arena bounds (M1: clamp; M2 adds obstacle collision)
  const lim = arenaHalf - 1.5;
  t.x = clamp(t.x, -lim, lim);
  t.z = clamp(t.z, -lim, lim);

  t.turretYaw += clamp(cmd.turretYaw, -1, 1) * t.stats.turretSlew * dt;
  t.gunPitch = clamp(
    t.gunPitch + clamp(cmd.gunPitch, -1, 1) * GUN_PITCH_RATE * dt,
    GUN_PITCH_MIN,
    GUN_PITCH_MAX,
  );
  // cmd.fire is captured but inert until M3.
}

export { countBlocks };