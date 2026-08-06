import { Link } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutPaymentPage = () => {
  return (
    <div className="bg-[#f5f5fb]">
      <CheckoutHeader actionLabel="Cancel Checkout" />
      <main className="container-page py-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl border border-navy-900/10 bg-white p-6">
            <h1 className="text-3xl font-semibold text-navy-950">Select Payment Method</h1>
            <div className="mt-6 space-y-4">
              {["Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((method, index) => (
                <label key={method} className={`block rounded-2xl border p-5 ${index === 0 ? "border-brand-blue bg-brand-blue/5" : "border-navy-900/10"}`}>
                  <input type="radio" name="payment" defaultChecked={index === 0} className="mr-3" />
                  {method}
                </label>
              ))}
            </div>
          </section>
          <aside className="rounded-3xl border border-navy-900/10 bg-white p-6">
            <h2 className="text-2xl font-semibold text-navy-950">Order Summary</h2>
            <div className="mt-4 h-24 rounded-2xl bg-[#f5f5fb]" />
            <div className="mt-6 space-y-3 border-t border-navy-900/10 pt-4">
              <div className="flex justify-between"><span>Subtotal</span><span>$2,499.00</span></div>
              <div className="flex justify-between"><span>White Glove Delivery</span><span>$150.00</span></div>
              <div className="flex justify-between"><span>Estimated Tax</span><span>$211.92</span></div>
            </div>
            <div className="mt-4 flex justify-between border-t border-navy-900/10 pt-4 text-3xl font-semibold">
              <span>Total</span>
              <span>$2,860.92</span>
            </div>
            <Link to="/checkout/review" className="mt-6 block rounded-2xl bg-brand-blue px-5 py-3 text-center font-semibold text-white">
              Continue to Checkout
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPaymentPage;
