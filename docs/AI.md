# VECTORZONE — Enemy AI: Faithful, but Fair

*Companion to `PLAN.md` §5.4. The original's personalities and escalation, rebuilt with imperfect information and human-like aiming so it belongs in a multiplayer world.*

---

## 1. What "faithful" means (keep these)

From the 1980 original:

1. **The living arena.** Four respawning light tanks roam in FFA; exactly one
   is director-designated to keep tracking the player. An occasional supertank
   joins the fight. The original's tank → missile → supertank personalities remain.
2. **The escalation ladder.** Score drives the mix: slow tanks → missiles join in → supertanks dominate at high scores.
3. **Distinct personalities.** Slow tank: dumb, direct, sluggish. Missile: fast, committed, scary. Supertank: fast, aggressive, shoots on the move.
4. **The periodic flyby.** A radar-invisible aircraft crosses on a schedule, warbling, worth bonus points. Ours is a bomber rather than the original's harmless saucer (§5.4) — the one deliberate departure.
5. **Enemies come to you.** They spawn at 100–140 m — inside sight range, so
   they acquire you immediately — and approach; obstacles matter; the fight
   happens at medium range in open ground.
6. **No passive retreat.** Enemies fight to the death; tactical cover-seeking and breaking contact under focused fire are allowed, but they do not disengage from the match.

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
- **Line of sight**: voxel DDA raycast (the same one shells use) from turret to target. All structures block sight until destroyed or opened.
- **Last-seen memory**: when LOS breaks, the AI remembers the target's last position + heading for ~5 s, decaying confidence. It drives to where you *were*, not where you are — classic flank counterplay.
- **Scan-tower pings**: while a scan tower lives, its periodic ping refreshes every AI's knowledge of every tank (including players). Destroy it → AI falls back to gunfire + proximity + eyes.
- **Ion storm**: spotting range and memory refresh degrade for its duration, for AI and players alike.
- **Spawn grace**: fresh spawns (2 s) are not targetable and not radar-visible — fairness for respawned players.

Everything above lives in the shared sim, seeded → identical on host and clients.

## 4. Aiming model: how AI shots miss believably

- **Perception tick**: AI re-evaluates every 200–400 ms (per type). Between ticks it acts on stale data — dodging works.
- **State hysteresis**: current targets are sticky, approach/engage bands have
  separate enter/exit margins, aim points ease toward contacts, and steering
  has dead zones. This prevents fringe wobble and target flicker.
- **Turret slew limit**: the turret rotates at a finite rate (45–120°/s by type). Fast tanks can out-turn it.
- **Hull-first aim**: default aim point is the lower hull (~0.45–0.57 m) with
  downward gun pitch. Deliberate turret shots are rare (10% light / 15% super,
  halved against the player).
- **Error cone**: each shot deviates within a cone (±2–6° by type). The cone **widens** with range and the target's lateral speed, so movement and distance are real defenses.
- **Ranging shots**: the first shot at a fresh contact carries extra bias; follow-ups use the normal cone. Aim leads visible movement by one imperfect shell-flight estimate, assuming the target holds its current heading; turning still beats the prediction.
- **Fire discipline**: shoot only when LOS clear + alignment within tolerance + inside range + cooldown elapsed. Cooldowns 1.4–3.5 s by type.
- **Blocked shot policy**: information without visual confirmation always means investigate, never fire. Supertanks are faster and more accurate, but they do not shoot through unseen cover.

---

## 5. The roster

### 5.1 Slow tank — the honest duel

