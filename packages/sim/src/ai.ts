/**
 * Enemy AI (AI.md): faithful personalities, human-like imperfection.
 * Brains consume the SAME awareness model as the player radar and emit the
 * SAME TankCommand a player does. Knobs are data (AI.md §5.5).
 */
import { hasLos, targetable, type Known } from './awareness';
import { type Tank, type TankCommand } from './tank';
import type { World } from './world';
import type { V3 } from './raycast';

export type AiKind = 'slow' | 'super';

export interface AiKnobs {
  speedMul: number;
  slew: number; // rad/s turret
  thinkTicks: number;
  err: number; // rad base aim cone
  cooldown: [number, number]; // s
  range: [number, number]; // preferred band, m
  blockedPolicy: 'reposition' | 'shoot';
}

export const AI_KNOBS: Record<AiKind, AiKnobs> = {
  slow: {
    speedMul: 0.5, slew: 0.785, thinkTicks: 24, err: 0.105,
    cooldown: [2.5, 3.5], range: [60, 100], blockedPolicy: 'reposition',
  },
  super: {
    speedMul: 1.2, slew: 2.094, thinkTicks: 15, err: 0.035,
    cooldown: [1.4, 2.0], range: [40, 80], blockedPolicy: 'shoot',
  },
};

export interface AiBrain {
  kind: AiKind;
  mode: 'approach' | 'engage' | 'reposition';
  targetId: number | null;
  aim: { x: number; z: number } | null; // where the turret is pointed
  strafe: 1 | -1;
  nextThink: number;
  blockedTicks: number;
  stuckTicks: number;
  lastShotTick: number;
  shotsAtContact: number;
  reposition: { x: number; z: number } | null;
  lastX: number;
  lastZ: number;
  debug: { intent: V3 | null; los: boolean; err: number };
}

