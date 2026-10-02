import React from 'react';

const labelStyle = { fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '16px', fontWeight: 500, color: 'var(--ink)' };
const hintStyle = { fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-tertiary)' };
const errorStyle = { ...hintStyle, color: 'var(--danger)' };

const SIZES = { sm: { h: 'var(--control-sm)', fs: 13, r: 'var(--radius-sm)' }, md: { h: 'var(--control-md)', fs: 14, r: 'var(--radius-md)' }, lg: { h: 'var(--control-lg)', fs: 16, r: 'var(--radius-md)' } };

export function Select({ label, hint, error, id, options = [], size = 'md', placeholder, disabled = false, style, ...rest }) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const ring = error ? '0 0 0 1px var(--danger)' : focus ? '0 0 0 0.5px var(--line-strong), var(--ring-focus)' : 'var(--ring-control)';
  const opts = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 0, ...style }}>
      {label && <label htmlFor={fieldId} style={labelStyle}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <select
          id={fieldId} disabled={disabled} aria-invalid={!!error || undefined} {...rest}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', height: s.h, margin: 0, border: 0, outline: 'none',
            padding: '0 36px 0 var(--space-3)', borderRadius: s.r, boxShadow: ring,
            background: hover && !disabled ? 'var(--sunk)' : 'var(--surface)', color: 'var(--ink)',
            fontFamily: 'var(--font-body)', fontSize: s.fs, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
            transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          }}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map(o => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          style={{ position: 'absolute', right: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-tertiary)' }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {error ? <div style={errorStyle}>{error}</div> : hint ? <div style={hintStyle}>{hint}</div> : null}
    </div>
  );
}
