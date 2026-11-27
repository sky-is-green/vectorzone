import { describe, expect, it } from 'vitest';
import { createWorld, stepWorld, hashWorld } from './world';
import { createEnemyTank, type TankCommand } from './tank';
import { createBrain } from './ai';
import {
  missileTargets,
  spawnMissile,
  MISSILE_MAX_TICKS,
  MISSILE_MIN_TICKS,
  type Bomber,
  type Missile,
} from './director';

const N: TankCommand = { throttle: 0, turn: 0, turretYaw: 0, gunPitch: 0, fire: false };

function quietWorld(seed = 5) {
  const w = createWorld(seed);
  w.nextSpawnTick = 1e9;
  w.nextSuperTick = 1e9;
  w.nextMissileTick = 1e9;
  w.nextBomberVolleyTick = 1e9;
  w.nextSuperVolleyTick = 1e9;
  w.nextBomberTick = 1e9;
  w.nextStormTick = 1e9;
  w.nextMeteorTick = 1e9;
  return w;
}

function missile(overrides: Partial<Missile> = {}): Missile {
  return {
    id: 900,
    pos: [0, 12, 40],
    dir: [0, 0, -1],
    speed: 16,
    age: 0,
    maxAge: MISSILE_MAX_TICKS,
    alive: true,
    targetKind: 'tank',
    targetId: 0,
    mode: 'cruise',
    acquireRange: 80,
    scale: 1,
    tracking: true,
    turnRate: 0.45,
    interceptTick: null,
    interceptorId: null,
    lastDefenseTick: -9999,
    ...overrides,
  };
}

function bomber(overrides: Partial<Bomber> = {}): Bomber {
  return {
    id: 800,
    pos: [0, 15, 0],
    dir: [0, 0, 1],
    speed: 8,
    hp: 3,
    alive: true,
    nextBomb: 1e9,
    targetId: 0,
    ...overrides,
  };
}

describe('missile targeting + lifetime', () => {
  it('starts in horizontal cruise mode instead of diving immediately', () => {
    const w = quietWorld();
    spawnMissile(w);
    const m = w.missiles[0];
    const t = w.tanks[0];
    const want = [t.x - m.pos[0], t.z - m.pos[2]];
    const len = Math.hypot(...want);
    const dot = m.dir[0] * want[0] / len + m.dir[2] * want[1] / len;
    expect(m.mode).toBe('cruise');
    expect(m.dir[1]).toBeCloseTo(0);
    expect(dot).toBeCloseTo(1);
  });

  it('stays high until acquisition, then enters attack mode and descends', () => {
    const w = quietWorld();
    w.missiles.push(missile({ pos: [0, 20, 120], speed: 16, tracking: false, turnRate: 0.25 }));
    stepWorld(w, [N]);
    expect(w.missiles[0].mode).toBe('cruise');
    expect(w.missiles[0].pos[1]).toBeCloseTo(20);
    expect(w.missiles[0].dir[1]).toBeCloseTo(0);
    w.missiles[0].pos = [0, 20, 70];
    stepWorld(w, [N]);
    expect(w.missiles[0].mode).toBe('attack');
    expect(w.missiles[0].dir[1]).toBeLessThan(0);
  });

  it('weights supertanks and the bomber above ordinary tanks', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    const light = createEnemyTank(1, 'slow', 30, 0, 0);
    const superTank = createEnemyTank(2, 'super', -30, 0, 0);
    light.spawnTick = -1000;
    superTank.spawnTick = -1000;
    w.tanks.push(light, superTank);
    w.brains.set(1, createBrain('slow'));
    w.brains.set(2, createBrain('super'));
    w.bomber = bomber();
    const targets = missileTargets(w);
    const lightWeight = targets.find((t) => t.id === 1)!.weight;
    expect(targets.find((t) => t.id === 2)!.weight).toBeGreaterThan(lightWeight * 3);
    expect(targets.find((t) => t.kind === 'bomber')!.weight).toBeGreaterThan(lightWeight * 3);
  });

  it('actually selects special targets more often than light tanks', () => {
    let light = 0;
    let superTank = 0;
    let plane = 0;
    for (let seed = 0; seed < 60; seed++) {
      const w = quietWorld(seed);
      w.tanks[0].alive = false;
      const l = createEnemyTank(1, 'slow', 30, 0, 0);
      const s = createEnemyTank(2, 'super', -30, 0, 0);
      l.spawnTick = -1000;
      s.spawnTick = -1000;
      w.tanks.push(l, s);
      w.brains.set(1, createBrain('slow'));
      w.brains.set(2, createBrain('super'));
      w.bomber = bomber();
      spawnMissile(w);
      if (w.missiles[0].targetId === 1) light++;
      else if (w.missiles[0].targetId === 2) superTank++;
      else plane++;
    }
    expect(superTank).toBeGreaterThan(light);
    expect(plane).toBeGreaterThan(light);
  });

  it('can target the bomber when no living tank remains', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    spawnMissile(w);
    expect(w.missiles[0].targetKind).toBe('bomber');
    expect(w.missiles[0].targetId).toBe(800);
  });

  it('reaches a far-side target instead of expiring at the old 20 s cutoff', () => {
    const w = quietWorld();
    w.tanks[0].z = -190;
    w.missiles.push(missile({ pos: [0, 12, 205], speed: 14, maxAge: MISSILE_MAX_TICKS }));
    let impact = false;
    for (let i = 0; i < MISSILE_MAX_TICKS && w.missiles.length; i++) {
      stepWorld(w, [N]);
      impact ||= w.events.some((e) => e.kind === 'explosion' && e.source === 'missile');
    }
    expect(impact).toBe(true);
    expect(w.missiles).toHaveLength(0);
  });

  it('uses swept 3-D collision above the old 3 m cutoff', () => {
    const w = quietWorld();
    w.missiles.push(missile({
      pos: [0, 3.4, 0.5],
      dir: [0, -0.2, -1],
      age: 1300,
      maxAge: 2000,
    }));
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'explosion' && e.source === 'missile')).toBe(true);
  });

  it('gives distant targets more than the minimum lifetime', () => {
    const w = quietWorld(99);
    w.tanks[0].x = -190;
    w.tanks[0].z = -190;
    let maxAge = MISSILE_MIN_TICKS;
    for (let i = 0; i < 20; i++) {
      const probe = quietWorld(100 + i);
      probe.tanks[0].x = -190;
      probe.tanks[0].z = -190;
      spawnMissile(probe);
      maxAge = Math.max(maxAge, probe.missiles[0].maxAge);
    }
    expect(maxAge).toBeGreaterThan(MISSILE_MIN_TICKS);
    expect(w.missiles).toHaveLength(0);
  });
});

