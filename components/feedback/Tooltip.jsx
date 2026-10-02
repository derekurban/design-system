import React from 'react';

// Shared across tooltips: once one has been shown, neighbours open instantly with no transition.
let lastHide = 0;
const WARM_MS = 400;

export function Tooltip({ content, side = 'top', delay = 300, children }) {
  const [open, setOpen] = React.useState(false);
  const [instant, setInstant] = React.useState(false);
  const t = React.useRef(null);
  const tipId = 'du-tip-' + (React.useId ? React.useId().replace(/:/g, '') : Math.random().toString(36).slice(2));
  const child = React.isValidElement(children) ? React.cloneElement(children, { 'aria-describedby': tipId }) : children;
  const show = () => {
    clearTimeout(t.current);
    if (Date.now() - lastHide < WARM_MS) { setInstant(true); setOpen(true); return; }
    setInstant(false);
    t.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => { clearTimeout(t.current); if (open) lastHide = Date.now(); setOpen(false); };
  React.useEffect(() => () => clearTimeout(t.current), []);
  const pos = side === 'bottom' ? { top: 'calc(100% + 6px)' } : { bottom: 'calc(100% + 6px)' };
  const rest = side === 'bottom' ? 'translateY(-2px) scale(0.97)' : 'translateY(2px) scale(0.97)';
  const tIn = 'opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)';
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {child}
      <span role="tooltip" id={tipId} style={{
        position: 'absolute', left: '50%', ...pos, zIndex: 30, pointerEvents: 'none', whiteSpace: 'nowrap',
        padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-xs)', background: 'var(--ink)', color: 'var(--bg)',
        fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px',
        transformOrigin: side === 'bottom' ? 'top center' : 'bottom center',
        opacity: open ? 1 : 0, transform: 'translateX(-50%) ' + (open ? 'none' : rest),
        transition: open ? (instant ? 'none' : tIn) : 'opacity var(--duration-exit) var(--ease-out)',
      }}>{content}</span>
    </span>
  );
}
