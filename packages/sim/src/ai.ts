/**
 * Enemy AI (AI.md): PATROL -> INVESTIGATE -> ENGAGE -> PATROL.
 * Brains consume the shared awareness model and emit TankCommand.
 * No contact = patrol. Contact without LOS = investigate, never fire.
 * Visual confirmation = engage. Dead/expired target = repeat.
 */
import { hasLos, recentAttackers, SIGHT_RANGE, targetable, type Known } from './awareness';
import { SHELL_SPEED } from './combat';
import { BLOCK_SIZE, countType } from './grid';
import { type Tank, type TankCommand } from './tank';
import type { World } from './world';
import type { V3 } from './raycast';

export type AiKind = 'slow' | 'super';
export type AiMode = 'patrol' | 'investigate' | 'engage' | 'reposition';

export interface AiKnobs {
  speedMul: number;
  slew: number; // rad/s turret
  thinkTicks: number;
  err: number; // rad base aim cone
  cooldown: [number, number]; // s
  range: [number, number]; // preferred band, m
  turretShotChance: number; // deliberate rare turret aim vs normal hull aim
}

export const AI_KNOBS: Record<AiKind, AiKnobs> = {
  slow: {
    speedMul: 0.5, slew: 0.785, thinkTicks: 24, err: 0.105,
    cooldown: [2.5, 3.5], range: [60, 100], turretShotChance: 0.1,
  },
  super: {
    speedMul: 1.2, slew: 2.094, thinkTicks: 15, err: 0.035,
    cooldown: [1.4, 2.0], range: [40, 80], turretShotChance: 0.15,
  },
};

export interface AiBrain {
  kind: AiKind;
  mode: AiMode;
  targetId: number | null;
  /** Director-designated hunter: prefers the player when known. */
  playerTracker: boolean;
  aim: { x: number; z: number; y: number } | null;
  aimY: number;
  patrolGoal: { x: number; z: number } | null;
  investigateGoal: { x: number; z: number } | null;
  searchCenter: { x: number; z: number } | null;
  searchUntilTick: number;
  coverGoal: { x: number; z: number } | null;
  coverStructureId: number | null;
  nextCoverSeekTick: number;
  orbitAngle: number | null;
  orbitDirection: 1 | -1;
  nextOrbitTick: number;
  fleeGoal: { x: number; z: number } | null;
  nextFleeSeekTick: number;
  avoidGoal: { x: number; z: number } | null;
  reposition: { x: number; z: number } | null;
  nextThink: number;
  lastTargetSwitchTick: number;
  stuckTicks: number;
  lastThrottle: number;
  lastShotTick: number;
  shotsAtContact: number;
  lastX: number;
  lastZ: number;
  debug: { intent: V3 | null; los: boolean; err: number; evading: boolean; outnumbered: boolean };
}

export function createBrain(kind: AiKind, playerTracker = false): AiBrain {
  return {
    kind,
    mode: 'patrol',
    targetId: null,
    playerTracker,
    aim: null,
    aimY: 0.45,
    patrolGoal: null,
    investigateGoal: null,
    searchCenter: null,
    searchUntilTick: 0,
    coverGoal: null,
    coverStructureId: null,
    nextCoverSeekTick: 0,
    orbitAngle: null,
    orbitDirection: 1,
    nextOrbitTick: 0,
    fleeGoal: null,
    nextFleeSeekTick: 0,
    avoidGoal: null,
    reposition: null,
    nextThink: 0,
    lastTargetSwitchTick: -9999,
    stuckTicks: 0,
    lastThrottle: 0,
    lastShotTick: -9999,
    shotsAtContact: 0,
    lastX: 0,
    lastZ: 0,
    debug: { intent: null, los: false, err: 0, evading: false, outnumbered: false },
  };
}

const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;
const angTo = (from: { x: number; z: number }, to: { x: number; z: number }): number =>
  Math.atan2(to.x - from.x, to.z - from.z);
