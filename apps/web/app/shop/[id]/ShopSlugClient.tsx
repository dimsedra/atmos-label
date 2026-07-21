'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import type { Product } from '../../../data/shop';
import { PRODUCTS } from '../../../data/shop';
import { ProductCard } from '../../../components/shop/ProductCard';
import { CartDrawer } from '../../../components/shop/CartDrawer';
import { CheckoutModal } from '../../../components/shop/CheckoutModal';
import { useCart } from '../../../context/CartContext';

interface ShopSlugClientProps {
  product?: Product;
}

export function ShopSlugClient({ product }: ShopSlugClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.primaryImage || ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, setIsCartOpen, cartCount } = useCart();

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f4f4f1] p-6 text-center text-[#111]">
        <h1 className="text-4xl font-semibold uppercase">Object Not Found</h1>
        <p className="mt-3 text-sm text-black/60">
          The requested lifestyle product or signal object does not exist in the active catalog.
        </p>
        <Link href="/shop" className="arrow-link mt-8">
          <ArrowLeft size={16} /> Return to Storefront Catalog
        </Link>
      </main>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  );

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#111]">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-[74px] items-center justify-between border-b border-black/15 bg-[#f4f4f1]/90 px-5 backdrop-blur-md md:px-10">
        <Link
          href="/shop"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:text-[#ff3b26]"
        >
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
        <span className="brand-mark">
          ATMOS<span>®</span> // OBJECT DETAIL
        </span>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:bg-black hover:text-white"
        >
          <ShoppingBag size={14} /> Cart ({cartCount})
        </button>
      </div>

      <article className="px-5 pt-28 pb-24 md:px-10 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Gallery View */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={selectedImage || product.primaryImage}
                alt={product.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>

            {product.gallery.length > 1 && (
              <div className="mt-4 flex gap-4">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 bg-white transition ${
                      selectedImage === img ? 'border-black' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Specifications & Purchase Box */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-black text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[.2em]">
                  {product.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
                  {product.stockStatus}
                </span>
              </div>

              <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.9] tracking-[-.05em]">
                {product.name}
              </h1>

              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-3xl font-bold tracking-tight text-black">
                  {product.currency}
                  {product.price} USD
                </span>
                <span className="text-xs text-black/50 uppercase tracking-[.15em]">
                  Tax included · Free Shipping over $150
                </span>
              </div>

              <p className="mt-6 text-base font-medium leading-relaxed text-black/80 md:text-lg">
                {product.tagline}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {product.description}
              </p>

              {/* Quantity Selector & Add to Cart CTA */}
              <div className="mt-8 border-t border-black/20 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-xl border border-black/20 bg-white p-2">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 font-bold hover:bg-black/5"
                    >
                      -
                    </button>
                    <span className="px-4 font-semibold text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1 font-bold hover:bg-black/5"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-semibold uppercase tracking-[.2em] text-white shadow-xl transition hover:bg-[#ff3b26]"
                  >
                    <ShoppingBag size={16} /> Add to Cart — ${product.price * quantity}
                  </button>
                </div>
              </div>

              {/* Materials & Origin Specs Table */}
              <div className="mt-10 border-t border-black/20 pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
                  MATERIAL & ENGINEERING SPECS
                </span>
                <div className="mt-4 grid gap-3 text-xs">
                  {product.materials && (
                    <div className="flex justify-between border-b border-black/10 pb-2">
                      <span className="font-semibold text-black/50">Materials</span>
                      <span className="font-semibold text-black">{product.materials}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex justify-between border-b border-black/10 pb-2">
                      <span className="font-semibold text-black/50">Dimensions</span>
                      <span className="font-semibold text-black">{product.dimensions}</span>
                    </div>
                  )}
                  {product.origin && (
                    <div className="flex justify-between border-b border-black/10 pb-2">
                      <span className="font-semibold text-black/50">Origin / Assembly</span>
                      <span className="font-semibold text-black">{product.origin}</span>
                    </div>
                  )}
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between border-b border-black/10 pb-2">
                      <span className="font-semibold text-black/50">{s.label}</span>
                      <span className="font-semibold text-black">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees Badges */}
              <div className="mt-8 flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[.15em] text-black/60">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-[#ff3b26]" /> Express Courier Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#ff3b26]" /> 2-Year Studio Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-[#ff3b26]" /> Zero Idol Branding
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Objects Stream */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 border-t border-black/30 pt-16">
            <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
              COMPLEMENTARY OBJECTS
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
              RELATED IN CATEGORY ({relatedProducts.length})
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relProduct, idx) => (
                <ProductCard key={relProduct.id} product={relProduct} index={idx} />
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Cart Drawer & Checkout Modal */}
      <CartDrawer />
      <CheckoutModal />
    </main>
  );
}
