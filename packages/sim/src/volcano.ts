/**
 * Volcano (ENVIRONMENTS §3.1, user direction 2026-11-25): dormant for the
 * whole match except the FINAL TWO MINUTES, then rumble → erupt → cooldown
 * cycles. Eruption bombs are telegraphed (>= 1.5 s) and leave lava pools or
 * fresh destructible rock cover — the arena rearranges itself at the climax.
 */
import { MATCH_TICKS, VOLCANO_FINAL_TICKS } from './combat';
import { makeStructure } from './structure';
import type { World } from './world';

export interface Volcano {
  state: 'dormant' | 'rumble' | 'erupt' | 'cooldown';
  untilTick: number;
  nextBomb: number;
  bombsLeft: number;
}

export interface LavaPool {
  x: number;
  z: number;
  radius: number;
  untilTick: number;
}

export function createVolcano(): Volcano {
  return {
    state: 'dormant',
    untilTick: MATCH_TICKS - VOLCANO_FINAL_TICKS,
    nextBomb: 0,
    bombsLeft: 0,
  };
}

export function stepVolcano(w: World): void {
  const v = w.volcano;
  if (!w.sky.volcano) return;
  if (w.tick < MATCH_TICKS - VOLCANO_FINAL_TICKS) return;
  if (v.state === 'dormant') {
    v.state = 'rumble';
    v.untilTick = w.tick + 600; // 10 s telegraph
    w.events.push({ kind: 'volcanoRumble' });
  } else if (v.state === 'rumble') {
    if (w.tick >= v.untilTick) {
      v.state = 'erupt';
      v.untilTick = w.tick + 480; // 8 s
      v.bombsLeft = 2 + Math.floor(w.rng.next() * 4);
      v.nextBomb = w.tick + 60;
      w.events.push({ kind: 'volcanoErupt' });
    }
  } else if (v.state === 'erupt') {
    if (v.bombsLeft > 0 && w.tick >= v.nextBomb) {
      const x = (w.rng.next() - 0.5) * 300;
      const z = (w.rng.next() - 0.5) * 300;
      w.telegraphs.push({ x, z, impactTick: w.tick + 90, radius: 2.5, kind: 'volcano' });
      w.events.push({ kind: 'bombTelegraph', pos: [x, 0, z] });
      v.bombsLeft--;
      v.nextBomb = w.tick + 90;
    }
    if (w.tick >= v.untilTick) {
      v.state = 'cooldown';
      v.untilTick = w.tick + 1200;
    }
  } else if (v.state === 'cooldown') {
    if (w.tick >= v.untilTick) {
      v.state = 'rumble';
      v.untilTick = w.tick + 600;
      w.events.push({ kind: 'volcanoRumble' });
    }
  }
}

/** Bomb impacts leave lava (DoT) or fresh rock cover (design: both).
 * Rocks land BESIDE the crater — at the centre the creating explosion
 * would instantly destroy them. */
export function bombAftermath(w: World, x: number, z: number): void {
  if (w.rng.next() < 0.5) {
    w.lavaPools.push({ x, z, radius: 2.5, untilTick: w.tick + 720 });
  } else {
    const rx = Math.max(-190, Math.min(190, x + 3.5));
    const rz = Math.max(-190, Math.min(190, z + 3.5));
    w.structures.push(makeStructure(w.nextId++, 'rocks', rx, rz));
  }
}