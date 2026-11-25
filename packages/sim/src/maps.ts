/**
 * Arena presets (ENVIRONMENTS §6): maps are data — placements, fences, and a
 * sky/event profile per map. M8.
 */
import { SOLID_PLACEMENTS } from './arena';
import type { StructureKind } from './structure';
import type { Fence } from './fence';

export type MapId = 'classic' | 'outpost' | 'ruins' | 'stormfield';

export interface Placement {
  kind: StructureKind;
  x: number;
  z: number;
}

export interface SkyProfile {
  storm: boolean;
  meteors: boolean;
  volcano: boolean;
}

export interface MapDef {
  id: MapId;
  label: string;
  placements: Placement[];
  fences: Fence[];
  sky: SkyProfile;
}

const solids = (filter?: (p: { kind: string; x: number; z: number }) => boolean): Placement[] =>
  SOLID_PLACEMENTS.filter((p) => !filter || filter(p)).map((p) => ({ kind: p.kind, x: p.x, z: p.z }));

const fence = (id: number, ax: number, az: number, bx: number, bz: number, pa: number, pb: number): Fence =>
  ({ id, ax, az, bx, bz, pylonA: pa, pylonB: pb, height: 2.4 });

export const MAPS: Record<MapId, MapDef> = {
  classic: {
    id: 'classic',
    label: 'CLASSIC',
    placements: [
      { kind: 'wall', x: -20, z: -35 },
      { kind: 'wall', x: 35, z: 55 },
      { kind: 'bunker', x: -55, z: 40 },
      { kind: 'tower', x: 70, z: -70 },
      { kind: 'depot', x: 15, z: -55 },
      { kind: 'scan', x: -40, z: -80 },
      { kind: 'pylon', x: -6, z: 70 },
      { kind: 'pylon', x: 6, z: 70 },
      ...solids(),
    ],
    fences: [fence(300, -6, 70, 6, 70, 106, 107)],
    sky: { storm: false, meteors: false, volcano: true },
  },
  outpost: {
    id: 'outpost',
    label: 'OUTPOST',
    placements: [
      { kind: 'wall', x: -30, z: -20 },
      { kind: 'wall', x: 30, z: -20 },
      { kind: 'wall', x: -30, z: 20 },
      { kind: 'wall', x: 30, z: 20 },
      { kind: 'bunker', x: 0, z: -45 },
      { kind: 'bunker', x: 0, z: 45 },
      { kind: 'depot', x: -45, z: 0 },
      { kind: 'depot', x: 45, z: 0 },
      { kind: 'tower', x: -60, z: -60 },
      { kind: 'tower', x: 60, z: 60 },
      { kind: 'scan', x: 0, z: 0 },
      { kind: 'pylon', x: -12, z: 70 },
      { kind: 'pylon', x: 12, z: 70 },
      ...solids((p) => Math.abs(p.x) > 80 || Math.abs(p.z) > 80),
    ],
    fences: [fence(300, -12, 70, 12, 70, 111, 112)],
    sky: { storm: false, meteors: false, volcano: true },
  },
  ruins: {
    id: 'ruins',
    label: 'RUINS',
    placements: [
      { kind: 'wall', x: -15, z: -15 },
      { kind: 'wall', x: 15, z: -15 },
      { kind: 'wall', x: -15, z: 15 },
      { kind: 'wall', x: 15, z: 15 },
      { kind: 'bunker', x: -40, z: -40 },
      { kind: 'bunker', x: 40, z: -40 },
      { kind: 'bunker', x: -40, z: 40 },
      { kind: 'bunker', x: 40, z: 40 },
      { kind: 'tower', x: 0, z: -60 },
      { kind: 'tower', x: 0, z: 60 },
      { kind: 'tower', x: -60, z: 0 },
      { kind: 'tower', x: 60, z: 0 },
      { kind: 'depot', x: -70, z: -70 },
      { kind: 'depot', x: 70, z: 70 },
      { kind: 'scan', x: -80, z: 20 },
      ...solids((p) => Math.abs(p.x) > 90 || Math.abs(p.z) > 90),
    ],
    fences: [],
    sky: { storm: false, meteors: false, volcano: true },
  },
  stormfield: {
    id: 'stormfield',
    label: 'STORMFIELD',
    placements: [
      { kind: 'rocks', x: -20, z: -20 },
      { kind: 'rocks', x: 25, z: 10 },
      { kind: 'rocks', x: -10, z: 40 },
      { kind: 'rocks', x: 50, z: -40 },
      { kind: 'pylon', x: -20, z: 60 },
      { kind: 'pylon', x: 20, z: 60 },
      { kind: 'pylon', x: -60, z: -30 },
      { kind: 'pylon', x: -60, z: 10 },
      { kind: 'scan', x: 70, z: 30 },
      ...solids((p) => p.kind === 'pyramid'),
    ],
    fences: [
      fence(300, -20, 60, 20, 60, 104, 105),
      fence(301, -60, -30, -60, 10, 106, 107),
    ],
    sky: { storm: true, meteors: true, volcano: true },
  },
};

export const MAP_IDS: MapId[] = ['classic', 'outpost', 'ruins', 'stormfield'];