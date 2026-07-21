import { test, expect } from '@playwright/test';

test.describe('ATMOS Homepage E2E Journey', () => {
  test('should render ATMOS branding, navigation, and core sections', async ({ page }) => {
    await page.goto('/');

    // Check main brand title
    await expect(page.locator('h1')).toContainText('ATMOS');

    // Check navigation links
    const nav = page.locator('nav').first();
    await expect(nav).toContainText('Music');
    await expect(nav).toContainText('Artists');
    await expect(nav).toContainText('Objects');
    await expect(nav).toContainText('Journal');

    // Check sections exist
    await expect(page.locator('#releases')).toBeVisible();
    await expect(page.locator('#artists')).toBeVisible();
    await expect(page.locator('#shop')).toBeVisible();
    await expect(page.locator('#journal')).toBeVisible();
  });
});
