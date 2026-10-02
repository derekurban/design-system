// Small SVG chart helpers for the Data cards. Tokens only; no libraries.
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = (n) => getComputedStyle(document.body).getPropertyValue(n).trim();
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function svg(host, w, h) {
    host.innerHTML = '';
    return el('svg', { viewBox: `0 0 ${w} ${h}`, width: '100%', style: 'display:block;overflow:visible' }, host);
  }
  function text(parent, x, y, str, o = {}) {
    const t = el('text', { x, y, 'text-anchor': o.anchor || 'start', fill: o.fill || 'var(--ink-tertiary)', style: `font:${o.font || 'var(--font-caption)'};font-variant-numeric:tabular-nums` }, parent);
    t.textContent = str;
    return t;
  }
  // Signature motion: settle into place, staggered, accent last.
  function settle(nodes, frames, o = {}) {
    if (reduced()) return;
    const dur = o.duration || 640, ease = css('--ease-settle') || 'cubic-bezier(0.16,1,0.3,1)';
    nodes.forEach((n, i) => n.animate(frames(n, i), { duration: dur, delay: (o.delay || 0) + i * (o.stagger ?? 24), easing: ease, fill: 'backwards' }));
  }
  function seeded(seed) { return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

  function bars(host, { data, labels, w = 652, h = 180, accent = data.length - 1, unit = '' }) {
    w = host.clientWidth || w;
    const s = svg(host, w, h), top = 20, bottom = 22, ch = h - top - bottom;
    const max = Math.max(...data) * 1.1, gap = 6, bw = (w - gap * (data.length - 1)) / data.length;
    [0.5, 1].forEach(f => el('line', { x1: 0, x2: w, y1: top + ch * (1 - f / 1.1 * 1.1) + 0.25, y2: top + ch * (1 - f) + 0.25, stroke: 'var(--line)', 'stroke-width': 0.5, 'stroke-dasharray': '2 3' }, s));
    const nodes = [], vals = [];
    data.forEach((v, i) => {
      const bh = ch * v / max, x = i * (bw + gap), y = top + ch - bh;
      const g = el('g', { style: 'cursor:default' }, s);
      const r = el('rect', { x, y, width: bw, height: bh, rx: 3, fill: i === accent ? 'var(--accent-strong)' : 'var(--data-neutral)', style: 'transform-box:fill-box;transform-origin:bottom;transition:fill var(--duration-fast) var(--ease-out)' }, g);
      const t = text(g, x + bw / 2, y - 6, v + unit, { anchor: 'middle', fill: i === accent ? 'var(--accent-text)' : 'var(--ink-secondary)', font: 'var(--font-label)' });
      t.style.opacity = i === accent ? 1 : 0;
      t.style.transition = 'opacity var(--duration-fast) var(--ease-out)';
      el('rect', { x: x - gap / 2, y: 0, width: bw + gap, height: h, fill: 'transparent' }, g);
      if (i !== accent) {
        g.addEventListener('mouseenter', () => { r.setAttribute('fill', 'var(--ink-tertiary)'); t.style.opacity = 1; });
        g.addEventListener('mouseleave', () => { r.setAttribute('fill', 'var(--data-neutral)'); t.style.opacity = 0; });
      }
      if (labels && labels[i]) text(s, x + bw / 2, h - 4, labels[i], { anchor: 'middle' });
      nodes.push(r); vals.push(t);
    });
    el('line', { x1: 0, x2: w, y1: top + ch + 0.25, y2: top + ch + 0.25, stroke: 'var(--line-strong)', 'stroke-width': 0.5 }, s);
    const run = () => { settle(nodes, () => [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }]); settle([vals[accent]], () => [{ opacity: 0 }, { opacity: 1 }], { delay: data.length * 24 + 200 }); };
    run(); return run;
  }

  function line(host, { series, compare, labels, w = 652, h = 180, endLabel, compareLabel }) {
    w = host.clientWidth || w;
    const s = svg(host, w, h), top = 16, bottom = 22, right = 96, cw = w - right, ch = h - top - bottom;
    const all = series.concat(compare || []), max = Math.max(...all) * 1.1, min = Math.min(...all) * 0.85;
    const X = i => i * cw / (series.length - 1), Y = v => top + ch * (1 - (v - min) / (max - min));
    [0, 0.5, 1].forEach(f => el('line', { x1: 0, x2: cw, y1: top + ch * f + 0.25, y2: top + ch * f + 0.25, stroke: 'var(--line)', 'stroke-width': 0.5, 'stroke-dasharray': f === 1 ? '' : '2 3' }, s));
    const path = d => d.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
    let cmp;
    if (compare) {
      cmp = el('path', { d: path(compare), fill: 'none', stroke: 'var(--data-neutral)', 'stroke-width': 1.5, 'stroke-dasharray': '4 4', 'stroke-linecap': 'round' }, s);
      text(s, cw + 12, Y(compare[compare.length - 1]) + 4, compareLabel || '');
    }
    const p = el('path', { d: path(series), fill: 'none', stroke: 'var(--ink)', 'stroke-width': 1.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, s);
    const lx = X(series.length - 1), ly = Y(series[series.length - 1]);
    const dot = el('circle', { cx: lx, cy: ly, r: 4, fill: 'var(--accent-strong)', style: 'transform-box:fill-box;transform-origin:center' }, s);
    const lab = text(s, cw + 12, ly + 4, endLabel || '', { fill: 'var(--accent-text)', font: 'var(--font-label)' });
    if (labels) labels.forEach((l, i) => l && text(s, X(i), h - 4, l, { anchor: i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle' }));
    const run = () => {
      if (reduced()) return;
      const len = p.getTotalLength(), ease = css('--ease-out');
      p.animate([{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], { duration: 900, easing: ease, fill: 'backwards' });
      if (cmp) cmp.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: ease, fill: 'backwards' });
      settle([dot], () => [{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { delay: 820, duration: 480 });
      lab.animate([{ opacity: 0, transform: 'translateX(-4px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: 900, easing: ease, fill: 'backwards' });
    };
    run(); return run;
  }

  function spark(host, data, { w = 120, h = 32, accent = false } = {}) {
    const s = svg(host, w, h), max = Math.max(...data), min = Math.min(...data);
    const X = i => i * w / (data.length - 1), Y = v => 2 + (h - 4) * (1 - (v - min) / (max - min || 1));
    const p = el('path', { d: data.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' '), fill: 'none', stroke: accent ? 'var(--accent-strong)' : 'var(--ink-tertiary)', 'stroke-width': 1.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, s);
    el('circle', { cx: X(data.length - 1), cy: Y(data[data.length - 1]), r: 2.5, fill: accent ? 'var(--accent-strong)' : 'var(--ink-tertiary)' }, s);
    const run = () => { if (reduced()) return; const len = p.getTotalLength(); p.animate([{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], { duration: 720, easing: css('--ease-out'), fill: 'backwards' }); };
    run(); return run;
  }

  // Dots drift from noise into clusters; one cluster resolves in accent.
  function clusters(host, { w = 652, h = 190, groups, seed = 7 }) {
    const k = (host.clientWidth || w) / w; w = w * k;
    groups = groups.map(g => ({ ...g, x: g.x * k }));
    const s = svg(host, w, h), rnd = seeded(seed), nodes = [];
    const accentNodes = [];
    groups.forEach(g => {
      for (let i = 0; i < g.n; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * g.r;
        const c = el('circle', { cx: (g.x + Math.cos(a) * d).toFixed(1), cy: (g.y + Math.sin(a) * d * 0.8).toFixed(1), r: g.accent ? 3.6 : 3, fill: g.accent ? 'var(--accent-strong)' : 'var(--ink)', 'fill-opacity': g.accent ? 1 : g.faint ? 0.22 : 0.7 }, null);
        (g.accent ? accentNodes : nodes).push(c);
      }
      if (g.label) text(s, g.x, g.y + g.r + 22, g.label, { anchor: 'middle', fill: g.accent ? 'var(--accent-text)' : 'var(--ink-tertiary)', font: g.accent ? 'var(--font-label)' : 'var(--font-caption)' });
    });
    for (let i = 0; i < 14; i++) el('circle', { cx: (rnd() * w).toFixed(1), cy: (rnd() * (h - 30)).toFixed(1), r: 2.2, fill: 'var(--ink-tertiary)', 'fill-opacity': 0.34 }, s);
    nodes.concat(accentNodes).forEach(n => s.appendChild(n));
    const all = nodes.concat(accentNodes);
    const off = all.map(() => [(rnd() - 0.5) * 120, (rnd() - 0.5) * 80]);
    const run = () => settle(all, (n, i) => [{ transform: `translate(${off[i][0]}px,${off[i][1]}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { stagger: 6, duration: 900 });
    run(); return run;
  }

  function grid(host, { weeks = 26, seed = 3, w = 652 }) {
    w = host.clientWidth || w;
    const gap = w / weeks, r = Math.min(4.5, gap * 0.3), h = gap * 7, s = svg(host, w, h), rnd = seeded(seed), nodes = [];
    const levels = [0.08, 0.22, 0.42, 0.66, 0.9];
    for (let c = 0; c < weeks; c++) for (let d = 0; d < 7; d++) {
      const last = c === weeks - 1 && d === 4;
      if (c === weeks - 1 && d > 4) continue;
      const v = Math.min(4, Math.floor(rnd() * rnd() * 6 + (c / weeks) * 1.5));
      nodes.push(el('circle', { cx: c * gap + gap / 2, cy: d * gap + gap / 2, r: last ? r * 1.2 : r, fill: last ? 'var(--accent-strong)' : 'var(--ink)', 'fill-opacity': last ? 1 : levels[v], style: 'transform-box:fill-box;transform-origin:center' }, s));
    }
    const run = () => settle(nodes, () => [{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { stagger: 2, duration: 480 });
    run(); return run;
  }

  // Click a chart to replay its entrance.
  function replayOnClick(host, run) { host.style.cursor = 'pointer'; host.addEventListener('click', () => { document.getAnimations().forEach(a => host.contains(a.effect && a.effect.target) && a.cancel()); run(); }); }

  window.DUViz = { bars, line, spark, clusters, grid, replayOnClick };
})();
