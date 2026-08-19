import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock } from "react-icons/fi";

const AddressForm = ({ formData, handleChange, handleSubmit, useNewAddress }) => {
  return (
    <form onSubmit={handleSubmit} className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <h2 className="border-b border-navy-900/10 pb-4 text-lg font-bold text-navy-950">
        {useNewAddress ? "Enter Shipping Address" : "Confirm or Update Address"}
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-navy-900/70">Country / Region</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-navy-900/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          >
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-navy-900/70">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Alex"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
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
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-navy-900/70">Company (Optional)</label>
          <input
            type="text"
            name="company"
            placeholder="Apex Ltd."
            value={formData.company}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-navy-900/70">Street Address</label>
          <input
            type="text"
            name="address"
            placeholder="123 Horizon View Drive"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-navy-900/70">Apartment, suite, unit, etc. (Optional)</label>
          <input
            type="text"
            name="apartment"
            placeholder="Suite 400"
            value={formData.apartment}
            onChange={handleChange}
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-navy-900/70">City</label>
          <input
            type="text"
            name="city"
            placeholder="Seattle"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-navy-900/70">State / Province</label>
          <input
            type="text"
            name="state"
            placeholder="WA"
            value={formData.state}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-navy-900/70">Postal / ZIP Code</label>
          <input
            type="text"
            name="postalCode"
            placeholder="98109"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-navy-900/70">Phone Number (For Delivery Updates)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 234-5678"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded border border-navy-900/15 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-navy-900/10 pt-6 sm:flex-row">
        <Link
          to="/cart"
          className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          <FiArrowLeft size={16} /> Return to Cart
        </Link>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded bg-brand-blue px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-black sm:w-auto"
        >
          {useNewAddress ? "Save Address & Continue to Payment" : "Continue to Payment"}{" "}
          <FiLock size={16} />
        </button>
      </div>
    </form>
  );
};

export default AddressForm;