import { describe, expect, it } from 'vitest';
import { getCell, countType } from './grid';
import { createWorld, stepWorld, hashWorld } from './world';
import { hullToWorld, type TankCommand } from './tank';
import { makeStructure } from './structure';
import { RUBBLE_CAP, SHELL_BUDGET } from './combat';
import type { Shell } from './combat';
import type { V3 } from './raycast';

const cmd = (over: Partial<TankCommand> = {}): TankCommand => ({
  throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false, ...over,
});

function shell(pos: V3, dir: V3, budget = SHELL_BUDGET): Shell {
  return { id: 900, owner: -1, pos, dir, budget, alive: true };
}

describe('penetration & blow-through', () => {
  it('a budgeted side shot tunnels CLEAN through the hull', () => {
    const w = createWorld(1);
    const t = w.tanks[0];
    // ray along +X at deck height, mid-length: enters at x=0, exits x=7
    w.shells.push(shell([-3, 0.45, 0], [1, 0, 0], 40));
    const evs: string[] = [];
    for (let i = 0; i < 6; i++) {
      stepWorld(w); // shell crosses 2 m per tick
      evs.push(...w.events.map((e) => e.kind));
    }
    for (let x = 0; x < t.hull.size.x; x++) {
      expect(getCell(t.hull, x, 1, 6)).toBeNull();
    }
    // and out the other side: the ray path is empty end to end
    expect(evs.some((k) => k === 'blockDestroyed')).toBe(true);
  });

  it('an under-budget shot stops inside (crater, not tunnel)', () => {
    const w = createWorld(1);
    const t = w.tanks[0];
    w.shells.push(shell([-3, 0.45, 0], [1, 0, 0], 4)); // 2 cells of hull
    for (let i = 0; i < 6; i++) stepWorld(w);
    expect(getCell(t.hull, 0, 1, 6)).toBeNull();
    expect(getCell(t.hull, 1, 1, 6)).toBeNull();
    expect(getCell(t.hull, 3, 1, 6)).not.toBeNull();
  });

  it('splash chips neighbours of destroyed cells', () => {
    const w = createWorld(1);
    const t = w.tanks[0];
    const before = getCell(t.hull, 0, 0, 6)!.hp;
    w.shells.push(shell([-3, 0.45, 0], [1, 0, 0], 4));
    for (let i = 0; i < 6; i++) stepWorld(w);
    const after = getCell(t.hull, 0, 0, 6);
    expect(after === null || after.hp < before).toBe(true);
  });
});

describe('structural integrity', () => {
  it('shooting out a whole course drops the unsupported floor above', () => {
    const w = createWorld(1);
    const s = makeStructure(500, 'wall', 0, 40);
    w.structures.push(s);
    // horizontal ray removes the entire middle course; the top course loses
    // all ground connection and falls. (A vertical cut would NOT fall: both
    // halves still stand on their own bases — ground anchors hold them.)
    w.shells.push(shell([-4, 0.45, 40], [1, 0, 0], 24));
    for (let i = 0; i < 4; i++) stepWorld(w);
    expect(w.chunks.length).toBeGreaterThan(0);
    expect(getCell(s.grid, 0, 2, 0)).toBeNull(); // top course fell
    expect(getCell(s.grid, 9, 2, 0)).toBeNull();
    expect(getCell(s.grid, 0, 0, 0)).not.toBeNull(); // base still stands
  });

  it('a tank whose core dies shatters and is marked dead', () => {
    const w = createWorld(1);
    const t = w.tanks[0];
    // core sits at hull cells (3..4, 2, 4..5): ray down through the deck at z=-0.3
    const above = hullToWorld(t, [0, 4, -0.3]);
    w.shells.push(shell(above, [0, -1, 0], 40));
    const evs: string[] = [];
    for (let i = 0; i < 4; i++) {
      stepWorld(w);
      evs.push(...w.events.map((e) => e.kind));
    }
    expect(t.alive).toBe(false);
    expect(evs.some((k) => k === 'tankKilled')).toBe(true);
    expect(w.chunks.length).toBeGreaterThan(0);
  });
});

describe('chain explosions', () => {
  it('one ammo cell detonates the whole depot', () => {
    const w = createWorld(1);
    const depot = w.structures.find((s) => s.kind === 'depot')!;
    const ammoBefore = countType(depot.grid, 'ammo');
    expect(ammoBefore).toBeGreaterThan(2);
    // hit an ammo cell: depot at (15,-55), ammo world x=14.85/15.15, z=-55.15/-54.85
    w.shells.push(shell([14.85, 0.15, -55.15], [0, 1, 0], 40));
    stepWorld(w);
    const explosions = w.events.filter((e) => e.kind === 'explosion');
    expect(explosions.length).toBeGreaterThanOrEqual(2);
    expect(countType(depot.grid, 'ammo')).toBe(0);
  });
});

describe('rubble', () => {
  it('cap enforced: oldest crumbles first', () => {
    const w = createWorld(1);
    for (let i = 0; i < RUBBLE_CAP + 50; i++) {
      w.rubble.push({ x: i, z: 0, type: 'hull', born: i });
    }
    stepWorld(w);
    expect(w.rubble.length).toBe(RUBBLE_CAP);
    expect(w.rubble[0].born).toBe(50);
  });

  it('settled chunks become rubble cover', () => {
    const w = createWorld(1);
    const s = makeStructure(501, 'wall', 0, 40);
    w.structures.push(s);
    w.shells.push(shell([-4, 0.45, 40], [1, 0, 0], 24));
    for (let i = 0; i < 4; i++) stepWorld(w);
    expect(w.chunks.length).toBeGreaterThan(0);
    for (let i = 0; i < 90; i++) stepWorld(w); // past settle tick
    expect(w.chunks.length).toBe(0);
    expect(w.rubble.length).toBeGreaterThan(0);
  });
});

describe('firing & determinism with combat', () => {
  it('space fires on cooldown and the shell travels', () => {
    const w = createWorld(1);
    stepWorld(w, [cmd({ fire: true })]);
    expect(w.shells.length).toBe(1);
    expect(w.events.some((e) => e.kind === 'fire')).toBe(true);
    stepWorld(w, [cmd({ fire: true })]); // cooldown active
    expect(w.shells.length).toBe(1);
    for (let i = 0; i < 120; i++) stepWorld(w, [cmd()]);
    expect(w.shells.length).toBe(0); // left the arena
  });

  it('same seed + same combat script → identical hash', () => {
    const script = [cmd({ fire: true }), cmd({ turn: 1, fire: true }), cmd({ turretYaw: 1 })];
    const run = () => {
      const w = createWorld(77);
      for (let i = 0; i < 900; i++) stepWorld(w, [script[i % script.length]]);
      return hashWorld(w);
    };
    expect(run()).toBe(run());
  });
});