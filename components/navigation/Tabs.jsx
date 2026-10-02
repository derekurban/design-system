import React from 'react';

export function Tabs({ items = [], value, onChange, size = 'md', label, style }) {
  const opts = items.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const measure = React.useCallback(() => {
    const el = refs.current[value];
    if (el) setInd(p => (p && p.left === el.offsetLeft && p.width === el.offsetWidth) ? p : { left: el.offsetLeft, width: el.offsetWidth });
  }, [value]);
  React.useLayoutEffect(measure, [measure, items.length, size]);
  React.useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const first = Object.values(refs.current)[0];
    if (typeof ResizeObserver === 'undefined' || !first || !first.parentElement) return;
    const ro = new ResizeObserver(measure); ro.observe(first.parentElement);
    return () => ro.disconnect();
  }, [measure]);
  const h = size === 'sm' ? 36 : 44;
  return (
    <div role="tablist" aria-label={label} style={{ position: 'relative', display: 'flex', gap: 'var(--space-5)', boxShadow: 'inset 0 -0.5px 0 var(--line)', ...style }}>
      {opts.map(o => {
        const sel = o.value === value;
        return (
          <button key={o.value} ref={el => (refs.current[o.value] = el)} type="button" role="tab" aria-selected={sel}
            onClick={() => onChange && onChange(o.value)} onMouseEnter={() => setHover(o.value)} onMouseLeave={() => setHover(null)}
            style={{
              appearance: 'none', border: 0, margin: 0, padding: 0, background: 'transparent', height: h,
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)', fontSize: size === 'sm' ? 13 : 14, fontWeight: 500,
              color: sel ? 'var(--ink)' : hover === o.value ? 'var(--ink-secondary)' : 'var(--ink-tertiary)',
              transition: 'color var(--duration-fast) var(--ease-out)',
            }}>
            {o.label}
            {o.count != null && <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-tertiary)', fontVariantNumeric: 'tabular-nums' }}>{o.count}</span>}
          </button>
        );
      })}
      {ind && <span aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, height: 2, width: ind.width, transform: 'translateX(' + ind.left + 'px)', borderRadius: 'var(--radius-full)', background: 'var(--accent-strong)',
        transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out)',
      }} />}
    </div>
  );
}
