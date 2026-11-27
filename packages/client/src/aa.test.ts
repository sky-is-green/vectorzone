import { describe, expect, it } from 'vitest';
import { AmbientAa } from './aa';

function rng(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe('ambient distant AA fire', () => {
  it('waits before the first volley', () => {
    const aa = new AmbientAa(rng(3));
    expect(aa.activeCount).toBe(0);
    expect(aa.update(0.5, rng(3))).toEqual([]);
  });

  it('spawns 2-4 distant tracers', () => {
    const aa = new AmbientAa(rng(5));
    aa.forceVolley(rng(5));
    expect(aa.activeCount).toBeGreaterThanOrEqual(2);
    expect(aa.activeCount).toBeLessThanOrEqual(4);
    const events = aa.update(1 / 60, rng(5));
    expect(events).toHaveLength(aa.activeCount);
    for (const e of events) {
      expect(e.kind).toBe('tracer');
      if (e.kind === 'tracer') {
        expect(e.pos[1]).toBeGreaterThan(30);
        expect(Math.hypot(e.pos[0], e.pos[2])).toBeGreaterThan(180);
      }
    }
  });

  it('produces distant sky explosions and removes spent shells', () => {
    const aa = new AmbientAa(rng(9));
    aa.forceVolley(rng(9));
    let explosions = 0;
    for (let i = 0; i < 600 && aa.activeCount; i++) {
      for (const e of aa.update(1 / 60, rng(9))) {
        if (e.kind === 'explosion') {
          explosions++;
          expect(e.pos[1]).toBeGreaterThan(25);
          expect(Math.hypot(e.pos[0], e.pos[2])).toBeGreaterThan(180);
        }
      }
    }
    expect(explosions).toBeGreaterThanOrEqual(2);
    expect(aa.activeCount).toBe(0);
  });

  it('keeps recurring after a volley', () => {
    const aa = new AmbientAa(rng(11));
    aa.forceVolley(rng(11));
    const events = aa.update(20, rng(11));
    expect(events.some((e) => e.kind === 'explosion')).toBe(true);
    expect(aa.activeCount).toBeGreaterThanOrEqual(2);
    expect(aa.activeCount).toBeLessThanOrEqual(4);
  });

  it('is deterministic for the same seed', () => {
    const run = () => {
      const random = rng(17);
      const aa = new AmbientAa(random);
      const events = [];
      for (let i = 0; i < 600; i++) events.push(...aa.update(1 / 60, random));
      return events;
    };
    expect(run()).toEqual(run());
  });
});
