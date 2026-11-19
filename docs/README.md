# Astro Swiper Zosei Docs

Sitio oficial de documentación, playground interactivo y catálogo de más de 50 demos para [`astro-swiper-zosei`](../packages/astro-swiper-zosei).

## Desarrollo

Desde la raíz del monorepo o dentro de `docs/`:

```bash
# Servidor de desarrollo
pnpm --filter docs dev

# Compilación estática (dist/)
pnpm --filter docs build

# Ejecutar pruebas end-to-end con Playwright (Chromium & Firefox)
pnpm --filter docs exec playwright install chromium firefox
pnpm --filter docs test
```

Los componentes de demostración viven en `docs/src/components/demos/` y su registro de catálogo en `docs/src/data/demosRegistry.ts`.
