/* @ds-bundle: {"format":4,"namespace":"DerekUrbanDesignSystem_3bae67","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Mark","sourcePath":"components/brand/Mark.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"IconSwap","sourcePath":"components/icons/IconSwap.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"fa5b3764935f","components/actions/IconButton.jsx":"4caac9cc036e","components/brand/Mark.jsx":"42a582308096","components/data/BarChart.jsx":"42d8ccd18249","components/data/LineChart.jsx":"e373a4105426","components/data/Sparkline.jsx":"f489c84bdd1b","components/data/Stat.jsx":"88625e3148ca","components/display/Avatar.jsx":"d744e2a17f4a","components/display/Tag.jsx":"7211d3e95ccf","components/feedback/Toast.jsx":"7073c4f7bb5a","components/feedback/Tooltip.jsx":"c0e0b1bab052","components/forms/Checkbox.jsx":"7d660e0d04a8","components/forms/Input.jsx":"3edf5461afc0","components/forms/Radio.jsx":"a7e93df6429a","components/forms/SegmentedControl.jsx":"0d2d63407fc1","components/forms/Select.jsx":"a9918253a93d","components/forms/Switch.jsx":"5a6242b62f25","components/icons/Icon.jsx":"f5647fcfc25f","components/icons/IconSwap.jsx":"c9b1b29e27e1","components/navigation/Menu.jsx":"4d78cef68d85","components/navigation/Tabs.jsx":"e997d31c7ad3","components/surfaces/Card.jsx":"395eda70b1e1","components/surfaces/Dialog.jsx":"7e981b4b909b","examples/portfolio/CaseStudy.jsx":"bff74c8faf79","examples/portfolio/Home.jsx":"500b21f01955","examples/portfolio/projects.js":"7f154798e065","explorations/color-combos.js":"58aa26e9fe31","guidelines/color/palette.js":"6c72effe9b17","guidelines/data/data-viz.js":"61b6ddab4c76","src/index.js":"4f820d3dd0bb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DerekUrbanDesignSystem_3bae67 = window.DerekUrbanDesignSystem_3bae67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-sm)',
    padding: '0 var(--space-3)',
    radius: 'var(--radius-sm)',
    fontSize: 13,
    lineHeight: '16px'
  },
  md: {
    height: 'var(--control-md)',
    padding: '0 var(--space-4)',
    radius: 'var(--radius-md)',
    fontSize: 14,
    lineHeight: '20px'
  },
  lg: {
    height: 'var(--control-lg)',
    padding: '0 var(--space-5)',
    radius: 'var(--radius-md)',
    fontSize: 16,
    lineHeight: '24px'
  }
};
function variantStyle(variant, hover, disabled) {
  if (disabled) return {
    background: variant === 'ghost' ? 'transparent' : 'var(--sunk)',
    color: 'var(--ink-tertiary)',
    ring: 'none'
  };
  switch (variant) {
    case 'primary':
      return {
        background: hover ? 'var(--accent-hover)' : 'var(--accent)',
        color: 'var(--on-accent)',
        ring: '0 0 0 0.5px var(--accent-line)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--sunk)' : 'transparent',
        color: 'var(--ink)',
        ring: 'none'
      };
    case 'danger':
      return {
        background: hover ? 'var(--sunk)' : 'var(--surface)',
        color: 'var(--danger)',
        ring: 'var(--ring-control)'
      };
    default:
      return {
        background: hover ? 'var(--sunk)' : 'var(--surface)',
        color: 'var(--ink)',
        ring: 'var(--ring-control)'
      };
  }
}
function Button({
  variant = 'secondary',
  size = 'md',
  iconStart,
  iconEnd,
  fullWidth = false,
  static: isStatic = false,
  disabled = false,
  href,
  type = 'button',
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hover || press, disabled);
  const rings = [v.ring !== 'none' ? v.ring : null, focus ? 'var(--ring-focus)' : null].filter(Boolean);
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      border: 0,
      margin: 0,
      outline: 'none',
      textDecoration: 'none',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      lineHeight: s.lineHeight,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      background: v.background,
      color: v.color,
      boxShadow: rings.length ? rings.join(', ') : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      transform: press && !disabled && !isStatic ? 'scale(var(--press-scale))' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...style
    }
  }), iconStart, children != null && /*#__PURE__*/React.createElement("span", null, children), iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 'var(--control-sm)',
    radius: 'var(--radius-sm)'
  },
  md: {
    box: 'var(--control-md)',
    radius: 'var(--radius-md)'
  },
  lg: {
    box: 'var(--control-lg)',
    radius: 'var(--radius-md)'
  }
};
function IconButton({
  label,
  variant = 'ghost',
  size = 'md',
  selected = false,
  static: isStatic = false,
  disabled = false,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const active = hover || press;
  let bg = 'transparent',
    color = 'var(--ink-secondary)',
    ring = null;
  if (variant === 'secondary') {
    bg = active ? 'var(--sunk)' : 'var(--surface)';
    color = 'var(--ink)';
    ring = 'var(--ring-control)';
  } else if (variant === 'primary') {
    bg = active ? 'var(--accent-hover)' : 'var(--accent)';
    color = 'var(--on-accent)';
    ring = '0 0 0 0.5px var(--accent-line)';
  } else {
    bg = active ? 'var(--sunk)' : 'transparent';
    color = active ? 'var(--ink)' : 'var(--ink-secondary)';
  }
  if (selected && variant !== 'primary') {
    bg = 'var(--accent-subtle)';
    color = 'var(--accent-text)';
    ring = '0 0 0 0.5px var(--accent-line)';
  }
  if (disabled) {
    bg = variant === 'ghost' ? 'transparent' : 'var(--sunk)';
    color = 'var(--ink-tertiary)';
    ring = null;
  }
  const rings = [ring, focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": selected || undefined,
    disabled: disabled
  }, rest, {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      border: 0,
      margin: 0,
      padding: 0,
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: s.box,
      height: s.box,
      borderRadius: s.radius,
      background: bg,
      color,
      boxShadow: rings.length ? rings.join(', ') : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled && !isStatic ? 'scale(var(--press-scale))' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Mark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Mark({
  size = 48,
  variant = 'default',
  animate = false,
  replayKey,
  label = 'Derek Urban',
  style
}) {
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
    const draw = site ? 1200 : 900,
      ulAt = 120 + draw + 100,
      close = site ? ulAt + 380 : 120 + draw;
    const runs = [q('bl').animate([{
      transform: 'translateX(-8px)',
      opacity: 0
    }, {
      transform: 'none',
      opacity: 1
    }], {
      duration: slow,
      easing: settle,
      fill: 'backwards'
    }), q('stroke').animate([{
      strokeDasharray: '1 1',
      strokeDashoffset: 1
    }, {
      strokeDasharray: '1 1',
      strokeDashoffset: 0
    }], {
      duration: draw,
      delay: 120,
      easing: inOut,
      fill: 'backwards'
    }), q('br').animate([{
      transform: 'translateX(10px)',
      strokeOpacity: 0.3
    }, {
      transform: 'translateX(-1.5px)',
      offset: 0.6
    }, {
      transform: 'none',
      strokeOpacity: 1
    }], {
      duration: 520,
      delay: close,
      easing: settle,
      fill: 'backwards'
    })];
    if (site) runs.push(q('ul').animate([{
      clipPath: 'inset(0 100% 0 0)'
    }, {
      clipPath: 'inset(0 0 0 0)'
    }], {
      duration: 460,
      delay: ulAt,
      easing: 'cubic-bezier(.3,.6,.2,1)',
      fill: 'backwards'
    }));
    return () => runs.forEach(a => a.cancel());
  }, [animate, replayKey, site]);
  const line = {
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "10 10 80 80",
    width: size,
    height: size,
    role: "img",
    "aria-label": label,
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", _extends({
    "data-part": "bl",
    d: BL,
    stroke: "var(--ink)",
    strokeWidth: 6,
    style: {
      transformBox: 'view-box'
    }
  }, line)), /*#__PURE__*/React.createElement("path", _extends({
    "data-part": "stroke",
    d: site ? LETTERS : SCRIBBLE,
    pathLength: 1,
    stroke: "var(--ink)",
    strokeWidth: site ? 4.5 : 5.5
  }, line)), site && /*#__PURE__*/React.createElement("path", {
    "data-part": "ul",
    d: UNDERLINE,
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("path", _extends({
    "data-part": "br",
    d: BR,
    stroke: "var(--accent-strong)",
    strokeWidth: 6,
    style: {
      transformBox: 'view-box'
    }
  }, line)));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mark.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function useWidth(fallback) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(fallback);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setW(el.clientWidth || fallback);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}