const wrap = (a: number): number => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};
const dist2 = (a: { x: number; z: number }, b: { x: number; z: number }): number =>
  Math.hypot(a.x - b.x, a.z - b.z);

interface TargetCandidate {
  id: number;
  k: Known;
  target: Tank;
  visual: boolean;
  distance: number;
}

/** Pick a target with stickiness. Visible threats outrank hidden memories. */
function pickTarget(w: World, t: Tank, brain: AiBrain): TargetCandidate | null {
  const m = w.awareness.get(t.id);
  if (!m) return null;
  const candidates: TargetCandidate[] = [];
  for (const [id, k] of m) {
    const target = w.tanks.find((x) => x.id === id);
    if (!target || !targetable(w, target)) continue;
    const visual =
      dist2(t, target) <= SIGHT_RANGE &&
      hasLos(w, [t.x, 1.2, t.z], [target.x, 1.2, target.z]);
    candidates.push({
      id,
      k,
      target,
      visual,
      distance: visual ? dist2(t, target) : dist2(t, k),
    });
  }

  const current = candidates.find((c) => c.id === brain.targetId);
  const visible = candidates.filter((c) => c.visual);

  // Retaliation matters only when it does not abandon a visible threat for a
  // hidden memory. With no visible target, investigate the attacker normally.
  const threat = w.threats.get(t.id);
  if (threat && w.tick - threat.tick < 360) {
    const attacker = candidates.find((c) => c.id === threat.from);
    if (attacker && (attacker.visual || !visible.length)) return attacker;
  }

  // Pressure comes from observed shots, never from another brain's private
  // target choice. Prefer the closest visible attacker and apply hysteresis so
  // two enemies orbiting at similar ranges do not cause target flicker.
  const attackerIds = new Set(recentAttackers(w, t.id));
  if (attackerIds.size > 1) {
    brain.debug.outnumbered = true;
    const attackers = candidates.filter((c) => attackerIds.has(c.id));
    const visibleAttackers = attackers.filter((c) => c.visual);
    if (current?.visual && !visibleAttackers.length) return current;
    if (current?.visual && visibleAttackers.some((c) => c.id === current.id)) {
      const closest = [...visibleAttackers].sort((a, b) => a.distance - b.distance)[0];
      const settled = w.tick - brain.lastTargetSwitchTick < 60;
      if (!closest || settled || closest.distance + 12 >= current.distance) return current;
      return closest;
    }
    const closest = [...(visibleAttackers.length ? visibleAttackers : attackers)]
      .sort((a, b) => a.distance - b.distance)[0];
    if (closest) return closest;
  }
  brain.debug.outnumbered = false;

  if (brain.playerTracker) {
    const player = candidates.find((c) => c.id === 0);
    if (player) return player;
  }
  if (current && w.tick - brain.lastTargetSwitchTick < 180) return current;
  const ffa = candidates.filter((c) => c.id !== 0).sort((a, b) => b.k.tick - a.k.tick);
  return ffa[0] ?? candidates.sort((a, b) => b.k.tick - a.k.tick)[0] ?? null;
}

function newPatrolGoal(w: World, t: Tank): { x: number; z: number } {
  const a = w.rng.next() * Math.PI * 2;
  const r = 45 + w.rng.next() * 65;
  return { x: clamp(t.x + Math.sin(a) * r, -190, 190), z: clamp(t.z + Math.cos(a) * r, -190, 190) };
}

function newInvestigateGoal(w: World, center: { x: number; z: number }): { x: number; z: number } {
  const a = w.rng.next() * Math.PI * 2;
  const r = 18 + w.rng.next() * 22;
  return { x: clamp(center.x + Math.sin(a) * r, -190, 190), z: clamp(center.z + Math.cos(a) * r, -190, 190) };
}

interface CoverGoal {
  x: number;
  z: number;
  structureId: number;
}

type Point = { x: number; z: number };

