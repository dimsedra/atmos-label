'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/shop';
import { ProductCard } from '../../components/shop/ProductCard';
import { CartDrawer } from '../../components/shop/CartDrawer';
import { CheckoutModal } from '../../components/shop/CheckoutModal';
import { useCart } from '../../context/CartContext';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { cartCount, setIsCartOpen, addedToast } = useCart();

  const categories = [
    { id: 'all', name: 'All Objects' },
    { id: 'audio', name: 'Audio Equipment' },
    { id: 'vinyl', name: 'Vinyl & Physical' },
    { id: 'wearables', name: 'Wearables' },
    { id: 'utility', name: 'Studio Utility' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categorySlug === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 text-[#111] md:px-10">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-[74px] items-center justify-between border-b border-black/15 bg-[#f4f4f1]/90 px-5 backdrop-blur-md md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:text-[#ff3b26]"
        >
          <ArrowLeft size={16} /> Back to Atmosphere
        </Link>
        <span className="brand-mark">
          ATMOS<span>®</span> // STOREFRONT
        </span>

        {/* Header Cart Trigger Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:bg-black hover:text-white"
        >
          <ShoppingBag size={14} /> Cart ({cartCount})
        </button>
      </div>

      {/* Hero Banner Section */}
      <section className="pt-28 pb-12 md:pt-36">
        <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
          SECTION VIII // COMMERCIAL ARCHITECTURE
        </span>
        <h1 className="mt-2 text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
          PHYSICAL OBJECTS & SIGNALS
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
          Utility, adornment, and sound. Objects built by ATMOS Studio in Seoul carrying zero group logos or idol faces — designed to stand completely on their own design merit.
        </p>

        {/* Toast Feedback Banner when item added */}
        {addedToast && (
          <div className="mt-6 flex items-center gap-3 rounded-lg bg-[#e8ff43] px-4 py-3 text-xs font-semibold text-black shadow-md animate-bounce">
            <ShoppingBag size={16} /> Added &ldquo;{addedToast}&rdquo; to your shopping bag!
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col gap-4 border-y border-black/20 py-6 md:flex-row md:items-center md:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] transition ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white/80 text-black border border-black/15 hover:bg-black/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search objects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-black/20 bg-white/80 py-2 pl-9 pr-4 text-xs focus:border-black focus:outline-none"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-black/40" />
          </div>
        </div>
      </section>

      {/* Catalog Product Grid */}
      <section className="pb-24">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-black/50">
            <p className="text-xl font-semibold uppercase">No objects found</p>
            <p className="mt-2 text-xs">Try selecting another category or clearing your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* Slide-Over Cart Drawer & Simulated Checkout Modal */}
      <CartDrawer />
      <CheckoutModal />

      {/* Footer */}
      <footer className="border-t border-black/25 py-12 text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© ATMOS 2026 — Seoul, South Korea</p>
          <p>Objects built to outlive the release cycle.</p>
        </div>
      </footer>
    </main>
  );
}
