/**
 * Sky events (ENVIRONMENTS §3.3): ion storms blind radar/AI; meteor showers
 * are mostly spectacle with rare real meteorites that deposit rock cover.
 * Per-map profiles; at most one major event at a time. M8.
 */
import type { World } from './world';

export const STORM_TICKS = 420; // 7 s
export const METEOR_PERIOD = 9000; // ~2.5 min between real meteorites

export function stepSky(w: World): void {
  const sky = w.sky;
  if (sky.storm && w.tick >= w.nextStormTick && w.stormUntil <= w.tick) {
    w.stormUntil = w.tick + STORM_TICKS;
    w.nextStormTick = w.tick + 24000 + Math.floor(w.rng.next() * 12000);
    w.events.push({ kind: 'ionStorm' });
  }
  if (sky.meteors && w.tick >= w.nextMeteorTick) {
    const x = (w.rng.next() - 0.5) * 300;
    const z = (w.rng.next() - 0.5) * 300;
    w.telegraphs.push({ x, z, impactTick: w.tick + 90, radius: 2, kind: 'meteor' });
    w.events.push({ kind: 'meteorInbound', pos: [x, 0, z] });
    w.nextMeteorTick = w.tick + METEOR_PERIOD + Math.floor(w.rng.next() * 3000);
  }
}