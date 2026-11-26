import { describe, expect, it } from 'vitest';
import { createEnemyTank } from '@vectorzone/sim';
import { livingSpectators, nextSpectatorId, spectatorLabel } from './spectator';

const tanks = [
  { ...createEnemyTank(0, 'slow', 0, 0, 0), alive: false },
  createEnemyTank(3, 'slow', 0, 0, 0),
  createEnemyTank(1, 'super', 0, 0, 0),
  { ...createEnemyTank(2, 'slow', 0, 0, 0), alive: false },
];

describe('spectator selection', () => {
  it('lists only living tanks other than the player, sorted by id', () => {
    expect(livingSpectators(tanks).map((t) => t.id)).toEqual([1, 3]);
  });

  it('cycles forward and backward with wraparound', () => {
    const living = livingSpectators(tanks);
    expect(nextSpectatorId(living, 1, 1)).toBe(3);
    expect(nextSpectatorId(living, 3, 1)).toBe(1);
    expect(nextSpectatorId(living, 1, -1)).toBe(3);
  });

  it('selects the first tank when current id is missing', () => {
    const living = livingSpectators(tanks);
    expect(nextSpectatorId(living, null, 1)).toBe(1);
    expect(nextSpectatorId(living, 99, 1)).toBe(1);
  });

  it('returns null when nothing is alive', () => {
    expect(nextSpectatorId(livingSpectators([tanks[0]]), null, 1)).toBeNull();
  });

  it('labels supertanks distinctly', () => {
    expect(spectatorLabel(tanks[2], 'super')).toBe('SUPERTANK');
    expect(spectatorLabel(tanks[1], 'slow')).toContain('LIGHT TANK');
  });
});