describe('missile point defense', () => {
  it('self-heals an unscheduled manually introduced bomber', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    for (let i = 0; i < 361; i++) stepWorld(w, [N]);
    expect(w.missiles.some((m) => m.targetKind === 'bomber' && m.scale < 1)).toBe(true);
  });

  it('naturally schedules a prompt volley during a director-spawned bomber run', () => {
    const w = quietWorld();
    w.nextBomberTick = 1;
    w.structures = [];
    let spawn = -1;
    let volley = -1;
    let defense = -1;
    for (let i = 0; i < 1100; i++) {
      const a = i / 90;
      w.tanks[0].x = Math.sin(a) * 55;
      w.tanks[0].z = Math.cos(a) * 55;
      w.tanks[0].heading = a + Math.PI / 2;
      w.tanks[0].speed = 0;
      stepWorld(w, [N]);
      if (w.bomber && spawn < 0) spawn = w.tick;
      if (volley < 0 && w.events.some((e) => e.kind === 'defenseVolley' && e.defenderId === w.bomber?.id)) {
        volley = w.tick;
      }
      if (defense < 0 && w.events.some((e) => e.kind === 'defenseFire' && e.owner === w.bomber?.id)) {
        defense = w.tick;
      }
      if (defense >= 0) break;
    }
    expect(spawn).toBeGreaterThan(0);
    expect(volley).toBeGreaterThan(spawn);
    expect(volley - spawn).toBeLessThanOrEqual(361);
    expect(defense).toBeGreaterThan(volley);
    expect(defense - volley).toBeLessThan(600);
  });

  it('naturally schedules supertank volleys and point defense without a bomber', () => {
    const w = quietWorld();
    w.nextSuperTick = 1;
    let superId = -1;
    let defense = -1;
    for (let i = 0; i < 1400; i++) {
      stepWorld(w, [N]);
      if (superId < 0) superId = w.tanks.find((t) => w.brains.get(t.id)?.kind === 'super')?.id ?? -1;
      if (defense < 0 && w.events.some((e) => e.kind === 'defenseFire' && e.owner === superId)) {
        defense = w.tick;
      }
      if (defense >= 0) break;
    }
    expect(superId).toBeGreaterThan(0);
    expect(defense).toBeGreaterThan(superId);
  });

  it('keeps bomber and supertank volley schedules independent', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    const superTank = createEnemyTank(1, 'super', 0, 0, 0);
    superTank.spawnTick = -1000;
    w.tanks.push(superTank);
    w.brains.set(1, createBrain('super'));
    w.bomber = bomber();
    w.nextBomberVolleyTick = 1;
    w.nextSuperVolleyTick = 1;
    stepWorld(w, [N]);
    expect(w.missiles.filter((m) => m.targetKind === 'bomber').length).toBeGreaterThanOrEqual(3);
    expect(w.missiles.filter((m) => m.targetId === 1).length).toBeGreaterThanOrEqual(3);
  });

  it('launches 3-5 small fast missiles per bomber defense volley', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    w.nextBomberVolleyTick = 1;
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'defenseVolley' && e.defenderId === 800)).toBe(true);
    expect(w.missiles.length).toBeGreaterThanOrEqual(3);
    expect(w.missiles.length).toBeLessThanOrEqual(5);
    for (const m of w.missiles) {
      expect(Math.hypot(m.pos[0] - w.bomber!.pos[0], m.pos[2] - w.bomber!.pos[2])).toBeGreaterThan(70);
      expect(Math.hypot(m.pos[0] - w.bomber!.pos[0], m.pos[2] - w.bomber!.pos[2])).toBeLessThan(180);
      expect(m.targetKind).toBe('bomber');
      expect(m.targetId).toBe(800);
      expect(m.scale).toBeLessThan(1);
      expect(m.speed).toBeGreaterThanOrEqual(24);
      expect(m.mode).toBe('cruise');
    }
  });

  it('launches a similar smaller volley against the supertank', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    const superTank = createEnemyTank(1, 'super', 0, 0, 0);
    superTank.spawnTick = -1000;
    w.tanks.push(superTank);
    w.brains.set(1, createBrain('super'));
    w.nextSuperVolleyTick = 1;
    stepWorld(w, [N]);
    expect(w.missiles.length).toBeGreaterThanOrEqual(3);
    expect(w.missiles.length).toBeLessThanOrEqual(4);
    for (const m of w.missiles) {
      expect(m.targetId).toBe(1);
      expect(m.scale).toBeLessThan(1);
      expect(m.speed).toBeGreaterThanOrEqual(24);
    }
  });

  it('bomber emits bursts and guarantees an intercept', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    w.missiles.push(missile({
      id: 901,
      pos: [0, 15, 20],
      targetKind: 'bomber',
      targetId: 800,
    }));
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'defenseFire' && e.owner === 800)).toBe(true);
    let intercepted = false;
    for (let i = 0; i < 35 && w.missiles.length; i++) {
      stepWorld(w, [N]);
      intercepted ||= w.events.some((e) => e.kind === 'kill' && e.what === 'missile' && e.by === 800);
    }
    expect(intercepted).toBe(true);
    expect(w.missiles).toHaveLength(0);
  });

  it('bomber still guarantees an intercept against small fast missiles', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    w.missiles.push(missile({
      id: 901,
      pos: [0, 18, 28],
      speed: 28,
      scale: 0.62,
      targetKind: 'bomber',
      targetId: 800,
    }));
    let intercepted = false;
    for (let i = 0; i < 25 && w.missiles.length; i++) {
      stepWorld(w, [N]);
      intercepted ||= w.events.some((e) => e.kind === 'kill' && e.what === 'missile' && e.by === 800);
    }
    expect(intercepted).toBe(true);
    expect(w.missiles).toHaveLength(0);
  });

  it('supertank emits bursts and intercepts a close targeted missile', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    const superTank = createEnemyTank(1, 'super', 0, 0, 0);
    superTank.spawnTick = -1000;
    w.tanks.push(superTank);
    w.brains.set(1, createBrain('super'));
    w.missiles.push(missile({
      id: 901,
      pos: [0, 2, 16],
      dir: [0, -0.05, -1],
      targetId: 1,
    }));
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'defenseFire' && e.owner === 1)).toBe(true);
    let intercepted = false;
    for (let i = 0; i < 40 && w.missiles.length; i++) {
      stepWorld(w, [N]);
      intercepted ||= w.events.some((e) => e.kind === 'kill' && e.what === 'missile' && e.by === 1);
    }
    expect(intercepted).toBe(true);
    expect(w.missiles).toHaveLength(0);
  });

  it('does not fire point defense at distant missiles', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    w.missiles.push(missile({
      id: 901,
      pos: [0, 15, 100],
      targetKind: 'bomber',
      targetId: 800,
    }));
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'defenseFire')).toBe(false);
    expect(w.missiles[0].interceptTick).toBeNull();
  });

  it('defense events do not create radar-revealing fire events', () => {
    const w = quietWorld();
    w.tanks[0].alive = false;
    w.bomber = bomber();
    w.missiles.push(missile({ id: 901, pos: [0, 15, 20], targetKind: 'bomber', targetId: 800 }));
    stepWorld(w, [N]);
    expect(w.events.some((e) => e.kind === 'defenseFire')).toBe(true);
    expect(w.events.some((e) => e.kind === 'fire')).toBe(false);
  });

  it('remains deterministic with an active defense intercept', () => {
    const run = () => {
      const w = quietWorld(77);
      w.tanks[0].alive = false;
      w.bomber = bomber();
      w.missiles.push(missile({ id: 901, pos: [0, 15, 20], targetKind: 'bomber', targetId: 800 }));
      for (let i = 0; i < 40; i++) stepWorld(w, [N]);
      return hashWorld(w);
    };
    expect(run()).toBe(run());
  });
});
