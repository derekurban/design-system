import React from 'react';

export function Switch({ checked, defaultChecked, onChange, label, description, disabled = false, id, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const stretch = press && !disabled ? 4 : 0;
  const rings = [on ? '0 0 0 1px var(--accent-line)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  const control = (
    <span onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)} style={{
      position: 'relative', display: 'block', flexShrink: 0, width: 36, height: 20, borderRadius: 'var(--radius-full)',
      background: on ? 'var(--accent-subtle)' : 'var(--sunk)', boxShadow: rings.join(', '),
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    }}>
      <input
        id={id} type="checkbox" role="switch" checked={on} disabled={disabled} {...rest}
        onChange={e => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked, e); }}
        onFocus={e => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
        style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit', zIndex: 1 }}
      />
      <span style={{
        position: 'absolute', top: 2, left: 2, width: 16 + stretch, height: 16, borderRadius: 'var(--radius-full)',
        background: on ? 'var(--accent-strong)' : 'var(--surface)', boxShadow: on ? 'none' : 'var(--ring-control), 0 1px 2px rgb(0 0 0 / 0.08)',
        transform: on ? 'translateX(' + (16 - stretch) + 'px)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out), background var(--duration-fast) var(--ease-out)',
      }} />
    </span>
  );
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ display: 'flex', marginTop: 1 }}>{control}</span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '22px', color: 'var(--ink)' }}>{label}</span>}
          {description && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-tertiary)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
