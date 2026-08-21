import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterAccordion from "./FilterAccordion";
import ActiveFilterPill from "./ActiveFilterPill";

const CheckboxList = ({ items, selected, onToggle }) => (
  <div className="space-y-2">
    {items.map((item) => (
      <label key={item} className="flex items-center gap-2 text-sm text-navy-900/75 cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes(item)}
          onChange={() => onToggle(item)}
          className="h-4 w-4 rounded border-navy-900/20 text-brand-blue cursor-pointer"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
);

const buildInitialSelected = (filters) => {
  const categoryLabels = (filters.categories ?? []).flatMap((g) => [g.label, ...(g.children ?? [])]);
  const brands = [];
  const categories = [];

  (filters.active ?? []).forEach((entry) => {
    if (filters.brands?.includes(entry)) brands.push(entry);
    else if (categoryLabels.includes(entry)) categories.push(entry);
  });

  return {
    featured: null,
    categories,
    brands,
    availability: [],
    priceMax: filters.priceRange ? filters.priceRange[1] : 3000,
  };
};

const FilterSidebar = ({ filters, onChange }) => {
  const [openSections, setOpenSections] = useState({ featured: true, category: true, brands: true, price: true });
  const [selected, setSelected] = useState(() => buildInitialSelected(filters));

  const toggleSection = (section) =>
    setOpenSections((current) => ({ ...current, [section]: !current[section] }));

  const setFeatured = (value) => {
    setSelected((prev) => {
      const next = { ...prev, featured: prev.featured === value ? null : value };
      setTimeout(() => onChange?.(next), 0);
      return next;
    });
  };

  const toggleInList = (key) => (value) => {
    setSelected((prev) => {
      const nextList = prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value];
      const next = { ...prev, [key]: nextList };
      setTimeout(() => onChange?.(next), 0);
      return next;
    });
  };

  const toggleCategory = toggleInList("categories");
  const toggleBrand = toggleInList("brands");
  const toggleAvailability = toggleInList("availability");

  const setPriceMax = (value) => {
    setSelected((prev) => {
      const next = { ...prev, priceMax: value };
      setTimeout(() => onChange?.(next), 0);
      return next;
    });
  };

  const clearAll = () => {
    const cleared = {
      featured: null,
      categories: [],
      brands: [],
      availability: [],
      priceMax: filters.priceRange ? filters.priceRange[1] : 3000,
    };
    setSelected(cleared);
    onChange?.(cleared);
  };

  const applyFilters = () => onChange?.(selected);

  const priceRange = filters.priceRange || [0, 3000];

  const activePills = useMemo(() => {
    const pills = [];
    if (selected.featured) pills.push({ key: `featured:${selected.featured}`, label: selected.featured, onRemove: () => setFeatured(selected.featured) });
    selected.categories.forEach((c) => pills.push({ key: `cat:${c}`, label: c, onRemove: () => toggleCategory(c) }));
    selected.brands.forEach((b) => pills.push({ key: `brand:${b}`, label: b, onRemove: () => toggleBrand(b) }));
    selected.availability.forEach((a) => pills.push({ key: `avail:${a}`, label: a, onRemove: () => toggleAvailability(a) }));
    if (selected.priceMax < priceRange[1]) {
      pills.push({ key: "price", label: `Up to £${selected.priceMax}`, onRemove: () => setPriceMax(priceRange[1]) });
    }
    return pills;
  }, [selected, priceRange]);

  const pricePct = Math.round(
    ((selected.priceMax - priceRange[0]) / (priceRange[1] - priceRange[0])) * 100
  );

  const availability = filters.availability ?? [
    { label: "In Stock", count: filters.products?.length ?? 12 },
    { label: "Out of Stock", count: 0 },
  ];

  return (
    <aside className="rounded border border-navy-900/8 bg-white/20 p-4 shadow-sm backdrop-blur sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-navy-950">Filters</h2>
          <p className="mt-1 text-xs text-navy-900/55">Refine your selection</p>
        </div>
        {activePills.length > 0 && (
          <button type="button" onClick={clearAll} className="text-xs font-semibold text-brand-blue hover:underline">
            Clear All
          </button>
        )}
      </div>

      {filters.featured && filters.featured.length > 0 && (
        <FilterAccordion title="Featured" open={!!openSections.featured} onToggle={() => toggleSection("featured")}>
          <div className="space-y-2">
            {filters.featured.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-navy-900/75 cursor-pointer">
                <input
                  type="radio"
                  name="featured"
                  checked={selected.featured === item}
                  onChange={() => setFeatured(item)}
                  className="h-4 w-4 border-navy-900/20 text-brand-blue cursor-pointer"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </FilterAccordion>
      )}

      {activePills.length > 0 && (
        <FilterAccordion title="Active Filters" open={!!openSections.active} onToggle={() => toggleSection("active")}>
          <div className="flex flex-wrap gap-2">
            {activePills.map((pill) => (
              <ActiveFilterPill key={pill.key} label={pill.label} onRemove={pill.onRemove} />
            ))}
          </div>
        </FilterAccordion>
      )}

      {filters.categories && filters.categories.length > 0 && (
        <FilterAccordion title="Category" open={!!openSections.category} onToggle={() => toggleSection("category")}>
          <div className="space-y-2">
            {filters.categories.map((group) => (
              <div key={group.label} className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-navy-950 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selected.categories.includes(group.label)}
                    onChange={() => toggleCategory(group.label)}
                    className="h-4 w-4 rounded border-navy-900/20 text-brand-blue cursor-pointer"
                  />
                  <span>{group.label}</span>
                </label>
                {group.children?.length ? (
                  <div className="pl-6">
                    <CheckboxList items={group.children} selected={selected.categories} onToggle={toggleCategory} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </FilterAccordion>
      )}

      {filters.brands && filters.brands.length > 0 && (
        <FilterAccordion title="Brands" open={!!openSections.brands} onToggle={() => toggleSection("brands")}>
          <label className="mb-3 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2 text-sm text-navy-900/55">
            <FiSearch />
            <input
              type="text"
              placeholder="Search brands"
              className="w-full bg-transparent text-sm outline-none placeholder:text-navy-900/35"
            />
          </label>
          <CheckboxList items={filters.brands} selected={selected.brands} onToggle={toggleBrand} />
        </FilterAccordion>
      )}

      <FilterAccordion title="Availability" open={!!openSections.availability} onToggle={() => toggleSection("availability")}>
        <div className="space-y-2">
          {availability.map((item) => (
            <label key={item.label} className="flex items-center justify-between gap-2 text-sm text-navy-900/75 cursor-pointer">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.availability.includes(item.label)}
                  onChange={() => toggleAvailability(item.label)}
                  className="h-4 w-4 rounded border-navy-900/20 text-brand-blue cursor-pointer"
                />
                {item.label}
              </span>
              <span className="text-xs text-navy-900/45">({item.count})</span>
            </label>
          ))}
        </div>
      </FilterAccordion>

      <FilterAccordion title="Price" open={!!openSections.price} onToggle={() => toggleSection("price")}>
        <div className="space-y-3">
          <input
            type="range"
            min={priceRange[0]}
            max={priceRange[1]}
            value={selected.priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-brand-blue cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-brand-blue) ${pricePct}%, rgba(15,27,46,0.1) ${pricePct}%)`,
            }}
          />
          <div className="flex items-center justify-between text-xs text-navy-900/55">
            <span>£{priceRange[0]}</span>
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 font-semibold text-brand-blue">
              Up to £{selected.priceMax}
            </span>
            <span>£{priceRange[1]}</span>
          </div>
        </div>
      </FilterAccordion>

      <button
        type="button"
        onClick={applyFilters}
        className="mt-5 w-full rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark shadow-sm"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;