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
    const prevBtn = swiper.locator('.swiper-button-prev');
    const nextBtn = swiper.locator('.swiper-button-next');
    await expect(prevBtn).toBeVisible();
    await expect(nextBtn).toBeVisible();

    // 3. Verificar que ambos botones reutilizan el nuevo ArrowIcon SVG en direcciones opuestas y con tamaño nítido
    const prevSvg = prevBtn.locator('svg.swiper-navigation-icon');
    const nextSvg = nextBtn.locator('svg.swiper-navigation-icon');
    await expect(prevSvg).toBeVisible();
    await expect(nextSvg).toBeVisible();
    await expect(prevSvg).toHaveAttribute('viewBox', '0 0 289.6 375.2');
    await expect(nextSvg).toHaveAttribute('viewBox', '0 0 289.6 375.2');

    const prevTransform = await prevSvg.evaluate((el) => getComputedStyle(el).transform);
    const nextTransform = await nextSvg.evaluate((el) => getComputedStyle(el).transform);
    expect(prevTransform).toMatch(/^matrix\(-1,\s*[-0-9.e]+,\s*[-0-9.e]+,\s*-1,\s*0,\s*0\)$/);
    expect(nextTransform === 'none' || nextTransform === 'matrix(1, 0, 0, 1, 0, 0)').toBeTruthy();

    const prevBox = await prevSvg.boundingBox();
    const nextBox = await nextSvg.boundingBox();
    expect(prevBox).not.toBeNull();
    expect(nextBox).not.toBeNull();
    expect(prevBox!.width).toBeGreaterThan(10);
    expect(prevBox!.width).toBeLessThan(28);
    expect(prevBox!.height).toBeGreaterThan(10);
    expect(prevBox!.height).toBeLessThan(28);
    expect(nextBox!.width).toBeGreaterThan(10);
    expect(nextBox!.width).toBeLessThan(28);
    expect(nextBox!.height).toBeGreaterThan(10);
    expect(nextBox!.height).toBeLessThan(28);
  });
});
