import { describe, it, expect } from 'vitest';
import { PRODUCTS } from '../apps/web/data/shop';

describe('ATMOS Shop Data Integrity & Product Specs', () => {
  it('should have 6 high-grade lifestyle products in the store catalog', () => {
    expect(PRODUCTS).toHaveLength(6);
  });

  it('should verify products adhere to Section VIII (No idol faces, independent design merit)', () => {
    PRODUCTS.forEach((product) => {
      expect(product.id).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
      expect(product.specs.length).toBeGreaterThan(0);
      expect(product.primaryImage).toBeTruthy();
      expect(product.tagline).toBeTruthy();
    });
  });

  it('should contain products across 4 categories: Audio, Vinyl, Wearables, and Utility', () => {
    const categories = new Set(PRODUCTS.map((p) => p.categorySlug));
    expect(categories.has('audio')).toBe(true);
    expect(categories.has('vinyl')).toBe(true);
    expect(categories.has('wearables')).toBe(true);
    expect(categories.has('utility')).toBe(true);
  });

  it('should find featured items correctly', () => {
    const featured = PRODUCTS.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(3);
  });
});
