# Persistent lava hazard markers — 2026-11-27

## Problem

The incoming volcanic bomb used a short-lived red particle ring. At impact the
telegraph was removed and replaced by a separate lava-pool ring that was orange,
thin, and visually subtle, so the hazard marker appeared to disappear.

## Change

- Reused the existing pooled lava ring mesh as the persistent hazard marker.
- Changed it to flashing red (`#ff4433`), increased width to 2.2 px, and made
  opacity pulse from 0.4 to 1.0.
- The mesh remains visible for each pool's full `untilTick` lifetime; no
  per-frame ring particles or extra draw calls were added.
- Added a regression test proving a lava pool survives `LAVA_TICKS - 1` steps
  and is removed on the final tick.
- Browser: with no telegraphs present, the red pool ring remained visible and
  pulsed between roughly 0.39 and 0.89 opacity before the minimum was raised to
  0.4 for readability. Zero console errors.
- Full gate: 180 tests; 158.7 KB gzipped.
