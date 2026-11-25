/**
 * Arena data (PLAN §6, ENVIRONMENTS §4): indestructible solids are block
 * grids too — one representation for everything. Maps are data, so M8's
 * presets and multiplayer maps are trivial.
 */
import { parseLayout, BLOCK_SIZE, type BlockGrid } from './grid';
import type { Tank } from './tank';

export interface Obstacle {
  kind: 'cube' | 'pyramid';
  x: number;
  z: number;
  half: number; // footprint half-extent, metres
  height: number; // metres
}

const CUBE_LAYERS: string[][] = [
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
];

const PYRAMID_LAYERS: string[][] = [
  [
    'HHHHHHHHH', 'HHHHHHHHH', 'HHHHHHHHH', 'HHHHHHHHH', 'HHHHHHHHH',
    'HHHHHHHHH', 'HHHHHHHHH', 'HHHHHHHHH', 'HHHHHHHHH',
  ],
  [
    '', '.HHHHHHH.', '.HHHHHHH.', '.HHHHHHH.', '.HHHHHHH.', '.HHHHHHH.',
    '.HHHHHHH.', '.HHHHHHH.', '',
  ],
  [
    '', '', '..HHHHH..', '..HHHHH..', '..HHHHH..', '..HHHHH..', '..HHHHH..',
    '', '',
  ],
  [
    '', '', '', '...HHH...', '...HHH...', '...HHH...', '', '', '',
  ],
  [
    '', '', '', '', '....H....', '', '', '', '',
  ],
];

export function obstacleGrid(kind: Obstacle['kind']): BlockGrid {
  return parseLayout(kind === 'cube' ? CUBE_LAYERS : PYRAMID_LAYERS);
}

export function makeObstacle(kind: Obstacle['kind'], x: number, z: number): Obstacle {
  const g = obstacleGrid(kind);
  return {
    kind,
    x,
    z,
    half: (g.size.x * BLOCK_SIZE) / 2,
    height: g.size.y * BLOCK_SIZE,
  };
}

/** Classic: sparse cubes & pyramids, faithful to 1980 (ENVIRONMENTS §6). */
export const CLASSIC_OBSTACLES: Obstacle[] = [
  makeObstacle('cube', 24, 30),
  makeObstacle('cube', -38, 12),
  makeObstacle('cube', 60, -45),
  makeObstacle('cube', -70, -60),
  makeObstacle('cube', 10, -90),
  makeObstacle('cube', 95, 70),
  makeObstacle('cube', -110, 85),
  makeObstacle('pyramid', -15, 55),
  makeObstacle('pyramid', 45, 80),
  makeObstacle('pyramid', -60, -20),
  makeObstacle('pyramid', 80, -10),
  makeObstacle('pyramid', -95, -105),
  makeObstacle('pyramid', 130, 20),
];

const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

/**
 * Tank (circle approx, radius = half length) vs obstacle AABBs.
 * Push out along the contact normal; scrape dampens speed.
 */
export function collideObstacles(t: Tank, obstacles: Obstacle[]): void {
  const r = (t.hull.size.z * BLOCK_SIZE) / 2;
  for (const o of obstacles) {
    const dx = t.x - o.x;
    const dz = t.z - o.z;
    const cx = clamp(dx, -o.half, o.half);
    const cz = clamp(dz, -o.half, o.half);
    const px = dx - cx;
    const pz = dz - cz;
    const d2 = px * px + pz * pz;
    if (d2 >= r * r) continue;
    if (d2 > 1e-9) {
      const d = Math.sqrt(d2);
      const push = r - d;
      t.x += (px / d) * push;
      t.z += (pz / d) * push;
    } else {
      // centre inside the box: eject along the shallowest axis
      const ox = o.half + r - Math.abs(dx);
      const oz = o.half + r - Math.abs(dz);
      if (ox < oz) t.x += dx >= 0 ? ox : -ox;
      else t.z += dz >= 0 ? oz : -oz;
    }
    t.speed *= 0.5;
  }
}