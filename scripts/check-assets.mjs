// Gate I4: zero binary asset files. Everything in this game is procedural.
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const SKIP = new Set(['node_modules', '.git', 'dist', 'coverage', '.vite']);
const BANNED = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp',
  '.mp3', '.wav', '.ogg', '.flac', '.m4a',
  '.glb', '.gltf', '.fbx', '.obj',
  '.woff', '.woff2', '.ttf', '.otf',
  '.mp4', '.webm',
]);

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    if (SKIP.has(e)) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let fail = false;
for (const f of walk('.')) {
  if (BANNED.has(extname(f).toLowerCase())) {
    console.error(`asset file forbidden: ${f}`);
    fail = true;
  }
}
if (fail) process.exit(1);
console.log('check:assets — zero assets ✓');