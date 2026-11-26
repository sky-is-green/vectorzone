import { describe, expect, it } from 'vitest';
import { hullTurnAxisFromKeys, turretAxisFromKeys } from './input';
import { enemyColor } from './hud';

describe('turret control sign', () => {
  it('ArrowLeft yields positive world yaw (screen-left)', () => {
    expect(turretAxisFromKeys(true, false)).toBe(1);
  });
  it('ArrowRight yields negative world yaw (screen-right)', () => {
    expect(turretAxisFromKeys(false, true)).toBe(-1);
  });
  it('both or neither is neutral', () => {
    expect(turretAxisFromKeys(false, false)).toBe(0);
    expect(turretAxisFromKeys(true, true)).toBe(0);
  });
});

describe('hull steering sign', () => {
  it('A steers screen-left, D screen-right', () => {
    expect(hullTurnAxisFromKeys(true, false)).toBe(1);
    expect(hullTurnAxisFromKeys(false, true)).toBe(-1);
  });
});

describe('enemy radar colours', () => {
  for (let id = 0; id < 5; id++) {
    it(`blip ${id} is a shade of red`, () => {
      const hex = enemyColor(id, 255).slice(1, 7);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      expect(r).toBeGreaterThan(150);
      expect(r).toBeGreaterThan(g);
      expect(r).toBeGreaterThan(b);
    });
  }
});