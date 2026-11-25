import { createRng, type Rng } from './rng';
import { BLOCK_SIZE, getCell, setCell, type BlockGrid, type BlockType } from './grid';
import {
  createTank,
  hullToWorld,
  neutralCommand,
  stepTank,
  turretForward,
  turretToWorld,
  worldToHull,
  worldToTurret,
  type Tank,
  type TankCommand,
} from './tank';
import { anchorCells, detachDisconnected, makeStructure, type Structure } from './structure';
import { raycastGrid, type V3 } from './raycast';
import {
  CHUNK_SETTLE_TICKS,
  EXPLOSION_DAMAGE,
  EXPLOSION_RADIUS,
  PEN_COST,
  RUBBLE_CAP,
  SHELL_BUDGET,
  SHELL_COOLDOWN,
  SHELL_SPEED,
  SPLASH_DAMAGE,
  type Shell,
  type SimEvent,
} from './combat';
import { stepAwareness, type Known } from './awareness';
import { thinkBrain, AI_KNOBS, type AiBrain } from './ai';
import { BOMBER_PERIOD, SCORE_VALUES, stepDirector, type Bomber, type Missile, type Telegraph } from './director';
import { createVolcano, stepVolcano, type LavaPool, type Volcano } from './volcano';
import { fenceAlive, fenceHitT, fencePush, type Fence } from './fence';
import { MAPS, type MapId, type SkyProfile } from './maps';
import { stepSky } from './sky';
import { MATCH_TICKS } from './combat';

export interface RubbleCell {
  x: number;
  z: number;
  type: BlockType;
  born: number;
}

export interface Chunk {
  id: number;
  pos: V3;
  vel: V3;
  angle: number;
  spin: number;
  settleTick: number;
  cells: { off: V3; type: BlockType }[];
}

export interface World {
  readonly seed: number;
  tick: number;
  rng: Rng;
  arenaHalf: number;
  tanks: Tank[];
  structures: Structure[];
  shells: Shell[];
  chunks: Chunk[];
  rubble: RubbleCell[];
  rubbleRev: number;
  events: SimEvent[];
  pendingExplosions: V3[];
  nextId: number;
  // M5: awareness, AI, director, solo loop
  awareness: Map<number, Map<number, Known>>;
  brains: Map<number, AiBrain>;
  missiles: Missile[];
  bomber: Bomber | null;
  telegraphs: Telegraph[];
  fences: Fence[];
  sky: SkyProfile;
  nextStormTick: number;
  nextMeteorTick: number;
  volcano: Volcano;
  lavaPools: LavaPool[];
  stormUntil: number;
  score: number;
  lives: number;
  phase: 'play' | 'over';
  nextSpawnTick: number;
  nextBomberTick: number;
  respawnTick: number;
  nextLifeAt: number;
  lastHitBy: Map<number, number | null>;
}

export const TICK_RATE = 60;
export const TICK_DT = 1 / TICK_RATE;

export function createWorld(seed: number, map: MapId = 'classic'): World {
  const def = MAPS[map];
  return {
    seed,
    tick: 0,
    rng: createRng(seed),
    arenaHalf: 200,
    tanks: [createTank(0, 0, 0, 0)],
    // fresh grids per world: module-level layouts must never be shared/mutated
    structures: def.placements.map((p, i) => makeStructure(100 + i, p.kind, p.x, p.z)),
    shells: [],
    chunks: [],
    rubble: [],
    rubbleRev: 0,
    events: [],
    pendingExplosions: [],
    nextId: 1,
    awareness: new Map(),
    brains: new Map(),
    missiles: [],
    bomber: null,
    telegraphs: [],
    fences: def.fences.map((f) => ({ ...f })),
    sky: def.sky,
    nextStormTick: 15000,
    nextMeteorTick: 6000,
    volcano: createVolcano(),
    lavaPools: [],
    stormUntil: 0,
    score: 0,
    lives: 3,
    phase: 'play',
    nextSpawnTick: 120,
    nextBomberTick: BOMBER_PERIOD,
    respawnTick: 0,
    nextLifeAt: 10000,
    lastHitBy: new Map(),
  };
}

