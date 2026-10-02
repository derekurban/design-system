import React from 'react';
import { Sparkline } from './Sparkline.jsx';

export function Stat({ label, value, delta, trend, emphasis = false, size = 'md', style }) {
  const fs = size === 'lg' ? '300 48px/52px' : size === 'sm' ? '300 28px/32px' : '300 36px/40px';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 0, ...style }}>
      <span style={{ font: 'var(--font-caption)', color: 'var(--ink-tertiary)' }}>{label}</span>
      <span style={{ font: fs + ' var(--font-title)', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: emphasis ? 'var(--accent-text)' : 'var(--ink)' }}>{value}</span>
      {(delta || trend) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          {delta ? <span style={{ font: 'var(--font-caption)', color: 'var(--ink-secondary)', fontVariantNumeric: 'tabular-nums' }}>{delta}</span> : <span />}
          {trend && <Sparkline data={trend} tone={emphasis ? 'accent' : 'neutral'} />}
        </div>
      )}
    </div>
  );
}
