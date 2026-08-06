import { Link } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutReviewPage = () => {
  return (
    <div className="bg-[#f5f5fb]">
      <CheckoutHeader actionLabel="Secure Checkout" />
      <main className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section>
            <h1 className="mb-2 text-3xl font-semibold text-navy-950">Review your order</h1>
            <p className="mb-6 text-navy-900/65">Please confirm your shipping details and items before placing the order.</p>
            <div className="space-y-5 rounded-3xl border border-navy-900/10 bg-white p-6">
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-3">
                <h2 className="text-2xl font-semibold text-navy-950">Shipping Information</h2>
                <span className="text-brand-blue">Edit</span>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-navy-950">Delivery Address</h3>
                  <p className="mt-2 text-sm text-navy-900/65">Alex Carter<br />123 Horizon View Drive<br />Seattle, WA 98109</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-950">Expected Delivery</h3>
                  <p className="mt-2 text-brand-blue">Thursday, October 26</p>
                </div>
              </div>
              <div className="rounded-2xl border border-navy-900/10 p-4">
                <h3 className="text-xl font-semibold text-navy-950">Order Items</h3>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-36 w-36 rounded-2xl bg-[#f5f5fb]" />
                  <div>
                    <p className="text-2xl font-semibold text-navy-950">ALFA Precision French Door Refrigerator</p>
                    <p className="mt-2 text-navy-900/65">A high-end refrigerator for modern kitchens.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="rounded-3xl border border-navy-900/10 bg-white p-6">
            <h2 className="text-2xl font-semibold text-navy-950">Order Summary</h2>
            <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4">
              <div className="flex justify-between"><span>Items (1)</span><span>$3,499.00</span></div>
              <div className="flex justify-between"><span>Shipping & Handling</span><span>$0.00</span></div>
              <div className="flex justify-between"><span>Estimated Tax</span><span>$349.90</span></div>
            </div>
            <div className="mt-4 flex justify-between border-t border-navy-900/10 pt-4 text-3xl font-semibold">
              <span>Order Total</span>
              <span className="text-brand-blue">$3,848.90</span>
            </div>
            <Link to="/order-success" className="mt-6 block rounded-2xl bg-brand-blue px-5 py-3 text-center font-semibold text-white">
              Place Your Order
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutReviewPage;
