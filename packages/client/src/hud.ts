/**
 * HUD (RADAR.md §4, PLAN §5.5): red-tinted top band with the heading-up radar
 * scope, score/lives/match clock, reticle + reload arc, and the center-top
 * alert banner BELOW the band (user direction 2026-11-25).
 * Canvas 2D — light, crisp, no extra three.js scene.
 */
import type { Known } from '@vectorzone/sim';
import type { Palette } from './palette';

export interface HudState {
  tick: number;
  heading: number;
  turretYaw: number;
  x: number;
  z: number;
  known: Map<number, Known> | undefined;
  superIds: Set<number>;
  storm: boolean;
  score: number;
  lives: number;
  cooldownFrac: number;
  bomberBlip: boolean;
  secondsLeft: number;
  palette: Palette;
  alive: boolean;
}

const RADAR_R = 38;
const RADAR_RANGE = 200;

export function createHud(): {
  canvas: HTMLCanvasElement;
  draw(s: HudState): void;
  alert(text: string): void;
} {
  const canvas = document.createElement('canvas');
  canvas.id = 'hud';
  document.body.append(canvas);
  const ctx = canvas.getContext('2d')!;

  const alerts = document.createElement('div');
  alerts.id = 'alerts';
  document.body.append(alerts);

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  function alert(text: string): void {
    const el = document.createElement('div');
    el.className = 'alert';
    el.textContent = text;
    alerts.append(el);
    setTimeout(() => el.remove(), 4200);
    while (alerts.children.length > 3) alerts.firstChild?.remove();
  }

  function draw(s: HudState): void {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const P = s.palette;
    const hud = P.hud;

    // top band (the original's red fifth)
    ctx.fillStyle = hud + '14';
    ctx.fillRect(0, 0, w, 90);
    ctx.strokeStyle = hud + '88';
    ctx.beginPath();
    ctx.moveTo(0, 90.5);
    ctx.lineTo(w, 90.5);
    ctx.stroke();

    // radar scope, heading-up
    const cx = w / 2;
    const cy = 45;
    ctx.strokeStyle = hud + 'aa';
    ctx.beginPath();
    ctx.arc(cx, cy, RADAR_R, 0, Math.PI * 2);
    ctx.stroke();
    // 30 m proximity ring
    ctx.strokeStyle = hud + '44';
    ctx.beginPath();
    ctx.arc(cx, cy, (RADAR_R * 30) / RADAR_RANGE, 0, Math.PI * 2);
    ctx.stroke();
    // cosmetic sweep
    const sweep = s.tick * 0.06;
    ctx.strokeStyle = hud + '55';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(sweep) * RADAR_R, cy - Math.cos(sweep) * RADAR_R);
    ctx.stroke();
    // own hull arrow (up = forward) + turret aim tick
    ctx.strokeStyle = P.worldCss;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 6);
    ctx.lineTo(cx - 4, cy + 4);
    ctx.lineTo(cx + 4, cy + 4);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = hud;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(s.turretYaw) * 11, cy - Math.cos(s.turretYaw) * 11);
    ctx.stroke();

    if (s.storm) {
      ctx.fillStyle = hud + '66';
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * RADAR_R;
        ctx.fillRect(cx + Math.sin(a) * r, cy - Math.cos(a) * r, 1.5, 1.5);
      }
    } else if (s.known) {
      const ch = Math.cos(s.heading);
      const sh = Math.sin(s.heading);
      for (const [id, k] of s.known) {
        const dx = k.x - s.x;
        const dz = k.z - s.z;
        let rx = (dx * ch - dz * sh) * (RADAR_R / RADAR_RANGE);
        let ry = -(dx * sh + dz * ch) * (RADAR_R / RADAR_RANGE);
        const len = Math.hypot(rx, ry);
        if (len > RADAR_R - 2) {
          rx *= (RADAR_R - 2) / len;
          ry *= (RADAR_R - 2) / len;
        }
        const age = s.tick - k.tick;
        const fade = k.source === 'gunfire' || k.source === 'ping' ? Math.max(0, 1 - age / 180) : 1;
        ctx.fillStyle = P.worldCss + Math.floor(fade * 255).toString(16).padStart(2, '0');
        const r = s.superIds.has(id) ? 3 : 2;
        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, r, 0, Math.PI * 2);
        ctx.fill();
        // contact heading tick (relative to our hull)
        const a = k.heading - s.heading;
        ctx.strokeStyle = P.worldCss + Math.floor(fade * 200).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.moveTo(cx + rx, cy + ry);
        ctx.lineTo(cx + rx + Math.sin(a) * 5, cy + ry - Math.cos(a) * 5);
        ctx.stroke();
      }
      if (s.bomberBlip) {
        ctx.fillStyle = hud;
        ctx.beginPath();
        ctx.moveTo(cx, cy - RADAR_R + 4);
        ctx.lineTo(cx - 3, cy - RADAR_R + 10);
        ctx.lineTo(cx + 3, cy - RADAR_R + 10);
        ctx.closePath();
        ctx.fill();
      }
    }

    // score / lives / clock
    ctx.font = '13px monospace';
    ctx.fillStyle = hud;
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE ${String(s.score).padStart(6, '0')}`, 12, 32);
    ctx.fillText(`LIVES ${s.lives}`, 12, 52);
    const mm = Math.floor(s.secondsLeft / 60);
    const ss = Math.floor(s.secondsLeft % 60);
    ctx.textAlign = 'right';
    ctx.fillText(`T-${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`, cx - RADAR_R - 14, 32);
    ctx.textAlign = 'left';

    // reticle + reload arc + elevation tick
    if (s.alive) {
      const rx = w / 2;
      const ry = h / 2;
      ctx.strokeStyle = P.worldCss + 'cc';
      ctx.beginPath();
      ctx.moveTo(rx - 10, ry);
      ctx.lineTo(rx - 4, ry);
      ctx.moveTo(rx + 4, ry);
      ctx.lineTo(rx + 10, ry);
      ctx.moveTo(rx, ry - 10);
      ctx.lineTo(rx, ry - 4);
      ctx.moveTo(rx, ry + 4);
      ctx.lineTo(rx, ry + 10);
      ctx.stroke();
      ctx.strokeStyle = hud + 'aa';
      ctx.beginPath();
      ctx.arc(rx, ry, 15, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * s.cooldownFrac);
      ctx.stroke();
    }
  }

  return { canvas, draw, alert };
}