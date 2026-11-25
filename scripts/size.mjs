// Gate I5: initial client bundle < 300 KB gzipped.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const DIR = 'packages/client/dist/assets';
const BUDGET = 300 * 1024;

let total = 0;
for (const f of readdirSync(DIR)) {
  const p = join(DIR, f);
  if (!statSync(p).isFile()) continue;
  const gz = gzipSync(readFileSync(p)).length;
  total += gz;
  console.log(`  ${f}: ${(gz / 1024).toFixed(1)} KB gz`);
}
console.log(`size: ${(total / 1024).toFixed(1)} KB gz (budget 300 KB)`);
if (total > BUDGET) {
  console.error('OVER BUDGET');
  process.exit(1);
}