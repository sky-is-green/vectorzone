/**
 * HUD (RADAR.md §4): red-tinted top band with heading-up radar, score/lives/
 * clock, reticle/reload/elevation, status blocks, killfeed, hit direction.
 * Canvas 2D — light, crisp, no extra three.js scene.
 */
import type { Known } from '@vectorzone/sim';
import type { Palette } from './palette';
import { projectRadar, relativeHeading } from './radar';

export interface HudMissile {
  id: number;
  x: number;
  z: number;
  heading: number;
  targeted: boolean;
}

export interface HudState {
  tick: number;
  heading: number;
  turretYaw: number;
  x: number;
  z: number;
  known: Map<number, Known> | undefined;
  tankHeadings: Map<number, number>;
  missiles: HudMissile[];
  scanner: { x: number; z: number } | null;
  bomber: { x: number; z: number; heading: number } | null;
  bomberBlip: boolean;
  superIds: Set<number>;
  storm: boolean;
  score: number;
  lives: number;
  cooldownFrac: number;
  secondsLeft: number;
  palette: Palette;
  alive: boolean;
  status: { core: number; tread: number; gun: number; engine: number };
  killfeed: { text: string; born: number }[];
  hitFlash: { angle: number; born: number } | null;
  elevation: number;
  now: number;
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

  function triangle(px: number, py: number, angle: number, size: number, color: string): void {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(px + Math.sin(angle) * size, py - Math.cos(angle) * size);
    ctx.lineTo(px + Math.sin(angle + 2.55) * size * 0.75, py - Math.cos(angle + 2.55) * size * 0.75);
    ctx.lineTo(px + Math.sin(angle - 2.55) * size * 0.75, py - Math.cos(angle - 2.55) * size * 0.75);
    ctx.closePath();
    ctx.fill();
  }

