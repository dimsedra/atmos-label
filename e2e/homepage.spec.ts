import { test, expect } from '@playwright/test';

test.describe('ATMOS Homepage E2E Journey', () => {
  test('should render ATMOS branding, navigation, and core sections', async ({ page }) => {
    await page.goto('/');

    // Check main brand title
    await expect(page.locator('h1')).toContainText('ATMOS');

    // Check main navigation links
    const nav = page.locator('nav').first();
    await expect(nav).toContainText('Music');
    await expect(nav).toContainText('Collectives');
    await expect(nav).toContainText('Objects');
    await expect(nav).toContainText('Journal');

    // Check Section 02 Collectives in Resonance heading
    await expect(page.locator('h2', { hasText: 'Collectives in resonance' })).toBeVisible();
  });
});
