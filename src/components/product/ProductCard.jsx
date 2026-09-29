import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import StarRating from "../common/StarRating";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const stopAll = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const ProductCard = ({ product }) => {
  const { brand, name, image, rating, reviews, price, oldPrice, discount, badge } = product;
  const productSlug = product.slug ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const { toggleCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlistProduct = { ...product, slug: productSlug };
  const wishlisted = isWishlisted(wishlistProduct);

  return (
    <div className="group flex flex-col rounded-lg border border-navy-900/10 bg-white shadow-sm transition-shadow hover:shadow-md overflow-hidden">
      <div className="relative rounded-t-lg bg-white p-1.5 sm:p-4">
        {/* OFFER TAG: Flush to left-0, 4px from top, with Myntra-style diagonal slash on the right edge */}
        {badge && (
          <span
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 7px) 100%, 0 100%)" }}
            className="absolute left-0 top-[4px] z-20 bg-brand-orange pl-2 pr-3.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-sm pointer-events-none sm:top-[6px]"
          >
            {badge}
          </span>
        )}

        <Link to={`/product/${productSlug}`} className="block">
          <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-1 p-2 sm:p-3.5">
        <div>
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue">{brand}</p>
          <Link to={`/product/${productSlug}`} className="block mt-0.5">
            <h3 className="line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] text-xs sm:text-sm font-medium text-navy-900 leading-snug sm:leading-normal">{name}</h3>
          </Link>
        </div>
        <div>
          <StarRating rating={rating} reviews={reviews} />
          <div className="mt-1 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <span className="text-base sm:text-lg font-bold text-navy-950">£{typeof price === "number" ? price.toFixed(2) : price}</span>
            {oldPrice && <span className="text-[11px] sm:text-xs text-navy-900/40 line-through">£{typeof oldPrice === "number" ? oldPrice.toFixed(2) : oldPrice}</span>}
            {discount && <span className="text-[10px] sm:text-xs font-bold text-brand-orange-dark whitespace-nowrap">{discount}% off</span>}
          </div>
        </div>

        {/* Action Row: Wishlist & Cart placed where Compare used to be */}
        <div className="mt-1.5 flex items-center justify-between border-t border-navy-900/5 pt-1.5 sm:mt-2 sm:pt-2">
          {/* Wishlist Button */}
          <button
            type="button"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            onMouseDown={stopAll}
            onClick={(event) => {
              stopAll(event);
              toggleWishlist(wishlistProduct);
            }}
            className={`flex items-center gap-1 text-[11px] sm:text-xs font-medium transition-colors ${
              wishlisted
                ? "text-brand-orange font-semibold"
                : "text-navy-900/65 hover:text-brand-orange"
            }`}
          >
            <FiHeart size={13} className={wishlisted ? "fill-brand-orange text-brand-orange" : ""} />
            <span>{wishlisted ? "Saved" : "Wishlist"}</span>
          </button>

          {/* Cart Button */}
          <button
            type="button"
            aria-label={isInCart(product) ? "Already in cart" : "Add to cart"}
            onMouseDown={stopAll}
            onClick={(event) => {
              stopAll(event);
              toggleCart(product);
            }}
            className={`flex items-center gap-1 rounded px-2.5 py-1 text-[11px] sm:text-xs font-semibold transition-colors ${
              isInCart(product)
                ? "border border-emerald-300 bg-emerald-50 text-emerald-600"
                : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
            }`}
          >
            <FiShoppingCart size={12} />
            <span>{isInCart(product) ? "In Cart" : "Add"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;