function motionOK() {
  return typeof matchMedia === 'undefined' || !matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function cssVar(el, name, fb) {
  return el && getComputedStyle(el).getPropertyValue(name).trim() || fb;
}
const capStyle = {
  font: 'var(--font-caption)',
  fontVariantNumeric: 'tabular-nums'
};
function BarChart({
  data = [],
  labels,
  highlight,
  emphasis = 'accent',
  height = 180,
  unit = '',
  showValues = 'hover',
  animate = true,
  replayKey,
  label,
  style
}) {
  const [ref, w] = useWidth(600);
  const svg = React.useRef(null);
  const [hover, setHover] = React.useState(null);
  const values = data.map(d => typeof d === 'number' ? d : d.value);
  const names = labels || data.map(d => typeof d === 'object' ? d.label : '');
  const hi = highlight === undefined ? values.length - 1 : highlight;
  const top = 20,
    bottom = names.some(Boolean) ? 22 : 4,
    ch = height - top - bottom;
  const max = Math.max(1, ...values) * 1.1,
    gap = values.length > 24 ? 3 : 6;
  const bw = Math.max(1, (w - gap * (values.length - 1)) / values.length);
  const hiFill = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-strong)';
  const hiText = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-text)';
  React.useLayoutEffect(() => {
    if (!animate || !motionOK() || !svg.current || !svg.current.animate) return;
    const ease = cssVar(svg.current, '--ease-settle', 'cubic-bezier(0.16, 1, 0.3, 1)');
    const runs = [...svg.current.querySelectorAll('[data-bar]')].map((el, i) => el.animate([{
      transform: 'scaleY(0)'
    }, {
      transform: 'scaleY(1)'
    }], {
      duration: 640,
      delay: i * 24,
      easing: ease,
      fill: 'backwards'
    }));
    const v = svg.current.querySelector('[data-hi-value]');
    if (v) runs.push(v.animate([{
      opacity: 0
    }, {
      opacity: 1
    }], {
      duration: 200,
      delay: values.length * 24 + 200,
      fill: 'backwards'
    }));
    return () => runs.forEach(a => a.cancel());
  }, [replayKey, animate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svg,
    role: "img",
    "aria-label": label,
    viewBox: '0 0 ' + w + ' ' + height,
    width: "100%",
    height: height,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: 0,
    x2: w,
    y1: top + ch / 2,
    y2: top + ch / 2,
    stroke: "var(--line)",
    strokeWidth: 0.5,
    strokeDasharray: "2 3"
  }), values.map((v, i) => {
    const bh = ch * v / max,
      x = i * (bw + gap),
      y = top + ch - bh;
    const isHi = i === hi,
      isHover = hover === i && !isHi;
    const show = showValues === 'all' || isHi || isHover;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null)
    }, /*#__PURE__*/React.createElement("rect", {
      "data-bar": "",
      x: x,
      y: y,
      width: bw,
      height: bh,
      rx: Math.min(3, bw / 2),
      fill: isHi ? hiFill : isHover ? 'var(--ink-tertiary)' : 'var(--data-neutral)',
      style: {
        transformBox: 'fill-box',
        transformOrigin: 'bottom',
        transition: 'fill var(--duration-fast) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("text", {
      "data-hi-value": isHi ? '' : undefined,
      x: x + bw / 2,
      y: y - 6,
      textAnchor: "middle",
      fill: isHi ? hiText : 'var(--ink-secondary)',
      style: {
        font: 'var(--font-label)',
        fontVariantNumeric: 'tabular-nums',
        opacity: show ? 1 : 0,
        transition: 'opacity var(--duration-fast) var(--ease-out)'
      }
    }, v, unit), names[i] ? /*#__PURE__*/React.createElement("text", {
      x: x + bw / 2,
      y: height - 4,
      textAnchor: "middle",
      fill: "var(--ink-tertiary)",
      style: capStyle
    }, names[i]) : null, /*#__PURE__*/React.createElement("rect", {
      x: x - gap / 2,
      y: 0,
      width: bw + gap,
      height: height,
      fill: "transparent"
    }));
  }), /*#__PURE__*/React.createElement("line", {
    x1: 0,
    x2: w,
    y1: top + ch,
    y2: top + ch,
    stroke: "var(--line-strong)",
    strokeWidth: 0.5
  })));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function useWidth(fallback) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(fallback);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setW(el.clientWidth || fallback);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}
