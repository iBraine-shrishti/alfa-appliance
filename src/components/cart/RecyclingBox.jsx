import { useState } from "react";
import { FiInfo, FiCheck, FiAlertCircle } from "react-icons/fi";

const RecyclingBox = ({ price = 0.0, isDeliverable = true, onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    const nextState = !selected;
    setSelected(nextState);
    if (onChange) onChange(nextState ? price : 0);
  };

  return (
    <div className="rounded border border-navy-900/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-1.5 text-base font-bold text-navy-950">
        <h3>♻️ Free Removal & Recycling (Bye, Old Clunker)</h3>
        <FiInfo
          className="cursor-pointer text-navy-900/40 hover:text-navy-900"
          size={16}
        />
      </div>

      <p className="mt-1.5 text-xs font-semibold text-emerald-600">
        We Haul Away Your Old Appliance *For Free* (On Select Orders)
      </p>

      <ul className="mt-2.5 space-y-2 text-xs text-navy-900/75">
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>Haul away your old unit hassle-free on delivery day.</span>
        </li>
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>Remove and responsibly recycle all new product packaging.</span>
        </li>
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>Eco-friendly disposal and recycling practices strictly followed.</span>
        </li>
      </ul>


      <blockquote className="mt-3 rounded-lg bg-emerald-50/70 p-2.5 text-xs italic text-emerald-900 border border-emerald-100">
        ♻️ "They took my rusty dishwasher AND planted a tree? Legendary." – Mike R.
      </blockquote>

      <label
        onClick={handleToggle}
        className={`mt-4 flex cursor-pointer items-center justify-between rounded border p-3.5 transition-all ${
          selected
            ? "border-brand-blue bg-brand-blue/[0.03] shadow-sm"
            : "border-navy-900/15 bg-white hover:border-navy-900/30"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
              selected
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-navy-900/30 bg-white"
            }`}
          >
            {selected && <FiCheck size={12} />}
          </div>
          <span className="text-sm font-semibold text-navy-950">
            Add Free Removal & Recycling
          </span>
        </div>
        <span className="text-sm font-bold text-emerald-600">
          {price === 0 ? "FREE" : `£${price.toFixed(2)}`}
        </span>
      </label>

      {!isDeliverable && (
        <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
          <FiAlertCircle size={15} />
          <span>If you want Removal & Recycling, please choose a deliverable item</span>
        </div>
      )}
    </div>
  );
};

export default RecyclingBox;