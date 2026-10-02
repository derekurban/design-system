import React from 'react';

const labelStyle = { fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '16px', fontWeight: 500, color: 'var(--ink)' };
const hintStyle = { fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-tertiary)' };
const errorStyle = { ...hintStyle, color: 'var(--danger)' };

const SIZES = { sm: { h: 'var(--control-sm)', fs: 13, lh: '18px', r: 'var(--radius-sm)' }, md: { h: 'var(--control-md)', fs: 14, lh: '22px', r: 'var(--radius-md)' }, lg: { h: 'var(--control-lg)', fs: 16, lh: '26px', r: 'var(--radius-md)' } };

export function Input({ label, hint, error, id, size = 'md', iconStart, suffix, multiline = false, rows = 4, disabled = false, style, inputStyle, onFocus, onBlur, ...rest }) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const ring = error ? '0 0 0 1px var(--danger)' : focus ? '0 0 0 0.5px var(--line-strong), var(--ring-focus)' : 'var(--ring-hairline)';
  const Field = multiline ? 'textarea' : 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 0, ...style }}>
      {label && <label htmlFor={fieldId} style={labelStyle}>{label}</label>}
      <div style={{
        display: 'flex', alignItems: multiline ? 'flex-start' : 'center', gap: 'var(--space-2)',
        minHeight: s.h, padding: multiline ? 'var(--space-3)' : '0 var(--space-3)', borderRadius: s.r,
        background: focus ? 'var(--surface)' : 'var(--sunk)', boxShadow: ring,
        opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'text',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      }}>
        {iconStart && <span style={{ display: 'flex', color: 'var(--ink-tertiary)' }}>{iconStart}</span>}
        <Field
          id={fieldId} disabled={disabled} rows={multiline ? rows : undefined} aria-invalid={!!error || undefined}
          onFocus={e => { setFocus(true); onFocus && onFocus(e); }}
          onBlur={e => { setFocus(false); onBlur && onBlur(e); }}
          {...rest}
          style={{
            flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', padding: 0, margin: 0, resize: multiline ? 'vertical' : undefined,
            fontFamily: 'var(--font-body)', fontSize: s.fs, lineHeight: s.lh, color: 'var(--ink)', boxShadow: 'none',
            ...inputStyle,
          }}
        />
        {suffix && <span style={{ display: 'flex', color: 'var(--ink-tertiary)', fontSize: 13, lineHeight: '18px', fontVariantNumeric: 'tabular-nums' }}>{suffix}</span>}
      </div>
      {error ? <div style={errorStyle}>{error}</div> : hint ? <div style={hintStyle}>{hint}</div> : null}
    </div>
  );
}
