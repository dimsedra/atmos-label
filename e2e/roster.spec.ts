import { test, expect } from '@playwright/test';

test.describe('ATMOS Roster Module E2E Journey', () => {
  test('should navigate to /roster directory, filter by VALLEY, and view member detail', async ({ page }) => {
    await page.goto('/roster');

    // Check main display header
    await expect(page.locator('h1')).toContainText('THE PERSON');

    // Check group section headings for VALLEY and PRIX
    await expect(page.getByRole('heading', { name: 'VALLEY' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'PRIX' })).toBeVisible();

    // Check member cards exist (Jiwoo)
    await expect(page.getByRole('heading', { name: 'Jiwoo' })).toBeVisible();

    // Test filter tab: click VALLEY tab
    await page.getByRole('button', { name: 'VALLEY (5)' }).click();
    await expect(page.locator('text=MEMBER PROFILES (5)')).toBeVisible();

    // Click on Jiwoo member profile card link
    await page.getByRole('link', { name: /Jiwoo/i }).first().click();

    // Should navigate to detail page /roster/jiwoo
    await expect(page).toHaveURL(/\/roster\/jiwoo/);
    await expect(page.locator('h1')).toContainText('Jiwoo');
    await expect(page.locator('text=SOLO SOVEREIGNTY PROJECTS')).toBeVisible();
  });
});
