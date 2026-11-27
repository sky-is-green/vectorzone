/** Pure radar projection helpers — testable orientation math for the HUD. */
export interface RadarPoint { x: number; y: number; clamped: boolean }

export function projectRadar(
  dx: number,
  dz: number,
  heading: number,
  range = 200,
  radius = 38,
): RadarPoint {
  const c = Math.cos(heading);
  const s = Math.sin(heading);
  let x = (-dx * c + dz * s) * (radius / range);
  let y = -(dx * s + dz * c) * (radius / range);
  const len = Math.hypot(x, y);
  const clamped = len > radius;
  if (clamped) {
    x *= radius / len;
    y *= radius / len;
  }
  return { x, y, clamped };
}

/** Heading relative to own hull, radians; 0 = pointing up/forward. */
export function relativeHeading(heading: number, ownHeading: number): number {
  return heading - ownHeading;
}

export function headingFromDir(x: number, z: number): number {
  return Math.atan2(x, z);
}

/** Radar pointer/tick endpoint relative to scope centre; 0 = up. */
export function radarPointer(yaw: number, length: number): { x: number; y: number } {
  return { x: Math.sin(yaw) * length, y: -Math.cos(yaw) * length };
}

/** Camera-aligned radar yaw: 0 = up, positive = screen-right. World yaw is
 * positive-left because the camera looks along +Z, so the signs oppose. */
export function radarDirectionYaw(worldYaw: number, ownHeading = 0): number {
  return ownHeading - worldYaw;
}

/** Expanding HUD pulse progress, or null outside its lifetime. */
export function pulseProgress(now: number, startedAt: number, duration = 1200): number | null {
  const age = now - startedAt;
  return age >= 0 && age < duration ? age / duration : null;
}

/** Bearing from own hull to a world point, for heading-up radar markers. */
export function radarBearing(dx: number, dz: number, ownHeading: number): number {
  return ownHeading - Math.atan2(dx, dz);
}
