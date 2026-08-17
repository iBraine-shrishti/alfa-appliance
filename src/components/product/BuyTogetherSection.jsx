import { useState } from "react";
import { FiPlus, FiChevronRight, FiShoppingCart } from "react-icons/fi";
import ProductRatingInline from "./ProductRatingInline";
import BundleDrawer from "./BundleDrawer";

const BuyTogetherSection = ({ product }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const firstBundle = product.bundles?.[0];

  if (!firstBundle) return null;

  const total = product.price + firstBundle.addOn.price - firstBundle.saving;
  const separateSellingPrice = product.price + firstBundle.addOn.price;

  return (
    <section className="mt-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-navy-950">Buy together and save</h2>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-1 rounded-full border border-brand-pink px-4 py-2 text-sm font-semibold text-brand-pink"
        >
          <FiPlus size={14} /> See all bundles <FiChevronRight size={14} />
        </button>
      </div>

      <div className="mt-4 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center gap-4 rounded border border-navy-900/10 bg-white p-4">
          <img src={product.image} alt={product.name} className="h-20 w-20 shrink-0 object-contain" />
          <div>
            <p className="text-xs font-semibold text-brand-blue">Currently viewing</p>
            <p className="mt-1 font-semibold text-navy-950">{product.name}</p>
            <div className="mt-1">
              <ProductRatingInline average={product.ratingAverage} count={product.reviewCount} />
            </div>
            <p className="mt-1 font-semibold text-navy-950">£{product.price.toFixed(2)}</p>
          </div>
        </div>

        <span className="mx-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-pink text-white lg:mx-0">
          <FiPlus />
        </span>

        <div className="flex flex-1 items-center gap-4 rounded border border-navy-900/10 bg-white p-4">
          <img src={firstBundle.addOn.image} alt={firstBundle.addOn.name} className="h-20 w-20 shrink-0 object-contain" />
          <div>
            <p className="font-semibold text-navy-950">{firstBundle.addOn.name}</p>
            <div className="mt-1">
              <ProductRatingInline average={firstBundle.addOn.rating} count={firstBundle.addOn.reviewCount} />
            </div>
            <p className="mt-1 font-semibold text-navy-950">£{firstBundle.addOn.price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div className="text-sm">
          <p className="flex items-center gap-2 text-base font-semibold text-navy-950">
            Total: <span>£{total.toFixed(2)}</span>
          </p>
          {firstBundle.saving > 0 && (
            <>
              <p className="mt-1 text-navy-900/70">
                Buy together & save <span className="font-semibold text-brand-pink">£{firstBundle.saving.toFixed(2)}</span>
              </p>
              <p className="text-brand-pink">Total saving: £{firstBundle.saving.toFixed(2)}</p>
            </>
          )}
          <p className="text-navy-900/45">Separate selling price £{separateSellingPrice.toFixed(2)}</p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-full border border-brand-blue px-6 py-3 font-semibold text-brand-blue"
        >
          <FiShoppingCart /> Add bundle to basket
        </button>
      </div>

      <BundleDrawer product={product} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </section>
  );
};

export default BuyTogetherSection;