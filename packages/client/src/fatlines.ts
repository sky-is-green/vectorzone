/**
 * Screen-space thick lines (three/addons/lines). WebGL linewidth is ignored on
 * most platforms, so Line2 is the only reliable way to give the vector world
 * a readable hierarchy: floor 1 px, tanks ~2.4 px, objects ~1.4-1.8 px.
 */
import * as THREE from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

const materials: LineMaterial[] = [];

export function makeLineMaterial(
  color: number,
  width: number,
  opts: { transparent?: boolean; opacity?: number; fog?: boolean } = {},
): LineMaterial {
  const mat = new LineMaterial({
    color,
    linewidth: width,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    fog: opts.fog ?? true,
    depthWrite: false,
  });
  materials.push(mat);
  return mat;
}

function positionsOf(g: THREE.BufferGeometry): number[] | Float32Array {
  return g.attributes.position.array as Float32Array;
}

export function makeFatLines(g: THREE.BufferGeometry, mat: LineMaterial): LineSegments2 {
  const lg = new LineGeometry();
  const pos = positionsOf(g);
  if (pos.length < 6) {
    lg.setPositions([0, 0, 0, 0, 0, 0]);
  } else {
    lg.setPositions(pos);
  }
  const lines = new LineSegments2(lg, mat);
  lines.frustumCulled = false;
  lines.visible = pos.length >= 6;
  return lines;
}

export function makeFatLinesFromPositions(pos: number[] | Float32Array, mat: LineMaterial): LineSegments2 {
  const lg = new LineGeometry();
  lg.setPositions(pos);
  const lines = new LineSegments2(lg, mat);
  lines.frustumCulled = false;
  return lines;
}

export function updateFatLines(lines: LineSegments2, g: THREE.BufferGeometry): void {
  const pos = positionsOf(g);
  if (pos.length < 6) {
    lines.visible = false;
    return;
  }
  lines.visible = true;
  lines.geometry.setPositions(pos);
}

export function updateFatLinesFromArray(lines: LineSegments2, pos: number[] | Float32Array): void {
  if (pos.length < 6) {
    lines.visible = false;
    return;
  }
  lines.visible = true;
  lines.geometry.setPositions(pos);
}

export function setLineResolution(w: number, h: number): void {
  for (const m of materials) m.resolution.set(w, h);
}
