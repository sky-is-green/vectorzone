/**
 * Phosphor palettes (PLAN §4.3, NEW-ERA A4). The original monitor was B&W
 * with a colored overlay, so alternate phosphors are authentic — and they
 * double as colorblind-safe options. In B&W mode hazards go white: the
 * telegraph rings/shapes, not hue, carry the danger signal there.
 */
export interface Palette {
  id: string;
  label: string;
  world: number;
  worldCss: string;
  dim: number;
  grid: number;
  gridCenter: number;
  rubble: number;
  moon: number;
  hud: string;
  hazard: [number, number, number];
}

export const PALETTES: Palette[] = [
  {
    id: 'green', label: 'P1 green',
    world: 0x39ff6b, worldCss: '#39ff6b', dim: 0x1d7a3a, grid: 0x0a3319, gridCenter: 0x0f4d24,
    rubble: 0x1d7a3a, moon: 0x9fffc0, hud: '#ff4433', hazard: [1, 0.35, 0.1],
  },
  {
    id: 'amber', label: 'P3 amber',
    world: 0xffb000, worldCss: '#ffb000', dim: 0x8a5200, grid: 0x332000, gridCenter: 0x4d3000,
    rubble: 0x8a5200, moon: 0xffe0a0, hud: '#ffcc55', hazard: [1, 0.25, 0.1],
  },
  {
    id: 'cyan', label: 'P4 cyan',
    world: 0x35e0ff, worldCss: '#35e0ff', dim: 0x1d6a7a, grid: 0x0a2833, gridCenter: 0x0f3a4d,
    rubble: 0x1d6a7a, moon: 0xa0f0ff, hud: '#77ffff', hazard: [1, 0.35, 0.1],
  },
  {
    id: 'bw', label: 'B&W',
    world: 0xffffff, worldCss: '#ffffff', dim: 0x999999, grid: 0x222222, gridCenter: 0x333333,
    rubble: 0x999999, moon: 0xffffff, hud: '#ffffff', hazard: [1, 1, 1],
  },
];