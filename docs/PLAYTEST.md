# VECTORZONE — Human Play-Test Protocol

*Feel is a gate, and only humans can pass it.*

## Why this exists

After M1 (2026-11-25), automated browser probes confirmed every control mechanic
(values, independence, clamps, draw calls, zero errors) — but a human found the
**turret controls "acted strangely"** in actual use. Scripted probes verify
*mechanics*; they cannot verify *feel*. This protocol closes that gap.

## When

After **M1, M3, M5, M7, M8**, and after any change to controls, camera, or combat
tuning. A milestone with an un-run play-test is not fully done (BUILD.md §3).

## Setup

- `npm run dev` → http://localhost:5173
- Controls: **WASD** hull · **←/→** turret yaw · **↑/↓** gun elevation · **space** fire (inert until M3)
- ~10 minutes of free play per session, then the checklist below.
- Record results in `docs/learn/playtest-YYYY-MM-DD.md`: per item **pass / feel-issue / bug**, with quotes from the player. Feel issues get hypotheses, not guessed fixes.

## Checklist

### Controls & feel (from M1)
- [ ] Turret aim direction and speed feel correct (←/→ slew, ↑/↓ elevation).
- [ ] **Hull-turn coupling**: turret yaw is hull-*relative*, so turning the hull drags the aim. Does that feel wrong while driving + aiming? (Candidate fix: world-locked turret that compensates heading.)
- [ ] Whole-turret pitch (the ring tilts with the barrel) — acceptable, or barrel-only pitch needed?
- [ ] Simultaneous keys (W + A + ← + space): any dropped inputs (keyboard ghosting)?
- [ ] Camera: height/offset behind the turret, motion comfort, view obstruction.
- [ ] Tank weight: accel, top speed, turn rate feel right.

### Destruction feel (from M3)
- [ ] Blow-through holes read clearly from both sides.
- [ ] Debris/collapse feel satisfying, not noisy; rubble reads as cover.
- [ ] Chain explosions legible.

### AI & radar feel (from M5)
- [ ] AI feels like a fallible opponent, never an aimbot; misses look believable.
- [ ] Hazard telegraphs (rings, rumble) give enough warning in practice.
- [ ] Radar readable at a glance; 30 m ring and blip decay understood without explanation.
- [ ] Bomber pass: threat lane and information trap both legible.

### Multiplayer feel (from M7)
- [ ] Own tank: no perceptible input lag; remote tanks smooth, no rubber-banding.
- [ ] Join flow (codes / QR) understandable without instructions.

### Overall (M8)
- [ ] A 10-minute session is fun; palette/HUD readable; audio levels comfortable.

## Open feel items (carried across sessions)

| ID | Opened | Milestone | Observation | Hypotheses | Status |
|---|---|---|---|---|---|
| F1 | 2026-11-25 | M1 | Turret controls "acted strangely" in human use (mechanics probes all passed) | **Root cause found by user:** camera was an analytic approximation of the turret, not attached to the gun — look-direction diverged from the barrel axis under combined yaw+pitch, and the eye didn't swing with elevation. Secondary: default XYZ Euler order coupled turret yaw/pitch wrongly. **Fix:** rigid gun mount (camera = turret world transform ∘ fixed local offset) + turret rotation order `YXZ`. Verified: camera/barrel axis dot = 1 at rest, combined yaw+pitch, and after hull turns; eye swings with pitch. **Human re-confirm 2026-11-25: "much better, turret mechanics are complete."** | **CLOSED** |
| F2 | 2026-11-25 | M3 | Destruction feel unverified by human; tuning question: muzzle (1.2 m) overflies low cover (0.6–0.9 m) on flat shots — is aiming down at low structures intuitive? | Play-test: hole readability from both sides, debris/collapse satisfaction, chain legibility, low-cover aiming feel | **open — awaiting M3 session** |
| F3 | 2026-11-25 | M4 | Phosphor look (bloom glow, CRT scanlines/ghosting, palettes) verified numerically only — desktop window was hidden so no screenshots; needs human eyes | View each palette + wireframe + safe mode; confirm glow reads as phosphor, not smear; CRT comfortable | **CLOSED** — user: "looks good" |
| F4 | 2026-11-25 | M5 | 5e/5f visuals (status readout, killfeed, hit flash, fence curtains, scan tower) verified by tests/numeric probes only — window hidden | View fence shimmer + drop, status squares under damage, killfeed/hit flash in play; confirm readability in all palettes | **open — awaiting visible window** |
| F5 | 2026-11-26 | Polish | Four-AI FFA pressure, supertank cadence, airborne missile locks, deadly final-minute volcano, aircraft ease-of-hit, shake timing, and Line2 hierarchy need human feel confirmation | Play a full 10-minute match; confirm pressure is fun not overwhelming, missiles dodgeable, volcano deadly/fair, plane hittable, no distant shake | **open — awaiting human session** |
| F6 | 2026-11-26 | Regressions | Missile lifetime, turret control sign, hull steering sign, LineGeometry connector artefacts, enemy blip colour, turret tracking, and the cosmetic radar sweep were user-reported and code-fixed; needs play confirmation | Verify missiles hit, ArrowLeft/KeyA turn left, no odd block lines, red enemy blips with turret ticks, radar pointer follows gun | **open — awaiting human confirmation** |

## Rule

Feel issues are logged with hypotheses and resolved **after human confirmation**.
The implementing agent does not "fix" feel by guesswork, and does not mark a
feel gate passed on automated evidence alone.