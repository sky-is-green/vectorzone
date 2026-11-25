/**
 * The block grid — the one representation behind rendering, collision,
 * damage, and (hand-authored) tank layouts. PLAN §5.
 *
 * Cells are indexed x + y*X + z*X*Y. x = width, y = height (0 = bottom),
 * z = length (forward = +z). `rev` increments on every mutation so the
 * renderer knows when to rebuild merged geometry (invariant I10).
 */
export type BlockType = 'hull' | 'tread' | 'gun' | 'engine' | 'core' | 'ammo';

export interface Block {
  type: BlockType;
  hp: number;
}

export interface GridSize {
  x: number;
  y: number;
  z: number;
}

export interface BlockGrid {
  size: GridSize;
  cells: (Block | null)[];
  rev: number;
}

/** Metres per cell (PLAN §5.1). */
export const BLOCK_SIZE = 0.3;

export const BLOCK_HP: Record<BlockType, number> = {
  hull: 3,
  tread: 2,
  gun: 2,
  engine: 2,
  core: 1,
  ammo: 1,
};

export const BLOCK_MASS: Record<BlockType, number> = {
  hull: 1,
  tread: 1.2,
  gun: 0.8,
  engine: 1.5,
  core: 1,
  ammo: 1,
};

const CHAR_TYPE: Record<string, BlockType> = {
  H: 'hull',
  T: 'tread',
  G: 'gun',
  E: 'engine',
  C: 'core',
  A: 'ammo',
};

export function createGrid(size: GridSize): BlockGrid {
  return {
    size,
    cells: new Array<Block | null>(size.x * size.y * size.z).fill(null),
    rev: 0,
  };
}

export function inBounds(g: BlockGrid, x: number, y: number, z: number): boolean {
  return x >= 0 && y >= 0 && z >= 0 && x < g.size.x && y < g.size.y && z < g.size.z;
}

export function cellIndex(g: BlockGrid, x: number, y: number, z: number): number {
  return x + y * g.size.x + z * g.size.x * g.size.y;
}

export function getCell(g: BlockGrid, x: number, y: number, z: number): Block | null {
  if (!inBounds(g, x, y, z)) return null;
  return g.cells[cellIndex(g, x, y, z)];
}

export function setCell(
  g: BlockGrid,
  x: number,
  y: number,
  z: number,
  block: Block | null,
): void {
  if (!inBounds(g, x, y, z)) return;
  g.cells[cellIndex(g, x, y, z)] = block;
  g.rev++;
}

export function countBlocks(g: BlockGrid): number {
  let n = 0;
  for (const c of g.cells) if (c) n++;
  return n;
}

export function countType(g: BlockGrid, type: BlockType): number {
  let n = 0;
  for (const c of g.cells) if (c && c.type === type) n++;
  return n;
}

/**
 * Parse a hand-authored layout: layers[y][z] is a string over x.
 * '.' = empty, H/T/G/E/C/A = block types. Readable, diffable, tunable.
 * Tolerant: layers may shrink (stepped pyramids); missing rows/chars = empty.
 */
export function parseLayout(layers: string[][]): BlockGrid {
  const y = layers.length;
  const z = Math.max(...layers.map((l) => l.length));
  const x = Math.max(...layers.map((l) => Math.max(...l.map((r) => r.length))));
  const g = createGrid({ x, y, z });
  for (let iy = 0; iy < y; iy++) {
    for (let iz = 0; iz < z; iz++) {
      const row = layers[iy][iz] ?? '';
      for (let ix = 0; ix < x; ix++) {
        const t = CHAR_TYPE[row[ix] ?? '.'];
        if (t) g.cells[cellIndex(g, ix, iy, iz)] = { type: t, hp: BLOCK_HP[t] };
      }
    }
  }
  g.rev = 1;
  return g;
}