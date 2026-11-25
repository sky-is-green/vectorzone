# VECTORZONE — Build Handbook

*The executable spec. An implementing agent builds the project from this document, milestone by milestone, verifying each before advancing. The design docs say **what**; this handbook says **how to proceed and how to check your work**.*

---

## 0. How to use this handbook

**Read order (before writing any code):**

1. `README.md` — positioning
2. `PLAN.md` — master blueprint, especially §4 (rendering), §5 (blocks/damage/AI/radar summaries), §7 (sim architecture), §8 (multiplayer), §14 (locked decisions)
3. `docs/ENVIRONMENTS.md` — the living arena
4. `docs/AI.md` — enemy AI
5. `docs/RADAR.md` — radar & awareness
6. `docs/NEW-ERA.md` — gap resolutions (match rules, HUD, settings), tech scorecard, PixelQR integration
7. This file, fully.

**Rules of the road:**

1. **Locked decisions (`PLAN.md` §14) are law.** If a task seems to require changing one, stop and flag it in your commit message and learning notes — do not silently change it.
2. **Build in milestone order M0 → M8.** Do not start M(n+1) until every acceptance criterion of M(n) passes. Commit at each milestone boundary (sub-gate commits within M5 and M7 are encouraged).
3. **Run the full verification loop (§3) after every milestone.** A milestone with a failing gate is not done. Never tick the checklist with a red gate.
4. **Ambiguity protocol:** if the docs don't specify something, choose the simplest option consistent with the invariants (§1), record the choice in `docs/learn/mN.md`, and flag it in the commit message. Never invent new mechanics, modes, or features that aren't in the docs.
5. **Zero asset files.** No textures, models, fonts, or audio files. Everything procedural. (SVG favicon is the only exception.)
6. **No new runtime dependencies** without checking the weight budget (§1) and recording the justification.
7. Write `docs/learn/mN.md` per milestone: concepts used, decisions made, deviations flagged. These are a deliverable, not optional.
8. **Feel is human-verified.** Automated probes gate mechanics; `docs/PLAYTEST.md` gates feel. Never mark a feel gate passed on automated evidence alone.

**Progress checklist** (tick as gates pass):

- [x] M0 — Hello, vector
- [x] M1 — Block tank
- [x] M2 — The arena
- [x] M3 — Fire & destroy
- [ ] M4 — Phosphor
- [ ] M5 — The enemy
- [ ] M6 — Sound
- [ ] M7 — Multiplayer
- [ ] M8 — Polish & ship

---

## 1. Invariants (checked continuously, not just at milestones)

| # | Invariant | How it's checked |
|---|---|---|
| I1 | `packages/sim` is pure TypeScript: no three.js, no DOM, no Node built-ins. It runs identically in browser and Node. | `npm run check:sim` — grep gate over sim imports |
| I2 | Fixed 60 Hz sim tick with accumulator; render interpolates between states. Input enters only as `TankCommand`. | code review + determinism test |
| I3 | All randomness is seeded and lives in the sim. | code review; determinism test |
| I4 | Zero asset files (no png/jpg/mp3/glb/woff…). | `npm run check:assets` — file-extension gate |
| I5 | Initial client bundle **< 300 KB gzipped**. | `npm run size` after `npm run build` |
| I6 | Draw calls **< 100** in the heaviest scene. | dev stats overlay + `renderer.info.render.calls` assertion |
| I7 | All gameplay truth is host/sim-side; clients render and send commands only. | code review |
| I8 | Palette law: green world (default), **orange/red reserved for hazards**, red HUD band. Palette modes recolor everything. | visual check |
| I9 | Every damaging hazard telegraphs ≥ 1.5 s (ground ring + audio). | visual check + timing tests |
| I10 | Merged geometry per entity (2 draw calls: faces + edges); rebuild only on damage, never per frame. | draw-call gate + rebuild counter assertion |

Gate scripts are created in M0 and extended as needed. Reference implementations:

