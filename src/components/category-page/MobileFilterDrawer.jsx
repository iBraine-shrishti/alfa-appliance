import { FiX } from "react-icons/fi";
import FilterSidebar from "./FilterSidebar";

const MobileFilterDrawer = ({ isOpen, onClose, filters, onChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-navy-950/50" onClick={onClose} aria-hidden="true" />

      <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-4 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy-950">Filters</h2>
          <button type="button" onClick={onClose} aria-label="Close filters">
            <FiX size={22} className="text-navy-900" />
          </button>
        </div>

        <FilterSidebar
          filters={filters}
          onChange={(selected) => {
            onChange(selected);
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default MobileFilterDrawer;