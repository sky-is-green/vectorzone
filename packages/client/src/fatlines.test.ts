import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { makeFatLines } from './fatlines';

describe('fat lines', () => {
  it('treats each pair of positions as one segment, with no connecting diagonals', () => {
    const g = new THREE.BufferGeometry();
    // two independent axis-aligned segments far apart
    g.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0, 0, 0, 0, 1,
      10, 0, 0, 10, 1, 0,
    ], 3));
    const lines = makeFatLines(g, { linewidth: 1 } as never);
    const count = lines.geometry.attributes.instanceStart.count;
    expect(count).toBe(2);
    const p = (lines.geometry.attributes.instanceStart as THREE.InterleavedBufferAttribute).data.array;
    // no segment spans both x and z/y
    for (let i = 0; i < p.length; i += 6) {
      const dx = Math.abs(p[i] - p[i + 3]);
      const dy = Math.abs(p[i + 1] - p[i + 4]);
      const dz = Math.abs(p[i + 2] - p[i + 5]);
      expect([dx, dy, dz].filter((v) => v > 0.01).length).toBe(1);
    }
  });
});