function motionOK() {
  return typeof matchMedia === 'undefined' || !matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function cssVar(el, name, fb) {
  return el && getComputedStyle(el).getPropertyValue(name).trim() || fb;
}
const capStyle = {
  font: 'var(--font-caption)',
  fontVariantNumeric: 'tabular-nums'
};
function LineChart({
  series = [],
  compare,
  labels,
  endLabel,
  compareLabel,
  emphasis = 'accent',
  height = 180,
  animate = true,
  replayKey,
  label,
  style
}) {
  const [ref, w] = useWidth(600);
  const svg = React.useRef(null);
  const top = 16,
    bottom = labels ? 22 : 4,
    right = endLabel || compareLabel ? Math.min(110, w * 0.28) : 8;
  const cw = Math.max(10, w - right),
    ch = height - top - bottom;
  const all = series.concat(compare || []);
  const max = Math.max(...all) * 1.1,
    min = Math.min(...all) * 0.85;
  const X = i => i * cw / Math.max(1, series.length - 1);
  const Y = v => top + ch * (1 - (v - min) / (max - min || 1));
  const path = d => d.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
  const last = series[series.length - 1];
  const dotFill = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-strong)';
  const dotText = emphasis === 'ink' ? 'var(--ink)' : 'var(--accent-text)';
  React.useLayoutEffect(() => {
    const s = svg.current;
    if (!animate || !motionOK() || !s || !s.animate) return;
    const ease = cssVar(s, '--ease-out', 'cubic-bezier(0.2, 0.8, 0.2, 1)'),
      settle = cssVar(s, '--ease-settle', 'cubic-bezier(0.16, 1, 0.3, 1)');
    const p = s.querySelector('[data-line]'),
      len = p.getTotalLength();
    const runs = [p.animate([{
      strokeDasharray: len,
      strokeDashoffset: len
    }, {
      strokeDasharray: len,
      strokeDashoffset: 0
    }], {
      duration: 900,
      easing: ease,
      fill: 'backwards'
    })];
    const c = s.querySelector('[data-compare]');
    if (c) runs.push(c.animate([{
      opacity: 0
    }, {
      opacity: 1
    }], {
      duration: 320,
      easing: ease,
      fill: 'backwards'
    }));
    const d = s.querySelector('[data-dot]');
    runs.push(d.animate([{
      transform: 'scale(0)',
      opacity: 0
    }, {
      transform: 'scale(1)',
      opacity: 1
    }], {
      duration: 480,
      delay: 820,
      easing: settle,
      fill: 'backwards'
    }));
    s.querySelectorAll('[data-end]').forEach(t => runs.push(t.animate([{
      opacity: 0,
      transform: 'translateX(-4px)'
    }, {
      opacity: 1,
      transform: 'none'
    }], {
      duration: 320,
      delay: 900,
      easing: ease,
      fill: 'backwards'
    })));
    return () => runs.forEach(a => a.cancel());
  }, [replayKey, animate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svg,
    role: "img",
    "aria-label": label,
    viewBox: '0 0 ' + w + ' ' + height,
    width: "100%",
    height: height,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, [0, 0.5, 1].map(f => /*#__PURE__*/React.createElement("line", {
    key: f,
    x1: 0,
    x2: cw,
    y1: top + ch * f,
    y2: top + ch * f,
    stroke: "var(--line)",
    strokeWidth: 0.5,
    strokeDasharray: f === 1 ? undefined : '2 3'
  })), compare && /*#__PURE__*/React.createElement("path", {
    "data-compare": "",
    d: path(compare),
    fill: "none",
    stroke: "var(--data-neutral)",
    strokeWidth: 1.5,
    strokeDasharray: "4 4",
    strokeLinecap: "round"
  }), compare && compareLabel && /*#__PURE__*/React.createElement("text", {
    "data-end": "",
    x: cw + 12,
    y: Y(compare[compare.length - 1]) + 4,
    fill: "var(--ink-tertiary)",
    style: capStyle
  }, compareLabel), /*#__PURE__*/React.createElement("path", {
    "data-line": "",
    d: path(series),
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: 1.5,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    "data-dot": "",
    cx: X(series.length - 1),
    cy: Y(last),
    r: 4,
    fill: dotFill,
    style: {
      transformBox: 'fill-box',
      transformOrigin: 'center'
    }
  }), endLabel && /*#__PURE__*/React.createElement("text", {
    "data-end": "",
    x: cw + 12,
    y: Y(last) + 4,
    fill: dotText,
    style: {
      font: 'var(--font-label)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, endLabel), labels && labels.map((l, i) => l ? /*#__PURE__*/React.createElement("text", {
    key: i,
    x: X(i),
    y: height - 4,
    textAnchor: i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle',
    fill: "var(--ink-tertiary)",
    style: capStyle
  }, l) : null)));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function Sparkline({
  data = [],
  width = 96,
  height = 28,
  tone = 'neutral',
  animate = true,
  label,
  style
}) {
  const p = React.useRef(null);
  const max = Math.max(...data),
    min = Math.min(...data);
  const X = i => i * width / Math.max(1, data.length - 1);
  const Y = v => 2 + (height - 4) * (1 - (v - min) / (max - min || 1));
  const color = tone === 'accent' ? 'var(--accent-strong)' : 'var(--ink-tertiary)';
  React.useLayoutEffect(() => {
    if (!animate || !p.current || !p.current.animate || typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const len = p.current.getTotalLength();
    const a = p.current.animate([{
      strokeDasharray: len,
      strokeDashoffset: len
    }, {
      strokeDasharray: len,
      strokeDashoffset: 0
    }], {
      duration: 720,
      easing: getComputedStyle(p.current).getPropertyValue('--ease-out').trim() || 'ease-out',
      fill: 'backwards'
    });
    return () => a.cancel();
  }, [animate]);
  return /*#__PURE__*/React.createElement("svg", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    ref: p,
    d: data.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' '),
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: X(data.length - 1),
    cy: Y(data[data.length - 1]),
    r: 2.5,
    fill: color
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function Stat({
  label,
  value,
  delta,
  trend,
  emphasis = false,
  size = 'md',
  style
}) {
  const fs = size === 'lg' ? '300 48px/52px' : size === 'sm' ? '300 28px/32px' : '300 36px/40px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-caption)',
      color: 'var(--ink-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: fs + ' var(--font-title)',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums',
      color: emphasis ? 'var(--accent-text)' : 'var(--ink)'
    }
  }, value), (delta || trend) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-caption)',
      color: 'var(--ink-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, delta) : /*#__PURE__*/React.createElement("span", null), trend && /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: trend,
    tone: emphasis ? 'accent' : 'neutral'
  })));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function initials(name) {
  return String(name || '').trim().split(/\s+/).slice(0, 2).map(p => p.charAt(0).toUpperCase()).join('');
}
function Avatar({
  src,
  name,
  size = 32,
  style
}) {
  const [failed, setFailed] = React.useState(false);
  const showImg = src && !failed;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: 'var(--sunk)',
      color: 'var(--ink-secondary)',
      boxShadow: 'inset 0 0 0 0.5px var(--line)',
      fontFamily: 'var(--font-title)',
      fontWeight: 500,
      fontSize: Math.round(size * 0.4),
      letterSpacing: '-0.01em',
      ...style
    }
  }, showImg ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials(name), showImg && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      boxShadow: 'inset 0 0 0 1px var(--image-outline)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  size = 'md',
  onClick,
  onRemove,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  const h = size === 'sm' ? 24 : 28;
  let bg = 'var(--sunk)',
    color = 'var(--ink-secondary)',
    ring = 'none';
  if (selected) {
    bg = 'var(--accent-subtle)';
    color = 'var(--accent-text)';
    ring = 'inset 0 0 0 0.5px var(--accent-line)';
  } else if (interactive && hover) {
    color = 'var(--ink)';
    ring = 'inset 0 0 0 0.5px var(--line-strong)';
  }
  const Tag = interactive ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    type: interactive ? 'button' : undefined,
    "aria-pressed": interactive ? selected : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: 'none',
      border: 0,
      margin: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      height: h,
      padding: onRemove ? '0 var(--space-1) 0 var(--space-2)' : '0 var(--space-2)',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color,
      boxShadow: ring,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": 'Remove ' + (typeof children === 'string' ? children : ''),
    tabIndex: 0,
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onRemove();
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      margin: '-3px -3px -3px 0',
      borderRadius: 'var(--radius-xs)',
      color: 'var(--ink-tertiary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  description,
  tone = 'neutral',
  action,
  onDismiss,
  animateIn = true,
  style
}) {
  const [shown, setShown] = React.useState(!animateIn);
  const [leaving, setLeaving] = React.useState(false);
  const timer = React.useRef(null);
  React.useEffect(() => {
    if (shown) return;
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setShown(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, []);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  // Exit is quieter than entry: no travel, a slight shrink and blur, and quicker.
  const dismiss = () => {
    setLeaving(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => onDismiss && onDismiss(), 120);
  };
  const dot = {
    success: 'var(--accent-strong)',
    danger: 'var(--danger)',
    warning: 'var(--warning)',
    info: 'var(--info)'
  }[tone] || null;
  const tIn = 'var(--duration-slow) var(--ease-out)';
  const tOut = 'var(--duration-exit) var(--ease-out)';
  const motion = leaving ? {
    opacity: 0,
    transform: 'scale(0.98)',
    filter: 'blur(2px)',
    transition: 'opacity ' + tOut + ', transform ' + tOut + ', filter ' + tOut
  } : shown ? {
    opacity: 1,
    transform: 'none',
    filter: 'blur(0px)',
    transition: 'opacity ' + tIn + ', transform ' + tIn + ', filter ' + tIn
  } : {
    opacity: 0,
    transform: 'translateY(8px)',
    filter: 'blur(4px)',
    transition: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      width: 360,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: 'var(--space-3) var(--space-3) var(--space-3) var(--space-4)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-float)',
      color: 'var(--ink)',
      ...motion,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 8,
      height: 8,
      marginTop: 8,
      borderRadius: 'var(--radius-full)',
      background: dot
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      paddingTop: 2,
      paddingBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--ink-secondary)'
    }
  }, description)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, action), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: dismiss,
    style: {
      flexShrink: 0,
      appearance: 'none',
      border: 0,
      margin: 0,
      padding: 0,
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-xs)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: 'var(--ink-tertiary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
// Shared across tooltips: once one has been shown, neighbours open instantly with no transition.
let lastHide = 0;
const WARM_MS = 400;
function Tooltip({
  content,
  side = 'top',
  delay = 300,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const [instant, setInstant] = React.useState(false);
  const t = React.useRef(null);
  const tipId = 'du-tip-' + (React.useId ? React.useId().replace(/:/g, '') : Math.random().toString(36).slice(2));
  const child = React.isValidElement(children) ? React.cloneElement(children, {
    'aria-describedby': tipId
  }) : children;
  const show = () => {
    clearTimeout(t.current);
    if (Date.now() - lastHide < WARM_MS) {
      setInstant(true);
      setOpen(true);
      return;
    }
    setInstant(false);
    t.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(t.current);
    if (open) lastHide = Date.now();
    setOpen(false);
  };
  React.useEffect(() => () => clearTimeout(t.current), []);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  const rest = side === 'bottom' ? 'translateY(-2px) scale(0.97)' : 'translateY(2px) scale(0.97)';
  const tIn = 'opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, child, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: tipId,
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      zIndex: 30,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: 'var(--space-1) var(--space-2)',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--ink)',
      color: 'var(--bg)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      transformOrigin: side === 'bottom' ? 'top center' : 'bottom center',
      opacity: open ? 1 : 0,
      transform: 'translateX(-50%) ' + (open ? 'none' : rest),
      transition: open ? instant ? 'none' : tIn : 'opacity var(--duration-exit) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MT = 'var(--duration-fast) var(--ease-icon)';
function mark(on) {
  return {
    gridArea: '1 / 1',
    opacity: on ? 1 : 0,
    transform: on ? 'scale(1)' : 'scale(0.25)',
    filter: on ? 'blur(0px)' : 'blur(2px)',
    transition: 'opacity ' + MT + ', transform ' + MT + ', filter ' + MT
  };
}
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  description,
  disabled = false,
  indeterminate = false,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const filled = on || indeterminate;
  const rings = [filled ? '0 0 0 1px var(--accent-line)' : hover ? '0 0 0 1px var(--ink-tertiary)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      background: filled ? 'var(--accent-subtle)' : 'var(--surface)',
      boxShadow: rings.join(', '),
      color: 'var(--accent-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: id,
    type: "checkbox",
    checked: on,
    disabled: disabled
  }, rest, {
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked, e);
    },
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: mark(on && !indeterminate)
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: mark(indeterminate)
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })))), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--ink)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--ink-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'var(--ink)'
};
const hintStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  lineHeight: '18px',
  color: 'var(--ink-tertiary)'
};
const errorStyle = {
  ...hintStyle,
  color: 'var(--danger)'
};
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    fs: 13,
    lh: '18px',
    r: 'var(--radius-sm)'
  },
  md: {
    h: 'var(--control-md)',
    fs: 14,
    lh: '22px',
    r: 'var(--radius-md)'
  },
  lg: {
    h: 'var(--control-lg)',
    fs: 16,
    lh: '26px',
    r: 'var(--radius-md)'
  }
};
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  iconStart,
  suffix,
  multiline = false,
  rows = 4,
  disabled = false,
  style,
  inputStyle,
  onFocus,
  onBlur,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const ring = error ? '0 0 0 1px var(--danger)' : focus ? '0 0 0 0.5px var(--line-strong), var(--ring-focus)' : 'var(--ring-hairline)';
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 'var(--space-2)',
      minHeight: s.h,
      padding: multiline ? 'var(--space-3)' : '0 var(--space-3)',
      borderRadius: s.r,
      background: focus ? 'var(--surface)' : 'var(--sunk)',
      boxShadow: ring,
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'text',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-tertiary)'
    }
  }, iconStart), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    disabled: disabled,
    rows: multiline ? rows : undefined,
    "aria-invalid": !!error || undefined,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      padding: 0,
      margin: 0,
      resize: multiline ? 'vertical' : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      lineHeight: s.lh,
      color: 'var(--ink)',
      boxShadow: 'none',
      ...inputStyle
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-tertiary)',
      fontSize: 13,
      lineHeight: '18px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, suffix)), error ? /*#__PURE__*/React.createElement("div", {
    style: errorStyle
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  name,
  value,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rings = [checked ? '0 0 0 1px var(--accent-line)' : hover ? '0 0 0 1px var(--ink-tertiary)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--accent-subtle)' : 'var(--surface)',
      boxShadow: rings.join(', '),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled
  }, rest, {
    onChange: e => onChange && onChange(value, e),
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: 'var(--accent-strong)',
      opacity: checked ? 1 : 0,
      transform: checked ? 'scale(1)' : 'scale(0.25)',
      transition: 'opacity var(--duration-fast) var(--ease-icon), transform var(--duration-fast) var(--ease-icon)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--ink)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--ink-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 28,
    fs: 13,
    px: 'var(--space-3)'
  },
  md: {
    h: 32,
    fs: 13,
    px: 'var(--space-3)'
  },
  lg: {
    h: 40,
    fs: 14,
    px: 'var(--space-4)'
  }
};
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  label,
  style
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const s = SIZES[size] || SIZES.md;
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const measure = React.useCallback(() => {
    const el = refs.current[value];
    if (el) setInd(p => p && p.left === el.offsetLeft && p.width === el.offsetWidth ? p : {
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [value]);
  React.useLayoutEffect(measure, [measure, options.length, size, fullWidth]);
  // Re-measure when webfonts finish loading or the control resizes, so the thumb never sits on stale metrics.
  React.useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const first = Object.values(refs.current)[0];
    if (typeof ResizeObserver === 'undefined' || !first || !first.parentElement) return;
    const ro = new ResizeObserver(measure);
    ro.observe(first.parentElement);
    return () => ro.disconnect();
  }, [measure]);
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": label,
    style: {
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      padding: 2,
      gap: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sunk)',
      boxShadow: 'inset 0 0 0 0.5px var(--line)',
      ...style
    }
  }, ind && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 2,
      bottom: 2,
      left: 0,
      width: ind.width,
      transform: 'translateX(' + ind.left + 'px)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface)',
      boxShadow: 'var(--ring-hairline), 0 1px 2px rgb(0 0 0 / 0.06)',
      transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out)'
    }
  }), opts.map(o => {
    const sel = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      ref: el => refs.current[o.value] = el,
      type: "button",
      role: "radio",
      "aria-checked": sel,
      onClick: () => onChange && onChange(o.value),
      onMouseEnter: () => setHover(o.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        flex: fullWidth ? 1 : undefined,
        appearance: 'none',
        border: 0,
        margin: 0,
        background: 'transparent',
        height: s.h,
        padding: '0 ' + s.px,
        borderRadius: 'var(--radius-sm)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-body)',
        fontSize: s.fs,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        color: sel || hover === o.value ? 'var(--ink)' : 'var(--ink-secondary)',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'var(--ink)'
};
const hintStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  lineHeight: '18px',
  color: 'var(--ink-tertiary)'
};
const errorStyle = {
  ...hintStyle,
  color: 'var(--danger)'
};
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    fs: 13,
    r: 'var(--radius-sm)'
  },
  md: {
    h: 'var(--control-md)',
    fs: 14,
    r: 'var(--radius-md)'
  },
  lg: {
    h: 'var(--control-lg)',
    fs: 16,
    r: 'var(--radius-md)'
  }
};
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  size = 'md',
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const ring = error ? '0 0 0 1px var(--danger)' : focus ? '0 0 0 0.5px var(--line-strong), var(--ring-focus)' : 'var(--ring-control)';
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    "aria-invalid": !!error || undefined
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: s.h,
      margin: 0,
      border: 0,
      outline: 'none',
      padding: '0 36px 0 var(--space-3)',
      borderRadius: s.r,
      boxShadow: ring,
      background: hover && !disabled ? 'var(--sunk)' : 'var(--surface)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 'var(--space-3)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("div", {
    style: errorStyle
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  description,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const stretch = press && !disabled ? 4 : 0;
  const rings = [on ? '0 0 0 1px var(--accent-line)' : '0 0 0 1px var(--line-strong)', focus ? 'var(--ring-focus)' : null].filter(Boolean);
  const control = /*#__PURE__*/React.createElement("span", {
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--accent-subtle)' : 'var(--sunk)',
      boxShadow: rings.join(', '),
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled
  }, rest, {
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked, e);
    },
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit',
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: 2,
      width: 16 + stretch,
      height: 16,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--accent-strong)' : 'var(--surface)',
      boxShadow: on ? 'none' : 'var(--ring-control), 0 1px 2px rgb(0 0 0 / 0.08)',
      transform: on ? 'translateX(' + (16 - stretch) + 'px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out), background var(--duration-fast) var(--ease-out)'
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      marginTop: 1
    }
  }, control), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--ink)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--ink-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Renders a Lucide icon from the globally loaded Lucide UMD build (window.lucide).
