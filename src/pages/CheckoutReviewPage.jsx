// import { Link } from "react-router-dom";
// import CheckoutHeader from "../components/checkout/CheckoutHeader";

// const CheckoutReviewPage = () => {
//   return (
//     <div>
//       <CheckoutHeader actionLabel="Secure Checkout" />
//       <main className="container-page py-10">
//         <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
//           <section>
//             <h1 className="mb-2 text-3xl font-semibold text-navy-950">Review your order</h1>
//             <p className="mb-6 text-navy-900/65">Please confirm your shipping details and items before placing the order.</p>
//             <div className="space-y-5 rounded-3xl border border-navy-900/10 bg-white p-6">
//               <div className="flex items-center justify-between border-b border-navy-900/10 pb-3">
//                 <h2 className="text-2xl font-semibold text-navy-950">Shipping Information</h2>
//                 <span className="text-brand-blue">Edit</span>
//               </div>
//               <div className="grid gap-8 sm:grid-cols-2">
//                 <div>
//                   <h3 className="font-semibold text-navy-950">Delivery Address</h3>
//                   <p className="mt-2 text-sm text-navy-900/65">Alex Carter<br />123 Horizon View Drive<br />Seattle, WA 98109</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-navy-950">Expected Delivery</h3>
//                   <p className="mt-2 text-brand-blue">Thursday, October 26</p>
//                 </div>
//               </div>
//               <div className="rounded border border-navy-900/10 p-4">
//                 <h3 className="text-xl font-semibold text-navy-950">Order Items</h3>
//                 <div className="mt-4 flex items-center gap-4">
//                   <div className="h-36 w-36 rounded " />
//                   <div>
//                     <p className="text-2xl font-semibold text-navy-950">ALFA Precision French Door Refrigerator</p>
//                     <p className="mt-2 text-navy-900/65">A high-end refrigerator for modern kitchens.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <aside className="rounded-3xl border border-navy-900/10 bg-white p-6">
//             <h2 className="text-2xl font-semibold text-navy-950">Order Summary</h2>
//             <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4">
//               <div className="flex justify-between"><span>Items (1)</span><span>$3,499.00</span></div>
//               <div className="flex justify-between"><span>Shipping & Handling</span><span>$0.00</span></div>
//               <div className="flex justify-between"><span>Estimated Tax</span><span>$349.90</span></div>
//             </div>
//             <div className="mt-4 flex justify-between border-t border-navy-900/10 pt-4 text-3xl font-semibold">
//               <span>Order Total</span>
//               <span className="text-brand-blue">$3,848.90</span>
//             </div>
//             <Link to="/order-success" className="mt-6 block rounded bg-brand-blue px-5 py-3 text-center font-semibold text-white">
//               Place Your Order
//             </Link>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CheckoutReviewPage;


import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiMapPin, 
  FiTruck, 
  FiCreditCard, 
  FiShield, 
  FiEdit3, 
  FiCheckCircle, 
  FiTag, 
  FiLock 
} from "react-icons/fi";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutReviewPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Secure Checkout" />

      <main className="container-page py-8 lg:py-12">
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
         
            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <FiMapPin size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-950">Shipping Address</h2>
                    <p className="text-xs text-navy-900/50">Delivering to Alex Carter</p>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                >
                  <FiEdit3 size={16} /> Edit
                </Link>
              </div>

              <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-navy-900/[0.02] p-4">
                  <p className="font-bold text-navy-950">Alex Carter</p>
                  <p className="mt-1 leading-relaxed text-navy-900/70">
                    123 Horizon View Drive<br />
                    Suite 400<br />
                    Seattle, WA 98109
                  </p>
                  <p className="mt-2 text-xs font-semibold text-navy-900/50">+1 (555) 234-5678</p>
                </div>

                <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/[0.03] p-4">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <FiTruck size={18} />
                    <span className="font-bold">Standard Delivery</span>
                  </div>
                  <p className="mt-2 text-xs text-navy-900/70">Estimated Delivery Date:</p>
                  <p className="mt-1 text-base font-bold text-navy-950">Thursday, Oct 26</p>
                  <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                    Free Shipping
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <FiCreditCard size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-950">Payment Method</h2>
                    <p className="text-xs text-navy-900/50">Encrypted and secure</p>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                >
                  <FiEdit3 size={16} /> Edit
                </Link>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-navy-900/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-14 items-center justify-center rounded-md border border-navy-900/10 bg-white font-bold text-navy-950">
                    VISA
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-950">Visa ending in 4242</p>
                    <p className="text-xs text-navy-900/50">Expires 12/28</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <FiCheckCircle size={14} /> Verified
                </span>
              </div>
            </div>

          
            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <h2 className="border-b border-navy-900/10 pb-4 text-lg font-bold text-navy-950">
                Order Items (1)
              </h2>

              <div className="mt-4 space-y-4">
                <div className="flex flex-col gap-4 rounded-xl border border-navy-900/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                 
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-navy-900/5 p-2 border border-navy-900/10">
                      <span className="text-xs text-navy-900/40">Product Image</span>
                    </div>

                    <div>
                      <span className="rounded bg-navy-900/5 px-2 py-0.5 text-[10px] font-bold tracking-wider text-navy-900/60 uppercase">
                        Refrigeration
                      </span>
                      <h3 className="mt-1 text-base font-bold text-navy-950">
                        ALFA Precision French Door Refrigerator
                      </h3>
                      <p className="mt-1 text-xs text-navy-900/60">
                        Model: ALFA-RF-9051X | Qty: 1
                      </p>
                      <p className="mt-2 text-xs text-brand-blue font-semibold">
                        In Stock • Ready to ship
                      </p>
                    </div>
                  </div>

                  <div className="text-right sm:self-center">
                    <p className="text-lg font-bold text-navy-950">$3,499.00</p>
                    <p className="text-xs text-navy-900/40 line-through">$3,899.00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

      
          <aside className="space-y-4">
            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-navy-950">Order Summary</h2>

            
              <div className="mt-4 border-t border-navy-900/10 pt-4">
                <label className="text-xs font-bold text-navy-900/70">Promo / Gift Code</label>
                <div className="mt-1.5 flex gap-2">
                  <div className="relative flex-1">
                    <FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-900/40" size={16} />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full rounded-xl border border-navy-900/15 py-2.5 pl-9 pr-3 text-sm focus:border-brand-blue focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPromoApplied(true)}
                    className="rounded-xl bg-navy-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
                  >
                    Apply
                  </button>
                </div>
                {isPromoApplied && (
                  <p className="mt-1 text-xs text-emerald-600 font-medium">
                    Code applied successfully!
                  </p>
                )}
              </div>

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
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3.5 font-bold text-white shadow-md transition-all hover:bg-brand-blue/90 hover:shadow-lg"
              >
                <FiLock size={18} /> Place Your Order
              </Link>

       
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-navy-900/[0.03] p-3 text-xs text-navy-900/60">
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