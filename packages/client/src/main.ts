/**
 * M1 — Block tank.
 * A hand-authored block-grid tank in the solid-vector look (black faces +
 * glowing edges), driven by WASD / arrows, camera riding the turret.
 * See docs/learn/m1.md for the concepts.
 */
import * as THREE from 'three';
import {
  BLOCK_SIZE,
  createWorld,
  stepWorld,
  TICK_DT,
  traceShot,
  turretForward,
  turretToWorld,
  MATCH_TICKS,
  SHELL_COOLDOWN,
  type SimEvent,
  type TankCommand,
} from '@vectorzone/sim';
import { buildEntityGeometry } from './geometry';
import { createHud } from './hud';
import { bindInput, readCommand } from './input';
import { PALETTES } from './palette';
import { ParticlePool } from './particles';
import { createPost } from './post';
import { buildChunkGeometry, buildObstacleMeshes, buildRubbleGeometry, buildScenery } from './scenery';
import { buildPanel, loadSettings, type Settings } from './settings';
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
const edgeMat = new THREE.LineBasicMaterial({ color: PHOSPHOR });

// --- sim + tank visuals ----------------------------------------------------
const world = createWorld(0xb477e2);
let tank = world.tanks[0];

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
// empty initial geometry has a NaN bounding sphere; never cull these
rubbleMesh.frustumCulled = false;
rubbleLines.frustumCulled = false;
scene.add(rubbleMesh, rubbleLines);
let rubbleRev = -1;
const chunkGroups = new Map<number, THREE.LineSegments>();

// --- M5: enemy tanks, missiles, bomber, telegraphs, AI debug overlay --------
const enemyBodies = new Map<number, { hull: Body; turret: Body }>();
const missileGroups = new Map<number, THREE.LineSegments>();
let bomberGroup: THREE.LineSegments | null = null;
let debugAi = false;
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyX') debugAi = !debugAi;
});
const debugGeo = new THREE.BufferGeometry();
const debugPos = new Float32Array(4096);
debugGeo.setAttribute(
  'position',
  new THREE.BufferAttribute(debugPos, 3).setUsage(THREE.DynamicDrawUsage),
);
debugGeo.setDrawRange(0, 0);
const debugLines = new THREE.LineSegments(
  debugGeo,
  new THREE.LineBasicMaterial({ color: 0xff4433, transparent: true, opacity: 0.7 }),
);
debugLines.frustumCulled = false;
debugLines.visible = false;
scene.add(debugLines);

// line-of-fire: predicted trajectory + impact tick (user direction 2026-11-25)
const trajMat = new THREE.LineBasicMaterial({ color: 0x1d7a3a, transparent: true, opacity: 0.5 });
const trajPos = new Float32Array(18);
const trajGeo = new THREE.BufferGeometry();
trajGeo.setAttribute('position', new THREE.BufferAttribute(trajPos, 3).setUsage(THREE.DynamicDrawUsage));
const trajLines = new THREE.LineSegments(trajGeo, trajMat);
trajLines.frustumCulled = false;
scene.add(trajLines);

const hud = createHud();
let lastBombBlip = -1e9;
let matchReported = false;

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

function crossGeometry(size: number): THREE.BufferGeometry {
  const s = size;
  const p = [-s, 0, 0, s, 0, 0, 0, 0, -s, 0, 0, s, 0, -s, 0, 0, s, 0];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  return g;
}

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
const settings = loadSettings();
let grid = scen.makeGrid(PALETTES[0].gridCenter, PALETTES[0].grid);
scene.add(grid);
scene.add(buildObstacleMeshes(world.obstacles, faceMat, edgeMat));
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