// Load once per page: <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
function toPascal(n) {
  return String(n || '').split(/[-_\s]+/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const key = toPascal(name);
  let node = lib ? lib.icons && lib.icons[key] || lib[key] : null;
  if (Array.isArray(node) && node[0] === 'svg') node = node[2];
  const children = Array.isArray(node) ? node.map(([tag, attrs], i) => {
    const {
      key: _k,
      ...a
    } = attrs || {};
    return React.createElement(tag, {
      key: i,
      ...a
    });
  }) : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/icons/IconSwap.jsx
try { (() => {
const T = 'var(--duration-base) var(--ease-icon)';
function layer(on) {
  return {
    gridArea: '1 / 1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: on ? 1 : 0,
    transform: on ? 'scale(1)' : 'scale(0.25)',
    filter: on ? 'blur(0px)' : 'blur(4px)',
    transition: 'opacity ' + T + ', transform ' + T + ', filter ' + T
  };
}

// Both icons stay mounted and cross-fade, so the swap is interruptible and never animates on first render.
function IconSwap({
  active = false,
  from,
  to,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": active || undefined,
    style: layer(!active)
  }, from), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": !active || undefined,
    style: layer(active)
  }, to));
}
Object.assign(__ds_scope, { IconSwap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/IconSwap.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function MenuItem({
  item,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  if (item.type === 'divider') return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      height: 0.5,
      background: 'var(--line)',
      margin: '4px -4px'
    }
  });
  if (item.type === 'label') return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px var(--space-2) 4px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--ink-tertiary)'
    }
  }, item.label);
  const color = item.disabled ? 'var(--ink-tertiary)' : item.danger ? 'var(--danger)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    disabled: item.disabled,
    onClick: () => !item.disabled && onSelect && onSelect(item.value ?? item.label, item),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: 'none',
      border: 0,
      margin: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 32,
      padding: '0 var(--space-2)',
      borderRadius: 'var(--radius-sm)',
      textAlign: 'left',
      background: hover && !item.disabled ? 'var(--sunk)' : 'transparent',
      color,
      cursor: item.disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: item.danger ? 'var(--danger)' : 'var(--ink-secondary)'
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.label), item.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-tertiary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, item.shortcut), item.selected && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      color: 'var(--accent-text)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}

