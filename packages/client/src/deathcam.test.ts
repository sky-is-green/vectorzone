import { describe, expect, it } from 'vitest';
import {
  beginDeathCam,
  DEATH_EXPLOSION_MS,
  DEATH_KILLER_MS,
  DEATH_SOLO_FOCUS_MS,
  updateDeathCam,
} from './deathcam';

describe('death camera sequence', () => {
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
