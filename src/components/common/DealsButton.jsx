import { Link } from "react-router-dom";

const DealsButton = ({
  to = "/deals",
  label = "Deals",
  onClick,
  className = "",
  as = "link", // "link" | "button"
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full bg-red-600 px-3.5 py-1 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-red-700 shadow-xs cursor-pointer";

  if (as === "button" || (!to && onClick)) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseStyles} ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {label}
    </Link>
  );
};

export default DealsButton;
