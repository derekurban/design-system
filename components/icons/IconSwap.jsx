import React from 'react';

const T = 'var(--duration-base) var(--ease-icon)';

function layer(on) {
  return {
    gridArea: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: on ? 1 : 0, transform: on ? 'scale(1)' : 'scale(0.25)', filter: on ? 'blur(0px)' : 'blur(4px)',
    transition: 'opacity ' + T + ', transform ' + T + ', filter ' + T,
  };
}

// Both icons stay mounted and cross-fade, so the swap is interruptible and never animates on first render.
export function IconSwap({ active = false, from, to, style }) {
  return (
    <span style={{ display: 'inline-grid', placeItems: 'center', ...style }}>
      <span aria-hidden={active || undefined} style={layer(!active)}>{from}</span>
      <span aria-hidden={!active || undefined} style={layer(active)}>{to}</span>
    </span>
  );
}
