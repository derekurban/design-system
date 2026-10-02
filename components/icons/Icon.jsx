import React from 'react';

// Renders a Lucide icon from the globally loaded Lucide UMD build (window.lucide).
// Load once per page: <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
function toPascal(n) {
  return String(n || '').split(/[-_\s]+/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

export function Icon({ name, size = 16, strokeWidth = 1.5, color = 'currentColor', label, style, ...rest }) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const key = toPascal(name);
  let node = lib ? ((lib.icons && lib.icons[key]) || lib[key]) : null;
  if (Array.isArray(node) && node[0] === 'svg') node = node[2];
  const children = Array.isArray(node)
    ? node.map(([tag, attrs], i) => { const { key: _k, ...a } = attrs || {}; return React.createElement(tag, { key: i, ...a }); })
    : null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: 'block', flexShrink: 0, ...style }} {...rest}
    >{children}</svg>
  );
}
