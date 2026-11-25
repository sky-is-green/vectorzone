/**
 * M1 — Block tank.
 * A hand-authored block-grid tank in the solid-vector look (black faces +
 * glowing edges), driven by WASD / arrows, camera riding the turret.
 * See docs/learn/m1.md for the concepts.
 */
import * as THREE from 'three';
import { BLOCK_SIZE, createWorld, stepWorld, TICK_DT } from '@vectorzone/sim';
import { buildEntityGeometry } from './geometry';
import { bindInput, readCommand } from './input';
import './style.css';

const PHOSPHOR = 0x39ff6b;

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

// --- materials: the whole game is unlit -----------------------------------
const faceMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
const edgeMat = new THREE.LineBasicMaterial({ color: PHOSPHOR });

// --- sim + tank visuals ----------------------------------------------------
const world = createWorld(0xb477e2);
const tank = world.tanks[0];

interface Body {
  group: THREE.Group;
  mesh: THREE.Mesh;
  lines: THREE.LineSegments;
  rev: number;
}

function makeBody(grid: typeof tank.hull): Body {
  const geo = buildEntityGeometry(grid);
  const mesh = new THREE.Mesh(geo.faces, faceMat);
  const lines = new THREE.LineSegments(geo.edges, edgeMat);
  const group = new THREE.Group();
  group.add(mesh, lines);
  return { group, mesh, lines, rev: grid.rev };
}

function refreshBody(body: Body, grid: typeof tank.hull): void {
  if (body.rev === grid.rev) return; // rebuild ONLY on mutation (I10)
  const geo = buildEntityGeometry(grid);
  body.mesh.geometry.dispose();
  body.lines.geometry.dispose();
  body.mesh.geometry = geo.faces;
  body.lines.geometry = geo.edges;
  body.rev = grid.rev;
}

const hull = makeBody(tank.hull);
const turret = makeBody(tank.turret);
turret.group.position.set(tank.turretPivot.x, tank.turretPivot.y, tank.turretPivot.z);
hull.group.add(turret.group);
scene.add(hull.group);

bindInput();

// dev/test hook (used by the browser verification probes).
// debug.cam overrides the camera rig for screenshots; null = normal rig.
const debug: { cam: { p: [number, number, number]; l: [number, number, number] } | null } = {
  cam: null,
};
(window as unknown as Record<string, unknown>).__vz = { world, renderer, debug };

// --- fixed-timestep loop ----------------------------------------------------
let accumulator = 0;
let last = performance.now();
const stats = document.getElementById('stats')!;
let frames = 0;
let fpsWindow = 0;
let fps = 0;

function frame(now: number): void {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000, 0.25);
  last = now;
  accumulator += dt;
  const cmd = readCommand();
  while (accumulator >= TICK_DT) {
    stepWorld(world, [cmd]);
    accumulator -= TICK_DT;
  }

  refreshBody(hull, tank.hull);
  refreshBody(turret, tank.turret);

  // sync transforms from sim state
  hull.group.position.set(tank.x, 0, tank.z);
  hull.group.rotation.y = tank.heading;
  turret.group.rotation.y = tank.turretYaw;
  turret.group.rotation.x = -tank.gunPitch; // +pitch = barrel up

  // camera rides the turret: eye just behind/above the mount, looking down the aim
  const yaw = tank.heading + tank.turretYaw;
  const pitch = tank.gunPitch;
  const eyeY = tank.turretPivot.y + tank.turret.size.y * BLOCK_SIZE + 0.25;
  const ex = tank.x - 0.9 * Math.sin(yaw);
  const ez = tank.z - 0.9 * Math.cos(yaw);
  if (debug.cam) {
    camera.position.set(...debug.cam.p);
    camera.lookAt(...debug.cam.l);
  } else {
    camera.position.set(ex, eyeY, ez);
    camera.lookAt(
      ex + Math.sin(yaw) * Math.cos(pitch) * 30,
      eyeY + Math.sin(pitch) * 30,
      ez + Math.cos(yaw) * Math.cos(pitch) * 30,
    );
  }

  renderer.render(scene, camera);

  frames++;
  fpsWindow += dt;
  if (fpsWindow >= 0.5) {
    fps = Math.round(frames / fpsWindow);
    frames = 0;
    fpsWindow = 0;
  }
  stats.textContent = `FPS ${fps} · calls ${renderer.info.render.calls} · tick ${world.tick} · v ${tank.speed.toFixed(1)} m/s`;
}
requestAnimationFrame(frame);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});