/**
 * Spawn director (AI.md §6) + airborne missiles + targeted bomber.
 * Four respawning light tanks, one director-designated player hunter, FFA
 * between the rest, an occasional supertank, and missiles that fly above
 * the arena with limited-turn guidance. Bomber every 2 min in every mode.
 */
import { createBrain, type AiKind } from './ai';
import { createEnemyTank, turretToWorld } from './tank';
import { BOMB_DROP_TICKS, VOLCANO_BLAST_RADIUS, VOLCANO_BLAST_DAMAGE } from './combat';
import { bombAftermath } from './volcano';
import { BLOCK_SIZE } from './grid';
import type { World } from './world';
import type { V3 } from './raycast';

export type MissileTargetKind = 'tank' | 'bomber';

export interface Missile {
  id: number;
  pos: V3;
  dir: V3;
  speed: number;
  age: number;
  maxAge: number;
  alive: boolean;
  targetKind: MissileTargetKind;
  targetId: number | null;
  tracking: boolean;
  turnRate: number; // rad/s, deliberately low so tanks can escape
  interceptTick: number | null;
  interceptorId: number | null;
  lastDefenseTick: number;
}

export interface Bomber {
  id: number;
  pos: V3;
  dir: V3;
  speed: number;
  hp: number;
  alive: boolean;
  nextBomb: number;
  targetId: number;
}

export interface Telegraph {
  x: number;
  z: number;
  impactTick: number;
  radius: number;
  kind: 'bomb' | 'volcano' | 'meteor';
}

export const SCORE_VALUES = { slow: 100, missile: 250, super: 500, bomber: 1000, block: 5 };
export const BOMBER_PERIOD = 7200; // 2 min
export const TELEGRAPH_TICKS = 90; // 1.5 s
export const LIGHT_TANK_COUNT = 4;
export const MISSILE_MIN_TICKS = 1200;
export const MISSILE_MAX_TICKS = 3000;
export const MISSILE_BOUNDARY = 280;
const MISSILE_WEIGHTS = { player: 2, light: 1, super: 6, bomber: 5 } as const;

const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;
const norm = (v: V3): V3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};

/** Rotate a unit direction toward another by at most maxTurn radians. */
function turnDir(cur: V3, want: V3, maxTurn: number): V3 {
  const dot = clamp(cur[0] * want[0] + cur[1] * want[1] + cur[2] * want[2], -1, 1);
  const angle = Math.acos(dot);
  if (angle <= maxTurn || angle < 1e-6) return want;
  const f = maxTurn / angle;
  return norm([
    cur[0] + (want[0] - cur[0]) * f,
    cur[1] + (want[1] - cur[1]) * f,
    cur[2] + (want[2] - cur[2]) * f,
  ]);
}

function spawnPoint(w: World): { x: number; z: number } {
  const player = w.tanks[0];
  for (let attempt = 0; attempt < 24; attempt++) {
    const a = w.rng.next() * Math.PI * 2;
    const r = 100 + w.rng.next() * 40;
    const x = clamp(player.x + Math.sin(a) * r, -190, 190);
    const z = clamp(player.z + Math.cos(a) * r, -190, 190);
    let clear = true;
    for (const s of w.structures) {
      if (!s.grid.cells.some((c) => c)) continue;
      const hx = (s.grid.size.x * BLOCK_SIZE) / 2 + 5;
      const hz = (s.grid.size.z * BLOCK_SIZE) / 2 + 5;
      if (Math.abs(x - s.x) < hx && Math.abs(z - s.z) < hz) {
        clear = false;
        break;
      }
    }
    if (clear && w.tanks.every((t) => !t.alive || Math.hypot(t.x - x, t.z - z) > 14)) {
      return { x, z };
    }
  }
  const a = w.rng.next() * Math.PI * 2;
  return { x: Math.sin(a) * 170, z: Math.cos(a) * 170 };
}