/** Lightweight perimeter samples; long walls get points along their faces. */
function coverPoints(s: World['structures'][number]): Point[] {
  const hx = (s.grid.size.x * BLOCK_SIZE) / 2 + 2.2;
  const hz = (s.grid.size.z * BLOCK_SIZE) / 2 + 2.2;
  const nx = clamp(Math.ceil((s.grid.size.x * BLOCK_SIZE) / 4), 2, 4);
  const nz = clamp(Math.ceil((s.grid.size.z * BLOCK_SIZE) / 4), 2, 4);
  const out: Point[] = [];
  for (let i = 0; i <= nx; i++) {
    const x = -hx + (2 * hx * i) / nx;
    out.push({ x: s.x + x, z: s.z - hz }, { x: s.x + x, z: s.z + hz });
  }
  for (let i = 1; i < nz; i++) {
    const z = -hz + (2 * hz * i) / nz;
    out.push({ x: s.x - hx, z: s.z + z }, { x: s.x + hx, z: s.z + z });
  }
  return out.map((p) => ({ x: clamp(p.x, -190, 190), z: clamp(p.z, -190, 190) }));
}

/** Keep candidate points out of other structures' hull footprints. */
function pointOccupied(w: World, p: Point, ignoreId: number): boolean {
  return w.structures.some((s) => {
    if (s.id === ignoreId || !s.grid.cells.some((c) => c)) return false;
    const hx = (s.grid.size.x * BLOCK_SIZE) / 2 + 1.7;
    const hz = (s.grid.size.z * BLOCK_SIZE) / 2 + 1.7;
    return Math.abs(p.x - s.x) < hx && Math.abs(p.z - s.z) < hz;
  });
}

/** True when cover interrupts a shot aimed at the candidate tank's hull. */
function protectedFrom(w: World, p: Point, enemy: Point): boolean {
  return !hasLos(w, [enemy.x, 1.2, enemy.z], [p.x, 0.45, p.z]);
}

/** A flee point near real cover, biased away from every observed attacker. */
function findFleeGoal(w: World, t: Tank, enemies: Point[]): Point | null {
  if (!enemies.length) return null;
  const currentMin = Math.min(...enemies.map((e) => dist2(t, e)));
  let best: Point | null = null;
  let bestScore = Infinity;
  for (const s of w.structures) {
    if (!s.grid.cells.some((c) => c) || dist2(t, s) > 70) continue;
    for (const candidate of coverPoints(s)) {
      const fromAi = dist2(t, candidate);
      if (fromAi > 60 || pointOccupied(w, candidate, s.id)) continue;
      const distances = enemies.map((e) => dist2(e, candidate));
      const fromEnemies = Math.min(...distances);
      if (fromEnemies < currentMin + 3) continue;
      const protectedCount = enemies.filter((e) => protectedFrom(w, candidate, e)).length;
      if (!protectedCount) continue;
      const score = fromAi * 0.55 - fromEnemies * 0.9 - protectedCount * 8;
      if (score < bestScore) {
        bestScore = score;
        best = candidate;
      }
    }
  }
  return best;
}

/**
 * Find a firing position beside nearby cover. The candidate must preserve a
 * firing line to the target while cover interrupts at least one attacker's
 * line to the tank hull. Searches are throttled/cached by the caller.
 */
function findCoverGoal(
  w: World,
  t: Tank,
  target: Tank,
  range: [number, number],
  enemies: Point[],
): CoverGoal | null {
  const mid = (range[0] + range[1]) / 2;
  const threats = enemies.length ? enemies : [target];
  let best: CoverGoal | null = null;
  let bestScore = Infinity;
  for (const s of w.structures) {
    if (!s.grid.cells.some((c) => c) || dist2(t, s) > 55) continue;
    for (const candidate of coverPoints(s)) {
      const fromAi = dist2(t, candidate);
      const fromTarget = dist2(target, candidate);
      if (fromAi > 45 || fromTarget < range[0] - 15 || fromTarget > range[1] + 15) continue;
      if (pointOccupied(w, candidate, s.id)) continue;
      if (!hasLos(w, [candidate.x, 1.2, candidate.z], [target.x, 0.45, target.z])) continue;
      if (!protectedFrom(w, candidate, target)) continue;
      const protectedCount = threats.filter((e) => protectedFrom(w, candidate, e)).length;
      const score = fromAi + Math.abs(fromTarget - mid) * 0.7 - protectedCount * 4;
      if (score < bestScore) {
        bestScore = score;
        best = { x: candidate.x, z: candidate.z, structureId: s.id };
      }
    }
  }
  return best;
}

