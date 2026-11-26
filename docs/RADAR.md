# VECTORZONE — Radar & Awareness

*Companion to `PLAN.md` §5.5 and `docs/AI.md` §3. The radar is information-limited: silence is stealth, firing is a cost.*

---

## 1. The two core rules

1. **Gunfire reveal**: anything that shoots appears on the radar — a bright blip at the shooter's position that fades over **~3 s**. Players, AI tanks, and the bomber alike.
2. **Proximity sense**: any enemy within **30 m** of you is shown continuously, even through cover. Inside the ring, you are never surprised; outside it, you must earn your information.

Nothing else is visible by default. A distant, silent tank is **dark**.

## 2. All information sources

| Source | What appears | Lifetime |
|---|---|---|
| **Proximity** (≤30 m) | enemy blip, continuous | while in range |
| **Gunfire** (any shooter) | bright flash blip at shooter position | ~3 s fade |
| **Scan-tower ping** | every tank's position, all radars | every ~10 s while a tower lives; blips fade ~3 s |
| **Missile lock** | player-targeted missile arrow, pulsing red | while alive |
| **All airborne missiles** | orange heading arrows | while alive |
| **Scanner objective** | blue diamond | while standing |
| **Bomber bomb drop** | the bomber blips (it fired — rule 1 applies) | ~3 s fade |
| **Ion storm** | nothing — scope full of static | storm duration |
| **Spawn grace** | fresh spawns invisible | first 2 s |
| **Co-op allies** | friendly blips, always visible, green | continuous |

The bomber stays radar-invisible *until it fires* — you can hunt it by its own bomb drops. Shooting it still costs you your position like any shot: the information trap is now a special case of the universal gunfire rule, which keeps the whole system to one idea.

## 3. What this changes (vs 1980)

The original radar showed every enemy at all times. Ours turns information into a resource:

- **Silence is stealth.** Hold fire and you're a ghost outside 30 m. Ambush play becomes real.
- **Firing is an information cost.** Every shot — including misses, including shots at the bomber — tells everyone where you are for 3 s. Bait shots become a tactic.
- **The scan tower is the strategic objective.** It's the only full-field reveal; killing it blinds the whole arena to gunfire + proximity only.
- **The 30 m ring is a danger sense.** Close-quarters fights are always readable; long-range duels are about earning contacts.
- **The bomber announces itself by bombing.** Its hazard lane is visible on radar while it's actively dropping.

## 4. The scope (presentation, faithful to the cabinet)

- **Circular scope, heading-up**: player at center, radar rotates with hull heading; a small center arrow shows the hull, a thin tick shows turret aim.
- Drawn in the **red HUD band** across the top (the original's colored overlay), score and lives alongside, match clock left of the scope.
- **Alert banner center-top, BELOW the band** (user direction 2026-11-25): `SUPERTANK INBOUND`, `BOMBER RUN`, `VOLCANO RUMBLING — ERUPTION IMMINENT`, `ERUPTION`, `MATCH COMPLETE` — palette-colored, ~4 s fade, max 3 stacked.
- **Line-of-fire sight** (user direction 2026-11-25): a dim trajectory line from the muzzle to the predicted first impact (grid / obstacle / ground), with an impact cross — makes long-range and elevated shots readable before firing. Canvas 2D — light, crisp, no extra three.js scene needed.
- **Faint inner ring marks the 30 m sense radius**, so the player always understands what the radar can and can't see.
- **Radar range ~200 m**; contacts beyond it clamp to the rim (direction preserved, distance lost).
- **Blip taxonomy**: enemy tanks = **varying shades of red** heading triangles
  with a **gun-direction tick** (hull heading + live turret yaw); hunter
  supertank = brightest/larger red triangle; bomber = actual-position flight-heading
  triangle (only while its blip lives); missiles = orange arrows, player locks
  pulsing red; scanner = blue diamond; co-op allies = green.
- **Rotating sweep line** — cosmetic phosphor flavor; blip lifetimes are governed by the information rules, not the sweep.
- Blips flash bright then **decay like phosphor**; ion storm fills the scope with animated static.

## 5. Symmetry: AI knows exactly what you know

**The AI's awareness uses these same rules** (`docs/AI.md` §3): gunfire reveal, 30 m proximity, line-of-sight + last-seen memory, scan pings, storm blindness, spawn grace. If a player can't know it, neither can the AI. One information model, no special cases, no wallhacks. Full LOS scans run at 10 Hz; proximity and gunfire remain per-tick.

## 6. Architecture & multiplayer honesty

- The sim emits awareness events (`fire`, `scanPing`, `stormStart/End`, spawn/grace flags); proximity is a cheap per-tick distance check. The HUD canvas consumes them. All seeded/host-authoritative → identical for everyone.
- **v1 caveat, stated plainly**: clients receive all entity positions in snapshots, so the radar restriction is *presentation-level* — a modified client could peek. The AI is genuinely restricted (it runs host-side). True information hiding (host filters snapshots per player) is a later hardening step, noted here so we never pretend v1 is cheat-proof.

## 7. Tuning knobs (all data)

| Knob | Default |
|---|---|
| Gunfire blip lifetime | 3 s |
| Proximity radius | 30 m |
| Radar display range | 200 m (rim clamp beyond) |
| Scan-tower ping period | 10 s |
| Spawn grace (invisible + untargetable) | 2 s |

## 8. Milestone integration

- **M5** builds the scope, the information rules, and the AI symmetry together (they are one system).
- Scan tower and ion storm interplay arrives with the environment work (M3/M5, see `docs/ENVIRONMENTS.md`).

## 9. Locked rules (2026-11-25)

1. Radar reveals **anything that shoots** (~3 s fading blip). ✔
2. Radar reveals **any enemy within 30 m**, continuously. ✔
3. Scan pings, storms, spawn grace, and co-op ally blips as tabulated above; AI mirrors the same rules. ✔