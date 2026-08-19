import { FiTruck, FiShield } from "react-icons/fi";

const OrderSummaryCard = ({
  subtotal,
  shippingLabel = "FREE",
  shippingIsFree = true,
  tax,
  total,
  children,
  badgeText,
}) => {
  return (
    <aside className="space-y-4">
      <div className="sticky top-24 rounded border border-navy-900/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-navy-950">Order Summary</h2>

        {children}

        {!children && (
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
                <p className="mt-0.5 text-xs font-bold text-navy-950">${subtotal}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
          <div className="flex justify-between text-navy-900/70">
            <span>Subtotal</span>
            <span className="font-semibold text-navy-950">${subtotal}</span>
          </div>
          <div className="flex justify-between text-navy-900/70">
            <span>Shipping</span>
            <span
              className={`font-semibold ${
                shippingIsFree ? "text-emerald-600" : "text-navy-950"
              }`}
            >
              {shippingLabel}
            </span>
          </div>
          <div className="flex justify-between text-navy-900/70">
            <span>Estimated Tax</span>
            <span className="font-semibold text-navy-950">${tax}</span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
          <span className="text-base font-bold text-navy-950">Total</span>
          <span className="text-2xl font-extrabold text-brand-blue">${total}</span>
        </div>

        <div className="mt-6 space-y-2.5 rounded bg-navy-900/[0.03] p-4 text-xs text-navy-900/70">
          {badgeText ? (
            <div className="flex items-center gap-2">
              <FiShield className="shrink-0 text-emerald-600" size={16} />
              <span>{badgeText}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <FiTruck className="text-brand-blue" size={16} />
                <span>Free doorstep delivery on orders over $500</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-600" size={16} />
                <span>Insured & trackable shipment</span>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default OrderSummaryCard;