- **State machine**: `PATROL` (no contacts → waypoint movement + slow turret scan) → `INVESTIGATE` (ping/gunfire/proximity without LOS → drive to last-known position, never fire) → `ENGAGE` (visual confirmation → seek cover, or circle if none; advance/retreat to maintain range; fire while moving) → repeat when target dies/contact expires. `REPOSITION` is stuck recovery only.
- **Retaliation**: a visible recent attacker outranks ordinary contacts for ~6 s. A hidden attacker never pulls the AI away from a visible threat; it is investigated when no visible target exists.
- **Outnumbered**: 2+ **observed incoming shots** within 3 s trigger pressure. The AI locks onto the closest visible attacker with range hysteresis, keeps firing when alignment/LOS allow, and flees independently of target visibility. Cover must block a hull shot while preserving the AI's firing line; otherwise it breaks away from the weighted attacker positions.
- Direct, predictable, forgiving. The tutorial opponent that never stops being useful.

### 5.2 Missile — the airborne committed threat

- Spawns at the arena edge **18–24 m above ground**, visibly missile-shaped
  (body, nose, swept fins, exhaust), with a fog-free orange core, camera-facing
  vector diamond, and exhaust trail so it remains readable at the horizon.
- **CRUISE mode** flies high with gentle horizontal course corrections. Within
  **70–80 m horizontal range**, it enters **ATTACK mode** and begins terminal
  3-D guidance. All missiles acquire in range; the agile/lazy variation changes
  turn rate, not whether a lock can ever track.
- Initial cruise is horizontal, so a lock does not dive immediately and fly
  over the target. Lifetime is distance-based (**20–50 s**) with a 280 m safety
  boundary; swept 3-D collision prevents a descending missile from passing over
  its target.
- Target selection keeps the existing **55% player-lock chance**. The remaining
  weighted pool favors supertanks and the bomber over light tanks, creating
  point-defense spectacles without removing player pressure.
- **Defense volleys**: while a bomber lives, its first 3–5 smaller/faster
  missiles launch after 6 s, then every 9–14 s. Supertanks receive 3–4 after
  8 s, then every 12–18 s. Volleys launch from a 90–140 m stand-off ring and use
  separate active slots from normal player-pressure missiles.
- A player-targeted missile emits a **MISSILE LOCK** alert and is drawn on the
  minimap as a pulsing red arrow. All live missiles appear as orange arrows whose
  heading uses the same camera-aligned projection as their position.
- Shoot down for points; ground/tank impact produces a real explosion.

### 5.3 Supertank — the aggressive veteran

- Everything the slow tank does, faster: hull ~1.2× player, turret slew 120°/s, tighter cone, shorter cooldown.
- **Flanks**: approach vectors offset from your heading; seeks cover or circles while firing.
- **Faster investigation and engagement**, but still no firing without visual confirmation.
- **Point defense**: close missiles targeting a supertank trigger machine-gun
  tracer fire and a guaranteed intercept before impact, including the small/fast
  defense volleys. The first three tracer rounds deliberately miss with
  decreasing error; the fourth uses the corrected firing solution. There is no
  muzzle flare, and the bursts do not create radar reveals or self-damage.
- More aggressive advance/cover/orbit timing; same human-like aim limits.
- Still bound by every fairness rule above — beatable by movement, cover play, and focus fire.

### 5.4 The bomber — the flying piñata (all modes)

Less saucer, more bomber — the default in **every** mode. Every **2 minutes**, one spawns on the arena edge on a line **through its target tank** at fixed altitude (15 m), warbling. It is a **basic aeroplane** in wireframe — fuselage, straight wings, tailplane, fin.

- **Minor tracking corrections** (~0.15 rad/s maximum) follow target movement,
  but remain slow enough for the target to evade.
- **Generous wings hitbox**: 5.5 m horizontal / 3.5 m vertical, not the thin
  fuselage, so it is actually possible to shoot.
- **Bombs deny its flight path** on a cadence (~0.75 s between drops), plus opportunistic drops on any tank beneath it. Each drop is telegraphed by the universal ground ring (≥1.5 s).
- **The information trap**: it's worth bonus points, but **shooting it pings your position** — a ~3 s radar blip visible to every player, and a memory refresh for every AI (in solo, the ping feeds the AI). The points piñata that tells everyone where you are.
- **Point defense**: missiles targeting the bomber trigger earlier, longer-range
  machine-gun tracer fire than the supertank's. The first three rounds miss
  wide and walk onto the target; the fourth corrected tracer intercepts. The
  bomber always wins, including 3–5 missile defense volleys during a bombing
  run. There is no muzzle flare, and the tracers do not reveal it on radar.
