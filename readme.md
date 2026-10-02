# Derek Urban — design system

The personal design system of Derek Urban, used across his portfolio and personal software projects. Derek builds software and AI tools, with a long-running interest in behavior, psychology, and how technology connects to people. The system should feel like him: calm, curious, precise, and warm.

The central idea is **chaos settling into order**. Complicated things look random until you watch them long enough to see the sequence underneath. The design makes that sequence legible: a simple surface over deep structure.

## Using it in a project

This repository is the source of truth, and it is distributed from GitHub only (it is not on npm). Each project pins a release tag and upgrades on purpose. Nothing is edited in a consuming project and copied back: changes go through issues and pull requests here (see `CONTRIBUTING.md`).

### Install

<!-- x-release-please-start-version -->
```sh
npm install github:derekurban/design-system#v0.1.1
```

npm fetches the tagged commit and builds `dist/` during install. The dependency appears in `package.json` as `"@derekurban/design-system": "github:derekurban/design-system#v0.1.1"`. Every release on the [releases page](https://github.com/derekurban/design-system/releases) also has the built package attached as a `.tgz`, which installs without building: `npm install https://github.com/derekurban/design-system/releases/download/v0.1.0/derekurban-design-system-0.1.0.tgz`.

```js
import '@derekurban/design-system/styles.css'; // tokens, fonts, base styles
import { Button, Card, Mark } from '@derekurban/design-system';
```

- React 18 or later is a peer dependency.
- Set `data-theme="light"`, `"dark"` or `"system"` on `<html>` (see Themes).
- `Icon` reads Lucide from `window.lucide`; load the Lucide script once per page (see Iconography).
- Logos and raw token files are importable from `@derekurban/design-system/assets/*` and `/tokens/*`.
- Each component has a `.d.ts` with its props and a `.prompt.md` with usage notes in `components/<group>/`.

Without a build step, link the stylesheet for a tag straight from GitHub through jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/derekurban/design-system@v0.1.1/styles.css">
```
<!-- x-release-please-end -->

### Upgrading

1. See what changed: [`CHANGELOG.md`](CHANGELOG.md) or the [releases page](https://github.com/derekurban/design-system/releases). To get notified, use **Watch → Custom → Releases** on the repository.
2. Install the new tag: `npm install github:derekurban/design-system#v0.2.0`.
3. Check the project in light and dark before committing the bump.

Versions follow semver. Patch releases are fixes and token tweaks, minor releases add things, and breaking changes are marked with **⚠ BREAKING CHANGES** in the changelog. Before 1.0.0 a breaking change bumps the minor version, so read the changelog closely when going from `0.1.x` to `0.2.0`. A Git tag is an exact pin; npm ranges like `^0.1.0` don't apply.

To change the system itself, open an issue and a pull request here, then upgrade the project to the release that includes it.

## Sources

- Local codebase `derek-urban-design-system/` (attached read-only): `README.md` (the brand book and source of truth), `FORM.md`, `tokens/tokens.css`, `tokens/tokens.json`, `fonts/`, `logos/`. It contains **no product code on purpose**, so there are no product screens to recreate.
- Fonts and logos were copied from that folder into `assets/`.

## Products

No shipped products are represented yet. The system is meant for Derek's portfolio site and personal tools (for example a notes tool that notices patterns in how you think). Because there is no source UI, this project has **no UI kits**; components are an authored standard set sized to the brand (see Components).

## Principles

1. **Simple surface, real leverage.** Simplicity is earned by containing complexity. One control that moves a system beats many that each move a little.
2. **Care that holds up.** Aligned edges, concentric corners, tabular numbers, deliberate spacing. Nothing hidden as a reward.
3. **Nothing is random.** Every value traces to a token or a reason. One hue, a 4px base, three durations.
4. **Calm, not quiet.** Warm, steady, no alarm. Density is fine when organized.
5. **Precision where it's structural, texture where it's human.** Grids, controls, and data stay exact. Imagery and narrative carry warmth. Neither leaks into the other.
6. **Scoped, not closed.** Say exactly what you mean: real claims, clear limits, room for other readings.

## Content fundamentals

Derek writes like a curious, grounded person explaining something he has thought about carefully.

- **Person:** first person "I" for portfolio and essays; "you" when the interface addresses the user. No corporate "we".
- **Scope:** state what is known, mark what is uncertain. "That is a pattern, not a rule, and it may not hold for anyone else."
- **Plain words.** Explanation over persuasion. Specifics, numbers, examples.
- **No hype:** never revolutionary, seamless, unlock, supercharge, transform, AI-powered.
- **Casing:** sentence case everywhere, including buttons, titles, and tags. No all caps. No letter-spaced eyebrow labels above headings.
- **Punctuation:** no exclamation marks in interface copy. Warm without being cute.
- **Labels name the action**, and confirmations name the result: "Save draft" → "Draft saved". "Delete note", not "OK".
- **Errors** say what happened and what to do: "That didn't save. Check your connection and try again."
- **Emoji:** never.
- **Questions** are welcome when they are real questions.

| Instead of | Write |
| --- | --- |
| An AI-powered platform that transforms how you think | A notes tool that notices patterns in how you think over time |
| Oops! Something went wrong! | That didn't save. Check your connection and try again. |
| Unlock deeper insights | See which ideas you return to most |

## Visual foundations

**Color.** True gray neutrals with zero chroma plus one accent: a natural moss green at OKLCH hue 138. The accent marks the point where things resolve: the primary action, the selected state, the latest or key data point, the last dot of the mark. It is never decoration, and only one button per view gets the accent fill. The primary fill is deep moss (`--accent`, OKLCH 0.48 0.085 138 in light with white text; 0.70 0.08 138 in dark with dark text). The same color is used for every accent mark through `--accent-strong`: the key data point, tab indicator, checks, radio dot, switch, focus and the mark's last dot, so components and charts always match. `--accent-text` is tuned separately for text. The accent also stands for success; there is no separate success green. Hue is fixed; per-theme lightness and chroma may be tuned. Never neon or lime. Status colors are for status only, each as a base (text and icon), `-subtle` (fill) and `-line` (outline): danger at hue 30 for errors and destructive actions, warning at hue 70 for what needs attention soon, info at hue 245 for neutral context. Success is the accent, not a separate green. Status shows at low volume: subtle fill, matching line, colored icon, message in ink. Status text tones are solved to the same contrast as `--accent-text` in both themes. Only one button per view gets the accent fill; the key data point, checks and selection share the same green. Things that must be told apart differ in lightness, not only hue. All text pairings meet WCAG AA in both themes.

**Themes.** Light and dark are equal citizens. Dark is tuned, not inverted: the accent goes lighter and less saturated so it never glows. Dark values are solved so each token keeps the same WCAG contrast as its light counterpart (text against `--bg`/`--surface`, lines and fills against `--surface`). Change a pair together, never one side alone.

Set `data-theme="light"` or `"dark"` on `<html>` or any subtree; `data-theme="system"` follows the OS setting. With no attribute, light applies.

**Type.** Albert Sans for titles (300 at display sizes, 500 for title/heading/subheading, tight negative tracking). Wix Madefor Text for everything else. Balance headlines, `text-wrap: pretty` for body, keep lines under ~70ch, tabular numbers for changing or aligned figures. Emphasis comes from weight and hierarchy, never from coloring one word in a headline.

**Spacing.** 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96. Small steps inside components, large between ideas. Generous section spacing is part of the calm. Control heights 28 / 36 / 44.

**Radii.** 6, 8, 10, 12, 18, full. Larger surfaces get larger corners. Nested corners are concentric: inner = outer − padding (card 18 with 8 padding → 10; menu 12 with 4 → 8; segmented track 10 with 2 → 8).

**Borders and depth.** Hairlines over borders: a 0.5px shadow ring (`--ring-hairline`) instead of `border`. Controls use `--ring-control`. Resting cards add a very soft lift to the hairline (`--shadow-rest`; `--shadow-rest-hover` on interactive cards). Stronger shadows are reserved for things that float above the page: `--shadow-float` for menus, popovers, toasts; `--shadow-overlay` for dialogs. No inner shadows. Surfaces step: `sunk` (inputs, tracks, wells) → `bg` (page) → `surface` (cards, panels, menus).

**Cards.** `surface` fill, hairline ring plus a soft resting shadow (`--shadow-rest`), 18px radius, 24px padding (16 for small). Interactive cards firm the ring and lift slightly on hover. Sunk cards have no ring or shadow; outline cards keep the hairline only. Avoid rows of identical feature cards; a card holds one idea.

**Backgrounds.** Flat `bg`. No gradients as decoration, no glow, no full-bleed stock imagery.

**Imagery.** Texture belongs to human content: photography, stories, reflective writing. Natural subjects (light through leaves, moving water) treated as observed moments, not stock scenery. Keep color natural and slightly muted; nothing that looks generated.

**Motion.** Motion answers an action. 120ms for hovers, presses, toggles; 200ms for menus, tabs, toasts; 320ms for layout changes. Ease out on entry (`--ease-out`); exits are quicker and quieter (`--duration-exit`). Everything is a CSS transition so it can be interrupted mid-flight; keyframe-style sequences are kept for one-off staged moments like the logo draw-in. Specific patterns:
- **Press:** buttons and icon buttons scale to `--press-scale` (0.96), never below 0.95. `static` turns it off.
- **Icon swaps:** `IconSwap` cross-fades opacity, scale 0.25→1 and blur 4px→0 with `--ease-icon`. Checkbox marks and the radio dot use the same move.
- **Enter vs exit:** toasts rise 8px out of a 4px blur over 320ms; dialogs rise 8px from scale 0.96 over 200ms; menus grow from the trigger corner at scale 0.96. Exits are 120ms, travel less (fade, at most scale 0.98) and never move the full distance back.
- **Indicators:** tab underlines and the segmented thumb slide by `transform`, not `left`.
- **Switch:** the thumb stretches 4px while held.
- **Tooltips:** 300ms delay on the first; neighbors within 400ms open instantly with no transition.
- **Restraint:** no motion on high-frequency hovers beyond a 120ms color step. Motion is never the only cue; every animated state also changes color, icon or label. Nothing bounces. Reduced motion sets every duration to 0. The signature motions are **settling** (`--ease-settle`), scattered elements easing into alignment for first load and data, and the logo **draw-in**: left bracket fades in, the stroke writes, the green bracket closes with a slight overshoot.

**Data visualization.** Data is structural, so it stays exact and quiet. Series are `--data-neutral` (bars, segments) or `--ink` (a single line); one accent marks the point that resolves (the latest value, the peak, the group that matters), and its label uses `--accent-text`. Label lines directly instead of using a legend. Gridlines are 0.5px dashed `--line`, baselines 0.5px `--line-strong`. Comparisons are dashed `--data-neutral`. Grades of a single measure step through gray opacity, never extra hues. Numbers use tabular figures; headline stats are Albert Sans 300. Bars have 3px top corners and 6px gaps. On first render charts settle in (bars grow from the baseline, lines draw, dots drift from noise into clusters), staggered and with `--ease-settle`; hover is a 120ms color step. See the Data cards in `guidelines/data/` (cluster and grid helpers in `guidelines/data/data-viz.js`).

**Hover and press.** Hover moves a step: ghost/secondary controls fill with `sunk`; accent fills go to `accent-hover`; links firm their underline from `accent-line` to the text color. Press uses the same step plus `scale(0.96)` on buttons. No opacity-fade hovers.

**Focus.** A 3px `accent-line` ring (`--ring-focus`) on keyboard focus only.

**Transparency and blur.** Transparency only for the dialog scrim. No backdrop blur, no frosted glass.

**Layout.** Content-led, left-aligned, generous margins. Fixed elements are rare; no template chrome, no floating CTAs.

## Iconography

- The source defines **no icon set**. This system uses **Lucide** (v0.460.0, CDN) at a 1.5 stroke, round caps and joins, `currentColor` — a thin, even line that matches the hairline aesthetic. **This is a substitution; confirm or replace.**
- Sizes: 16px in buttons, menus, and inline; 18–20px in icon buttons; 24px max. Icons inherit ink; the accent only when the icon marks the resolved/selected state.
- Load once per page: `<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>`, then use the `Icon` component (`<Icon name="search" />`).
- No emoji. No icon fonts. Unicode only for keyboard hints (⌘, ⇧) and the ↗ external-link arrow where an icon would be heavy.
- The logo is not an icon; don't place it in icon rows.

## The logo

The logo is the primary brand mark. The default logo is a loose scribble held between two square brackets: something unresolved, given a frame. The closing bracket is accent green; it is the moment of resolution. Files: `assets/logos/logo-on-light.svg`, `logo-on-dark.svg`, `logo-mono.svg`; card in `guidelines/brand/brand-logo.html`; the live version is the `Mark` component.

- **Lockup** (`lockup-on-light/dark.svg`): the logo beside the Albert Sans wordmark. **Wordmark** alone: `wordmark-on-light/dark.svg`.
- **Favicon** (`favicon.svg`): below 24px, heavier strokes and a calmer scribble on a dark rounded square.
- Clear space: at least one bracket arm (10 units) on every side.

- Geometry (100-unit box): brackets 64 tall, 10-unit arms, 6 stroke; scribble 5.5 stroke, round caps and joins. Never recolor the left bracket or the scribble.
- Sub-logos for individual apps keep both brackets exactly and replace only the scribble with a glyph for that app, drawn as a single monoline at 5.5 stroke.
- Animated: the left bracket fades in from the left, the scribble draws left to right, then the green bracket closes from the right with a slight overshoot.

### Site logo

The personal website uses its own sub-logo: a cursive, single-stroke "du" between the same brackets, signed with a brush underline that is heavy on the left and fades to a soft round tip on the right. Files: `assets/logos/site-logo-on-light.svg`, `site-logo-on-dark.svg`, `site-logo-mono.svg`; card in `guidelines/brand/brand-site-logo.html`.

- Letters: one continuous 4.5 stroke, round caps and joins, slightly lighter than the 6-weight brackets so the counters stay open.
- Underline: a filled taper from 5 to 1.6 units wide, round-capped at both ends. Same ink as the letters.
- Animated: left bracket fades in, the letters write in one stroke (1.2s), the underline sweeps left to right after the letters finish, then the green bracket closes.
- At 16px the underline reduces to a hairline; prefer 24px and up.

## Retired: the dot mark

The dotted D and a dot-field texture were the first mark. The bracket logo replaced them; both have been removed.

## Components

The source defines no component library, so this is an authored standard set sized to the brand. All are exported from `@derekurban/design-system` (see `src/index.js`). The cards and examples in this repository load them from the generated `_ds_bundle.js` as `window.DerekUrbanDesignSystem_3bae67`.

- **Actions** (`components/actions/`): Button, IconButton
- **Forms** (`components/forms/`): Input, Select, Checkbox, Radio, Switch, SegmentedControl
- **Navigation** (`components/navigation/`): Tabs, Menu
- **Surfaces** (`components/surfaces/`): Card, Dialog
- **Feedback** (`components/feedback/`): Toast, Tooltip
- **Display** (`components/display/`): Tag, Avatar
- **Icons** (`components/icons/`): Icon, IconSwap
- **Data** (`components/data/`): BarChart, LineChart, Sparkline, Stat
- **Brand** (`components/brand/`): Mark (the bracket logo)

Intentional additions (no counterpart in the source):
- Icon — wrapper for the substituted Lucide set.
- IconSwap — cross-fade for in-place icon changes (copy → check); the motion rules call for it and no source component covers it.
- Mark — token-driven bracket logo so the draw-in can run in code; paths copied from `logo-on-light.svg` and `site-logo-on-light.svg`.
- Avatar — the source's radius notes list avatars under `radius-full`.
- BarChart, LineChart, Sparkline, Stat — the brand book calls for data to stay exact and use one accent for the resolved point; these make that the default. `emphasis="ink"` keeps a chart fully neutral when another element already carries the accent.
- Warning and info status colors (`--warning*`, `--info*`) and `--image-outline`.
- Control heights (`--control-sm/md/lg`), `--ring-focus`, `--shadow-float/overlay`, `--scrim`, `--ease-settle`, `--duration-exit` tokens — the brand book describes these behaviors but gives no values.

## Open decisions (from the brand book)

- Exact accent shades per theme (hue 138 is fixed).
- Whether Albert Sans stays the title face (Satoshi and General Sans were close).
- Sub-logos for individual apps: drafts in `explorations/Sub-logos.html`, waiting on the real app list.

## Index

The guideline cards are organised into sections, loosely following the categories in Jakub Krehel's interface skills: Brand, Color, Typography, Layout, Surfaces, Motion, Data, Accessibility, Writing, Components, Examples.

- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css` (both themes + semantic aliases), `typography.css`, `spacing.css`, `depth.css`, `motion.css`, `base.css`.
- `assets/fonts/` — Albert Sans 300–600, Wix Madefor Text 400–600 (WOFF2, OFL).
- `assets/logos/` — bracket logo (on-light, on-dark, mono), site logo (on-light, on-dark, mono), wordmark, lockup, favicon.
- `guidelines/brand/` — logo, site logo, lockup, favicon.
- `guidelines/color/` — palette cards for neutrals, accent and status (each token in both themes on its own ground, OKLCH + hex, purpose, aliases; read live from the CSS via `palette.js`), and **Color in use**, a light/dark sample with the rules.
- `guidelines/type/` — families, display, titles, body, type in use.
- `guidelines/layout/` — spacing scale.
- `guidelines/surfaces/` — radius, concentric corners, depth.
- `guidelines/motion/` — tokens, patterns, and a live demo built from components.
- `guidelines/data/` — chart specimens on the Data components; `data-viz.js` draws the cluster and activity-grid specimens.
- `guidelines/accessibility/` — contrast pairs computed live in both themes.
- `guidelines/writing/` — voice (instead of / write) and rules.
- `components/<group>/` — React primitives, one card per group.
- `examples/notes/`, `examples/portfolio/` (home + case study), `examples/settings/` — sample screens composed only from components and tokens. Copy is sample content.
- `guidelines/audit.md` — review against Jakub Krehel's interface skills: what was fixed, deliberate departures, what's open.
- `SKILL.md` — Agent Skill entry point.
- `src/index.js`, `src/index.d.ts` — package entry: every component, with types.
- `npm run build` (`scripts/build.mjs`) — builds `dist/index.js` and `dist/styles.css` (fonts included) with esbuild; runs automatically when a project installs from GitHub. `npm run check` (`scripts/check.mjs`) — fails CI if a component is incomplete or unexported.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated by the design tool for the cards; don't hand-edit.
- `.github/` — CI, PR title check, release automation, issue and PR templates, code owners.
- `CHANGELOG.md` — what changed in each release, written by the release automation.
- `CONTRIBUTING.md` — how changes and releases move through the repo.