// --- grid contexts: every damageable grid with its world placement ---------

interface GridCtx {
  g: BlockGrid;
  tank?: Tank;
  part?: 'hull' | 'turret';
  structure?: Structure;
}

function gridCtxs(w: World): GridCtx[] {
  const out: GridCtx[] = w.structures.map((s) => ({ g: s.grid, structure: s }));
  for (const t of w.tanks) {
    if (!t.alive) continue;
    out.push({ g: t.hull, tank: t, part: 'hull' }, { g: t.turret, tank: t, part: 'turret' });
  }
  return out;
}

function cellLocal(g: BlockGrid, c: V3): V3 {
  return [
    (c[0] - g.size.x / 2 + 0.5) * BLOCK_SIZE,
    (c[1] + 0.5) * BLOCK_SIZE,
    (c[2] - g.size.z / 2 + 0.5) * BLOCK_SIZE,
  ];
}

function cellWorld(ctx: GridCtx, c: V3): V3 {
  const l = cellLocal(ctx.g, c);
  if (ctx.structure) return [ctx.structure.x + l[0], l[1], ctx.structure.z + l[2]];
  if (ctx.part === 'turret') return turretToWorld(ctx.tank!, l);
  return hullToWorld(ctx.tank!, l);
}

const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];
const dist = (a: V3, b: V3): number => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

type Damaged = Map<BlockGrid, GridCtx>;

function destroyCell(w: World, ctx: GridCtx, c: V3, damaged: Damaged, by: number | null): void {
  const b = getCell(ctx.g, c[0], c[1], c[2]);
  if (!b) return;
  const wp = cellWorld(ctx, c);
  setCell(ctx.g, c[0], c[1], c[2], null);
  damaged.set(ctx.g, ctx);
  w.events.push({ kind: 'blockDestroyed', pos: wp, by });
  if (b.type === 'ammo') w.pendingExplosions.push(wp);
  for (const n of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]] as V3[]) {
    const nc: V3 = [c[0] + n[0], c[1] + n[1], c[2] + n[2]];
    const nb = getCell(ctx.g, nc[0], nc[1], nc[2]);
    if (!nb) continue;
    nb.hp -= SPLASH_DAMAGE;
    damaged.set(ctx.g, ctx);
    if (nb.hp <= 0) destroyCell(w, ctx, nc, damaged, by);
  }
}

function damageCell(w: World, ctx: GridCtx, c: V3, dmg: number, damaged: Damaged, by: number | null): void {
  const b = getCell(ctx.g, c[0], c[1], c[2]);
  if (!b) return;
  b.hp -= dmg;
  damaged.set(ctx.g, ctx);
  if (b.hp <= 0) destroyCell(w, ctx, c, damaged, by);
}

// --- shells ----------------------------------------------------------------

