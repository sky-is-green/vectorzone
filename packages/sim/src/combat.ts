/**
 * Combat data (PLAN §5.2, BUILD M3): one tunable file. A shell carries a
 * penetration budget; entering a block costs budget by type. Enough budget
 * on a side hit = a tunnel clean through — blow-through.
 */
import type { BlockType } from './grid';
import type { V3 } from './raycast';

export const SHELL_SPEED = 120; // m/s
export const SHELL_COOLDOWN = 0.9; // s
export const SHELL_BUDGET = 6; // penetration units
export const SPLASH_DAMAGE = 1; // hp to 6-neighbours of a destroyed cell
export const EXPLOSION_RADIUS = 2.5; // m
export const EXPLOSION_DAMAGE = 3;
export const RUBBLE_CAP = 400;
export const CHUNK_SETTLE_TICKS = 72; // 1.2 s of tumble before settling
export const MATCH_TICKS = 36000; // 10 minutes
export const VOLCANO_FINAL_TICKS = 7200; // erupts only in the final 2 minutes
export const BOMB_DROP_TICKS = 45; // bomber denies its flight path

export const PEN_COST: Record<BlockType, number> = {
  hull: 2,
  tread: 2,
  gun: 1.5,
  engine: 2,
  core: 3,
  ammo: 1,
};

export interface Shell {
  id: number;
  owner: number;
  pos: V3;
  dir: V3;
  budget: number;
  alive: boolean;
}

export type SimEvent =
  | { kind: 'fire'; pos: V3; dir: V3; owner: number }
  | { kind: 'shellImpact'; pos: V3 }
  | { kind: 'blockDestroyed'; pos: V3; by: number | null }
  | { kind: 'explosion'; pos: V3; radius: number }
  | { kind: 'chunkDetached'; id: number }
  | { kind: 'tankKilled'; id: number; pos: V3; by: number | null }
  | { kind: 'kill'; id: number; what: 'missile' | 'bomber'; by: number | null }
  | { kind: 'scanPing' }
  | { kind: 'bomberInbound'; pos: V3 }
  | { kind: 'superSpawn'; pos: V3 }
  | { kind: 'volcanoRumble' }
  | { kind: 'volcanoErupt' }
  | { kind: 'ionStorm' }
  | { kind: 'meteorInbound'; pos: V3 }
  | { kind: 'matchEnd' }
  | { kind: 'bombTelegraph'; pos: V3 }
  | { kind: 'rubbleChanged' };