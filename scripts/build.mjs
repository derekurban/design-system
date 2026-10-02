// Builds dist/index.js and dist/styles.css (fonts included). Runs on `npm run build` and on install from GitHub,
// so it uses Node and esbuild's API rather than shell commands: npm runs scripts through cmd.exe on Windows.
import { rmSync } from 'node:fs';
import { build } from 'esbuild';

rmSync('dist', { recursive: true, force: true });

await build({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'esm',
  target: 'es2019',
  jsx: 'transform',
  loader: { '.js': 'jsx' },
  external: ['react', 'react-dom'],
  sourcemap: true,
  outfile: 'dist/index.js',
  logLevel: 'info',
});

await build({
  entryPoints: ['styles.css'],
  bundle: true,
  loader: { '.woff2': 'file' },
  assetNames: 'fonts/[name]',
  outfile: 'dist/styles.css',
  logLevel: 'info',
});
