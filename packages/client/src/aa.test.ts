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
    expect(aa.update(0.05, rng(3))).toEqual([]);
  });

  it('spawns 2-3 upward tracers behind the mountain ring', () => {
    const aa = new AmbientAa(rng(5));
    aa.forceVolley(rng(5));
    expect(aa.activeCount).toBeGreaterThanOrEqual(2);
    expect(aa.activeCount).toBeLessThanOrEqual(3);
    const events = aa.update(1 / 60, rng(5));
    expect(events).toHaveLength(aa.activeCount);
    for (const e of events) {
      expect(e.kind).toBe('tracer');
      if (e.kind === 'tracer') {
        expect(e.pos[1]).toBeLessThan(5);
        expect(e.dir[1]).toBeGreaterThan(0);
        expect(Math.hypot(e.pos[0], e.pos[2])).toBeGreaterThan(650);
      }
    }
  });

  it('produces distant sky explosions after about one second', () => {
    const aa = new AmbientAa(rng(9));
    aa.forceVolley(rng(9));
    let explosions = 0;
    let firstExplosionAt = -1;
    for (let i = 0; i < 600 && aa.activeCount; i++) {
      for (const e of aa.update(1 / 60, rng(9))) {
        if (e.kind === 'explosion') {
          if (firstExplosionAt < 0) firstExplosionAt = (i + 1) / 60;
          explosions++;
          expect(e.pos[1]).toBeGreaterThan(60);
          expect(Math.hypot(e.pos[0], e.pos[2])).toBeGreaterThan(650);
        }
      }
    }
    expect(explosions).toBeGreaterThanOrEqual(2);
    expect(firstExplosionAt).toBeGreaterThanOrEqual(0.85);
    expect(firstExplosionAt).toBeLessThanOrEqual(1.25);
    expect(aa.activeCount).toBeLessThanOrEqual(3);
  });

  it('keeps recurring after a volley', () => {
    const aa = new AmbientAa(rng(11));
    aa.forceVolley(rng(11));
    const events = aa.update(20, rng(11));
    expect(events.some((e) => e.kind === 'explosion')).toBe(true);
    expect(aa.activeCount).toBeGreaterThanOrEqual(2);
    expect(aa.activeCount).toBeLessThanOrEqual(3);
  });

  it('biases new fire into the current view heading', () => {
    const aa = new AmbientAa(rng(13));
    const view = Math.PI / 2;
    aa.forceVolley(rng(13), view);
    for (const e of aa.update(1 / 60, rng(13), view)) {
      if (e.kind !== 'tracer') continue;
      const ahead = e.pos[0] * Math.sin(view) + e.pos[2] * Math.cos(view);
      expect(ahead).toBeGreaterThan(0);
    }
  });

  it('sustains activity across a long period', () => {
    const random = rng(19);
    const aa = new AmbientAa(random);
    let tracers = 0;
    let explosions = 0;
    let maxActive = 0;
    for (let i = 0; i < 60 * 60; i++) {
      for (const e of aa.update(1 / 60, random, i * 0.002)) {
        if (e.kind === 'tracer') tracers++;
        else explosions++;
      }
      maxActive = Math.max(maxActive, aa.activeCount);
    }
    expect(tracers).toBeGreaterThan(1000);
    expect(explosions).toBeGreaterThan(20);
    expect(maxActive).toBeGreaterThanOrEqual(3);
  });

  it('clears active fire when the match ends', () => {
    const aa = new AmbientAa(rng(23));
    aa.forceVolley(rng(23));
    expect(aa.activeCount).toBeGreaterThan(0);
    aa.clear();
    expect(aa.activeCount).toBe(0);
    expect(aa.recentEvents).toEqual([]);
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
