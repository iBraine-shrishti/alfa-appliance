import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ title, rightContent, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded border border-navy-900/10 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="text-base font-medium text-navy-950">{title}</span>
          {rightContent}
        </span>
        <FiChevronDown className={`shrink-0 text-navy-900/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && <div className="border-t border-navy-900/10 px-6 py-6">{children}</div>}
    </div>
  );
};

export default AccordionItem;