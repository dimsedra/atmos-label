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

    // Direct navigation to member detail page
    await page.goto('/roster/jiwoo');

    // Verify dynamic member detail page loaded
    await expect(page.locator('h1')).toContainText('Jiwoo');
    await expect(page.locator('text=PROFILE & BACKGROUND')).toBeVisible();
  });
});
