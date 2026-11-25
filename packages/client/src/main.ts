/**
 * M0 — Hello, vector.
 * A green wireframe cube spinning in the void, driven by the fixed-tick sim.
 *
 * three.js concepts in this file (see docs/learn/m0.md):
 *   Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry (Box/Edges),
 *   Material (LineBasic), Object3D (LineSegments), the render loop, resize.
 */
import * as THREE from 'three';
import { createWorld, stepWorld, TICK_DT } from '@vectorzone/sim';
import './style.css';

// --- renderer / scene / camera -------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
);
camera.position.set(0, 1.2, 4);
camera.lookAt(0, 0, 0);

// --- the M0 subject: one green wireframe cube ------------------------------
// The whole game is unlit: black faces + glowing edges. No lights, ever.
const PHOSPHOR = 0x39ff6b;
const box = new THREE.BoxGeometry(1.4, 1.4, 1.4);
const edges = new THREE.EdgesGeometry(box); // only the hard edges, no triangulation diagonals
const cube = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: PHOSPHOR }),
);
scene.add(cube);

// --- fixed-timestep sim (invariant I2) -------------------------------------
// The sim advances in exact 1/60 s steps; the render loop runs at display rate.
const world = createWorld(0xb477e2);
let accumulator = 0;
let last = performance.now();

// --- dev stats overlay (gate I6 lives here) ---------------------------------
const stats = document.getElementById('stats')!;
let frames = 0;
let fpsWindow = 0;
let fps = 0;

function frame(now: number): void {
  requestAnimationFrame(frame);

  // clamp long gaps (tab switch) so the sim never spiral-of-deaths
  const dt = Math.min((now - last) / 1000, 0.25);
  last = now;
  accumulator += dt;
  while (accumulator >= TICK_DT) {
    stepWorld(world);
    accumulator -= TICK_DT;
  }

  // Render-interpolated time: smooth at any refresh rate, still deterministic.
  const t = (world.tick + accumulator / TICK_DT) * TICK_DT;
  cube.rotation.set(t * 0.5, t * 0.8, 0);

  renderer.render(scene, camera);

  frames++;
  fpsWindow += dt;
  if (fpsWindow >= 0.5) {
    fps = Math.round(frames / fpsWindow);
    frames = 0;
    fpsWindow = 0;
  }
  stats.textContent = `FPS ${fps} · calls ${renderer.info.render.calls} · tick ${world.tick}`;
}
requestAnimationFrame(frame);

// --- resize -----------------------------------------------------------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});