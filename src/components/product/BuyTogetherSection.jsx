import { useState } from "react";
import { FiPlus, FiChevronRight, FiShoppingCart } from "react-icons/fi";
import ProductRatingInline from "./ProductRatingInline";
import BundleDrawer from "./BundleDrawer";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BuyTogetherSection = ({ product }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const firstBundle = product.bundles?.[0];
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!firstBundle) return null;

  const total = product.price + firstBundle.addOn.price - firstBundle.saving;
  const separateSellingPrice = product.price + firstBundle.addOn.price;

  return (
 <div className="mt-14 w-full bg-navy-900/5 py-10">
  <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="container-page rounded border border-navy-900/10 bg-white p-6 shadow-sm md:p-8">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-navy-950">Buy together and save</h2>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-navy-900 px-5 py-2.5 text-base font-semibold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
        >
          <FiPlus size={16} /> See all bundles <FiChevronRight size={16} />
        </button>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">

        <div className="flex flex-1 items-center gap-5 rounded border border-navy-900/10 bg-navy-900/[0.02] p-5">
          <Link to={`/product/${product.slug}`} className="block shrink-0">
            <img src={product.image} alt={product.name} className="h-50 w-50 object-cover md:h-28 md:w-28" />
          </Link>
          <div>
            <p className="text-sm font-semibold text-brand-blue">Currently viewing</p>
            <Link to={`/product/${product.slug}`} className="mt-1 block text-base font-bold text-navy-950 hover:text-brand-blue">{product.name}</Link>
            <div className="mt-1.5">
              <ProductRatingInline average={product.ratingAverage} count={product.reviewCount} />
            </div>
            <p className="mt-2 text-base font-bold text-navy-950">£{product.price.toFixed(2)}</p>
          </div>
        </div>

        <span className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white lg:mx-0">
          <FiPlus size={18} />
        </span>

        <div className="flex flex-1 items-center gap-5 rounded border border-navy-900/10 bg-navy-900/[0.02] p-5">
          <Link to={`/product/${firstBundle.addOn.slug}`} className="block shrink-0">
            <img src={firstBundle.addOn.image} alt={firstBundle.addOn.name} className="h-24 w-24 object-cover md:h-28 md:w-28" />
          </Link>
          <div>
            <Link to={`/product/${firstBundle.addOn.slug}`} className="text-base font-bold text-navy-950 hover:text-brand-blue">{firstBundle.addOn.name}</Link>
            <div className="mt-1.5">
              <ProductRatingInline average={firstBundle.addOn.rating} count={firstBundle.addOn.reviewCount} />
            </div>
            <p className="mt-2 text-base font-bold text-navy-950">£{firstBundle.addOn.price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-5 border-t border-navy-900/10 pt-5 lg:flex-row lg:items-center">
        <div className="text-base">
          <p className="flex items-center gap-2 text-lg font-bold text-navy-950">
            Total: <span className="text-xl">£{total.toFixed(2)}</span>
          </p>
          {firstBundle.saving > 0 && (
            <>
              <p className="mt-1 text-navy-900/70">
                Buy together & save <span className="font-bold text-brand-blue">£{firstBundle.saving.toFixed(2)}</span>
              </p>
              <p className="font-semibold text-brand-blue">Total saving: £{firstBundle.saving.toFixed(2)}</p>
            </>
          )}
          <p className="mt-1 text-sm text-navy-900/50">Separate selling price £{separateSellingPrice.toFixed(2)}</p>
        </div>

        <button
          type="button"
          onClick={() => { addToCart(product); addToCart(firstBundle.addOn.product ?? firstBundle.addOn); navigate("/cart"); }}
          className="flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-navy-950 px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-navy-900 transition-colors"
        >
          <FiShoppingCart size={18} /> Add bundle to basket
        </button>
      </div>
    </div>

    <BundleDrawer product={product} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
  </section>
</div>
  );
};

export default BuyTogetherSection;
