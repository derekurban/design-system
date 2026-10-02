---
name: derek-urban-design
description: Use this skill to generate well-branded interfaces and assets for Derek Urban, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.

Where things are:
- `styles.css` is the one stylesheet to link; it imports every token file and the fonts. Set `data-theme="light"`, `"dark"` or `"system"` on `<html>` or any subtree.
- `components/<group>/` holds React components (React is the only dependency). Each has a `.d.ts` with its props and a `.prompt.md` with usage. Icons need the Lucide UMD script on the page.
- `guidelines/<section>/` holds the specimen cards: brand, color, type, layout, surfaces, motion, data, accessibility, writing. `guidelines/audit.md` lists deliberate departures from common UI advice; respect them.
- `examples/` holds full sample screens (notes tool, portfolio, settings) that show how the pieces compose.
- `assets/` holds fonts and the bracket logo, site logo, lockup, wordmark and favicon (`assets/logos/`).

Rules that matter most: true-gray neutrals and one moss-green accent (OKLCH hue 138) used only where things resolve (deep moss: one color for the primary fill, every accent mark and success; only one accent-filled button per view); status colors only for status; Albert Sans for titles, Wix Madefor Text for everything else, sentence case, no emoji, no hype; hairlines over borders, with a soft resting shadow on cards; motion that answers an action, exits quieter than entrances, and respects reduced motion.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
