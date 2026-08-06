import { FiChevronDown } from "react-icons/fi";

const FilterAccordion = ({ title, children, open = false, onToggle }) => {
  return (
    <div className="border-b border-navy-900/8 py-4 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 text-left text-sm font-semibold text-navy-950"
        aria-expanded={open}
      >
        <span>{title}</span>
        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <div className="pt-4">{children}</div> : null}
    </div>
  );
};

export default FilterAccordion;
