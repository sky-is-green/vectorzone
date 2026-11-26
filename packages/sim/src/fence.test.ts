import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld } from './world';
import { fenceAlive } from './fence';
import type { TankCommand } from './tank';
import type { Shell } from './combat';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function idle() {
  const w = createWorld(41);
  w.nextSpawnTick = 1e9;
  w.nextBomberTick = 1e9;
  return w;
}

describe('energy fences & scan tower (5f)', () => {
  it('fence blocks shells while pylons stand', () => {
    const w = idle();
    const sh: Shell = { id: 900, owner: -1, pos: [0, 1, 60], dir: [0, 0, 1], budget: 40, alive: true };
    w.shells.push(sh);
    let impact = false;
    for (let i = 0; i < 20; i++) {
      stepWorld(w, [N]);
      impact ||= w.events.some((e) => e.kind === 'shellImpact');
    }
    expect(impact).toBe(true);
    expect(w.shells.length).toBe(0);
  });

  it('fence stops a tank; destroying a pylon drops it and the tank passes', () => {
    const w = idle();
    const t = w.tanks[0];
    t.x = 0;
    t.z = 60;
    t.heading = 0;
    for (let i = 0; i < 300; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(t.z).toBeLessThan(69); // held by the field
    // kill pylon A (106) at (-6,70): vertical shot through its single column
    const pylon = w.structures.find((s) => s.id === 106)!;
    w.shells.push({ id: 901, owner: -1, pos: [-6, 6, 70], dir: [0, -1, 0], budget: 40, alive: true });
    for (let i = 0; i < 20; i++) stepWorld(w, [N]);
    expect(pylon.grid.cells.some((c) => c)).toBe(false);
    expect(fenceAlive(w, w.fences[0])).toBe(false);
    for (let i = 0; i < 300; i++) stepWorld(w, [{ ...N, throttle: 1 }]);
    expect(t.z).toBeGreaterThan(72); // field down: passes
  });

  it('scan tower pings every 10 s while alive, silent once destroyed', () => {
    const w = idle();
    let pings = 0;
    for (let i = 0; i < 1200; i++) {
      stepWorld(w, [N]);
      pings += w.events.filter((e) => e.kind === 'scanPing').length;
    }
    expect(pings).toBe(2);
    // destroy the scan tower at (-40,-80): one explosion covers its footprint
    const scan = w.structures.find((s) => s.kind === 'scan')!;
    w.pendingExplosions.push({ pos: [-40, 0.75, -80], radius: 2.5, damage: 6, source: 'ammo' });
    w.pendingExplosions.push({ pos: [-40, 1.5, -80], radius: 2.5, damage: 6, source: 'ammo' });
    for (let i = 0; i < 5; i++) stepWorld(w, [N]);
    expect(scan.grid.cells.some((c) => c)).toBe(false);
    const before = w.tick;
    let after = 0;
    for (let i = 0; i < 1200; i++) {
      stepWorld(w, [N]);
      after += w.events.filter((e) => e.kind === 'scanPing').length;
    }
    expect(after).toBe(0);
    expect(w.tick).toBeGreaterThan(before);
  });
});