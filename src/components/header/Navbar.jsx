import { NavLink } from "react-router-dom";
import { navLinks, navPillLinks } from "../../data/navLinks";

const Navbar = ({ orientation = "horizontal", onLinkClick }) => {
  const isVertical = orientation === "vertical";

  if (isVertical) {
    return (
      <nav className="flex flex-col gap-1">
        {[...navLinks, ...navPillLinks].map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2.5 text-sm font-medium ${
                isActive
                  ? "bg-brand-blue/10 text-brand-blue"
                  : "text-navy-900/80 hover:bg-navy-900/5"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center gap-7">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-brand-blue" : "text-navy-900/75 hover:text-brand-blue"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-2.5">
        {navPillLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                link.filled
                  ? "bg-brand-blue text-white hover:bg-brand-blue-dark"
                  : isActive
                    ? "bg-navy-900/10 text-navy-900"
                    : "bg-navy-900/5 text-navy-900/70 hover:bg-navy-900/10"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;