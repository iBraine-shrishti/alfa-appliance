import { Link } from "react-router-dom";
import {
  FiCreditCard,
  FiGlobe,
  FiDollarSign,
  FiLock,
  FiArrowLeft,
  FiCalendar,
  FiUser,
} from "react-icons/fi";

const PaymentMethods = ({
  selectedMethod,
  setSelectedMethod,
  cardDetails,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <div className="border-b border-navy-900/10 pb-4">
        <h1 className="text-xl font-bold text-navy-950">Select Payment Method</h1>
        <p className="mt-1 text-xs text-navy-900/50">All transactions are secure and encrypted</p>
      </div>

      <div className="mt-6 space-y-4">
        <div
          onClick={() => setSelectedMethod("card")}
          className={`cursor-pointer rounded border transition-all ${
            selectedMethod === "card"
              ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
              : "border-navy-900/10 bg-white hover:border-navy-900/20"
          }`}
        >
          <label className="flex cursor-pointer items-center justify-between p-4">
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

          {selectedMethod === "card" && (
            <div className="space-y-4 rounded-b-xl border-t border-navy-900/10 bg-navy-900/[0.01] p-5">
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
                    className="w-full rounded border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
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
                    className="w-full rounded border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
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
                      className="w-full rounded border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
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
                      className="w-full rounded border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-blue focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          onClick={() => setSelectedMethod("banking")}
          className={`cursor-pointer rounded border transition-all ${
            selectedMethod === "banking"
              ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
              : "border-navy-900/10 bg-white hover:border-navy-900/20"
          }`}
        >
          <label className="flex cursor-pointer items-center gap-3 p-4">
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

        <div
          onClick={() => setSelectedMethod("cod")}
          className={`cursor-pointer rounded border transition-all ${
            selectedMethod === "cod"
              ? "border-brand-blue bg-brand-blue/[0.02] shadow-sm"
              : "border-navy-900/10 bg-white hover:border-navy-900/20"
          }`}
        >
          <label className="flex cursor-pointer items-center justify-between p-4">
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
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
              Available
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-navy-900/10 pt-6 sm:flex-row">
        <Link
          to="/checkout"
          className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          <FiArrowLeft size={16} /> Back to Delivery
        </Link>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded bg-brand-blue px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-black sm:w-auto"
        >
          Continue to Order Review <FiLock size={16} />
        </button>
      </div>
    </form>
  );
};

export default PaymentMethods;