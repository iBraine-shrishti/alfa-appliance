import { FiShoppingCart, FiTruck, FiShield } from "react-icons/fi";

const WishlistSummarySidebar = ({ selectedCount, subtotal, totalSavings }) => {
  return (
    <aside className="space-y-4">
      <div className="sticky top-24 rounded border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Wishlist Summary</h2>
        <p className="mt-0.5 text-xs text-slate-500">
          Based on {selectedCount} selected items
        </p>

        <div className="mt-4 space-y-3 border-t border-slate-100 pt-4 text-sm">
          <div className="flex justify-between text-slate-600">
            <span>Selected Subtotal</span>
            <span className="font-semibold text-slate-900">£{subtotal.toFixed(2)}</span>
          </div>

          {totalSavings > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span>Total Savings</span>
              <span className="font-bold">-£{totalSavings.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-slate-600">
            <span>Estimated Shipping</span>
            <span className="font-semibold text-emerald-600">FREE</span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between border-t border-slate-100 pt-4">
          <span className="text-base font-bold text-slate-900">Estimated Total</span>
          <span className="text-2xl font-extrabold text-amber-500">
            £{subtotal.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          disabled={selectedCount === 0}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded py-3.5 text-sm font-bold shadow-md transition-all ${
            selectedCount > 0
              ? "bg-brand-blue text-white hover:bg-black"
              : "cursor-not-allowed bg-slate-100 text-slate-400"
          }`}
        >
          <FiShoppingCart size={16} /> Move Selected to Cart
        </button>

        <div className="mt-6 space-y-2 rounded bg-slate-50 p-4 text-xs">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <FiTruck size={16} className="text-brand-blue" />
            <span>Free UK Delivery Qualified <span className="underline text-brand-blue"> *T&Cs</span></span>
          </div>
          <p className="text-slate-500">
            All items in your wishlist qualify for standard free home delivery.
          </p>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 rounded bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-700">
          <FiShield size={16} className="shrink-0" />
          <span>Prices locked for saved items for 14 days</span>
        </div>
      </div>
    </aside>
  );
};

export default WishlistSummarySidebar;