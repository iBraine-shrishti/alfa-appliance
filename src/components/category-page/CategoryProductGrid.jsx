import { FiGrid, FiList, FiFilter } from "react-icons/fi";
import ProductGrid from "../product/ProductGrid";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";

const CategoryProductGrid = ({
  totalResults,
  products,
  viewMode,
  onViewModeChange,
  sortValue,
  onSortChange,
  sortOptions,
  currentPage,
  totalPages,
  onPageChange,
  onOpenFilters,
}) => {
  return (
    <section className="rounded border border-navy-900/8 bg-white/20 p-4 shadow-sm backdrop-blur sm:p-5 lg:p-6">
      <div className="flex flex-col gap-3 border-b border-navy-900/8 pb-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-navy-900/70">
          Showing <span className="font-semibold text-navy-950">{totalResults}</span> results
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onOpenFilters}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-navy-900/10 bg-white text-navy-900/70 shadow-sm transition-colors hover:text-brand-blue lg:hidden"
            aria-label="Open filters"
          >
            <FiFilter size={15} />
          </button>

          <div className="inline-flex rounded-xl border border-navy-900/10 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-brand-blue text-white" : "text-navy-900/55 hover:text-brand-blue"
              }`}
              aria-label="Grid view"
            >
              <FiGrid size={15} />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                viewMode === "list" ? "bg-brand-blue text-white" : "text-navy-900/55 hover:text-brand-blue"
              }`}
              aria-label="List view"
            >
              <FiList size={15} />
            </button>
          </div>

          <SortDropdown value={sortValue} options={sortOptions} onChange={onSortChange} />
        </div>
      </div>

      <div className="mt-5">
        <ProductGrid products={products} />
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </section>
  );
};

export default CategoryProductGrid;