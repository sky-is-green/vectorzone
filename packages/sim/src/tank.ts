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
import type { V3 } from './raycast';

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
  alive: boolean;
  cooldown: number; // s until next shot
  spawnTick: number; // for spawn grace
  selfDestructTick: number | null; // armed when all gun blocks are gone
}

/**
 * Light A2 — Low Wedge (chosen 2026-11-26). 11×3×10 hull with an open
 * under-hull, separate track pods, raised central deck, and sharp glacis.
 */
export const PLAYER_HULL_LAYERS: string[][] = [
  // y = 0: track pods only — open space under the hull
  Array(10).fill('TT.......TT'),
  // y = 1: hull + tracks, stepped nose
  [
    'TTHHEEEHHTT', 'TTHHHHHHHHT', 'TTHHHHHHHHT', 'TTHHHHHHHHT', 'TTHHHHHHHHT',
    'TTHHHHHHHHT', 'TTHHHHHHHHT', 'TTHHHHHHHHT', 'TT.HHHHH.TT', 'TT..HHH..TT',
  ],
  // y = 2: raised central deck + core, wedge front
  [
    '...........', '.TTHHHHHTT.', '.TTHHHHHTT.', '.TTHHCHHTT.', '.TTHHCHHTT.',
    '.TTHHHHHTT.', '.TT.HHH.TT.', '.TT..H..TT.', '...........', '...........',
  ],
];

/** Light A2 turret: compact angular basket, mantlet, and long barrel. */
export const PLAYER_TURRET_LAYERS: string[][] = [
  ['.HHH.', 'HHHHH', 'HHGHH', '.GGG.', '.GGG.', '.GGG.'],
  ['.....', '.HHH.', '.HHH.', '..G..', '..G..', '..G..'],
];

export const GUN_PITCH_MIN = -0.09; // ~ -5°
export const GUN_PITCH_MAX = 1.05; // ~ +60° (anti-air: the bomber must be shootable)
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
    turnRate: 1.8 * clamp(treads / 72, 0.5, 1.5),
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
    alive: true,
    cooldown: 0,
    spawnTick: 0,
    selfDestructTick: null,
  };
}

/** Light tanks use the chosen Light A2 silhouette with slower tuning. */
const SLOW_HULL: string[][] = PLAYER_HULL_LAYERS;
const SLOW_TURRET: string[][] = PLAYER_TURRET_LAYERS;

/** Super C2 — Siege Wedge (chosen 2026-11-26): 13×3×14 heavy hull. */
const SUPER_HULL: string[][] = [
  Array(14).fill('TT.........TT'),
  [
    'TTHHEEEEEHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT',
    'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT', 'TTHHHHHHHHHTT',
    'TTHHHHHHHHHTT', 'TT.HHHHHHH.TT', 'TT..HHHHH..TT', 'TT...HHH...TT',
  ],
  [
    '.............', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.',
    '.TTHHHHHHHTT.', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.', '.TTHHHHHHHTT.',
    '.TT.HHHHH.TT.', '.TT..HHH..TT.', '.TT...H...TT.', '.............',
  ],
];

const SUPER_TURRET: string[][] = [
  ['.HHHH.', 'HHHHHH', 'HHGGHH', '.HGGH.', '.GGGG.', '.GGGG.', '.GGGG.', '.GGGG.', '.GGGG.'],
  ['......', '.HHHH.', '.HGGH.', '..GG..', '..GG..', '..GG..', '..GG..', '..GG..', '..GG..'],
];

export function createEnemyTank(
  id: number,
  kind: 'slow' | 'super',
  x: number,
  z: number,
  heading: number,
): Tank {
  const hull = parseLayout(kind === 'slow' ? SLOW_HULL : SUPER_HULL);
  const turret = parseLayout(kind === 'slow' ? SLOW_TURRET : SUPER_TURRET);
  const stats = computeStats(hull, turret);
  const mul = kind === 'slow' ? 0.5 : 1.2;
  stats.topSpeed *= mul;
  stats.accel = stats.topSpeed / 2.5;
  stats.turretSlew = kind === 'slow' ? 0.785 : 2.094;
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
    stats,
    turretPivot: { x: 0, y: hull.size.y * BLOCK_SIZE, z: 0.3 },
    alive: true,
    cooldown: 0,
    spawnTick: 0,
    selfDestructTick: null,
  };
}

// --- frame transforms (grid-local metres <-> world) -------------------------
// hull local: x/z centred, y from 0. heading positive-left, forward +Z.

export function hullToWorld(t: Tank, l: V3): V3 {
  const c = Math.cos(t.heading);
  const s = Math.sin(t.heading);
  return [t.x + l[0] * c + l[2] * s, l[1], t.z - l[0] * s + l[2] * c];
}

export function worldToHull(t: Tank, p: V3): V3 {
  const c = Math.cos(t.heading);
  const s = Math.sin(t.heading);
  const dx = p[0] - t.x;
  const dz = p[2] - t.z;
  return [dx * c - dz * s, p[1], dx * s + dz * c];
}

/** turret local -> world: Rx(-pitch), Ry(turretYaw), +pivot, Ry(heading), +pos */
export function turretToWorld(t: Tank, l: V3): V3 {
  const cp = Math.cos(t.gunPitch);
  const sp = Math.sin(t.gunPitch);
  const y1 = l[1] * cp + l[2] * sp;
  const z1 = -l[1] * sp + l[2] * cp;
  const cy = Math.cos(t.turretYaw);
  const sy = Math.sin(t.turretYaw);
  const x2 = l[0] * cy + z1 * sy;
  const z2 = -l[0] * sy + z1 * cy;
  return hullToWorld(t, [x2 + t.turretPivot.x, y1 + t.turretPivot.y, z2 + t.turretPivot.z]);
}

export function worldToTurret(t: Tank, p: V3): V3 {
  const h = worldToHull(t, p);
  const lx = h[0] - t.turretPivot.x;
  const ly = h[1] - t.turretPivot.y;
  const lz = h[2] - t.turretPivot.z;
  const cy = Math.cos(t.turretYaw);
  const sy = Math.sin(t.turretYaw);
  const x1 = lx * cy - lz * sy;
  const z1 = lx * sy + lz * cy;
  const cp = Math.cos(t.gunPitch);
  const sp = Math.sin(t.gunPitch);
  return [x1, ly * cp - z1 * sp, ly * sp + z1 * cp];
}

/** World-space gun axis (matches the rigid camera mount). */
export function turretForward(t: Tank): V3 {
  const yaw = t.heading + t.turretYaw;
  const cp = Math.cos(t.gunPitch);
  return [cp * Math.sin(yaw), Math.sin(t.gunPitch), cp * Math.cos(yaw)];
}

/** One fixed tick of tank kinematics. Pure data in, pure data out. */
export function stepTank(
  t: Tank,
  cmd: TankCommand,
  dt: number,
  arenaHalf: number,
): void {
  const target = clamp(cmd.throttle, -1, 1) * t.stats.topSpeed;
  const maxDv = t.stats.accel * dt;
  t.speed += clamp(target - t.speed, -maxDv, maxDv);

  t.heading += clamp(cmd.turn, -1, 1) * t.stats.turnRate * dt;
  t.x += Math.sin(t.heading) * t.speed * dt;
  t.z += Math.cos(t.heading) * t.speed * dt;

  // arena bounds
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