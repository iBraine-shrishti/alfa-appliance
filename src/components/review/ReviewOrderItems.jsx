const ReviewOrderItems = () => {
  return (
    <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <h2 className="border-b border-navy-900/10 pb-4 text-lg font-bold text-navy-950">
        Order Items (1)
      </h2>

      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-4 rounded border border-navy-900/10 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-navy-900/10 bg-navy-900/5 p-2">
              <span className="text-xs text-navy-900/40">Product Image</span>
            </div>

            <div>
              <span className="rounded bg-navy-900/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-900/60">
                Refrigeration
              </span>
              <h3 className="mt-1 text-base font-bold text-navy-950">
                ALFA Precision French Door Refrigerator
              </h3>
              <p className="mt-1 text-xs text-navy-900/60">
                Model: ALFA-RF-9051X | Qty: 1
              </p>
              <p className="mt-2 text-xs font-semibold text-brand-blue">
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
  );
};

export default ReviewOrderItems;