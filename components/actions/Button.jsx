import React from 'react';

const SIZES = {
  sm: { height: 'var(--control-sm)', padding: '0 var(--space-3)', radius: 'var(--radius-sm)', fontSize: 13, lineHeight: '16px' },
  md: { height: 'var(--control-md)', padding: '0 var(--space-4)', radius: 'var(--radius-md)', fontSize: 14, lineHeight: '20px' },
  lg: { height: 'var(--control-lg)', padding: '0 var(--space-5)', radius: 'var(--radius-md)', fontSize: 16, lineHeight: '24px' },
};

function variantStyle(variant, hover, disabled) {
  if (disabled) return { background: variant === 'ghost' ? 'transparent' : 'var(--sunk)', color: 'var(--ink-tertiary)', ring: 'none' };
  switch (variant) {
    case 'primary': return { background: hover ? 'var(--accent-hover)' : 'var(--accent)', color: 'var(--on-accent)', ring: '0 0 0 0.5px var(--accent-line)' };
    case 'ghost': return { background: hover ? 'var(--sunk)' : 'transparent', color: 'var(--ink)', ring: 'none' };
    case 'danger': return { background: hover ? 'var(--sunk)' : 'var(--surface)', color: 'var(--danger)', ring: 'var(--ring-control)' };
    default: return { background: hover ? 'var(--sunk)' : 'var(--surface)', color: 'var(--ink)', ring: 'var(--ring-control)' };
  }
}

export function Button({ variant = 'secondary', size = 'md', iconStart, iconEnd, fullWidth = false, static: isStatic = false, disabled = false, href, type = 'button', children, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hover || press, disabled);
  const rings = [v.ring !== 'none' ? v.ring : null, focus ? 'var(--ring-focus)' : null].filter(Boolean);
  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag
      {...rest}
      href={Tag === 'a' ? href : undefined}
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onFocus={e => setFocus(e.currentTarget.matches(':focus-visible'))}
      onBlur={() => setFocus(false)}
      style={{
        appearance: 'none', border: 0, margin: 0, outline: 'none', textDecoration: 'none',
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        height: s.height, padding: s.padding, borderRadius: s.radius,
        fontFamily: 'var(--font-body)', fontSize: s.fontSize, lineHeight: s.lineHeight, fontWeight: 500, whiteSpace: 'nowrap',
        background: v.background, color: v.color, boxShadow: rings.length ? rings.join(', ') : 'none',
        cursor: disabled ? 'not-allowed' : 'pointer', userSelect: 'none',
        transform: press && !disabled && !isStatic ? 'scale(var(--press-scale))' : 'none',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
        ...style,
      }}
    >
      {iconStart}
      {children != null && <span>{children}</span>}
      {iconEnd}
    </Tag>
  );
}
