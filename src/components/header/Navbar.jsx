import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { dealLink, navLinks, navPillLinks } from "../../data/navLinks";

const Navbar = ({ orientation = "horizontal", onLinkClick }) => {
  const isVertical = orientation === "vertical";
  const [openMenu, setOpenMenu] = useState(null);

  const renderCategoryLink = (link, className) => (
    <NavLink
      to={link.href}
      onClick={onLinkClick}
      className={({ isActive }) =>
        `${className} ${isActive ? "text-brand-blue" : "text-navy-900/75 hover:text-brand-blue"}`
      }
    >
      {link.label}
    </NavLink>
  );

  if (isVertical) {
    return (
      <nav className="flex flex-col gap-1 h-full">
        {navLinks.map((link) => {
          const isOpen = openMenu === link.label;
          return (
            <div key={link.label}>
              <div className="flex items-center">
                {renderCategoryLink(
                  link,
                  "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium"
                )}
                {link.children && link.children.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Toggle ${link.label} menu`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : link.label)}
                    className="rounded-lg p-2 text-navy-900/60 hover:bg-navy-900/5"
                  >
                    <FiChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {isOpen && link.children && (
                <div className="ml-3 border-l border-navy-900/10 pl-3">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.slug}
                      to={child.href}
                      onClick={onLinkClick}
                      className="block rounded-lg px-3 py-2 text-sm text-navy-900/70 hover:bg-navy-900/5 hover:text-brand-blue"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Deals link highlighted in Red */}
        <NavLink
          to={dealLink.href}
          onClick={onLinkClick}
          className="rounded-lg px-3 py-3 text-base font-bold text-red-600 transition-colors hover:text-red-700 hover:bg-red-50"
        >
          {dealLink.label}
        </NavLink>

        {/* Separated Book a Repair section */}
        <div className="mt-6 pt-4 border-t border-navy-900/10 flex flex-col gap-2">
          {navPillLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
                  link.filled
                    ? "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm"
                    : isActive
                      ? "bg-navy-900/10 text-navy-900"
                      : "text-navy-900/80 hover:bg-navy-900/5"
                }`
              }
            >
              {link.label === "BOOK A REPAIR" && <FaScrewdriverWrench aria-hidden="true" />}
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center gap-7">
        {navLinks.map((link) => {
          const isOpen = openMenu === link.label;

          return (
            <div
              key={link.label}
              className="relative py-3"
              onMouseEnter={() => setOpenMenu(link.label)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(link.label)}
            >
              {renderCategoryLink(link, "text-base font-medium transition-colors")}

              {link.children && link.children.length > 0 && (
                <div
                  className={`absolute left-0 top-full z-50 w-64 rounded border border-navy-900/10 bg-white p-2 shadow-xl transition-all ${
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <NavLink
                      key={child.slug}
                      to={child.href}
                      onClick={onLinkClick}
                      className="block rounded px-3 py-2.5 text-sm text-navy-900/75 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Red Deals Badge on Desktop */}
        <NavLink
          to={dealLink.href}
          onClick={onLinkClick}
          className="inline-flex items-center justify-center rounded-full bg-red-600 px-3.5 py-1 text-base font-semibold text-white transition-colors hover:bg-red-700"
        >
          {dealLink.label}
        </NavLink>
      </div>

      {/* Added ml-6 spacing divider to isolate repair pill */}
      <div className="flex items-center gap-2.5 ml-6 pl-6 border-l border-navy-900/10">
        {navPillLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                link.filled
                  ? "bg-brand-blue text-white shadow-sm hover:bg-brand-blue-dark"
                  : isActive
                    ? "bg-navy-900/10 text-navy-900"
                    : "bg-navy-900/5 text-navy-900/70 hover:bg-navy-900/10"
              }`
            }
          >
            {link.label === "BOOK A REPAIR" && <FaScrewdriverWrench aria-hidden="true" />}
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;