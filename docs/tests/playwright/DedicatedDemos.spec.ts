// Copyright (c) Zosei
// MIT License

import { test, expect } from '@playwright/test';

test.describe('Páginas Dedicadas de Demos (/demos/[slug])', () => {
  test('Renderizado de Demo 3D Cards con CodeBlock y Navegación', async ({ page }) => {
    await page.goto('/demos/cards');

    // 1. Verificar título principal
    const title = page.locator('main h1');
    await expect(title).toHaveText('Efecto 3D Cards');

    // 2. Verificar que el Swiper interactivo está visible y contiene slides
    const swiper = page.locator('.swiper').first();
    await expect(swiper).toBeVisible();
    const slides = swiper.locator('.swiper-slide');
    await expect(slides.first()).toBeVisible();

    // 3. Verificar el botón de copia del bloque de código
    const copyBtn = page.locator('[data-copy-button]').first();
    await expect(copyBtn).toBeVisible();
    await copyBtn.click({ force: true });
    await expect(copyBtn.locator('.copy-text')).toHaveText('¡Copiado!');
  });

  test('Renderizado de Demo Navigation con Botones de Flechas', async ({ page }) => {
    await page.goto('/demos/navigation');

    // 1. Verificar título
    await expect(page.locator('main h1')).toHaveText('Navegación por Flechas');

    // 2. Verificar Swiper y controles de navegación
    const swiper = page.locator('.swiper').first();
    await expect(swiper).toBeVisible();
    await expect(swiper.locator('.swiper-button-next')).toBeVisible();
    await expect(swiper.locator('.swiper-button-prev')).toBeVisible();
  });
});
