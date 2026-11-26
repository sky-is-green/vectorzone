/**
 * Enemy AI (AI.md): faithful personalities, human-like imperfection.
 * Brains consume the SAME awareness model as the player radar and emit the
 * SAME TankCommand a player does. Knobs are data (AI.md §5.5).
 */
import { hasLos, targetable, type Known } from './awareness';
import { BLOCK_SIZE, countType } from './grid';
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
  turretShotChance: number; // deliberate rare turret aim vs normal hull aim
}

export const AI_KNOBS: Record<AiKind, AiKnobs> = {
  slow: {
    speedMul: 0.5, slew: 0.785, thinkTicks: 24, err: 0.105,
    cooldown: [2.5, 3.5], range: [60, 100], blockedPolicy: 'reposition', turretShotChance: 0.1,
  },
  super: {
    speedMul: 1.2, slew: 2.094, thinkTicks: 15, err: 0.035,
    cooldown: [1.4, 2.0], range: [40, 80], blockedPolicy: 'shoot', turretShotChance: 0.15,
  },
};

export interface AiBrain {
  kind: AiKind;
  mode: 'approach' | 'engage' | 'reposition';
  targetId: number | null;
  /** Director-designated hunter: always prefers the player when known. */
  playerTracker: boolean;
  aim: { x: number; z: number; y: number } | null; // deliberate world aim point
  aimY: number;
  strafe: 1 | -1;
  nextThink: number;
  lastTargetSwitchTick: number;
  blockedTicks: number;
  stuckTicks: number;
  lastShotTick: number;
  shotsAtContact: number;
  reposition: { x: number; z: number } | null;
  lastX: number;
  lastZ: number;
  debug: { intent: V3 | null; los: boolean; err: number };
}

export function createBrain(kind: AiKind, playerTracker = false): AiBrain {
  return {
    kind,
    mode: 'approach',
    targetId: null,
    playerTracker,
    aim: null,
    aimY: 0.45,
    strafe: 1,
    nextThink: 0,
    lastTargetSwitchTick: -9999,
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

/** Pick a target with stickiness. Retain the current contact unless it
 * expires, the director tracker prefers the player, or a clearly fresher
 * contact appears after the minimum switch interval. */
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

export function thinkBrain(w: World, brain: AiBrain, t: Tank): TankCommand {
  const K = AI_KNOBS[brain.kind];
  const cmd: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };
  if (w.tick < brain.nextThink) {
    // between perception ticks: keep executing the last intent (stale data)
    return execute(w, brain, t, cmd, K);
  }
  brain.nextThink = w.tick + K.thinkTicks;

  const found = pickTarget(w, t, brain);
  if (!found) {
    brain.mode = 'approach';
    brain.targetId = null;
    brain.aim = null;
    brain.debug.intent = null;
    return cmd; // patrol idle: no omniscient hunting
  }
  const contact = found.k;
  const switched = brain.targetId !== found.id;
  if (switched) brain.shotsAtContact = 0;
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
  } else if (brain.mode === 'engage') {
    // hysteresis: leave only well outside the band; back off when too close
    if (d > K.range[1] + 15) brain.mode = 'approach';
    else if (d < K.range[0] - 15) {
      brain.mode = 'reposition';
      const away = Math.atan2(t.x - contact.x, t.z - contact.z);
      brain.reposition = {
        x: clamp(t.x + Math.sin(away) * 35, -190, 190),
        z: clamp(t.z + Math.cos(away) * 35, -190, 190),
      };
    }
  } else if (brain.mode === 'approach' && d < K.range[1] - 10) {
    brain.mode = 'engage';
  }

  // Normally aim at the lower hull; deliberate turret shots are rare and
  // half as likely against the player. Keep the choice stable for several shots.
  if (switched || brain.shotsAtContact === 0 || brain.shotsAtContact % 8 === 0) {
    const target = w.tanks.find((x) => x.id === found.id);
    const chance = K.turretShotChance * (target?.id === 0 ? 0.5 : 1);
    brain.aimY = w.rng.next() < chance ? 1.2 : 0.45 + w.rng.next() * 0.12;
  }
  const blend = brain.aim ? 0.35 : 1;
  brain.aim = {
    x: brain.aim ? brain.aim.x + (contact.x - brain.aim.x) * blend : contact.x,
    z: brain.aim ? brain.aim.z + (contact.z - brain.aim.z) * blend : contact.z,
    y: brain.aimY,
  };
  brain.debug.intent = [brain.aim.x, brain.aim.y, brain.aim.z];
  return execute(w, brain, t, cmd, K);
}

function execute(
  w: World,
  brain: AiBrain,
  t: Tank,
  cmd: TankCommand,
  K: AiKnobs,
): TankCommand {
  const turretDead = countType(t.turret, 'gun') === 0;
  const goal =
    brain.mode === 'reposition' && brain.reposition
      ? brain.reposition
      : brain.aim
        ? turretDead
          ? brain.aim
          : orbitPoint(brain, t, brain.aim, K)
        : null;
  if (goal) {
    const want = angTo(t, goal);
    const dh = wrap(want - t.heading);
    cmd.turn = Math.abs(dh) < 0.025 ? 0 : clamp(dh * 1.6, -1, 1);
    cmd.throttle = turretDead
      ? 1
      : Math.abs(dh) > 1.1
        ? 0.15
        : brain.mode === 'engage'
          ? 0.35
          : 0.85;
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
  if (turretDead) return cmd; // charge the target during self-destruct countdown
  if (brain.aim) {
    const wantYaw = wrap(angTo(t, brain.aim) - t.heading);
    const dYaw = wrap(wantYaw - t.turretYaw);
    cmd.turretYaw = Math.abs(dYaw) < 0.015 ? 0 : clamp(dYaw * 3, -1, 1);
    const d = Math.hypot(brain.aim.x - t.x, brain.aim.z - t.z);
    const muzzleY = t.turretPivot.y + BLOCK_SIZE;
    const wantPitch = Math.atan2(brain.aim.y - muzzleY, d);
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