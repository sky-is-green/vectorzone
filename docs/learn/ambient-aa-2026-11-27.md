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
- Volleys of 2–3 shells launch from ground level every 0.7–1.8 s at 230–300 m
  horizontal radius, fly upward for 0.9–1.2 s, then explode in the sky.
- New volleys are biased into the current hull+turret view heading.
- Upward trajectories keep fire outside the playable space.
- Shells emit tracer events, then a distant explosion event at end of life.
- Rendering reuses the existing 1,024-segment particle pool: 7 m tracer streaks,
  a longer flash, and 24 radial sparks. The circular burst ring was removed
  because it read like a ground impact.
- No sim entities, damage, radar reveals, camera shake, materials, or meshes are
  added.

## Point-defense rendering alignment

Defense shots use the exact tank-shell tracer path and color, with a shorter
1.3 m streak instead of 2.5 m. Muzzle-flare particles remain removed.

## Verification

- Seven `AmbientAa` tests: initial delay, ground launch/upward direction, volley
  size/distance, ~1 s explosion timing, recurrence, view bias, sustained 60 s
  activity, deterministic RNG.
- Browser normal-camera probe: no debug camera; forced shells reported upward
  direction and rose from ground level to about 6.7 m within 50 ms. A skyburst
  at roughly `[-70, 96, 233]` rendered as an orange flash/spark cluster with no
  circular ring. Zero console errors.
- Full gate: 171 tests; 157.7 KB gzipped.
