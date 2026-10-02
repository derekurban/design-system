import React from 'react';

function useWidth(fallback) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(fallback);
  React.useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    const measure = () => setW(el.clientWidth || fallback);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}
function motionOK() { return typeof matchMedia === 'undefined' || !matchMedia('(prefers-reduced-motion: reduce)').matches; }
function cssVar(el, name, fb) { return (el && getComputedStyle(el).getPropertyValue(name).trim()) || fb; }
const capStyle = { font: 'var(--font-caption)', fontVariantNumeric: 'tabular-nums' };

export function BarChart({ data = [], labels, highlight, emphasis = 'accent', height = 180, unit = '', showValues = 'hover', animate = true, replayKey, label, style }) {
  const [ref, w] = useWidth(600);
  const svg = React.useRef(null);
  const [hover, setHover] = React.useState(null);
  const values = data.map(d => (typeof d === 'number' ? d : d.value));
  const names = labels || data.map(d => (typeof d === 'object' ? d.label : ''));
  const hi = highlight === undefined ? values.length - 1 : highlight;
  const top = 20, bottom = names.some(Boolean) ? 22 : 4, ch = height - top - bottom;
  const max = Math.max(1, ...values) * 1.1, gap = values.length > 24 ? 3 : 6;
  const bw = Math.max(1, (w - gap * (values.length - 1)) / values.length);
  const hiFill = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-strong)';
  const hiText = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-text)';
  React.useLayoutEffect(() => {
    if (!animate || !motionOK() || !svg.current || !svg.current.animate) return;
    const ease = cssVar(svg.current, '--ease-settle', 'cubic-bezier(0.16, 1, 0.3, 1)');
    const runs = [...svg.current.querySelectorAll('[data-bar]')].map((el, i) => el.animate([{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], { duration: 640, delay: i * 24, easing: ease, fill: 'backwards' }));
    const v = svg.current.querySelector('[data-hi-value]');
    if (v) runs.push(v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: values.length * 24 + 200, fill: 'backwards' }));
    return () => runs.forEach(a => a.cancel());
  }, [replayKey, animate]);
  return (
    <div ref={ref} style={{ width: '100%', ...style }}>
      <svg ref={svg} role="img" aria-label={label} viewBox={'0 0 ' + w + ' ' + height} width="100%" height={height} style={{ display: 'block', overflow: 'visible' }}>
        <line x1={0} x2={w} y1={top + ch / 2} y2={top + ch / 2} stroke="var(--line)" strokeWidth={0.5} strokeDasharray="2 3" />
        {values.map((v, i) => {
          const bh = ch * v / max, x = i * (bw + gap), y = top + ch - bh;
          const isHi = i === hi, isHover = hover === i && !isHi;
          const show = showValues === 'all' || isHi || isHover;
          return (
            <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect data-bar="" x={x} y={y} width={bw} height={bh} rx={Math.min(3, bw / 2)} fill={isHi ? hiFill : isHover ? 'var(--ink-tertiary)' : 'var(--data-neutral)'}
                style={{ transformBox: 'fill-box', transformOrigin: 'bottom', transition: 'fill var(--duration-fast) var(--ease-out)' }} />
              <text data-hi-value={isHi ? '' : undefined} x={x + bw / 2} y={y - 6} textAnchor="middle" fill={isHi ? hiText : 'var(--ink-secondary)'}
                style={{ font: 'var(--font-label)', fontVariantNumeric: 'tabular-nums', opacity: show ? 1 : 0, transition: 'opacity var(--duration-fast) var(--ease-out)' }}>{v}{unit}</text>
              {names[i] ? <text x={x + bw / 2} y={height - 4} textAnchor="middle" fill="var(--ink-tertiary)" style={capStyle}>{names[i]}</text> : null}
              <rect x={x - gap / 2} y={0} width={bw + gap} height={height} fill="transparent" />
            </g>
          );
        })}
        <line x1={0} x2={w} y1={top + ch} y2={top + ch} stroke="var(--line-strong)" strokeWidth={0.5} />
      </svg>
    </div>
  );
}
