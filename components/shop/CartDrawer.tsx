'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    cartCount,
    setIsCheckoutOpen,
  } = useCart();

  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-Over Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col justify-between bg-[#f4f4f1] p-6 text-[#111] shadow-2xl md:p-8"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between border-b border-black/20 pb-5">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  <h2 className="text-xl font-semibold uppercase tracking-tight">
                    Cart Bag ({cartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full p-2 hover:bg-black/10 transition"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="mt-4 border-b border-black/15 pb-4">
                <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[.18em] text-black/60">
                  <span>
                    {subtotal >= freeShippingThreshold
                      ? 'FREE WORLDWIDE EXPRESS SHIPPING UNLOCKED'
                      : `ADD $${freeShippingThreshold - subtotal} MORE FOR FREE SHIPPING`}
                  </span>
                  <span>{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                  <div
                    className="h-full bg-[#ff3b26] transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Cart Items Stream */}
            <div className="my-6 flex-1 overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-black/50">
                  <ShoppingBag size={48} className="stroke-1 text-black/30" />
                  <p className="mt-4 text-base font-medium">Your shopping bag is empty.</p>
                  <p className="mt-1 text-xs text-black/40">
                    Explore physical objects and audio equipment designed by ATMOS Studio.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 border-b border-black/15 pb-4"
                    >
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        className="h-20 w-20 object-cover rounded-lg bg-white"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between font-semibold">
                            <h3 className="text-sm line-clamp-1">{item.product.name}</h3>
                            <span>${item.product.price * item.quantity}</span>
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/45">
                            {item.product.category}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center rounded-md border border-black/20 bg-white">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="px-2 py-1 hover:bg-black/5"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="px-2 py-1 hover:bg-black/5"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-black/40 hover:text-[#ff3b26] transition"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer & Checkout Action */}
            <div className="border-t border-black/20 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-1 text-[10px] text-black/50 uppercase tracking-[.15em]">
                Shipping & taxes calculated during checkout
              </p>

              <button
                disabled={cartItems.length === 0}
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-semibold uppercase tracking-[.2em] text-white transition hover:bg-[#ff3b26] disabled:opacity-40 disabled:hover:bg-black"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
