import { Link } from "react-router-dom";
import { FiChevronRight, FiHeart, FiShare2 } from "react-icons/fi";

const WishlistBreadcrumb = ({ itemCount }) => {
  return (
    <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white shadow-inner">
      <div className="container-page py-8 lg:py-10">

        <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          <Link to="/" className="transition-colors hover:text-amber-400">
            Home
          </Link>
          <FiChevronRight size={12} className="text-slate-600" />
          <Link to="/account" className="transition-colors hover:text-amber-400">
            Account
          </Link>
          <FiChevronRight size={12} className="text-slate-600" />
          <span className="text-brand-blue">Saved Items</span>
        </nav>

        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-brand-blue">
              <FiHeart size={20} className="fill-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Saved Items
              </span>
            </div>
            <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              My Wishlist
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              {itemCount} {itemCount === 1 ? "item" : "items"} saved for later
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default WishlistBreadcrumb;