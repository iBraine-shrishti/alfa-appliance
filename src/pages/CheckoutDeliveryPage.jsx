// import { Link } from "react-router-dom";
// import CheckoutHeader from "../components/checkout/CheckoutHeader";

// const CheckoutDeliveryPage = () => {
//   return (
//     <div >
//       <CheckoutHeader actionLabel="Secure Checkout" />
//       <main className="container-page py-10">
//         <div className="mx-auto max-w-4xl rounded-3xl border border-navy-900/10 bg-white p-6">
//           <div className="mb-8 text-center">
//             <h1 className="text-3xl font-semibold text-navy-950">Select a Delivery address</h1>
//           </div>
//           <div className="space-y-3">
//             {["United States", "First name (optional)", "Last name", "Company (optional)", "Address", "Apartment, suite, etc. (optional)", "City", "Postal code", "Phone"].map((placeholder, index) => (
//               <input key={placeholder} placeholder={placeholder} className={`w-full rounded-xl border border-navy-900/15 px-4 py-3 ${index === 1 || index === 2 || index === 6 || index === 7 ? "sm:w-[calc(50%-0.5rem)]" : ""}`} />
//             ))}
//           </div>
//           <div className="mt-6 flex justify-between">
//             <Link to="/cart" className="text-brand-blue">Return to Product</Link>
//             <Link to="/checkout/payment" className="rounded bg-brand-blue px-5 py-3 font-semibold text-white">Add This Address</Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CheckoutDeliveryPage;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiMapPin, 
  FiTruck, 
  FiCheck, 
  FiShield, 
  FiArrowLeft, 
  FiLock,
  FiPlus
} from "react-icons/fi";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutDeliveryPage = () => {
  const navigate = useNavigate();
  const [selectedSavedAddress, setSelectedSavedAddress] = useState("home");
  const [useNewAddress, setUseNewAddress] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    saveInfo: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout/payment");
  };

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Secure Checkout" />

      <main className="container-page py-8 lg:py-12">
        {/* Step Progress Bar */}
        <div className="mb-8 flex items-center justify-center gap-3 text-sm font-semibold">
          <span className="flex items-center gap-1 text-brand-blue">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs text-white">1</span>
            Delivery
          </span>
          <span className="h-px w-8 bg-navy-900/15" />
          <span className="flex items-center gap-1 text-navy-900/40">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/10 text-xs text-navy-900/60">2</span>
            Payment
          </span>
          <span className="h-px w-8 bg-navy-900/15" />
          <span className="flex items-center gap-1 text-navy-900/40">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/10 text-xs text-navy-900/60">3</span>
            Review
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Delivery Section */}
          <section className="space-y-6">
            {/* Saved Addresses (Quick Select) */}
            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <FiMapPin size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-950">Saved Delivery Addresses</h2>
                    <p className="text-xs text-navy-900/50">Select an address from your account</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {/* Saved Address 1 */}
                <div
                  onClick={() => {
                    setSelectedSavedAddress("home");
                    setUseNewAddress(false);
                  }}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    selectedSavedAddress === "home" && !useNewAddress
                      ? "border-brand-blue bg-brand-blue/[0.03] shadow-sm"
                      : "border-navy-900/10 bg-white hover:border-navy-900/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900/50">Home</span>
                    {selectedSavedAddress === "home" && !useNewAddress && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white">
                        <FiCheck size={12} />
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-bold text-navy-950">Alex Carter</p>
                  <p className="mt-1 text-xs text-navy-900/70 leading-relaxed">
                    123 Horizon View Drive, Suite 400<br />
                    Seattle, WA 98109
                  </p>
                </div>

                {/* Saved Address 2 / New Address Toggle */}
                <div
                  onClick={() => {
                    setUseNewAddress(true);
                    setSelectedSavedAddress("");
                  }}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-all ${
                    useNewAddress
                      ? "border-brand-blue bg-brand-blue/[0.03]"
                      : "border-navy-900/20 bg-navy-900/[0.01] hover:border-navy-900/40"
                  }`}
                >
                  <FiPlus className="text-brand-blue" size={20} />
                  <span className="mt-1 text-sm font-bold text-navy-950">Add New Address</span>
                  <span className="text-[11px] text-navy-900/50">Enter custom shipping details</span>
                </div>
              </div>
            </div>

            {/* Address Form Section */}
            <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <h2 className="border-b border-navy-900/10 pb-4 text-lg font-bold text-navy-950">
                {useNewAddress ? "Enter Shipping Address" : "Confirm or Update Address"}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Country */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-navy-900/70">Country / Region</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>

                {/* First & Last Name */}
                <div>
                  <label className="text-xs font-bold text-navy-900/70">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Alex"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-navy-900/70">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Carter"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* Company */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-navy-900/70">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Apex Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* Street Address */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-navy-900/70">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Horizon View Drive"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* Apartment / Suite */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-navy-900/70">Apartment, suite, unit, etc. (Optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    placeholder="Suite 400"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-xs font-bold text-navy-900/70">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Seattle"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="text-xs font-bold text-navy-900/70">Postal / ZIP Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="98109"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-navy-900/70">Phone Number (For Delivery Updates)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-navy-900/10 pt-6 sm:flex-row">
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                >
                  <FiArrowLeft size={16} /> Return to Cart
                </Link>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-brand-blue/90 sm:w-auto"
                >
                  Continue to Payment <FiLock size={16} />
                </button>
              </div>
            </form>
          </section>

          {/* Right Sidebar: Cart & Shipping Summary */}
          <aside className="space-y-4">
            <div className="sticky top-24 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">Order Summary</h2>

              {/* Mini Item Preview */}
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
                    <p className="mt-0.5 text-xs font-bold text-navy-950">$3,499.00</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
                <div className="flex justify-between text-navy-900/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-navy-950">$3,499.00</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between text-navy-900/70">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-navy-950">$349.90</span>
                </div>
              </div>

              {/* Total */}
              <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
                <span className="text-base font-bold text-navy-950">Total</span>
                <span className="text-2xl font-extrabold text-brand-blue">$3,848.90</span>
              </div>

              {/* Delivery Feature Perks */}
              <div className="mt-6 space-y-2.5 rounded-xl bg-navy-900/[0.03] p-4 text-xs text-navy-900/70">
                <div className="flex items-center gap-2">
                  <FiTruck className="text-brand-blue" size={16} />
                  <span>Free doorstep delivery on orders over $500</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="text-emerald-600" size={16} />
                  <span>Insured & trackable shipment</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutDeliveryPage;