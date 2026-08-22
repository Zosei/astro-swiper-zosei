// Copyright (c) Zosei
// MIT License

import pkg from '../../../packages/astro-swiper-zosei/package.json';

export const SITE_CONFIG = {
  name: pkg.name || 'astro-swiper-zosei',
  version: pkg.version || '2.0.0',
  astroVersion: pkg.devDependencies?.astro ? `${pkg.devDependencies.astro.replace(/[\^~]/g, '')}+` : '7.2+',
  tailwindVersion: 'v4',
  swiperVersion: pkg.dependencies?.swiper ? `v${pkg.dependencies.swiper.replace(/[\^~]/g, '')}` : 'v14.1.0',
  githubUrl: pkg.repository?.url?.replace(/^git\+/, '').replace(/\.git$/, '') || 'https://github.com/zosei/astro-swiper-zosei',
  npmUrl: `https://www.npmjs.com/package/${pkg.name || 'astro-swiper-zosei'}`,
};
