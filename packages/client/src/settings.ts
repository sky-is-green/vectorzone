/**
 * Settings (NEW-ERA A4): persisted to localStorage, applied live.
 * A small vector-styled DOM panel; the full settings page arrives in M8.
 */
export interface Settings {
  palette: number;
  bloom: number;
  crt: number;
  wireframe: boolean;
  safe: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  palette: 0,
  bloom: 0.9,
  crt: 0.6,
  wireframe: false,
  safe: false,
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

  return el;
}