// phase: 'enter' (pre-paint), 'open', 'exit'. Grows from the trigger corner; exits by fading in place.
function Panel({
  items,
  onSelect,
  width,
  style,
  phase = 'open',
  origin = 'top left',
  autoFocus = false,
  onEscape
}) {
  const ref = React.useRef(null);
  const enabled = () => [...ref.current.querySelectorAll('[role="menuitem"]:not([disabled])')];
  React.useEffect(() => {
    if (autoFocus && phase === 'open' && ref.current) {
      const f = enabled()[0];
      f && f.focus({
        preventScroll: true
      });
    }
  }, [autoFocus, phase === 'open']);
  const onKeyDown = e => {
    const list = enabled();
    if (!list.length) return;
    const i = list.indexOf(document.activeElement);
    const go = n => {
      e.preventDefault();
      list[(n + list.length) % list.length].focus();
    };
    if (e.key === 'ArrowDown') go(i + 1);else if (e.key === 'ArrowUp') go(i < 0 ? list.length - 1 : i - 1);else if (e.key === 'Home') go(0);else if (e.key === 'End') go(list.length - 1);else if (e.key === 'Escape' && onEscape) {
      e.preventDefault();
      onEscape();
    }
  };
  const tIn = 'var(--duration-base) var(--ease-out)';
  const motion = phase === 'open' ? {
    opacity: 1,
    transform: 'none',
    transition: 'opacity ' + tIn + ', transform ' + tIn
  } : phase === 'exit' ? {
    opacity: 0,
    transform: 'none',
    transition: 'opacity var(--duration-exit) var(--ease-out)'
  } : {
    opacity: 0,
    transform: 'scale(0.96)',
    transition: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "menu",
    onKeyDown: onKeyDown,
    style: {
      minWidth: width || 200,
      padding: 'var(--space-1)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-float)',
      display: 'flex',
      flexDirection: 'column',
      transformOrigin: origin,
      ...motion,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(MenuItem, {
    key: i,
    item: it,
    onSelect: onSelect
  })));
}
function Menu({
  items = [],
  onSelect,
  trigger,
  align = 'start',
  width,
  open: openProp,
  onOpenChange,
  style
}) {
  const [openInner, setOpenInner] = React.useState(false);
  const open = openProp !== undefined ? openProp : openInner;
  const setOpen = v => {
    if (openProp === undefined) setOpenInner(v);
    onOpenChange && onOpenChange(v);
  };
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
    if (phase === 'exit') setPhase('open');else {
      setPhase('enter');
      r = requestAnimationFrame(() => requestAnimationFrame(() => setPhase('open')));
    }
    const onDoc = e => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') {
        setOpen(false);
        const b = wrap.current && wrap.current.querySelector('button');
        b && b.focus();
      }
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(r);
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  if (!trigger) return /*#__PURE__*/React.createElement(Panel, {
    items: items,
    onSelect: onSelect,
    width: width,
    style: style
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open),
    onKeyDown: e => {
      if (e.key === 'ArrowDown' && !open) {
        e.preventDefault();
        setOpen(true);
      }
    },
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: {
      display: 'inline-flex'
    }
  }, trigger), phase && /*#__PURE__*/React.createElement(Panel, {
    items: items,
    width: width,
    phase: phase,
    origin: align === 'end' ? 'top right' : 'top left',
    autoFocus: true,
    onSelect: (v, it) => {
      onSelect && onSelect(v, it);
      setOpen(false);
    },
    style: {
      position: 'absolute',
      top: 'calc(100% + var(--space-1))',
      [align === 'end' ? 'right' : 'left']: 0,
      zIndex: 20,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  label,
  style
}) {
  const opts = items.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const measure = React.useCallback(() => {
    const el = refs.current[value];
    if (el) setInd(p => p && p.left === el.offsetLeft && p.width === el.offsetWidth ? p : {
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [value]);
  React.useLayoutEffect(measure, [measure, items.length, size]);
  React.useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const first = Object.values(refs.current)[0];
    if (typeof ResizeObserver === 'undefined' || !first || !first.parentElement) return;
    const ro = new ResizeObserver(measure);
    ro.observe(first.parentElement);
    return () => ro.disconnect();
  }, [measure]);
  const h = size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    style: {
      position: 'relative',
      display: 'flex',
      gap: 'var(--space-5)',
      boxShadow: 'inset 0 -0.5px 0 var(--line)',
      ...style
    }
  }, opts.map(o => {
    const sel = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      ref: el => refs.current[o.value] = el,
      type: "button",
      role: "tab",
      "aria-selected": sel,
      onClick: () => onChange && onChange(o.value),
      onMouseEnter: () => setHover(o.value),
      onMouseLeave: () => setHover(null),
      style: {
        appearance: 'none',
        border: 0,
        margin: 0,
        padding: 0,
        background: 'transparent',
        height: h,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-body)',
        fontSize: size === 'sm' ? 13 : 14,
        fontWeight: 500,
        color: sel ? 'var(--ink)' : hover === o.value ? 'var(--ink-secondary)' : 'var(--ink-tertiary)',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, o.label, o.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 400,
        color: 'var(--ink-tertiary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, o.count));
  }), ind && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 2,
      width: ind.width,
      transform: 'translateX(' + ind.left + 'px)',
      borderRadius: 'var(--radius-full)',
      background: 'var(--accent-strong)',
      transition: 'transform var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-6)'
};
function Card({
  variant = 'raised',
  padding = 'md',
  interactive = false,
  as = 'div',
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  let bg = 'var(--surface)',
    ring = interactive && hover ? 'var(--shadow-rest-hover)' : 'var(--shadow-rest)';
  if (variant === 'sunk') {
    bg = 'var(--sunk)';
    ring = 'none';
  }
  if (variant === 'outline') {
    bg = 'transparent';
    ring = interactive && hover ? 'var(--ring-control)' : 'var(--ring-hairline)';
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      boxSizing: 'border-box',
      padding: PAD[padding] ?? PAD.md,
      borderRadius: 'var(--radius-xl)',
      background: bg,
      boxShadow: ring,
      color: 'var(--ink)',
      textDecoration: 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-out), background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  width = 440,
  dismissible = true
}) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const entering = open; // enter travels further than exit
  const panel = React.useRef(null);
  const returnTo = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      if (returnTo.current && returnTo.current.focus) returnTo.current.focus();
      return;
    }
    returnTo.current = document.activeElement;
    const r = requestAnimationFrame(() => panel.current && panel.current.focus());
    return () => cancelAnimationFrame(r);
  }, [open]);
  const trap = e => {
    if (e.key !== 'Tab' || !panel.current) return;
    const f = [...panel.current.querySelectorAll('button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
    if (!f.length) {
      e.preventDefault();
      return;
    }
    const first = f[0],
      last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
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
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, dismissible]);
  if (!mounted) return null;
  const tIn = 'var(--duration-base) var(--ease-out)';
  const tOut = 'var(--duration-exit) var(--ease-out)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => dismissible && onClose && onClose(),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      opacity: visible ? 1 : 0,
      transition: 'opacity ' + (visible ? tIn : tOut)
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: panel,
    tabIndex: -1,
    onKeyDown: trap,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      position: 'relative',
      outline: 'none',
      width: '100%',
      maxWidth: width,
      boxSizing: 'border-box',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-overlay)',
      color: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : entering ? 'translateY(8px) scale(0.96)' : 'scale(0.98)',
      transition: visible ? 'opacity ' + tIn + ', transform ' + tIn : 'opacity ' + tOut + ', transform ' + tOut
    }
  }, (title || description) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--ink-secondary)',
      textWrap: 'pretty'
    }
  }, description)), children, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// examples/portfolio/CaseStudy.jsx
