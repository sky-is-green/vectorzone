/**
 * Energy fences (ENVIRONMENTS §4.3): a shimmering curtain between two pylon
 * structures. Blocks shells and tanks while BOTH pylons stand; destroying
 * either pylon drops the segment. The fence itself is energy, not blocks —
 * the pylons are the destructible part.
 */
import type { World } from './world';
import type { V3 } from './raycast';

export interface Fence {
  id: number;
  ax: number;
  az: number;
  bx: number;
  bz: number;
  pylonA: number;
  pylonB: number;
  height: number;
}

export const CLASSIC_FENCES: Fence[] = [
  { id: 300, ax: -6, az: 70, bx: 6, bz: 70, pylonA: 106, pylonB: 107, height: 2.4 },
];

export function fenceAlive(w: World, f: Fence): boolean {
  const a = w.structures.find((s) => s.id === f.pylonA);
  const b = w.structures.find((s) => s.id === f.pylonB);
  return !!a && !!b && a.grid.cells.some((c) => c) && b.grid.cells.some((c) => c);
}

/** 2D segment intersection; returns t along p->p+d or null. */
export function fenceHitT(
  f: Fence,
  p: V3,
  d: V3,
  len: number,
): number | null {
  if (p[1] > f.height || p[1] + d[1] * len < 0) return null;
  const rx = f.bx - f.ax;
  const rz = f.bz - f.az;
  const denom = d[0] * rz - d[2] * rx;
  if (Math.abs(denom) < 1e-9) return null;
  const qx = f.ax - p[0];
  const qz = f.az - p[2];
  const t = (qx * rz - qz * rx) / denom;
  const u = (qx * d[2] - qz * d[0]) / denom;
  if (t < 0 || t > len || u < 0 || u > 1) return null;
  return t;
}

/** Circle (tank) vs fence segment: push-out distance along normal, or 0. */
export function fencePush(f: Fence, x: number, z: number, r: number): { x: number; z: number } | null {
  const rx = f.bx - f.ax;
  const rz = f.bz - f.az;
  const L2 = rx * rx + rz * rz;
  let u = ((x - f.ax) * rx + (z - f.az) * rz) / L2;
  u = Math.max(0, Math.min(1, u));
  const cx = f.ax + rx * u;
  const cz = f.az + rz * u;
  const dx = x - cx;
  const dz = z - cz;
  const d = Math.hypot(dx, dz);
  if (d >= r || d < 1e-9) return null;
  const push = (r - d) / d;
  return { x: dx * push, z: dz * push };
}