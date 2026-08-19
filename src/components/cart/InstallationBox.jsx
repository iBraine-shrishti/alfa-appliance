import { useState } from "react";
import { FiInfo, FiCheck, FiAlertCircle } from "react-icons/fi";

const InstallationBox = ({ price = 30.0, isDeliverable = true, onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    const nextState = !selected;
    setSelected(nextState);
    if (onChange) onChange(nextState ? price : 0);
  };

  return (
    <div className="rounded border border-navy-900/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-1.5 text-base font-bold text-navy-950">
        <h3>Pro Installation & Setup</h3>
        <FiInfo
          className="cursor-pointer text-navy-900/40 hover:text-navy-900"
          size={16}
        />
      </div>

      <p className="mt-2 text-xs font-semibold text-navy-900/70">
        Stair Heroes Service — On delivery we'll:
      </p>

      <ul className="mt-2.5 space-y-2 text-xs text-navy-900/75">
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>
            Safely navigate stairs and haul your appliance directly to any floor or room of choice.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>
            Connect your appliance safely to standard mains electrical, water, and waste lines.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />
          <span>
            Level, thoroughly inspect, test run, and verify operational safety before leaving.
          </span>
        </li>
      </ul>

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
            Add Professional Installation
          </span>
        </div>
        <span className="text-sm font-bold text-navy-950">
          £{price.toFixed(2)}
        </span>
      </label>

      {!isDeliverable && (
        <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
          <FiAlertCircle size={15} />
          <span>If you want Installation, please choose a deliverable item</span>
        </div>
      )}
    </div>
  );
};

export default InstallationBox;