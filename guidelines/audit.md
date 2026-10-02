# Interface review

A review of this design system against the principles in Jakub Krehel's interface skills (`better-ui`, `better-typography`, `better-colors`, `better-accessibility`, `better-layout`, `better-writing`; github.com/jakubkrehel/skills). Run on October 1, 2026, by reading the component source and walking the cards. To re-run in Claude Code: `npx skills add jakubkrehel/skills`, then `/interface-review`.

## Fixed in this pass

| Severity | Location | Before | After | Principle |
| --- | --- | --- | --- | --- |
| HIGH | `components/display/Tag.jsx` | Remove control 18×18, no keyboard handler | 24×24 hit area (negative margin keeps the layout), Enter/Space remove, label "Remove {tag}" | Hit areas; keyboard support |
| MEDIUM | `components/navigation/Menu.jsx` | `role="menu"` with no arrow-key navigation | Focus moves to the first item on open; ArrowUp/Down, Home/End; Escape returns focus to the trigger; trigger has `aria-haspopup`/`aria-expanded` | Keyboard support |
| MEDIUM | `components/surfaces/Dialog.jsx` | Focus stayed behind the dialog | Focus moves into the dialog, Tab is trapped, focus returns on close | Focus management |
| MEDIUM | `components/feedback/Tooltip.jsx` | Tooltip not linked to its trigger | Trigger gets `aria-describedby` | ARIA |
| MEDIUM | `components/actions/IconButton.jsx` | Native `title` duplicated the Tooltip | `title` removed; `aria-label` names the button, Tooltip shows it | One tooltip at a time |
| LOW | `components/display/Avatar.jsx` | 0.5px black outline in both themes | 1px `--image-outline`: pure black at 10% in light, pure white at 10% in dark | Image outlines |
| LOW | Feedback card, readme | "neighbours" | "neighbors", matching US spelling elsewhere | Consistent copy |

Fixed in earlier passes: press scale 0.96 everywhere (`--press-scale`), contextual icon swaps (`IconSwap`), subtle ease-out exits, interruptible transitions, transform-based indicators, tooltip warm-up, light/dark contrast matched per token.

## Checked, no change needed

- Concentric radius: Menu 12 = items 8 + padding 4; SegmentedControl 10 = thumb 8 + padding 2.
- Shadows for elevation, hairlines for structure: rings are `box-shadow`, real shadows only on floating layers.
- No `transition: all`; no `will-change`.
- Text: antialiased rendering, `balance` on headings, `pretty` on paragraphs, tabular figures in data.
- Reduced motion zeroes every duration; scripted animations check the media query.
- Icons: one set (Lucide), `currentColor`, 1.5 stroke beside 400–500 text.
- Motion restraint: high-frequency hovers are 120ms color steps only.

## Deliberate departures

These differ from the skills' defaults on purpose. Keep them out of future findings.

- **Cards use a hairline plus a very soft lift, not a heavy layered shadow.** The ring stays 0.5px; `--shadow-rest` adds two low-opacity layers. Adopted October 2026 after a side-by-side (Surfaces › Cards: hairline vs hairline + shadow).
- **No spring physics.** Motion uses the three duration tokens and cubic-bezier curves so CSS and JS animations agree; nothing bounces.
- **Tooltips use `--ink` on `--bg`** (inverted) rather than a surface-colored popover.

## Still open

- IconButton `sm` is 28px. It passes the 24px minimum, but dense toolbars on touch should use `md`.
- Select is native; its option list follows the OS, not the tokens.
