# Persistent lava hazard markers — 2026-11-27

## Problem

The incoming volcanic bomb used a short-lived red particle ring. At impact the
telegraph was removed and replaced by a separate lava-pool ring that was orange,
thin, and visually subtle, so the hazard marker appeared to disappear.

## Change

- Reused the existing pooled lava ring mesh as the persistent hazard marker.
- The marker is a single ring at the exact volcanic impact radius
  (`VOLCANO_BLAST_RADIUS`), independent of the lava damage radius.
- Changed it to flashing red (`#ff4433`), increased width to 2.2 px, and made
  opacity pulse from 0.4 to 1.0.
- The mesh remains visible for each pool's full `untilTick` lifetime; no
  per-frame ring particles or extra draw calls were added.
- Added a regression test proving a lava pool survives `LAVA_TICKS - 1` steps
  and is removed on the final tick.
- Browser: with no telegraphs present, the red pool ring remained visible and
  pulsed between roughly 0.39 and 0.89 opacity before the minimum was raised to
  0.4 for readability. Zero console errors.
- Radius probe: damage radius 6 m, marker radius 7 m, and exactly 32 rendered
  segments (one ring) confirmed.
- Full gate: 180 tests; 158.7 KB gzipped.
- Live deployment `e02d255` built successfully; cache-busted URL served
  `index-DZMtSLhI.js` with one pool, zero telegraphs, and the red marker active.
  Zero console errors.
