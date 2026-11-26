// Generates exact block-grid tank concept sheets as SVG.
// Run: node tools/generate-tank-concepts.mjs
import { writeFileSync, mkdirSync } from 'node:fs';

const GREEN = '#39ff6b';
const DIM = '#1d7a3a';
const BRIGHT = '#9fffc0';

const designs = [
  {
    id: 'light-a', name: 'LIGHT A — WEDGE', cls: 'LIGHT TANK',
    hull: [
      Array(10).fill('TT.......TT'),
      ['TTHHEEEHHTT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TT.HHHHH.TT','TT..HHH..TT'],
      ['...........','.TTHHHHHTT.','.TTHHHHHTT.','.TTHHCHHTT.','.TTHHCHHTT.','.TTHHHHHTT.','.TTHHHHHTT.','.TTHHHHHTT.','.TT.HHH.TT.','.TT..H..TT.'],
    ],
    turret: [
      ['.HHH.','HHHHH','HHGHH','.GGG.','.GGG.','.GGG.'],
      ['.....','.HHH.','.HHH.','..G..','..G..','..G..'],
    ],
  },
  {
    id: 'light-b', name: 'LIGHT B — SCOUT', cls: 'LIGHT TANK',
    hull: [
      Array(8).fill('TT.....TT'),
      ['TTHHEEHHT','TTHHHHHHT','TTHHHHHHT','TTHHHHHHT','TTHHHHHHT','TT.HHH.TT','TT..H..TT','TT..H..TT'],
      ['.........','.TTHHHTT.','.TTHHHTT.','.TTHCHTT.','.TTHCHTT.','.TTHHHTT.','...HHH...','....H....'],
    ],
    turret: [
      ['.HH.','HHHH','HHGH','.GG.','.GG.'],
      ['....','.HH.','.HH.','..G.','..G.'],
    ],
  },
  {
    id: 'light-c', name: 'LIGHT C — COMMAND', cls: 'LIGHT TANK',
    hull: [
      Array(10).fill('TT.......TT'),
      ['TTHHEEEHHTT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TTHHHHHHHHT','TT.HHHHH.TT','TT..HHH..TT'],
      ['TT.......TT','.TTHHHHHTT.','.TTHHHHHTT.','.TTHHCHHTT.','.TTHHCHHTT.','.TTHHHHHTT.','.TTHHHHHTT.','.TTHHHHHTT.','.TT.HHH.TT.','TT.......TT'],
      ['...........','...EEEEE...','...HHHHH...','...HHHHH...','....HHH....','...........','...........','...........','...........','...........'],
    ],
    turret: [
      ['.HHH.','HHHHH','HHGHH','.GGG.','.GGG.','.GGG.'],
      ['.HHH.','HHHHH','HHGHH','.GGG.','.GGG.','.GGG.'],
      ['..H..','..H..','..G..','..G..','..G..','..G..'],
    ],
  },
  {
    id: 'super-a', name: 'SUPER A — HEAVY', cls: 'SUPER TANK',
    hull: [
      Array(12).fill('TT.........TT'),
      ['TTHHEEEEEHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TT.HHHHHHH.TT','TT..HHHHH..TT'],
      ['TT.........TT','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TT.HHHHH.TT.','.TT..HHH..TT.'],
      ['.............','...EEEEEEE...','...HHHHHHH...','...HHHHHHH...','....HHHHH....','.............','.............','.............','.............','.............','.............','.............'],
    ],
    turret: [
      ['.HHHH.','HHHHHH','HHGGHH','.GGGG.','.GGGG.','.GGGG.','.GGGG.'],
      ['......','.HHHH.','.HGGH.','..GG..','..GG..','..GG..','..GG..'],
    ],
  },
  {
    id: 'super-b', name: 'SUPER B — FORTRESS', cls: 'SUPER TANK',
    hull: [
      Array(12).fill('TTT.......TTT'),
      ['TTTHHEEEHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTTHHHHHHHTTT','TTT.HHHHH.TTT','TTT..HHH..TTT','TTT...H...TTT'],
      ['TTT.......TTT','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTTHHHHHTTT.','.TTT.HHH.TTT.','.TTT..H..TTT.','TTT.......TTT'],
      ['.............','...EEEEEEE...','...HHHHHHH...','...HHHHHHH...','....HHHHH....','.............','.............','.............','.............','.............','.............','.............'],
    ],
    turret: [
      ['..HHHHH..','HHHHHHHHH','HHHGGGHHH','.HHGGGHH.','..GGGGG..','..GGGGG..','..GGGGG..','..GGGGG..'],
      ['.........','.HHHHHHH.','.HHGGGHH.','..HGGGH..','...GGG...','...GGG...','...GGG...','...GGG...'],
      ['.........','..HHHHH..','..HHHHH..','...GGG...','...GGG...','...GGG...','...GGG...','...GGG...'],
    ],
  },
  {
    id: 'super-c', name: 'SUPER C — SIEGE', cls: 'SUPER TANK',
    hull: [
      Array(14).fill('TT.........TT'),
      ['TTHHEEEEEHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TTHHHHHHHHHTT','TT.HHHHHHH.TT','TT..HHHHH..TT'],
      ['TT.........TT','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TTHHHHHHHTT.','.TT.HHHHH.TT.','.TT..HHH..TT.'],
      ['.............','...EEEEEEE...','...HHHHHHH...','...HHHHHHH...','...HHHHHHH...','....HHHHH....','.............','.............','.............','.............','.............','.............','.............','.............'],
    ],
    turret: [
      ['.HHHH.','HHHHHH','HHGGHH','.GGGG.','.GGGG.','.GGGG.','.GGGG.','.GGGG.'],
      ['......','.HHHH.','.HGGH.','..GG..','..GG..','..GG..','..GG..','..GG..'],
      ['......','..HH..','..HH..','..G...','..G...','..G...','..G...','..G...'],
    ],
  },
];

