import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SliderArrow = ({ direction = "left", className = "", ...props }) => {
  const Icon = direction === "left" ? FiChevronLeft : FiChevronRight;
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 bg-white text-navy-900 shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30 ${className}`}
      {...props}
    >
      <Icon size={18} />
    </button>
  );
};

export default SliderArrow;