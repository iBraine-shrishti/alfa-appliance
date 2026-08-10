import { FiFileText, FiMessageCircle } from "react-icons/fi";
import Container from "../common/Container";

const TopBar = () => {
  const links = (
    <>
      <a href="/track-order" className="flex items-center gap-2 whitespace-nowrap text-sm transition-colors hover:text-white">
        <FiFileText size={16} />
        Track Order
      </a>
      <span className="h-4 w-px bg-white/25" aria-hidden="true" />
      <a href="/contact" className="flex items-center gap-2 whitespace-nowrap text-sm transition-colors hover:text-white">
        <FiMessageCircle size={16} />
        Contact us
      </a>
    </>
  );

  return (
    <div className="hidden bg-navy-950 text-white sm:block">
      <Container className="flex h-11 items-center gap-3 text-sm">
        <div className="hidden shrink-0 items-center gap-3 opacity-0 lg:flex" aria-hidden="true">
          {links}
        </div>

        <p className="flex-1 truncate text-left text-white/80 lg:text-center">
          Welcome to Alfa Appliances • Discover Trusted Brands for Every Home
        </p>

        <div className="flex shrink-0 items-center gap-3 text-white/90">
          {links}
        </div>
      </Container>
    </div>
  );
};

export default TopBar;