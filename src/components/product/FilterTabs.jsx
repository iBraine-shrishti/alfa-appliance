import { useState } from "react";

const FilterTabs = ({ tabs, defaultTab, onChange }) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]);

  const handleClick = (tab) => {
    setActive(tab);
    onChange?.(tab);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => handleClick(tab)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === tab ? "bg-brand-blue text-white" : "bg-navy-900/5 text-navy-900/70 hover:bg-navy-900/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;