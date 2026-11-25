/**
 * Keyboard → TankCommand (locked controls, PLAN §14.3):
 * WASD hull · arrows turret (←/→ yaw, ↑/↓ elevation) · space fire.
 * The sim only ever sees commands — AI and net produce the same shape.
 */
import { neutralCommand, type TankCommand } from '@vectorzone/sim';

const HELD = new Set<string>();
const CAPTURED = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD',
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
  'Space',
]);

function onDown(e: KeyboardEvent): void {
  if (CAPTURED.has(e.code)) {
    e.preventDefault();
    HELD.add(e.code);
  }
}
function onUp(e: KeyboardEvent): void {
  HELD.delete(e.code);
}
function onBlur(): void {
  HELD.clear();
}

export function bindInput(): void {
  window.addEventListener('keydown', onDown);
  window.addEventListener('keyup', onUp);
  window.addEventListener('blur', onBlur);
}

export function readCommand(): TankCommand {
  const c = neutralCommand();
  c.throttle = (HELD.has('KeyW') ? 1 : 0) - (HELD.has('KeyS') ? 1 : 0);
  c.turn = (HELD.has('KeyA') ? 1 : 0) - (HELD.has('KeyD') ? 1 : 0);
  c.turretYaw = (HELD.has('ArrowLeft') ? 1 : 0) - (HELD.has('ArrowRight') ? 1 : 0);
  c.gunPitch = (HELD.has('ArrowUp') ? 1 : 0) - (HELD.has('ArrowDown') ? 1 : 0);
  c.fire = HELD.has('Space');
  return c;
}