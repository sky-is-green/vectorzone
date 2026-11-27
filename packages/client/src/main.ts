/**
 * M1 — Block tank.
 * A hand-authored block-grid tank in the solid-vector look (black faces +
 * glowing edges), driven by WASD / arrows, camera riding the turret.
 * See docs/learn/m1.md for the concepts.
 */
import * as THREE from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import {
  makeFatLines,
  makeFatLinesFromPositions,
  makeLineMaterial,
  setLineResolution,
  updateFatLines,
  updateFatLinesFromArray,
} from './fatlines';
import {
  BLOCK_SIZE,
  createWorld,
  stepWorld,
  TICK_DT,
  traceShot,
  turretForward,
  turretToWorld,
  fenceAlive,
  countType,
  MATCH_TICKS,
  SHELL_COOLDOWN,
  type SimEvent,
  type TankCommand,
} from '@vectorzone/sim';
import { AmbientAa } from './aa';
import { buildEntityGeometry } from './geometry';
import { createHud } from './hud';
import { bindInput, readCommand } from './input';
import { PALETTES } from './palette';
import { ParticlePool } from './particles';
import { createPost } from './post';
import { buildChunkGeometry, buildRubbleGeometry, buildScenery } from './scenery';
import { buildPanel, loadSettings, saveSettings, type Settings } from './settings';
import { pulseProgress, radarBearing, radarViewHeading } from './radar';
import { livingSpectators, nextSpectatorId, spectatorLabel } from './spectator';
import { explosionShake, impactShake } from './feedback';
import { beginDeathCam, updateDeathCam, type DeathCamState } from './deathcam';
import './style.css';

const PHOSPHOR = 0x39ff6b;

// --- renderer / scene / camera -------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
// composer renders many passes per frame; accumulate stats across all of them
renderer.info.autoReset = false;
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
const stats = document.getElementById('stats')!;

// --- materials: the whole game is unlit -----------------------------------
const faceMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
const edgeMat = makeLineMaterial(PHOSPHOR, 2.4); // tanks: thickest
const objectEdgeMat = makeLineMaterial(PHOSPHOR, 1.4); // structures: middle
const effectEdgeMat = makeLineMaterial(PHOSPHOR, 1.8); // aircraft
const missileEdgeMat = makeLineMaterial(0xffaa33, 2.6, { fog: false });
const missileCoreMat = new THREE.MeshBasicMaterial({ color: 0xff6b2b, fog: false, depthWrite: false });
const depotEdgeMat = makeLineMaterial(0xff4433, 1.8);
const scanEdgeMat = makeLineMaterial(0x35e0ff, 1.8);

// --- sim + tank visuals ----------------------------------------------------
const settings = loadSettings();
const world = createWorld(0xb477e2, settings.map);
let tank = world.tanks[0];
let spectatedId: number | null = null;
let lastKillerId: number | null = null;
let deathCam: DeathCamState | null = null;

interface Body {
  group: THREE.Group;
  mesh: THREE.Mesh;
  lines: LineSegments2;
  rev: number;
}

function makeBody(grid: typeof tank.hull, lineMat: LineMaterial = edgeMat): Body {
  const geo = buildEntityGeometry(grid);
  const mesh = new THREE.Mesh(geo.faces, faceMat);
  const lines = makeFatLines(geo.edges, lineMat);
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
  updateFatLines(body.lines, geo.edges);
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
const structureMat = (kind: string): LineMaterial =>
  kind === 'depot' ? depotEdgeMat : kind === 'scan' ? scanEdgeMat : objectEdgeMat;
for (const s of world.structures) {
  const b = makeBody(s.grid, structureMat(s.kind));
  b.group.position.set(s.x, 0, s.z);
  scene.add(b.group);
  structureBodies.set(s.id, b);
}
const rubbleMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
const rubbleEdgeMat = makeLineMaterial(0x1d7a3a, 1.0);
let rubbleMesh = new THREE.Mesh(new THREE.BufferGeometry(), rubbleMat);
let rubbleLines = makeFatLinesFromPositions(new Float32Array(6), rubbleEdgeMat);
// empty initial geometry has a NaN bounding sphere; never cull these
rubbleMesh.frustumCulled = false;
rubbleLines.frustumCulled = false;
scene.add(rubbleMesh, rubbleLines);
let rubbleRev = -1;
const chunkGroups = new Map<number, LineSegments2>();
const fenceGroups = new Map<number, LineSegments2>();
const fenceMat = makeLineMaterial(0x39ff6b, 1.2, { transparent: true, opacity: 0.6 });
const lavaMat = makeLineMaterial(0xff6b2b, 1.8, { transparent: true, opacity: 0.75 });
const lavaLines = makeFatLinesFromPositions(new Float32Array(6), lavaMat);
scene.add(lavaLines);
let lavaKey = '';
let emberAcc = 0;

// M8: screen shake + ion-storm aurora
let shakeAmp = 0;
const auroraPos = new Float32Array(3 * 24 * 6);
const auroraMat = makeLineMaterial(0x35e0ff, 1.1, { transparent: true, opacity: 0.5, fog: false });
const aurora = makeFatLinesFromPositions(auroraPos, auroraMat);
aurora.visible = false;
scene.add(aurora);
let meteorAcc = 0;

// --- M5: enemy tanks, missiles, bomber, telegraphs, AI debug overlay --------
const enemyBodies = new Map<number, { hull: Body; turret: Body }>();
const missileGroups = new Map<number, LineSegments2>();
let bomberGroup: LineSegments2 | null = null;
let debugAi = false;
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyX') debugAi = !debugAi;
});
const debugPos = new Float32Array(4096);
const debugLines = makeFatLinesFromPositions(
  new Float32Array(6),
  makeLineMaterial(0xff4433, 1.0, { transparent: true, opacity: 0.7 }),
);
debugLines.visible = false;
scene.add(debugLines);