export function createBrain(kind: AiKind): AiBrain {
  return {
    kind,
    mode: 'approach',
    targetId: null,
    aim: null,
    strafe: 1,
    nextThink: 0,
    blockedTicks: 0,
    stuckTicks: 0,
    lastShotTick: -9999,
    shotsAtContact: 0,
    reposition: null,
    lastX: 0,
    lastZ: 0,
    debug: { intent: null, los: false, err: 0 },
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

/** Pick the freshest known contact; memory ghosts are drive-to points only. */
function pickTarget(w: World, t: Tank): { id: number; k: Known } | null {
  const m = w.awareness.get(t.id);
  if (!m) return null;
  let best: { id: number; k: Known } | null = null;
  for (const [id, k] of m) {
    const target = w.tanks.find((x) => x.id === id);
    if (!target || !targetable(w, target)) continue;
    if (!best || k.tick > best.k.tick) best = { id, k };
  }
  return best;
}

export function thinkBrain(w: World, brain: AiBrain, t: Tank): TankCommand {
  const K = AI_KNOBS[brain.kind];
  const cmd: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };
  if (w.tick < brain.nextThink) {
    // between perception ticks: keep executing the last intent (stale data)
    return execute(w, brain, t, cmd, K);
  }
  brain.nextThink = w.tick + K.thinkTicks;

  const found = pickTarget(w, t);
  if (!found) {
    brain.mode = 'approach';
    brain.targetId = null;
    brain.aim = null;
    brain.debug.intent = null;
    return cmd; // patrol idle: no omniscient hunting
  }
  const contact = found.k;
  if (brain.targetId !== found.id) brain.shotsAtContact = 0;
  brain.targetId = found.id;

  const d = Math.hypot(contact.x - t.x, contact.z - t.z);
  const los = hasLos(w, [t.x, 1.2, t.z], [contact.x, 1.2, contact.z]);
  brain.debug.los = los;
  brain.blockedTicks = los ? 0 : brain.blockedTicks + K.thinkTicks;

  if (brain.mode === 'reposition' && brain.reposition) {
    if (Math.hypot(brain.reposition.x - t.x, brain.reposition.z - t.z) < 6) {
      brain.mode = 'approach';
      brain.reposition = null;
    }
  } else if (!los && brain.blockedTicks > 180) {
    if (K.blockedPolicy === 'reposition') {
      brain.mode = 'reposition';
      const a = w.rng.next() * Math.PI * 2;
      brain.reposition = {
        x: clamp(contact.x + Math.sin(a) * 40, -190, 190),
        z: clamp(contact.z + Math.cos(a) * 40, -190, 190),
      };
    }
    // 'shoot' policy: supertanks fire at memory through destructible cover
  } else if (d > K.range[1] + 20) {
    brain.mode = 'approach';
  } else if (d >= K.range[0] * 0.6) {
    brain.mode = 'engage';
  }

  // aim point: live contact if LOS, else decaying memory (where you WERE)
  brain.aim = { x: contact.x, z: contact.z };
  brain.debug.intent = [contact.x, 1.2, contact.z];
  return execute(w, brain, t, cmd, K);
}

function execute(
  w: World,
  brain: AiBrain,
  t: Tank,
  cmd: TankCommand,
  K: AiKnobs,
): TankCommand {
  const goal =
    brain.mode === 'reposition' && brain.reposition
      ? brain.reposition
      : brain.aim
        ? orbitPoint(brain, t, brain.aim, K)
        : null;
  if (goal) {
    const want = angTo(t, goal);
    const dh = wrap(want - t.heading);
    cmd.turn = clamp(dh * 2, -1, 1);
    cmd.throttle = Math.abs(dh) > 1.2 ? 0.2 : brain.mode === 'engage' ? 0.5 : 1;
    // stuck = commanded to move but position didn't change (not accel ramp)
    const moved = Math.hypot(t.x - brain.lastX, t.z - brain.lastZ);
    if (cmd.throttle > 0 && moved < 0.02) brain.stuckTicks += K.thinkTicks;
    else brain.stuckTicks = 0;
    brain.lastX = t.x;
    brain.lastZ = t.z;
    if (brain.stuckTicks > 90) {
      brain.stuckTicks = 0;
      brain.mode = 'reposition';
      const a = w.rng.next() * Math.PI * 2;
      brain.reposition = {
        x: clamp(t.x + Math.sin(a) * 30, -190, 190),
        z: clamp(t.z + Math.cos(a) * 30, -190, 190),
      };
    }
  }
  if (brain.aim) {
    const wantYaw = wrap(angTo(t, brain.aim) - t.heading);
    const dYaw = wrap(wantYaw - t.turretYaw);
    cmd.turretYaw = clamp(dYaw * 3, -1, 1);
    const d = Math.hypot(brain.aim.x - t.x, brain.aim.z - t.z);
    const wantPitch = Math.atan2(1.2 - 1.2, d); // flat fire at tank height
    cmd.gunPitch = clamp((wantPitch - t.gunPitch) * 3, -1, 1);

    const aligned = Math.abs(dYaw) < 0.1;
    const inRange = d < K.range[1] + 40;
    const losOk = brain.debug.los || K.blockedPolicy === 'shoot';
    if (aligned && inRange && losOk && t.cooldown === 0 && brain.mode !== 'reposition') {
      // human-like error: cone widens with range; first shot ranges wide
      const widening = 1 + d / 100;
      const ranging = brain.shotsAtContact === 0 ? 2 : 1;
      const err = K.err * widening * ranging;
      brain.debug.err = err;
      const jitter = (w.rng.next() - 0.5) * 2 * err;
      // apply jitter as a turret offset for this shot only
      t.turretYaw += jitter;
      cmd.fire = true;
      brain.shotsAtContact++;
      brain.lastShotTick = w.tick;
      // cooldown is charged by stepWorld when the shot actually fires
    }
  }
  return cmd;
}

function orbitPoint(
  brain: AiBrain,
  t: Tank,
  aim: { x: number; z: number },
  K: AiKnobs,
): { x: number; z: number } {
  if (brain.mode !== 'engage') return aim;
  // strafe around the contact at the preferred band
  const a = angTo(aim, t) + brain.strafe * 0.5;
  const r = (K.range[0] + K.range[1]) / 2;
  return { x: aim.x + Math.sin(a) * r, z: aim.z + Math.cos(a) * r };
}