/**
 * Keyboard → TankCommand (locked controls, PLAN §14.3):
 * WASD hull · arrows turret (←/→ yaw, ↑/↓ elevation) · space fire.
 * The sim only ever sees commands — AI and net produce the same shape.
 */
import { neutralCommand, type TankCommand } from '@vectorzone/sim';

/** Positive world turret yaw turns right (+X), so left/right map inverted. */
export function turretAxisFromKeys(left: boolean, right: boolean): number {
  return (right ? 1 : 0) - (left ? 1 : 0);
}

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
  c.turretYaw = turretAxisFromKeys(HELD.has('ArrowLeft'), HELD.has('ArrowRight'));
  c.gunPitch = (HELD.has('ArrowUp') ? 1 : 0) - (HELD.has('ArrowDown') ? 1 : 0);
  c.fire = HELD.has('Space');
  // gamepad: left stick drive, right stick aim, A/RT fire (M8)
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  for (const p of pads) {
    if (!p) continue;
    const dz = (v: number) => (Math.abs(v) > 0.15 ? v : 0);
    const lx = dz(p.axes[0] ?? 0);
    const ly = dz(p.axes[1] ?? 0);
    const rx = dz(p.axes[2] ?? 0);
    const ry = dz(p.axes[3] ?? 0);
    const fire = !!p.buttons[0]?.pressed || !!p.buttons[7]?.pressed;
    if (lx || ly || rx || ry || fire) {
      c.throttle = -ly;
      c.turn = -lx;
      // world yaw + rotates +Z toward +X (right); stick X follows that convention
      c.turretYaw = rx;
      c.gunPitch = -ry;
      c.fire = fire;
      break;
    }
  }
  return c;
}