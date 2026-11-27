export type DeathCamStage = 'explosion' | 'killer' | 'spectator';

export interface DeathCamState {
  stage: DeathCamStage;
  startedAt: number;
  pos: [number, number, number];
  killerId: number | null;
  bomberId: number | null;
}

export const DEATH_EXPLOSION_MS = 900;
export const DEATH_KILLER_MS = 1400;
export const DEATH_SOLO_FOCUS_MS = 2200;

export function beginDeathCam(
  now: number,
  pos: [number, number, number],
  killerId: number | null,
  bomberId: number | null,
): DeathCamState {
  return { stage: 'explosion', startedAt: now, pos: [...pos], killerId, bomberId };
}

/** Advance the client-only death sequence. `killerAvailable` means the named
 * tank/bomber is still alive and can be shown. */
export function updateDeathCam(
  state: DeathCamState,
  now: number,
  killerAvailable: boolean,
): DeathCamState {
  const elapsed = now - state.startedAt;
  if (state.stage === 'explosion') {
    const hasKiller = state.killerId !== null && killerAvailable;
    const focusMs = hasKiller ? DEATH_EXPLOSION_MS : DEATH_SOLO_FOCUS_MS;
    if (elapsed >= focusMs) {
      return {
        ...state,
        stage: hasKiller ? 'killer' : 'spectator',
        startedAt: now,
      };
    }
  } else if (state.stage === 'killer') {
    if (!killerAvailable || elapsed >= DEATH_KILLER_MS) {
      return { ...state, stage: 'spectator', startedAt: now };
    }
  }
  return state;
}
