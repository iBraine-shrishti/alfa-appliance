import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900/60 shadow-sm transition-colors hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FiChevronLeft size={16} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-brand-blue text-white shadow-sm"
              : "border border-navy-900/10 bg-white text-navy-900/70 hover:text-brand-blue"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900/60 shadow-sm transition-colors hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
