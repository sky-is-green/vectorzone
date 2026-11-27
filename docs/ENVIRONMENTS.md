# VECTORZONE — The Living Arena

*Environment design: visibly active world, reactive matter, zero assets.*
*Companion to `PLAN.md` §6. Everything here obeys the same rules: blocks, lines, events, host-authoritative sim.*

---

## 1. Design goals

1. **The arena is a combatant.** It erupts, collapses, chain-explodes, and denies ground. Players route around the world's moods, not just around each other.
2. **Visible life everywhere.** Even when nothing is being shot, something is always moving: smoke, blinking beacons, rotating dishes, shimmering fences, drifting dust.
3. **Everything reactive is made of the same stuff.** Structures use the exact block-grid system as tanks (PLAN §5). One damage model, one structural-integrity rule, one debris system.
4. **Every hazard telegraphs.** No damage without ≥1.5 s of warning (ground ring + audio cue). The world is dangerous but never unfair.
5. **Zero assets.** All spectacle is line particles, animated line geometry, and shader time — nothing loaded, nothing textured.

---

## 2. The three layers

| Layer | Contents | Interactive? |
|---|---|---|
| **Horizon** (spectacle) | mountain ring, crescent moon, volcano, meteors, ion storms | Mostly visual; volcano & meteors occasionally reach into the arena |
| **Arena** (matter) | ground grid, solids, structures, props, fences, rubble, scorch marks | Fully reactive — this is the gameplay layer |
| **Ambient** (dust) | drifting line motes, impact sparks, ash, smoke wisps | Pure particles, pooled |

The horizon sits far outside the play bounds and is rendered as cheap line strips with fog — it costs almost nothing but carries most of the atmosphere.

---

## 3. The horizon: visibly active

### 3.1 Volcano — the centerpiece (state machine)

**Timing (user direction 2026-11-25): matches last 10 minutes; the volcano is
dormant for the whole match except the FINAL TWO MINUTES**, then cycles
rumble → erupt → cooldown until the clock runs out. The climax rearranges the
arena while players fight for the finish.

A seeded cycle, identical on every client because it lives in the sim:

```
DORMANT ──► RUMBLE ──► ERUPT ──► COOLDOWN ──► DORMANT
 60–120s     8–12s      6–10s      ~20s
```

- **DORMANT**: thin smoke wisps (rising line particles), occasional ember flicker at the crater. The mountain glows faintly at its peak.
- **RUMBLE** (telegraph): low synthesized rumble, micro screen-shake, crater glow brightens to orange, smoke thickens. Players *know* it's coming.
- **ERUPT**: a dense, wide steam/ash plume with embers and a hot crater. **10–16
  real sim projectiles** arc across the arena during a 10 s sustained eruption:
  - Each target gets a **fading-in ground ring ~2 s before impact** (the universal hazard telegraph).
  - Impact: **7 m blast radius / 6 damage**, then a **6–8 m lava pool lasting
    40 s** (2 damage every 0.5 s); 35% of impacts also deposit fresh rock cover.
    The battlefield literally rearranges itself and stays deadly.
- **COOLDOWN**: fading glow, drifting ash across the arena, embers dying out.

**Palette rule:** the world is green; **orange/red is reserved for hazards** (lava, explosions, warning rings). Instant readability, and it echoes the original's red HUD band.

### 3.2 Mountain ring & moon

- Procedural line-strip mountains, static silhouette, subtle parallax as you drive.
- Crescent moon, faithful to 1980. Occasional slow-blinking satellite crossing the sky (one moving dot + trail — cheap, charming).

### 3.3 Rare sky events (per-map profile, at most one major event active)

- **Meteor shower**: streaks across the sky; rarely, one real meteorite lands with the same telegraph ring, depositing a destructible crystal/rock cluster and a small impact blast.
- **Ion storm**: aurora-like waving line bands in the sky, horizon flicker, **radar static for 6–8 s** with an audio cue. No damage — an informational handicap that forces eyes-up play. Rare, and off by default in competitive deathmatch.

### 3.4 Ambient distant AA fire

