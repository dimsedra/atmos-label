import { test, expect } from '@playwright/test';

test.describe('ATMOS Shop & Storefront Flow', () => {
  test('should render shop catalog and support filter searching', async ({ page }) => {
    await page.goto('/shop');

    // Header title check
    await expect(page.locator('h1')).toContainText('PHYSICAL OBJECTS & SIGNALS');

    // Verify products render
    const productCards = page.locator('button:has-text("Add +")');
    await expect(productCards).toHaveCount(6);

    // Test search filter
    const searchInput = page.locator('input[placeholder="Search objects..."]');
    await searchInput.fill('Headset');
    await expect(page.locator('button:has-text("Add +")')).toHaveCount(1);
  });

  test('should navigate to product detail, add to cart, and open checkout modal', async ({ page }) => {
    await page.goto('/shop/prod-01');

    // Check product title
    await expect(page.locator('h1')).toContainText('A-01 Studio Reference Headset');

    // Click Add to Cart
    await page.click('button:has-text("Add to Cart")');

    // Cart Drawer should open
    await expect(page.locator('text=Cart Bag (1)')).toBeVisible();
    await expect(page.locator('aside').getByText('$280').first()).toBeVisible();

    // Click Proceed to Checkout
    await page.click('button:has-text("Proceed to Checkout")');

    // Checkout modal should open
    await expect(page.locator('text=Shipping & Payment')).toBeVisible();
  });
});
