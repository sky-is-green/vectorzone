/**
 * Merged entity geometry (PLAN §4.2, invariant I10).
 * One face geometry (black, depth-writing) + one edge geometry (glowing)
 * per rigid body. Interior faces/edges are culled: a face is emitted only
 * where the neighbouring cell is empty — so when damage removes a block,
 * the newly exposed interior surfaces appear on rebuild (blow-through).
 */
import * as THREE from 'three';
import { BLOCK_SIZE, getCell, type BlockGrid } from '@vectorzone/sim';

export interface EntityGeometry {
  faces: THREE.BufferGeometry;
  edges: THREE.BufferGeometry;
}

// Quads per face direction, in cell units (corner order irrelevant: DoubleSide).
const FACE_DIRS: { d: [number, number, number]; corners: [number, number, number][] }[] = [
  { d: [1, 0, 0], corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]] },
  { d: [-1, 0, 0], corners: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]] },
  { d: [0, 1, 0], corners: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]] },
  { d: [0, -1, 0], corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]] },
  { d: [0, 0, 1], corners: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
  { d: [0, 0, -1], corners: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]] },
];

export function buildEntityGeometry(g: BlockGrid): EntityGeometry {
  const facePos: number[] = [];
  const edgeMap = new Map<string, number[]>();
  const bs = BLOCK_SIZE;
  const mx = (u: number) => (u - g.size.x / 2) * bs;
  const my = (u: number) => u * bs;
  const mz = (u: number) => (u - g.size.z / 2) * bs;

  const point = (c: [number, number, number], x: number, y: number, z: number): number[] => [
    mx(x + c[0]),
    my(y + c[1]),
    mz(z + c[2]),
  ];

  for (let z = 0; z < g.size.z; z++) {
    for (let y = 0; y < g.size.y; y++) {
      for (let x = 0; x < g.size.x; x++) {
        if (!getCell(g, x, y, z)) continue;
        for (const { d, corners } of FACE_DIRS) {
          if (getCell(g, x + d[0], y + d[1], z + d[2])) continue; // interior: culled
          const p = corners.map((c) => point(c, x, y, z));
          // two triangles per exposed face
          for (const i of [0, 1, 2, 0, 2, 3]) facePos.push(...p[i]);
          // four edges, deduped across adjacent faces
          for (let i = 0; i < 4; i++) {
            const a = p[i];
            const b = p[(i + 1) % 4];
            const ka = a.map((n) => n.toFixed(4)).join(',');
            const kb = b.map((n) => n.toFixed(4)).join(',');
            const key = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
            if (!edgeMap.has(key)) edgeMap.set(key, [...a, ...b]);
          }
        }
      }
    }
  }

  const faces = new THREE.BufferGeometry();
  faces.setAttribute('position', new THREE.Float32BufferAttribute(facePos, 3));
  const edgePos: number[] = [];
  for (const seg of edgeMap.values()) edgePos.push(...seg);
  const edges = new THREE.BufferGeometry();
  edges.setAttribute('position', new THREE.Float32BufferAttribute(edgePos, 3));
  return { faces, edges };
}