```jsonc
// root package.json scripts (extend over time)
{
  "dev": "npm run dev -w packages/client",
  "build": "npm run build -w packages/client",
  "test": "vitest run",
  "check:sim": "node scripts/check-sim.mjs",
  "check:assets": "node scripts/check-assets.mjs",
  "size": "node scripts/size.mjs",
  "check": "npm run check:sim && npm run check:assets && npm test && npm run build && npm run size"
}
```

- `check-sim.mjs`: fail if any file in `packages/sim/src` imports `three`, references `document`/`window`, or imports Node built-ins (`node:*`, `fs`, `path`, …).
- `check-assets.mjs`: fail if tracked files include binary asset extensions (png/jpg/jpeg/gif/mp3/wav/ogg/glb/gltf/woff/ttf…).
- `size.mjs`: gzip each file in `packages/client/dist/assets` with `node:zlib`, sum, print, fail if > 300 KB.

---

## 2. Scaffold (done in M0)

**Prerequisites:** Node ≥ 20, npm, a modern browser. Repo is an npm-workspaces monorepo:

```
vectorzone/
├── package.json              # workspaces: packages/*
├── tsconfig.base.json        # strict: true
├── scripts/                  # gate scripts (§1)
├── packages/
│   ├── sim/                  # pure TS game logic + vitest tests
│   ├── client/               # Vite + TS + three.js
│   └── server/               # Node + ws (empty until M7)
└── docs/learn/               # milestone learning notes
```

- `packages/client`: Vite vanilla-ts template + `three`. Dev stats overlay (FPS + draw calls) from day one.
- `packages/sim`: plain TS, vitest. Exports world/state/types; **no framework**.
- `packages/server`: placeholder until M7 (`ws`, run with `tsx`).
- **PixelQR (M7 only):** vendor `core.js`, `reader.js`, `lib/qrcode.js` from https://github.com/sky-is-green/pixelqr into `packages/client/src/vendor/pixelqr/`. **Do not vendor `lib/jsQR.js`** (decode verification only; the game generates). See `docs/NEW-ERA.md` Part B2.

---

## 3. The verification loop (run after EVERY milestone)

1. `npm test` — all sim unit tests + the determinism test (same seed + command stream → identical state hash).
2. `npm run check:sim` and `npm run check:assets` — purity gates.
3. `npm run build && npm run size` — bundle gate (< 300 KB gz).
4. `npm run dev` + **browser smoke**: page loads, **zero console errors**, the milestone's acceptance visuals are present, window resize works, controls respond. If browser automation is available, screenshot and inspect; otherwise verify interactively and record what you saw in the learning notes.
5. **Draw-call gate**: load the milestone's heaviest scene; stats overlay must show < 100 calls.
6. **FPS sanity**: no sustained drops in the heaviest scene (stats overlay).
7. **Human play-test (feel gate)** at M1, M3, M5, M7, M8 and after any controls/camera/tuning change: run `docs/PLAYTEST.md` with a human; record results in `docs/learn/playtest-<date>.md`. Automated probes verify mechanics, never feel. Feel issues are logged with hypotheses and resolved after human confirmation — not guessed fixes.
8. Write `docs/learn/mN.md` (concepts, decisions, deviations).
9. Commit: `M<n>: <imperative summary>`; tick the checklist in this file.

**Any red gate → fix before proceeding.**

---

## 4. Milestones

Each milestone lists: **Read** (design sections), **Build**, **Accept** (objective criteria — all must pass), **Verify** (how to check), **Pitfalls**.

### M0 — Hello, vector

**Read:** PLAN §3, §4.1, §10.
**Build:** the scaffold (§2); a green wireframe cube spinning in a black void; resize handling; dev stats overlay (FPS + draw calls); gate scripts (§1); vitest harness with one trivial sim test; determinism-test skeleton.
**Accept:**
- A1: dev server shows a rotating green wireframe cube on black.
- A2: resizing the window keeps correct aspect, no stretching.
- A3: zero console errors/warnings from our code.
- A4: `npm run check` passes end-to-end.
- A5: stats overlay shows FPS and draw calls.
**Verify:** browser smoke + `npm run check`.
**Pitfalls:** three.js color management (`renderer.outputColorSpace`); don't add lights — the whole game is unlit materials.
**Learn notes:** scene/camera/renderer; geometry vs material vs mesh; the render loop; resize.

