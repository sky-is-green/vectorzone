import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { MAPS, MAP_IDS } from './maps';
import { fenceAlive } from './fence';
import type { TankCommand } from './tank';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

describe('arena presets (M8)', () => {
  it('all four maps build with valid fence pylon references', () => {
    for (const id of MAP_IDS) {
      const w = createWorld(5, id);
      expect(w.structures.length).toBeGreaterThan(0);
      for (const f of w.fences) {
        expect(w.structures.some((s) => s.id === f.pylonA)).toBe(true);
        expect(w.structures.some((s) => s.id === f.pylonB)).toBe(true);
        expect(fenceAlive(w, f)).toBe(true);
      }
    }
  });

  it('heaviest map stays inside the draw-call budget', () => {
    // 2 calls per structure + ~14 fixed (tank, scenery, pools, HUD-adjacent)
    for (const id of MAP_IDS) {
      const n = createWorld(5, id).structures.length;
      expect(n * 2 + 14).toBeLessThan(100);
    }
  });

  it('map profiles differ (stormfield has storms+meteors, classic does not)', () => {
    expect(MAPS.stormfield.sky.storm).toBe(true);
    expect(MAPS.stormfield.sky.meteors).toBe(true);
    expect(MAPS.classic.sky.storm).toBe(false);
    expect(MAPS.classic.sky.meteors).toBe(false);
  });
});

describe('sky events (M8)', () => {
  it('ion storm fires on stormfield and blinds awareness', () => {
    const w = createWorld(6, 'stormfield');
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    let storm = false;
    for (let i = 0; i < 15100; i++) {
      stepWorld(w, [N]);
      storm ||= w.events.some((e) => e.kind === 'ionStorm');
    }
    expect(storm).toBe(true);
    expect(w.stormUntil).toBeGreaterThan(w.tick - 500);
  });

  it('classic never storms', () => {
    const w = createWorld(6, 'classic');
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    for (let i = 0; i < 16000; i++) stepWorld(w, [N]);
    expect(w.stormUntil).toBe(0);
  });

  it('meteorites telegraph and deposit cover on stormfield', () => {
    const w = createWorld(7, 'stormfield');
    w.nextSpawnTick = 1e9;
    w.nextBomberTick = 1e9;
    w.nextStormTick = 1e9;
    let tele = false;
    let cover = false;
    const baseRocks = w.structures.filter((s) => s.kind === 'rocks').length;
    for (let i = 0; i < 6200; i++) {
      stepWorld(w, [N]);
      tele ||= w.telegraphs.some((t) => t.kind === 'meteor');
      cover ||= w.structures.filter((s) => s.kind === 'rocks').length > baseRocks;
    }
    expect(tele).toBe(true);
    expect(cover).toBe(true);
  });
});