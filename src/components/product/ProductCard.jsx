import { FiHeart } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
import StarRating from "../common/StarRating";

const ProductCard = ({ product }) => {
  const { brand, name, image, rating, reviews, price, oldPrice, discount, badge } = product;

  return (
    <div className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white  shadow-sm transition-shadow hover:shadow-md">
      <div className="relative overflow-hidden rounded-xl bg-cream-50">
        {badge && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-orange px-2.5 py-1 text-[10px] font-semibold uppercase text-white">
            {badge}
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy-900 shadow-sm transition-colors hover:text-brand-orange"
        >
          <FiHeart size={15} />
        </button>
       <img
  src={product.image}
  alt={product.name}
  className="mx-auto aspect-square w-[82%] object-contain transition duration-300 group-hover:scale-105"
/>  </div>

      <div className="flex flex-1 flex-col gap-1.5 pt-3 px-3 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{product.brand}</p>
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium text-navy-900">{product.name}</h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-navy-950">${product.price}</span>
          {product.oldPrice && <span className="text-sm text-navy-900/40 line-through">${product.oldPrice}</span>}
          {product.discount && <span className="text-xs font-semibold text-brand-orange-dark">{product.discount}% off</span>}
        </div>
        <label className="mt-2 flex items-center gap-2 text-xs text-navy-900/60">
          <input type="checkbox" className="h-3.5 w-3.5 rounded border-navy-900/20 text-brand-blue focus:ring-brand-blue" />
          <LuScale size={13} />
          Compare
        </label>
      </div>
    </div>
  );
};

export default ProductCard;