// line-of-fire: predicted trajectory + impact tick (user direction 2026-11-25)
const trajMat = makeLineMaterial(0x1d7a3a, 0.9, { transparent: true, opacity: 0.5 });
const trajPos = new Float32Array(18);
const trajLines = makeFatLinesFromPositions(trajPos, trajMat);
scene.add(trajLines);

const hud = createHud();
let lastBombBlip = -1e9;
let lastScanPing = -1e9;
let matchReported = false;
const killfeed: { text: string; born: number }[] = [];
let hitFlash: { angle: number; born: number } | null = null;
let playerThreat: { angle: number; born: number } | null = null;

// local leaderboard + results screen (5g)
const SCORES_KEY = 'vectorzone-scores';
interface ScoreRow { score: number; date: string }
function loadScores(): ScoreRow[] {
  try {
    return JSON.parse(localStorage.getItem(SCORES_KEY) ?? '[]') as ScoreRow[];
  } catch {
    return [];
  }
}
function showGameOver(): void {
  const rows = loadScores();
  rows.push({ score: world.score, date: new Date().toISOString().slice(0, 10) });
  rows.sort((a, b) => b.score - a.score);
  const top = rows.slice(0, 5);
  try {
    localStorage.setItem(SCORES_KEY, JSON.stringify(top));
  } catch { /* private mode */ }
  const P = PALETTES[settings.palette % PALETTES.length];
  const el = document.createElement('div');
  el.id = 'gameover';
  el.style.color = P.hud;
  const title = world.lives <= 0 ? 'GAME OVER' : 'MATCH COMPLETE';
  el.innerHTML =
    `<h1>${title}</h1>` +
    `<p class="final">SCORE ${String(world.score).padStart(6, '0')}</p>` +
    `<table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>` +
    top.map((r, i) => `<tr${r.score === world.score && r.date === new Date().toISOString().slice(0, 10) ? ' class="me"' : ''}><td>${i + 1}</td><td>${String(r.score).padStart(6, '0')}</td><td>${r.date}</td></tr>`).join('') +
    `</table>` +
    `<p class="hint">PRESS R TO RESTART</p>`;
  document.body.append(el);
}
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyR' && world.phase === 'over') location.reload();
});

