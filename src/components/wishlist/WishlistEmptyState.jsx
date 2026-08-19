import { Link } from "react-router-dom";
import { FiHeart, FiArrowRight } from "react-icons/fi";

const WishlistEmptyState = () => {
  return (
    <div className="mx-auto my-12 max-w-md rounded border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
        <FiHeart size={32} />
      </div>
      <h2 className="mt-4 text-xl font-bold text-slate-900">Your Wishlist is Empty</h2>
      <p className="mt-2 text-sm text-slate-500">
        Explore our premium ALFA appliances and save your favorites to compare or purchase later.
      </p>
      <Link
        to="/collections"
        className="mt-6 inline-flex items-center gap-2 rounded bg-slate-900 px-6 py-3 text-sm font-bold text-amber-400 shadow-md transition-all hover:bg-slate-800"
      >
        Browse Collections <FiArrowRight size={16} />
      </Link>
    </div>
  );
};

export default WishlistEmptyState;