function spawnTank(w: World, kind: AiKind): void {
  const p = spawnPoint(w);
  const t = createEnemyTank(w.nextId++, kind, p.x, p.z, Math.atan2(w.tanks[0].x - p.x, w.tanks[0].z - p.z));
  t.spawnTick = w.tick;
  w.tanks.push(t);
  w.brains.set(t.id, createBrain(kind));
  if (kind === 'super') w.events.push({ kind: 'superSpawn', pos: [p.x, 1, p.z] });
}

/** Exactly one living AI is the player hunter; everyone else is FFA. */
function ensureTracker(w: World): void {
  const living = w.tanks.filter((t) => t.id !== 0 && t.alive && w.brains.has(t.id));
  if (!living.length) return;
  const current = living.filter((t) => w.brains.get(t.id)!.playerTracker);
  if (current.length === 1) return;
  for (const t of living) w.brains.get(t.id)!.playerTracker = false;
  const preferred = living.find((t) => w.brains.get(t.id)!.kind === 'slow') ?? living[0];
  w.brains.get(preferred.id)!.playerTracker = true;
}

export interface MissileTarget {
  kind: MissileTargetKind;
  id: number;
  weight: number;
  pos: V3;
}

/** Weighted, living target pool. Special targets are threats, not the only targets. */
export function missileTargets(w: World): MissileTarget[] {
  const out: MissileTarget[] = [];
  for (const t of w.tanks) {
    if (!t.alive) continue;
    const kind = w.brains.get(t.id)?.kind;
    out.push({
      kind: 'tank',
      id: t.id,
      weight: t.id === 0 ? MISSILE_WEIGHTS.player : kind === 'super' ? MISSILE_WEIGHTS.super : MISSILE_WEIGHTS.light,
      pos: [t.x, 1, t.z],
    });
  }
  if (w.bomber?.alive) {
    out.push({ kind: 'bomber', id: w.bomber.id, weight: MISSILE_WEIGHTS.bomber, pos: [...w.bomber.pos] });
  }
  return out;
}

function weightedMissileTarget(w: World, targets: MissileTarget[]): MissileTarget {
  const total = targets.reduce((sum, t) => sum + t.weight, 0);
  let roll = w.rng.next() * total;
  for (const t of targets) {
    roll -= t.weight;
    if (roll <= 0) return t;
  }
  return targets[targets.length - 1];
}

export function spawnMissile(w: World): void {
  const targets = missileTargets(w);
  if (!targets.length) return;
  const player = targets.find((t) => t.kind === 'tank' && t.id === 0);
  // Preserve frequent player pressure; the weighted pool raises bomber/super
  // odds without letting spectacle replace the main threat.
  const target = player && w.rng.next() < 0.55
    ? player
    : weightedMissileTarget(w, targets);
  const a = w.rng.next() * Math.PI * 2;
  const pos: V3 = [Math.sin(a) * 205, 11 + w.rng.next() * 5, Math.cos(a) * 205];
  const tracking = w.rng.next() < 0.6;
  const speed = 14 + w.rng.next() * 4;
  const distance = Math.hypot(target.pos[0] - pos[0], target.pos[1] - pos[1], target.pos[2] - pos[2]);
  const maxAge = clamp(
    Math.ceil((distance / speed) * 60 * 1.6) + 240,
    MISSILE_MIN_TICKS,
    MISSILE_MAX_TICKS,
  );
  const id = w.nextId++;
  w.missiles.push({
    id,
    pos,
    dir: norm([target.pos[0] - pos[0], target.pos[1] - pos[1], target.pos[2] - pos[2]]),
    speed,
    age: 0,
    maxAge,
    alive: true,
    targetKind: target.kind,
    targetId: target.id,
    tracking,
    turnRate: tracking ? 0.45 : 0, // rad/s: slow enough to dodge
    interceptTick: null,
    interceptorId: null,
    lastDefenseTick: -9999,
  });
  if (target.kind === 'tank' && target.id === 0) w.events.push({ kind: 'missileLock', id, pos });
}

