# VECTORZONE — Gaps & New-Era Tech

*Pre-build audit: what the blueprint is still missing, and which modern techniques earn their place.*

**Positioning (locked): VECTORZONE is a fleshed-out, ultra-light tech demo — a 10-minute experience people try once or twice, not a live service. No retention mechanics.**

---

## Part A — Gaps (proposed resolutions)

These are holes in the current docs. None block M0–M4; each gets locked at the milestone that needs it.

### A1. Match flow & rules (needed by M7)

- **Deathmatch defaults**: first to **25 kills** or **10-minute** time limit (host-tunable). Player kill = +1; environment kills are neutral; block damage doesn't score. End screen with standings.
- **Respawn**: 3 s delay, spawn ≥60 m from any enemy with LOS, then the existing 2 s grace.
- **Host leaves → match ends** with a results screen. Host migration is genuinely hard; v1 is honest about it instead of pretending.
- **Solo loop**: 3 lives, extra life every 10,000 points (faithful), game-over + local high score. Pause works solo, never in multiplayer.
- **Scoring (solo)**: light tank 100 · missile 250 · supertank 500 · bomber 1,000 · hunter bonus +500 · block destroyed 5. All data, tuned later.

### A2. Death & respawn experience (needed by M3/M5)

- Core destroyed → the whole tank shatters into detached debris, bloom flash + shake, killfeed entry.
- 3 s deathcam: hold on the wreck, show "killed by X" (or "the zone"), then respawn. No killcam replay in v1 (stretch).

### A3. HUD completeness (needed by M5)

Beyond radar + score band: reticle with elevation tick, reload arc, **blocky status readout** (core/treads/gun/engine health as tiny vector icons — damage you can read), directional hit flash, event ticker (`HUNTER INBOUND`, `ERUPTION IMMINENT`, `SCAN PING`), killfeed. All canvas/DOM, vector-styled.

### A4. Settings & accessibility (needed by M4/M8)

- **Palette modes**: green (default), amber, cyan, and **white B&W** — the original monitor was black-and-white with a green overlay, so alternate phosphors are *authentic*, and they double as colorblind-safe options.
- Bloom/CRT intensity sliders + full off, **photosensitivity-safe mode** (no flicker/ghosting), screen-shake off, FOV, resolution scale, volumes. Key rebinding → stretch.

### A5. Combat tuning sheet (needed by M3)

One data file: shell speed/cooldown/penetration per block type, tread speeds, turret slew, ramming behavior (proposal: collisions above a speed threshold chip blocks — positioning matters). Numbers get tuned by play, not argued in docs.

### A6. Testing & determinism (from M1 onward)

The pure sim is trivially unit-testable (vitest): DDA raycast, penetration, structural integrity, scoring. Plus a determinism check — same seed + command stream → same state hash. This is the safety net that keeps prediction/reconciliation honest.

### A7. Deployment (M8)

Static client → **itch.io or GitHub Pages** (free, natural home for a light browser game). Self-host server → `npx vectorzone-server`. Nothing paid, ever.

---

## Part B — New-era tech scorecard

Filtered by: does it fit the vector aesthetic? Does it respect the weight budget? Does the architecture make it cheap?

| Tech | Verdict | Why |
|---|---|---|
| **Spatial audio** (Web Audio HRTF panners) | **Adopt (M6)** | Positional engine hum, shots, eruptions, bomber warble. Built into the browser, ~0 bytes, enormous presence. The single biggest feel-per-byte upgrade. |
| **Phosphor palette modes** (green/amber/cyan/B&W) | **Adopt (M4)** | Authentic monitor variants + colorblind safety for free. One uniform. |
| **Gamepad haptics** (rumble API) | Not adopted | Cheap and fitting, but passed over in review; trivial to add later if wanted. |
| **Adaptive quality** | Deferred | Not adopted now; revisit only if perf demands it. Manual quality settings (A4) cover the need. |
| **Daily challenge + ghost replays** | **Cut** | Architecturally nearly free (ghosts = recorded command streams), but retention features don't fit a try-once tech demo. |
| **QR join codes via PixelQR** | **Adopt (M7)** | The user's own engine (`pixelqr/` in this workspace, github.com/sky-is-green/pixelqr): pixel art painted into a real scannable QR. The lobby QR carries a **tank drawn inside the code itself**. Details in Part B2. |
| **Clip export** (MediaRecorder on canvas) | Stretch | "Share your kill" — 5 s webm of a chain explosion. Cheap, viral, fits. |
| **WebXR periscope** | Stretch (already shelved) | Thematically perfect — Battlezone was the first VR arcade game. The periscope mode maps 1:1 to a headset. |
| **Sim in a Web Worker** | Defer | Pure sim makes it easy; only worth the complexity if main-thread perf actually suffers. |
| **WebGPU renderer** | Defer | three.js supports it, but for unlit lines WebGL2 is simpler and universal. Revisit only if we want compute-driven particles. |
| **Rollback netcode** (GGPO-style) | Reject for v1 | Requires bit-exact determinism (fixed-point math everywhere). Prediction + reconciliation is the right feel/complexity trade for tanks. |
| **WASM sim** (Rust/Zig) | Reject | Unnecessary at this entity count; hurts learnability and the light toolchain. |
| **ML-driven AI** | Reject | The fairness model *is* the design. Hand-tuned knobs beat opaque behavior here. |

---

## Part B2 — PixelQR integration (adopted)

The join QR is generated by the user's own **PixelQR** engine — pixel art that *is* a scannable QR code.

- **Files**: vendor `core.js` + `reader.js` + `lib/qrcode.js` from `pixelqr/` (DOM-free engine; browser-global or Node-require). **Skip `lib/jsQR.js`** (257 KB raw) — it exists for live decode verification, which PixelQR's own test suite already does; the game only generates.
- **Weight**: ~162 KB raw → est. **~35–45 KB min+gz**. Keeps us under the 300 KB budget, with a tighter margin — watch it at M7.
- **Backend**: *standard* — any phone camera reads it. (The custom circular backend is only readable by PixelQR's own reader; wrong tool for join links.)
- **The art**: a tank preset painted on the free surface, rendered in `dots` or `squircle` style to match the vector look. Every lobby's QR is a little tank that scans.
- **Capacity honesty**: QR versions 3–13 at level H hold a short URL comfortably, but **not** a WebRTC SDP offer (1–3 KB). So QR joins serve the **self-host server mode** (short LAN/port-forward URL); the browser-host mode keeps copy-paste join codes. Both documented in PLAN §8.

---

## Part C — The discipline

Every "no" above protects the same promise: **< 300 KB, 60 fps, zero assets, learnable codebase**. The vector look is a constraint that makes most modern tech irrelevant (no PBR, no textures, no mesh LOD, no navmesh) — and makes the few that fit (spatial audio, phosphor palettes, command-stream ghosts) unusually cheap. That asymmetry is the project's superpower; spend it on feel, not on tech for tech's sake.