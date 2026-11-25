# VECTORZONE — Enemy AI: Faithful, but Fair

*Companion to `PLAN.md` §5.4. The original's personalities and escalation, rebuilt with imperfect information and human-like aiming so it belongs in a multiplayer world.*

---

## 1. What "faithful" means (keep these)

From the 1980 original:

1. **The duel.** In solo play, one enemy at a time (plus the periodic bomber flyby). The tension is hunting a single contact on the radar, not mowing crowds.
2. **The escalation ladder.** Score drives the mix: slow tanks → missiles join in → supertanks dominate at high scores.
3. **Distinct personalities.** Slow tank: dumb, direct, sluggish. Missile: fast, committed, scary. Supertank: fast, aggressive, shoots on the move.
4. **The periodic flyby.** A radar-invisible aircraft crosses on a schedule, warbling, worth bonus points. Ours is a bomber rather than the original's harmless saucer (§5.4) — the one deliberate departure.
5. **Enemies come to you.** They spawn at 100–140 m — inside sight range, so
   they acquire you immediately — and approach; obstacles matter; the fight
   happens at medium range in open ground.
6. **No retreat.** Enemies fight to the death (the original's only exception was the 100,000-point easter egg — kept as a stretch homage).

## 2. What "toned down" means (the fairness rules)

The original AI knew your position every frame and aimed perfectly at high levels. Ours must feel like **a decent human opponent who makes mistakes**, not a turret with a CPU:

1. **Imperfect information** — AI sees only what it can see (§3). No wallhacks, ever.
2. **Human-like aiming** — limited turret slew, an error cone, ranging shots that walk onto target (§4).
3. **Reaction delay** — the AI perceives on a tick (200–400 ms), not every frame.
4. **Fire discipline** — cooldowns, line-of-sight checks, alignment checks. No spam.
5. **Same rules as players** — same physics, same block damage, same penetration. Lava, crush, and chain explosions hurt AI too.
6. **The environment blinds them** — ion storms and destroyed scan towers degrade AI spotting exactly like they degrade player radar.

---

## 3. Information model: spotting & memory

**Symmetry rule: AI awareness uses exactly the same information rules as the player radar (`docs/RADAR.md`).** If a player can't know it, neither can the AI.

Each AI tank keeps a small awareness state:

- **Gunfire reveal**: any shot fired blips the shooter's position for ~3 s — to every player's radar and every AI's awareness. Silence is stealth; firing is an information cost.
- **Proximity sense**: enemies within **30 m** are known continuously, even through cover — the same 30 m radius the player radar shows.
- **Line of sight**: voxel DDA raycast (the same one shells use) from turret to target. Indestructible solids block sight; destructible cover blocks until it's gone.
- **Last-seen memory**: when LOS breaks, the AI remembers the target's last position + heading for ~5 s, decaying confidence. It drives to where you *were*, not where you are — classic flank counterplay.
- **Scan-tower pings**: while a scan tower lives, its periodic ping refreshes every AI's knowledge of every tank (including players). Destroy it → AI falls back to gunfire + proximity + eyes.
- **Ion storm**: spotting range and memory refresh degrade for its duration, for AI and players alike.
- **Spawn grace**: fresh spawns (2 s) are not targetable and not radar-visible — fairness for respawned players.

Everything above lives in the shared sim, seeded → identical on host and clients.

## 4. Aiming model: how AI shots miss believably

- **Perception tick**: AI re-evaluates every 200–400 ms (per type). Between ticks it acts on stale data — dodging works.
- **Turret slew limit**: the turret rotates at a finite rate (45–120°/s by type). Fast tanks can out-turn it.
- **Error cone**: each shot deviates within a cone (±2–6° by type). The cone **widens** with target angular velocity and range, so strafing and distance are real defenses.
- **Ranging shots**: the first shot at a fresh contact carries extra bias; follow-ups walk toward the target (bracketing), tightening slightly on hits — capped, never perfect. It *looks* like a human finding the range.
- **Fire discipline**: shoot only when LOS clear + alignment within tolerance + inside range + cooldown elapsed. Cooldowns 1.4–3.5 s by type.
- **Blocked shot policy**: if an indestructible solid blocks LOS → reposition. If *destructible* cover blocks persistently → supertanks shoot through it (they have penetration too; your cover erodes under fire). Slow tanks just reposition.

---

## 5. The roster

### 5.1 Slow tank — the honest duel

- **State machine**: `APPROACH` (seek preferred range, crude 3-ray whisker obstacle avoidance) → `ENGAGE` (strafe/orbit at range, aim with error, disciplined fire) → `REPOSITION` (stuck >1.5 s or LOS blocked >3 s → pick a new offset point) → back to `ENGAGE`.
- Direct, predictable, forgiving. The tutorial opponent that never stops being useful.

### 5.2 Missile — the committed threat

- Spawns far away, flies fast (~2.5× player speed) with a lead solution toward your predicted position, **corrects early then commits** — a late juke beats it.
- Small destructible entity: shoot it down for points. Explodes on impact with anything.
- One at a time, exactly like the original. No homing forever, no terrain-following magic.

### 5.3 Supertank — the aggressive veteran

- Everything the slow tank does, faster: hull ~1.2× player, turret slew 120°/s, tighter cone, shorter cooldown.
- **Flanks**: approach vectors offset from your heading; strafes while firing.
- **Shoots destructible cover** when blocked instead of politely repositioning.
- Still bound by every fairness rule above — beatable by movement, cover play, and focus fire.

### 5.4 The bomber — the flying piñata (all modes)

Less saucer, more bomber — the default in **every** mode. Every **2 minutes**, one spawns at a map edge and flies a **straight line** across the map at fixed altitude (15 m), warbling. It is a **basic aeroplane** in wireframe — fuselage, straight wings, tailplane, fin — not a saucer (user direction 2026-11-25).

- **Bombs deny its flight path** on a cadence (~0.75 s between drops), plus opportunistic drops on any tank — player or AI — beneath it. Each drop is telegraphed by the universal ground ring (≥1.5 s). Dangerous if you're on its line, harmless otherwise.
- **The information trap**: it's worth bonus points, but **shooting it pings your position** — a ~3 s radar blip visible to every player, and a memory refresh for every AI (in solo, the ping feeds the AI). The points piñata that tells everyone where you are.
- A few hits kill it (first hit claims the bonus); otherwise it despawns on exit. **Radar-invisible until it fires** — each bomb drop blips its position under the universal gunfire rule, so you can hunt it by its own bombs.

### 5.5 Tuning knobs (all data, all seeded)

| Knob | Slow tank | Missile | Supertank |
|---|---|---|---|
| Hull speed | 0.5× player | 2.5× player | 1.2× player |
| Turret slew | 45°/s | fixed forward | 120°/s |
| Perception tick | 400 ms | 200 ms | 250 ms |
| Base aim error | ±6° | ±3° lead error | ±2° |
| Fire cooldown | 2.5–3.5 s | one committed shot | 1.4–2.0 s |
| Preferred range | 60–100 m | ram | 40–80 m, flanking |
| Blocked-shot policy | reposition | n/a | shoot destructibles |
| Penetration budget | standard | impact blast | high |

Every knob is per-map/per-mode tunable data — the "tone it down" dial is a config file, not a rewrite.

---

## 6. The spawn director

### Solo (faithful)

- One active enemy at a time; the bomber may overlap.
- Score thresholds shift the mix (tanks → +missiles → supertanks), spawn interval tightens slowly with score.
- Spawns 300–400 m out, outside the player's view, on the radar. The hunt begins.

### Multiplayer deathmatch (always-on ambient pressure)

- **Light tanks are always present**: up to **4 active**, respawning ~10–15 s after death, spawning far from the nearest players. They roam, engage opportunistically, and obey every fairness rule above.
- **Target distribution**: at most **1 light tank engages a given player** at a time; the rest patrol or seek other contacts. Ambient pressure, never a firing squad.
- **Hunter events**: every **2–3 minutes** a single supertank spawns, announced on the HUD, bonus score to whoever kills it. It hunts alongside the light tanks.
- **Bomber** every **2 minutes**: straight-line pass, bombs anything beneath it, and shooting it pings your position to all players and AI (§5.4).
- Ambient cap (0–4), hunter frequency, and respawn delay are host-tunable per room.

### Co-op waves (later mode, same director)

- Sublinear scaling: active enemies = `min(1 + floor((players−1)/2), 3)` — four players face three enemies, not four aimbots.
- Shared lives/score pool; escalation ladder runs on collective score.

---

## 7. Architecture

- **AI is just another command producer.** Each AI entity emits the same `TankCommand {throttle, turn, turretYaw, gunPitch, fire}` a player does, on its perception tick. The sim can't tell AI from human — which is exactly why it all runs host-authoritative with zero extra net code.
- Steering is seek/orbit + whisker raycasts. **No pathfinding** — the arena is open ground, faithful to 1980, and repositioning handles the rest.
- **Debug overlay** (toggle): intent lines, LOS rays, aim cones, memory ghosts. Invaluable for tuning, and a great learning window into how the AI thinks.

## 8. Milestone integration

- **M5** builds the whole roster + solo director + debug overlay (see PLAN §10).
- **M7** carries AI into multiplayer unchanged (it's already sim-side); hunter-event toggle and co-op director come with the mode work.

## 9. Locked choice (2026-11-25)

1. **AI presence in deathmatch**: always-on ambient AI — up to 4 respawning light tanks (max 1 engaging any one player), supertank hunter events every 2–3 min, bombers every 2 min (shooting one reveals your position; the bomber runs identically in all modes). Host-tunable caps and frequencies. ✔