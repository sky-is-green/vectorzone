/**
 * Destructible structures (ENVIRONMENTS §4): same block grids as tanks.
 * Structural integrity = flood-fill from anchors; disconnected cells detach
 * as tumbling chunks. Anchors: hull = core, turret = gun, structure = base.
 */
import { getCell, parseLayout, setCell, type BlockGrid } from './grid';
import { SOLID_PLACEMENTS, solidGrid, type SolidKind } from './arena';
import type { V3 } from './raycast';

export type StructureKind = 'wall' | 'bunker' | 'tower' | 'depot' | 'rocks' | SolidKind;

export interface Structure {
  id: number;
  kind: StructureKind;
  grid: BlockGrid;
  x: number;
  z: number;
}

const WALL: string[][] = [
  ['HHHHHHHHHH'],
  ['HHHHHHHHHH'],
  ['HHHHHHHHHH'],
];

const BUNKER: string[][] = [
  ['HHHHHH', 'H....H', 'H....H', 'H....H', 'H....H', 'HHHHHH'],
  ['HHHHHH', 'H....H', 'H....H', 'H....H', 'H....H', 'HHHHHH'],
  ['HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH', 'HHHHHH'],
];

const TOWER: string[][] = [
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
  ['HHH', 'HHH', 'HHH'],
];

const DEPOT: string[][] = [
  ['HHHH', 'HAAH', 'HAAH', 'HHHH'],
  ['HHHH', 'HAAH', 'HAAH', 'HHHH'],
];

const ROCKS: string[][] = [
  ['HH.', 'HHH', '.HH'],
  ['HH.', '.H.', '...'],
];

export function structureGrid(kind: StructureKind): BlockGrid {
  switch (kind) {
    case 'wall': return parseLayout(WALL);
    case 'bunker': return parseLayout(BUNKER);
    case 'tower': return parseLayout(TOWER);
    case 'depot': return parseLayout(DEPOT);
    case 'rocks': return parseLayout(ROCKS);
    case 'cube': return solidGrid('cube');
    case 'pyramid': return solidGrid('pyramid');
  }
}

export function makeStructure(id: number, kind: StructureKind, x: number, z: number): Structure {
  return { id, kind, grid: structureGrid(kind), x, z };
}

/** Classic additions for M3: cover that erodes, a depot that chains. */
export const CLASSIC_STRUCTURES: Structure[] = [
  makeStructure(100, 'wall', -20, -35),
  makeStructure(101, 'wall', 35, 55),
  makeStructure(102, 'bunker', -55, 40),
  makeStructure(103, 'tower', 70, -70),
  makeStructure(104, 'depot', 15, -55),
  // the faithful cubes & pyramids — destructible like everything else
  ...SOLID_PLACEMENTS.map((p, i) => makeStructure(200 + i, p.kind, p.x, p.z)),
];

export type AnchorKind = 'hull' | 'turret' | 'structure';

export function anchorCells(g: BlockGrid, kind: AnchorKind): V3[] {
  const out: V3[] = [];
  for (let z = 0; z < g.size.z; z++) {
    for (let y = 0; y < g.size.y; y++) {
      for (let x = 0; x < g.size.x; x++) {
        const b = getCell(g, x, y, z);
        if (!b) continue;
        const ok =
          kind === 'hull' ? b.type === 'core' : kind === 'turret' ? b.type === 'gun' : y === 0;
        if (ok) out.push([x, y, z]);
      }
    }
  }
  return out;
}

const NEIGHBOURS: V3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];

/** Remove and return occupied cells not connected to any anchor. */
export function detachDisconnected(g: BlockGrid, anchors: V3[]): V3[] {
  if (anchors.length === 0) {
    const all: V3[] = [];
    for (let z = 0; z < g.size.z; z++)
      for (let y = 0; y < g.size.y; y++)
        for (let x = 0; x < g.size.x; x++)
          if (getCell(g, x, y, z)) all.push([x, y, z]);
    for (const c of all) setCell(g, c[0], c[1], c[2], null);
    return all;
  }
  const seen = new Set<string>();
  const stack: V3[] = [...anchors];
  for (const a of anchors) seen.add(a.join(','));
  while (stack.length) {
    const c = stack.pop()!;
    for (const n of NEIGHBOURS) {
      const nx = c[0] + n[0], ny = c[1] + n[1], nz = c[2] + n[2];
      const key = `${nx},${ny},${nz}`;
      if (seen.has(key) || !getCell(g, nx, ny, nz)) continue;
      seen.add(key);
      stack.push([nx, ny, nz]);
    }
  }
  const detached: V3[] = [];
  for (let z = 0; z < g.size.z; z++) {
    for (let y = 0; y < g.size.y; y++) {
      for (let x = 0; x < g.size.x; x++) {
        if (getCell(g, x, y, z) && !seen.has(`${x},${y},${z}`)) detached.push([x, y, z]);
      }
    }
  }
  for (const c of detached) setCell(g, c[0], c[1], c[2], null);
  return detached;
}