/**
 * Settings (NEW-ERA A4): persisted to localStorage, applied live.
 * A small vector-styled DOM panel; the full settings page arrives in M8.
 */
import { MAP_IDS, MAPS, type MapId } from '@vectorzone/sim';

export interface Settings {
  palette: number;
  bloom: number;
  crt: number;
  wireframe: boolean;
  safe: boolean;
  shake: boolean;
  fov: number;
  res: number;
  map: MapId;
  volMaster: number;
  volSfx: number;
}

export const DEFAULT_SETTINGS: Settings = {
  palette: 0,
  bloom: 0.9,
  crt: 0.6,
  wireframe: false,
  safe: false,
  shake: true,
  fov: 60,
  res: 1,
  map: 'classic',
  volMaster: 0.8,
  volSfx: 0.8,
};

const KEY = 'vectorzone-settings';

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* private mode etc. — settings just won't persist */
  }
}

export function buildPanel(
  s: Settings,
  paletteLabels: string[],
  onChange: (s: Settings) => void,
): HTMLElement {
  const el = document.createElement('div');
  el.id = 'panel';
  const commit = () => {
    saveSettings(s);
    onChange(s);
  };
  const row = (label: string, control: HTMLElement) => {
    const r = document.createElement('label');
    r.className = 'row';
    const span = document.createElement('span');
    span.textContent = label;
    r.append(span, control);
    el.append(r);
  };

  const pal = document.createElement('button');
  const palText = () => {
    pal.textContent = paletteLabels[s.palette % paletteLabels.length];
  };
  palText();
  pal.onclick = () => {
    s.palette = (s.palette + 1) % paletteLabels.length;
    palText();
    commit();
  };
  row('phosphor', pal);

  const wire = document.createElement('input');
  wire.type = 'checkbox';
  wire.checked = s.wireframe;
  wire.onchange = () => {
    s.wireframe = wire.checked;
    commit();
  };
  row('wireframe', wire);

  const safe = document.createElement('input');
  safe.type = 'checkbox';
  safe.checked = s.safe;
  safe.onchange = () => {
    s.safe = safe.checked;
    commit();
  };
  row('safe mode', safe);

  const bloom = document.createElement('input');
  bloom.type = 'range';
  bloom.min = '0';
  bloom.max = '2';
  bloom.step = '0.1';
  bloom.value = String(s.bloom);
  bloom.oninput = () => {
    s.bloom = Number(bloom.value);
    commit();
  };
  row('bloom', bloom);

  const crt = document.createElement('input');
  crt.type = 'range';
  crt.min = '0';
  crt.max = '1';
  crt.step = '0.1';
  crt.value = String(s.crt);
  crt.oninput = () => {
    s.crt = Number(crt.value);
    commit();
  };
  row('crt', crt);

  const shake = document.createElement('input');
  shake.type = 'checkbox';
  shake.checked = s.shake;
  shake.onchange = () => {
    s.shake = shake.checked;
    commit();
  };
  row('shake', shake);

  const fov = document.createElement('input');
  fov.type = 'range';
  fov.min = '50';
  fov.max = '90';
  fov.step = '5';
  fov.value = String(s.fov);
  fov.oninput = () => {
    s.fov = Number(fov.value);
    commit();
  };
  row('fov', fov);

  const res = document.createElement('input');
  res.type = 'range';
  res.min = '0.5';
  res.max = '1';
  res.step = '0.25';
  res.value = String(s.res);
  res.oninput = () => {
    s.res = Number(res.value);
    commit();
  };
  row('res', res);

  const map = document.createElement('select');
  for (const id of MAP_IDS) {
    const o = document.createElement('option');
    o.value = id;
    o.textContent = MAPS[id].label;
    map.append(o);
  }
  map.value = s.map;
  map.onchange = () => {
    s.map = map.value as MapId;
    commit();
  };
  row('map', map);

  const vm = document.createElement('input');
  vm.type = 'range';
  vm.min = '0';
  vm.max = '1';
  vm.step = '0.1';
  vm.value = String(s.volMaster);
  vm.oninput = () => {
    s.volMaster = Number(vm.value);
    commit();
  };
  row('vol', vm);

  const vs = document.createElement('input');
  vs.type = 'range';
  vs.min = '0';
  vs.max = '1';
  vs.step = '0.1';
  vs.value = String(s.volSfx);
  vs.oninput = () => {
    s.volSfx = Number(vs.value);
    commit();
  };
  row('sfx', vs);

  return el;
}