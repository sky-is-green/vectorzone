# Missile cruise mode, view-aligned radar & defense volleys — 2026-11-27

## Root causes behind the follow-up report

1. **Radar/camera reference mismatch** — the scope rotated with hull heading,
   while the player camera rotates with `heading + turretYaw`. Looking directly
   at an object did not put it ahead on the scope. This affected the scanner,
   tanks, bomber, and missiles.
2. **Immediate dive / non-tracking locks** — missiles initially aimed at the
   target's 3-D position and 40% had no terminal guidance. A locked missile
   could descend early or fly over the player.
3. **Sparse defense spectacle** — normal missile cadence was too low to make
   bomber/supertank point defense appear during a run.

## Changes

- Radar is now view-aligned. The hull arrow rotates relative to the camera;
  all object positions and heading markers share the same projection.
- Missiles have explicit `cruise` and `attack` modes. Cruise stays at 18–24 m
  with gentle horizontal steering; attack begins inside 70–80 m horizontal
  range. All missiles acquire; turn-rate variation remains.
- Normal player-pressure missiles keep their own three-active cap.
- Bombers receive 3–5 small/fast defense missiles every 9–14 s; supertanks
  receive 3–4 every 12–18 s. These do not consume normal missile slots.
- Small/fast missiles retain guaranteed point-defense intercepts with earlier
  acquisition and shorter intercept delays.

## Verification

159 tests: view-aligned scanner math, horizontal cruise, attack transition even
for lazy guidance, far-target lifetime, 3-D collision, volley size/speed/target,
normal and small-fast point defense, radar-event isolation, determinism.

Browser: with hull 0 and turret +π/2, the scanner projected to camera NDC
x = -0.006 and radar y = -10.5 (ahead); 33 blue HUD pixels were present at the
expected scope position. A locked missile stayed at y = 20 in cruise, then
entered attack with negative vertical direction inside range. A four-missile
bomber volley was visible with trails and all four were intercepted while the
bomber survived. Zero console errors.

Full gate: 156.9 KB gzipped.

## Defense-volley reliability follow-up

The original scheduler worked in headless and deployed-bundle probes, but it
used one shared timer initialized only by director spawns. A manually restored
bomber could remain unscheduled, and arena-edge launches delayed the first
visible defense burst by 17 seconds in the reproduction.

Changes:

- Independent, self-healing bomber and supertank timers.
- First volley after 6 s for the bomber, 8 s for the supertank.
- Stand-off launches 90–140 m from the defender instead of the arena edge.
- Explicit `defenseVolley` event for deterministic observation.
- Natural-spawn regression tests now cover bomber and supertank schedules,
  prompt point defense, manual-bomber recovery, and independent timers.

Reliability gate: 163 tests; full build 157.0 KB gzipped.

Browser natural-spawn probes (no forced timers): bomber volley delay 360 ticks,
first defense 109 ticks after launch, four missiles, minimum stand-off 89.8 m;
supertank volley delay 480 ticks, first defense 195 ticks after launch, four
missiles. Zero console errors.