### M1 — Block tank

**Read:** PLAN §4.2, §5.1, §7.
**Build:**
- sim: `BlockGrid` (typed cells), canonical player-tank layout data, `TankCommand {throttle, turn, turretYaw, gunPitch, fire}`, fixed-tick kinematics (hull speed/yaw, independent turret slew + elevation limits), arena-bounds collision.
- client: merged-geometry builder — one face geometry (black, depth-writing) + one edge geometry (glowing green) per entity, **interior faces/edges culled**; rebuild only when the grid changes. Turret rendered as rotating sub-grid. Camera rides the turret. Input: WASD / arrows / space (space wired but inert until M3).
**Accept:**
- A1: tank visibly reads as an assembly of blocks in the solid-vector look.
- A2: WASD drives the hull; arrows rotate/aim the turret independently; camera follows the turret.
- A3: the tank costs exactly **4 draw calls** (2 per rigid body: hull + turret).
- A4: unit tests pass for grid ops, movement math, command application.
- A5: determinism test passes (same seed + commands → same state hash).
- A6: `check:sim` green.
**Verify:** tests + drive it around + stats overlay.
**Pitfalls:** use `BufferGeometryUtils.mergeGeometries`; `EdgesGeometry` threshold angle; never rebuild per frame; turret pivot placement.
**Learn notes:** groups & transforms; BufferGeometry; EdgesGeometry; merging; fixed timestep + interpolation.

### M2 — The arena

**Read:** PLAN §6; ENVIRONMENTS §2–3.
**Build:** 400×400 m bounded arena; wireframe ground grid fading into fog; procedural mountain line-strip ring; crescent moon; indestructible cubes/pyramids with collision; **dormant volcano with pooled smoke particles**; camera modes (periscope / chase) toggle.
**Accept:**
- A1: obstacles block tank movement (unit test + visual).
- A2: horizon, moon, and fog-faded grid visible.
- A3: volcano emits smoke continuously.
- A4: full arena scene < 100 draw calls.
- A5: arena bounds enforced (unit test).
**Verify:** drive the full arena; stats overlay; tests.
**Pitfalls:** particle pooling from the start (one shared `LineSegments` cloud); fog tuning so the grid fades but the horizon stays crisp.
**Learn notes:** fog; procedural geometry; camera rigs; world vs local space.

### M3 — Fire & destroy

**Read:** PLAN §5.2; ENVIRONMENTS §4.
**Build:** combat data file (shell speed/cooldown/penetration per block type); shells stepped via **voxel DDA raycast**; penetration-budget damage + neighbor splash; structural-integrity flood-fill from core cells; detached chunks → tumbling line-debris; **rubble settling (cap 400 cells, oldest crumbles)**; scorch rings (≤ 30, fading); `ammo` chain explosions; destructible structures + a fuel depot in the arena; tank death = core destroyed → whole tank shatters.
**Accept:**
- A1: a side shot with sufficient penetration tunnels **clean through** a tank — hole visible from both sides (visual + grid unit test).
- A2: disconnected chunks detach and fall (structural-integrity test).
- A3: shooting a depot's ammo cell propagates a chain explosion.
- A4: rubble cap enforced (test: exceed cap → oldest crumbles).
- A5: geometry rebuilds happen only on damage (rebuild-counter assertion).
- A6: DDA / penetration / integrity unit tests pass, including axis-aligned ray edge cases.
**Verify:** shoot walls and tanks from multiple angles; tests; stats overlay during chain explosions.
**Pitfalls:** DDA edge cases (exact grid-boundary hits); rebuild cost with many structures; keep debris in the shared particle pool.
**Learn notes:** raycast math (DDA); dynamic geometry rebuilds; pooling; flood-fill.

### M4 — Phosphor

