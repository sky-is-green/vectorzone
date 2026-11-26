# Tank model implementation — 2026-11-26

User selected **Light A2** and **Super C2** from the exact-grid concept sheets.

## Implemented

- Player and light-tank hull/turret now use Light A2: 11×3×10 hull, 5×2×6
  turret, open under-hull, separate track pods, raised central deck, wedge nose.
- Supertank uses Super C2: 13×3×14 hull, 6×2×9 turret, long siege silhouette.
- Existing block types, penetration, structural integrity, turret pivot, camera
  mount, muzzle, collision radius, and geometry rebuilds adapt automatically.
- Turn-rate divisor retuned from 24 to 72 tread blocks so the new larger track
  pods do not make tanks spin excessively.

## Tests

104 passing. Updated old hard-coded grid coordinates (ray z=5, deck cell x=5),
fixed awareness test helper to create the requested AI kind, and added explicit
Light A2 / Super C2 dimension assertions.

## Browser verification

Light A2 and Super C2 captured externally plus Light A2 periscope. Correct grid
sizes reported by the live sim, zero console errors, ~50–54 draw calls,
150.6 KB gz.