// Copyright (c) Zosei
// MIT License

import { test, expect } from '@playwright/test';

test.describe('Catálogo de Demos (/demos)', () => {
  test('Buscador, Filtros por Categoría, Switch de Vistas Previas y Copia Rápida', async ({ page }) => {
    await page.goto('/demos');

    // 1. Verificar que cargan las tarjetas de demos
    const cards = page.locator('.demo-card');
    await expect(cards.first()).toBeVisible();
    const initialCount = await cards.count();
    expect(initialCount).toBeGreaterThan(40);

    // 2. Probar el Buscador interactivo
    const searchInput = page.locator('#demo-search');
    await searchInput.fill('cards');
    await expect(page.locator('.demo-card[data-slug="cards"]')).toBeVisible();
    await searchInput.clear();

    // 3. Probar el Filtro por Categorías (píldoras)
    const categoryBtn3D = page.locator('.category-btn[data-category="Efectos 3D"]');
    await categoryBtn3D.click();
    await expect(page.locator('.demo-card[data-slug="cards"]')).toBeVisible();
    await expect(page.locator('.demo-card[data-slug="cube"]')).toBeVisible();

    // Volver a categoría "Todos"
    const allCategoryBtn = page.locator('.category-btn[data-category="Todos"]');
    await allCategoryBtn.click();

    // 4. Probar el Switch de Vistas Previas en Vivo (default: visible)
    const previewContainer = page.locator('.demo-preview-container').first();
    await expect(previewContainer).toBeVisible();

    const toggleBtn = page.locator('#preview-toggle-btn');
    await toggleBtn.click();
    await expect(previewContainer).toBeHidden();

    // Volver a activar
    await toggleBtn.click();
    await expect(previewContainer).toBeVisible();

    // 5. Probar el botón de Copia Rápida ("Copiar Esqueleto")
    const copyBtn = page.locator('.quick-copy-btn').first();
    await expect(copyBtn).toBeVisible();
    await copyBtn.click({ force: true });
    await expect(copyBtn.locator('.btn-text')).toHaveText('¡Copiado!');
  });
});
