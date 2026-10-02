import React from 'react';

const PAD = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };

export function Card({ variant = 'raised', padding = 'md', interactive = false, as = 'div', children, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  let bg = 'var(--surface)', ring = interactive && hover ? 'var(--shadow-rest-hover)' : 'var(--shadow-rest)';
  if (variant === 'sunk') { bg = 'var(--sunk)'; ring = 'none'; }
  if (variant === 'outline') { bg = 'transparent'; ring = interactive && hover ? 'var(--ring-control)' : 'var(--ring-hairline)'; }
  return (
    <Tag {...rest} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', boxSizing: 'border-box', padding: PAD[padding] ?? PAD.md, borderRadius: 'var(--radius-xl)',
        background: bg, boxShadow: ring, color: 'var(--ink)', textDecoration: 'none',
        cursor: interactive ? 'pointer' : undefined,
        transition: 'box-shadow var(--duration-base) var(--ease-out), background var(--duration-fast) var(--ease-out)',
        ...style,
      }}>{children}</Tag>
  );
}