function cellsOf(d) {
  const width = d.hull[0][0].length;
  for (const layer of d.hull) {
    for (const row of layer) {
      if (row.length !== width) throw new Error(`${d.id}: ragged hull row "${row}" (${row.length} != ${width})`);
    }
  }
  const tw = d.turret[0][0].length;
  for (const layer of d.turret) {
    for (const row of layer) {
      if (row.length !== tw) throw new Error(`${d.id}: ragged turret row "${row}" (${row.length} != ${tw})`);
    }
  }
  const cells = [];
  const h = d.hull.length;
  const hz = d.hull[0].length;
  const tz = d.turret[0].length;
  const zOff = Math.floor((hz - tz) / 2);
  for (let y = 0; y < d.hull.length; y++)
    for (let z = 0; z < d.hull[y].length; z++)
      for (let x = 0; x < d.hull[y][z].length; x++)
        if (d.hull[y][z][x] !== '.') cells.push({ x, y, z, t: d.hull[y][z][x] });
  for (let y = 0; y < d.turret.length; y++)
    for (let z = 0; z < d.turret[y].length; z++)
      for (let x = 0; x < d.turret[y][z].length; x++)
        if (d.turret[y][z][x] !== '.') cells.push({ x, y: y + h, z: z + zOff, t: d.turret[y][z][x] });
  return cells;
}

