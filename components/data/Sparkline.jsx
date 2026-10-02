import React from 'react';

export function Sparkline({ data = [], width = 96, height = 28, tone = 'neutral', animate = true, label, style }) {
  const p = React.useRef(null);
  const max = Math.max(...data), min = Math.min(...data);
  const X = i => i * width / Math.max(1, data.length - 1);
  const Y = v => 2 + (height - 4) * (1 - (v - min) / (max - min || 1));
  const color = tone === 'accent' ? 'var(--accent-strong)' : 'var(--ink-tertiary)';
  React.useLayoutEffect(() => {
    if (!animate || !p.current || !p.current.animate || (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    const len = p.current.getTotalLength();
    const a = p.current.animate([{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], { duration: 720, easing: getComputedStyle(p.current).getPropertyValue('--ease-out').trim() || 'ease-out', fill: 'backwards' });
    return () => a.cancel();
  }, [animate]);
  return (
    <svg role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} width={width} height={height} viewBox={'0 0 ' + width + ' ' + height} style={{ display: 'block', overflow: 'visible', ...style }}>
      <path ref={p} d={data.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ')} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={X(data.length - 1)} cy={Y(data[data.length - 1])} r={2.5} fill={color} />
    </svg>
  );
}
