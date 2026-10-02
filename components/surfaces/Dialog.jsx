import React from 'react';

export function Dialog({ open, onClose, title, description, children, actions, width = 440, dismissible = true }) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const entering = open; // enter travels further than exit
  const panel = React.useRef(null);
  const returnTo = React.useRef(null);
  React.useEffect(() => {
    if (!open) { if (returnTo.current && returnTo.current.focus) returnTo.current.focus(); return; }
    returnTo.current = document.activeElement;
    const r = requestAnimationFrame(() => panel.current && panel.current.focus());
    return () => cancelAnimationFrame(r);
  }, [open]);
  const trap = e => {
    if (e.key !== 'Tab' || !panel.current) return;
    const f = [...panel.current.querySelectorAll('button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
    if (!f.length) { e.preventDefault(); return; }
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 120);
    return () => clearTimeout(t);
  }, [open]);
  React.useEffect(() => {
    if (!open || !dismissible) return;
    const onKey = e => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, dismissible]);
  if (!mounted) return null;
  const tIn = 'var(--duration-base) var(--ease-out)';
  const tOut = 'var(--duration-exit) var(--ease-out)';
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)' }}>
      <div onClick={() => dismissible && onClose && onClose()} style={{ position: 'absolute', inset: 0, background: 'var(--scrim)', opacity: visible ? 1 : 0, transition: 'opacity ' + (visible ? tIn : tOut) }} />
      <div ref={panel} tabIndex={-1} onKeyDown={trap} role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} style={{
        position: 'relative', outline: 'none', width: '100%', maxWidth: width, boxSizing: 'border-box', padding: 'var(--space-5)',
        borderRadius: 'var(--radius-xl)', background: 'var(--surface)', boxShadow: 'var(--shadow-overlay)', color: 'var(--ink)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : entering ? 'translateY(8px) scale(0.96)' : 'scale(0.98)',
        transition: visible ? 'opacity ' + tIn + ', transform ' + tIn : 'opacity ' + tOut + ', transform ' + tOut,
      }}>
        {(title || description) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-title)', fontSize: 18, lineHeight: '24px', fontWeight: 500, letterSpacing: '-0.01em', textWrap: 'balance' }}>{title}</h2>}
            {description && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '22px', color: 'var(--ink-secondary)', textWrap: 'pretty' }}>{description}</p>}
          </div>
        )}
        {children}
        {actions && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>{actions}</div>}
      </div>
    </div>
  );
}
