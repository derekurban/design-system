import React from 'react';

// Paths copied from assets/logos/logo-on-light.svg and site-logo-on-light.svg (100-unit box, drawn in 10–90).
const BL = 'M28 18 L18 18 L18 82 L28 82';
const BR = 'M72 18 L82 18 L82 82 L72 82';
const SCRIBBLE = 'M31 60 C35 26 45 74 50 46 C55 22 62 70 69 40';
const LETTERS = 'M47 44 C43 38 34 40 34 49 C34 57 43 58 47 51 C48 44 48 32 47 25 C46 34 46 48 48 55 C49 59 53 60 55 56 C56 53 56 48 56 44 C56 53 57 58 61 58 C64 58 65 53 65 44 C65 53 66 58 69 56';
const UNDERLINE = 'M33.11 70.50 L33.69 70.47 L34.27 70.43 L34.86 70.39 L35.44 70.34 L36.02 70.30 L36.60 70.24 L37.18 70.19 L37.77 70.14 L38.35 70.08 L38.93 70.02 L39.51 69.96 L40.09 69.90 L40.68 69.84 L41.26 69.77 L41.84 69.71 L42.42 69.64 L43.00 69.57 L43.58 69.51 L44.17 69.44 L44.75 69.37 L45.33 69.30 L45.91 69.24 L46.49 69.17 L47.07 69.10 L47.65 69.03 L48.24 68.97 L48.82 68.90 L49.40 68.83 L49.98 68.77 L50.56 68.70 L51.14 68.64 L51.73 68.57 L52.31 68.51 L52.89 68.45 L53.47 68.39 L54.05 68.33 L54.63 68.27 L55.22 68.21 L55.80 68.16 L56.38 68.10 L56.96 68.05 L57.54 67.99 L58.13 67.94 L58.71 67.89 L59.29 67.85 L59.87 67.80 L60.46 67.75 L61.04 67.71 L61.62 67.67 L62.20 67.63 L62.79 67.59 L63.37 67.55 L63.95 67.51 L64.54 67.48 L65.12 67.44 L65.70 67.41 L66.28 67.38 L66.87 67.35 L67.45 67.33 L68.03 67.30 L68.24 67.26 L68.43 67.18 L68.59 67.04 L68.71 66.87 L68.78 66.67 L68.80 66.47 L68.76 66.26 L68.68 66.07 L68.54 65.91 L68.37 65.79 L68.17 65.72 L67.97 65.70 L67.38 65.72 L66.80 65.75 L66.22 65.77 L65.63 65.79 L65.05 65.81 L64.46 65.82 L63.88 65.84 L63.30 65.85 L62.71 65.86 L62.13 65.87 L61.55 65.88 L60.96 65.89 L60.38 65.90 L59.79 65.90 L59.21 65.90 L58.62 65.91 L58.04 65.91 L57.46 65.91 L56.87 65.90 L56.29 65.90 L55.70 65.89 L55.12 65.89 L54.53 65.88 L53.95 65.87 L53.36 65.86 L52.78 65.85 L52.19 65.84 L51.61 65.83 L51.02 65.81 L50.44 65.80 L49.85 65.78 L49.27 65.77 L48.68 65.75 L48.10 65.73 L47.51 65.72 L46.93 65.70 L46.34 65.68 L45.76 65.66 L45.17 65.65 L44.59 65.63 L44.00 65.61 L43.42 65.59 L42.83 65.58 L42.25 65.56 L41.66 65.54 L41.08 65.53 L40.49 65.51 L39.91 65.50 L39.32 65.49 L38.74 65.48 L38.15 65.47 L37.57 65.46 L36.98 65.46 L36.40 65.46 L35.81 65.45 L35.23 65.46 L34.64 65.46 L34.06 65.47 L33.48 65.48 L32.89 65.50 L32.25 65.62 L31.66 65.89 L31.16 66.31 L30.78 66.84 L30.56 67.46 L30.50 68.11 L30.62 68.75 L30.89 69.34 L31.31 69.84 L31.84 70.22 L32.46 70.44 Z';

function readMs(v, fallback) {
  const n = parseFloat(v);
  if (isNaN(n)) return fallback;
  return /ms\s*$/.test(v.trim()) ? n : n * 1000;
}

export function Mark({ size = 48, variant = 'default', animate = false, replayKey, label = 'Derek Urban', style }) {
  const ref = React.useRef(null);
  const site = variant === 'site';

  // Draw-in: left bracket fades in, the stroke writes, (site: underline sweeps), green bracket closes.
  React.useLayoutEffect(() => {
    const svg = ref.current;
    if (!animate || !svg || !svg.animate) return;
    const cs = getComputedStyle(svg);
    const slow = readMs(cs.getPropertyValue('--duration-slow'), 320);
    if (slow === 0) return; // reduced motion
    const settle = cs.getPropertyValue('--ease-settle').trim() || 'cubic-bezier(0.16, 1, 0.3, 1)';
    const inOut = cs.getPropertyValue('--ease-in-out').trim() || 'cubic-bezier(0.45, 0, 0.4, 1)';
    const q = s => svg.querySelector('[data-part="' + s + '"]');
    const draw = site ? 1200 : 900, ulAt = 120 + draw + 100, close = site ? ulAt + 380 : 120 + draw;
    const runs = [
      q('bl').animate([{ transform: 'translateX(-8px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: slow, easing: settle, fill: 'backwards' }),
      q('stroke').animate([{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }], { duration: draw, delay: 120, easing: inOut, fill: 'backwards' }),
      q('br').animate([{ transform: 'translateX(10px)', strokeOpacity: 0.3 }, { transform: 'translateX(-1.5px)', offset: 0.6 }, { transform: 'none', strokeOpacity: 1 }], { duration: 520, delay: close, easing: settle, fill: 'backwards' }),
    ];
    if (site) runs.push(q('ul').animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 460, delay: ulAt, easing: 'cubic-bezier(.3,.6,.2,1)', fill: 'backwards' }));
    return () => runs.forEach(a => a.cancel());
  }, [animate, replayKey, site]);

  const line = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80" width={size} height={size} role="img" aria-label={label} style={{ display: 'block', overflow: 'visible', ...style }}>
      <path data-part="bl" d={BL} stroke="var(--ink)" strokeWidth={6} style={{ transformBox: 'view-box' }} {...line} />
      <path data-part="stroke" d={site ? LETTERS : SCRIBBLE} pathLength={1} stroke="var(--ink)" strokeWidth={site ? 4.5 : 5.5} {...line} />
      {site && <path data-part="ul" d={UNDERLINE} fill="var(--ink)" />}
      <path data-part="br" d={BR} stroke="var(--accent-strong)" strokeWidth={6} style={{ transformBox: 'view-box' }} {...line} />
    </svg>
  );
}