function stepShells(w: World, damaged: Damaged): void {
  const step = SHELL_SPEED * TICK_DT;
  const ctxs = gridCtxs(w);
  for (const sh of w.shells) {
    if (!sh.alive) continue;
    // energy fences block shells while both pylons stand
    let tF = Infinity;
    for (const f of w.fences) {
      if (!fenceAlive(w, f)) continue;
      const t = fenceHitT(f, sh.pos, sh.dir, step);
      if (t !== null && t < tF) tF = t;
    }
    if (tF !== Infinity) {
      sh.pos = add(sh.pos, mul(sh.dir, tF));
      sh.alive = false;
      w.events.push({ kind: 'shellImpact', pos: [...sh.pos] });
      continue;
    }
    const cands: { t: number; ctx: GridCtx; cell: V3 }[] = [];
    for (const ctx of ctxs) {
      if (ctx.tank && ctx.tank.id === sh.owner) continue;
      let lo: V3;
      let ld: V3;
      if (ctx.structure) {
        lo = [sh.pos[0] - ctx.structure.x, sh.pos[1], sh.pos[2] - ctx.structure.z];
        ld = sh.dir;
      } else {
        const to = ctx.part === 'turret' ? worldToTurret : worldToHull;
        lo = to(ctx.tank!, sh.pos);
        ld = sub(to(ctx.tank!, add(sh.pos, sh.dir)), lo);
      }
      for (const h of raycastGrid(ctx.g, lo, ld, step)) cands.push({ t: h.t, ctx, cell: h.cell });
    }
    cands.sort((a, b) => a.t - b.t);
    for (const cand of cands) {
      if (!sh.alive) break;
      const b = getCell(cand.ctx.g, cand.cell[0], cand.cell[1], cand.cell[2]);
      if (!b) continue; // already destroyed earlier along this segment
      const wp = cellWorld(cand.ctx, cand.cell);
      if (cand.ctx.tank) w.lastHitBy.set(cand.ctx.tank.id, sh.owner);
      const cost = PEN_COST[b.type];
      if (sh.budget < cost) {
        damageCell(w, cand.ctx, cand.cell, 1, damaged, sh.owner);
        sh.alive = false;
        w.events.push({ kind: 'shellImpact', pos: wp });
        break;
      }
      sh.budget -= cost;
      // paying the penetration cost destroys the entered cell — blow-through
      destroyCell(w, cand.ctx, cand.cell, damaged, sh.owner);
    }
    if (!sh.alive) continue;
    sh.pos = add(sh.pos, mul(sh.dir, step));
    if (sh.pos[1] < 0) {
      sh.alive = false;
      w.events.push({ kind: 'shellImpact', pos: [sh.pos[0], 0, sh.pos[2]] });
    } else if (Math.abs(sh.pos[0]) > w.arenaHalf || Math.abs(sh.pos[2]) > w.arenaHalf) {
      sh.alive = false;
    }
  }
  w.shells = w.shells.filter((s) => s.alive);
}

function stepExplosions(w: World, damaged: Damaged): void {
  const ctxs = gridCtxs(w);
  while (w.pendingExplosions.length) {
    const pos = w.pendingExplosions.shift()!;
    w.events.push({ kind: 'explosion', pos, radius: EXPLOSION_RADIUS });
    for (const ctx of ctxs) {
      for (let z = 0; z < ctx.g.size.z; z++) {
        for (let y = 0; y < ctx.g.size.y; y++) {
          for (let x = 0; x < ctx.g.size.x; x++) {
            if (!getCell(ctx.g, x, y, z)) continue;
            const c: V3 = [x, y, z];
            if (dist(cellWorld(ctx, c), pos) <= EXPLOSION_RADIUS) {
              damageCell(w, ctx, c, EXPLOSION_DAMAGE, damaged, null);
            }
          }
        }
      }
    }
  }
}

// --- structural integrity, chunks, rubble ----------------------------------

function snapshotTypes(g: BlockGrid): Map<string, BlockType> {
  const m = new Map<string, BlockType>();
  for (let z = 0; z < g.size.z; z++)
    for (let y = 0; y < g.size.y; y++)
      for (let x = 0; x < g.size.x; x++) {
        const b = getCell(g, x, y, z);
        if (b) m.set(`${x},${y},${z}`, b.type);
      }
  return m;
}