- A few hits kill it (first hit claims the bonus); otherwise it despawns on exit. **Radar-invisible until it fires** — each bomb drop blips its position under the universal gunfire rule, so you can hunt it by its own bombs.

### 5.5 Turret loss → 10-second self-destruct

When all gun blocks are destroyed, the tank is automatically doomed:

- A **10-second countdown** starts (HUD warning for the player).
- AI tanks charge their nearest known target during countdown; the player can
  drive into an enemy and sacrifice the tank.
- At zero, the tank detonates with a **4.5 m / 6-damage** blast that hurts every
  tank nearby, friend or foe, and the wreck shatters into chunks.

### 5.6 Tuning knobs (all data, all seeded)

| Knob | Slow tank | Missile | Supertank |
|---|---|---|---|
| Hull speed | 0.5× player | 14–18 m/s, airborne | 1.2× player |
| Turret slew | 45°/s | 0.45 rad/s guidance | 120°/s |
| Perception tick | 400 ms | continuous, limited turn | 250 ms |
| Base aim error | ±6° | ±3° lead error | ±2° |
| Fire cooldown | 2.5–3.5 s | one committed shot | 1.4–2.0 s |
| Preferred range | 60–100 m | dive from 11–16 m | 40–80 m, flanking |
| Blocked-shot policy | investigate | n/a | investigate |
| Penetration budget | standard | impact blast | high |
| Turret-shot chance | 10% (5% vs player) | n/a | 15% (7.5% vs player) |

Every knob is per-map/per-mode tunable data — the "tone it down" dial is a config file, not a rewrite.

---

## 6. The spawn director

### Solo / deathmatch (current)

- **Four light tanks are always maintained**, respawning on a staggered cadence.
- **FFA**: non-tracker AI prefer other tanks when known. Exactly one living AI
  is the designated **player tracker**, so the player always has pressure.
- **Supertank hunter**: first at ~2.5 minutes, then every 2–3 minutes; HUD alert
  and bonus score for the player kill.
- **Missiles**: every 25–55 s, max three active; some target the player with a
  lock alert and minimap tracking.
- **Bomber** every **2 minutes**: targeted path, minor corrections, generous
  hitbox, path-denial bombs.

### Co-op waves (later mode, same director)

- Sublinear scaling: active enemies = `min(1 + floor((players−1)/2), 3)` — four players face three enemies, not four aimbots.
- Shared lives/score pool; escalation ladder runs on collective score.

---

## 7. Architecture

- **AI is just another command producer.** Each AI entity emits the same `TankCommand {throttle, turn, turretYaw, gunPitch, fire}` a player does, on its perception tick. The sim can't tell AI from human — which is exactly why it all runs host-authoritative with zero extra net code.
- **Steering** is seek/orbit plus lightweight perimeter sampling for cover. There is no full pathfinding yet; local obstacle navigation remains a known limitation. Combat stuck detection triggers a short escape move without dropping engage mode.
- **Pressure memory** records only shots that hit or pass near a tank, per attacker. AI never reads another brain's target choice, preserving the shared imperfect-information rule.
- **Debug overlay** (toggle): intent lines, LOS rays, aim cones, memory ghosts. Invaluable for tuning, and a great learning window into how the AI thinks.

## 8. Milestone integration

- **M5** builds the whole roster + solo director + debug overlay (see PLAN §10).
- **M7** carries AI into multiplayer unchanged (it's already sim-side); hunter-event toggle and co-op director come with the mode work.

## 9. Locked choice (2026-11-25)

1. **AI presence**: four respawning light tanks in FFA, exactly one player tracker, supertank hunter every 2–3 min, airborne missiles every 25–55 s, bomber every 2 min. ✔