export function stepDirector(w: World): void {
  if (w.phase === 'play') {
    // maintain four light tanks; stagger replacements so the arena stays busy
    let lights = w.tanks.filter((t) => t.alive && w.brains.get(t.id)?.kind === 'slow').length;
    while (lights < LIGHT_TANK_COUNT && w.tick >= w.nextSpawnTick) {
      spawnTank(w, 'slow');
      lights++;
      w.nextSpawnTick = w.tick + 90;
    }
    // one occasional supertank hunter
    const superAlive = w.tanks.some((t) => t.alive && w.brains.get(t.id)?.kind === 'super');
    if (!superAlive && w.tick >= w.nextSuperTick) {
      spawnTank(w, 'super');
      w.nextSuperTick = w.tick + 7200 + Math.floor(w.rng.next() * 3600); // 2-3 min
    }
    ensureTracker(w);
    // airborne missile events, at most three active
    if (w.tick >= w.nextMissileTick && w.missiles.filter((m) => m.alive).length < 3) {
      spawnMissile(w);
      w.nextMissileTick = w.tick + 1500 + Math.floor(w.rng.next() * 1800); // 25-55 s
    }
    if (!w.bomber && w.tick >= w.nextBomberTick) {
      const target = w.tanks[0].alive
        ? w.tanks[0]
        : w.tanks.find((t) => t.alive) ?? w.tanks[0];
      const dx = target.x;
      const dz = target.z;
      const l = Math.hypot(dx, dz);
      const a = l < 1e-6 ? w.rng.next() * Math.PI * 2 : Math.atan2(dx, dz);
      const dir: V3 = [Math.sin(a), 0, Math.cos(a)];
      // spawn on the arena edge on a line THROUGH the target tank
      const sx = target.x - dir[0] * 205;
      const sz = target.z - dir[2] * 205;
      w.bomber = {
        id: w.nextId++,
        pos: [sx, 15, sz],
        dir,
        speed: 8,
        hp: 3,
        alive: true,
        nextBomb: w.tick + 60,
        targetId: target.id,
      };
      w.nextBomberTick = w.tick + BOMBER_PERIOD;
      w.events.push({ kind: 'bomberInbound', pos: [sx, 15, sz] });
    }
  }
  stepMissiles(w);
  stepBomber(w);
  stepTelegraphs(w);
}

function missileTargetPos(w: World, m: Missile): V3 | null {
  if (m.targetKind === 'bomber') {
    const b = w.bomber;
    return b?.alive && b.id === m.targetId ? [...b.pos] : null;
  }
  const t = w.tanks.find((x) => x.id === m.targetId);
  return t?.alive ? [t.x, 1, t.z] : null;
}

function segmentDistance(p: V3, a: V3, b: V3): number {
  const ab: V3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const l2 = ab[0] * ab[0] + ab[1] * ab[1] + ab[2] * ab[2];
  if (l2 < 1e-9) return Math.hypot(p[0] - a[0], p[1] - a[1], p[2] - a[2]);
  const u = clamp(
    ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1] + (p[2] - a[2]) * ab[2]) / l2,
    0,
    1,
  );
  return Math.hypot(p[0] - a[0] - ab[0] * u, p[1] - a[1] - ab[1] * u, p[2] - a[2] - ab[2] * u);
}

function defenseOrigin(w: World, ownerId: number): V3 | null {
  const b = w.bomber;
  if (b?.alive && b.id === ownerId) return [b.pos[0], b.pos[1] - 0.2, b.pos[2]];
  const t = w.tanks.find((x) => x.id === ownerId && x.alive);
  if (!t) return null;
  return turretToWorld(t, [0, BLOCK_SIZE, (t.turret.size.z / 2) * BLOCK_SIZE + 0.15]);
}