function renderTank(d, box) {
  const cells = cellsOf(d);
  const set = new Set(cells.map((c) => `${c.x},${c.y},${c.z}`));
  const has = (x, y, z) => set.has(`${x},${y},${z}`);
  const P0 = (x, y, z) => [(x - z) * 10, (x + z) * 2.5 - y * 10];
  const color = (t) => t === 'T' ? DIM : t === 'G' ? BRIGHT : GREEN;
  const faces = [];
  cells.sort((a, b) => (a.x + a.z + a.y) - (b.x + b.z + b.y));
  for (const c of cells) {
    const { x, y, z, t } = c;
    if (!has(x, y + 1, z)) faces.push({ pts: [P0(x,y+1,z),P0(x+1,y+1,z),P0(x+1,y+1,z+1),P0(x,y+1,z+1)], fill:'#020402', stroke:color(t) });
    if (!has(x + 1, y, z)) faces.push({ pts: [P0(x+1,y,z),P0(x+1,y+1,z),P0(x+1,y+1,z+1),P0(x+1,y,z+1)], fill:'#000000', stroke:color(t) });
    if (!has(x, y, z + 1)) faces.push({ pts: [P0(x,y,z+1),P0(x,y+1,z+1),P0(x+1,y+1,z+1),P0(x+1,y,z+1)], fill:'#030703', stroke:color(t) });
  }
  const all = faces.flatMap((f) => f.pts);
  const minX = Math.min(...all.map((p) => p[0])), maxX = Math.max(...all.map((p) => p[0]));
  const minY = Math.min(...all.map((p) => p[1])), maxY = Math.max(...all.map((p) => p[1]));
  const bw = maxX - minX, bh = maxY - minY;
  const scale = Math.min((box.w - 50) / bw, (box.h - 85) / bh);
  const cx = box.x + box.w / 2, cy = box.y + 62 + (box.h - 85) / 2;
  const T = (p) => [cx + (p[0] - (minX + maxX) / 2) * scale, cy + (p[1] - (minY + maxY) / 2) * scale];
  const sw = Math.max(0.8, Math.min(1.6, scale * 0.45));
  return faces.map((f) =>
    `<polygon points="${f.pts.map((p) => T(p).map((n) => n.toFixed(2)).join(',')).join(' ')}" fill="${f.fill}" stroke="${f.stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`
  ).join('\n');
}

function sheet(title, subset, filename) {
  const W = 1800, H = 1220;
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`,
    `<rect width="100%" height="100%" fill="#000"/>`,
    `<style>text{font-family:monospace;fill:${GREEN}} .title{font-size:30px;letter-spacing:5px} .label{font-size:20px;letter-spacing:2px} .meta{font-size:14px;fill:#1d7a3a}</style>`,
    `<text x="60" y="58" class="title">${title}</text>`,
    `<line x1="60" y1="78" x2="1740" y2="78" stroke="#1d7a3a"/>`,
  ];
  subset.forEach((d, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const box = { x: 60 + col * 580, y: 105 + row * 520, w: 540, h: 480 };
    parts.push(`<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="none" stroke="#0a3319"/>`);
    parts.push(`<text x="${box.x + 25}" y="${box.y + 40}" class="label">${d.name}</text>`);
    const count = cellsOf(d).length;
    const size = `${d.hull[0][0].length}×${d.hull.length}×${d.hull[0].length}`;
    parts.push(`<text x="${box.x + 25}" y="${box.y + 63}" class="meta">HULL ${size} · ${count} BLOCKS · DESTRUCTIBLE GRID</text>`);
    parts.push(renderTank(d, box));
  });
  parts.push(`<text x="60" y="1185" class="meta">GREEN = HULL / ARMOR · DIM GREEN = TRACKS · PALE GREEN = GUN · BLACK FACES OCCLUDE INTERIOR</text>`);
  parts.push('</svg>');
  mkdirSync('concepts', { recursive: true });
  writeFileSync(`concepts/${filename}`, parts.join('\n'));
}

sheet('VECTORZONE — LIGHT TANK CONCEPTS', designs.slice(0, 3), 'light-tank-concepts.svg');
sheet('VECTORZONE — SUPER TANK CONCEPTS', designs.slice(3), 'super-tank-concepts.svg');
sheet('VECTORZONE — TANK COMPARISON', designs, 'tank-concepts.svg');
console.log('Wrote concepts/light-tank-concepts.svg, super-tank-concepts.svg, tank-concepts.svg');