- Purely visual client-side volleys of 2–3 tracers launch from ground level
  outside the arena every 0.7–1.8 s, fly upward for about one second, then
  produce distant skybursts throughout the match.
- New volleys are biased into the player's current view; trajectories remain
  outside the playable space.
- Longer tracer streaks and larger flash/spark bursts keep the action readable
  from the normal ground camera. Skybursts intentionally have no circular ring.
- They never damage tanks, create radar contacts, or shake the camera, and use
  the existing particle pool only—no extra meshes, materials, or sim state.

---

## 4. Arena objects: the taxonomy

| Class | Examples | Behavior |
|---|---|---|
| **Classic solids** (faithful shapes, destructible) | cubes, pyramids | Same block grids as everything else (user override 2026-11-25): ram apart, tunnel, collapse. No indestructible class remains. |
| **Destructible structures** | walls, bunkers, buildings, towers | Tank-style block grids. Chip, tunnel, collapse. |
| **Explosive sites** | fuel depots, ammo dumps | Clusters of `ammo` blocks → chain reactions. |
| **Reactive props** | scan towers, radar dishes, beacons | Idle animation + a gameplay effect when destroyed. |
| **Energy fences** | pylons + glowing line curtain | Blocks shells and tanks until a pylon dies. |
| **Rubble & scorch** | settled debris, impact rings | The battlefield remembers the fight. |

### 4.1 Destructible structures

Same block grid, same types where sensible (`hull`, `ammo`, `core`-like anchor cells), same penetration/blow-through, same flood-fill structural integrity:

- **Walls / barricades** (1–2 blocks tall): chip away to open firing lanes. Sustained fire erodes cover in real time.
- **Ramming (user direction 2026-11-25)**: destructible structures do NOT stop a
  tank — plowing through smashes the blocks in the tank's path (momentum costs
  15% per contact tick), so cover falls apart under impact just as it does
  under fire. This applies to ALL environment objects, including the classic
  cubes and pyramids (user override: no indestructible class).
- **Bunkers & buildings**: hollow interiors — blow through a wall and see the room inside; fight through rooms.
- **Towers**: tall, top-heavy. Lose base blocks → **floor-by-floor collapse**. Falling chunks deal **crush damage** to anything beneath (telegraphed by a ground ring under the falling mass). A tower falling on a tank is a kill credit to whoever shot the base.
- **Explosive sites**: one `ammo` cell detonating damages neighbors, which detonate… **chain reactions** are the showcase moment. Depot placement becomes a map-design lever: risky cover near a depot is cover that can delete you.

### 4.2 Reactive props (destruction with consequences)

- **Scan tower**: large **blue** reinforced objective (7×7 footprint, 11 high,
  scanner blocks hp 6 / penetration cost 5). Its radar role makes it worth
  finding and killing; the color/size make it unmistakable.
- **Explosive depots**: rendered **red** so their chain-reaction role is visible
  before the first shot.
- **Radar dish / antenna**: idle rotation; shot off → topples via structural integrity, local AI accuracy drops for ~15 s.
- **Beacon tower**: blinking light, pure atmosphere + tall collapse hazard.

### 4.3 Energy fences

Two pylons with a shimmering line curtain between them (vertex-wiggle in the shader — a second tiny GLSL moment after the CRT pass). Blocks movement and shells. Destroy **either pylon** and that segment dies with a satisfying discharge burst. Fences let maps have "doors" that open by shooting — routing decisions under fire.

### 4.4 Rubble & scorch — the persistent battlefield

- Detached clusters above a size threshold **settle as rubble**: low, destructible cover cells merged into one arena-wide geometry. The map you finish is not the map you started.
- Rubble is capped (e.g. 400 cells/arena); oldest rubble crumbles to dust when the cap is hit. Small debris stays pure particles.
- Impacts leave **scorch rings** — fading line decals on the ground, pooled (~30), ~20 s fade. No textures, no terrain deformation: the ground stays a flat plane, faithful and cheap.

---

## 5. The ambient event system

One sim system schedules everything:

