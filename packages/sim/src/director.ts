/**
 * Spawn director (AI.md §6) + bomber + missiles + hazard telegraphs.
 * Solo: one enemy at a time, score-driven escalation. Bomber every 2 min in
 * every mode: straight pass, bombs telegraphed >= 1.5 s, shooting it reveals
 * the shooter via the universal gunfire rule.
 */
import { createBrain, type AiKind } from './ai';
import { createEnemyTank } from './tank';
import { BOMB_DROP_TICKS } from './combat';
import { bombAftermath } from './volcano';
import type { World } from './world';
import type { V3 } from './raycast';

export interface Missile {
  id: number;
  pos: V3;
  dir: V3;
  speed: number;
  age: number;
  alive: boolean;
}

export interface Bomber {
  id: number;
  pos: V3;
  dir: V3;
  speed: number;
  hp: number;
  alive: boolean;
  nextBomb: number;
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

const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

function pickKind(score: number, r: number): AiKind | 'missile' {
  if (score < 3000) return 'slow';
  if (score < 7000) return r < 0.4 ? 'missile' : 'slow';
  return r < 0.5 ? 'super' : r < 0.8 ? 'missile' : 'slow';
}

export function stepDirector(w: World): void {
  if (w.phase === 'play') {
    const activeEnemy =
      w.tanks.some((t) => t.id !== 0 && t.alive) || w.missiles.some((m) => m.alive);
    if (!activeEnemy && w.tick >= w.nextSpawnTick) {
      const kind = pickKind(w.score, w.rng.next());
      const a = w.rng.next() * Math.PI * 2;
      // spawn INSIDE sight range so enemies acquire you and come to you
      // (faithful to 1980); beyond it they would patrol idle forever
      const r = 100 + w.rng.next() * 40;
      const x = clamp(Math.sin(a) * r, -190, 190);
      const z = clamp(Math.cos(a) * r, -190, 190);
      if (kind === 'missile') {
        const player = w.tanks[0];
        const d: V3 = [player.x - x, 0, player.z - z];
        const l = Math.hypot(d[0], d[2]) || 1;
        w.missiles.push({
          id: w.nextId++,
          pos: [x, 1.2, z],
          dir: [d[0] / l, 0, d[2] / l],
          speed: 13,
          age: 0,
          alive: true,
        });
      } else {
        const t = createEnemyTank(w.nextId++, kind, x, z, Math.atan2(-x, -z));
        w.tanks.push(t);
        w.brains.set(t.id, createBrain(kind));
        if (kind === 'super') w.events.push({ kind: 'superSpawn', pos: [x, 1, z] });
      }
      w.nextSpawnTick = w.tick + Math.max(240, 900 - Math.floor(w.score / 20));
    }
    if (!w.bomber && w.tick >= w.nextBomberTick) {
      const a = w.rng.next() * Math.PI * 2;
      const sx = Math.sin(a) * 210;
      const sz = Math.cos(a) * 210;
      const tx = -sx + (w.rng.next() - 0.5) * 60;
      const tz = -sz + (w.rng.next() - 0.5) * 60;
      const d: V3 = [tx - sx, 0, tz - sz];
      const l = Math.hypot(d[0], d[2]) || 1;
      w.bomber = {
        id: w.nextId++,
        pos: [sx, 15, sz],
        dir: [d[0] / l, 0, d[2] / l],
        speed: 8,
        hp: 3,
        alive: true,
        nextBomb: w.tick + 60,
      };
      w.nextBomberTick = w.tick + BOMBER_PERIOD;
      w.events.push({ kind: 'bomberInbound', pos: [sx, 15, sz] });
    }
  }
  stepMissiles(w);
  stepBomber(w);
  stepTelegraphs(w);
}

function stepMissiles(w: World): void {
  const player = w.tanks[0];
  for (const m of w.missiles) {
    if (!m.alive) continue;
    m.age++;
    if (m.age < 60 && player.alive) {
      // early lead correction, then commits — a late juke beats it
      const lead: V3 = [player.x + Math.sin(player.heading) * player.speed * 0.5 - m.pos[0], 0, player.z + Math.cos(player.heading) * player.speed * 0.5 - m.pos[2]];
      const l = Math.hypot(lead[0], lead[2]) || 1;
      m.dir[0] += (lead[0] / l - m.dir[0]) * 0.06;
      m.dir[2] += (lead[2] / l - m.dir[2]) * 0.06;
      const dl = Math.hypot(m.dir[0], m.dir[2]) || 1;
      m.dir[0] /= dl;
      m.dir[2] /= dl;
    }
    m.pos[0] += m.dir[0] * m.speed * (1 / 60);
    m.pos[2] += m.dir[2] * m.speed * (1 / 60);
    // shot down?
    for (const sh of w.shells) {
      if (Math.hypot(sh.pos[0] - m.pos[0], sh.pos[2] - m.pos[2]) < 1.2) {
        m.alive = false;
        sh.alive = false;
        w.events.push({ kind: 'kill', id: m.id, what: 'missile', by: sh.owner });
        w.events.push({ kind: 'explosion', pos: [m.pos[0], m.pos[1], m.pos[2]], radius: 1.5 });
        break;
      }
    }
    if (!m.alive) continue;
    for (const t of w.tanks) {
      if (!t.alive) continue;
      if (Math.hypot(t.x - m.pos[0], t.z - m.pos[2]) < 2) {
        m.alive = false;
        w.pendingExplosions.push([m.pos[0], 0.5, m.pos[2]]);
        break;
      }
    }
    if (Math.abs(m.pos[0]) > 210 || Math.abs(m.pos[2]) > 210) m.alive = false;
  }
  w.missiles = w.missiles.filter((m) => m.alive);
}

function stepBomber(w: World): void {
  const b = w.bomber;
  if (!b || !b.alive) {
    if (b && !b.alive) w.bomber = null;
    return;
  }
  b.pos[0] += b.dir[0] * b.speed * (1 / 60);
  b.pos[2] += b.dir[2] * b.speed * (1 / 60);
  // bombs deny the flight path on a cadence, plus opportunistic target drops
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
  // shot down? (shooting it also reveals the shooter via gunfire rule)
  for (const sh of w.shells) {
    if (sh.pos[1] > 10 && Math.hypot(sh.pos[0] - b.pos[0], sh.pos[2] - b.pos[2]) < 2.5) {
      b.hp--;
      sh.alive = false;
      if (b.hp <= 0) {
        b.alive = false;
        w.events.push({ kind: 'kill', id: b.id, what: 'bomber', by: sh.owner });
        // airburst: visible feedback that you hit it (no ground damage)
        w.events.push({ kind: 'explosion', pos: [b.pos[0], b.pos[1], b.pos[2]], radius: 3 });
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
    w.pendingExplosions.push([t.x, 0.5, t.z]);
    if (t.kind === 'volcano' || t.kind === 'meteor') bombAftermath(w, t.x, t.z);
  }
}