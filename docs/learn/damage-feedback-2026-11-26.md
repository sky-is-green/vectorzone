# Damage retaliation & bearing — 2026-11-26

## AI retaliation

- Any damaging hit sets `World.threats[targetId] = {tick, from: attackerId}`.
- Target selection prioritizes that attacker for 360 ticks (6 s), ahead of
  scan/ping contacts and the director player-tracker preference.
- Dead attacker or expired threat falls back to the normal
  patrol/investigate/engage loop.

## Player damage direction

- Existing screen-edge hit flash retained.
- New radar-rim red arrow shows the bearing to the impact/attacker for 2.5 s.
- Environmental explosions use the blast direction without a fake attacker.
- `radarBearing()` is pure and unit-tested against own hull heading.

## Verification

128 tests: retaliation priority/expiry, shell damage sets threat, bearing math.
Browser: AI target switched to attacker; nearby blast produced right-rim arrow.
152.4 KB gz, zero console errors.