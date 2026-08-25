// Copyright (c) Zosei
// MIT License

import { test, expect } from '@playwright/test';

test.describe('Playground & Changelog Suites (v0.15.0)', () => {
  test('Renderizado interactivo del Playground y Generador de Código', async ({ page }) => {
    await page.goto('/playground');

    // 1. Verificar título y cabecera
    await expect(page.locator('h1')).toContainText('Playground');

    // 2. Verificar que el carrusel en vivo está en el DOM
    const liveSwiper = page.locator('#live-playground-swiper');
    await expect(liveSwiper).toBeVisible();

    // 3. Probar botón de preset Hero
    const heroPresetBtn = page.locator('button[data-preset="hero"]');
    await expect(heroPresetBtn).toBeVisible();
    await heroPresetBtn.click();

    // 4. Verificar que el código generado se actualiza
    const codeOutput = page.locator('#code-output');
    await expect(codeOutput).toContainText('preset="hero"');

    // 5. Probar botón de copiar código
    const copyBtn = page.locator('#btn-copy-code');
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();
  });

  test('Renderizado del Changelog con versiones y tags', async ({ page }) => {
    await page.goto('/changelog');

    // 1. Verificar título
    await expect(page.locator('h1')).toContainText('Changelog');

    // 2. Verificar que la versión v0.15.0 está listada
    await expect(page.locator('text=v0.15.0').first()).toBeVisible();

    // 3. Verificar que versiones anteriores también existen en el timeline
    await expect(page.locator('text=v0.14.7').first()).toBeVisible();
    await expect(page.locator('text=v0.14.0').first()).toBeVisible();
  });
});
