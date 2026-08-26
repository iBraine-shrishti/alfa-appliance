import { useEffect, useState } from "react";

const SERVICE_PRICES = { installation: 29.99, recycling: 24.99 };

const EssentialServices = ({ deliveryPrice, initialSelected, onTotalChange, onSelectionChange, compact = false }) => {
  const [selected, setSelected] = useState(() => initialSelected ?? { bundle: false, installation: false, recycling: false });
  const total = selected.bundle
    ? 49
    : deliveryPrice + (selected.installation ? SERVICE_PRICES.installation : 0) + (selected.recycling ? SERVICE_PRICES.recycling : 0);

  useEffect(() => onTotalChange?.(total), [onTotalChange, total]);
  const update = (next) => {
    const normalized = next.bundle ? { bundle: true, installation: false, recycling: false } : { ...next, bundle: false };
    setSelected(normalized);
    onSelectionChange?.(normalized);
  };

  if (compact) {
    return (
      <div className="rounded border-l-4 border-brand-blue bg-brand-blue/5 p-5 shadow-sm" >
        <p className="text-sm font-semibold text-navy-950">Essential services</p>
        <div className="mt-2 divide-y divide-navy-900/8 ">
          <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm"><span className="text-navy-900/80">Delivery</span><span className="font-semibold text-navy-950">{deliveryPrice === 0 ? "FREE" : `£${deliveryPrice.toFixed(2)}`}</span></div>
          <label className="flex items-center justify-between gap-3 px-4 py-3 text-sm"><span className="flex items-center gap-3 text-navy-900/80"><input type="checkbox" checked={!!selected.installation} onChange={(event) => update({ ...selected, installation: event.target.checked })} className="h-4 w-4 accent-brand-blue" />Installation</span><span className="font-semibold text-navy-950">£29.99</span></label>
          <label className="flex items-center justify-between gap-3 px-4 py-3 text-sm"><span className="flex items-center gap-3 text-navy-900/80"><input type="checkbox" checked={!!selected.recycling} onChange={(event) => update({ ...selected, recycling: event.target.checked })} className="h-4 w-4 accent-brand-blue" />Recycling</span><span className="font-semibold text-navy-950">£24.99</span></label>
        </div>
        <p className="mt-3 flex justify-between text-sm font-semibold text-navy-950"><span>Total</span><span>£{total.toFixed(2)}</span></p>
      </div>
    );
  }

  return (
    <section className="rounded border-l-4 border-brand-blue bg-brand-blue/5 p-5 shadow-sm">
      <h3 className="text-lg font-bold text-navy-950">Essential service add-ons</h3>
      <p className="mt-1 text-sm text-navy-900/65">Choose the services you need for each appliance.</p>

      <label className="mt-4 block rounded border border-brand-blue/25 bg-white p-4 shadow-sm">
        <span className="flex items-start gap-3">
          <input type="checkbox" checked={!!selected.bundle} onChange={(event) => update({ ...selected, bundle: event.target.checked })} className="mt-1 h-4 w-4 accent-brand-blue" />
          <span>
            <span className="block font-bold text-navy-950">Alfa Bundle — Delivery, Installation &amp; Recycling · £49</span>
            <span className="mt-1 block text-sm leading-6 text-navy-900/70">Get it all done in one visit. We deliver your new appliance, install and test it so it's ready to use, then take your old one away to recycle. Our best-value option — cheaper than adding each service on its own.</span>
          </span>
        </span>
      </label>

      <p className="mt-5 text-sm font-bold text-navy-950">Choose only what you need:</p>
      <div className="mt-2 divide-y divide-navy-900/10 rounded border border-navy-900/10 bg-white">
        <div className="p-4">
          <div className="flex items-center justify-between gap-3 text-sm font-semibold text-navy-950"><span>1. Delivery</span><span>{deliveryPrice === 0 ? "FREE" : `£${deliveryPrice.toFixed(2)}`}</span></div>
          <p className="mt-2 text-xs leading-5 text-navy-900/65">Choose a delivery day that suits you — Monday to Sunday, with morning, afternoon and evening slots. You'll get confirmation and tracking so you know exactly when we'll arrive. FREE on orders over £399, £14.99 for orders below.</p>
          <button type="button" className="mt-2 text-xs font-semibold text-brand-blue underline">Check delivery availability for your postcode</button>
        </div>
        <label className="flex items-start gap-3 p-4">
          <input type="checkbox" checked={!!selected.installation} onChange={(event) => update({ ...selected, installation: event.target.checked })} className="mt-1 h-4 w-4 accent-brand-blue" />
          <span><span className="block text-sm font-semibold text-navy-950">2. Installation (connect &amp; disconnect old appliance) — £29.99</span><span className="mt-1 block text-xs leading-5 text-navy-900/65">Our own engineers connect and test your new appliance so it's ready to use, and safely disconnect your old appliance ready for removal. No wrestling with hoses, cables or fittings — we handle it.</span></span>
        </label>
        <label className="flex items-start gap-3 p-4">
          <input type="checkbox" checked={!!selected.recycling} onChange={(event) => update({ ...selected, recycling: event.target.checked })} className="mt-1 h-4 w-4 accent-brand-blue" />
          <span><span className="block text-sm font-semibold text-navy-950">3. Disposal of old appliance (like-for-like size) — £24.99</span><span className="mt-1 block text-xs leading-5 text-navy-900/65">On delivery day we'll take your old appliance away and recycle it. Covers a like-for-like swap (e.g. same size old fridge for same size new fridge).</span></span>
        </label>
      </div>
      <p className="mt-4 flex justify-between border-t border-brand-blue/15 pt-3 text-base font-bold text-navy-950"><span>Service total</span><span>£{total.toFixed(2)}</span></p>
    </section>
  );
};

export { SERVICE_PRICES };
export default EssentialServices;
