# VECTORZONE — Blueprint

*Working title. An advanced, browser-native reimagining of Atari's Battlezone (1980 arcade / 1995 Lynx "Battlezone 2000" lineage), built with three.js.*

**Positioning:** a fleshed-out, ultra-light tech demo — a 10-minute experience people try once or twice, not a live service. No retention mechanics (dailies, ghosts, leaderboards are out).

---

## 1. Vision

Keep the soul of Battlezone:

- First-person tank combat on a dark void plane, **glowing vector edges**, mountain horizon, crescent moon, erupting volcano.
- **Modern controls**: WASD drives the hull, **arrow keys aim the turret** (←/→ rotate, ↑/↓ gun elevation), **space fires** — the first-person view rides the turret. (Authentic dual-stick arcade mode lives on the stretch shelf.)
- **Radar scope** + score band across the top (the original's red-tinted top fifth) — but information-limited: it reveals anything that shoots, plus enemies within 30 m.
- Enemy tanks → missiles → supertanks escalation.

Refresh it for the modern era:

- **Tanks and structures are assemblies of simple blocks.** Damage removes blocks. A side hit literally punches a see-through tunnel in the hull — *blow-through*.
- **Destructible environment**: walls, cover, and buildings chip apart and collapse, reshaping the battlefield mid-fight.
- **The bomber**: a radar-invisible aircraft crosses the arena every 2 minutes, bombing its flight path — a bonus-points piñata that reveals your position when you shoot it.
- **Basic multiplayer**: small-room deathmatch, host-authoritative and zero-cost, designed in from day one.
- **Modern feel**: phosphor bloom, CRT shader, line-particle debris, screen shake, synthesized audio, gamepad support — all with zero asset files.

**Weight target:** ultra-light. No textures, no models, no audio files — everything procedural. Initial download < ~300 KB gzipped, 60 fps on integrated graphics.

---

## 2. Design pillars

1. **Everything is blocks.** One representation (a 3D grid of typed cells) drives rendering, collision, and damage for tanks *and* structures. No special cases.
2. **The sim never imports three.js.** Game logic is pure TypeScript that runs identically in the browser and on the server. Rendering is a thin, replaceable layer on top.
3. **Input → commands → fixed-timestep sim.** The player produces commands; the simulation consumes them at 60 Hz. This single decision makes multiplayer, replays, and AI fall out naturally.
4. **Learn by building.** Each milestone introduces a small set of three.js concepts and ends with something playable on screen.

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Language | TypeScript | Catches mistakes early; types double as documentation while learning. Compiles to plain JS. |
| 3D | **three.js** (latest, ES modules) | Exactly the right level: scene graph, geometry, shaders, post-processing — no engine bloat. |
| Build | Vite | Instant dev server, tree-shaken production builds. |
| Multiplayer | WebRTC data channels (host-authoritative) + optional Node.js `ws` self-host server | Zero-cost private lobbies; the host runs the shared sim; no paid infrastructure. |
| Physics | **None (custom)** | Tank kinematics + voxel/AABB collision is simple math. A physics engine would add weight and fight the block model. |
| Audio | Web Audio API (oscillators + noise) | Authentic beeps, engine hum, explosions — synthesized, 0 bytes of assets. |
| Repo | npm workspaces monorepo | `sim` shared between client and server. |

Deliberately avoided: React/any UI framework (HUD is canvas/DOM), physics engines, asset pipelines, ECS frameworks.

---

## 4. The vector look in three.js

### 4.1 Base rendering: occluded wireframe ("solid vector")

The arcade drew pure transparent wireframes. For blow-through to *read*, we want objects to look solid until they're holey:

- Each block contributes **black faces** (`MeshBasicMaterial`, color `#000000`) that write depth — they occlude whatever is behind them.
- Each block contributes **glowing edge lines** (`LineSegments`, additive green).
- Result: crisp solid silhouettes made of light. When blocks are destroyed, the faces and edges vanish together and you **see straight through the hole** to the interior and out the other side.
- A settings toggle disables the black faces → authentic fully-transparent 1980 wireframe mode.

This is cheap: black unlit faces need no lights at all. The whole game is `MeshBasicMaterial` + `LineBasicMaterial`.

### 4.2 Geometry strategy (the important performance decision)

Naively, 300 blocks × (mesh + lines) × 10 tanks = 6,000 draw calls. Instead:

- **Per rigid body, merge everything into ONE face geometry + ONE line geometry.** Two draw calls per body: a tank is hull + rotating turret = 4, a structure = 2. (Resolved M1: the independently-aimed turret cannot share static hull geometry.)
- **Cull interior faces/edges**: only emit a block face where the neighboring cell is empty (Minecraft-style). Fewer triangles, and when a neighbor is destroyed the newly exposed interior faces appear automatically on rebuild.
- Rebuild the merged geometry **only when damage occurs** (a few times per second at most), never per frame. A few hundred blocks rebuild in well under a millisecond.
- Debris and particles: one pooled `LineSegments` cloud for the whole scene.

### 4.3 Glow & CRT (post-processing)

`EffectComposer` chain:

1. Render pass (black background, green lines).
2. **UnrealBloomPass** — the phosphor glow. Tuned tight so lines bloom but don't smear.
3. **Custom CRT shader pass** (one small GLSL fragment shader — a gentle intro to shaders): scanlines, vignette, subtle barrel distortion, faint phosphor persistence/ghosting, optional chromatic fringe.
4. Optional "periscope" mask mode — circular viewport with the HUD outside it, like the cabinet.

Palette: green phosphor (`#39ff6b`-ish) for the world, red band for HUD (matching the original's colored overlay). In multiplayer, each player gets a hue-shifted edge color so friend/foe reads instantly.

---

## 5. Block tanks & damage

### 5.1 The block grid

- A tank is a 3D grid, e.g. **8 wide × 5 tall × 12 long** cells at 0.3 m → ~2.4 × 1.5 × 3.6 m tank.
- Each cell: `{ type, hp }`. Types:

| Block | Role | Gameplay effect when destroyed |
|---|---|---|
| `hull` | armor filler | pure protection, cheap |
| `tread` | left/right tread rows | lose cells on one side → that side slows; all gone → immobilized |
| `gun` | turret ring + barrel | fire disabled |
| `engine` | rear mass | speed drops per cell lost |
| `core` | crew/command (1–2 cells) | **destroyed = tank killed** |
| `ammo` | optional | catastrophic secondary explosion (area damage) |

- Stats derive from the layout: mass → acceleration/top speed; tread count → turn rate; frontal armor thickness → survivability. Layouts are hand-authored — each tank class is a designed artifact, tuned by us.
- The **turret** (gun cells) is a small sub-grid that rotates independently of the hull; the first-person camera rides it.

### 5.2 Damage model: penetration & blow-through

- Shells are fast projectiles stepped through the world each tick with a **voxel DDA raycast** (Amanatides & Woo) against block grids — exact, cheap, no mesh raycasting needed.
- Each shell has a **penetration budget**. Entering a block costs budget based on block type; the shell destroys/damages cells along its path until the budget runs out.
  - Glancing hit → crater on the surface.
  - Direct side hit with enough penetration → a **tunnel clean through the tank**, visible from both sides.
- Impact also chips neighboring cells (splash), so holes grow organically under sustained fire.
- **Structural integrity**: after damage, flood-fill from `core` cells. Any cluster no longer connected detaches and becomes tumbling line-debris with simple gravity. Shoot a tread clean off and watch it fall away.

### 5.3 Tank classes (hand-authored — customization scrapped)

- One canonical player tank; enemy classes (slow tank, supertank) get their own designed layouts.
- No editor, no loadouts, no share codes. Every tank is a crafted artifact.
- Block types still drive everything: layout determines stats, and damage reads the same on every tank.

### 5.4 Enemy AI — faithful, but fair

Full design in **[`docs/AI.md`](docs/AI.md)**. Summary:

- Keep the original's soul: one-enemy duels, score-driven escalation (slow tanks → missiles → supertanks), the radar-invisible bonus flyby (now a bomber), enemies that come to you, no retreat.
- Tone it down with **imperfect information** (LOS raycasts, last-seen memory, scan-tower pings — no wallhacks), **human-like aiming** (turret slew limits, error cones, ranging shots), reaction ticks, and fire discipline.
- AI obeys the same physics and block damage as players; lava, crush, and ion storms affect it too.
- Solo director is faithful; deathmatch adds always-on ambient AI (up to 4 respawning light tanks, max 1 engaging one player, supertank hunters every 2–3 min); co-op waves scale sublinearly. The bomber crosses every mode every 2 min — bombs its path, and shooting it reveals your position.
- AI is just another producer of `TankCommand` in the shared sim → host-authoritative multiplayer needs zero extra AI netcode.

### 5.5 Radar & awareness — silence is stealth

Full design in **[`docs/RADAR.md`](docs/RADAR.md)**. Summary:

- The radar reveals **anything that fires** (~3 s fading blip) and **any enemy within 30 m** (continuous). Nothing else — distant silent tanks are dark.
- Scan-tower pings remain the only full-field reveal; ion storms blind the scope.
- AI awareness mirrors the same rules (symmetry) — no wallhacks, no omniscience.
- Faithful presentation: circular heading-up scope in the red HUD band, rotating sweep, phosphor-decay blips, faint 30 m sense ring.

---

## 6. Environment — the living arena

Full design in **[`docs/ENVIRONMENTS.md`](docs/ENVIRONMENTS.md)**. Summary:

- **Three layers**: horizon spectacle (mountains, moon, **erupting volcano state machine**, rare meteors/ion storms), arena matter (fully reactive objects), ambient dust (pooled line particles).
- **Flat arena** (faithful), bounded, ~400 × 400 m; ground grid fading into fog; scorch-ring decals instead of terrain deformation.
- **All environment objects are destructible block assemblies** (user override
  2026-11-25: the faithful "indestructible solids" class is retired): cubes and
  pyramids keep their 1980 shapes but ram apart and tunnel like walls,
  bunkers, towers, and depots. Walls erode, buildings tunnel, towers collapse
  floor-by-floor with crush damage, fuel depots chain-explode.
- **Reactive props**: scan towers ping everyone onto radar until destroyed; energy fences block shots/movement until a pylon dies.
- **Rubble persists** as capped, destructible low cover — the battlefield evolves during the fight.
- **Every hazard telegraphs** (ground ring + audio ≥1.5 s); orange/red palette reserved for danger; all events seeded in the sim → identical for every client.
- Arenas are data (layouts + event profiles): Classic, Outpost, Ruins, Stormfield.

---

## 7. Simulation architecture

```
input devices ──► TankCommand {throttle, turn, turretYaw, gunPitch, fire}
                      │
                fixed 60 Hz tick
                      ▼
   ┌────────────────────────────────────────┐
   │  sim (pure TS, no three.js, no DOM)    │
   │  world state: tanks, shells, blocks,   │
   │  structures, score, events             │
   └────────────────────────────────────────┘
                      │ state + events
        ┌─────────────┴─────────────┐
        ▼                           ▼
  three.js renderer           audio / HUD / net
  (syncs meshes, spawns       (consumes events:
   particles, camera)          "explosion", "hit"…)
```

- **Fixed timestep with accumulator**; render interpolates between the last two states for smoothness at any refresh rate.
- Tank movement = simple kinematics: throttle → speed along hull heading, turn input → hull yaw rate; turret yaw/elevation are independent (arrow keys). Collision response against grids/obstacles, no wheel physics.
- Seeded RNG in the sim; the sim emits **events** (hit, blockDestroyed, tankKilled, …) that renderer/audio/net subscribe to.
- Because the sim is pure and command-driven, the multiplayer host (browser tab or self-host server) runs *the exact same code*.

---

## 8. Multiplayer (zero-cost, private, self-hosted)

**Model: host-authoritative.** One player is the host and runs the authoritative sim; everyone else is a client. No paid infrastructure, ever. Two ways to host, same shared sim code:

1. **Browser host (default)** — the host's tab runs the server role. Peers connect over **WebRTC data channels**. Signaling is manual for v1: the host creates a lobby and gets a **join code** (an encoded connection offer); friends paste it back with their answer. Completely free, completely private — no signaling server, no accounts. Free public STUN servers handle NAT traversal for most home connections.
2. **Self-host Node server (optional)** — a tiny `npx vectorzone-server` the host runs on their own PC. Friends join by LAN IP or port-forwarded address. Best reliability, host fully controls who joins; ideal for LAN parties and private friend groups. The lobby shows a **PixelQR join code** — a scannable QR with a tank drawn inside it, generated by the user's own pixelqr engine — so friends join by scanning.

Netcode (identical in both modes):

- Host sim at 60 Hz owns all truth — hit detection, damage, kills. Cheating is structurally hard.
- Clients send **commands** (~20–30 Hz), receive **snapshots** (20 Hz; JSON first, delta/binary later if needed).
- **Client-side prediction + host reconciliation** for your own tank (no input lag), **interpolation ~100 ms behind** for everyone else (smooth remote motion). The sim architecture above is built for exactly this.
- Rooms: **2–8 players**, private by default (join code / allowlist), deathmatch first; co-op waves vs AI later.

Single-player and multiplayer use the same loop — solo is just the host role with one client, in-browser.

Known limit: a few symmetric-NAT setups can't punch through WebRTC; the self-host server is the honest fallback. TURN relays cost money, so they're out of scope.

---

## 9. Modern touches (the "new era" list)

- Phosphor bloom + CRT shader + periscope mode (section 4).
- Line-segment **debris & sparks**, pooled; detached chunks tumble with gravity.
- **Screen shake** on hits/kills, subtle recoil kick on fire.
- **Radar**: information-limited scope (gunfire + 30 m proximity), sweep animation, red HUD band, score/lives in vector-styled canvas.
- **Synthesized audio**: engine hum pitched to speed, tread squeak, shell crack, block crunch, kill boom, bomber warble. All oscillators/noise — zero files.
- **Gamepad** support (left stick drives, right stick aims), plus the keyboard scheme above.
- Escalating AI (slow tanks → missiles → supertanks), the bomber flyby, score/lives loop for solo play.
- Stretch shelf (explicitly *not* v1): authentic dual-stick arcade mode, clip export, spectator mode, WebXR periscope. Retention features (dailies, ghosts, replays, leaderboards) are cut by positioning — this is a try-once tech demo.

---

## 10. Learning roadmap (three.js, learned as we build)

Each milestone ends with something you can play. Concepts listed are what that step teaches.

| # | Milestone | What you get | three.js / gamedev concepts |
|---|---|---|---|
| M0 | **Hello, vector** | Vite + TS + three.js; a glowing wireframe cube spinning in the void | scene, camera, renderer, geometry vs material vs mesh, render loop, resize handling |
| M1 | **Block tank** | A tank assembled from blocks; WASD drive, arrow-key turret, space to fire | groups & transforms, `BufferGeometry`, `EdgesGeometry`, geometry merging, input handling |
| M2 | **The arena** | Ground grid, mountain horizon, moon, cubes/pyramids, fog, dormant smoking volcano, chase/periscope camera | fog, procedural geometry, camera rigs, world vs local space |
| M3 | **Fire & destroy** | Shells, voxel hit detection, blow-through holes, debris, structural collapse | raycasting math (DDA), dynamic geometry rebuilds, object pooling, fixed timestep |
| M4 | **Phosphor** | Bloom, CRT scanlines/vignette, phosphor palette modes (green/amber/cyan/B&W), wireframe-mode toggle | `EffectComposer`, render targets, first GLSL `ShaderMaterial` |
| M5 | **The enemy** | Faithful-but-fair AI roster (docs/AI.md), solo director, the bomber, score & lives, radar HUD, erupting volcano + telegraphed bombs, event scheduler | AI state machines, LOS & memory, orthographic/DOM overlays |
| M6 | **Sound** | Full synthesized soundscape with spatial audio (HRTF panners) | Web Audio oscillators, noise, envelopes, positional panning |
| M7 | **Multiplayer** | Host-authoritative rooms (WebRTC join codes), 2–8 player deathmatch, prediction + interpolation; self-host Node server with PixelQR join codes | shared sim, snapshots, client prediction, reconciliation, interpolation, WebRTC data channels |
| M8 | **Polish & ship** | Gamepad, shake, settings, perf pass, deploy (static client + tiny server) | profiling, draw-call budgeting, deployment |

**Vertical slice = M0–M4**: a drivable, shootable, destructible tank in a glowing arena. Everything after is breadth. If motivation ever dips, we stop at a milestone boundary with a working game.

---

## 11. Repo layout

```
vectorzone/
├── PLAN.md               ← this document
├── package.json          ← npm workspaces
├── packages/
│   ├── sim/              ← pure TS: world, tanks, blocks, damage, AI (no three.js)
│   ├── client/           ← Vite + three.js: renderer, input, HUD, audio, net-client
│   └── server/           ← optional self-host Node server (same host logic as the browser)
└── docs/                 ← learning notes per milestone (we write these as we go)
```

---

## 12. Performance & weight budget

- Draw calls: ~4 per tank (hull + turret) + 2 per structure + ground/horizon/particles/HUD → **< 100 total**.
- No lights, no shadows, no textures, no PBR — unlit materials only.
- Geometry rebuilds only on damage; particles pooled; snapshots delta'd if needed.
- Bundle: three core ~170 KB gz + bloom/CRT + game code + PixelQR engine (~35–45 KB gz, jsQR excluded) → **target < 300 KB gz initial load** (watch the margin at M7).
- 60 fps target on integrated GPUs; bloom resolution scaled on weak devices.

---

## 13. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Scope (destruction + MP + living arena is a lot) | Strict milestone order; vertical slice first; stretch shelf |
| Draw-call explosion from blocks | Merged per-entity geometry + interior culling (designed in from M1) |
| Multiplayer feel (lag, rubber-banding) | Prediction/reconciliation recipe; sim built command-driven from day one |
| WebRTC NAT traversal fails for some peers | Free public STUN covers most homes; fallback = self-host Node server on LAN / port-forward |
| Blow-through readability | Occluded-wireframe base look (black faces) makes holes unmistakable |
| IP: "Battlezone" is owned (Rebellion/Atari) | Fan-project posture: original name (VECTORZONE), no Atari assets/code, non-commercial; mechanics aren't copyrightable |

---

## 14. Locked decisions (2026-11-25)

1. **Reference**: 1980 arcade / 1995 Lynx vector look. ✔
2. **Language**: TypeScript. ✔
3. **Controls**: WASD movement + arrow-key turret (←/→ yaw, ↑/↓ elevation) + space to fire (dual-stick arcade mode → stretch shelf). ✔
4. **Multiplayer**: zero-cost, host-authoritative — browser host over WebRTC with join codes, plus optional self-hosted Node server for LAN/private lobbies. No paid hosting. ✔
5. **Base look**: solid vector (black faces + glowing edges) with pure-wireframe toggle. ✔
6. **Customization**: scrapped — hand-authored tank classes only. ✔
7. **Enemy AI**: faithful escalation & personalities, toned down with imperfect info and human-like aiming (`docs/AI.md`). ✔
8. **Radar**: reveals anything that fires (~3 s blip) + enemies within 30 m; scan pings/storms as designed; AI mirrors the same rules (`docs/RADAR.md`). ✔
9. **Positioning & tech**: try-once tech demo, no retention features; adopted spatial audio, phosphor palette modes, PixelQR join codes (`docs/NEW-ERA.md`). ✔
10. **All environment objects destructible** (user override 2026-11-25): cubes/pyramids keep their faithful shapes but ram apart and tunnel; no indestructible class. ✔

## 15. Immediate next step

Once decisions are locked: scaffold the workspace and build **M0 — Hello, vector** (spinning glowing cube), with a short `docs/m0-notes.md` explaining every three.js concept it uses.