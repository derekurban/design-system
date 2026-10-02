// Renders a palette table. Values are read live from tokens/colors.css via a light and a dark probe.
(function () {
  const ALIASES = {
    bg: ['surface-page'], surface: ['surface-card', 'surface-raised'], sunk: ['surface-sunk'], line: ['border-hairline'], 'line-strong': ['border-control'],
    ink: ['text-primary'], 'ink-secondary': ['text-secondary'], 'ink-tertiary': ['text-tertiary'], 'data-neutral': ['data-default'],
    accent: ['action-primary'], 'accent-hover': ['action-primary-hover'], 'accent-strong': ['data-resolved', 'focus-ring'], 'accent-text': ['text-link', 'text-selected', 'text-success'],
    'accent-subtle': ['surface-selected'], 'accent-line': ['border-accent'], 'on-accent': ['text-on-accent'],
    danger: ['text-danger'], 'danger-subtle': ['surface-danger'], 'danger-line': ['border-danger'],
    warning: ['text-warning'], 'warning-subtle': ['surface-warning'], 'warning-line': ['border-warning'],
    info: ['text-info'], 'info-subtle': ['surface-info'], 'info-line': ['border-info'],
  };
  function probe(theme) { const d = document.createElement('div'); d.setAttribute('data-theme', theme); d.hidden = true; document.body.appendChild(d); return getComputedStyle(d); }
  const cv = document.createElement('canvas'); cv.width = cv.height = 1; const cx = cv.getContext('2d', { willReadFrequently: true });
  function hex(c) { cx.clearRect(0, 0, 1, 1); cx.fillStyle = c; cx.fillRect(0, 0, 1, 1); return '#' + [...cx.getImageData(0, 0, 1, 1).data].slice(0, 3).map(x => x.toString(16).padStart(2, '0')).join(''); }
  function cell(theme, cs, t, kind) {
    const v = cs.getPropertyValue('--' + t).trim();
    const ok = v.replace(/^oklch\((.*)\)$/, '$1');
    let sw;
    if (kind === 'text') sw = '<div class="sw sw-t" style="color:' + v + '">Aa</div>';
    else if (kind === 'on') sw = '<div class="sw sw-t" style="background:var(--accent);color:' + v + ';box-shadow:none">Aa</div>';
    else sw = '<div class="sw" style="background:' + v + '"></div>';
    return '<div class="c" data-theme="' + theme + '">' + sw + '<div class="v"><span>' + ok + '</span><span class="hx">' + hex(v) + '</span></div></div>';
  }
  window.renderPalette = function (host, families) {
    const L = probe('light'), D = probe('dark');
    let h = '<div class="row head"><div class="k">Token</div><div class="p">Purpose</div><div class="c" data-theme="light"><span class="th">Light</span></div><div class="c" data-theme="dark"><span class="th">Dark</span></div></div>';
    families.forEach(([name, rule, rows]) => {
      h += '<div class="row fam"><div class="k" style="grid-column:span 2"><span class="fn">' + name + '</span><span class="fr">' + rule + '</span></div><div class="c" data-theme="light"></div><div class="c" data-theme="dark"></div></div>';
      rows.forEach(([t, purpose, kind]) => {
        h += '<div class="row"><div class="k"><span class="tk">--' + t + '</span>' + (ALIASES[t] || []).map(a => '<span class="al">--' + a + '</span>').join('') + '</div><div class="p">' + purpose + '</div>' + cell('light', L, t, kind) + cell('dark', D, t, kind) + '</div>';
      });
    });
    host.innerHTML = h;
  };
})();
