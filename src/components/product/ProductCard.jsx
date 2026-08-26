import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
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
    <div className="group flex flex-col rounded-lg border border-navy-900/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative bg-[#F1F1F199] p-6">
        {badge && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-orange px-2.5 py-1 text-[10px] font-semibold uppercase text-white">
            {badge}
          </span>
        )}
        <div className="absolute right-2 top-2 z-10 flex gap-2">
          <button
            type="button"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            onMouseDown={stopAll}
            onClick={(event) => {
              stopAll(event);
              toggleWishlist(wishlistProduct);
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors hover:text-brand-orange ${
              wishlisted ? "text-brand-orange" : "text-navy-900"
            }`}
          >
            <FiHeart size={15} className={wishlisted ? "fill-current" : ""} />
          </button>
          <button
            type="button"
            aria-label={isInCart(product) ? "Already in cart" : "Add to cart"}
            onMouseDown={stopAll}
            onClick={(event) => {
              stopAll(event);
              toggleCart(product);
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors hover:text-brand-blue ${
              isInCart(product) ? "text-emerald-600 ring-1 ring-emerald-200" : "text-navy-900"
            }`}
          >
            <FiShoppingCart size={15} />
          </button>
        </div>
        <Link to={`/product/${productSlug}`} className="block">
          <img
            src={image}
            alt={name}
            className="mx-auto aspect-square w-[100%] object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 pt-3 px-3 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{brand}</p>
        <Link to={`/product/${productSlug}`} className="block">
          <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium text-navy-900">{name}</h3>
        </Link>
        <StarRating rating={rating} reviews={reviews} />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-navy-950">${price}</span>
          {oldPrice && <span className="text-sm text-navy-900/40 line-through">${oldPrice}</span>}
          {discount && <span className="text-xs font-semibold text-brand-orange-dark">{discount}% off</span>}
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