function missileGeometry(): THREE.BufferGeometry {
  // local +Z: long body, pointed nose, swept fins, exhaust
  const p = [
    0, 0, 2.2, 0, 0, -1.6,
    0, 0, 2.2, -0.45, 0, 1.2,
    0, 0, 2.2, 0.45, 0, 1.2,
    0, 0, 2.2, 0, 0.45, 1.2,
    0, 0, 2.2, 0, -0.45, 1.2,
    -0.45, 0, 1.2, -0.9, 0, 0.2,
    0.45, 0, 1.2, 0.9, 0, 0.2,
    0, 0.45, 1.2, 0, 0.9, 0.2,
    0, -0.45, 1.2, 0, -0.9, 0.2,
    -0.9, 0, 0.2, -0.9, 0, -0.7,
    0.9, 0, 0.2, 0.9, 0, -0.7,
    0, 0.9, 0.2, 0, 0.9, -0.7,
    0, -0.9, 0.2, 0, -0.9, -0.7,
    0, 0, -1.6, 0, 0, -2.6,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  return g;
}

// A small solid core keeps the missile readable when its wireframe is viewed
// exactly nose-on and collapses toward a single pixel.
const missileCoreGeo = new THREE.ConeGeometry(0.28, 1.4, 4);
missileCoreGeo.rotateX(Math.PI / 2);

function missileMarkerTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d')!;
  x.clearRect(0, 0, 64, 64);
  x.strokeStyle = '#ffaa33';
  x.lineWidth = 5;
  x.beginPath();
  x.moveTo(32, 5);
  x.lineTo(59, 32);
  x.lineTo(32, 59);
  x.lineTo(5, 32);
  x.closePath();
  x.stroke();
  x.fillStyle = '#fff3c4';
  x.fillRect(27, 27, 10, 10);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const missileMarkerMat = new THREE.SpriteMaterial({
  map: missileMarkerTexture(),
  transparent: true,
  fog: false,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

function bomberGeometry(): THREE.BufferGeometry {
  // a basic aeroplane, not a saucer (user direction 2026-11-25):
  // fuselage, straight wings, tailplane, fin
  const p = [
    0, 0, -2.4, 0, 0, 2.4, // fuselage
    0, 0.25, 1.5, 0, 0.25, 2.1, // nose tick
    -3.2, 0, 0.2, 3.2, 0, 0.2, // main wing
    -3.2, 0, 0.2, -3.2, 0.3, 0.0, // wingtip fences
    3.2, 0, 0.2, 3.2, 0.3, 0.0,
    -1.2, 0, -2.1, 1.2, 0, -2.1, // tailplane
    0, 0, -2.2, 0, 0.9, -2.3, // fin
    0, 0.9, -2.3, 0, 0.5, -1.7,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  return g;
}

// Rigid gun mount (F1 fix): the camera is the turret transform composed with
// a fixed local offset — exactly as if parented to the gun. It swings with
// yaw AND pitch, so aim and view can never disagree.
const GUN_EYE = new THREE.Vector3(0, tank.turret.size.y * BLOCK_SIZE + 0.25, -0.9);
// three cameras look down their -Z; our gun points +Z, hence the half-turn.
const Q_HALF_TURN = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

bindInput();

// --- M2: arena scenery, solids, pooled smoke --------------------------------
const scen = buildScenery(scene);
let grid = scen.makeGrid(PALETTES[0].gridCenter, PALETTES[0].grid);
scene.add(grid);
const smoke = new ParticlePool(1024, false);
scene.add(smoke.object);
let smokeAcc = 0;

// --- M4: post chain, palettes, settings -------------------------------------
const post = createPost(renderer, scene, camera);
const tint = {
  tracer: [0.6, 1, 0.7] as number[],
  spark: [0.2, 0.9, 0.4] as number[],
  hazard: [1, 0.35, 0.1] as number[],
  scorch: [0.45, 0.22, 0.08] as number[],
  smoke: [0.1, 0.35, 0.16] as number[],
};
const aa = new AmbientAa();

function applySettings(s: Settings): void {
  if (s.map !== settings.map) {
    saveSettings(s);
    location.reload();
    return;
  }
  const P = PALETTES[s.palette % PALETTES.length];
  camera.fov = s.fov;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * s.res);
  renderer.setSize(window.innerWidth, window.innerHeight);
  post.resize(window.innerWidth, window.innerHeight);
  setLineResolution(window.innerWidth, window.innerHeight);
  edgeMat.color.setHex(P.world);
  objectEdgeMat.color.setHex(P.world);
  effectEdgeMat.color.setHex(P.world);
  rubbleEdgeMat.color.setHex(P.rubble);
  trajMat.color.setHex(P.dim);
  scen.mountainMat.color.setHex(P.dim);
  scen.volcanoMat.color.setHex(P.dim);
  scen.moonMat.color.setHex(P.moon);
  scene.remove(grid);
  grid.geometry.dispose();
  (grid.material as THREE.Material).dispose();
  grid = scen.makeGrid(P.gridCenter, P.grid);
  scene.add(grid);
  const c = new THREE.Color(P.world);
  tint.tracer = [c.r * 0.7 + 0.2, c.g * 0.7 + 0.2, c.b * 0.7 + 0.2];
  tint.spark = [c.r * 0.4, c.g * 0.9, c.b * 0.5];
  tint.hazard = P.hazard;
  tint.scorch = [P.hazard[0] * 0.45, P.hazard[1] * 0.45, P.hazard[2] * 0.45];
  const d = new THREE.Color(P.dim);
  tint.smoke = [d.r * 0.6, d.g * 0.6, d.b * 0.6];
  stats.style.color = P.hud;
  stats.style.textShadow = `0 0 6px ${P.hud}99`;
  document.getElementById('alerts')!.style.color = P.hud;
  post.bloom.strength = s.bloom;
  const u = post.crt.uniforms;
  u.uScan.value = 0.3 * s.crt;
  u.uVignette.value = 0.6 * s.crt;
  u.uBarrel.value = 0.06 * s.crt;
  u.uPersist.value = s.safe ? 0 : 0.55 * s.crt;
  u.uRoll.value = s.safe ? 0 : 0.15 * s.crt;
  u.uSafe.value = s.safe ? 1 : 0;
  faceMat.visible = !s.wireframe;
  rubbleMat.visible = !s.wireframe;
}
document.body.append(buildPanel(settings, PALETTES.map((p) => p.label), applySettings));
applySettings(settings);

// camera modes: periscope (rigid gun mount) / chase. C toggles.
let chase = false;
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyC') chase = !chase;
  if (!tank.alive && (e.code === 'ArrowLeft' || e.code === 'ArrowRight')) {
    spectatedId = nextSpectatorId(
      livingSpectators(world.tanks, 0),
      spectatedId,
      e.code === 'ArrowRight' ? 1 : -1,
    );
  }
});

// scorch rings: 16 fading tangent dashes in the shared pool (client-only)
function scorch(x: number, z: number, radius: number): void {
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    smoke.spawn(
      x + Math.sin(a) * radius, 0.02, z + Math.cos(a) * radius,
      0, 0, 0,
      20, tint.scorch[0], tint.scorch[1], tint.scorch[2], 0.5,
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
  aa,
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
  get spectatorId() {
    return spectatedId;
  },
  get deathStage() {
    return deathCam?.stage ?? null;
  },
  post,
  scene,
  command: readCommand,
  // numeric visual verification: render scene (or post chain) into a small
  // target and return lit-pixel count + mean color + row variance
  sample: (usePost: boolean) => {
    const N = 96;
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const cx = Math.floor(size.x / 2 - N / 2);
    const cy = Math.floor(size.y / 2 - N / 2);
    if (usePost) {
      post.composer.renderToScreen = false;
      post.composer.render();
      const buf = new Uint8Array(N * N * 4);
      renderer.readRenderTargetPixels(post.composer.readBuffer, cx, cy, N, N, buf);
      post.composer.renderToScreen = true;
      return statsOf(buf, N);
    }
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.UnsignedByteType });
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    const buf = new Uint8Array(N * N * 4);
    renderer.readRenderTargetPixels(rt, cx, cy, N, N, buf);
    renderer.setRenderTarget(null);
    rt.dispose();
    return statsOf(buf, N);
  },
};

function statsOf(buf: Uint8Array, n: number): { lit: number; mean: number[]; rowVar: number } {
  let lit = 0;
  const mean = [0, 0, 0];
  const rows: number[] = new Array(n).fill(0);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const i = (y * n + x) * 4;
      const l = buf[i] + buf[i + 1] + buf[i + 2];
      rows[y] += l;
      if (l > 60) {
        lit++;
        mean[0] += buf[i];
        mean[1] += buf[i + 1];
        mean[2] += buf[i + 2];
      }
    }
  }
  if (lit) {
    mean[0] /= lit;
    mean[1] /= lit;
    mean[2] /= lit;
  }
  const rm = rows.reduce((a, b) => a + b, 0) / n;
  const rowVar = rows.reduce((a, b) => a + (b - rm) * (b - rm), 0) / n;
  return { lit, mean: mean.map((v) => Math.round(v)), rowVar: Math.round(rowVar) };
}

