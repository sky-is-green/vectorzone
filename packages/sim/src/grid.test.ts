import { describe, expect, it } from 'vitest';
import {
  countBlocks,
  countType,
  createGrid,
  getCell,
  inBounds,
  parseLayout,
  setCell,
} from './grid';

describe('block grid', () => {
  it('indexes and bounds-checks cells', () => {
    const g = createGrid({ x: 3, y: 2, z: 4 });
    expect(getCell(g, 0, 0, 0)).toBeNull();
    setCell(g, 1, 1, 2, { type: 'hull', hp: 3 });
    expect(getCell(g, 1, 1, 2)?.type).toBe('hull');
    expect(getCell(g, 3, 0, 0)).toBeNull(); // out of bounds reads as empty
    expect(inBounds(g, -1, 0, 0)).toBe(false);
    expect(inBounds(g, 2, 1, 3)).toBe(true);
  });

  it('rev increments on mutation (renderer rebuild trigger)', () => {
    const g = createGrid({ x: 2, y: 2, z: 2 });
    const r0 = g.rev;
    setCell(g, 0, 0, 0, { type: 'hull', hp: 3 });
    setCell(g, 0, 0, 0, null);
    expect(g.rev).toBe(r0 + 2);
  });

  it('parses hand-authored layers', () => {
    const g = parseLayout([
      ['T.T', 'TTT'],
      ['.C.', '...'],
    ]);
    expect(g.size).toEqual({ x: 3, y: 2, z: 2 });
    expect(countBlocks(g)).toBe(6);
    expect(countType(g, 'tread')).toBe(5);
    expect(getCell(g, 1, 1, 0)?.type).toBe('core');
  });
});