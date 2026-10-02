import React from 'react';

const MT = 'var(--duration-fast) var(--ease-icon)';
function mark(on) {
  return { gridArea: '1 / 1', opacity: on ? 1 : 0, transform: on ? 'scale(1)' : 'scale(0.25)', filter: on ? 'blur(0px)' : 'blur(2px)', transition: 'opacity ' + MT + ', transform ' + MT + ', filter ' + MT };
}

export function Checkbox({ checked, defaultChecked, onChange, label, description, disabled = false, indeterminate = false, id, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  const filled = on || indeterminate;
  const rings = [filled ? '0 0 0 1px var(--accent-line)' : hover ? '0 0 0 1px var(--ink-tertiary)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span style={{
        position: 'relative', flexShrink: 0, width: 18, height: 18, marginTop: 2, borderRadius: 'var(--radius-xs)',
        background: filled ? 'var(--accent-subtle)' : 'var(--surface)', boxShadow: rings.join(', '), color: 'var(--accent-strong)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      }}>
        <input
          ref={ref} id={id} type="checkbox" checked={on} disabled={disabled} {...rest}
          onChange={e => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked, e); }}
          onFocus={e => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
          style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit' }}
        />
        <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={mark(on && !indeterminate)}><path d="M20 6 9 17l-5-5" /></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={mark(indeterminate)}><path d="M5 12h14" /></svg>
        </span>
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
