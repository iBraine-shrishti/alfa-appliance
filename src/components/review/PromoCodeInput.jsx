import { FiTag } from "react-icons/fi";

const PromoCodeInput = ({ promoCode, setPromoCode, isPromoApplied, setIsPromoApplied }) => {
  return (
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
            className="w-full rounded border border-navy-900/15 py-2.5 pl-9 pr-3 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={() => setIsPromoApplied(true)}
          className="rounded bg-navy-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
        >
          Apply
        </button>
      </div>
      {isPromoApplied && (
        <p className="mt-1 text-xs font-medium text-emerald-600">
          Code applied successfully!
        </p>
      )}
    </div>
  );
};

export default PromoCodeInput;