// Copyright (c) Zosei
// MIT License

import type { AstroIntegration } from 'astro';

export interface AstroSwiperIntegrationOptions {
  /** Inyectar estilos CSS globales de Swiper automáticamente (por defecto: true) */
  injectCss?: boolean;
}

/**
 * Integración oficial de Astro para astro-swiper-zosei.
 * Permite usar `npx astro add astro-swiper-zosei` o importar en `astro.config.mjs`.
 */
export default function astroSwiper(options: AstroSwiperIntegrationOptions = {}): AstroIntegration {
  const { injectCss = true } = options;

  return {
    name: 'astro-swiper-zosei',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        if (injectCss) {
          injectScript('page-ssr', `import 'swiper/css/bundle';`);
        }
      },
    },
  };
}
