import { test, expect } from '@playwright/test';

test.describe('ATMOS Roster Module E2E Journey', () => {
  test('should navigate to /roster directory and view member detail', async ({ page }) => {
    await page.goto('/roster');

    // Header title check
    await expect(page.locator('h1')).toContainText('THE PERSON');

    // Section 01 Collectives check
    await expect(page.locator('h2', { hasText: 'COLLECTIVES' })).toBeVisible();

    // Section 02 Individuals check
    await expect(page.locator('h2', { hasText: 'INDIVIDUALS' })).toBeVisible();

    // Check member cards exist (Jiwoo)
    await expect(page.getByRole('heading', { name: 'Jiwoo' }).first()).toBeVisible();

    // Click on Jiwoo member profile link (force: true bypasses infinite marquee animation movement check)
    await page.getByRole('link', { name: /Jiwoo/i }).first().click({ force: true });

    // Verify dynamic member page loaded
    await expect(page).toHaveURL(/\/roster\/jiwoo/);
    await expect(page.locator('h1')).toContainText('Jiwoo');
    await expect(page.locator('text=Bedroom Producer & Multi-Instrumentalist')).toBeVisible();
  });
});
