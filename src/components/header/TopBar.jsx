import { FiFileText, FiMessageCircle } from "react-icons/fi";
import Container from "../common/Container";

const TopBar = () => {
  return (
    <div className="hidden bg-navy-950 text-white sm:block">
      <Container className="relative flex h-11 items-center justify-center text-sm">
        <p className="text-white/80">
          Welcome to Alfa Appliances • Discover Trusted Brands for Every Home
        </p>

        <div className="absolute right-4 flex items-center gap-3 text-white/90 lg:right-8">
          <a href="/track-order" className="flex items-center gap-2 text-sm transition-colors hover:text-white">
            <FiFileText size={16} />
            Track Order
          </a>
          <span className="h-4 w-px bg-white/25" aria-hidden="true" />
          <a href="/contact" className="flex items-center gap-2 text-sm transition-colors hover:text-white">
            <FiMessageCircle size={16} />
            Contact us
          </a>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;