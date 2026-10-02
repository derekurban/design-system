// Fails if a component is missing its .d.ts or .prompt.md, or isn't exported from src/index.js and src/index.d.ts.
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const indexJs = readFileSync('src/index.js', 'utf8');
const indexDts = readFileSync('src/index.d.ts', 'utf8');
let fail = false;
const report = (message) => { console.log(message); fail = true; };

const groups = readdirSync('components', { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
for (const group of groups) {
  const dir = `components/${group}`;
  const names = readdirSync(dir).filter((f) => /^[A-Z].*\.jsx$/.test(f)).map((f) => f.slice(0, -'.jsx'.length)).sort();
  for (const name of names) {
    const rel = `../${dir}/${name}`;
    if (!existsSync(`${dir}/${name}.d.ts`)) report(`${dir}/${name}: missing .d.ts`);
    if (!existsSync(`${dir}/${name}.prompt.md`)) report(`${dir}/${name}: missing .prompt.md`);
    if (!indexJs.includes(`'${rel}.jsx'`)) report(`${dir}/${name}: not exported from src/index.js`);
    if (!indexDts.includes(`'${rel}'`)) report(`${dir}/${name}: not exported from src/index.d.ts`);
  }
}

if (fail) process.exitCode = 1;
else console.log('All components are complete and exported.');