function spawnChunk(w: World, ctx: GridCtx, cells: V3[], types: Map<string, BlockType>): void {
  if (!cells.length) return;
  const wps = cells.map((c) => cellWorld(ctx, c));
  const cen: V3 = [0, 0, 0];
  for (const p of wps) {
    cen[0] += p[0] / wps.length;
    cen[1] += p[1] / wps.length;
    cen[2] += p[2] / wps.length;
  }
  const chunk: Chunk = {
    id: w.nextId++,
    pos: cen,
    vel: [(w.rng.next() - 0.5) * 3, 2 + w.rng.next() * 2, (w.rng.next() - 0.5) * 3],
    angle: 0,
    spin: (w.rng.next() - 0.5) * 6,
    settleTick: w.tick + CHUNK_SETTLE_TICKS,
    cells: cells.map((c, i) => ({ off: sub(wps[i], cen), type: types.get(c.join(',')) ?? 'hull' })),
  };
  w.chunks.push(chunk);
  w.events.push({ kind: 'chunkDetached', id: chunk.id });
}

function stepIntegrity(w: World, damaged: Damaged): void {
  const processed = new Set<BlockGrid>();
  const ctxs = gridCtxs(w);
  for (const [g, ctx] of damaged) {
    if (processed.has(g)) continue;
    processed.add(g);
    const kind = ctx.structure ? 'structure' : ctx.part!;
    const types = snapshotTypes(g);
    const anchors = anchorCells(g, kind);
    if (anchors.length === 0) {
      spawnChunk(w, ctx, detachDisconnected(g, []), types);
      if (ctx.tank && ctx.part === 'hull') {
        ctx.tank.alive = false;
        const by = w.lastHitBy.get(ctx.tank.id) ?? null;
        w.events.push({ kind: 'tankKilled', id: ctx.tank.id, pos: [ctx.tank.x, 1, ctx.tank.z], by });
        if (ctx.tank.id === 0) {
          w.lives--;
          if (w.lives <= 0) w.phase = 'over';
          else w.respawnTick = w.tick + 180;
        } else if (by === 0) {
          const brain = w.brains.get(ctx.tank.id);
          w.score += brain?.kind === 'super' ? SCORE_VALUES.super : SCORE_VALUES.slow;
        }
        const tctx = ctxs.find((c) => c.tank === ctx.tank && c.part === 'turret');
        if (tctx && !processed.has(tctx.g)) {
          processed.add(tctx.g);
          spawnChunk(w, tctx, detachDisconnected(tctx.g, []), snapshotTypes(tctx.g));
        }
      }
    } else {
      const det = detachDisconnected(g, anchors);
      if (det.length) spawnChunk(w, ctx, det, types);
    }
  }
}

function stepChunks(w: World): void {
  const settled: Chunk[] = [];
  for (const ch of w.chunks) {
    ch.vel[1] -= 9.8 * TICK_DT;
    ch.pos = add(ch.pos, mul(ch.vel, TICK_DT));
    ch.angle += ch.spin * TICK_DT;
    if (ch.pos[1] <= 0.2 || w.tick >= ch.settleTick) settled.push(ch);
  }
  if (!settled.length) return;
  w.chunks = w.chunks.filter((c) => !settled.includes(c));
  for (const ch of settled) {
    for (const cell of ch.cells) {
      w.rubble.push({
        x: ch.pos[0] + cell.off[0],
        z: ch.pos[2] + cell.off[2],
        type: cell.type,
        born: w.tick,
      });
    }
  }
  while (w.rubble.length > RUBBLE_CAP) w.rubble.shift();
  w.rubbleRev++;
  w.events.push({ kind: 'rubbleChanged' });
}

// --- the tick ---------------------------------------------------------------

