import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiShield } from "react-icons/fi";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ReviewShipping from "../components/review/ReviewShipping";
import ReviewPayment from "../components/review/ReviewPayment";
import ReviewOrderItems from "../components/review/ReviewOrderItems";
import PromoCodeInput from "../components/review/PromoCodeInput";

const CheckoutReviewPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Secure Checkout" />

      <main className="container-page py-8 lg:py-12">
        <CheckoutSteps currentStep={3} />

        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Review Your Order
          </h1>
          <p className="mt-1 text-sm text-navy-900/60 sm:text-base">
            Please confirm your shipping details, payment method, and items before placing the order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <section className="space-y-6">
            <ReviewShipping />
            <ReviewPayment />
            <ReviewOrderItems />
          </section>

          <aside className="space-y-4">
            <div className="sticky top-24 rounded border border-navy-900/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">Order Summary</h2>

              <PromoCodeInput
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                isPromoApplied={isPromoApplied}
                setIsPromoApplied={setIsPromoApplied}
              />

              <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
                <div className="flex justify-between text-navy-900/70">
                  <span>Subtotal (1 item)</span>
                  <span className="font-semibold text-navy-950">$3,499.00</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>Standard Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-navy-950">$349.90</span>
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
                <div>
                  <span className="text-base font-bold text-navy-950">Total</span>
                  <p className="text-[11px] text-navy-900/50">Includes taxes & duties</p>
                </div>
                <span className="text-2xl font-extrabold text-brand-blue">$3,848.90</span>
              </div>

              <Link
                to="/order-success"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-brand-blue py-3.5 font-bold text-white shadow-md transition-all hover:bg-black hover:shadow-lg"
              >
                <FiLock size={18} /> Place Your Order
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 rounded bg-navy-900/[0.03] p-3 text-xs text-navy-900/60">
                <FiShield size={18} className="shrink-0 text-emerald-600" />
                <span>30-Day Money-Back Guarantee & 256-bit Encryption</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutReviewPage;