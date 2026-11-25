/**
 * Awareness (RADAR.md, AI.md §3): ONE information model shared by the player
 * radar and every AI. Gunfire reveal (~3 s), 30 m proximity, line-of-sight +
 * 5 s decaying memory, scan-tower pings, storm blindness, 2 s spawn grace.
 * If a player can't know it, neither can the AI.
 */
import { raycastGrid, type V3 } from './raycast';
import { type Tank } from './tank';
import type { Obstacle } from './arena';
import type { World } from './world';

export const PROXIMITY = 30;
export const SIGHT_RANGE = 150;
export const MEMORY_TICKS = 300; // 5 s
export const GUNFIRE_TICKS = 180; // 3 s
export const PING_TICKS = 180;
export const GRACE_TICKS = 120; // 2 s

export type ContactSource = 'gunfire' | 'proximity' | 'los' | 'ping';

export interface Known {
  x: number;
  z: number;
  heading: number;
  tick: number;
  source: ContactSource;
}

export function targetable(w: World, t: Tank): boolean {
  return t.alive && w.tick - t.spawnTick >= GRACE_TICKS;
}

/** Segment vs obstacle AABBs (slab test) — indestructible solids block sight. */
function segmentHitsObstacle(o: V3, d: V3, len: number, ob: Obstacle): boolean {
  let tmin = 0;
  let tmax = len;
  for (let i = 0; i < 3; i += 2) {
    const half = ob.half;
    const c = i === 0 ? ob.x : ob.z;
    const lo = c - half;
    const hi = c + half;
    if (Math.abs(d[i]) < 1e-9) {
      if (o[i] < lo || o[i] > hi) return false;
    } else {
      let t1 = (lo - o[i]) / d[i];
      let t2 = (hi - o[i]) / d[i];
      if (t1 > t2) [t1, t2] = [t2, t1];
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return false;
    }
  }
  // height: obstacles are tall enough to block eye-level sight
  return tmax >= 0 && tmin <= len;
}

export function hasLos(w: World, from: V3, to: V3): boolean {
  const d: V3 = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  const len = Math.hypot(d[0], d[1], d[2]);
  if (len < 1e-6) return true;
  const dn: V3 = [d[0] / len, d[1] / len, d[2] / len];
  for (const ob of w.obstacles) {
    if (segmentHitsObstacle(from, dn, len, ob)) return false;
  }
  for (const s of w.structures) {
    if (s.grid.cells.every((c) => !c)) continue;
    const lo: V3 = [from[0] - s.x, from[1], from[2] - s.z];
    if (raycastGrid(s.grid, lo, dn, len).length) return false;
  }
  return true;
}

function refresh(w: World, observer: Tank, t: Tank, source: ContactSource): void {
  let m = w.awareness.get(observer.id);
  if (!m) {
    m = new Map();
    w.awareness.set(observer.id, m);
  }
  m.set(t.id, { x: t.x, z: t.z, heading: t.heading, tick: w.tick, source });
}

export function stepAwareness(w: World): void {
  const observers = w.tanks.filter((t) => t.alive);
  for (const o of observers) {
    let m = w.awareness.get(o.id);
    if (!m) {
      m = new Map();
      w.awareness.set(o.id, m);
    }
    for (const [id, k] of m) {
      const ttl = k.source === 'gunfire' || k.source === 'ping' ? GUNFIRE_TICKS : MEMORY_TICKS;
      if (w.tick - k.tick > ttl) m.delete(id);
    }
    if (w.stormUntil > w.tick) continue; // blinded: memory decays, nothing new
    for (const t of w.tanks) {
      if (t.id === o.id || !targetable(w, t)) continue;
      const d = Math.hypot(t.x - o.x, t.z - o.z);
      if (d <= PROXIMITY) {
        refresh(w, o, t, 'proximity');
      } else if (d <= SIGHT_RANGE && hasLos(w, [o.x, 1.2, o.z], [t.x, 1.2, t.z])) {
        refresh(w, o, t, 'los');
      }
    }
  }
  // gunfire reveals the shooter to everyone; scan pings reveal everyone
  for (const ev of w.events) {
    if (ev.kind === 'fire') {
      const shooter = w.tanks.find((t) => t.id === ev.owner);
      if (!shooter || !targetable(w, shooter)) continue;
      for (const o of observers) {
        if (o.id !== shooter.id) refresh(w, o, shooter, 'gunfire');
      }
    } else if (ev.kind === 'scanPing') {
      for (const o of observers) {
        for (const t of w.tanks) {
          if (t.id !== o.id && targetable(w, t)) refresh(w, o, t, 'ping');
        }
      }
    }
  }
}