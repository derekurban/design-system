import React from 'react';

export function Tag({ children, selected = false, size = 'md', onClick, onRemove, style }) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  const h = size === 'sm' ? 24 : 28;
  let bg = 'var(--sunk)', color = 'var(--ink-secondary)', ring = 'none';
  if (selected) { bg = 'var(--accent-subtle)'; color = 'var(--accent-text)'; ring = 'inset 0 0 0 0.5px var(--accent-line)'; }
  else if (interactive && hover) { color = 'var(--ink)'; ring = 'inset 0 0 0 0.5px var(--line-strong)'; }
  const Tag = interactive ? 'button' : 'span';
  return (
    <Tag type={interactive ? 'button' : undefined} aria-pressed={interactive ? selected : undefined} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none', border: 0, margin: 0, display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
        height: h, padding: onRemove ? '0 var(--space-1) 0 var(--space-2)' : '0 var(--space-2)', borderRadius: 'var(--radius-sm)',
        background: bg, color, boxShadow: ring, fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: '16px', fontWeight: 500, whiteSpace: 'nowrap',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        ...style,
      }}>
      {children}
      {onRemove && (
        <span role="button" aria-label={'Remove ' + (typeof children === 'string' ? children : '')} tabIndex={0} onClick={e => { e.stopPropagation(); onRemove(); }}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onRemove(); } }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, margin: '-3px -3px -3px 0', borderRadius: 'var(--radius-xs)', color: 'var(--ink-tertiary)', cursor: 'pointer' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </span>
      )}
    </Tag>
  );
}
