import type { Tank } from '@vectorzone/sim';

/** Living tanks available to watch, excluding the dead player. */
export function livingSpectators(tanks: Tank[], playerId = 0): Tank[] {
  return tanks.filter((t) => t.id !== playerId && t.alive).sort((a, b) => a.id - b.id);
}

/** Cycle by tank id so a changing spectator list doesn't jump unexpectedly. */
export function nextSpectatorId(
  tanks: Tank[],
  currentId: number | null,
  direction: -1 | 1,
): number | null {
  if (tanks.length === 0) return null;
  const index = tanks.findIndex((t) => t.id === currentId);
  const next = index < 0 ? 0 : (index + direction + tanks.length) % tanks.length;
  return tanks[next].id;
}

export function spectatorLabel(tank: Tank, kind?: string): string {
  return kind === 'super' ? 'SUPERTANK' : `LIGHT TANK ${tank.id}`;
}