function chooseAimY(w: World, brain: AiBrain, targetId: number): void {
  const K = AI_KNOBS[brain.kind];
  const chance = K.turretShotChance * (targetId === 0 ? 0.5 : 1);
  brain.aimY = w.rng.next() < chance ? 1.2 : 0.45 + w.rng.next() * 0.12;
}

function easeAim(brain: AiBrain, x: number, z: number, y: number, blend: number): void {
  brain.aim = {
    x: brain.aim ? brain.aim.x + (x - brain.aim.x) * blend : x,
    z: brain.aim ? brain.aim.z + (z - brain.aim.z) * blend : z,
    y,
  };
}

export function thinkBrain(w: World, brain: AiBrain, t: Tank): TankCommand {
  const cmd: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };
  if (w.tick < brain.nextThink) return execute(w, brain, t, cmd);
  brain.nextThink = w.tick + AI_KNOBS[brain.kind].thinkTicks;

  // Stuck detection is measured over the whole perception interval, not every
  // tick. It only counts when the previous command actually asked for motion.
  const moved = dist2(t, { x: brain.lastX, z: brain.lastZ });
  brain.stuckTicks = brain.lastThrottle > 0.25 && moved < 0.2
    ? brain.stuckTicks + AI_KNOBS[brain.kind].thinkTicks
    : 0;
  brain.lastX = t.x;
  brain.lastZ = t.z;
  if (brain.stuckTicks > 180) {
    brain.stuckTicks = 0;
    const a = w.rng.next() * Math.PI * 2;
    let escape = {
      x: clamp(t.x + Math.sin(a) * 30, -190, 190),
      z: clamp(t.z + Math.cos(a) * 30, -190, 190),
    };
    for (let i = 0; i < 6 && pointOccupied(w, escape, -1); i++) {
      const aa = w.rng.next() * Math.PI * 2;
      escape = {
        x: clamp(t.x + Math.sin(aa) * 30, -190, 190),
        z: clamp(t.z + Math.cos(aa) * 30, -190, 190),
      };
    }
    if (brain.mode === 'engage') {
      // Keep engage mode so a stuck tank can still shoot while backing out.
      brain.avoidGoal = escape;
    } else {
      brain.mode = 'reposition';
      brain.reposition = escape;
    }
  }

  // A dead target is cleared immediately; the loop repeats from patrol or
  // another known contact instead of staring at a wreck.
  const previous = w.tanks.find((x) => x.id === brain.targetId);
  if (brain.targetId !== null && (!previous || !previous.alive)) {
    brain.targetId = null;
    brain.aim = null;
    brain.mode = 'patrol';
    brain.patrolGoal = null;
    brain.investigateGoal = null;
    brain.searchCenter = null;
    brain.searchUntilTick = 0;
    brain.coverGoal = null;
    brain.coverStructureId = null;
    brain.orbitAngle = null;
    brain.fleeGoal = null;
    brain.shotsAtContact = 0;
  }

  const found = pickTarget(w, t, brain);
  if (!found) {
    brain.targetId = null;
    brain.aim = null;
    brain.mode = 'patrol';
    brain.investigateGoal = null;
    brain.searchCenter = null;
    brain.searchUntilTick = 0;
    brain.coverGoal = null;
    brain.coverStructureId = null;
    brain.orbitAngle = null;
    brain.fleeGoal = null;
    if (!brain.patrolGoal || dist2(t, brain.patrolGoal) < 8) brain.patrolGoal = newPatrolGoal(w, t);
    brain.debug.intent = [brain.patrolGoal.x, 0.8, brain.patrolGoal.z];
    brain.debug.los = false;
    return execute(w, brain, t, cmd);
  }

  const switched = brain.targetId !== found.id;
  if (switched) {
    brain.lastTargetSwitchTick = w.tick;
    brain.shotsAtContact = 0;
    brain.coverGoal = null;
    brain.coverStructureId = null;
    brain.orbitAngle = null;
    brain.fleeGoal = null;
  }
  brain.targetId = found.id;
  const target = found.target;
  const contact = found.k;
  const visual = found.visual;
  brain.debug.los = visual;

  if (visual) {
    brain.mode = 'engage';
    brain.investigateGoal = null;
    brain.searchCenter = null;
    brain.searchUntilTick = 0;
    brain.reposition = null;
    if (switched || brain.shotsAtContact === 0 || brain.shotsAtContact % 8 === 0) {
      chooseAimY(w, brain, target.id);
    }
    // Lead visible motion imperfectly. This assumes the target keeps its
    // current heading for one shell flight time, so turning still beats it.
    const flight = dist2(t, target) / SHELL_SPEED;
    const lead = flight * (brain.kind === 'super' ? 0.85 : 0.65);
    const aimX = target.x + Math.sin(target.heading) * target.speed * lead;
    const aimZ = target.z + Math.cos(target.heading) * target.speed * lead;
    easeAim(brain, aimX, aimZ, brain.aimY, brain.aim ? 0.35 : 1);
    brain.debug.intent = [aimX, aimZ, brain.aimY];
    return execute(w, brain, t, cmd);
  }

  // Information without visual confirmation: investigate the last-known
  // position. Never fire from ping/gunfire/memory alone.
  brain.coverGoal = null;
  brain.coverStructureId = null;
  brain.orbitAngle = null;
  brain.fleeGoal = null;
  if (brain.mode !== 'investigate' && brain.mode !== 'reposition') {
    brain.mode = 'investigate';
    brain.searchCenter = { x: contact.x, z: contact.z };
    brain.searchUntilTick = w.tick + 480; // up to 8 s search after contact
    brain.investigateGoal = { x: contact.x, z: contact.z };
    brain.reposition = null;
  } else {
    brain.searchCenter = { x: contact.x, z: contact.z };
    if (!brain.investigateGoal || dist2(t, brain.investigateGoal) < 6) {
      brain.investigateGoal = newInvestigateGoal(w, brain.searchCenter);
    }
  }
  if (w.tick > brain.searchUntilTick) {
    brain.mode = 'patrol';
    brain.targetId = null;
    brain.aim = null;
    brain.investigateGoal = null;
    brain.searchCenter = null;
    brain.patrolGoal = newPatrolGoal(w, t);
    brain.debug.intent = [brain.patrolGoal.x, 0.8, brain.patrolGoal.z];
    return execute(w, brain, t, cmd);
  }
  easeAim(brain, brain.investigateGoal.x, brain.investigateGoal.z, 0.8, brain.aim ? 0.25 : 1);
  brain.debug.intent = [brain.investigateGoal.x, 0.8, brain.investigateGoal.z];
  return execute(w, brain, t, cmd);
}

