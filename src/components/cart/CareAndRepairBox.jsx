import { useState } from "react";
import { FiTool } from "react-icons/fi";

const includedItems = [
  "Full breakdown support",
  "Full replacement. If we can't repair your product in 7 calendar days or we need to repair it more than twice, we'll replace it for free.",
  "All parts, labour and callouts included",
  "Free delivery and recycling if your product needs replacing",
];

const excludedItems = ["Accidental damage", "Cosmetic damage"];

const CareAndRepairBox = ({ carePlans }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  return (
    <div className="rounded border border-navy-900/10 bg-navy-900/[0.03] p-4">
      <div className="flex items-start gap-2">
        <FiTool className="mt-0.5 shrink-0 text-brand-blue" />
        <div>
          <p className="font-semibold text-navy-950">Add Care & Repair</p>
          <p className="text-sm text-navy-900/60">If your tech stops working, we'll fix or replace it fast.</p>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-navy-900/70">
        {includedItems.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-brand-blue">✓</span>
            {item}
          </li>
        ))}
        {excludedItems.map((item) => (
          <li key={item} className="flex gap-2 text-navy-900/50">
            <span className="mt-0.5 shrink-0 text-red-500">✕</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-2">
        {carePlans.map((plan) => (
          <label
            key={plan.id}
            className={`flex items-center justify-between gap-3 rounded border bg-white px-4 py-3 text-sm ${
              selectedPlanId === plan.id ? "border-navy-950" : "border-navy-900/10"
            }`}
          >
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedPlanId === plan.id}
                onChange={() => setSelectedPlanId((current) => (current === plan.id ? null : plan.id))}
                className="h-4 w-4 accent-navy-950"
              />
              <span>
                <span className="block font-medium text-navy-950">{plan.label}</span>
                {plan.note && <span className="text-xs text-navy-900/50">{plan.note}</span>}
              </span>
            </span>
            <span className="font-semibold text-navy-950">{plan.priceLabel}</span>
          </label>
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-navy-900/60">
        By selecting one of these plans you agree to purchase Care & Repair. Please read the{" "}
        <span className="underline">Terms and Important Information</span> to ensure Care & Repair is right for you.
        If you pay using Alfa flexpay then interest charges may apply.
      </p>
      <p className="mt-2 text-xs text-navy-900/60">
        Compare prices of extended warranties for electrical goods at{" "}
        <span className="underline">www.compareextendedwarranties.co.uk</span>
      </p>
    </div>
  );
};

export default CareAndRepairBox;