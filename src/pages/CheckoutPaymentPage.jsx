// import { Link } from "react-router-dom";
// import CheckoutHeader from "../components/checkout/CheckoutHeader";

// const CheckoutPaymentPage = () => {
//   return (
//     <div >
//       <CheckoutHeader actionLabel="Cancel Checkout" />
//       <main className="container-page py-10">
//         <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">
//           <section className="rounded-3xl border border-navy-900/10 bg-white p-6">
//             <h1 className="text-3xl font-semibold text-navy-950">Select Payment Method</h1>
//             <div className="mt-6 space-y-4">
//               {["Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((method, index) => (
//                 <label key={method} className={`block rounded border p-5 ${index === 0 ? "border-brand-blue bg-brand-blue/5" : "border-navy-900/10"}`}>
//                   <input type="radio" name="payment" defaultChecked={index === 0} className="mr-3" />
//                   {method}
//                 </label>
//               ))}
//             </div>
//           </section>
//           <aside className="rounded-3xl border border-navy-900/10 bg-white p-6">
//             <h2 className="text-2xl font-semibold text-navy-950">Order Summary</h2>
//             <div className="mt-4 h-24 rounded " />
//             <div className="mt-6 space-y-3 border-t border-navy-900/10 pt-4">
//               <div className="flex justify-between"><span>Subtotal</span><span>$2,499.00</span></div>
//               <div className="flex justify-between"><span>White Glove Delivery</span><span>$150.00</span></div>
//               <div className="flex justify-between"><span>Estimated Tax</span><span>$211.92</span></div>
//             </div>
//             <div className="mt-4 flex justify-between border-t border-navy-900/10 pt-4 text-3xl font-semibold">
//               <span>Total</span>
//               <span>$2,860.92</span>
//             </div>
//             <Link to="/checkout/review" className="mt-6 block rounded bg-brand-blue px-5 py-3 text-center font-semibold text-white">
//               Continue to Checkout
//             </Link>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CheckoutPaymentPage;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiCreditCard, 
  FiDollarSign, 
  FiGlobe, 
  FiShield, 
  FiLock, 
  FiArrowLeft, 
  FiCheckCircle, 
  FiCalendar, 
  FiUser 
} from "react-icons/fi";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("card");

  // Form State
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout/review");
  };

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Cancel Checkout" />

      <main className="container-page py-8 lg:py-12">
        {/* Step Progress Bar */}
        <div className="mb-8 flex items-center justify-center gap-3 text-sm font-semibold">
          <span className="flex items-center gap-1 text-emerald-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
              <FiCheckCircle size={14} />
            </span>
            Delivery
          </span>
          <span className="h-px w-8 bg-navy-900/15" />
          <span className="flex items-center gap-1 text-brand-blue">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs text-white">2</span>
            Payment
          </span>
          <span className="h-px w-8 bg-navy-900/15" />
          <span className="flex items-center gap-1 text-navy-900/40">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/10 text-xs text-navy-900/60">3</span>
            Review
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Payment Selection Section */}
          <section className="space-y-6">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <div className="border-b border-navy-900/10 pb-4">
                <h1 className="text-xl font-bold text-navy-950">Select Payment Method</h1>
                <p className="mt-1 text-xs text-navy-900/50">All transactions are secure and encrypted</p>
              </div>

              <div className="mt-6 space-y-4">
                {/* 1. Credit / Debit Card Option */}
                <div
                  onClick={() => setSelectedMethod("card")}
                  className={`cursor-pointer rounded-xl border transition-all ${
                    selectedMethod === "card"
                      ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
                      : "border-navy-900/10 bg-white hover:border-navy-900/20"
                  }`}
                >
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedMethod === "card"}
                        onChange={() => setSelectedMethod("card")}
                        className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <div className="flex items-center gap-2">
                        <FiCreditCard className="text-brand-blue" size={18} />
                        <span className="text-sm font-bold text-navy-950">Credit / Debit Card</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5 text-xs font-bold text-navy-900/50">
                      <span className="rounded border border-navy-900/10 bg-white px-1.5 py-0.5">VISA</span>
                      <span className="rounded border border-navy-900/10 bg-white px-1.5 py-0.5">MC</span>
                      <span className="rounded border border-navy-900/10 bg-white px-1.5 py-0.5">AMEX</span>
                    </div>
                  </label>

                  {/* Dynamic Card Input Fields */}
                  {selectedMethod === "card" && (
                    <div className="border-t border-navy-900/10 bg-navy-900/[0.01] p-5 space-y-4 rounded-b-xl">
                      <div>
                        <label className="text-xs font-bold text-navy-900/70">Card Number</label>
                        <div className="relative mt-1.5">
                          <FiCreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/40" size={16} />
                          <input
                            type="text"
                            name="number"
                            placeholder="4532 •••• •••• 4242"
                            value={cardDetails.number}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-xl border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-navy-900/70">Name on Card</label>
                        <div className="relative mt-1.5">
                          <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/40" size={16} />
                          <input
                            type="text"
                            name="name"
                            placeholder="Alex Carter"
                            value={cardDetails.name}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-xl border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-navy-900/70">Expiry Date</label>
                          <div className="relative mt-1.5">
                            <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/40" size={16} />
                            <input
                              type="text"
                              name="expiry"
                              placeholder="MM/YY"
                              value={cardDetails.expiry}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-xl border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-navy-900/70">CVV / CVC</label>
                          <div className="relative mt-1.5">
                            <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/40" size={16} />
                            <input
                              type="password"
                              name="cvv"
                              placeholder="123"
                              maxLength={4}
                              value={cardDetails.cvv}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-xl border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Net Banking Option */}
                <div
                  onClick={() => setSelectedMethod("banking")}
                  className={`cursor-pointer rounded-xl border transition-all ${
                    selectedMethod === "banking"
                      ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
                      : "border-navy-900/10 bg-white hover:border-navy-900/20"
                  }`}
                >
                  <label className="flex items-center gap-3 p-4 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedMethod === "banking"}
                      onChange={() => setSelectedMethod("banking")}
                      className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <div className="flex items-center gap-2">
                      <FiGlobe className="text-brand-blue" size={18} />
                      <span className="text-sm font-bold text-navy-950">Net Banking / Direct Transfer</span>
                    </div>
                  </label>
                </div>

                {/* 3. Cash on Delivery Option */}
                <div
                  onClick={() => setSelectedMethod("cod")}
                  className={`cursor-pointer rounded-xl border transition-all ${
                    selectedMethod === "cod"
                      ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
                      : "border-navy-900/10 bg-white hover:border-navy-900/20"
                  }`}
                >
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedMethod === "cod"}
                        onChange={() => setSelectedMethod("cod")}
                        className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="text-brand-blue" size={18} />
                        <span className="text-sm font-bold text-navy-950">Cash / Pay on Delivery</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Available
                    </span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-navy-900/10 pt-6 sm:flex-row">
                <Link
                  to="/checkout"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                >
                  <FiArrowLeft size={16} /> Back to Delivery
                </Link>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-brand-blue/90 sm:w-auto"
                >
                  Continue to Order Review <FiLock size={16} />
                </button>
              </div>
            </form>
          </section>

          {/* Right Sidebar: Order Summary */}
          <aside className="space-y-4">
            <div className="sticky top-24 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">Order Summary</h2>

              {/* Item Preview */}
              <div className="mt-4 border-t border-navy-900/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-navy-900/10 bg-navy-900/5 text-[10px] text-navy-900/40">
                    Product
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-navy-950">
                      ALFA Precision French Door Refrigerator
                    </h3>
                    <p className="mt-1 text-xs text-navy-900/50">Qty: 1</p>
                    <p className="mt-0.5 text-xs font-bold text-navy-950">$2,499.00</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
                <div className="flex justify-between text-navy-900/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-navy-950">$2,499.00</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>White Glove Delivery</span>
                  <span className="font-semibold text-navy-950">$150.00</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-navy-950">$211.92</span>
                </div>
              </div>

              {/* Total */}
              <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
                <span className="text-base font-bold text-navy-950">Total</span>
                <span className="text-2xl font-extrabold text-brand-blue">$2,860.92</span>
              </div>

              {/* Security Shield */}
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-navy-900/[0.03] p-3 text-xs text-navy-900/70">
                <FiShield className="text-emerald-600 shrink-0" size={16} />
                <span>256-bit SSL Secure Checkout</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPaymentPage;