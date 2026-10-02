#!/usr/bin/env bash
# Fails if a component is missing its .d.ts or .prompt.md, or isn't exported from src/index.js and src/index.d.ts.
set -u
fail=0
for f in components/*/[A-Z]*.jsx; do
  dir=$(dirname "$f"); name=$(basename "$f" .jsx); rel="../$dir/$name"
  [ -f "$dir/$name.d.ts" ] || { echo "$dir/$name: missing .d.ts"; fail=1; }
  [ -f "$dir/$name.prompt.md" ] || { echo "$dir/$name: missing .prompt.md"; fail=1; }
  grep -qF "'$rel.jsx'" src/index.js || { echo "$dir/$name: not exported from src/index.js"; fail=1; }
  grep -qF "'$rel'" src/index.d.ts || { echo "$dir/$name: not exported from src/index.d.ts"; fail=1; }
done
[ $fail -eq 0 ] && echo "All components are complete and exported."
exit $fail