  function draw(s: HudState): void {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const P = s.palette;
    const hud = P.hud;

    // top band
    ctx.fillStyle = hud + '14';
    ctx.fillRect(0, 0, w, 90);
    ctx.strokeStyle = hud + '88';
    ctx.beginPath();
    ctx.moveTo(0, 90.5);
    ctx.lineTo(w, 90.5);
    ctx.stroke();

    const cx = w / 2;
    const cy = 45;
    ctx.strokeStyle = hud + 'aa';
    ctx.beginPath();
    ctx.arc(cx, cy, RADAR_R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = hud + '44';
    ctx.beginPath();
    ctx.arc(cx, cy, (RADAR_R * 30) / RADAR_RANGE, 0, Math.PI * 2);
    ctx.stroke();
    const sweep = s.tick * 0.06;
    ctx.strokeStyle = hud + '55';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(sweep) * RADAR_R, cy - Math.cos(sweep) * RADAR_R);
    ctx.stroke();

    const place = (x: number, z: number) => {
      const p = projectRadar(x - s.x, z - s.z, s.heading, RADAR_RANGE, RADAR_R - 3);
      return { x: cx + p.x, y: cy + p.y };
    };

    if (!s.storm) {
      // Enemy tanks: LIVE hull heading, not the stale awareness snapshot.
      if (s.known) {
        for (const [id, k] of s.known) {
          const p = place(k.x, k.z);
          const age = s.tick - k.tick;
          const fade = k.source === 'gunfire' || k.source === 'ping' ? Math.max(0, 1 - age / 180) : 1;
          const alpha = Math.floor(fade * 255).toString(16).padStart(2, '0');
          const heading = s.tankHeadings.get(id) ?? k.heading;
          triangle(p.x, p.y, relativeHeading(heading, s.heading), s.superIds.has(id) ? 6 : 4.5, P.worldCss + alpha);
        }
      }

      // Scanner objective: blue diamond, always legible while it stands.
      if (s.scanner) {
        const p = place(s.scanner.x, s.scanner.z);
        ctx.fillStyle = '#35e0ff';
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - 4);
        ctx.lineTo(p.x + 4, p.y);
        ctx.lineTo(p.x, p.y + 4);
        ctx.lineTo(p.x - 4, p.y);
        ctx.closePath();
        ctx.fill();
      }

      // Missiles: orange arrows; player-targeted locks pulse larger.
      for (const m of s.missiles) {
        const p = place(m.x, m.z);
        const pulse = m.targeted ? 5 + Math.sin(s.tick * 0.4) * 1.5 : 3.5;
        triangle(p.x, p.y, relativeHeading(m.heading, s.heading), pulse, m.targeted ? '#ff4433' : '#ffaa33');
      }

      // Bomber: actual position + actual flight heading (not a fixed top tick).
      if (s.bomber && s.bomberBlip) {
        const p = place(s.bomber.x, s.bomber.z);
        triangle(p.x, p.y, relativeHeading(s.bomber.heading, s.heading), 6, hud);
      }
    } else {
      ctx.fillStyle = hud + '66';
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * RADAR_R;
        ctx.fillRect(cx + Math.sin(a) * r, cy - Math.cos(a) * r, 1.5, 1.5);
      }
    }

    // own hull arrow + turret tick
    triangle(cx, cy, 0, 6, P.worldCss);
    ctx.strokeStyle = hud;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(s.turretYaw) * 11, cy - Math.cos(s.turretYaw) * 11);
    ctx.stroke();

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

    // reticle + reload + elevation
    if (s.alive) {
      const rx = w / 2;
      const ry = h / 2;
      ctx.strokeStyle = P.worldCss + 'cc';
      ctx.beginPath();
      ctx.moveTo(rx - 10, ry); ctx.lineTo(rx - 4, ry);
      ctx.moveTo(rx + 4, ry); ctx.lineTo(rx + 10, ry);
      ctx.moveTo(rx, ry - 10); ctx.lineTo(rx, ry - 4);
      ctx.moveTo(rx, ry + 4); ctx.lineTo(rx, ry + 10);
      ctx.stroke();
      ctx.strokeStyle = hud + 'aa';
      ctx.beginPath();
      ctx.arc(rx, ry, 15, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * s.cooldownFrac);
      ctx.stroke();
      const ey = ry - s.elevation * 40;
      ctx.strokeStyle = P.worldCss + '88';
      ctx.beginPath();
      ctx.moveTo(rx - 6, ey); ctx.lineTo(rx + 6, ey);
      ctx.stroke();
    }

    // blocky status readout
    const rows: [string, number][] = [
      ['CORE', s.status.core], ['TRD', s.status.tread],
      ['GUN', s.status.gun], ['ENG', s.status.engine],
    ];
    ctx.font = '10px monospace';
    rows.forEach(([label, n], i) => {
      const y = h - 64 + i * 14;
      ctx.fillStyle = hud + 'cc';
      ctx.fillText(label, 12, y + 4);
      ctx.fillStyle = P.worldCss + 'cc';
      for (let k = 0; k < Math.min(n, 12); k++) ctx.fillRect(44 + k * 7, y - 3, 5, 5);
    });

    // killfeed
    ctx.font = '11px monospace';
    ctx.textAlign = 'right';
    s.killfeed.slice(-4).forEach((k, i) => {
      const age = s.now - k.born;
      const a = Math.max(0, 1 - age / 6000);
      ctx.fillStyle = hud + Math.floor(a * 220).toString(16).padStart(2, '0');
      ctx.fillText(k.text, w - 12, h - 60 + i * 14);
    });
    ctx.textAlign = 'left';

    // directional hit flash
    if (s.hitFlash && s.now - s.hitFlash.born < 450) {
      const a = s.hitFlash.angle;
      const fade = 1 - (s.now - s.hitFlash.born) / 450;
      const R = Math.min(w, h) / 2 - 40;
      const px = w / 2 + Math.sin(a) * R;
      const py = h / 2 - Math.cos(a) * R;
      ctx.fillStyle = hud + Math.floor(fade * 255).toString(16).padStart(2, '0');
      ctx.beginPath();
      ctx.moveTo(px + Math.sin(a) * 12, py - Math.cos(a) * 12);
      ctx.lineTo(px + Math.sin(a + 2.5) * 8, py - Math.cos(a + 2.5) * 8);
      ctx.lineTo(px + Math.sin(a - 2.5) * 8, py - Math.cos(a - 2.5) * 8);
      ctx.closePath();
      ctx.fill();
    }
  }

  return { canvas, draw, alert };
}
