import React from 'react';

function MenuItem({ item, onSelect }) {
  const [hover, setHover] = React.useState(false);
  if (item.type === 'divider') return <div role="separator" style={{ height: 0.5, background: 'var(--line)', margin: '4px -4px' }} />;
  if (item.type === 'label') return <div style={{ padding: '6px var(--space-2) 4px', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '18px', color: 'var(--ink-tertiary)' }}>{item.label}</div>;
  const color = item.disabled ? 'var(--ink-tertiary)' : item.danger ? 'var(--danger)' : 'var(--ink)';
  return (
    <button type="button" role="menuitem" disabled={item.disabled}
      onClick={() => !item.disabled && onSelect && onSelect(item.value ?? item.label, item)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none', border: 0, margin: 0, width: '100%', display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
        height: 32, padding: '0 var(--space-2)', borderRadius: 'var(--radius-sm)', textAlign: 'left',
        background: hover && !item.disabled ? 'var(--sunk)' : 'transparent', color, cursor: item.disabled ? 'default' : 'pointer',
        fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '20px',
        transition: 'background var(--duration-fast) var(--ease-out)',
      }}>
      {item.icon && <span style={{ display: 'flex', color: item.danger ? 'var(--danger)' : 'var(--ink-secondary)' }}>{item.icon}</span>}
      <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
      {item.shortcut && <span style={{ fontSize: 13, color: 'var(--ink-tertiary)', fontVariantNumeric: 'tabular-nums' }}>{item.shortcut}</span>}
      {item.selected && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--accent-text)' }}><path d="M20 6 9 17l-5-5" /></svg>
      )}
    </button>
  );
}

// phase: 'enter' (pre-paint), 'open', 'exit'. Grows from the trigger corner; exits by fading in place.
function Panel({ items, onSelect, width, style, phase = 'open', origin = 'top left', autoFocus = false, onEscape }) {
  const ref = React.useRef(null);
  const enabled = () => [...ref.current.querySelectorAll('[role="menuitem"]:not([disabled])')];
  React.useEffect(() => { if (autoFocus && phase === 'open' && ref.current) { const f = enabled()[0]; f && f.focus({ preventScroll: true }); } }, [autoFocus, phase === 'open']);
  const onKeyDown = e => {
    const list = enabled(); if (!list.length) return;
    const i = list.indexOf(document.activeElement);
    const go = n => { e.preventDefault(); list[(n + list.length) % list.length].focus(); };
    if (e.key === 'ArrowDown') go(i + 1); else if (e.key === 'ArrowUp') go(i < 0 ? list.length - 1 : i - 1);
    else if (e.key === 'Home') go(0); else if (e.key === 'End') go(list.length - 1);
    else if (e.key === 'Escape' && onEscape) { e.preventDefault(); onEscape(); }
  };
  const tIn = 'var(--duration-base) var(--ease-out)';
  const motion = phase === 'open'
    ? { opacity: 1, transform: 'none', transition: 'opacity ' + tIn + ', transform ' + tIn }
    : phase === 'exit'
      ? { opacity: 0, transform: 'none', transition: 'opacity var(--duration-exit) var(--ease-out)' }
      : { opacity: 0, transform: 'scale(0.96)', transition: 'none' };
  return (
    <div ref={ref} role="menu" onKeyDown={onKeyDown} style={{
      minWidth: width || 200, padding: 'var(--space-1)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)', boxShadow: 'var(--shadow-float)',
      display: 'flex', flexDirection: 'column', transformOrigin: origin, ...motion,
      ...style,
    }}>
      {items.map((it, i) => <MenuItem key={i} item={it} onSelect={onSelect} />)}
    </div>
  );
}

export function Menu({ items = [], onSelect, trigger, align = 'start', width, open: openProp, onOpenChange, style }) {
  const [openInner, setOpenInner] = React.useState(false);
  const open = openProp !== undefined ? openProp : openInner;
  const setOpen = v => { if (openProp === undefined) setOpenInner(v); onOpenChange && onOpenChange(v); };
  const [phase, setPhase] = React.useState(open ? 'open' : null);
  const wrap = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      if (!phase) return;
      setPhase('exit');
      const t = setTimeout(() => setPhase(null), 120);
      return () => clearTimeout(t);
    }
    // Reopening mid-exit retargets straight to open instead of restarting.
    let r;
    if (phase === 'exit') setPhase('open');
    else { setPhase('enter'); r = requestAnimationFrame(() => requestAnimationFrame(() => setPhase('open'))); }
    const onDoc = e => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); const b = wrap.current && wrap.current.querySelector('button'); b && b.focus(); } };
    document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey);
    return () => { cancelAnimationFrame(r); document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  if (!trigger) return <Panel items={items} onSelect={onSelect} width={width} style={style} />;
  return (
    <div ref={wrap} style={{ position: 'relative', display: 'inline-flex' }}>
      <span onClick={() => setOpen(!open)} onKeyDown={e => { if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true); } }} aria-haspopup="menu" aria-expanded={open} style={{ display: 'inline-flex' }}>{trigger}</span>
      {phase && (
        <Panel items={items} width={width} phase={phase} origin={align === 'end' ? 'top right' : 'top left'} autoFocus
          onSelect={(v, it) => { onSelect && onSelect(v, it); setOpen(false); }}
          style={{ position: 'absolute', top: 'calc(100% + var(--space-1))', [align === 'end' ? 'right' : 'left']: 0, zIndex: 20, ...style }} />
      )}
    </div>
  );
}
