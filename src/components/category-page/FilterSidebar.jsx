import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterAccordion from "./FilterAccordion";
import ActiveFilterPill from "./ActiveFilterPill";

const CheckboxList = ({ items, onChange }) => (
  <div className="space-y-2">
    {items.map((item) => (
      <label key={item} className="flex items-center gap-2 text-sm text-navy-900/75">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-navy-900/20 text-brand-blue"
          onChange={onChange}
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
);

const FilterSidebar = ({ filters }) => {
  const [openSection, setOpenSection] = useState("featured");
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  const markChanged = () => setHasPendingChanges(true);
  const toggleSection = (section) => setOpenSection((current) => (current === section ? null : section));
  const applyFilters = () => {
    setHasPendingChanges(false);
    setOpenSection(null);
  };

  return (
    <aside className="rounded-3xl border border-navy-900/8 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-navy-950">Filters</h2>
        <p className="mt-1 text-xs text-navy-900/55">Refine your selection</p>
      </div>

      {hasPendingChanges ? (
        <div className="mb-4 rounded-2xl border border-brand-blue/15 bg-brand-blue/5 px-3 py-2 text-xs text-navy-900/70">
          Filter changes are ready to apply.
        </div>
      ) : null}

      <FilterAccordion title="Featured" open={openSection === "featured"} onToggle={() => toggleSection("featured")}>
        <div className="space-y-2">
          {filters.featured.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm text-navy-900/75">
              <input
                type="radio"
                name="featured"
                className="h-4 w-4 border-navy-900/20 text-brand-blue"
                onChange={markChanged}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </FilterAccordion>

      <FilterAccordion title="Active Filters" open={openSection === "active"} onToggle={() => toggleSection("active")}>
        <div className="flex flex-wrap gap-2">
          {filters.active.map((item) => (
            <ActiveFilterPill key={item} label={item} onRemove={markChanged} />
          ))}
        </div>
      </FilterAccordion>

      <FilterAccordion title="Category" open={openSection === "category"} onToggle={() => toggleSection("category")}>
        <div className="space-y-2">
          {filters.categories.map((group) => (
            <div key={group.label} className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-navy-950">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-navy-900/20 text-brand-blue"
                  onChange={markChanged}
                />
                <span>{group.label}</span>
              </label>
              {group.children?.length ? (
                <div className="pl-6">
                  <CheckboxList items={group.children} onChange={markChanged} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </FilterAccordion>

      <FilterAccordion title="Brands" open={openSection === "brands"} onToggle={() => toggleSection("brands")}>
        <label className="mb-3 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2 text-sm text-navy-900/55">
          <FiSearch />
          <input
            type="text"
            placeholder="Search brands"
            className="w-full bg-transparent text-sm outline-none placeholder:text-navy-900/35"
            onChange={markChanged}
          />
        </label>
        <CheckboxList items={filters.brands} onChange={markChanged} />
      </FilterAccordion>

      <FilterAccordion title="Price" open={openSection === "price"} onToggle={() => toggleSection("price")}>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="2000"
            defaultValue="1200"
            className="w-full accent-brand-blue"
            onChange={markChanged}
          />
          <div className="flex items-center justify-between text-xs text-navy-900/55">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </FilterAccordion>

      <button
        type="button"
        onClick={applyFilters}
        className="mt-5 w-full rounded-2xl bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
