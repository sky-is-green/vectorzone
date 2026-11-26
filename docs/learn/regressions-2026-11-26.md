# Regression fixes — 2026-11-26

User report: missiles vanished early, radar turret tracking moved the wrong way,
odd connector lines appeared on block structures, enemy blips were green, and
enemy turret orientation was not tracked.

## Root causes (all reproduced before patching)

1. **Missiles vanished** — `age > 600` (10 s) expired a guided missile about
   9 m short of a 150 m target. Player-target trace ended at `[116.2, 1.8,
   68.0]` with the player at `[120, 60]`. Lifetime raised to 1200 ticks (20 s);
   unit + browser probes confirm a guided missile now reaches and detonates on
   a stationary target (`minDist 2.45 m`, `minY 1.16 m`, hit event).
2. **Turret direction** — world `turretYaw > 0` rotates +Z toward +X (right),
   but ArrowLeft mapped to positive yaw, so the gun physically turned right.
   Fixed `turretAxisFromKeys(left,right) = right - left`; gamepad X now follows
   the same world convention. Browser confirms ArrowLeft → command `-1` →
   turret yaw delta `-0.0367 rad`.
3. **Odd block lines** — `fatlines.ts` used three's `LineGeometry`, which
   treats a flat list of independent block edges as one continuous polyline and
   adds connector segments between unrelated edges. Scanner geometry showed
   1,559 segments including 200 diagonals. Replaced with `LineSegmentsGeometry`:
   now 780 segments, **0 diagonals**; regression test asserts this.
4. **Enemy colour** — blips used the phosphate/world colour. Enemy blips are
   now varying red shades (`enemyColor`), supertank brightest red.
5. **Turret orientation untracked** — `Known` stored only hull heading.
   Added `turretYaw` to awareness data and the HUD state, and enemy blips now
   draw a gun-direction tick at `hull heading + turret yaw`.

6. **Minimap turret pointer still looked reversed** — the long red line was a
   cosmetic time-driven radar sweep, unrelated to the turret, so while the gun
   turned left the sweep kept drifting clockwise. Replaced it with a
   **turret-aligned pointer**; both the long line and centre tick now follow
   turret yaw. `radarPointer()` has a sign regression test, and zoomed browser
   captures confirm ArrowLeft → upper-left, ArrowRight → upper-right.
7. **Turret appeared inverted in play** — the *hull* steering input was still
   inverted (`A` → positive yaw → right), dragging the mounted gun right.
   Fixed `A` → `-1`, `D` → `+1` and gamepad stick X to the same world
   convention. Browser confirms `A` → heading `-0.03`, `D` → `+0.03`.

## Verification

101 tests (new: turret sign, enemy colour, fat-line segment integrity,
missile reaches target, awareness turret angle, radar pointer sign). Browser:
zero console errors, scanner 780/0 diagonals, ArrowLeft negative yaw, guided
missile hit, red radar triangles with turret ticks, 52 draw calls, 150.5 KB gz.

Hull steering sign fixed in a following patch: 102 tests, `A` negative / `D`
positive heading confirmed in browser.

Human feel confirmation remains open in F5.