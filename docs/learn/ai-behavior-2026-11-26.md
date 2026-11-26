# AI behavior & self-destruct — 2026-11-26

## Fringe wobble fixes

- Target stickiness: current contact retained for at least 180 ticks unless the
  director tracker prefers the player or the contact expires.
- Approach/engage hysteresis: enter below high−10, exit above high+15; too-close
  engage transitions to a deliberate back-off reposition point.
- Aim point eases 35% toward new contact data instead of snapping.
- Steering dead zones: tiny yaw errors produce no turn input; throttle varies
  by alignment/mode instead of binary switching.

## Hull aim

- Default aimY 0.45–0.57 m (lower hull), with downward pitch from the 1.2 m muzzle.
- Deliberate turret aimY 1.2 m: 10% light / 15% super, halved vs player.
- Aim choice stays stable for eight shots.

## Self-destruct

- All gun blocks gone → `selfDestructTick = tick + 600`.
- HUD alert/countdown for player; AI charges target and cannot fire.
- Expiry queues a 4.5 m / 6-damage blast, shatters hull/turret into chunks, kills
  the tank, and applies normal life/respawn rules to the player.

## Verification

111 tests: hull aim/pitch, rare turret aim, hysteresis, target stickiness,
countdown timing, splash damage, AI charge. Browser: armed countdown, scheduled
death/debris, zero console errors. 151.1 KB gz.