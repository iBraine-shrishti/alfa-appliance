import { Link } from "react-router-dom";
import { FiUser, FiHeart, FiShoppingCart, FiBarChart2, FiMenu, FiX } from "react-icons/fi";
import Container from "../common/Container";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Logo from "./Logo";
import useToggle from "../../hooks/useToggle";

const Header = () => {
  const [menuOpen, { close: closeMenu, toggle: toggleMenu }] = useToggle(false);

  return (
    <header className="bg-white">
      <TopBar />

      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:gap-8">
          <div className="col-start-1 flex items-center gap-4">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Open menu"
              className="shrink-0 text-navy-900 lg:hidden"
            >
              <FiMenu size={24} />
            </button>

            <Logo />
          </div>

          {/* <SearchBar className="mx-auto hidden w-full max-w-lg md:flex" /> */}
          <SearchBar className="col-start-2 mx-auto hidden w-full max-w-lg md:flex" />

          {/* <div className="flex items-center gap-4 text-navy-900 sm:gap-5"> */}
          <div className="col-start-3 flex items-center gap-4 text-navy-900 sm:gap-5">
            <Link to="/compare" aria-label="Compare" className="hidden hover:text-brand-blue sm:block">
              <FiBarChart2 size={20} />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-brand-blue">
              <FiShoppingCart size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-blue text-[10px] font-semibold text-white">
                01
              </span>
            </Link>
            <Link to="/wishlist" aria-label="Wishlist" className="hover:text-brand-blue">
              <FiHeart size={20} />
            </Link>
            <Link to="/account" aria-label="Account" className="hover:text-brand-blue">
              <FiUser size={20} />
            </Link>
          </div>
        </Container>

        <div className="px-4 pb-3 md:hidden">
          <SearchBar />
        </div>
      </div>

      <div className="hidden bg-navy-900/[0.03] lg:block">
        <Container className="py-2.5">
          <Navbar />
        </Container>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/50"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <Logo />
              <button type="button" onClick={closeMenu} aria-label="Close menu">
                <FiX size={22} className="text-navy-900" />
              </button>
            </div>
            <Navbar orientation="vertical" onLinkClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;