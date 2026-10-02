import React from 'react';

const SIZES = { sm: { box: 'var(--control-sm)', radius: 'var(--radius-sm)' }, md: { box: 'var(--control-md)', radius: 'var(--radius-md)' }, lg: { box: 'var(--control-lg)', radius: 'var(--radius-md)' } };

export function IconButton({ label, variant = 'ghost', size = 'md', selected = false, static: isStatic = false, disabled = false, children, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const active = hover || press;
  let bg = 'transparent', color = 'var(--ink-secondary)', ring = null;
  if (variant === 'secondary') { bg = active ? 'var(--sunk)' : 'var(--surface)'; color = 'var(--ink)'; ring = 'var(--ring-control)'; }
  else if (variant === 'primary') { bg = active ? 'var(--accent-hover)' : 'var(--accent)'; color = 'var(--on-accent)'; ring = '0 0 0 0.5px var(--accent-line)'; }
  else { bg = active ? 'var(--sunk)' : 'transparent'; color = active ? 'var(--ink)' : 'var(--ink-secondary)'; }
  if (selected && variant !== 'primary') { bg = 'var(--accent-subtle)'; color = 'var(--accent-text)'; ring = '0 0 0 0.5px var(--accent-line)'; }
  if (disabled) { bg = variant === 'ghost' ? 'transparent' : 'var(--sunk)'; color = 'var(--ink-tertiary)'; ring = null; }
  const rings = [ring, focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return (
    <button
      type="button" aria-label={label} aria-pressed={selected || undefined} disabled={disabled} {...rest}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onFocus={e => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
      style={{
        appearance: 'none', border: 0, margin: 0, padding: 0, outline: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        width: s.box, height: s.box, borderRadius: s.radius, background: bg, color,
        boxShadow: rings.length ? rings.join(', ') : 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        transform: press && !disabled && !isStatic ? 'scale(var(--press-scale))' : 'none',
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
        ...style,
      }}
    >{children}</button>
  );
}
