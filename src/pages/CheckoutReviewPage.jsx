import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiShield } from "react-icons/fi";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ReviewShipping from "../components/review/ReviewShipping";
import ReviewPayment from "../components/review/ReviewPayment";
import ReviewOrderItems from "../components/review/ReviewOrderItems";
import PromoCodeInput from "../components/review/PromoCodeInput";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";

const CheckoutReviewPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const handlePlaceOrder = () => {
    window.localStorage.setItem("alfa-last-order", JSON.stringify({
      orderNumber: `ALFA-${Date.now().toString().slice(-8)}`,
      email: window.localStorage.getItem("alfa-customer-email") || "alex.morgan@example.com",
      method: "delivery",
      createdAt: new Date().toISOString(),
    }));
  };

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

          <CheckoutOrderSummary>
              <PromoCodeInput
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                isPromoApplied={isPromoApplied}
                setIsPromoApplied={setIsPromoApplied}
              />

              <Link
                to="/order-success"
                onClick={handlePlaceOrder}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-brand-blue py-3.5 font-bold text-white shadow-md transition-all hover:bg-black hover:shadow-lg"
              >
                <FiLock size={18} /> Place Your Order
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 rounded bg-navy-900/[0.03] p-3 text-xs text-navy-900/60">
                <FiShield size={18} className="shrink-0 text-emerald-600" />
                <span>30-Day Money-Back Guarantee & 256-bit Encryption</span>
              </div>
          </CheckoutOrderSummary>
        </div>
      </main>
    </div>
  );
};

export default CheckoutReviewPage;
