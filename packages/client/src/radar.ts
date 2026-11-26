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
  let x = (dx * c - dz * s) * (radius / range);
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