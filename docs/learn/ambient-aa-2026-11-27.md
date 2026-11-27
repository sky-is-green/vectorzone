# Ambient distant AA fire — 2026-11-27

## Goal

Maintain a visible distant battlefield throughout the match without touching
gameplay: AA tracers cross the far horizon and flak bursts remain readable from
the normal ground camera.

## Why the first version disappeared

The initial field was sparse ambience: 2–4 shells every 5–11 s, short 2.4 m
streaks, and random full-ring bearings. Most action was behind the player or too
small to confirm.

## Continuous implementation

- `AmbientAa` remains a small client-only state machine with injectable RNG.
- Volleys of 2–3 shells spawn every 0.7–1.8 s at 230–300 m horizontal radius and
  42–80 m altitude.
- New volleys are biased into the current hull+turret view heading.
- Tangential trajectories keep fire outside the playable space.
- Shells emit tracer events, then a distant explosion event at end of life.
- Rendering reuses the existing 1,024-segment particle pool: 7 m tracer streaks,
  a longer flash, a 16-segment burst ring, and 24 radial sparks.
- No sim entities, damage, radar reveals, camera shake, materials, or meshes are
  added.

## Point-defense rendering alignment

Defense shots use the exact tank-shell tracer path and color, with a shorter
1.3 m streak instead of 2.5 m. Muzzle-flare particles remain removed.

## Verification

- Seven `AmbientAa` tests: initial delay, volley size/distance, explosion cleanup,
  recurrence, view bias, sustained 60 s activity, deterministic RNG.
- Browser normal-camera probe: no debug camera, 38/60 sampled frames had active
  tracers, up to three shells active, and the screenshot showed multiple orange
  flak bursts across the horizon. Zero console errors.
- Full gate: 171 tests; 157.8 KB gzipped.