export function stepWorld(w: World, commands: TankCommand[] = []): void {
  w.events = [];
  if (w.phase === 'over') return; // match finished: world freezes for the results screen
  w.tick += 1;
  const damaged: Damaged = new Map();

  // solo respawn after the 3 s deathcam
  if (w.phase === 'play' && !w.tanks[0].alive && w.respawnTick > 0 && w.tick >= w.respawnTick) {
    const a = w.rng.next() * Math.PI * 2;
    const fresh = createTank(0, Math.sin(a) * 120, Math.cos(a) * 120, w.rng.next() * Math.PI * 2);
    fresh.spawnTick = w.tick;
    w.tanks[0] = fresh;
    w.respawnTick = 0;
  }

  for (let i = 0; i < w.tanks.length; i++) {
    const t = w.tanks[i];
    if (!t.alive) continue;
    const brain = w.brains.get(t.id);
    const cmd = i === 0 ? (commands[0] ?? neutralCommand()) : brain ? thinkBrain(w, brain, t) : neutralCommand();
    stepTank(t, cmd, TICK_DT, w.arenaHalf);
    t.cooldown = Math.max(0, t.cooldown - TICK_DT);
    if (cmd.fire && t.cooldown === 0 && anchorCells(t.turret, 'turret').length > 0) {
      const dir = turretForward(t);
      const muzzle = turretToWorld(t, [0, BLOCK_SIZE, (t.turret.size.z / 2) * BLOCK_SIZE + 0.15]);
      w.shells.push({ id: w.nextId++, owner: t.id, pos: muzzle, dir, budget: SHELL_BUDGET, alive: true });
      const brainK = w.brains.get(t.id)?.kind;
      const cd = brainK ? AI_KNOBS[brainK].cooldown : null;
      t.cooldown = cd ? cd[0] + w.rng.next() * (cd[1] - cd[0]) : SHELL_COOLDOWN;
      w.events.push({ kind: 'fire', pos: muzzle, dir, owner: t.id });
    }
  }

  stepShells(w, damaged);
  stepDirector(w);
  stepVolcano(w);
  stepSky(w);
  // scan towers ping everyone onto every radar while they stand
  if (w.tick % 600 === 0) {
    for (const s of w.structures) {
      if (s.kind === 'scan' && s.grid.cells.some((c) => c)) {
        w.events.push({ kind: 'scanPing' });
        break;
      }
    }
  }
  stepExplosions(w, damaged);
  // ramming: destructible structures fall apart instead of stopping the tank
  // (indestructible solids still hard-stop, faithful to 1980)
  for (const t of w.tanks) {
    if (!t.alive || Math.abs(t.speed) < 0.5) continue;
    const r = (t.hull.size.z * BLOCK_SIZE) / 2;
    for (const s of w.structures) {
      const hx = (s.grid.size.x * BLOCK_SIZE) / 2 + r;
      const hz = (s.grid.size.z * BLOCK_SIZE) / 2 + r;
      if (Math.abs(t.x - s.x) > hx || Math.abs(t.z - s.z) > hz) continue;
      const lx = t.x - s.x;
      const lz = t.z - s.z;
      const x0 = Math.max(0, Math.floor((lx - r) / BLOCK_SIZE + s.grid.size.x / 2));
      const x1 = Math.min(s.grid.size.x - 1, Math.ceil((lx + r) / BLOCK_SIZE + s.grid.size.x / 2));
      const z0 = Math.max(0, Math.floor((lz - r) / BLOCK_SIZE + s.grid.size.z / 2));
      const z1 = Math.min(s.grid.size.z - 1, Math.ceil((lz + r) / BLOCK_SIZE + s.grid.size.z / 2));
      let smashed = false;
      for (let z = z0; z <= z1; z++) {
        for (let x = x0; x <= x1; x++) {
          for (let y = 0; y < s.grid.size.y; y++) {
            if (!getCell(s.grid, x, y, z)) continue;
            const wx = s.x + (x - s.grid.size.x / 2 + 0.5) * BLOCK_SIZE;
            const wz = s.z + (z - s.grid.size.z / 2 + 0.5) * BLOCK_SIZE;
            if (Math.hypot(wx - t.x, wz - t.z) < r + 0.2) {
              damageCell(w, { g: s.grid, structure: s }, [x, y, z], 3, damaged, t.id);
              smashed = true;
            }
          }
        }
      }
      if (smashed) t.speed *= 0.85; // plowing through costs momentum, not a stop
    }
    // energy fences hard-stop tanks until a pylon falls
    for (const f of w.fences) {
      if (!fenceAlive(w, f)) continue;
      const push = fencePush(f, t.x, t.z, (t.hull.size.z * BLOCK_SIZE) / 2);
      if (push) {
        t.x += push.x;
        t.z += push.z;
        t.speed *= 0.5;
      }
    }
  }
  // lava pools burn tanks standing in them (1 hp / 0.5 s)
  if (w.tick % 30 === 0) {
    for (const pool of w.lavaPools) {
      if (w.tick >= pool.untilTick) continue;
      for (const t of w.tanks) {
        if (!t.alive || Math.hypot(t.x - pool.x, t.z - pool.z) > pool.radius) continue;
        const occupied: V3[] = [];
        for (let z = 0; z < t.hull.size.z; z++)
          for (let y = 0; y < t.hull.size.y; y++)
            for (let x = 0; x < t.hull.size.x; x++)
              if (getCell(t.hull, x, y, z)) occupied.push([x, y, z]);
        if (occupied.length) {
          const c = occupied[Math.floor(w.rng.next() * occupied.length)];
          damageCell(w, { g: t.hull, tank: t, part: 'hull' }, c, 1, damaged, null);
        }
      }
    }
    w.lavaPools = w.lavaPools.filter((p) => w.tick < p.untilTick);
  }
  stepIntegrity(w, damaged);
  stepChunks(w);
  stepAwareness(w);

  // scoring from events (player kills/credits only)
  for (const ev of w.events) {
    if (ev.kind === 'blockDestroyed' && ev.by === 0) w.score += SCORE_VALUES.block;
    else if (ev.kind === 'kill' && ev.by === 0) {
      w.score += ev.what === 'bomber' ? SCORE_VALUES.bomber : SCORE_VALUES.missile;
    }
  }
  while (w.score >= w.nextLifeAt) {
    w.lives++;
    w.nextLifeAt += 10000;
  }
  while (w.rubble.length > RUBBLE_CAP) {
    w.rubble.shift();
    w.rubbleRev++;
  }
  if (w.phase === 'play' && w.tick >= MATCH_TICKS) {
    w.phase = 'over';
    w.events.push({ kind: 'matchEnd' });
  }
}

