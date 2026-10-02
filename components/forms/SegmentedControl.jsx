import React from 'react';

const SIZES = { sm: { h: 28, fs: 13, px: 'var(--space-3)' }, md: { h: 32, fs: 13, px: 'var(--space-3)' }, lg: { h: 40, fs: 14, px: 'var(--space-4)' } };

export function SegmentedControl({ options = [], value, onChange, size = 'md', fullWidth = false, label, style }) {
  const opts = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  const s = SIZES[size] || SIZES.md;
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const measure = React.useCallback(() => {
    const el = refs.current[value];
    if (el) setInd(p => (p && p.left === el.offsetLeft && p.width === el.offsetWidth) ? p : { left: el.offsetLeft, width: el.offsetWidth });
  }, [value]);
  React.useLayoutEffect(measure, [measure, options.length, size, fullWidth]);
  // Re-measure when webfonts finish loading or the control resizes, so the thumb never sits on stale metrics.
  React.useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const first = Object.values(refs.current)[0];
    if (typeof ResizeObserver === 'undefined' || !first || !first.parentElement) return;
    const ro = new ResizeObserver(measure); ro.observe(first.parentElement);
    return () => ro.disconnect();
  }, [measure]);
  return (
    <div role="radiogroup" aria-label={label} style={{
      position: 'relative', display: fullWidth ? 'flex' : 'inline-flex', padding: 2, gap: 0,
      borderRadius: 'var(--radius-md)', background: 'var(--sunk)', boxShadow: 'inset 0 0 0 0.5px var(--line)', ...style,
    }}>
      {ind && <span aria-hidden="true" style={{
        position: 'absolute', top: 2, bottom: 2, left: 0, width: ind.width, transform: 'translateX(' + ind.left + 'px)', borderRadius: 'var(--radius-sm)',
        background: 'var(--surface)', boxShadow: 'var(--ring-hairline), 0 1px 2px rgb(0 0 0 / 0.06)',
        transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out)',
      }} />}
      {opts.map(o => {
        const sel = o.value === value;
        return (
          <button key={o.value} ref={el => (refs.current[o.value] = el)} type="button" role="radio" aria-checked={sel}
            onClick={() => onChange && onChange(o.value)} onMouseEnter={() => setHover(o.value)} onMouseLeave={() => setHover(null)}
            style={{
              position: 'relative', flex: fullWidth ? 1 : undefined, appearance: 'none', border: 0, margin: 0, background: 'transparent',
              height: s.h, padding: '0 ' + s.px, borderRadius: 'var(--radius-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
              fontFamily: 'var(--font-body)', fontSize: s.fs, fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer',
              color: sel || hover === o.value ? 'var(--ink)' : 'var(--ink-secondary)',
              transition: 'color var(--duration-fast) var(--ease-out)',
            }}>{o.icon}{o.label}</button>
        );
      })}
    </div>
  );
}