function observedAttackerPoints(w: World, t: Tank): Point[] {
  const known = w.awareness.get(t.id);
  if (!known) return [];
  return recentAttackers(w, t.id)
    .map((id) => known.get(id))
    .filter((k): k is Known => !!k)
    .map((k) => ({ x: k.x, z: k.z }));
}

function execute(w: World, brain: AiBrain, t: Tank, cmd: TankCommand): TankCommand {
  const out = executeInner(w, brain, t, cmd);
  brain.lastThrottle = out.throttle;
  return out;
}

function executeInner(w: World, brain: AiBrain, t: Tank, cmd: TankCommand): TankCommand {
  const K = AI_KNOBS[brain.kind];
  const target = w.tanks.find((x) => x.id === brain.targetId);
  if (brain.mode === 'engage' && (!target || !target.alive)) {
    brain.mode = 'patrol';
    brain.targetId = null;
    brain.aim = null;
    brain.patrolGoal = null;
  }

  const turretDead = countType(t.turret, 'gun') === 0;
  const attackers = observedAttackerPoints(w, t);
  const outnumbered = attackers.length > 1;
  const threat = w.threats.get(t.id);
  const underFire = threat !== undefined && w.tick - threat.tick < 90;
  brain.debug.outnumbered = outnumbered;
  brain.debug.evading = underFire;
  let goal: Point | null = null;
  let throttle = 0;

  if (turretDead) {
    // doomed tank charges its last known target/contact instead of wandering
    goal = brain.aim ?? brain.investigateGoal ?? brain.patrolGoal;
    throttle = 1;
  } else if (brain.avoidGoal) {
    goal = brain.avoidGoal;
    throttle = 0.8;
    if (dist2(t, goal) < 3) brain.avoidGoal = null;
  } else if (outnumbered) {
    // Pressure overrides locomotion even when the selected target is hidden.
    // Firing remains governed by the normal LOS/alignment rules below.
    if (w.tick >= brain.nextFleeSeekTick) {
      brain.fleeGoal = findFleeGoal(w, t, attackers);
      brain.nextFleeSeekTick = w.tick + 90;
    }
    if (brain.fleeGoal && dist2(t, brain.fleeGoal) < 3) {
      goal = brain.fleeGoal;
      throttle = 0;
      if (w.tick >= brain.nextFleeSeekTick) {
        brain.fleeGoal = null;
        brain.nextFleeSeekTick = w.tick + 30;
      }
    } else if (brain.fleeGoal) {
      goal = brain.fleeGoal;
      throttle = 0.85;
    } else {
      // No real cover: break away from the weighted attacker positions.
      let ax = 0;
      let az = 0;
      for (const a of attackers) {
        const dx = t.x - a.x;
        const dz = t.z - a.z;
        const d = Math.hypot(dx, dz) || 1;
        ax += dx / d;
        az += dz / d;
      }
      const l = Math.hypot(ax, az);
      if (l < 0.2 && target) {
        ax = t.x - target.x;
        az = t.z - target.z;
      }
      const nl = Math.hypot(ax, az) || 1;
      goal = {
        x: clamp(t.x + (ax / nl) * 30, -190, 190),
        z: clamp(t.z + (az / nl) * 30, -190, 190),
      };
      throttle = 0.85;
    }
    brain.coverGoal = null;
    brain.coverStructureId = null;
  } else if (brain.mode === 'patrol') {
    brain.fleeGoal = null;
    if (!brain.patrolGoal || dist2(t, brain.patrolGoal) < 8) brain.patrolGoal = newPatrolGoal(w, t);
    goal = brain.patrolGoal;
    throttle = 0.55;
  } else if (brain.mode === 'investigate') {
    brain.fleeGoal = null;
    goal = brain.investigateGoal;
    throttle = 0.7;
  } else if (brain.mode === 'reposition') {
    brain.fleeGoal = null;
    goal = brain.reposition;
    throttle = 0.75;
    if (goal && dist2(t, goal) < 6) {
      brain.reposition = null;
      brain.mode = brain.targetId ? 'investigate' : 'patrol';
    }
  } else if (brain.mode === 'engage' && target) {
    brain.fleeGoal = null;
    const d = dist2(t, target);

    // Cache both successes and failures. Under fire shortens the interval but
    // never turns the search into a per-tick all-structures scan.
    const coverGone =
      brain.coverStructureId !== null &&
      !w.structures.some((s) => s.id === brain.coverStructureId && s.grid.cells.some((c) => c));
    if (coverGone || w.tick >= brain.nextCoverSeekTick) {
      const cover = findCoverGoal(w, t, target, K.range, attackers);
      brain.coverGoal = cover ? { x: cover.x, z: cover.z } : null;
      brain.coverStructureId = cover?.structureId ?? null;
      brain.nextCoverSeekTick = w.tick + (underFire ? 45 : 90);
    }

    if (brain.coverGoal && dist2(t, brain.coverGoal) < 3) {
      goal = brain.coverGoal;
      throttle = 0;
    } else if (underFire && brain.coverGoal) {
      goal = brain.coverGoal;
      throttle = 0.7;
    } else if (d > K.range[1]) {
      // close distance to tighten the shot
      brain.coverGoal = null;
      goal = target;
      throttle = 0.65;
    } else if (d < K.range[0]) {
      // too close: restore the band
      brain.coverGoal = null;
      const away = Math.atan2(t.x - target.x, t.z - target.z);
      goal = { x: clamp(t.x + Math.sin(away) * 25, -190, 190), z: clamp(t.z + Math.cos(away) * 25, -190, 190) };
      throttle = 0.55;
    } else if (brain.coverGoal) {
      // fire from beside cover, with LOS already verified by the search
      goal = brain.coverGoal;
      throttle = 0.45;
    } else {
      // no cover nearby: smooth circle at the preferred range
      if (brain.orbitAngle === null) brain.orbitAngle = angTo(target, t);
      if (w.tick >= brain.nextOrbitTick) {
        brain.orbitAngle += brain.orbitDirection * 0.16;
        brain.nextOrbitTick = w.tick + 30;
      }
      const radius = (K.range[0] + K.range[1]) / 2;
      goal = {
        x: clamp(target.x + Math.sin(brain.orbitAngle) * radius, -190, 190),
        z: clamp(target.z + Math.cos(brain.orbitAngle) * radius, -190, 190),
      };
      throttle = underFire ? 0.5 : 0.35;
    }
  }

  if (goal) {
    const dh = wrap(angTo(t, goal) - t.heading);
    cmd.turn = Math.abs(dh) < 0.025 ? 0 : clamp(dh * 1.6, -1, 1);
    cmd.throttle = Math.abs(dh) > 1.1 ? Math.min(throttle, 0.2) : throttle;
  }

  if (turretDead) return cmd;

  if (brain.mode === 'patrol') {
    // slow scan while moving; deterministic, no target required
    cmd.turretYaw = Math.sin(w.tick * 0.01 + t.id) * 0.35;
    return cmd;
  }

  if (brain.aim) {
    const wantYaw = wrap(angTo(t, brain.aim) - t.heading);
    const dYaw = wrap(wantYaw - t.turretYaw);
    cmd.turretYaw = Math.abs(dYaw) < 0.015 ? 0 : clamp(dYaw * 3, -1, 1);
    const d = Math.hypot(brain.aim.x - t.x, brain.aim.z - t.z);
    const muzzleY = t.turretPivot.y + BLOCK_SIZE;
    const wantPitch = Math.atan2(brain.aim.y - muzzleY, d);
    cmd.gunPitch = clamp((wantPitch - t.gunPitch) * 3, -1, 1);

    // Fire ONLY with current visual confirmation, alignment, range and cooldown.
    if (brain.mode === 'engage' && brain.debug.los && Math.abs(dYaw) < 0.1 && d < K.range[1] + 40 && t.cooldown === 0) {
      const widening = 1 + d / 100 + (target ? target.speed * Math.abs(Math.sin(target.heading - angTo(t, target))) / 10 : 0);
      const ranging = brain.shotsAtContact === 0 ? 2 : 1;
      const err = K.err * widening * ranging;
      brain.debug.err = err;
      t.turretYaw += (w.rng.next() - 0.5) * 2 * err;
      cmd.fire = true;
      brain.shotsAtContact++;
      brain.lastShotTick = w.tick;
    }
  }
  return cmd;
}
