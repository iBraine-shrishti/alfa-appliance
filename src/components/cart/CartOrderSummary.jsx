import { useState } from "react";
import { Link } from "react-router-dom";

const paymentIcons = ["Amex", "Visa", "Maestro", "Mastercard", "PayPal"];

const CartOrderSummary = ({ itemCount, subtotal, totalSavings,flexpay,  items = [] }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const promoOpen = false;
  const setPromoOpen = () => {};

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
        {/* <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={paymentMethod === "flexpay"}
            onChange={() => setPaymentMethod("flexpay")}
            className="h-4 w-4 accent-navy-950"
          />
          Spread the cost
        </label> */}
      </div>

      <h2 className="mt-4 text-xl font-semibold text-navy-950">Order summary</h2>
      <div className="mt-3 flex justify-between text-sm text-navy-900/70">
        <span>{itemCount} items</span>
        <span className="font-semibold text-navy-950">£{subtotal.toFixed(2)}</span>
      </div>

      <div className="mt-4 space-y-3 border-y border-navy-900/10 py-4">
        {items.map((item, index) => {
          const selection = item.product.essentialServicesSelection ?? {};
          const services = selection.bundle ? 49 : (item.product.price >= 399 ? 0 : 14.99) + (selection.installation ? 29.99 : 0) + (selection.recycling ? 24.99 : 0);
          const itemSubtotal = (item.product.price + services) * item.qty;
          const serviceLabels = selection.bundle
            ? ["Alfa Bundle — Delivery, Installation & Recycling"]
            : [
                `Delivery — ${item.product.price >= 399 ? "FREE" : "£14.99"}`,
                ...(selection.installation ? ["Installation — £29.99"] : []),
                ...(selection.recycling ? ["Disposal of old appliance — £24.99"] : []),
              ];
          return (
            <div key={item.product.slug} className="rounded bg-navy-900/[0.03] p-3 text-sm">
              <div className="flex justify-between gap-3 font-semibold text-navy-950"><span>Item {index + 1} · {item.product.name}</span><span>£{itemSubtotal.toFixed(2)}</span></div>
              <p className="mt-1 text-xs text-navy-900/60">Product £{(item.product.price * item.qty).toFixed(2)} + essential services £{(services * item.qty).toFixed(2)}</p>
              <div className="mt-1 space-y-0.5 text-xs text-navy-900/60">
                {serviceLabels.map((label) => <p key={label}>{label}</p>)}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setPromoOpen((open) => !open)}
        className="hidden"
      >
        Add a promo code
        <span aria-hidden>{promoOpen ? "▾" : "›"}</span>
      </button>
      {promoOpen && (
        <input
          type="text"
          placeholder="Enter code"
          className="hidden"
        />
      )}

      <div className="mt-5 border-t border-navy-900/10 pt-4">
        <p className="mb-2 text-sm font-bold text-navy-950">Discount code</p>
        <div className="flex overflow-hidden rounded border-2 border-navy-900/15 bg-white shadow-sm focus-within:border-brand-blue">
          <input type="text" value={promoCode} onChange={(event) => setPromoCode(event.target.value)} placeholder="Enter discount code" className="min-w-0 flex-1 px-4 py-3 text-sm outline-none" aria-label="Enter discount code" />
          <button type="button" onClick={() => setAppliedCode(promoCode.trim())} className="bg-brand-blue px-5 py-3 text-sm font-bold text-white hover:bg-navy-950">Apply</button>
        </div>
        {appliedCode && <p className="mt-2 text-xs font-semibold text-emerald-600">Code {appliedCode} applied.</p>}
      </div>

      <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
        <span className="text-lg font-semibold text-navy-950">Total</span>
        <div className="text-right">
          <span className="text-2xl font-semibold text-navy-950">£{subtotal.toFixed(2)}</span>
          {totalSavings > 0 && (
            <p className="text-sm font-semibold text-brand-blue">Total savings: £{totalSavings.toFixed(2)}</p>
          )}
        </div>
      </div>

      <Link
        to="/checkout/delivery"
        className="mt-5 block rounded bg-brand-blue hover:bg-navy-950 px-4 py-3.5 text-center font-semibold text-white"
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
