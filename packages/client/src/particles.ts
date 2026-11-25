/**
 * One pooled LineSegments cloud for ALL particles (PLAN §4.2, ENVIRONMENTS §7).
 * Additive blending + vertex colors: fading a particle's color toward black
 * makes it vanish on the black void — no per-particle materials, 1 draw call.
 */
import * as THREE from 'three';

export class ParticlePool {
  readonly object: THREE.LineSegments;
  private max: number;
  private pos: Float32Array;
  private col: Float32Array;
  private p: Float32Array; // x y z vx vy vz life maxLife len r g b  (12 floats)
  private cursor = 0;

  constructor(max = 1024, fog = true) {
    this.max = max;
    this.pos = new Float32Array(max * 6);
    this.col = new Float32Array(max * 6);
    this.p = new Float32Array(max * 12);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      fog, // horizon emitters (volcano smoke) must ignore arena fog
    });
    this.object = new THREE.LineSegments(geo, mat);
    this.object.frustumCulled = false;
  }

  spawn(
    x: number, y: number, z: number,
    vx: number, vy: number, vz: number,
    life: number, r: number, g: number, b: number, len = 0.5,
  ): void {
    const i = (this.cursor++ % this.max) * 12;
    const p = this.p;
    p[i] = x; p[i + 1] = y; p[i + 2] = z;
    p[i + 3] = vx; p[i + 4] = vy; p[i + 5] = vz;
    p[i + 6] = life; p[i + 7] = life; p[i + 8] = len;
    p[i + 9] = r; p[i + 10] = g; p[i + 11] = b;
  }

  update(dt: number): void {
    const p = this.p;
    for (let n = 0; n < this.max; n++) {
      const i = n * 12;
      const o = n * 6;
      if (p[i + 6] <= 0) {
        // dead: collapse to a zero-length black segment far below the arena
        this.pos[o] = this.pos[o + 3] = 0;
        this.pos[o + 1] = this.pos[o + 4] = -1000;
        this.pos[o + 2] = this.pos[o + 5] = 0;
        this.col[o] = this.col[o + 1] = this.col[o + 2] = 0;
        this.col[o + 3] = this.col[o + 4] = this.col[o + 5] = 0;
        continue;
      }
      p[i + 6] -= dt;
      p[i] += p[i + 3] * dt;
      p[i + 1] += p[i + 4] * dt;
      p[i + 2] += p[i + 5] * dt;
      const vlen = Math.hypot(p[i + 3], p[i + 4], p[i + 5]) || 1;
      const l = p[i + 8] / vlen;
      this.pos[o] = p[i]; this.pos[o + 1] = p[i + 1]; this.pos[o + 2] = p[i + 2];
      this.pos[o + 3] = p[i] - p[i + 3] * l;
      this.pos[o + 4] = p[i + 1] - p[i + 4] * l;
      this.pos[o + 5] = p[i + 2] - p[i + 5] * l;
      const f = Math.max(p[i + 6], 0) / p[i + 7];
      this.col[o] = this.col[o + 3] = p[i + 9] * f;
      this.col[o + 1] = this.col[o + 4] = p[i + 10] * f;
      this.col[o + 2] = this.col[o + 5] = p[i + 11] * f;
    }
    this.object.geometry.attributes.position.needsUpdate = true;
    this.object.geometry.attributes.color.needsUpdate = true;
  }
}