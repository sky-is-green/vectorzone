/**
 * M2 scenery: ground grid, mountain horizon, crescent moon, dormant volcano,
 * and the merged indestructible solids. Horizon materials ignore fog so the
 * silhouette stays crisp while the arena floor fades (ENVIRONMENTS §2).
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { obstacleGrid, type Obstacle } from '@vectorzone/sim';
import { buildEntityGeometry } from './geometry';

const DIM = 0x1d7a3a;
const PHOSPHOR = 0x39ff6b;
const TAU = Math.PI * 2;

export function buildScenery(scene: THREE.Scene): { crater: THREE.Vector3 } {
  // arena floor: 5 m cells, fog-faded
  scene.add(new THREE.GridHelper(400, 80, 0x0f4d24, 0x0a3319));

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
  scene.add(new THREE.LineLoop(mgeo, new THREE.LineBasicMaterial({ color: DIM, fog: false })));

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
  scene.add(new THREE.LineSegments(vgeo, new THREE.LineBasicMaterial({ color: DIM, fog: false })));
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
  scene.add(new THREE.LineLoop(moongeo, new THREE.LineBasicMaterial({ color: 0x9fffc0, fog: false })));

  return { crater };
}

/** All indestructible solids merged: 2 draw calls for the whole obstacle set. */
export function buildObstacleMeshes(obstacles: Obstacle[]): THREE.Group {
  const faces: THREE.BufferGeometry[] = [];
  const edges: THREE.BufferGeometry[] = [];
  for (const o of obstacles) {
    const g = buildEntityGeometry(obstacleGrid(o.kind));
    g.faces.translate(o.x, 0, o.z);
    g.edges.translate(o.x, 0, o.z);
    faces.push(g.faces);
    edges.push(g.edges);
  }
  const group = new THREE.Group();
  group.add(
    new THREE.Mesh(
      mergeGeometries(faces),
      new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide }),
    ),
    new THREE.LineSegments(mergeGeometries(edges), new THREE.LineBasicMaterial({ color: PHOSPHOR })),
  );
  return group;
}