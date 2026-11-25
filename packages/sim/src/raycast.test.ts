import { describe, expect, it } from 'vitest';
import { createGrid, setCell } from './grid';
import { raycastGrid } from './raycast';

const solid = (sx: number, sy: number, sz: number) => {
  const g = createGrid({ x: sx, y: sy, z: sz });
  for (let z = 0; z < sz; z++)
    for (let y = 0; y < sy; y++)
      for (let x = 0; x < sx; x++) setCell(g, x, y, z, { type: 'hull', hp: 3 });
  return g;
};

describe('voxel DDA raycast', () => {
  it('axis-aligned ray hits every cell along its line', () => {
    const g = solid(1, 1, 6);
    const hits = raycastGrid(g, [0, 0.15, -2], [0, 0, 1], 10);
    expect(hits.map((h) => h.cell[2])).toEqual([0, 1, 2, 3, 4, 5]);
    expect(hits[0].t).toBeCloseTo(1.1, 5); // grid is centred: first face at -0.9
  });

  it('axis-aligned X and Y rays work too', () => {
    const g = solid(4, 3, 1);
    const hx = raycastGrid(g, [-2, 0.45, 0], [1, 0, 0], 10);
    expect(hx.length).toBe(4);
    const hy = raycastGrid(g, [0.15, -1, 0], [0, 1, 0], 10);
    expect(hy.length).toBe(3);
  });

  it('diagonal ray crosses a solid block wall', () => {
    const g = solid(4, 4, 1);
    const hits = raycastGrid(g, [-1, 0.6, -1], [0.6, 0, 0.8], 10);
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits) expect(h.cell[2]).toBe(0);
  });

  it('origin exactly on a cell boundary does not skip or double-hit', () => {
    const g = solid(1, 1, 4);
    const hits = raycastGrid(g, [0, 0.15, 0], [0, 0, 1], 10);
    expect(hits.map((h) => h.cell[2])).toEqual([2, 3]); // boundary = start of cell 2
  });

  it('misses return empty; maxT truncates', () => {
    const g = solid(2, 2, 2);
    expect(raycastGrid(g, [5, 5, 5], [0, 0, 1], 10)).toEqual([]);
    const hits = raycastGrid(g, [0.15, 0.15, -3], [0, 0, 1], 2.9);
    expect(hits.length).toBe(1); // first face at 2.7, second at 3.0
  });

  it('zero direction is safe', () => {
    const g = solid(2, 2, 2);
    expect(raycastGrid(g, [0, 0, 0], [0, 0, 0], 10)).toEqual([]);
  });

  it('empty cells are skipped, holes are visible to the ray', () => {
    const g = solid(1, 1, 5);
    setCell(g, 0, 0, 2, null);
    const hits = raycastGrid(g, [0, 0.15, -2], [0, 0, 1], 10);
    expect(hits.map((h) => h.cell[2])).toEqual([0, 1, 3, 4]);
  });
});