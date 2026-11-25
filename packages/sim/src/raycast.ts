/**
 * Voxel DDA raycast (Amanatides & Woo) against a block grid — the same
 * traversal shells use for penetration (PLAN §5.2). Grid-local metres:
 * x/z centred on the grid, y from 0. Returns occupied cells in order with
 * entry distance t (metres along dir). Axis-aligned rays are first-class.
 */
import { BLOCK_SIZE, getCell, inBounds, type BlockGrid } from './grid';

export type V3 = [number, number, number];

export interface GridHit {
  cell: V3;
  t: number;
}

export function raycastGrid(g: BlockGrid, o: V3, d: V3, maxT: number): GridHit[] {
  const bs = BLOCK_SIZE;
  const u: V3 = [o[0] / bs + g.size.x / 2, o[1] / bs, o[2] / bs + g.size.z / 2];
  const dc: V3 = [d[0] / bs, d[1] / bs, d[2] / bs];
  if (dc[0] === 0 && dc[1] === 0 && dc[2] === 0) return [];
  const cell: V3 = [Math.floor(u[0]), Math.floor(u[1]), Math.floor(u[2])];
  const step: V3 = [
    dc[0] > 0 ? 1 : dc[0] < 0 ? -1 : 0,
    dc[1] > 0 ? 1 : dc[1] < 0 ? -1 : 0,
    dc[2] > 0 ? 1 : dc[2] < 0 ? -1 : 0,
  ];
  const tDelta: V3 = [
    dc[0] !== 0 ? Math.abs(1 / dc[0]) : Infinity,
    dc[1] !== 0 ? Math.abs(1 / dc[1]) : Infinity,
    dc[2] !== 0 ? Math.abs(1 / dc[2]) : Infinity,
  ];
  const tMax: V3 = [0, 1, 2].map((i) => {
    if (dc[i] === 0) return Infinity;
    const next = step[i] > 0 ? cell[i] + 1 : cell[i];
    return (next - u[i]) / dc[i];
  }) as V3;

  const hits: GridHit[] = [];
  let t = 0;
  for (let iter = 0; iter < 1024; iter++) {
    if (t > maxT) break;
    if (inBounds(g, cell[0], cell[1], cell[2]) && getCell(g, cell[0], cell[1], cell[2])) {
      hits.push({ cell: [cell[0], cell[1], cell[2]], t });
    }
    const i = tMax[0] <= tMax[1] ? (tMax[0] <= tMax[2] ? 0 : 2) : tMax[1] <= tMax[2] ? 1 : 2;
    t = tMax[i];
    cell[i] += step[i];
    tMax[i] += tDelta[i];
  }
  return hits;
}