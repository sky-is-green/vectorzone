/**
 * Solid placements (PLAN §6, ENVIRONMENTS §4). User direction 2026-11-25:
 * ALL environment objects are destructible block assemblies — the faithful
 * cube/pyramid SHAPES stay, but the indestructible class is retired. They
 * ram apart and tunnel like any other structure.
 */
import { parseLayout, type BlockGrid } from './grid';

export type SolidKind = 'cube' | 'pyramid';

export interface SolidPlacement {
  kind: SolidKind;
  x: number;
  z: number;
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

export function solidGrid(kind: SolidKind): BlockGrid {
  return parseLayout(kind === 'cube' ? CUBE_LAYERS : PYRAMID_LAYERS);
}

/** Classic: sparse cubes & pyramids, faithful shapes (now destructible). */
export const SOLID_PLACEMENTS: SolidPlacement[] = [
  { kind: 'cube', x: 24, z: 30 },
  { kind: 'cube', x: -38, z: 12 },
  { kind: 'cube', x: 60, z: -45 },
  { kind: 'cube', x: -70, z: -60 },
  { kind: 'cube', x: 10, z: -90 },
  { kind: 'cube', x: 95, z: 70 },
  { kind: 'cube', x: -110, z: 85 },
  { kind: 'pyramid', x: -15, z: 55 },
  { kind: 'pyramid', x: 45, z: 80 },
  { kind: 'pyramid', x: -60, z: -20 },
  { kind: 'pyramid', x: 80, z: -10 },
  { kind: 'pyramid', x: -95, z: -105 },
  { kind: 'pyramid', x: 130, z: 20 },
];