function acquireDefense(w: World, m: Missile): void {
  if (m.interceptTick !== null || m.targetId === null) return;
  if (m.targetKind === 'bomber') {
    const b = w.bomber;
    if (b?.alive && b.id === m.targetId && Math.hypot(
      b.pos[0] - m.pos[0], b.pos[1] - m.pos[1], b.pos[2] - m.pos[2],
    ) < 26) {
      m.interceptorId = b.id;
      m.interceptTick = w.tick + 24;
      m.lastDefenseTick = -9999;
    }
    return;
  }
  const target = w.tanks.find((t) => t.id === m.targetId && t.alive);
  if (!target || w.brains.get(target.id)?.kind !== 'super') return;
  if (Math.hypot(target.x - m.pos[0], 1 - m.pos[1], target.z - m.pos[2]) < 18) {
    m.interceptorId = target.id;
    m.interceptTick = w.tick + 30;
    m.lastDefenseTick = -9999;
  }
}

function stepDefense(w: World, m: Missile): void {
  acquireDefense(w, m);
  if (m.interceptTick === null || m.interceptorId === null) return;
  const origin = defenseOrigin(w, m.interceptorId);
  if (!origin) {
    m.interceptTick = null;
    m.interceptorId = null;
    return;
  }
  if (w.tick >= m.interceptTick) {
    m.alive = false;
    w.events.push({ kind: 'kill', id: m.id, what: 'missile', by: m.interceptorId });
    w.events.push({ kind: 'explosion', pos: [...m.pos], radius: 1.5, damage: 0, source: 'airburst' });
    return;
  }
  if (w.tick - m.lastDefenseTick < 3) return;
  m.lastDefenseTick = w.tick;
  const lead: V3 = [m.pos[0] + m.dir[0] * 1.5, m.pos[1] + m.dir[1] * 1.5, m.pos[2] + m.dir[2] * 1.5];
  w.events.push({
    kind: 'defenseFire',
    pos: origin,
    dir: norm([lead[0] - origin[0], lead[1] - origin[1], lead[2] - origin[2]]),
    owner: m.interceptorId,
    missileId: m.id,
  });
}

function stepMissiles(w: World): void {
  for (const m of w.missiles) {
    if (!m.alive) continue;
    m.age++;
    stepDefense(w, m);
    if (!m.alive) continue;
    const targetPos = missileTargetPos(w, m);
    if (m.tracking && targetPos) {
      const want = norm([targetPos[0] - m.pos[0], targetPos[1] - m.pos[1], targetPos[2] - m.pos[2]]);
      m.dir = turnDir(m.dir, want, m.turnRate / 60);
    }
    const prev: V3 = [...m.pos];
    m.pos[0] += m.dir[0] * m.speed / 60;
    m.pos[1] += m.dir[1] * m.speed / 60;
    m.pos[2] += m.dir[2] * m.speed / 60;
    // shot down? full 3-D proximity
    for (const sh of w.shells) {
      if (Math.hypot(sh.pos[0] - m.pos[0], sh.pos[1] - m.pos[1], sh.pos[2] - m.pos[2]) < 1.8) {
        m.alive = false;
        sh.alive = false;
        w.events.push({ kind: 'kill', id: m.id, what: 'missile', by: sh.owner });
        w.events.push({ kind: 'explosion', pos: [...m.pos], radius: 1.5, damage: 2, source: 'airburst' });
        break;
      }
    }
    if (!m.alive) continue;

    // Full 3-D swept collision: a descending missile can hit while its centre
    // is still above the old 3 m cutoff.
    let hitTank = false;
    for (const t of w.tanks) {
      if (t.alive && segmentDistance([t.x, 1, t.z], prev, m.pos) < 2.4) {
        hitTank = true;
        break;
      }
    }
    if (hitTank) {
      m.alive = false;
      w.pendingExplosions.push({ pos: [m.pos[0], 0.5, m.pos[2]], radius: 3, damage: 4, source: 'missile' });
      continue;
    }
    const b = w.bomber;
    if (b?.alive && segmentDistance(b.pos, prev, m.pos) < 2.8) {
      m.alive = false;
      b.alive = false;
      w.events.push({ kind: 'kill', id: b.id, what: 'bomber', by: null });
      w.events.push({ kind: 'explosion', pos: [...b.pos], radius: 3, damage: 0, source: 'airburst' });
      continue;
    }
    if (m.pos[1] <= 0.35) {
      m.alive = false;
      w.pendingExplosions.push({ pos: [m.pos[0], 0.5, m.pos[2]], radius: 3, damage: 4, source: 'missile' });
    } else if (
      m.age > m.maxAge ||
      Math.abs(m.pos[0]) > MISSILE_BOUNDARY ||
      Math.abs(m.pos[2]) > MISSILE_BOUNDARY
    ) {
      m.alive = false;
    }
  }
  w.missiles = w.missiles.filter((m) => m.alive);
}

