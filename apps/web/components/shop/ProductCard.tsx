'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import type { Product } from '../../data/shop';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      className="group relative flex flex-col justify-between border-t border-black/20 pt-6"
    >
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden bg-white/60">
          <Link href={`/shop/${product.id}`} className="block h-full w-full">
            <img
              src={product.primaryImage}
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="rounded-full bg-black/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">
              {product.category}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.16em] ${
                product.stockStatus === 'Limited Drop'
                  ? 'bg-[#ff3b26] text-white'
                  : 'bg-[#e8ff43] text-black'
              }`}
            >
              {product.stockStatus}
            </span>
          </div>

          {/* Quick Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white shadow-lg transition duration-300 hover:bg-[#ff3b26] hover:scale-105"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={13} /> Add +
          </button>
        </div>

        {/* Product Meta */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <Link href={`/shop/${product.id}`} className="group-hover:text-[#ff3b26] transition">
              <h3 className="text-xl font-semibold tracking-[-.03em] leading-tight">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-xs text-black/60 line-clamp-1">{product.tagline}</p>
          </div>
          <span className="text-lg font-bold tracking-tight text-black ml-3">
            {product.currency}
            {product.price}
          </span>
        </div>
      </div>

      {/* Link Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">
        <span>ATMOS STUDIO</span>
        <Link
          href={`/shop/${product.id}`}
          className="flex items-center gap-1 text-[#ff3b26] hover:underline"
        >
          View Specs <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}