/** Stable hash of world state — the determinism gate compares these. */
export function hashWorld(w: World): string {
  const parts: string[] = [`${w.seed}|${w.tick}|${w.rng.state()}|${w.score}|${w.lives}|${w.phase}`];
  for (const t of w.tanks) {
    parts.push(
      [t.id, t.x, t.z, t.heading, t.speed, t.turretYaw, t.gunPitch, t.hull.rev, t.turret.rev, t.alive ? 1 : 0]
        .map((n) => n.toFixed(6))
        .join(','),
    );
  }
  for (const s of w.structures) parts.push(`${s.id}:${s.grid.rev}`);
  for (const [oid, m] of [...w.awareness.entries()].sort((a, b) => a[0] - b[0])) {
    for (const [tid, k] of [...m.entries()].sort((a, b) => a[0] - b[0])) {
      parts.push(`a${oid}:${tid}:${k.tick}:${k.source}`);
    }
  }
  for (const [id, b] of [...w.brains.entries()].sort((a, b) => a[0] - b[0])) {
    parts.push(`b${id}:${b.mode}:${b.targetId}:${b.shotsAtContact}`);
  }
  parts.push(
    `rub${w.rubble.length}:${w.rubbleRev}`,
    `chk${w.chunks.length}`,
    `shl${w.shells.length}`,
    `mis${w.missiles.length}`,
    `bmb${w.bomber ? 1 : 0}`,
    `tel${w.telegraphs.length}`,
    `vol${w.volcano.state}`,
    `lava${w.lavaPools.length}`,
    `fen${w.fences.filter((f) => fenceAlive(w, f)).length}`,
  );
  const s = parts.join(';');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}