function stepBomber(w: World): void {
  const b = w.bomber;
  if (!b || !b.alive) {
    if (b && !b.alive) w.bomber = null;
    return;
  }
  const target = w.tanks.find((t) => t.id === b.targetId && t.alive) ?? w.tanks[0];
  if (target.alive) {
    const want: V3 = [target.x - b.pos[0], 0, target.z - b.pos[2]];
    const l = Math.hypot(want[0], want[2]) || 1;
    // very minor corrections: ~0.15 rad/s max, so a moving tank can evade
    b.dir = turnDir(b.dir, [want[0] / l, 0, want[2] / l], 0.0025);
  }
  b.pos[0] += b.dir[0] * b.speed / 60;
  b.pos[2] += b.dir[2] * b.speed / 60;
  if (w.tick >= b.nextBomb) {
    let tx = b.pos[0];
    let tz = b.pos[2];
    for (const t of w.tanks) {
      if (!t.alive) continue;
      if (Math.hypot(t.x - b.pos[0], t.z - b.pos[2]) < 4) {
        tx = t.x;
        tz = t.z;
        break;
      }
    }
    w.telegraphs.push({ x: tx, z: tz, impactTick: w.tick + TELEGRAPH_TICKS, radius: 2, kind: 'bomb' });
    w.events.push({ kind: 'bombTelegraph', pos: [tx, 0, tz] });
    b.nextBomb = w.tick + BOMB_DROP_TICKS;
  }
  // generous airframe hitbox: wings are the target, not the 1-pixel fuselage
  for (const sh of w.shells) {
    if (
      sh.pos[1] > 10 &&
      Math.abs(sh.pos[1] - b.pos[1]) < 3.5 &&
      Math.hypot(sh.pos[0] - b.pos[0], sh.pos[2] - b.pos[2]) < 5.5
    ) {
      b.hp--;
      sh.alive = false;
      if (b.hp <= 0) {
        b.alive = false;
        w.events.push({ kind: 'kill', id: b.id, what: 'bomber', by: sh.owner });
        w.events.push({ kind: 'explosion', pos: [b.pos[0], b.pos[1], b.pos[2]], radius: 3, damage: 0, source: 'airburst' });
      }
      break;
    }
  }
  if (Math.abs(b.pos[0]) > 220 || Math.abs(b.pos[2]) > 220) b.alive = false;
  if (!b.alive) w.bomber = null;
}

function stepTelegraphs(w: World): void {
  const due = w.telegraphs.filter((t) => w.tick >= t.impactTick);
  if (!due.length) return;
  w.telegraphs = w.telegraphs.filter((t) => w.tick < t.impactTick);
  for (const t of due) {
    const volcano = t.kind === 'volcano';
    const meteor = t.kind === 'meteor';
    w.pendingExplosions.push({
      pos: [t.x, 0.5, t.z],
      radius: volcano ? VOLCANO_BLAST_RADIUS : meteor ? 4 : t.radius,
      damage: volcano ? VOLCANO_BLAST_DAMAGE : meteor ? 5 : 3,
      source: volcano ? 'volcano' : meteor ? 'meteor' : 'bomb',
    });
    if (t.kind !== 'bomb') bombAftermath(w, t.x, t.z, t.kind);
  }
}
