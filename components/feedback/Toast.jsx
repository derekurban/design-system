import React from 'react';

export function Toast({ title, description, tone = 'neutral', action, onDismiss, animateIn = true, style }) {
  const [shown, setShown] = React.useState(!animateIn);
  const [leaving, setLeaving] = React.useState(false);
  const timer = React.useRef(null);
  React.useEffect(() => {
    if (shown) return;
    let r2; const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setShown(true)); });
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); };
  }, []);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  // Exit is quieter than entry: no travel, a slight shrink and blur, and quicker.
  const dismiss = () => { setLeaving(true); clearTimeout(timer.current); timer.current = setTimeout(() => onDismiss && onDismiss(), 120); };
  const dot = { success: 'var(--accent-strong)', danger: 'var(--danger)', warning: 'var(--warning)', info: 'var(--info)' }[tone] || null;
  const tIn = 'var(--duration-slow) var(--ease-out)';
  const tOut = 'var(--duration-exit) var(--ease-out)';
  const motion = leaving
    ? { opacity: 0, transform: 'scale(0.98)', filter: 'blur(2px)', transition: 'opacity ' + tOut + ', transform ' + tOut + ', filter ' + tOut }
    : shown
      ? { opacity: 1, transform: 'none', filter: 'blur(0px)', transition: 'opacity ' + tIn + ', transform ' + tIn + ', filter ' + tIn }
      : { opacity: 0, transform: 'translateY(8px)', filter: 'blur(4px)', transition: 'none' };
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', width: 360, maxWidth: '100%', boxSizing: 'border-box',
      padding: 'var(--space-3) var(--space-3) var(--space-3) var(--space-4)', borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)', boxShadow: 'var(--shadow-float)', color: 'var(--ink)', ...motion, ...style,
    }}>
      {dot && <span aria-hidden="true" style={{ flexShrink: 0, width: 8, height: 8, marginTop: 8, borderRadius: 'var(--radius-full)', background: dot }} />}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 2, paddingBottom: 2 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '20px', fontWeight: 500 }}>{title}</div>
        {description && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-secondary)' }}>{description}</div>}
      </div>
      {action && <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{action}</div>}
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={dismiss} style={{
          flexShrink: 0, appearance: 'none', border: 0, margin: 0, padding: 0, width: 24, height: 24, borderRadius: 'var(--radius-xs)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: 'var(--ink-tertiary)', cursor: 'pointer',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      )}
    </div>
  );
}
