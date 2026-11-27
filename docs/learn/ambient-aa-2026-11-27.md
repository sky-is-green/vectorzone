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
- Volleys of 2–3 shells launch from ground level behind the 620 m mountain ring
  every 0.7–1.8 s, fly upward for 0.9–1.2 s, then explode above the ridge.
- New volleys are biased into the current hull+turret view heading.
- Steep trajectories keep fire outside the playable space.
- Shells emit tracer events, then a distant explosion event at end of life.
- Rendering reuses the existing 1,024-segment particle pool: 7 m tracer streaks,
  short radial flash strokes, and 24 radial sparks. The circular ring and long
  horizontal flash bar were removed.
- No sim entities, damage, radar reveals, camera shake, materials, or meshes are
  added.

## Point-defense rendering alignment

Defense shots use the exact tank-shell tracer path and color, with a shorter
1.3 m streak instead of 2.5 m. Muzzle-flare particles remain removed.

## Verification

- Seven `AmbientAa` tests: initial delay, ground launch/upward direction, volley
  size/distance, ~1 s explosion timing, recurrence, view bias, sustained 60 s
  activity, deterministic RNG.
- Browser normal-camera probe: launches were measured at 752 m radius behind the
  620 m ridge, moving upward. A tracked skyburst at roughly `[61, 80, 720]`
  rendered as a small star/spark cluster above the mountains with no circular
  ring or horizontal bar. Zero console errors.
- Live-bundle probe before this depth fix: current asset had AA active in 61/80
  sampled frames with up to three shells, so the production code was running.
  The stats readout now includes `aa N` to make stale-tab diagnosis explicit.
- Full gate: 171 tests; 157.8 KB gzipped.
