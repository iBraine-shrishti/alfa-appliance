import { FiStar, FiCheck, FiTrash2, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const WishlistItemCard = ({ product, isSelected, onToggleSelect, onRemove }) => {
  const { toggleCart, isInCart } = useCart();
  return (
    <article
      className={`relative flex flex-col gap-5 rounded border p-5 transition-all sm:flex-row sm:items-center sm:justify-between ${
        isSelected
          ? "border-brand-blue bg-white shadow-md ring-1 ring-amber-400/30"
          : "border-slate-200 bg-white/70 opacity-85 hover:opacity-100"
      }`}
    >
      <div className="flex items-start gap-4 sm:items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(product.id)}
          className="mt-1.5 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500 sm:mt-0"
        />

        <Link to={`/product/${product.slug}`} className="relative flex h-50 w-50 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
        </Link>

        <div className="space-y-1">
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
            {product.category}
          </span>
          <Link to={`/product/${product.slug}`} className="text-base font-bold text-slate-900 hover:text-brand-blue">{product.name}</Link>
          <p className="text-xs text-slate-400">SKU: {product.sku}</p>

          <div className="flex items-center gap-1 text-xs">
            <FiStar className="fill-amber-400 text-amber-400" size={13} />
            <span className="font-bold text-slate-900">{product.rating}</span>
            <span className="text-slate-400">({product.reviewsCount})</span>
          </div>

          <div className="pt-1">
            {product.inStock ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <FiCheck size={12} /> In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
        <div className="text-left sm:text-right">
          <div className="flex items-baseline gap-2 sm:justify-end">
            <span className="text-xl font-bold text-slate-950">
              £{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <p className="text-xs font-semibold text-emerald-600">
              Save £{(product.originalPrice - product.price).toFixed(2)}
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
            title="Remove from wishlist"
          >
            <FiTrash2 size={16} />
          </button>

          <button
            type="button"
            disabled={product.inStock === false}
            onClick={() => toggleCart(product)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all shadow-sm ${
              product.inStock !== false
                ? "bg-slate-900 text-white hover:bg-brand-blue"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            <FiShoppingCart size={14} /> {isInCart(product) ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default WishlistItemCard;
