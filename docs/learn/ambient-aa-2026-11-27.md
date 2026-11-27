# Ambient distant AA fire — 2026-11-27

## Goal

Add distant battlefield atmosphere without touching gameplay: AA tracers cross
the far horizon and occasional airbursts are visible from the arena.

## Implementation

- `AmbientAa` is a small client-only state machine with injectable RNG.
- Volleys of 2–4 shells spawn every 5–11 s at 280–360 m horizontal radius and
  32–70 m altitude.
- Tangential trajectories keep fire outside the playable space.
- Shells emit tracer events, then a distant explosion event at end of life.
- Rendering reuses the existing 1,024-segment particle pool: thin tracers, a
  longer flash, a 12-segment burst ring, and 18 radial sparks.
- No sim entities, damage, radar reveals, camera shake, materials, or meshes are
  added.

## Point-defense rendering alignment

Defense shots now use the exact tank-shell tracer path and color, with a shorter
1.3 m streak instead of 2.5 m. Muzzle-flare particles remain removed.

## Verification

- Five `AmbientAa` tests: initial delay, volley size/distance, explosion cleanup,
  recurrence, deterministic RNG.
- Browser: forced distant volley showed multiple horizon tracers; a tracked
  skyburst at roughly `[157, 46, -240]` rendered as a readable orange flash/ring
  with sparks. Zero console errors.
- Full gate: 169 tests; 157.8 KB gzipped.
