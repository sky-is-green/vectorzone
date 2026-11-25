/**
 * M1 — Block tank.
 * A hand-authored block-grid tank in the solid-vector look (black faces +
 * glowing edges), driven by WASD / arrows, camera riding the turret.
 * See docs/learn/m1.md for the concepts.
 */
import * as THREE from 'three';
import { BLOCK_SIZE, createWorld, stepWorld, TICK_DT, type SimEvent, type TankCommand } from '@vectorzone/sim';
import { buildEntityGeometry } from './geometry';
import { bindInput, readCommand } from './input';
import { ParticlePool } from './particles';
import { buildChunkGeometry, buildObstacleMeshes, buildRubbleGeometry, buildScenery } from './scenery';
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
  rebuilds++;
}

const hull = makeBody(tank.hull);
const turret = makeBody(tank.turret);
turret.group.position.set(tank.turretPivot.x, tank.turretPivot.y, tank.turretPivot.z);
// real turret order: yaw about the vertical, THEN pitch about the traversed
// horizontal axis. Default XYZ Euler order couples them wrongly (F1).
turret.group.rotation.order = 'YXZ';
hull.group.add(turret.group);
scene.add(hull.group);

// --- M3: structures, rubble, chunks -----------------------------------------
let rebuilds = 0;
const structureBodies = new Map<number, Body>();
for (const s of world.structures) {
  const b = makeBody(s.grid);
  b.group.position.set(s.x, 0, s.z);
  scene.add(b.group);
  structureBodies.set(s.id, b);
}
const rubbleMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
const rubbleEdgeMat = new THREE.LineBasicMaterial({ color: 0x1d7a3a });
let rubbleMesh = new THREE.Mesh(new THREE.BufferGeometry(), rubbleMat);
let rubbleLines = new THREE.LineSegments(new THREE.BufferGeometry(), rubbleEdgeMat);
scene.add(rubbleMesh, rubbleLines);
let rubbleRev = -1;
const chunkGroups = new Map<number, THREE.LineSegments>();

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

// scorch rings: 16 fading tangent dashes in the shared pool (client-only)
function scorch(x: number, z: number, radius: number): void {
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    smoke.spawn(
      x + Math.sin(a) * radius, 0.02, z + Math.cos(a) * radius,
      0, 0, 0,
      20, 0.45, 0.22, 0.08, 0.5,
      Math.cos(a), 0, -Math.sin(a),
    );
  }
}

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
  get rebuilds() {
    return rebuilds;
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
  const evQueue: SimEvent[] = [];
  while (accumulator >= TICK_DT) {
    stepWorld(world, [cmd]);
    evQueue.push(...world.events);
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

  // --- M3 sync: structures, rubble, chunks, dead tank ------------------------
  hull.group.visible = tank.alive;
  for (const s of world.structures) {
    const b = structureBodies.get(s.id)!;
    refreshBody(b, s.grid);
  }
  if (world.rubbleRev !== rubbleRev) {
    rubbleRev = world.rubbleRev;
    const g = buildRubbleGeometry(world.rubble);
    rubbleMesh.geometry.dispose();
    rubbleLines.geometry.dispose();
    rubbleMesh.geometry = g.faces;
    rubbleLines.geometry = g.edges;
    rebuilds++;
  }
  for (const ch of world.chunks) {
    let g = chunkGroups.get(ch.id);
    if (!g) {
      g = new THREE.LineSegments(buildChunkGeometry(ch.cells), edgeMat);
      chunkGroups.set(ch.id, g);
      scene.add(g);
    }
    g.position.set(ch.pos[0], ch.pos[1], ch.pos[2]);
    g.rotation.set(ch.angle * 0.7, ch.angle, 0);
  }
  for (const [id, g] of chunkGroups) {
    if (!world.chunks.some((c) => c.id === id)) {
      scene.remove(g);
      g.geometry.dispose();
      chunkGroups.delete(id);
    }
  }

  // shell tracers: bright streaks in the shared pool
  for (const sh of world.shells) {
    smoke.spawn(
      sh.pos[0], sh.pos[1], sh.pos[2],
      sh.dir[0] * 60, sh.dir[1] * 60, sh.dir[2] * 60,
      0.06, 0.6, 1, 0.7, 2.5,
    );
  }

  // combat events → particles & scorch rings
  for (const ev of evQueue) {
    if (ev.kind === 'fire') {
      for (let i = 0; i < 8; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1], ev.pos[2],
          ev.dir[0] * 12 + (Math.random() - 0.5) * 6,
          ev.dir[1] * 12 + (Math.random() - 0.5) * 6,
          ev.dir[2] * 12 + (Math.random() - 0.5) * 6,
          0.15, 0.7, 1, 0.8, 0.6,
        );
      }
    } else if (ev.kind === 'blockDestroyed') {
      for (let i = 0; i < 6; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1], ev.pos[2],
          (Math.random() - 0.5) * 8, Math.random() * 6, (Math.random() - 0.5) * 8,
          0.4, 0.2, 0.9, 0.4, 0.4,
        );
      }
    } else if (ev.kind === 'shellImpact') {
      scorch(ev.pos[0], ev.pos[2], 1.2);
      for (let i = 0; i < 10; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1] + 0.1, ev.pos[2],
          (Math.random() - 0.5) * 7, Math.random() * 5, (Math.random() - 0.5) * 7,
          0.35, 0.5, 0.8, 0.4, 0.4,
        );
      }
    } else if (ev.kind === 'explosion') {
      scorch(ev.pos[0], ev.pos[2], ev.radius);
      for (let i = 0; i < 40; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 4 + Math.random() * 8;
        smoke.spawn(
          ev.pos[0], ev.pos[1] + 0.2, ev.pos[2],
          Math.sin(a) * s, Math.random() * 9, Math.cos(a) * s,
          0.7, 1, 0.35, 0.1, 0.8,
        );
      }
    } else if (ev.kind === 'tankKilled') {
      scorch(ev.pos[0], ev.pos[2], 2.5);
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 3 + Math.random() * 10;
        smoke.spawn(
          ev.pos[0], ev.pos[1], ev.pos[2],
          Math.sin(a) * s, Math.random() * 12, Math.cos(a) * s,
          1, 1, 0.4, 0.12, 0.9,
        );
      }
    }
  }

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