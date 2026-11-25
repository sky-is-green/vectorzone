/**
 * M2 scenery: ground grid, mountain horizon, crescent moon, dormant volcano,
 * and the merged indestructible solids. Horizon materials ignore fog so the
 * silhouette stays crisp while the arena floor fades (ENVIRONMENTS §2).
 */
import * as THREE from 'three';
import { BLOCK_SIZE, type RubbleCell } from '@vectorzone/sim';

const DIM = 0x1d7a3a;
const TAU = Math.PI * 2;

export interface Scenery {
  crater: THREE.Vector3;
  mountainMat: THREE.LineBasicMaterial;
  volcanoMat: THREE.LineBasicMaterial;
  moonMat: THREE.LineBasicMaterial;
  makeGrid: (center: number, grid: number) => THREE.GridHelper;
}

export function buildScenery(scene: THREE.Scene): Scenery {
  // arena floor: 5 m cells, fog-faded (rebuilt on palette change)
  const makeGrid = (center: number, grid: number) => new THREE.GridHelper(400, 80, center, grid);

  // mountain ring: seeded-looking silhouette from layered sines
  const pts: number[] = [];
  const N = 256;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * TAU;
    const h =
      14 +
      22 * Math.abs(Math.sin(a * 3.1)) +
      12 * Math.abs(Math.sin(a * 7.3 + 1.7)) +
      6 * Math.sin(a * 13.7);
    pts.push(Math.sin(a) * 620, h, Math.cos(a) * 620);
  }
  const mgeo = new THREE.BufferGeometry();
  mgeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const mountainMat = new THREE.LineBasicMaterial({ color: DIM, fog: false });
  scene.add(new THREE.LineLoop(mgeo, mountainMat));

  // volcano: wireframe cone with a crater notch, on the horizon
  const a0 = 0.9;
  const vx = Math.sin(a0) * 620;
  const vz = Math.cos(a0) * 620;
  const rings: [number, number][] = [[0, 95], [22, 64], [44, 40], [64, 24], [76, 15]];
  const S = 10;
  const seg: number[] = [];
  for (const [h, r] of rings) {
    for (let i = 0; i < S; i++) {
      const a = (i / S) * TAU;
      const b = ((i + 1) / S) * TAU;
      seg.push(vx + Math.sin(a) * r, h, vz + Math.cos(a) * r, vx + Math.sin(b) * r, h, vz + Math.cos(b) * r);
    }
  }
  for (let i = 0; i < S; i++) {
    const a = (i / S) * TAU;
    for (let k = 0; k < rings.length - 1; k++) {
      const [h1, r1] = rings[k];
      const [h2, r2] = rings[k + 1];
      seg.push(vx + Math.sin(a) * r1, h1, vz + Math.cos(a) * r1, vx + Math.sin(a) * r2, h2, vz + Math.cos(a) * r2);
    }
  }
  const vgeo = new THREE.BufferGeometry();
  vgeo.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  const volcanoMat = new THREE.LineBasicMaterial({ color: DIM, fog: false });
  scene.add(new THREE.LineSegments(vgeo, volcanoMat));
  const crater = new THREE.Vector3(vx, 78, vz);

  // crescent moon: outer arc + offset inner arc, closed
  const mp: number[] = [];
  const cx = -350, cy = 210, cz = -520, R = 14;
  for (let i = 0; i <= 40; i++) {
    const t = Math.PI * 0.25 + (i / 40) * Math.PI * 1.5;
    mp.push(cx + Math.cos(t) * R, cy + Math.sin(t) * R, cz);
  }
  for (let i = 40; i >= 0; i--) {
    const t = Math.PI * 0.25 + (i / 40) * Math.PI * 1.5;
    mp.push(cx + 6 + Math.cos(t) * R * 0.92, cy + Math.sin(t) * R * 0.92, cz);
  }
  const moongeo = new THREE.BufferGeometry();
  moongeo.setAttribute('position', new THREE.Float32BufferAttribute(mp, 3));
  const moonMat = new THREE.LineBasicMaterial({ color: 0x9fffc0, fog: false });
  scene.add(new THREE.LineLoop(moongeo, moonMat));

  return { crater, mountainMat, volcanoMat, moonMat, makeGrid };
}

/** Settled rubble: one merged face+edge pair, rebuilt only when rubble changes. */
export function buildRubbleGeometry(rubble: RubbleCell[]): {
  faces: THREE.BufferGeometry;
  edges: THREE.BufferGeometry;
} {
  const fp: number[] = [];
  const ep: number[] = [];
  const bs = BLOCK_SIZE;
  for (const r of rubble) {
    const x0 = r.x - bs / 2, x1 = r.x + bs / 2;
    const y0 = 0, y1 = bs;
    const z0 = r.z - bs / 2, z1 = r.z + bs / 2;
    const c = [
      [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1],
      [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1],
    ];
    const quads = [
      [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4],
      [2, 3, 7, 6], [1, 2, 6, 5], [0, 3, 7, 4],
    ];
    for (const q of quads) {
      for (const i of [0, 1, 2, 0, 2, 3]) fp.push(...c[q[i]]);
      for (let i = 0; i < 4; i++) ep.push(...c[q[i]], ...c[q[(i + 1) % 4]]);
    }
  }
  const faces = new THREE.BufferGeometry();
  faces.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  const edges = new THREE.BufferGeometry();
  edges.setAttribute('position', new THREE.Float32BufferAttribute(ep, 3));
  return { faces, edges };
}

/** A tumbling chunk: cube edges per cell, offsets from the chunk centroid. */
export function buildChunkGeometry(cells: { off: [number, number, number] }[]): THREE.BufferGeometry {
  const ep: number[] = [];
  const h = BLOCK_SIZE / 2;
  for (const { off } of cells) {
    const [cx, cy, cz] = off;
    const c = [
      [cx - h, cy - h, cz - h], [cx + h, cy - h, cz - h], [cx + h, cy - h, cz + h], [cx - h, cy - h, cz + h],
      [cx - h, cy + h, cz - h], [cx + h, cy + h, cz - h], [cx + h, cy + h, cz + h], [cx - h, cy + h, cz + h],
    ];
    const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
    for (const [a, b] of E) ep.push(...c[a], ...c[b]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(ep, 3));
  return g;
}