'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Truck, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  // Form State
  const [name, setName] = useState('Jiwoo Han');
  const [email, setEmail] = useState('jiwoo@atmos.kr');
  const [address, setAddress] = useState('14 Seongsu-il-ro, Seongdong-gu');
  const [city, setCity] = useState('Seoul');
  const [postalCode, setPostalCode] = useState('04781');
  const [country, setCountry] = useState('South Korea');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'e-wallet'>('card');

  // Mock Order Output State
  const [orderId, setOrderId] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    // Simulate payment API roundtrip & BullMQ job dispatch
    setTimeout(() => {
      const generatedOrderId = `ATMOS-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const generatedResi = `KR-ATMOS-${Math.floor(10000000 + Math.random() * 90000000)}`;
      setOrderId(generatedOrderId);
      setTrackingNumber(generatedResi);
      setStep('success');
      clearCart();
    }, 2000);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setStep('form'), 300);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Checkout Modal Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#f4f4f1] p-6 text-[#111] shadow-2xl md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 rounded-full p-2 hover:bg-black/10 transition"
                aria-label="Close checkout modal"
              >
                <X size={20} />
              </button>

              {/* STEP 1: FORM */}
              {step === 'form' && (
                <form onSubmit={handleCheckoutSubmit}>
                  <div className="border-b border-black/15 pb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
                      SIMULATED CHECKOUT FLOW
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight uppercase">
                      Shipping & Payment
                    </h2>
                  </div>

                  {/* Order Items Preview */}
                  <div className="my-4 flex items-center justify-between rounded-lg bg-black/5 p-3 text-xs">
                    <span className="font-semibold">
                      {cartItems.length} Product(s) Selected
                    </span>
                    <span className="font-bold text-[#ff3b26]">${subtotal} USD</span>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                        Shipping Address
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          required
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full rounded-lg border border-black/20 bg-white p-2.5 font-medium focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="pt-2">
                      <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-black/60 mb-2">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`rounded-lg border p-3 text-center transition ${
                            paymentMethod === 'card'
                              ? 'border-black bg-black text-white'
                              : 'border-black/20 bg-white text-black'
                          }`}
                        >
                          Credit Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('applepay')}
                          className={`rounded-lg border p-3 text-center transition ${
                            paymentMethod === 'applepay'
                              ? 'border-black bg-black text-white'
                              : 'border-black/20 bg-white text-black'
                          }`}
                        >
                          Apple Pay
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('e-wallet')}
                          className={`rounded-lg border p-3 text-center transition ${
                            paymentMethod === 'e-wallet'
                              ? 'border-black bg-black text-white'
                              : 'border-black/20 bg-white text-black'
                          }`}
                        >
                          E-Wallet
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff3b26] py-4 text-xs font-semibold uppercase tracking-[.2em] text-white shadow-lg transition hover:bg-black"
                  >
                    <ShieldCheck size={16} /> Pay ${subtotal} USD Now
                  </button>
                </form>
              )}

              {/* STEP 2: PROCESSING SIMULATION */}
              {step === 'processing' && (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-black/20 border-t-[#ff3b26]" />
                  <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight">
                    Processing Transaction...
                  </h3>
                  <p className="mt-2 text-xs text-black/60 max-w-sm">
                    Simulating payment gateway authorization and pushing order payload into Redis BullMQ dispatch queue.
                  </p>
                </div>
              )}

              {/* STEP 3: SUCCESS & RECEIPT */}
              {step === 'success' && (
                <div className="flex flex-col items-center text-center">
                  <CheckCircle2 size={54} className="text-[#ff3b26]" />
                  <span className="mt-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
                    ORDER CONFIRMED & DISPATCHED
                  </span>
                  <h3 className="mt-1 text-3xl font-semibold tracking-tight uppercase">
                    Thank You, {name}!
                  </h3>

                  {/* Receipt Summary Box */}
                  <div className="mt-6 w-full rounded-xl border border-black/20 bg-white p-5 text-left text-xs">
                    <div className="flex justify-between border-b border-black/15 pb-3">
                      <span className="font-semibold text-black/60">Order Number</span>
                      <span className="font-bold text-black">{orderId}</span>
                    </div>

                    <div className="flex justify-between border-b border-black/15 py-3">
                      <span className="font-semibold text-black/60">Tracking Resi Number</span>
                      <span className="font-bold text-[#ff3b26]">{trackingNumber}</span>
                    </div>

                    <div className="flex justify-between border-b border-black/15 py-3">
                      <span className="font-semibold text-black/60">Shipping Destination</span>
                      <span className="font-medium text-black">{address}, {city}</span>
                    </div>

                    <div className="flex justify-between pt-3 font-semibold">
                      <span>Total Paid</span>
                      <span className="text-base font-bold">${subtotal} USD</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-black/60">
                    A confirmation transmission has been dispatched to <span className="font-semibold text-black">{email}</span>.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-semibold uppercase tracking-[.2em] text-white transition hover:bg-[#ff3b26]"
                  >
                    <Truck size={16} /> Return to Storefront
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
