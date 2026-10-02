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

export function LineChart({ series = [], compare, labels, endLabel, compareLabel, emphasis = 'accent', height = 180, animate = true, replayKey, label, style }) {
  const [ref, w] = useWidth(600);
  const svg = React.useRef(null);
  const top = 16, bottom = labels ? 22 : 4, right = endLabel || compareLabel ? Math.min(110, w * 0.28) : 8;
  const cw = Math.max(10, w - right), ch = height - top - bottom;
  const all = series.concat(compare || []);
  const max = Math.max(...all) * 1.1, min = Math.min(...all) * 0.85;
  const X = i => i * cw / Math.max(1, series.length - 1);
  const Y = v => top + ch * (1 - (v - min) / (max - min || 1));
  const path = d => d.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
  const last = series[series.length - 1];
  const dotFill = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-strong)';
  const dotText = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-text)';
  React.useLayoutEffect(() => {
    const s = svg.current;
    if (!animate || !motionOK() || !s || !s.animate) return;
    const ease = cssVar(s, '--ease-out', 'cubic-bezier(0.2, 0.8, 0.2, 1)'), settle = cssVar(s, '--ease-settle', 'cubic-bezier(0.16, 1, 0.3, 1)');
    const p = s.querySelector('[data-line]'), len = p.getTotalLength();
    const runs = [p.animate([{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], { duration: 900, easing: ease, fill: 'backwards' })];
    const c = s.querySelector('[data-compare]'); if (c) runs.push(c.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: ease, fill: 'backwards' }));
    const d = s.querySelector('[data-dot]'); runs.push(d.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 480, delay: 820, easing: settle, fill: 'backwards' }));
    s.querySelectorAll('[data-end]').forEach(t => runs.push(t.animate([{ opacity: 0, transform: 'translateX(-4px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: 900, easing: ease, fill: 'backwards' })));
    return () => runs.forEach(a => a.cancel());
  }, [replayKey, animate]);
  return (
    <div ref={ref} style={{ width: '100%', ...style }}>
      <svg ref={svg} role="img" aria-label={label} viewBox={'0 0 ' + w + ' ' + height} width="100%" height={height} style={{ display: 'block', overflow: 'visible' }}>
        {[0, 0.5, 1].map(f => <line key={f} x1={0} x2={cw} y1={top + ch * f} y2={top + ch * f} stroke="var(--line)" strokeWidth={0.5} strokeDasharray={f === 1 ? undefined : '2 3'} />)}
        {compare && <path data-compare="" d={path(compare)} fill="none" stroke="var(--data-neutral)" strokeWidth={1.5} strokeDasharray="4 4" strokeLinecap="round" />}
        {compare && compareLabel && <text data-end="" x={cw + 12} y={Y(compare[compare.length - 1]) + 4} fill="var(--ink-tertiary)" style={capStyle}>{compareLabel}</text>}
        <path data-line="" d={path(series)} fill="none" stroke="var(--ink)" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
        <circle data-dot="" cx={X(series.length - 1)} cy={Y(last)} r={4} fill={dotFill} style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
        {endLabel && <text data-end="" x={cw + 12} y={Y(last) + 4} fill={dotText} style={{ font: 'var(--font-label)', fontVariantNumeric: 'tabular-nums' }}>{endLabel}</text>}
        {labels && labels.map((l, i) => l ? <text key={i} x={X(i)} y={height - 4} textAnchor={i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'} fill="var(--ink-tertiary)" style={capStyle}>{l}</text> : null)}
      </svg>
    </div>
  );
}
