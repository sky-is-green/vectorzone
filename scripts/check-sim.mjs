// Gate I1: packages/sim must be pure TypeScript — no three.js, no DOM, no Node built-ins.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'packages/sim/src';
const BAD_IMPORT =
  /(?:from\s*|require\(\s*|import\s*\(\s*)['"](?:three|node:[^'"]+|fs|path|ws|vite)['"]/;
const BAD_GLOBAL = /\b(?:document|window|localStorage|navigator)\b/;

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (p.endsWith('.ts')) yield p;
  }
}

let fail = false;
for (const f of walk(ROOT)) {
  const src = readFileSync(f, 'utf8');
  // strip comments so prose doesn't trip the gate
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  if (BAD_IMPORT.test(code) || BAD_GLOBAL.test(code)) {
    console.error(`sim purity violation: ${f}`);
    fail = true;
  }
}
if (fail) process.exit(1);
console.log('check:sim — pure ✓');