- **Seeded RNG** → identical events on host and all clients; no net traffic beyond normal snapshots.
- **Phase machine** per event: `idle → telegraph → active → cooldown`. The telegraph phase is mandatory for anything that deals damage.
- **At most one major event** (eruption / meteor / storm) active at a time; idle animations (smoke, dishes, beacons, fence shimmer, dust) run always and cost ~nothing.
- **Per-map profiles** tune frequency and which events exist: Classic gets the faithful volcano; competitive deathmatch can disable storms; Stormfield cranks everything.
- Events emit sim events (`eruptionStart`, `bombImpact`, `collapse`, `fenceDown`, `scanPing`…) → renderer spawns particles, audio synth fires, HUD reacts. Same event bus as combat.

**Balance rules:**

1. Hazard damage is area-denial, not spam: 10–16 telegraphed projectiles per
   eruption, eruptions roughly a minute apart in the final two minutes.
2. Every damaging hazard shows the ground ring ≥1.5 s ahead, plus audio.
3. Environment kills are neutral (no score awarded) — the zone is a third faction.
4. Fresh rock/rubble from events is destructible like everything else: the world's gifts can be taken away again.

---

## 6. Arena presets (maps are data)

| Map | Character | Event profile |
|---|---|---|
| **Classic** | Faithful 1980: sparse cubes & pyramids, open ground, volcano horizon | Volcano only, mostly spectacle |
| **Outpost** | Destructible base: walls, bunkers, fuel depot, scan tower, fences | Volcano + depot chains; tactical |
| **Ruins** | Dense buildings, tight lanes, lots of collapse potential | Volcano bombs love the tight lanes |
| **Stormfield** | Pylons, fences, crystals, open sightlines | Everything on: meteors, storms, eruptions |

Arenas are JSON-ish layouts (object placements + block grids + event profile), so multiplayer maps, a future editor, and community sharing are trivial.

---

## 7. Performance budget (environment share)

- **Line hierarchy** (`Line2` / `LineSegmentsGeometry`, real pixel widths): floor
  1 px (thinnest), tanks 2.4 px (thickest), structures 1.4 px, aircraft 1.8 px,
  missiles 2.6 px plus a camera-facing vector marker, rubble 1 px, horizon
  1.1–1.2 px, trajectory 0.9 px. Independent block
  edges must use `LineSegmentsGeometry`; `LineGeometry` connects them into a
  polyline and creates spurious diagonal lines.
- Global line-particle pool: **1,024 segments**, shared by smoke, sparks, ash,
  embers, debris. Lava rings are one pooled thick-line mesh, not per-frame particles.
- ≤ ~24 block structures per arena, each merged to **2 draw calls** (faces + edges); rubble merged arena-wide into 1–2 more.
- Horizon: one line-strip mesh + one volcano emitter. Sky events reuse the particle pool.
- Scorch decals: pooled, ≤ 30. Idle animations: a handful of rotating/blinking objects + one shader time uniform.
- Geometry rebuilds only on damage/collapse — never per frame.

---

## 8. Milestone integration

| Milestone | Environment work |
|---|---|
| M2 | Ground grid, mountains, moon, cubes/pyramids, fog, **dormant volcano with smoke** |
| M3 | Destructible structures, blow-through, rubble settling, scorch rings, **fuel-depot chain explosions** |
| M4 | Hazard palette (orange/red), bloom tuned for lava, fence shimmer shader |
| M5 | **Full volcano state machine + telegraphed bombs**, scan tower ↔ AI/radar interplay, event scheduler |
| M7 | Events are host-authoritative by construction (they live in the shared sim) |
| M8 | Meteor shower, ion storm, per-map profiles, balance & perf pass |

---

## 9. Locked choices (2026-11-25)

1. **Hazard lethality**: hazards damage tanks — volcano bombs, lava pools, tower crush — always telegraphed ≥1.5 s ahead. The arena is a third faction. ✔
2. **Rubble persistence**: big debris settles into lasting destructible cover, capped (~400 cells/arena, oldest crumbles at the cap). The battlefield evolves during the fight. ✔