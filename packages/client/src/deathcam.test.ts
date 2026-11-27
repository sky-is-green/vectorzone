import { describe, expect, it } from 'vitest';
import {
  beginDeathCam,
  DEATH_EXPLOSION_MS,
  DEATH_KILLER_MS,
  DEATH_SOLO_FOCUS_MS,
  killedByLabel,
  updateDeathCam,
} from './deathcam';

describe('death camera sequence', () => {
  it('labels AI, missile, bomber, and environmental kills distinctly', () => {
    expect(killedByLabel({ by: 3, source: 'shell', killerKind: 'slow' })).toBe('AI-3');
    expect(killedByLabel({ by: 4, source: 'shell', killerKind: 'super' })).toBe('SUPERTANK AI-4');
    expect(killedByLabel({ by: null, source: 'missile' })).toBe('MISSILE');
    expect(killedByLabel({ by: 800, source: 'bomb' })).toBe('BOMBER');
    expect(killedByLabel({ by: null, source: 'volcano' })).toBe('VOLCANO');
    expect(killedByLabel({ by: null, cause: 'selfDestruct' })).toBe('SELF-DESTRUCT');
  });

  it('shows the wreck first, then a living killer, then spectator', () => {
    const start = beginDeathCam(1000, [1, 1, 2], 7, 50);
    expect(start.stage).toBe('explosion');
    expect(updateDeathCam(start, 1000 + DEATH_EXPLOSION_MS - 1, true).stage).toBe('explosion');
    const killer = updateDeathCam(start, 1000 + DEATH_EXPLOSION_MS, true);
    expect(killer.stage).toBe('killer');
    expect(updateDeathCam(killer, 1000 + DEATH_EXPLOSION_MS + DEATH_KILLER_MS, true).stage).toBe('spectator');
  });

  it('keeps focus on the wreck longer when no killer can be shown', () => {
    const start = beginDeathCam(0, [0, 1, 0], null, null);
    expect(updateDeathCam(start, DEATH_EXPLOSION_MS, false).stage).toBe('explosion');
    expect(updateDeathCam(start, DEATH_SOLO_FOCUS_MS, false).stage).toBe('spectator');
  });

  it('skips killer focus if the killer disappears', () => {
    const start = beginDeathCam(0, [0, 1, 0], 7, null);
    const killer = updateDeathCam(start, DEATH_EXPLOSION_MS, true);
    expect(killer.stage).toBe('killer');
    expect(updateDeathCam(killer, DEATH_EXPLOSION_MS + 10, false).stage).toBe('spectator');
  });
});
