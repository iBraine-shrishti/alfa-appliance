import { useState } from "react";
import { Link } from "react-router-dom";

const paymentIcons = ["Amex", "Visa", "Maestro", "Mastercard", "PayPal"];

const CartOrderSummary = ({ itemCount, subtotal, totalSavings, flexpay }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoOpen, setPromoOpen] = useState(false);

  return (
    <aside className="rounded border border-navy-900/10 bg-white p-5">
      <div className="flex items-center gap-6 border-b border-navy-900/10 pb-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="h-4 w-4 accent-navy-950"
          />
          Card / PayPal
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={paymentMethod === "flexpay"}
            onChange={() => setPaymentMethod("flexpay")}
            className="h-4 w-4 accent-navy-950"
          />
          Spread the cost
        </label>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-navy-950">Order summary</h2>
      <div className="mt-3 flex justify-between text-sm text-navy-900/70">
        <span>{itemCount} items</span>
        <span className="font-semibold text-navy-950">£{subtotal.toFixed(2)}</span>
      </div>

      <button
        type="button"
        onClick={() => setPromoOpen((open) => !open)}
        className="mt-3 flex w-full items-center justify-between border-t border-navy-900/10 pt-3 text-sm font-semibold text-brand-blue underline"
      >
        Add a promo code
        <span aria-hidden>{promoOpen ? "▾" : "›"}</span>
      </button>
      {promoOpen && (
        <input
          type="text"
          placeholder="Enter code"
          className="mt-2 w-full rounded border border-navy-900/15 px-3 py-2 text-sm"
        />
      )}

      <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
        <span className="text-lg font-semibold text-navy-950">Total</span>
        <div className="text-right">
          <span className="text-2xl font-semibold text-navy-950">£{subtotal.toFixed(2)}</span>
          {totalSavings > 0 && (
            <p className="text-sm font-semibold text-brand-blue">Total savings: £{totalSavings.toFixed(2)}</p>
          )}
        </div>
      </div>

      <div className="mt-4 rounded border border-navy-900/10 bg-navy-900/[0.03] p-4 text-sm">
        <p className="font-semibold text-navy-950">Spread the cost with Alfa flexpay</p>
        <button type="button" className="text-xs font-semibold text-brand-blue underline">
          Learn more
        </button>

        <p className="mt-3 font-medium text-navy-950">Make monthly payments</p>
        <p className="text-navy-900/70">
          From £{flexpay.monthlyAmount.toFixed(2)} per month for {flexpay.months} months*
        </p>

        <p className="mt-3 font-medium text-navy-950">Or buy now, pay later</p>
        <p className="text-navy-900/70">
          Pay as much or as little as you like for {flexpay.buyNowMonths} months. Settle in full by{" "}
          {flexpay.settleByLabel} & pay no interest
        </p>

        <button type="button" className="mt-3 text-sm font-semibold text-brand-blue underline">
          View all flexpay options
        </button>
      </div>

      <Link
        to="/checkout/delivery"
        className="mt-5 block rounded-full bg-navy-950 px-4 py-3.5 text-center font-semibold text-white"
      >
        Checkout
      </Link>

      <p className="mt-4 text-[11px] leading-5 text-navy-900/50">
        *Illustrative example: Credit amount £{subtotal.toFixed(2)}. Pay {flexpay.months} monthly payments of £
        {flexpay.monthlyAmount.toFixed(2)}. The interest rate for this purchase is {flexpay.apr}%. Representative
        example: Rate of interest {flexpay.apr}% (variable). {flexpay.apr}% APR representative (variable). Assumed
        Credit Limit £{flexpay.creditLimit}.
      </p>

      <p className="mt-4 text-center text-xs text-navy-900/45">Pay securely with</p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {paymentIcons.map((icon) => (
          <span key={icon} className="rounded border border-navy-900/10 px-2 py-1 text-[10px] font-semibold text-navy-900/60">
            {icon}
          </span>
        ))}
      </div>

      <Link to="/" className="mt-4 block text-center text-sm font-semibold text-brand-blue underline">
        Continue shopping
      </Link>
    </aside>
  );
};

export default CartOrderSummary;