// --- fixed-timestep loop ----------------------------------------------------
let accumulator = 0;
let last = performance.now();
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
  if (world.phase !== 'over') {
    while (accumulator >= TICK_DT) {
      stepWorld(world, [cmd]);
      evQueue.push(...world.events);
      accumulator -= TICK_DT;
    }
  } else {
    accumulator = 0;
  }
  tank = world.tanks[0];
  if (tank.alive) deathCam = null;

  refreshBody(hull, tank.hull);
  refreshBody(turret, tank.turret);

  // volcano steam/ash: subtle when dormant, a column during rumble, a thick
  // eruption plume with embers when active
  const vs = world.volcano.state;
  const smokeRate = vs === 'erupt' ? 50 : vs === 'rumble' ? 18 : vs === 'cooldown' ? 10 : 3;
  smokeAcc += dt;
  while (smokeAcc >= 1 / smokeRate) {
    smokeAcc -= 1 / smokeRate;
    const erupting = vs === 'erupt';
    const spread = erupting ? 45 : vs === 'rumble' ? 28 : 12;
    const ember = erupting && Math.random() < 0.4;
    smoke.spawn(
      scen.crater.x + (Math.random() - 0.5) * spread,
      scen.crater.y + (Math.random() - 0.5) * 8,
      scen.crater.z + (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * (erupting ? 12 : 4) + (erupting ? 6 : 0),
      (erupting ? 16 : 6) + Math.random() * (erupting ? 14 : 5),
      (Math.random() - 0.5) * (erupting ? 12 : 4),
      (erupting ? 10 : 5) + Math.random() * (erupting ? 8 : 4),
      ember ? tint.hazard[0] : tint.smoke[0] * 1.4,
      ember ? tint.hazard[1] : tint.smoke[1] * 1.4,
      ember ? tint.hazard[2] : tint.smoke[2] * 1.4,
      (erupting ? 12 : vs === 'rumble' ? 6 : 2.5) + Math.random() * (erupting ? 18 : 5),
    );
  }
  scen.volcanoMat.color.setHex(
    vs === 'erupt' ? 0xff6b2b : vs === 'rumble' ? 0x8a4a20 : PALETTES[settings.palette % PALETTES.length].dim,
  );
  if (world.phase === 'play') {
    for (const event of aa.update(dt, Math.random, radarViewHeading(tank.heading, tank.turretYaw))) {
    if (event.kind === 'tracer') {
      smoke.spawn(
        event.pos[0], event.pos[1], event.pos[2],
        event.dir[0] * 80, event.dir[1] * 80, event.dir[2] * 80,
        0.18, tint.tracer[0], tint.tracer[1], tint.tracer[2], 7,
      );
    } else {
      // Distant skyburst: short radial strokes and sparks, no ring or horizon bar.
      for (let i = 0; i < 10; i++) {
        const a = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 2;
        const l = Math.hypot(Math.sin(a), y, Math.cos(a)) || 1;
        smoke.spawn(
          event.pos[0], event.pos[1], event.pos[2],
          0, 0, 0,
          0.28, 1, 0.9, 0.55, 3 + Math.random() * 2,
          Math.sin(a) / l, y / l, Math.cos(a) / l,
        );
      }
      for (let i = 0; i < 24; i++) {
        const a = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 2;
        const speed = 12 + Math.random() * 10;
        smoke.spawn(
          event.pos[0], event.pos[1], event.pos[2],
          Math.sin(a) * speed, y * speed, Math.cos(a) * speed,
          1 + Math.random() * 0.6,
          tint.hazard[0], tint.hazard[1], tint.hazard[2],
          1.5 + Math.random() * 1.5,
        );
      }
    }
    }
  } else {
    aa.clear();
  }
  smoke.update(dt);

  // --- M3 sync: structures, rubble, chunks, dead tank ------------------------
  hull.group.visible = tank.alive;
  for (const s of world.structures) {
    let b = structureBodies.get(s.id);
    if (!b) {
      // eruption rock clusters arrive mid-match: create their body on first sight
      b = makeBody(s.grid, structureMat(s.kind));
      b.group.position.set(s.x, 0, s.z);
      scene.add(b.group);
      structureBodies.set(s.id, b);
    }
    refreshBody(b, s.grid);
  }
  if (world.rubbleRev !== rubbleRev) {
    rubbleRev = world.rubbleRev;
    const g = buildRubbleGeometry(world.rubble);
    rubbleMesh.geometry.dispose();
    rubbleLines.geometry.dispose();
    rubbleMesh.geometry = g.faces;
    updateFatLines(rubbleLines, g.edges);
    rebuilds++;
  }
  for (const ch of world.chunks) {
    let g = chunkGroups.get(ch.id);
    if (!g) {
      g = makeFatLines(buildChunkGeometry(ch.cells), rubbleEdgeMat);
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
      0.06, tint.tracer[0], tint.tracer[1], tint.tracer[2], 2.5,
    );
  }

  // --- M5 sync: enemies, missiles, bomber, telegraph rings ------------------
  for (const t of world.tanks) {
    if (t.id === 0) continue;
    let eb = enemyBodies.get(t.id);
    if (!eb) {
      eb = { hull: makeBody(t.hull), turret: makeBody(t.turret) };
      eb.turret.group.position.set(t.turretPivot.x, t.turretPivot.y, t.turretPivot.z);
      eb.turret.group.rotation.order = 'YXZ';
      eb.hull.group.add(eb.turret.group);
      scene.add(eb.hull.group);
      enemyBodies.set(t.id, eb);
    }
    refreshBody(eb.hull, t.hull);
    refreshBody(eb.turret, t.turret);
    eb.hull.group.visible = t.alive;
    eb.hull.group.position.set(t.x, 0, t.z);
    eb.hull.group.rotation.y = t.heading;
    eb.turret.group.rotation.y = t.turretYaw;
    eb.turret.group.rotation.x = -t.gunPitch;
  }
  for (const [id, eb] of enemyBodies) {
    if (!world.tanks.some((t) => t.id === id)) {
      scene.remove(eb.hull.group);
      enemyBodies.delete(id);
    }
  }
  for (const m of world.missiles) {
    let g = missileGroups.get(m.id);
    if (!g) {
      g = makeFatLines(missileGeometry(), missileEdgeMat);
      const core = new THREE.Mesh(missileCoreGeo, missileCoreMat);
      core.position.z = 0.25;
      g.add(core);
      const marker = new THREE.Sprite(missileMarkerMat);
      marker.scale.set(1.6, 1.6, 1.6);
      g.add(marker);
      missileGroups.set(m.id, g);
      scene.add(g);
    }
    g.position.set(m.pos[0], m.pos[1], m.pos[2]);
    g.scale.setScalar(m.scale);
    const dir = new THREE.Vector3(m.dir[0], m.dir[1], m.dir[2]).normalize();
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    // Fog-free exhaust trail: remains visible when the body aligns with the
    // horizon or is viewed end-on.
    for (let i = 0; i < 2; i++) {
      const back = (2.2 + i * 0.8) * m.scale;
      smoke.spawn(
        m.pos[0] - dir.x * back, m.pos[1] - dir.y * back, m.pos[2] - dir.z * back,
        -dir.x * 2 + (Math.random() - 0.5), (Math.random() - 0.5), -dir.z * 2 + (Math.random() - 0.5),
        0.45 + i * 0.15, tint.hazard[0], tint.hazard[1], tint.hazard[2], 1.3 * m.scale,
        dir.x, dir.y, dir.z,
      );
    }
  }
  for (const [id, g] of missileGroups) {
    if (!world.missiles.some((m) => m.id === id)) {
      scene.remove(g);
      g.geometry.dispose();
      missileGroups.delete(id);
    }
  }
  for (const shot of world.defenseShots) {
    // Same tracer rendering as tank shells, only thinner. No muzzle particles.
    smoke.spawn(
      shot.pos[0], shot.pos[1], shot.pos[2],
      shot.dir[0] * 60, shot.dir[1] * 60, shot.dir[2] * 60,
      0.06, tint.tracer[0], tint.tracer[1], tint.tracer[2], 1.3,
    );
  }
  if (world.bomber) {
    if (!bomberGroup) {
      bomberGroup = makeFatLines(bomberGeometry(), effectEdgeMat);
      scene.add(bomberGroup);
    }
    bomberGroup.position.set(world.bomber.pos[0], world.bomber.pos[1], world.bomber.pos[2]);
    bomberGroup.rotation.y = Math.atan2(world.bomber.dir[0], world.bomber.dir[2]);
  } else if (bomberGroup) {
    scene.remove(bomberGroup);
    bomberGroup.geometry.dispose();
    bomberGroup = null;
  }
  // telegraph rings pulse while a bomb is inbound (>= 1.5 s warning)
  for (const tg of world.telegraphs) {
    const pulse = 0.5 + 0.5 * Math.sin(now / 90);
    const ringSegments = tg.kind === 'volcano' ? 32 : 16;
    for (let i = 0; i < ringSegments; i++) {
      const a = (i / ringSegments) * Math.PI * 2;
      smoke.spawn(
        tg.x + Math.sin(a) * tg.radius, 0.05, tg.z + Math.cos(a) * tg.radius,
        0, 0, 0,
        0.12, tint.hazard[0] * pulse, tint.hazard[1] * pulse, tint.hazard[2] * pulse, tg.kind === 'volcano' ? 1.2 : 0.5,
        Math.cos(a), 0, -Math.sin(a),
      );
    }
    // visible falling projectile: volcanic bombs arc down from high above
    if (tg.kind === 'volcano' || tg.kind === 'meteor') {
      const remain = Math.max(0, tg.impactTick - world.tick);
      const fall = 1 - remain / 90;
      const y = 85 * (1 - fall) * (1 - fall) + 1;
      for (let j = 0; j < 7; j++) {
        smoke.spawn(
          tg.x + Math.sin(j * 0.7 + now / 200) * 0.5,
          y + j * 1.4,
          tg.z + Math.cos(j * 0.7 + now / 200) * 0.5,
          -1.5, -22, -1.5,
          0.25, tint.hazard[0], tint.hazard[1], tint.hazard[2], 2.2,
        );
      }
    }
  }
  // energy fence curtains: shimmering vertical dashes between live pylons
  for (const f of world.fences) {
    const alive = fenceAlive(world, f);
    let g = fenceGroups.get(f.id);
    if (alive && !g) {
      const p: number[] = [];
      const len = Math.hypot(f.bx - f.ax, f.bz - f.az);
      const n = Math.max(2, Math.floor(len / 0.6));
      for (let i = 0; i <= n; i++) {
        const u = i / n;
        const x = f.ax + (f.bx - f.ax) * u;
        const z = f.az + (f.bz - f.az) * u;
        p.push(x, 0, z, x, f.height, z);
      }
      p.push(f.ax, f.height, f.az, f.bx, f.height, f.bz);
      p.push(f.ax, 0.05, f.az, f.bx, 0.05, f.bz);
      g = makeFatLinesFromPositions(p, fenceMat);
      fenceGroups.set(f.id, g);
      scene.add(g);
    } else if (!alive && g) {
      scene.remove(g);
      g.geometry.dispose();
      fenceGroups.delete(f.id);
    }
  }
  fenceMat.opacity = 0.45 + 0.25 * Math.sin(now / 180);

  // M8 sky: aurora bands during ion storms; meteor streaks on stormfield
  const storming = world.stormUntil > world.tick;
  aurora.visible = storming;
  if (storming) {
    let n = 0;
    for (let band = 0; band < 3; band++) {
      for (let i = 0; i < 24; i++) {
        const a0 = (i / 24) * Math.PI * 2;
        const a1 = ((i + 1) / 24) * Math.PI * 2;
        const y0 = 130 + band * 18 + Math.sin(a0 * 3 + now / 400 + band) * 10;
        const y1 = 130 + band * 18 + Math.sin(a1 * 3 + now / 400 + band) * 10;
        auroraPos[n++] = Math.sin(a0) * 520; auroraPos[n++] = y0; auroraPos[n++] = Math.cos(a0) * 520;
        auroraPos[n++] = Math.sin(a1) * 520; auroraPos[n++] = y1; auroraPos[n++] = Math.cos(a1) * 520;
      }
    }
    updateFatLinesFromArray(aurora, auroraPos);
    auroraMat.opacity = 0.3 + 0.25 * Math.sin(now / 300);
  }
  if (world.sky.meteors) {
    meteorAcc += dt;
    while (meteorAcc > 0.35) {
      meteorAcc -= 0.35;
      const a = Math.random() * Math.PI * 2;
      smoke.spawn(
        Math.sin(a) * 400, 150 + Math.random() * 60, Math.cos(a) * 400,
        -Math.sin(a) * 60 - 20, -35, -Math.cos(a) * 60,
        1.2, tint.tracer[0], tint.tracer[1], tint.tracer[2], 6,
      );
    }
  }
  shakeAmp *= Math.exp(-dt * 6);

  // lava pools: one thick-line mesh (rebuilt only when pools change), plus
  // sparse rising embers. Never spawn hundreds of ring particles per frame.
  const key = world.lavaPools.map((p) => `${p.x.toFixed(1)},${p.z.toFixed(1)},${p.radius.toFixed(1)},${p.untilTick}`).join('|');
  if (key !== lavaKey) {
    lavaKey = key;
    const pos: number[] = [];
    for (const pool of world.lavaPools) {
      for (let ring = 0; ring < 2; ring++) {
        const r = pool.radius * (ring === 0 ? 1 : 0.55);
        for (let i = 0; i < 32; i++) {
          const a = (i / 32) * Math.PI * 2;
          const b = ((i + 1) / 32) * Math.PI * 2;
          pos.push(
            pool.x + Math.sin(a) * r, 0.07, pool.z + Math.cos(a) * r,
            pool.x + Math.sin(b) * r, 0.07, pool.z + Math.cos(b) * r,
          );
        }
      }
    }
    updateFatLinesFromArray(lavaLines, pos.length ? pos : new Float32Array(6));
    lavaLines.visible = world.lavaPools.length > 0;
  }
  lavaMat.opacity = 0.55 + 0.25 * Math.sin(now / 180);
  emberAcc += dt;
  while (emberAcc > 0.12 && world.lavaPools.length) {
    emberAcc -= 0.12;
    const pool = world.lavaPools[Math.floor(Math.random() * world.lavaPools.length)];
    smoke.spawn(
      pool.x + (Math.random() - 0.5) * pool.radius,
      0.1,
      pool.z + (Math.random() - 0.5) * pool.radius,
      (Math.random() - 0.5) * 1.5, 3 + Math.random() * 4, (Math.random() - 0.5) * 1.5,
      0.8, tint.hazard[0], tint.hazard[1], tint.hazard[2], 0.7,
    );
  }
  // AI debug overlay: intent, LOS, aim cone (X toggles)
  debugLines.visible = debugAi;
  if (debugAi) {
    let n = 0;
    const push = (...v: number[]) => {
      for (const x of v) debugPos[n++] = x;
    };
    for (const t of world.tanks) {
      const b = world.brains.get(t.id);
      if (!b || !t.alive) continue;
      if (b.debug.intent) {
        push(t.x, 1.4, t.z, b.debug.intent[0], 1.4, b.debug.intent[2]);
      }
      if (b.aim) {
        const yaw = t.heading + t.turretYaw;
        const e = b.debug.err || 0.05;
        for (const s of [-1, 1]) {
          push(
            t.x, 1.4, t.z,
            t.x + Math.sin(yaw + e * s) * 20, 1.4, t.z + Math.cos(yaw + e * s) * 20,
          );
        }
      }
    }
    updateFatLinesFromArray(debugLines, debugPos.subarray(0, n));
  }

  // combat events → particles & scorch rings
  for (const ev of evQueue) {
    if (ev.kind === 'superSpawn') hud.alert('SUPERTANK INBOUND');
    else if (ev.kind === 'bomberInbound') hud.alert('BOMBER RUN');
    else if (ev.kind === 'volcanoRumble') hud.alert('VOLCANO RUMBLING — ERUPTION IMMINENT');
    else if (ev.kind === 'volcanoErupt') hud.alert('ERUPTION');
    else if (ev.kind === 'matchEnd') hud.alert('MATCH COMPLETE');
    else if (ev.kind === 'kill' && ev.what === 'bomber') hud.alert('BOMBER DOWN');
    else if (ev.kind === 'scanPing') {
      lastScanPing = now;
      hud.alert('SCAN PING');
    }
    else if (ev.kind === 'ionStorm') hud.alert('ION STORM — RADAR DOWN');
    else if (ev.kind === 'meteorInbound') hud.alert('METEOR INBOUND');
    else if (ev.kind === 'missileLock') hud.alert('MISSILE LOCK');
    else if (ev.kind === 'selfDestructArmed' && ev.id === 0) hud.alert('SELF-DESTRUCT ARMED — 10s');
    else if (ev.kind === 'bombTelegraph') lastBombBlip = now;
    if (ev.kind === 'fire' && ev.owner === 0) shakeAmp = Math.min(0.35, shakeAmp + 0.035);
    if (ev.kind === 'explosion') {
      const d = Math.hypot(ev.pos[0] - tank.x, ev.pos[2] - tank.z);
      shakeAmp = Math.min(1, shakeAmp + explosionShake(d, ev.radius, ev.source));
    }
    if (ev.kind === 'tankKilled' && ev.id === 0) shakeAmp = Math.min(0.8, shakeAmp + 0.3);
    // killfeed + directional hit flash
    if (ev.kind === 'tankKilled') {
      if (ev.id === 0) {
        lastKillerId = ev.by;
        deathCam = beginDeathCam(now, ev.pos, ev.by, world.bomber?.id ?? null);
        spectatedId = null;
        killfeed.push({ text: ev.cause === 'selfDestruct' ? 'YOU SELF-DESTRUCTED' : ev.by === null ? 'THE ZONE KILLED YOU' : 'ENEMY KILLED YOU', born: now });
      } else if (ev.cause === 'selfDestruct') {
        killfeed.push({ text: 'ENEMY SELF-DESTRUCTED', born: now });
      } else if (ev.by === 0) {
        killfeed.push({ text: `YOU KILLED ${world.brains.get(ev.id)?.kind === 'super' ? 'SUPERTANK' : 'TANK'}`, born: now });
      }
    } else if (ev.kind === 'kill' && ev.by === 0) {
      killfeed.push({ text: ev.what === 'bomber' ? 'YOU DOWNED BOMBER' : 'YOU DOWNED MISSILE', born: now });
    }
    if (ev.kind === 'blockDestroyed' && ev.by !== 0 && Math.hypot(ev.pos[0] - tank.x, ev.pos[2] - tank.z) < 4) {
      const dx = ev.pos[0] - tank.x;
      const dz = ev.pos[2] - tank.z;
      hitFlash = { angle: radarBearing(dx, dz, radarViewHeading(tank.heading, tank.turretYaw)), born: now };
      playerThreat = { angle: radarBearing(dx, dz, radarViewHeading(tank.heading, tank.turretYaw)), born: now };
      shakeAmp = Math.min(0.5, shakeAmp + impactShake(Math.hypot(dx, dz)));
    }
    if (ev.kind === 'explosion' && Math.hypot(ev.pos[0] - tank.x, ev.pos[2] - tank.z) < 6) {
      const dx = ev.pos[0] - tank.x;
      const dz = ev.pos[2] - tank.z;
      hitFlash = { angle: radarBearing(dx, dz, radarViewHeading(tank.heading, tank.turretYaw)), born: now };
      playerThreat = { angle: radarBearing(dx, dz, radarViewHeading(tank.heading, tank.turretYaw)), born: now };
    }
    if (ev.kind === 'fire') {
      for (let i = 0; i < 8; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1], ev.pos[2],
          ev.dir[0] * 12 + (Math.random() - 0.5) * 6,
          ev.dir[1] * 12 + (Math.random() - 0.5) * 6,
          ev.dir[2] * 12 + (Math.random() - 0.5) * 6,
          0.15, tint.tracer[0], tint.tracer[1], tint.tracer[2], 0.6,
        );
      }
    } else if (ev.kind === 'blockDestroyed') {
      for (let i = 0; i < 6; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1], ev.pos[2],
          (Math.random() - 0.5) * 8, Math.random() * 6, (Math.random() - 0.5) * 8,
          0.4, tint.spark[0], tint.spark[1], tint.spark[2], 0.4,
        );
      }
    } else if (ev.kind === 'shellImpact') {
      scorch(ev.pos[0], ev.pos[2], 1.2);
      for (let i = 0; i < 10; i++) {
        smoke.spawn(
          ev.pos[0], ev.pos[1] + 0.1, ev.pos[2],
          (Math.random() - 0.5) * 7, Math.random() * 5, (Math.random() - 0.5) * 7,
          0.35, tint.spark[0], tint.spark[1], tint.spark[2], 0.4,
        );
      }
    } else if (ev.kind === 'explosion') {
      if (ev.pos[1] < 5) scorch(ev.pos[0], ev.pos[2], ev.radius);
      for (let i = 0; i < 40; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 4 + Math.random() * 8;
        smoke.spawn(
          ev.pos[0], ev.pos[1] + 0.2, ev.pos[2],
          Math.sin(a) * s, Math.random() * 9, Math.cos(a) * s,
          0.7, tint.hazard[0], tint.hazard[1], tint.hazard[2], 0.8,
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
          1, tint.hazard[0], tint.hazard[1], tint.hazard[2], 0.9,
        );
      }
    }
  }

  const spectators = tank.alive ? [] : livingSpectators(world.tanks, 0);
  if (!tank.alive && deathCam) {
    const killerId = deathCam.killerId;
    const killerAvailable = killerId !== null && (
      (world.bomber?.alive === true && world.bomber.id === killerId) ||
      spectators.some((t) => t.id === killerId)
    );
    deathCam = updateDeathCam(deathCam, now, killerAvailable);
  }
  const canSpectate = !deathCam || deathCam.stage === 'spectator';
  if (tank.alive) {
    spectatedId = null;
  } else if (canSpectate && spectators.length) {
    if (spectatedId === null) {
      spectatedId = spectators.find((t) => t.id === lastKillerId)?.id ?? spectators[0].id;
    } else if (!spectators.some((t) => t.id === spectatedId)) {
      spectatedId = spectators[0].id;
    }
  }
  const spectatedTank = canSpectate ? spectators.find((t) => t.id === spectatedId) ?? null : null;
  if (world.phase === 'over' && !matchReported && canSpectate) {
    matchReported = true;
    showGameOver();
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
  } else if (deathCam?.stage === 'explosion') {
    const age = (now - deathCam.startedAt) / 1000;
    const a = age * 0.25;
    camera.position.set(
      deathCam.pos[0] + Math.sin(a) * 7,
      deathCam.pos[1] + 3.5,
      deathCam.pos[2] + Math.cos(a) * 7,
    );
    camera.lookAt(deathCam.pos[0], deathCam.pos[1], deathCam.pos[2]);
  } else if (deathCam?.stage === 'killer') {
    const killerId = deathCam.killerId;
    const killerBomber = world.bomber?.alive && world.bomber.id === killerId ? world.bomber : null;
    const killerTank = world.tanks.find((t) => t.alive && t.id === killerId);
    if (killerBomber) {
      camera.position.set(
        killerBomber.pos[0] - Math.sin(Math.atan2(killerBomber.dir[0], killerBomber.dir[2])) * 16,
        killerBomber.pos[1] + 5,
        killerBomber.pos[2] - Math.cos(Math.atan2(killerBomber.dir[0], killerBomber.dir[2])) * 16,
      );
      camera.lookAt(killerBomber.pos[0], killerBomber.pos[1], killerBomber.pos[2]);
    } else if (killerTank) {
      camera.position.set(
        killerTank.x - Math.sin(killerTank.heading) * 12,
        6.5,
        killerTank.z - Math.cos(killerTank.heading) * 12,
      );
      camera.lookAt(killerTank.x, 1.2, killerTank.z);
    } else {
      camera.position.set(deathCam.pos[0] + 6, 4, deathCam.pos[2] + 6);
      camera.lookAt(deathCam.pos[0], deathCam.pos[1], deathCam.pos[2]);
    }
  } else if (!tank.alive && spectatedTank) {
    // spectator chase cam: watch the selected living tank
    camera.position.set(
      spectatedTank.x - Math.sin(spectatedTank.heading) * 12,
      6.5,
      spectatedTank.z - Math.cos(spectatedTank.heading) * 12,
    );
    camera.lookAt(spectatedTank.x, 1.2, spectatedTank.z);
  } else if (!tank.alive) {
    // no living targets: hold on the wreck
    camera.position.set(tank.x + 6, 4, tank.z + 6);
    camera.lookAt(tank.x, 1, tank.z);
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
  if (settings.shake && shakeAmp > 0.001) {
    camera.position.x += (Math.random() - 0.5) * shakeAmp;
    camera.position.y += (Math.random() - 0.5) * shakeAmp;
    camera.position.z += (Math.random() - 0.5) * shakeAmp;
  }

  renderer.info.reset();
  post.render(now / 1000);

  // line-of-fire sight: muzzle → predicted first impact
  if (tank.alive) {
    const dir = turretForward(tank);
    const muzzle = turretToWorld(tank, [0, BLOCK_SIZE, (tank.turret.size.z / 2) * BLOCK_SIZE + 0.15]);
    const tr = traceShot(world, muzzle, dir, 400, 0);
    trajPos[0] = muzzle[0]; trajPos[1] = muzzle[1]; trajPos[2] = muzzle[2];
    trajPos[3] = tr.pos[0]; trajPos[4] = tr.pos[1]; trajPos[5] = tr.pos[2];
    // impact cross
    const s = 0.5;
    trajPos[6] = tr.pos[0] - s; trajPos[7] = tr.pos[1]; trajPos[8] = tr.pos[2];
    trajPos[9] = tr.pos[0] + s; trajPos[10] = tr.pos[1]; trajPos[11] = tr.pos[2];
    trajPos[12] = tr.pos[0]; trajPos[13] = tr.pos[1]; trajPos[14] = tr.pos[2] - s;
    trajPos[15] = tr.pos[0]; trajPos[16] = tr.pos[1]; trajPos[17] = tr.pos[2] + s;
    updateFatLinesFromArray(trajLines, trajPos);
    trajLines.visible = true;
  } else {
    trajLines.visible = false;
  }

  // HUD: band + radar + reticle + alerts
  const superIds = new Set<number>();
  const tankHeadings = new Map<number, number>();
  const tankTurrets = new Map<number, number>();
  for (const t of world.tanks) {
    tankHeadings.set(t.id, t.heading);
    tankTurrets.set(t.id, t.turretYaw);
    const b = world.brains.get(t.id);
    if (b?.kind === 'super') superIds.add(t.id);
  }
  const scanner = world.structures.find((s) => s.kind === 'scan' && s.grid.cells.some((c) => c));
  hud.draw({
    tick: world.tick,
    heading: tank.heading,
    turretYaw: tank.turretYaw,
    x: tank.x,
    z: tank.z,
    known: world.awareness.get(0),
    tankHeadings,
    tankTurrets,
    missiles: world.missiles.map((m) => ({
      id: m.id,
      x: m.pos[0],
      z: m.pos[2],
      heading: Math.atan2(m.dir[0], m.dir[2]),
      targeted: m.targetId === 0,
      scale: m.scale,
      mode: m.mode,
    })),
    scanner: scanner ? { x: scanner.x, z: scanner.z } : null,
    scanPulse: pulseProgress(now, lastScanPing),
    bomber: world.bomber ? {
      x: world.bomber.pos[0],
      z: world.bomber.pos[2],
      heading: Math.atan2(world.bomber.dir[0], world.bomber.dir[2]),
    } : null,
    bomberBlip: now - lastBombBlip < 3000,
    superIds,
    storm: world.stormUntil > world.tick,
    score: world.score,
    lives: world.lives,
    cooldownFrac: 1 - Math.min(1, tank.cooldown / SHELL_COOLDOWN),
    secondsLeft: Math.max(0, (MATCH_TICKS - world.tick) / 60),
    palette: PALETTES[settings.palette % PALETTES.length],
    alive: tank.alive,
    status: {
      core: countType(tank.hull, 'core'),
      tread: countType(tank.hull, 'tread'),
      gun: countType(tank.turret, 'gun'),
      engine: countType(tank.hull, 'engine'),
    },
    killfeed,
    hitFlash,
    threatBearing: playerThreat && now - playerThreat.born < 2500
      ? { angle: playerThreat.angle, progress: (now - playerThreat.born) / 2500 }
      : null,
    elevation: tank.gunPitch,
    selfDestructSeconds: tank.selfDestructTick === null ? null : Math.max(0, (tank.selfDestructTick - world.tick) / 60),
    spectator: spectatedTank ? {
      label: spectatorLabel(spectatedTank, world.brains.get(spectatedTank.id)?.kind),
      secondsLeft: Math.max(0, (world.respawnTick - world.tick) / 60),
    } : null,
    respawnReady: canSpectate && !tank.alive && world.respawnTick > 0 && world.tick >= world.respawnTick,
    now,
  });

  frames++;
  fpsWindow += dt;
  if (fpsWindow >= 0.5) {
    fps = Math.round(frames / fpsWindow);
    frames = 0;
    fpsWindow = 0;
  }
  stats.textContent = `FPS ${fps} · calls ${renderer.info.render.calls} · tick ${world.tick} · v ${tank.speed.toFixed(1)} m/s · aa ${aa.activeCount} · ${chase ? 'chase' : 'scope'} [C]`;
}
requestAnimationFrame(frame);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  post.resize(window.innerWidth, window.innerHeight);
  setLineResolution(window.innerWidth, window.innerHeight);
});