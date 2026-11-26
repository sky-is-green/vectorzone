/** Distance-based feedback helpers. Explosions shake only when close. */
export function explosionShake(distance: number, radius: number, source: string): number {
  if (source === 'airburst') return 0;
  const reach = Math.max(14, radius * 3.5);
  if (distance >= reach) return 0;
  const falloff = 1 - distance / reach;
  return Math.min(0.85, falloff * (0.25 + radius * 0.07));
}

export function impactShake(distance: number): number {
  return distance < 5 ? (1 - distance / 5) * 0.18 : 0;
}