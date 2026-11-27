/** Ambient distant anti-aircraft fire. Pure timing/trajectory state; rendering
 * is fed into the existing particle pool, with no gameplay or radar effects. */

export type AaVec = [number, number, number];

export type AaEvent =
  | { kind: 'tracer'; pos: AaVec; dir: AaVec }
  | { kind: 'explosion'; pos: AaVec };

interface AaShell {
  pos: AaVec;
  dir: AaVec;
  speed: number;
  age: number;
  life: number;
}

const TAU = Math.PI * 2;
const norm = (v: AaVec): AaVec => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};

export class AmbientAa {
  private shells: AaShell[] = [];
  private nextVolley: number;
  private recent: AaEvent[] = [];

  constructor(rng: () => number = Math.random) {
    this.nextVolley = 1.5 + rng() * 2.5;
  }

  get activeCount(): number {
    return this.shells.length;
  }

  get recentEvents(): readonly AaEvent[] {
    return this.recent;
  }

  /** Useful for deterministic tests and the browser debug hook. */
  forceVolley(rng: () => number = Math.random): void {
    this.spawnVolley(rng);
  }

  update(dt: number, rng: () => number = Math.random): AaEvent[] {
    this.nextVolley -= dt;
    const events: AaEvent[] = [];
    const live: AaShell[] = [];
    for (const shell of this.shells) {
      shell.age += dt;
      shell.pos[0] += shell.dir[0] * shell.speed * dt;
      shell.pos[1] += shell.dir[1] * shell.speed * dt;
      shell.pos[2] += shell.dir[2] * shell.speed * dt;
      events.push({ kind: 'tracer', pos: [...shell.pos], dir: [...shell.dir] });
      if (shell.age >= shell.life) events.push({ kind: 'explosion', pos: [...shell.pos] });
      else live.push(shell);
    }
    this.shells = live;
    if (this.nextVolley <= 0) this.spawnVolley(rng);
    this.recent = events;
    return events;
  }

  private spawnVolley(rng: () => number): void {
    const count = 2 + Math.floor(rng() * 3);
    const bearing = rng() * TAU;
    for (let i = 0; i < count; i++) {
      const angle = bearing + (rng() - 0.5) * 0.35;
      const radius = 280 + rng() * 80;
      const pos: AaVec = [
        Math.sin(angle) * radius,
        32 + rng() * 38,
        Math.cos(angle) * radius,
      ];
      // Tangential distant target: trajectories cross the far horizon rather
      // than cutting through the playable arena.
      const targetAngle = angle + (rng() - 0.5) * 1.1;
      const targetRadius = 260 + rng() * 100;
      const target: AaVec = [
        Math.sin(targetAngle) * targetRadius,
        38 + rng() * 42,
        Math.cos(targetAngle) * targetRadius,
      ];
      const dir = norm([target[0] - pos[0], target[1] - pos[1], target[2] - pos[2]]);
      const speed = 90 + rng() * 60;
      const distance = Math.hypot(target[0] - pos[0], target[1] - pos[1], target[2] - pos[2]);
      this.shells.push({
        pos,
        dir,
        speed,
        age: 0,
        life: (distance / speed) * (0.5 + rng() * 0.25),
      });
    }
    this.nextVolley = 5 + rng() * 6;
  }
}
