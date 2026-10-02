// Palette generator for the color-combos exploration. Every tone is solved in OKLCH against the real neutrals.
(function () {
  function lin([l, c, h]) {
    const a = c * Math.cos(h * Math.PI / 180), b = c * Math.sin(h * Math.PI / 180);
    const x = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3, y = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3, z = (l - 0.0894841775 * a - 1.2914855480 * b) ** 3;
    return [4.0767416621 * x - 3.3077115913 * y + 0.2309699292 * z, -1.2684380046 * x + 2.6097574011 * y - 0.3413193965 * z, -0.0041960863 * x - 0.7034186147 * y + 1.7076147010 * z];
  }
  const inGamut = c => lin(c).every(v => v >= -0.0005 && v <= 1.0005);
  const Y = c => { const [r, g, b] = lin(c).map(v => Math.min(1, Math.max(0, v))); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const contrast = (a, b) => { const [h, l] = [Y(a), Y(b)].sort((x, y) => y - x); return (h + 0.05) / (l + 0.05); };
  const fit = ([l, c, h]) => { while (c > 0 && !inGamut([l, c, h])) c -= 0.002; return [l, Math.max(0, +c.toFixed(3)), h]; };
  function solve(target, ref, dir, c, h) {
    let lo = dir > 0 ? ref[0] : 0, hi = dir > 0 ? 1 : ref[0];
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; const r = contrast(fit([m, c, h]), ref); if ((r < target) === (dir > 0)) lo = m; else hi = m; }
    return fit([+((lo + hi) / 2).toFixed(3), c, h]);
  }
  const ok = c => 'oklch(' + c[0].toFixed(3) + ' ' + c[1].toFixed(3) + ' ' + c[2] + ')';
  const N = { light: { bg: [0.972, 0, 0], surface: [0.992, 0, 0], ink: [0.22, 0, 0] }, dark: { bg: [0.19, 0, 0], surface: [0.225, 0, 0], ink: [0.95, 0, 0] } };

  // f: { h, fill: [L light, L dark], fillC: [c light, c dark], textC, subC, onFill: 'dark' | 'light' per theme }
  function family(name, f, theme) {
    const t = theme === 'light' ? 0 : 1, n = N[theme], dir = theme === 'light' ? -1 : 1;
    const fill = fit([f.fill[t], f.fillC[t], f.h]);
    const hover = fit([fill[0] + (f.hoverDir ? f.hoverDir[t] : (theme === 'light' ? -0.04 : 0.04)), fill[1] + 0.005, f.h]);
    const text = solve(f.textTarget || 5.8, n.surface, dir, f.textC, f.h);
    const subtle = fit([theme === 'light' ? 0.955 : 0.265, f.subC * (theme === 'light' ? 1 : 1.15), f.h]);
    const line = solve(1.8, n.bg, dir, f.subC * 2, f.h);
    const on = f.onFill && f.onFill[t] === 'light' ? [0.985, 0, 0] : N.light.ink;
    const v = {};
    v['--' + name + (name === 'accent' ? '' : '-fill')] = ok(fill);
    v['--' + name + '-hover'] = ok(hover);
    v['--' + name + (name === 'accent' ? '-text' : '')] = ok(text);
    v['--' + name + '-subtle'] = ok(subtle);
    v['--' + name + '-line'] = ok(line);
    v['--on-' + name] = ok(on);
    // One accent color for the fill and every mark (switch, check, radio, tab, chart, mark's last dot).
    if (name === 'accent') v['--accent-strong'] = ok(fill);
    return { vars: v, raw: { fill, text, subtle, line, on }, fillContrast: contrast(on, fill), textContrast: contrast(text, n.surface) };
  }
  window.buildCombo = function (combo) {
    const out = {};
    ['light', 'dark'].forEach(theme => {
      const vars = {}, info = {};
      for (const k of ['accent', 'danger', 'warning', 'info']) { const r = family(k, combo[k], theme); Object.assign(vars, r.vars); info[k] = r; }
      out[theme] = { vars, info };
    });
    return out;
  };
})();
