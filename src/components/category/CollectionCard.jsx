import { Link } from "react-router-dom";
import { FiArrowRight, FiLayers } from "react-icons/fi";

const CollectionCard = ({ collection }) => {
  return (
    <Link
      to={`/collection/${collection.slug}`}
      className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl"
    >
      {/* Prominent Banner Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={collection.image}
          alt={collection.name || collection.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Product Count Pill Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-950 shadow-md backdrop-blur-md border border-slate-200/60">
          <FiLayers size={12} className="text-brand-blue" />
          <span>{collection.productCount} Products</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-display text-base font-bold text-navy-950 transition-colors duration-200 group-hover:text-brand-blue line-clamp-1">
            {collection.name || collection.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-1">
            Precision engineered appliances
          </p>
        </div>

        {/* Card Footer Action */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-brand-blue">
          <span>Explore Range</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:translate-x-1">
            <FiArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;