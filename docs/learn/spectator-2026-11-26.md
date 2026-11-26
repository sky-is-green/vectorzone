# Spectator mode — 2026-11-26

- Respawn delay named `RESPAWN_TICKS = 180` (3 s).
- While dead, `livingSpectators()` returns all living tanks except the player.
- Starts on the killing tank when that tank is still alive; otherwise first living.
- ArrowLeft/ArrowRight cycle by tank id with wraparound.
- Third-person chase camera follows the selected tank; HUD shows label, cycle
  hint, and respawn countdown.
- No living targets → wreck camera fallback. Respawn clears spectator state.
- Pure selection/cycle tests (5) + browser flow: death → tank 1 → tank 2 →
  respawn, zero console errors.

117 tests; 151.7 KB gz.