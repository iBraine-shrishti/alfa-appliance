import { Link } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const CheckoutDeliveryPage = () => {
  return (
    <div >
      <CheckoutHeader actionLabel="Secure Checkout" />
      <main className="container-page py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-navy-900/10 bg-white p-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-navy-950">Select a Delivery address</h1>
          </div>
          <div className="space-y-3">
            {["United States", "First name (optional)", "Last name", "Company (optional)", "Address", "Apartment, suite, etc. (optional)", "City", "Postal code", "Phone"].map((placeholder, index) => (
              <input key={placeholder} placeholder={placeholder} className={`w-full rounded-xl border border-navy-900/15 px-4 py-3 ${index === 1 || index === 2 || index === 6 || index === 7 ? "sm:w-[calc(50%-0.5rem)]" : ""}`} />
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Link to="/cart" className="text-brand-blue">Return to Product</Link>
            <Link to="/checkout/payment" className="rounded bg-brand-blue px-5 py-3 font-semibold text-white">Add This Address</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutDeliveryPage;