try { (() => {
const {
  Button: CSButton,
  Icon: CSIcon,
  Stat: CSStat,
  LineChart: CSLine,
  Tag: CSTag
} = window.DerekUrbanDesignSystem_3bae67;
function Meta({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "du-caption"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "du-small"
  }, value));
}
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px minmax(0,1fr)',
      gap: 32,
      padding: '32px 0',
      boxShadow: 'inset 0 0.5px 0 var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "du-subheading",
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: '62ch'
    }
  }, children));
}
function CaseStudy({
  id,
  onBack
}) {
  const p = window.PROJECTS.find(x => x.id === id) || window.PROJECTS[0];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CSButton, {
    variant: "ghost",
    size: "sm",
    iconStart: /*#__PURE__*/React.createElement(CSIcon, {
      name: "arrow-left"
    }),
    onClick: onBack
  }, "All work")), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(CSTag, {
    key: t,
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("h1", {
    className: "du-display",
    style: {
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0,
      color: 'var(--ink-secondary)'
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    label: "Year",
    value: p.year
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Role",
    value: p.role
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Built with",
    value: p.stack
  }))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 7',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--sunk)',
      boxShadow: 'inset 0 0 0 1px var(--image-outline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "du-caption"
  }, "Hero image")), /*#__PURE__*/React.createElement("figcaption", {
    className: "du-caption"
  }, "The pattern view, three months into daily use.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "The question"
  }, /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0
    }
  }, "I write a lot of notes and rarely reread them. I wanted to know whether the ideas I keep returning to are the ones I think they are.")), /*#__PURE__*/React.createElement(Section, {
    title: "What I built"
  }, /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0
    }
  }, "A plain notes tool with one extra view. It groups notes by what they share and shows how often each group comes back. Nothing is summarized for you; it only points."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 24,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(CSStat, {
    label: "Notes written",
    value: "1,204",
    delta: "Over 9 months"
  }), /*#__PURE__*/React.createElement(CSStat, {
    label: "Themes found",
    value: "14",
    delta: "4 I expected",
    emphasis: true
  }), /*#__PURE__*/React.createElement(CSStat, {
    label: "Revisit gap",
    value: "4.2 days",
    delta: "Down from 9.8"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "What happened"
  }, /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0
    }
  }, "Linking went up once the patterns were visible. That is one person over one year, so it is a pattern, not a rule."), /*#__PURE__*/React.createElement(CSLine, {
    height: 160,
    series: [4, 5, 5, 6, 8, 7, 9, 11, 10, 12, 14, 13, 16, 18, 17, 21],
    compare: [4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8],
    endLabel: "21 linked",
    compareLabel: "8 before",
    labels: ['Jan', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Sep'],
    label: "Ideas linked per week, before and after the pattern view"
  })), /*#__PURE__*/React.createElement(Section, {
    title: "What I\u2019d change"
  }, /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0
    }
  }, "The grouping is too eager with short notes. Next I want to let a group stay unnamed until it has earned a name."))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "examples/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// examples/portfolio/Home.jsx
try { (() => {
const {
  Mark,
  Button,
  Icon,
  Tag,
  Card
} = window.DerekUrbanDesignSystem_3bae67;
function SiteHeader({
  onHome
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/20px var(--font-title)',
      letterSpacing: '-0.01em'
    }
  }, "Derek Urban")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, ['Work', 'Writing', 'About'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--font-small)',
      color: 'var(--ink-secondary)',
      textDecoration: 'none'
    }
  }, l))));
}
function ProjectRow({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    as: "a",
    href: "#",
    interactive: true,
    padding: "sm",
    onClick: e => {
      e.preventDefault();
      onOpen(p.id);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '220px minmax(0,1fr) auto',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--sunk)',
      boxShadow: 'inset 0 0 0 1px var(--image-outline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "du-caption"
  }, "Project image")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "du-heading",
    style: {
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "du-small",
    style: {
      margin: 0,
      color: 'var(--ink-secondary)',
      maxWidth: '52ch'
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 4
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      alignSelf: 'start',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "du-caption du-tabular"
  }, p.year), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-tertiary)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right"
  }))));
}
function Home({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 64,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 48,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "du-display",
    style: {
      margin: 0
    }
  }, "I build software and AI tools around how people actually think and behave."), /*#__PURE__*/React.createElement("p", {
    className: "du-body",
    style: {
      margin: 0,
      color: 'var(--ink-secondary)',
      maxWidth: '60ch'
    }
  }, "Most of my work starts with a question about behavior or attention, then becomes a small tool that tests it. These are a few of those."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconEnd: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => onOpen(window.PROJECTS[0].id)
  }, "Read the latest case study"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Get in touch"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "du-title",
    style: {
      margin: 0
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("span", {
    className: "du-caption"
  }, window.PROJECTS.length, " projects")), window.PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectRow, {
    key: p.id,
    p: p,
    onOpen: onOpen
  }))));
}
Object.assign(window, {
  Home,
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "examples/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// examples/portfolio/projects.js
try { (() => {
// Sample content. Replace with real projects.
window.PROJECTS = [{
  id: 'notes',
  title: 'A notes tool that notices patterns',
  summary: 'It groups what you write by what it shares and shows which ideas you keep returning to.',
  year: '2026',
  role: 'Design and engineering',
  stack: 'React, local embeddings',
  tags: ['Behavior', 'Tools']
}, {
  id: 'habits',
  title: 'Why habits stick (or don’t)',
  summary: 'A small study of my own routines over a year, and the interface I built to look at them.',
  year: '2025',
  role: 'Research and prototype',
  stack: 'Swift, SQLite',
  tags: ['Psychology', 'Data']
}, {
  id: 'agents',
  title: 'Agents that explain themselves',
  summary: 'Experiments in showing the reasoning behind an AI tool’s suggestions without burying the suggestion.',
  year: '2025',
  role: 'Prototype',
  stack: 'TypeScript, Claude API',
  tags: ['AI', 'Interfaces']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "examples/portfolio/projects.js", error: String((e && e.message) || e) }); }

// explorations/color-combos.js
try { (() => {
// Palette generator for the color-combos exploration. Every tone is solved in OKLCH against the real neutrals.
(function () {
  function lin([l, c, h]) {
    const a = c * Math.cos(h * Math.PI / 180),
      b = c * Math.sin(h * Math.PI / 180);
    const x = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3,
      y = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3,
      z = (l - 0.0894841775 * a - 1.2914855480 * b) ** 3;
    return [4.0767416621 * x - 3.3077115913 * y + 0.2309699292 * z, -1.2684380046 * x + 2.6097574011 * y - 0.3413193965 * z, -0.0041960863 * x - 0.7034186147 * y + 1.7076147010 * z];
  }
  const inGamut = c => lin(c).every(v => v >= -0.0005 && v <= 1.0005);
  const Y = c => {
    const [r, g, b] = lin(c).map(v => Math.min(1, Math.max(0, v)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contrast = (a, b) => {
    const [h, l] = [Y(a), Y(b)].sort((x, y) => y - x);
    return (h + 0.05) / (l + 0.05);
  };
  const fit = ([l, c, h]) => {
    while (c > 0 && !inGamut([l, c, h])) c -= 0.002;
    return [l, Math.max(0, +c.toFixed(3)), h];
  };
  function solve(target, ref, dir, c, h) {
    let lo = dir > 0 ? ref[0] : 0,
      hi = dir > 0 ? 1 : ref[0];
    for (let i = 0; i < 40; i++) {
      const m = (lo + hi) / 2;
      const r = contrast(fit([m, c, h]), ref);
      if (r < target === dir > 0) lo = m;else hi = m;
    }
    return fit([+((lo + hi) / 2).toFixed(3), c, h]);
  }
  const ok = c => 'oklch(' + c[0].toFixed(3) + ' ' + c[1].toFixed(3) + ' ' + c[2] + ')';
  const N = {
    light: {
      bg: [0.972, 0, 0],
      surface: [0.992, 0, 0],
      ink: [0.22, 0, 0]
    },
    dark: {
      bg: [0.19, 0, 0],
      surface: [0.225, 0, 0],
      ink: [0.95, 0, 0]
    }
  };

  // f: { h, fill: [L light, L dark], fillC: [c light, c dark], textC, subC, onFill: 'dark' | 'light' per theme }
  function family(name, f, theme) {
    const t = theme === 'light' ? 0 : 1,
      n = N[theme],
      dir = theme === 'light' ? -1 : 1;
    const fill = fit([f.fill[t], f.fillC[t], f.h]);
    const hover = fit([fill[0] + (f.hoverDir ? f.hoverDir[t] : theme === 'light' ? -0.04 : 0.04), fill[1] + 0.005, f.h]);
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
    return {
      vars: v,
      raw: {
        fill,
        text,
        subtle,
        line,
        on
      },
      fillContrast: contrast(on, fill),
      textContrast: contrast(text, n.surface)
    };
  }
  window.buildCombo = function (combo) {
    const out = {};
    ['light', 'dark'].forEach(theme => {
      const vars = {},
        info = {};
      for (const k of ['accent', 'danger', 'warning', 'info']) {
        const r = family(k, combo[k], theme);
        Object.assign(vars, r.vars);
        info[k] = r;
      }
      out[theme] = {
        vars,
        info
      };
    });
    return out;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/color-combos.js", error: String((e && e.message) || e) }); }

// guidelines/color/palette.js
try { (() => {
// Renders a palette table. Values are read live from tokens/colors.css via a light and a dark probe.
(function () {
  const ALIASES = {
    bg: ['surface-page'],
    surface: ['surface-card', 'surface-raised'],
    sunk: ['surface-sunk'],
    line: ['border-hairline'],
    'line-strong': ['border-control'],
    ink: ['text-primary'],
    'ink-secondary': ['text-secondary'],
    'ink-tertiary': ['text-tertiary'],
    'data-neutral': ['data-default'],
    accent: ['action-primary'],
    'accent-hover': ['action-primary-hover'],
    'accent-strong': ['data-resolved', 'focus-ring'],
    'accent-text': ['text-link', 'text-selected', 'text-success'],
    'accent-subtle': ['surface-selected'],
    'accent-line': ['border-accent'],
    'on-accent': ['text-on-accent'],
    danger: ['text-danger'],
    'danger-subtle': ['surface-danger'],
    'danger-line': ['border-danger'],
    warning: ['text-warning'],
    'warning-subtle': ['surface-warning'],
    'warning-line': ['border-warning'],
    info: ['text-info'],
    'info-subtle': ['surface-info'],
    'info-line': ['border-info']
  };
  function probe(theme) {
    const d = document.createElement('div');
    d.setAttribute('data-theme', theme);
    d.hidden = true;
    document.body.appendChild(d);
    return getComputedStyle(d);
  }
  const cv = document.createElement('canvas');
  cv.width = cv.height = 1;
  const cx = cv.getContext('2d', {
    willReadFrequently: true
  });
  function hex(c) {
    cx.clearRect(0, 0, 1, 1);
    cx.fillStyle = c;
    cx.fillRect(0, 0, 1, 1);
    return '#' + [...cx.getImageData(0, 0, 1, 1).data].slice(0, 3).map(x => x.toString(16).padStart(2, '0')).join('');
  }
  function cell(theme, cs, t, kind) {
    const v = cs.getPropertyValue('--' + t).trim();
    const ok = v.replace(/^oklch\((.*)\)$/, '$1');
    let sw;
    if (kind === 'text') sw = '<div class="sw sw-t" style="color:' + v + '">Aa</div>';else if (kind === 'on') sw = '<div class="sw sw-t" style="background:var(--accent);color:' + v + ';box-shadow:none">Aa</div>';else sw = '<div class="sw" style="background:' + v + '"></div>';
    return '<div class="c" data-theme="' + theme + '">' + sw + '<div class="v"><span>' + ok + '</span><span class="hx">' + hex(v) + '</span></div></div>';
  }
  window.renderPalette = function (host, families) {
    const L = probe('light'),
      D = probe('dark');
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/color/palette.js", error: String((e && e.message) || e) }); }

// guidelines/data/data-viz.js
try { (() => {
// Small SVG chart helpers for the Data cards. Tokens only; no libraries.
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = n => getComputedStyle(document.body).getPropertyValue(n).trim();
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function svg(host, w, h) {
    host.innerHTML = '';
    return el('svg', {
      viewBox: `0 0 ${w} ${h}`,
      width: '100%',
      style: 'display:block;overflow:visible'
    }, host);
  }
  function text(parent, x, y, str, o = {}) {
    const t = el('text', {
      x,
      y,
      'text-anchor': o.anchor || 'start',
      fill: o.fill || 'var(--ink-tertiary)',
      style: `font:${o.font || 'var(--font-caption)'};font-variant-numeric:tabular-nums`
    }, parent);
    t.textContent = str;
    return t;
  }
  // Signature motion: settle into place, staggered, accent last.
  function settle(nodes, frames, o = {}) {
    if (reduced()) return;
    const dur = o.duration || 640,
      ease = css('--ease-settle') || 'cubic-bezier(0.16,1,0.3,1)';
    nodes.forEach((n, i) => n.animate(frames(n, i), {
      duration: dur,
      delay: (o.delay || 0) + i * (o.stagger ?? 24),
      easing: ease,
      fill: 'backwards'
    }));
  }
  function seeded(seed) {
    return () => {
      seed = seed * 16807 % 2147483647;
      return (seed - 1) / 2147483646;
    };
  }
  function bars(host, {
    data,
    labels,
    w = 652,
    h = 180,
    accent = data.length - 1,
    unit = ''
  }) {
    w = host.clientWidth || w;
    const s = svg(host, w, h),
      top = 20,
      bottom = 22,
      ch = h - top - bottom;
    const max = Math.max(...data) * 1.1,
      gap = 6,
      bw = (w - gap * (data.length - 1)) / data.length;
    [0.5, 1].forEach(f => el('line', {
      x1: 0,
      x2: w,
      y1: top + ch * (1 - f / 1.1 * 1.1) + 0.25,
      y2: top + ch * (1 - f) + 0.25,
      stroke: 'var(--line)',
      'stroke-width': 0.5,
      'stroke-dasharray': '2 3'
    }, s));
    const nodes = [],
      vals = [];
    data.forEach((v, i) => {
      const bh = ch * v / max,
        x = i * (bw + gap),
        y = top + ch - bh;
      const g = el('g', {
        style: 'cursor:default'
      }, s);
      const r = el('rect', {
        x,
        y,
        width: bw,
        height: bh,
        rx: 3,
        fill: i === accent ? 'var(--accent-strong)' : 'var(--data-neutral)',
        style: 'transform-box:fill-box;transform-origin:bottom;transition:fill var(--duration-fast) var(--ease-out)'
      }, g);
      const t = text(g, x + bw / 2, y - 6, v + unit, {
        anchor: 'middle',
        fill: i === accent ? 'var(--accent-text)' : 'var(--ink-secondary)',
        font: 'var(--font-label)'
      });
      t.style.opacity = i === accent ? 1 : 0;
      t.style.transition = 'opacity var(--duration-fast) var(--ease-out)';
      el('rect', {
        x: x - gap / 2,
        y: 0,
        width: bw + gap,
        height: h,
        fill: 'transparent'
      }, g);
      if (i !== accent) {
        g.addEventListener('mouseenter', () => {
          r.setAttribute('fill', 'var(--ink-tertiary)');
          t.style.opacity = 1;
        });
        g.addEventListener('mouseleave', () => {
          r.setAttribute('fill', 'var(--data-neutral)');
          t.style.opacity = 0;
        });
      }
      if (labels && labels[i]) text(s, x + bw / 2, h - 4, labels[i], {
        anchor: 'middle'
      });
      nodes.push(r);
      vals.push(t);
    });
    el('line', {
      x1: 0,
      x2: w,
      y1: top + ch + 0.25,
      y2: top + ch + 0.25,
      stroke: 'var(--line-strong)',
      'stroke-width': 0.5
    }, s);
    const run = () => {
      settle(nodes, () => [{
        transform: 'scaleY(0)'
      }, {
        transform: 'scaleY(1)'
      }]);
      settle([vals[accent]], () => [{
        opacity: 0
      }, {
        opacity: 1
      }], {
        delay: data.length * 24 + 200
      });
    };
    run();
    return run;
  }
  function line(host, {
    series,
    compare,
    labels,
    w = 652,
    h = 180,
    endLabel,
    compareLabel
  }) {
    w = host.clientWidth || w;
    const s = svg(host, w, h),
      top = 16,
      bottom = 22,
      right = 96,
      cw = w - right,
      ch = h - top - bottom;
    const all = series.concat(compare || []),
      max = Math.max(...all) * 1.1,
      min = Math.min(...all) * 0.85;
    const X = i => i * cw / (series.length - 1),
      Y = v => top + ch * (1 - (v - min) / (max - min));
    [0, 0.5, 1].forEach(f => el('line', {
      x1: 0,
      x2: cw,
      y1: top + ch * f + 0.25,
      y2: top + ch * f + 0.25,
      stroke: 'var(--line)',
      'stroke-width': 0.5,
      'stroke-dasharray': f === 1 ? '' : '2 3'
    }, s));
    const path = d => d.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
    let cmp;
    if (compare) {
      cmp = el('path', {
        d: path(compare),
        fill: 'none',
        stroke: 'var(--data-neutral)',
        'stroke-width': 1.5,
        'stroke-dasharray': '4 4',
        'stroke-linecap': 'round'
      }, s);
      text(s, cw + 12, Y(compare[compare.length - 1]) + 4, compareLabel || '');
    }
    const p = el('path', {
      d: path(series),
      fill: 'none',
      stroke: 'var(--ink)',
      'stroke-width': 1.5,
      'stroke-linejoin': 'round',
      'stroke-linecap': 'round'
    }, s);
    const lx = X(series.length - 1),
      ly = Y(series[series.length - 1]);
    const dot = el('circle', {
      cx: lx,
      cy: ly,
      r: 4,
      fill: 'var(--accent-strong)',
      style: 'transform-box:fill-box;transform-origin:center'
    }, s);
    const lab = text(s, cw + 12, ly + 4, endLabel || '', {
      fill: 'var(--accent-text)',
      font: 'var(--font-label)'
    });
    if (labels) labels.forEach((l, i) => l && text(s, X(i), h - 4, l, {
      anchor: i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'
    }));
    const run = () => {
      if (reduced()) return;
      const len = p.getTotalLength(),
        ease = css('--ease-out');
      p.animate([{
        strokeDasharray: len,
        strokeDashoffset: len
      }, {
        strokeDasharray: len,
        strokeDashoffset: 0
      }], {
        duration: 900,
        easing: ease,
        fill: 'backwards'
      });
      if (cmp) cmp.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 320,
        easing: ease,
        fill: 'backwards'
      });
      settle([dot], () => [{
        transform: 'scale(0)',
        opacity: 0
      }, {
        transform: 'scale(1)',
        opacity: 1
      }], {
        delay: 820,
        duration: 480
      });
      lab.animate([{
        opacity: 0,
        transform: 'translateX(-4px)'
      }, {
        opacity: 1,
        transform: 'none'
      }], {
        duration: 320,
        delay: 900,
        easing: ease,
        fill: 'backwards'
      });
    };
    run();
    return run;
  }
  function spark(host, data, {
    w = 120,
    h = 32,
    accent = false
  } = {}) {
    const s = svg(host, w, h),
      max = Math.max(...data),
      min = Math.min(...data);
    const X = i => i * w / (data.length - 1),
      Y = v => 2 + (h - 4) * (1 - (v - min) / (max - min || 1));
    const p = el('path', {
      d: data.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' '),
      fill: 'none',
      stroke: accent ? 'var(--accent-strong)' : 'var(--ink-tertiary)',
      'stroke-width': 1.5,
      'stroke-linejoin': 'round',
      'stroke-linecap': 'round'
    }, s);
    el('circle', {
      cx: X(data.length - 1),
      cy: Y(data[data.length - 1]),
      r: 2.5,
      fill: accent ? 'var(--accent-strong)' : 'var(--ink-tertiary)'
    }, s);
    const run = () => {
      if (reduced()) return;
      const len = p.getTotalLength();
      p.animate([{
        strokeDasharray: len,
        strokeDashoffset: len
      }, {
        strokeDasharray: len,
        strokeDashoffset: 0
      }], {
        duration: 720,
        easing: css('--ease-out'),
        fill: 'backwards'
      });
    };
    run();
    return run;
  }

  // Dots drift from noise into clusters; one cluster resolves in accent.
  function clusters(host, {
    w = 652,
    h = 190,
    groups,
    seed = 7
  }) {
    const k = (host.clientWidth || w) / w;
    w = w * k;
    groups = groups.map(g => ({
      ...g,
      x: g.x * k
    }));
    const s = svg(host, w, h),
      rnd = seeded(seed),
      nodes = [];
    const accentNodes = [];
    groups.forEach(g => {
      for (let i = 0; i < g.n; i++) {
        const a = rnd() * Math.PI * 2,
          d = Math.sqrt(rnd()) * g.r;
        const c = el('circle', {
          cx: (g.x + Math.cos(a) * d).toFixed(1),
          cy: (g.y + Math.sin(a) * d * 0.8).toFixed(1),
          r: g.accent ? 3.6 : 3,
          fill: g.accent ? 'var(--accent-strong)' : 'var(--ink)',
          'fill-opacity': g.accent ? 1 : g.faint ? 0.22 : 0.7
        }, null);
        (g.accent ? accentNodes : nodes).push(c);
      }
      if (g.label) text(s, g.x, g.y + g.r + 22, g.label, {
        anchor: 'middle',
        fill: g.accent ? 'var(--accent-text)' : 'var(--ink-tertiary)',
        font: g.accent ? 'var(--font-label)' : 'var(--font-caption)'
      });
    });
    for (let i = 0; i < 14; i++) el('circle', {
      cx: (rnd() * w).toFixed(1),
      cy: (rnd() * (h - 30)).toFixed(1),
      r: 2.2,
      fill: 'var(--ink-tertiary)',
      'fill-opacity': 0.34
    }, s);
    nodes.concat(accentNodes).forEach(n => s.appendChild(n));
    const all = nodes.concat(accentNodes);
    const off = all.map(() => [(rnd() - 0.5) * 120, (rnd() - 0.5) * 80]);
    const run = () => settle(all, (n, i) => [{
      transform: `translate(${off[i][0]}px,${off[i][1]}px)`,
      opacity: 0
    }, {
      transform: 'none',
      opacity: 1
    }], {
      stagger: 6,
      duration: 900
    });
    run();
    return run;
  }
  function grid(host, {
    weeks = 26,
    seed = 3,
    w = 652
  }) {
    w = host.clientWidth || w;
    const gap = w / weeks,
      r = Math.min(4.5, gap * 0.3),
      h = gap * 7,
      s = svg(host, w, h),
      rnd = seeded(seed),
      nodes = [];
    const levels = [0.08, 0.22, 0.42, 0.66, 0.9];
    for (let c = 0; c < weeks; c++) for (let d = 0; d < 7; d++) {
      const last = c === weeks - 1 && d === 4;
      if (c === weeks - 1 && d > 4) continue;
      const v = Math.min(4, Math.floor(rnd() * rnd() * 6 + c / weeks * 1.5));
      nodes.push(el('circle', {
        cx: c * gap + gap / 2,
        cy: d * gap + gap / 2,
        r: last ? r * 1.2 : r,
        fill: last ? 'var(--accent-strong)' : 'var(--ink)',
        'fill-opacity': last ? 1 : levels[v],
        style: 'transform-box:fill-box;transform-origin:center'
      }, s));
    }
    const run = () => settle(nodes, () => [{
      transform: 'scale(0)'
    }, {
      transform: 'scale(1)'
    }], {
      stagger: 2,
      duration: 480
    });
    run();
    return run;
  }

  // Click a chart to replay its entrance.
  function replayOnClick(host, run) {
    host.style.cursor = 'pointer';
    host.addEventListener('click', () => {
      document.getAnimations().forEach(a => host.contains(a.effect && a.effect.target) && a.cancel());
      run();
    });
  }
  window.DUViz = {
    bars,
    line,
    spark,
    clusters,
    grid,
    replayOnClick
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/data/data-viz.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconSwap = __ds_scope.IconSwap;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
