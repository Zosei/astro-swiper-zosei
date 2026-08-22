# Docs

## Run

```bash
pnpm run dev
```

## Test

```bash
pnpm run test
```

## Update source swipers

Swipers are located in `src/swiper-components`. All come from
[astro-dev](https://github.com/zosei/astro-dev/tree/main/src/content/docs/packages/astro-swiper-zosei)
documentation.

In order to update the swiper demo, copy all these files in `src/swiper-components`. A command is available
when [astro-dev](https://github.com/zosei/astro-dev) is installed at the same
root level as [astro-swiper-zosei](https://github.com/zosei/astro-swiper-zosei):

```bash
pnpm run install-swipers
```
