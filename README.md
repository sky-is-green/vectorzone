# VECTORZONE

An advanced, browser-native reimagining of Atari's **Battlezone** (1980 arcade / 1995 Lynx lineage), built with **three.js** and TypeScript.

Glowing vector-edge tanks made of destructible blocks — shoot a hole clean through a hull and *see through it*. A living arena: erupting volcanoes that bomb the battlefield, collapsing towers, chain-explosive depots, persistent rubble. Faithful-but-fair enemy AI, an information-limited radar, and zero-cost self-hosted multiplayer.

**Positioning:** a fleshed-out, ultra-light tech demo. A 10-minute experience, not a live service. No textures, no models, no audio files — everything procedural. Target: **< 300 KB gzipped, 60 fps on integrated graphics.**

## Play it

**Live: https://sky-is-green.github.io/vectorzone/** (static client, zero install)

| Input | Action |
|---|---|
| W / S | throttle forward / reverse |
| A / D | rotate hull |
| ← / → | rotate turret |
| ↑ / ↓ | gun elevation |
| Space | fire |
| C | periscope / chase camera |
| X | AI debug overlay |
| R | restart (after match end) |
| Gamepad | left stick drive, right stick aim, A/RT fire |

Everything is destructible: ram it, shoot it, undermine it. Watch the radar —
it only shows what fires or comes within 30 m. The volcano erupts in the final
two minutes of a 10-minute match. Settings (top right): phosphor palette,
wireframe mode, safe mode, bloom/CRT, shake, FOV, resolution, arena.

## Status

**M8 complete** (polish + deployed to GitHub Pages). Remaining: M6 sound, M7 multiplayer (last, per user sequence).

## Documents

| File | What it is |
|---|---|
| [`BUILD.md`](BUILD.md) | **Build handbook** — the executable spec: milestones, acceptance criteria, verification gates. Start here if you're building. |
| [`PLAN.md`](PLAN.md) | Master blueprint: vision, stack, rendering, block tanks, sim architecture, multiplayer, controls, roadmap, locked decisions. |
| [`docs/ENVIRONMENTS.md`](docs/ENVIRONMENTS.md) | The living arena: volcano state machine, destructible structures, reactive props, rubble, arena presets. |
| [`docs/AI.md`](docs/AI.md) | Enemy AI: faithful personalities, fairness rules, the bomber, spawn directors. |
| [`docs/RADAR.md`](docs/RADAR.md) | Radar & awareness: gunfire reveal, 30 m proximity, AI symmetry. |
| [`docs/NEW-ERA.md`](docs/NEW-ERA.md) | Gap resolutions (match rules, HUD, settings), tech scorecard, PixelQR integration. |

## For an implementing agent

Read `BUILD.md` first. It contains the read order, the non-negotiable invariants, the per-milestone acceptance criteria, and the verification loop you must run before advancing. The design docs are the source of truth for *what*; `BUILD.md` is the source of truth for *how to proceed and how to check your work*.

## Controls

WASD drive · arrow keys aim turret (←/→ yaw, ↑/↓ elevation) · space fire.

## License

Not yet chosen. Battlezone is an Atari/Rebellion property; this is a non-commercial fan project with an original name and no Atari assets or code.