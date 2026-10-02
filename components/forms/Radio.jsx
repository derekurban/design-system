import React from 'react';

export function Radio({ checked, onChange, label, description, disabled = false, name, value, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rings = [checked ? '0 0 0 1px var(--accent-line)' : hover ? '0 0 0 1px var(--ink-tertiary)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span style={{
        position: 'relative', flexShrink: 0, width: 18, height: 18, marginTop: 2, borderRadius: 'var(--radius-full)',
        background: checked ? 'var(--accent-subtle)' : 'var(--surface)', boxShadow: rings.join(', '),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      }}>
        <input
          id={id} type="radio" name={name} value={value} checked={!!checked} disabled={disabled} {...rest}
          onChange={e => onChange && onChange(value, e)}
          onFocus={e => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
          style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit' }}
        />
        <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-full)', background: 'var(--accent-strong)', opacity: checked ? 1 : 0, transform: checked ? 'scale(1)' : 'scale(0.25)', transition: 'opacity var(--duration-fast) var(--ease-icon), transform var(--duration-fast) var(--ease-icon)' }} />
      </span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '22px', color: 'var(--ink)' }}>{label}</span>}
          {description && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-tertiary)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
