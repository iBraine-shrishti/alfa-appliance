import { useState } from "react";
import DealsButton from "../common/DealsButton";

const FilterTabs = ({ tabs, defaultTab, activeTab, onChange }) => {
  const [internalActive, setInternalActive] = useState(defaultTab ?? tabs[0]);
  const currentTab = activeTab !== undefined ? activeTab : internalActive;

  const handleClick = (tab) => {
    if (activeTab === undefined) {
      setInternalActive(tab);
    }
    onChange?.(tab);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => {
        if (tab === "Deals") {
          return (
            <DealsButton
              key={tab}
              as="button"
              label="Deals"
              onClick={() => handleClick("Deals")}
              className={`!px-4 !py-2 !text-sm !font-medium ${
                currentTab === "Deals"
                  ? "ring-2 ring-red-400 ring-offset-2 scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            />
          );
        }

        const isActive = currentTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => handleClick(tab)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? "bg-brand-blue text-white"
                : "bg-navy-900/5 text-navy-900/70 hover:bg-navy-900/10"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;