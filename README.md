# VECTORZONE

An advanced, browser-native reimagining of Atari's **Battlezone** (1980 arcade / 1995 Lynx lineage), built with **three.js** and TypeScript.

Glowing vector-edge tanks made of destructible blocks — shoot a hole clean through a hull and *see through it*. A living arena: erupting volcanoes that bomb the battlefield, collapsing towers, chain-explosive depots, persistent rubble. Faithful-but-fair enemy AI, an information-limited radar, and zero-cost self-hosted multiplayer.

**Positioning:** a fleshed-out, ultra-light tech demo. A 10-minute experience, not a live service. No textures, no models, no audio files — everything procedural. Target: **< 300 KB gzipped, 60 fps on integrated graphics.**

## Status

**M5 complete** (AI, awareness/radar, bomber, volcano, fences, HUD, solo loop). Building milestone by milestone per `BUILD.md`.

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