**Read:** PLAN §4.3; NEW-ERA A4.
**Build:** `EffectComposer` + `UnrealBloomPass`; custom CRT shader pass (scanlines, vignette, subtle barrel distortion, phosphor persistence); **palette modes: green / amber / cyan / white-B&W** (world + HUD); pure-wireframe toggle (disable black faces); photosensitivity-safe mode (no flicker/ghosting); bloom/CRT intensity settings persisted to localStorage.
**Accept:**
- A1: lines visibly bloom; intact objects still read solid.
- A2: CRT effects present and fully toggleable.
- A3: all four palettes recolor world and HUD consistently.
- A4: safe mode removes flicker/ghosting; wireframe toggle works.
- A5: FPS holds with the full post chain (stats overlay).
- A6: settings persist across reload.
**Verify:** toggle every mode; screenshot each palette; stats.
**Pitfalls:** bloom threshold/strength so lines glow without smearing; shader pass resolution on resize; keep the CRT shader small and commented (it's a teaching artifact).
**Learn notes:** render targets; EffectComposer; first GLSL fragment shader.

### M5 — The enemy (largest milestone — commit per sub-gate)

**Read:** AI.md (all); RADAR.md (all); ENVIRONMENTS §3.1, §4.2, §5; NEW-ERA A1–A3.
**Build (sub-gates):**
- **5a Awareness system** (shared by players and AI): gunfire reveal (~3 s blip), 30 m proximity, LOS raycast + 5 s decaying last-seen memory, scan-tower pings, storm blindness, 2 s spawn grace. Unit test per rule.
- **5b AI roster:** slow tank / missile / supertank with the exact knob table (AI.md §5.5); state machines; fire discipline; blocked-shot policies. **Debug overlay**: intent lines, LOS rays, aim cones, memory ghosts.
- **5c Solo director + bomber:** score-driven escalation, one enemy at a time; bomber every 2 min — straight-line pass, bombs telegraphed ≥ 1.5 s, shooting it reveals the shooter.
- **5d Radar scope:** canvas 2D, heading-up, faint 30 m ring, 200 m range with rim clamp, blip taxonomy (hunter larger, bomber wedge, allies green), cosmetic sweep, storm static; red HUD band with score/lives.
- **5e Full HUD:** reticle + elevation tick, reload arc, blocky status icons (core/treads/gun/engine), directional hit flash, event ticker, killfeed.
- **5f Living arena:** full volcano state machine with real telegraphed bombs (lava pools DoT / rock clusters); scan tower (10 s ping, destructible → radar falls back); energy fences (pylon logic + shimmer).
- **5g Solo loop:** 3 lives, extra life per 10,000, scoring table (NEW-ERA A1), 3 s deathcam, game over + local high score.
**Accept:**
- A1: complete solo loop playable: start → fight → die → game over → high score.
- A2: every radar rule has a passing unit test (blip lifetime, proximity radius, grace, ping fallback).
- A3: debug overlay demonstrates imperfect AI: an AI with blocked LOS does not fire; it drives to last-seen positions.
- A4: bomber spawns on the 2-minute cadence, flies straight, telegraphs bombs, and shooting it pings the shooter.
- A5: eruption telegraph ≥ 1.5 s before any damage (timing test).
- A6: destroying the scan tower changes radar behavior (test).
- A7: all HUD elements present and readable in every palette.
**Verify:** play a full solo game with the debug overlay on; run the rule tests; watch a full eruption cycle.
**Pitfalls:** this milestone is big — do not skip sub-gate commits; keep every AI knob in data; awareness is ONE system shared by radar and AI, not two implementations.
**Learn notes:** behavior state machines; LOS & memory; canvas HUD overlays.

### M6 — Sound

**Read:** PLAN §9; NEW-ERA scorecard (spatial audio).
**Build:** Web Audio synth engine (oscillators + noise + envelopes, zero files): engine hum pitched to speed, tread squeak, shell crack, block crunch, kill boom, bomber warble, eruption rumble, UI beeps. **HRTF panners** for positional sources. Master/SFX volumes persisted; mute. Audio starts on first user gesture (autoplay policy).
**Accept:**
- A1: every sim event type has a sound.
- A2: panning follows source position (drive past a source; hear it shift).
- A3: `check:assets` green — zero audio files.
- A4: volumes persist; mute works.
**Verify:** listen with headphones while driving; mute/unmute; reload persistence.
**Pitfalls:** AudioContext resume on gesture; pool voices; keep the engine hum from clipping (gain staging).
**Learn notes:** Web Audio graph; envelopes; spatial panning.

### M7 — Multiplayer

**Read:** PLAN §8; NEW-ERA A1 + Part B2; AI.md §6; RADAR.md §6.
**Build:**
- Host loop running the shared sim (browser tab or Node server — same code).
- **Browser host:** WebRTC data channels, manual signaling via copy-paste join codes (offer/answer).
- **Self-host server:** `packages/server` (Node + ws), lobby, host controls; **PixelQR join codes** (vendor per §2; tank art on the free surface; standard backend; short join URL only — SDP offers do not fit QR).
- Netcode: commands ~20–30 Hz up, snapshots 20 Hz down (JSON); **client prediction + host reconciliation** for own tank; **~100 ms interpolation** for others.
- Deathmatch rules (NEW-ERA A1): 25 kills / 10 min, respawn 3 s ≥ 60 m from enemies + 2 s grace, host-leaves → results screen.
- Ambient AI per AI.md §6: ≤ 4 light tanks (max 1 engaging any one player), hunters every 2–3 min, bomber every 2 min.
**Accept:**
- A1: **two browser tabs on one machine complete a full deathmatch** (write the test procedure into the learning notes).
- A2: own tank responds instantly (prediction); remote tanks move smoothly (interpolation).
- A3: reconciliation recovers from forced packet loss/delay (dev harness test).
- A4: the lobby QR decodes to the join URL (verify with the pixelqr reader or a phone).
- A5: host leaving ends the match gracefully with results.
- A6: weight gate < 300 KB gz **including PixelQR**.
- A7: ambient-AI caps enforced (tests: never > 4, never > 1 per player).
**Verify:** two-tab match; QR scan; host-quit drill; `npm run check`.
**Pitfalls:** interpolation clock sync; never trust client state (host validates commands); WebRTC signaling UX needs clear copy-paste instructions.
**Learn notes:** snapshots; prediction & reconciliation; interpolation; WebRTC data channels.

### M8 — Polish & ship

**Read:** ENVIRONMENTS §3.3, §6; NEW-ERA A4, A7.
**Build:** gamepad (left stick drive, right stick aim, trigger fire); screen shake; settings page; meteor shower + ion storm + per-map event profiles; four arena presets (Classic / Outpost / Ruins / Stormfield); perf pass; deploy static client (GitHub Pages or itch.io); package the self-host server (`npx`-runnable); player-facing README section.
**Accept:**
- A1: 60 fps on integrated graphics in the heaviest map (measure and record numbers in learning notes).
- A2: all four arenas load and play; event profiles differ as designed.
- A3: gamepad completes a full game.
- A4: deployed URL playable in a clean browser.
- A5: self-host server joinable from a second device on LAN.
- A6: final `npm run check` green; weight gate green.
**Verify:** everything in §3, plus the deployment checks.
**Learn notes:** profiling; draw-call budgeting; deployment.

---

## 5. Deviation & ambiguity protocol (summary)

- Docs conflict with each other → flag it, prefer the more specific/recent doc, record the resolution.
- Docs silent → simplest choice consistent with §1 invariants; record it; flag in commit.
- A locked decision seems wrong → **stop and ask**. Do not change it unilaterally.
- Tempted to add a feature not in the docs → don't. The positioning is a try-once tech demo; scope discipline is a feature.

## 6. Definition of done (whole project)

All nine checklist items ticked with green gates · deployed and playable · self-host server works · `docs/learn/m0.md` … `m8.md` complete · no locked decision changed without an explicit recorded approval.