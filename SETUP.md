# First-time setup

One-time steps to put this folder on GitHub. Delete this file in the first PR after setup.

1. Create an empty repository `derekurban/design-system` on GitHub (no readme, no license). If your username or org differs, replace `derekurban` in `package.json`, `.github/CODEOWNERS`, `readme.md` and `CONTRIBUTING.md`.
2. From this folder:
   ```sh
   git init -b main
   git add .
   git commit -m "feat: initial design system"
   git remote add origin https://github.com/derekurban/design-system.git
   git push -u origin main
   ```
3. In the repository settings, apply everything under "Repository settings" in `CONTRIBUTING.md` (branch protection, `NPM_TOKEN`, workflow permissions).
4. The Release workflow opens a PR titled `chore(main): release 0.1.0`. Merge it. That tags `v0.1.0`, creates the GitHub release and publishes to npm.
5. In each project, install `@derekurban/design-system@^0.1.0` (or `github:derekurban/design-system#v0.1.0`) and remove any copied tokens or components.

To publish to npm under `@derekurban` (your npm user scope), add an `NPM_TOKEN` secret before step 4. Without `NPM_TOKEN`, step 4 still creates the tag and GitHub release, and projects can install from GitHub.
