import React from 'react';

function initials(name) {
  return String(name || '').trim().split(/\s+/).slice(0, 2).map(p => p.charAt(0).toUpperCase()).join('');
}

export function Avatar({ src, name, size = 32, style }) {
  const [failed, setFailed] = React.useState(false);
  const showImg = src && !failed;
  return (
    <span role="img" aria-label={name} style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      width: size, height: size, borderRadius: 'var(--radius-full)', overflow: 'hidden',
      background: 'var(--sunk)', color: 'var(--ink-secondary)', boxShadow: 'inset 0 0 0 0.5px var(--line)',
      fontFamily: 'var(--font-title)', fontWeight: 500, fontSize: Math.round(size * 0.4), letterSpacing: '-0.01em', ...style,
    }}>
      {showImg ? <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : initials(name)}
      {showImg && <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: 'inset 0 0 0 1px var(--image-outline)' }} />}
    </span>
  );
}
