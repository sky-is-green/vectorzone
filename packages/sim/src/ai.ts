/**
 * Enemy AI (AI.md): PATROL -> INVESTIGATE -> ENGAGE -> PATROL.
 * Brains consume the shared awareness model and emit TankCommand.
 * No contact = patrol. Contact without LOS = investigate, never fire.
 * Visual confirmation = engage. Dead/expired target = repeat.
 */
import { hasLos, SIGHT_RANGE, targetable, type Known } from './awareness';
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
  maneuverDirection: 1 | -1;
  nextManeuverTick: number;
  reposition: { x: number; z: number } | null;
  nextThink: number;
  lastTargetSwitchTick: number;
  stuckTicks: number;
  lastShotTick: number;
  shotsAtContact: number;
  lastX: number;
  lastZ: number;
  debug: { intent: V3 | null; los: boolean; err: number; evading: boolean };
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
    maneuverDirection: 1,
    nextManeuverTick: 0,
    reposition: null,
    nextThink: 0,
    lastTargetSwitchTick: -9999,
    stuckTicks: 0,
    lastShotTick: -9999,
    shotsAtContact: 0,
    lastX: 0,
    lastZ: 0,
    debug: { intent: null, los: false, err: 0, evading: false },
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

/** Pick a target with stickiness. The director tracker prefers the player;
 * other AI prefer other tanks (FFA). Current contacts are retained briefly. */
function pickTarget(w: World, t: Tank, brain: AiBrain): { id: number; k: Known } | null {
  const m = w.awareness.get(t.id);
  if (!m) return null;
  const candidates: { id: number; k: Known }[] = [];
  for (const [id, k] of m) {
    const target = w.tanks.find((x) => x.id === id);
    if (!target || !targetable(w, target)) continue;
    candidates.push({ id, k });
  }
  if (brain.playerTracker) {
    const player = candidates.find((c) => c.id === 0);
    if (player) return player;
  }
  const current = candidates.find((c) => c.id === brain.targetId);
  if (current && w.tick - brain.lastTargetSwitchTick < 180) return current;
  const ffa = candidates.filter((c) => c.id !== 0).sort((a, b) => b.k.tick - a.k.tick);
  const best = ffa[0] ?? candidates.sort((a, b) => b.k.tick - a.k.tick)[0] ?? null;
  if (best && best.id !== brain.targetId) brain.lastTargetSwitchTick = w.tick;
  return best;
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
  // tick (low speed is not the same as no movement).
  if (brain.mode !== 'engage') {
    const moved = dist2(t, { x: brain.lastX, z: brain.lastZ });
    brain.stuckTicks = moved < 0.5 ? brain.stuckTicks + AI_KNOBS[brain.kind].thinkTicks : 0;
  }
  brain.lastX = t.x;
  brain.lastZ = t.z;
  if (brain.stuckTicks > 180) {
    brain.stuckTicks = 0;
    brain.mode = 'reposition';
    const a = w.rng.next() * Math.PI * 2;
    brain.reposition = {
      x: clamp(t.x + Math.sin(a) * 30, -190, 190),
      z: clamp(t.z + Math.cos(a) * 30, -190, 190),
    };
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
    if (!brain.patrolGoal || dist2(t, brain.patrolGoal) < 8) brain.patrolGoal = newPatrolGoal(w, t);
    brain.debug.intent = [brain.patrolGoal.x, 0.8, brain.patrolGoal.z];
    brain.debug.los = false;
    return execute(w, brain, t, cmd);
  }

  const switched = brain.targetId !== found.id;
  if (switched) brain.shotsAtContact = 0;
  brain.targetId = found.id;
  const target = w.tanks.find((x) => x.id === found.id)!;
  const contact = found.k;
  const visual =
    dist2(t, target) <= SIGHT_RANGE &&
    hasLos(w, [t.x, 1.2, t.z], [target.x, 1.2, target.z]);
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
    easeAim(brain, target.x, target.z, brain.aimY, brain.aim ? 0.35 : 1);
    brain.debug.intent = [target.x, target.z, brain.aimY];
    return execute(w, brain, t, cmd);
  }

  // Information without visual confirmation: investigate the last-known
  // position. Never fire from ping/gunfire/memory alone.
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

function execute(w: World, brain: AiBrain, t: Tank, cmd: TankCommand): TankCommand {
  const K = AI_KNOBS[brain.kind];
  const target = w.tanks.find((x) => x.id === brain.targetId);
  if (brain.mode === 'engage' && (!target || !target.alive)) {
    brain.mode = 'patrol';
    brain.targetId = null;
    brain.aim = null;
    brain.patrolGoal = null;
  }

  const turretDead = countType(t.turret, 'gun') === 0;
  let goal: { x: number; z: number } | null = null;
  let throttle = 0;

  if (turretDead) {
    // doomed tank charges its last known target/contact instead of wandering
    goal = brain.aim ?? brain.investigateGoal ?? brain.patrolGoal;
    throttle = 1;
  } else if (brain.mode === 'patrol') {
    if (!brain.patrolGoal || dist2(t, brain.patrolGoal) < 8) brain.patrolGoal = newPatrolGoal(w, t);
    goal = brain.patrolGoal;
    throttle = 0.55;
  } else if (brain.mode === 'investigate') {
    goal = brain.investigateGoal;
    throttle = 0.7;
  } else if (brain.mode === 'reposition') {
    goal = brain.reposition;
    throttle = 0.75;
    if (goal && dist2(t, goal) < 6) {
      brain.reposition = null;
      brain.mode = brain.targetId ? 'investigate' : 'patrol';
    }
  } else if (brain.mode === 'engage' && target) {
    const d = dist2(t, target);
    const threat = w.threats.get(t.id);
    const underFire = threat !== undefined && w.tick - threat.tick < 90;
    brain.debug.evading = underFire;
    if (underFire) {
      // evade incoming fire: back away from the threat and add lateral motion
      const away = Math.atan2(t.x - target.x, t.z - target.z);
      const side = away + brain.maneuverDirection * 0.7;
      goal = {
        x: clamp(t.x + Math.sin(side) * 28, -190, 190),
        z: clamp(t.z + Math.cos(side) * 28, -190, 190),
      };
      throttle = 0.8;
    } else if (d > K.range[1]) {
      // close distance to tighten the shot
      goal = target;
      throttle = 0.65;
    } else if (d < K.range[0]) {
      // too close: restore the band
      const away = Math.atan2(t.x - target.x, t.z - target.z);
      goal = { x: clamp(t.x + Math.sin(away) * 25, -190, 190), z: clamp(t.z + Math.cos(away) * 25, -190, 190) };
      throttle = 0.55;
    } else {
      // mid-range combat strafe; reverse only on a slow timer, never per tick
      if (w.tick >= brain.nextManeuverTick) {
        brain.maneuverDirection = brain.maneuverDirection === 1 ? -1 : 1;
        brain.nextManeuverTick = w.tick + 120 + Math.floor(w.rng.next() * 120);
      }
      const side = angTo(target, t) + brain.maneuverDirection * (Math.PI / 2);
      goal = {
        x: clamp(t.x + Math.sin(side) * 22, -190, 190),
        z: clamp(t.z + Math.cos(side) * 22, -190, 190),
      };
      throttle = 0.3;
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
      const widening = 1 + d / 100;
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
