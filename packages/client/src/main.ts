/**
 * M1 — Block tank.
 * A hand-authored block-grid tank in the solid-vector look (black faces +
 * glowing edges), driven by WASD / arrows, camera riding the turret.
 * See docs/learn/m1.md for the concepts.
 */
import * as THREE from 'three';
import { BLOCK_SIZE, createWorld, stepWorld, TICK_DT, type TankCommand } from '@vectorzone/sim';
import { buildEntityGeometry } from './geometry';
import { bindInput, readCommand } from './input';
import { ParticlePool } from './particles';
import { buildObstacleMeshes, buildScenery } from './scenery';
import './style.css';

const PHOSPHOR = 0x39ff6b;

// --- renderer / scene / camera -------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x000000, 60, 260); // floor fades; horizon ignores fog

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
// real turret order: yaw about the vertical, THEN pitch about the traversed
// horizontal axis. Default XYZ Euler order couples them wrongly (F1).
turret.group.rotation.order = 'YXZ';
hull.group.add(turret.group);
scene.add(hull.group);

// Rigid gun mount (F1 fix): the camera is the turret transform composed with
// a fixed local offset — exactly as if parented to the gun. It swings with
// yaw AND pitch, so aim and view can never disagree.
const GUN_EYE = new THREE.Vector3(0, tank.turret.size.y * BLOCK_SIZE + 0.25, -0.9);
// three cameras look down their -Z; our gun points +Z, hence the half-turn.
const Q_HALF_TURN = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

bindInput();

// --- M2: arena scenery, solids, pooled smoke --------------------------------
const { crater } = buildScenery(scene);
scene.add(buildObstacleMeshes(world.obstacles));
const smoke = new ParticlePool(1024, false);
scene.add(smoke.object);
let smokeAcc = 0;

// camera modes: periscope (rigid gun mount) / chase. C toggles.
let chase = false;
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyC') chase = !chase;
});

// dev/test hook (used by the browser verification probes).
// debug.cam overrides the camera rig for screenshots; null = normal rig.
const debug: { cam: { p: [number, number, number]; l: [number, number, number] } | null } = {
  cam: null,
};
(window as unknown as Record<string, unknown>).__vz = {
  world,
  renderer,
  debug,
  camera,
  turretObj: turret.group,
  // synchronous sim stepping for deterministic browser probes (wall-time
  // probes are unreliable: background tabs throttle rAF and the dt clamp
  // rightly refuses to fast-forward)
  step: (commands: TankCommand[], ticks: number) => {
    for (let i = 0; i < ticks; i++) stepWorld(world, commands);
  },
};

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

  // dormant volcano smoke: ~3 wisps/sec, cosmetic randomness lives client-side
  smokeAcc += dt;
  while (smokeAcc > 1 / 3) {
    smokeAcc -= 1 / 3;
    smoke.spawn(
      crater.x + (Math.random() - 0.5) * 14,
      crater.y,
      crater.z + (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 2,
      4 + Math.random() * 3,
      (Math.random() - 0.5) * 2,
      5 + Math.random() * 2,
      0.1, 0.35, 0.16,
      1.4,
    );
  }
  smoke.update(dt);

  // sync transforms from sim state
  hull.group.position.set(tank.x, 0, tank.z);
  hull.group.rotation.y = tank.heading;
  turret.group.rotation.y = tank.turretYaw;
  turret.group.rotation.x = -tank.gunPitch; // +pitch = barrel up

  // camera = rigid gun mount (see GUN_EYE above); debug override stays world-space
  if (debug.cam) {
    camera.position.set(...debug.cam.p);
    camera.lookAt(...debug.cam.l);
  } else if (chase) {
    camera.position.set(
      tank.x - Math.sin(tank.heading) * 12,
      6.5,
      tank.z - Math.cos(tank.heading) * 12,
    );
    camera.lookAt(tank.x, 1.2, tank.z);
  } else {
    turret.group.updateWorldMatrix(true, false);
    camera.position.copy(GUN_EYE).applyMatrix4(turret.group.matrixWorld);
    camera.quaternion
      .setFromRotationMatrix(turret.group.matrixWorld)
      .multiply(Q_HALF_TURN);
  }

  renderer.render(scene, camera);

  frames++;
  fpsWindow += dt;
  if (fpsWindow >= 0.5) {
    fps = Math.round(frames / fpsWindow);
    frames = 0;
    fpsWindow = 0;
  }
  stats.textContent = `FPS ${fps} · calls ${renderer.info.render.calls} · tick ${world.tick} · v ${tank.speed.toFixed(1)} m/s · ${chase ? 'chase' : 'scope'} [C]`;
}
requestAnimationFrame(frame);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});