# Changelog

## [0.1.1](https://github.com/derekurban/design-system/compare/v0.1.0...v0.1.1) (2026-10-02)


### Fixed

* build and check with Node scripts, test on Windows in CI ([aef7068](https://github.com/derekurban/design-system/commit/aef7068eefdd2f351f59eb41cc6cda94764b7522))
* build on Windows without rm -rf ([f811d48](https://github.com/derekurban/design-system/commit/f811d48d3ddf4067127a47aea6a5754726b51ca8))
* build on Windows without rm -rf ([f8400da](https://github.com/derekurban/design-system/commit/f8400dae343b1784bec3793d0d9dba17a48bd215))


### Guidelines

* install from GitHub only and document upgrades and releases ([9f1fddd](https://github.com/derekurban/design-system/commit/9f1fddda4767354cb617c34c153f3a597b511028))
* install from GitHub only and document upgrades and releases ([7b1fe4f](https://github.com/derekurban/design-system/commit/7b1fe4f7cdb095b7423587b4058ffe3b98e36103))

## 0.1.0 (2026-10-02)

First release.

### Added

* Tokens for color (light and dark), typography, spacing, depth and motion, plus the base styles, all bundled into `styles.css`.
* Albert Sans and Wix Madefor Text fonts, and the mark, wordmark, lockup, site logo and favicon in on-light, on-dark and mono versions.
* React components:
  * actions: `Button`, `IconButton`
  * brand: `Mark`
  * data: `BarChart`, `LineChart`, `Sparkline`, `Stat`
  * display: `Avatar`, `Tag`
  * feedback: `Toast`, `Tooltip`
  * forms: `Checkbox`, `Input`, `Radio`, `SegmentedControl`, `Select`, `Switch`
  * icons: `Icon`, `IconSwap`
  * navigation: `Menu`, `Tabs`
  * surfaces: `Card`, `Dialog`
* Type definitions and a usage prompt for every component.

### Guidelines

* Guideline cards for accessibility, brand, color, data, layout, motion, surfaces, type and writing.
* Example screens (notes, portfolio, settings) and the `SKILL.md` brief for building with the system.
