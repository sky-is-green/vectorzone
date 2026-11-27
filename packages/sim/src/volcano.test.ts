import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { MATCH_TICKS, VOLCANO_FINAL_TICKS, LAVA_TICKS } from './combat';
import { bombAftermath } from './volcano';
import type { TankCommand } from './tank';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function idleWorld() {
  const w = createWorld(3);
  w.nextSpawnTick = 1e9;
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberTick = 1e9;
  return w;
}

describe('match clock & volcano (user direction 2026-11-25)', () => {
  it('volcano stays dormant until the final two minutes', () => {
    const w = idleWorld();
    for (let i = 0; i < MATCH_TICKS - VOLCANO_FINAL_TICKS - 5; i++) stepWorld(w, [N]);
    expect(w.volcano.state).toBe('dormant');
    expect(w.telegraphs.length).toBe(0);
  });

  it('final two minutes: rumble telegraph, erupt, telegraphed bombs, aftermath', () => {
    const w = idleWorld();
    let sawRumble = false;
    for (let i = 0; i < MATCH_TICKS - VOLCANO_FINAL_TICKS + 1; i++) {
      stepWorld(w, [N]);
      sawRumble ||= w.events.some((e) => e.kind === 'volcanoRumble');
    }
    expect(w.volcano.state).toBe('rumble');
    expect(sawRumble).toBe(true);
    let eruptAt = -1;
    let bombAt = -1;
    let aftermath = false;
    for (let i = 0; i < 2000; i++) {
      stepWorld(w, [N]);
      if (eruptAt < 0 && w.volcano.state === 'erupt') eruptAt = w.tick;
      if (bombAt < 0 && w.telegraphs.some((t) => t.kind === 'volcano')) bombAt = w.tick;
      if (bombAt >= 0 && w.tick >= bombAt + 90) {
        aftermath = w.lavaPools.length > 0 || w.structures.some((s) => s.kind === 'rocks');
        if (aftermath) break;
      }
    }
    expect(eruptAt).toBeGreaterThan(0);
    expect(bombAt).toBeGreaterThan(eruptAt);
    expect(aftermath).toBe(true);
    // rock cover must survive its own creating explosion
    for (const s of w.structures.filter((s) => s.kind === 'rocks')) {
      expect(s.grid.cells.some((c) => c)).toBe(true);
    }
  });

  it('keeps lava pools and their hazard state for the full lifetime', () => {
    const w = idleWorld();
    w.tanks[0].x = 100;
    w.tanks[0].z = 100;
    bombAftermath(w, 0, 0, 'volcano');
    expect(w.lavaPools).toHaveLength(1);
    expect(w.lavaPools[0].untilTick).toBe(w.tick + LAVA_TICKS);
    for (let i = 0; i < LAVA_TICKS - 1; i++) stepWorld(w, [N]);
    expect(w.lavaPools).toHaveLength(1);
    stepWorld(w, [N]);
    expect(w.lavaPools).toHaveLength(0);
  });

  it('match ends at 10 minutes', () => {
    const w = idleWorld();
    for (let i = 0; i < MATCH_TICKS + 2; i++) stepWorld(w, [N]);
    expect(w.phase).toBe('over');
  });
});

describe('bomber denies its flight path', () => {
  it('drops bombs on cadence even with no target beneath', () => {
    const w = idleWorld();
    w.nextBomberTick = 10;
    for (let i = 0; i < 12; i++) stepWorld(w, [N]);
    expect(w.bomber).toBeTruthy();
    let drops = 0;
    for (let i = 0; i < 300; i++) {
      stepWorld(w, [N]);
      drops += w.events.filter((e) => e.kind === 'bombTelegraph').length;
    }
    expect(drops).toBeGreaterThanOrEqual(4);
  });
});