function applySettings(s: Settings): void {
  const P = PALETTES[s.palette % PALETTES.length];
  edgeMat.color.setHex(P.world);
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
  post,
  scene,
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
  if (world.phase === 'over' && !matchReported) {
    matchReported = true;
    showGameOver();
  }

  refreshBody(hull, tank.hull);
  refreshBody(turret, tank.turret);

  // dormant volcano smoke: ~3 wisps/sec, cosmetic randomness lives client-side
  smokeAcc += dt;
  while (smokeAcc > 1 / 3) {
    smokeAcc -= 1 / 3;
    smoke.spawn(
      scen.crater.x + (Math.random() - 0.5) * 14,
      scen.crater.y,
      scen.crater.z + (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 2,
      4 + Math.random() * 3,
      (Math.random() - 0.5) * 2,
      5 + Math.random() * 2,
      tint.smoke[0], tint.smoke[1], tint.smoke[2],
      1.4,
    );
  }
  smoke.update(dt);

  // --- M3 sync: structures, rubble, chunks, dead tank ------------------------
  hull.group.visible = tank.alive;
  for (const s of world.structures) {
    let b = structureBodies.get(s.id);
    if (!b) {
      // eruption rock clusters arrive mid-match: create their body on first sight
      b = makeBody(s.grid);
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
      g = new THREE.LineSegments(crossGeometry(0.7), edgeMat);
      missileGroups.set(m.id, g);
      scene.add(g);
    }
    g.position.set(m.pos[0], m.pos[1], m.pos[2]);
    g.rotation.y = Math.atan2(m.dir[0], m.dir[2]);
  }
  for (const [id, g] of missileGroups) {
    if (!world.missiles.some((m) => m.id === id)) {
      scene.remove(g);
      g.geometry.dispose();
      missileGroups.delete(id);
    }
  }
  if (world.bomber) {
    if (!bomberGroup) {
      bomberGroup = new THREE.LineSegments(bomberGeometry(), edgeMat);
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
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      smoke.spawn(
        tg.x + Math.sin(a) * tg.radius, 0.05, tg.z + Math.cos(a) * tg.radius,
        0, 0, 0,
        0.12, tint.hazard[0] * pulse, tint.hazard[1] * pulse, tint.hazard[2] * pulse, 0.5,
        Math.cos(a), 0, -Math.sin(a),
      );
    }
  }
  // lava pools pulse hazard-orange while they burn
  for (const pool of world.lavaPools) {
    const pulse = 0.5 + 0.5 * Math.sin(now / 120);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 + now / 900;
      smoke.spawn(
        pool.x + Math.sin(a) * pool.radius, 0.06, pool.z + Math.cos(a) * pool.radius,
        0, 0.6, 0,
        0.14, tint.hazard[0] * pulse, tint.hazard[1] * pulse, tint.hazard[2] * pulse, 0.6,
        Math.cos(a), 0, -Math.sin(a),
      );
    }
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
    debugGeo.setDrawRange(0, n / 3);
    (debugGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  }

  // combat events → particles & scorch rings
  for (const ev of evQueue) {
    if (ev.kind === 'superSpawn') hud.alert('SUPERTANK INBOUND');
    else if (ev.kind === 'bomberInbound') hud.alert('BOMBER RUN');
    else if (ev.kind === 'volcanoRumble') hud.alert('VOLCANO RUMBLING — ERUPTION IMMINENT');
    else if (ev.kind === 'volcanoErupt') hud.alert('ERUPTION');
    else if (ev.kind === 'matchEnd') hud.alert('MATCH COMPLETE');
    else if (ev.kind === 'kill' && ev.what === 'bomber') hud.alert('BOMBER DOWN');
    else if (ev.kind === 'bombTelegraph') lastBombBlip = now;
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
      scorch(ev.pos[0], ev.pos[2], ev.radius);
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

  // sync transforms from sim state
  hull.group.position.set(tank.x, 0, tank.z);
  hull.group.rotation.y = tank.heading;
  turret.group.rotation.y = tank.turretYaw;
  turret.group.rotation.x = -tank.gunPitch; // +pitch = barrel up

  // camera = rigid gun mount (see GUN_EYE above); debug override stays world-space
  if (debug.cam) {
    camera.position.set(...debug.cam.p);
    camera.lookAt(...debug.cam.l);
  } else if (!tank.alive && world.respawnTick > 0) {
    // deathcam: hold on the wreck for the 3 s respawn delay
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
    (trajGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    trajLines.visible = true;
  } else {
    trajLines.visible = false;
  }

  // HUD: band + radar + reticle + alerts
  const superIds = new Set<number>();
  for (const [id, b] of world.brains) if (b.kind === 'super') superIds.add(id);
  hud.draw({
    tick: world.tick,
    heading: tank.heading,
    turretYaw: tank.turretYaw,
    x: tank.x,
    z: tank.z,
    known: world.awareness.get(0),
    superIds,
    storm: world.stormUntil > world.tick,
    score: world.score,
    lives: world.lives,
    cooldownFrac: 1 - Math.min(1, tank.cooldown / SHELL_COOLDOWN),
    bomberBlip: now - lastBombBlip < 3000,
    secondsLeft: Math.max(0, (MATCH_TICKS - world.tick) / 60),
    palette: PALETTES[settings.palette % PALETTES.length],
    alive: tank.alive,
  });

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
  post.resize(window.innerWidth, window.innerHeight);
});