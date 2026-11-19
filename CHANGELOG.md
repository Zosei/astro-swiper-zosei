# Changelog

All notable changes to `astro-swiper-zosei` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.17.0] - 2026-11-19

### Added
- **Reusable `ArrowIcon` Component (`<Sw.Arrow />` / `<ArrowIcon />`)**: Extracted a single directional SVG arrow component reused for both `<Sw.Prev>` (`direction="prev"`, rotated 180°) and `<Sw.Next>` (`direction="next"`), and exported via `Sw.Arrow`, `Sw.ArrowIcon`, `ArrowIcon`, `SwArrow`, and `ArrowIconProps`.
- **Root Lint & Format Scripts**: Added `"lint"` and `"format"` workspace scripts in root `package.json`.
- **Playwright Navigation SVG & Changelog Assertions**: Verified `viewBox`, crisp icon sizing (`10 < px < 28`), and 180°/0° directional transforms across Chromium and Firefox.

### Changed
- **Fixed Triangular Navigation Arrows**: Replaced the open stroke-only V-path in `ButtonPrev.astro` and `ButtonNext.astro` (which Swiper 14's `fill: currentColor` rule collapsed into a stretched triangle) with a solid geometric arrow SVG sized with Tailwind v4 `!` utilities and compatible with Swiper's `.swiper-navigation-icon` RTL/vertical rotations without double rotation.
- **Dependencies Updated to Latest**:
  - `astro`: `^7.4.13`
  - `swiper`: `^14.4.0`
  - `@tailwindcss/vite` & `tailwindcss`: `^4.3.5`
  - `@biomejs/biome`: `^2.6.8` (with migrated `biome.jsonc` schema)
  - `@playwright/test`: `^1.65.1`
  - `@types/node`: `^26.6.6`
  - `prettier`: `^3.10.1` & `prettier-plugin-astro`: `^1.1.2`
- **Restored Wide Peer Dependencies**: Restored `"peerDependencies": { "astro": ">=5.0.0", "swiper": ">=11.0.0" }` in `packages/astro-swiper-zosei/package.json` so Astro 5/6/7 and Swiper 11–14 consumers do not hit peer-dependency conflicts.
- **Documentation & Public Repo Polish**: Updated `README.md`, `packages/astro-swiper-zosei/README.md`, `SECURITY.md`, AI agent guides (`AGENTS/`), `docs/README.md`, and docs pages (`docs.astro`, `playground.astro`, `changelog.astro`, plus GitHub Pages `BASE_PATH`-safe links).

### Fixed
- **Biome Lint Errors**: Fixed all 7 Biome lint errors in `scripts/init.cjs` and `scripts/postinstall.cjs` (`node:` import protocol and unused catch bindings) and migrated `biome.jsonc` to 2.6.8.
- **Git & Lockfile Hygiene**: Removed the stale nested `packages/astro-swiper-zosei/pnpm-lock.yaml`, cleaned `pnpm-workspace.yaml`, and fixed `.gitattributes` to enforce valid `eol=lf` rules across all text files.
- **CI, Pages, Publish & Dependency Automation Workflows**:
  - Upgraded all GitHub Actions (`ci.yml`, `deploy-docs.yml`, `publish-npm.yml`, `auto-update-deps.yml`) to Node 24-native action versions (`actions/checkout@v7`, `pnpm/action-setup@v6`, `actions/setup-node@v7`, `peter-evans/create-pull-request@v8`, `actions/upload-pages-artifact@v5`, `actions/deploy-pages@v5`).
  - Fixed Playwright CI step to use `pnpm --filter docs exec playwright install --with-deps chromium firefox` instead of mismatched global `npx playwright`.
  - Fixed `auto-update-deps.yml` to run `npm-check-updates --dep prod,dev` so `peerDependencies` ranges are preserved, plus full lint/build/Playwright verification and clearer permission diagnostics.
  - Consolidated `.github/dependabot.yml` into grouped workspace updates + `github-actions` updates.

## [0.16.0] - 2026-09-12

### Changed
- Configured tokenless npm Trusted Publishing via OIDC (`--provenance`) with Node 24 workflows and normalized `repository.url` casing (`Zosei/astro-swiper-zosei`) to match Sigstore provenance claims.
- Updated workspace dependencies and fixed Playwright CI test targeting.

## [0.15.0] - 2026-08-25

### Added
- Official Astro integration (`npx astro add astro-swiper-zosei` / `astro-swiper-zosei/integration`).
- Production `preset` prop (`hero`, `cards`, `marquee`, `testimonials`, `gallery`).
- Astro View Transitions (`<ClientRouter />`) lifecycle cleanup (`astro:before-swap`).
- Micro-controls: `<Sw.Toggle />`, `<Sw.Count />`, `<Sw.Full />`.
- Zero-JS CSS scroll-snap fallback before hydration.
- Interactive `/playground` and CLI component generator (`npx astro-swiper-zosei add ...`).

## [0.14.7] - 2026-08-22

### Added
- Master AI Agent documentation in `AGENTS/astro-swiper-zosei.md`.
- 100% Swiper parameter pass-through as component props.
- Open Graph, Twitter Card, and JSON-LD SEO suite for docs.

## [0.14.6] - 2026-08-22

### Added
- Styled interactive CLI (`scripts/init.cjs`) and `create-astro-swiper-zosei` support.

## [0.14.0] - 2026-08-20

### Added
- Modern rewrite with `<Sw>` compound component syntax, Tailwind CSS v4 styling, and 50+ live interactive demos.
