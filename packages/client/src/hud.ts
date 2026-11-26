/**
 * HUD (RADAR.md §4): red-tinted top band with heading-up radar, score/lives/
 * clock, reticle/reload/elevation, status blocks, killfeed, hit direction.
 * Canvas 2D — light, crisp, no extra three.js scene.
 */
import type { Known } from '@vectorzone/sim';
import type { Palette } from './palette';
import { projectRadar, radarDisplayYaw, radarPointer, relativeHeading } from './radar';

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
  tankTurrets: Map<number, number>;
  missiles: HudMissile[];
  scanner: { x: number; z: number } | null;
  scanPulse: number | null; // 0..1 progress, null when inactive
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
  threatBearing: { angle: number; progress: number } | null;
  elevation: number;
  selfDestructSeconds: number | null;
  spectator: { label: string; secondsLeft: number } | null;
  respawnReady: boolean;
  now: number;
}

const RADAR_R = 38;
const RADAR_RANGE = 200;
const ENEMY_REDS = [0xff4433, 0xff6b3d, 0xc62828, 0xff8a65, 0xb71c1c];

/** Enemy blips are shades of red, never phosphate green. */
export function enemyColor(id: number, alpha = 255, superTank = false): string {
  const base = superTank ? 0xff2d2d : ENEMY_REDS[Math.abs(id) % ENEMY_REDS.length];
  return '#' + base.toString(16).padStart(6, '0') + Math.max(0, Math.min(255, alpha)).toString(16).padStart(2, '0');
}

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
    // turret-aligned pointer (was a cosmetic time-driven sweep that appeared
    // to move opposite the gun)
    const sweep = radarDisplayYaw(s.turretYaw);
    const pointer = radarPointer(sweep, RADAR_R);
    ctx.strokeStyle = hud + '55';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + pointer.x, cy + pointer.y);
    ctx.stroke();

    const place = (x: number, z: number) => {
      const p = projectRadar(x - s.x, z - s.z, radarDisplayYaw(s.heading), RADAR_RANGE, RADAR_R - 3);
      return { x: cx + p.x, y: cy + p.y };
    };

    if (!s.storm) {
      // Enemy tanks: LIVE hull heading, not the stale awareness snapshot.
      if (s.known) {
        for (const [id, k] of s.known) {
          const p = place(k.x, k.z);
          const age = s.tick - k.tick;
          const fade = k.source === 'gunfire' || k.source === 'ping' ? Math.max(0, 1 - age / 180) : 1;
          const alpha = Math.floor(fade * 255);
          const isSuper = s.superIds.has(id);
          const color = enemyColor(id, alpha, isSuper);
          const heading = s.tankHeadings.get(id) ?? k.heading;
          const turretYaw = s.tankTurrets.get(id) ?? k.turretYaw ?? 0;
          const displayHeading = radarDisplayYaw(heading);
          const ownDisplayHeading = radarDisplayYaw(s.heading);
          triangle(p.x, p.y, relativeHeading(displayHeading, ownDisplayHeading), isSuper ? 6 : 4.5, color);
          // turret heading tick: the gun points at hull heading + turret yaw
          const gunAngle = relativeHeading(
            radarDisplayYaw(heading + turretYaw),
            ownDisplayHeading,
          );
          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + Math.sin(gunAngle) * 8, p.y - Math.cos(gunAngle) * 8);
          ctx.stroke();
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
        if (s.scanPulse !== null) {
          const progress = Math.max(0, Math.min(1, s.scanPulse));
          const radius = 4 + progress * 22;
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, RADAR_R, 0, Math.PI * 2);
          ctx.clip();
          ctx.strokeStyle = `rgba(53,224,255,${(1 - progress).toFixed(3)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Missiles: orange arrows; player-targeted locks pulse larger.
      for (const m of s.missiles) {
        const p = place(m.x, m.z);
        const pulse = m.targeted ? 5 + Math.sin(s.tick * 0.4) * 1.5 : 3.5;
        triangle(p.x, p.y, relativeHeading(radarDisplayYaw(m.heading), radarDisplayYaw(s.heading)), pulse, m.targeted ? '#ff4433' : '#ffaa33');
      }

      // Bomber: actual position + actual flight heading (not a fixed top tick).
      if (s.bomber && s.bomberBlip) {
        const p = place(s.bomber.x, s.bomber.z);
        triangle(p.x, p.y, relativeHeading(radarDisplayYaw(s.bomber.heading), radarDisplayYaw(s.heading)), 6, hud);
      }
    } else {
      ctx.fillStyle = hud + '66';
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * RADAR_R;
        ctx.fillRect(cx + Math.sin(a) * r, cy - Math.cos(a) * r, 1.5, 1.5);
      }
    }

    // incoming-damage bearing: red arrow on the radar rim, fading over 2.5 s
    if (s.threatBearing) {
      const a = s.threatBearing.angle;
      const r = RADAR_R - 5;
      const px = cx + Math.sin(a) * r;
      const py = cy - Math.cos(a) * r;
      const alpha = Math.max(0, 1 - s.threatBearing.progress);
      triangle(px, py, a, 5, `rgba(255,68,51,${alpha.toFixed(3)})`);
    }

    // own hull arrow + turret tick
    triangle(cx, cy, 0, 6, P.worldCss);
    const turretTick = radarPointer(radarDisplayYaw(s.turretYaw), 11);
    ctx.strokeStyle = hud;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + turretTick.x, cy + turretTick.y);
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

    // spectator label + respawn countdown
    if (s.spectator) {
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = hud;
      ctx.fillText(
        s.respawnReady
          ? `SPECTATING ${s.spectator.label} · ←/→ CYCLE · PRESS SPACE TO RESPAWN`
          : `SPECTATING ${s.spectator.label} · ←/→ CYCLE · RESPAWN ${Math.ceil(s.spectator.secondsLeft)}s`,
        w / 2,
        h / 2 + 54,
      );
      ctx.textAlign = 'left';
    } else if (s.respawnReady) {
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = hud;
      ctx.fillText('PRESS SPACE TO RESPAWN', w / 2, h / 2 + 54);
      ctx.textAlign = 'left';
    }

    // self-destruct countdown: centered above the status readout
    if (s.alive && s.selfDestructSeconds !== null) {
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = hud;
      ctx.fillText(`SELF-DESTRUCT ${Math.ceil(s.selfDestructSeconds)}s`, w / 2, h - 96);
      ctx.textAlign = 'left';
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
