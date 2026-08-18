import { Link } from "react-router-dom";
import { FiFileText, FiMessageCircle, FiLogIn } from "react-icons/fi";
import Container from "../common/Container";

const TopBar = () => {
  const links = (
    <>
      <Link
        to="/track-order"
        className="flex items-center gap-1.5 whitespace-nowrap text-xs transition-colors hover:text-white sm:gap-2 sm:text-sm"
      >
        <FiFileText size={14} className="sm:hidden" />
        <FiFileText size={16} className="hidden sm:block" />
        Track Order
      </Link>
      <span className="h-3.5 w-px bg-white/25 sm:h-4" aria-hidden="true" />
      <Link
        to="/contact"
        className="flex items-center gap-1.5 whitespace-nowrap text-xs transition-colors hover:text-white sm:gap-2 sm:text-sm"
      >
        <FiMessageCircle size={14} className="sm:hidden" />
        <FiMessageCircle size={16} className="hidden sm:block" />
        Contact us
      </Link>
    </>
  );

  const loginButton = (
    <Link
      to="/login"
      className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-blue-500 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-sm"
    >
      <FiLogIn size={14} />
      Login
    </Link>
  );

  return (
    <div className="bg-navy-950 text-white">
      <Container className="flex flex-col items-center gap-2 py-2 text-center sm:h-11 sm:flex-row sm:gap-3 sm:py-0 sm:text-left">
        <div className="hidden shrink-0 items-center gap-3 opacity-0 lg:flex" aria-hidden="true">
          {links}
          {loginButton}
        </div>

        <p className="flex-1 text-xs text-white/80 sm:truncate sm:text-sm lg:text-center">
          Welcome to Alfa Appliances{" "}
          <span className="hidden sm:inline">•</span>{" "}
          <span className="block sm:inline">
            Discover Trusted Brands for Every Home
          </span>
        </p>

        <div className="flex shrink-0 items-center gap-2.5 text-white/90 sm:gap-3">
          {links}
          {loginButton}
        </div>
      </Container>
    </div>
  );
};

export default TopBar;