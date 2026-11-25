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
  private p: Float32Array; // x y z vx vy vz life maxLife len r g b sx sy sz (15)
  private cursor = 0;

  constructor(max = 1024, fog = true) {
    this.max = max;
    this.pos = new Float32Array(max * 6);
    this.col = new Float32Array(max * 6);
    this.p = new Float32Array(max * 15);
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
    sx = 0, sy = 0, sz = 0,
  ): void {
    const i = (this.cursor++ % this.max) * 15;
    const p = this.p;
    p[i] = x; p[i + 1] = y; p[i + 2] = z;
    p[i + 3] = vx; p[i + 4] = vy; p[i + 5] = vz;
    p[i + 6] = life; p[i + 7] = life; p[i + 8] = len;
    p[i + 9] = r; p[i + 10] = g; p[i + 11] = b;
    p[i + 12] = sx; p[i + 13] = sy; p[i + 14] = sz;
  }

  update(dt: number): void {
    const p = this.p;
    for (let n = 0; n < this.max; n++) {
      const i = n * 15;
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
      // segment orientation: explicit dir (static decals) else velocity trail
      let dx = p[i + 12], dy = p[i + 13], dz = p[i + 14];
      if (dx === 0 && dy === 0 && dz === 0) {
        dx = p[i + 3]; dy = p[i + 4]; dz = p[i + 5];
      }
      const vlen = Math.hypot(dx, dy, dz) || 1;
      const l = p[i + 8] / vlen;
      this.pos[o] = p[i]; this.pos[o + 1] = p[i + 1]; this.pos[o + 2] = p[i + 2];
      this.pos[o + 3] = p[i] - dx * l;
      this.pos[o + 4] = p[i + 1] - dy * l;
      this.pos[o + 5] = p[i + 2] - dz * l;
      const f = Math.max(p[i + 6], 0) / p[i + 7];
      this.col[o] = this.col[o + 3] = p[i + 9] * f;
      this.col[o + 1] = this.col[o + 4] = p[i + 10] * f;
      this.col[o + 2] = this.col[o + 5] = p[i + 11] * f;
    }
    this.object.geometry.attributes.position.needsUpdate = true;
    this.object.geometry.attributes.color.needsUpdate = true;
  }
}