import { FiX, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductRatingInline from "./ProductRatingInline";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const BundleDrawer = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >

      <div
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-5">
          <div>
            <h3 className="text-lg font-semibold text-navy-950">Buy a bundle</h3>
            <p className="mt-1 text-sm text-navy-900/60">Make it even better with a brilliant bundle.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bundle panel"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-navy-900/60 hover:bg-navy-900/5"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="flex flex-col divide-y divide-navy-900/8">
          {product.bundles.map((bundle, index) => {
            const total = product.price + bundle.addOn.price - bundle.saving;

            return (
              <div key={bundle.id} className="px-6 py-6">
                <p className="mb-3 inline-block rounded-full bg-navy-900/5 px-3 py-1 text-[11px] font-semibold text-navy-900/60">
                  Bundle {index + 1} of {product.bundles.length}
                </p>

                <div className="flex items-center gap-3">
                  <Link to={`/product/${product.slug}`} className="block shrink-0"><img src={product.image} alt={product.name} className="h-14 w-14 object-contain" /></Link>
                  <div className="min-w-0">
                    <Link to={`/product/${product.slug}`} className="block truncate text-sm font-semibold text-navy-950 hover:text-brand-blue">{product.name}</Link>
                    <ProductRatingInline average={product.ratingAverage} count={product.reviewCount} />
                    <p className="text-sm font-semibold text-navy-950">£{product.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="my-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink text-white">
                    <FiPlus size={14} />
                  </span>
                  <div className="h-px flex-1 bg-navy-900/8" />
                </div>

                <div className="flex items-center gap-3">
                  <Link to={`/product/${bundle.addOn.slug}`} className="block shrink-0"><img src={bundle.addOn.image} alt={bundle.addOn.name} className="h-14 w-14 object-contain" /></Link>
                  <div className="min-w-0">
                    <Link to={`/product/${bundle.addOn.slug}`} className="block truncate text-sm font-semibold text-navy-950 hover:text-brand-blue">{bundle.addOn.name}</Link>
                    <ProductRatingInline average={bundle.addOn.rating} count={bundle.addOn.reviewCount} />
                    <p className="text-sm font-semibold text-navy-950">£{bundle.addOn.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="text-sm">
                    <p className="font-semibold text-navy-950">Total: £{total.toFixed(2)}</p>
                    {bundle.saving > 0 && (
                      <p className="text-brand-pink">Total saving: £{bundle.saving.toFixed(2)}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => { addToCart(product); addToCart(bundle.addOn.product ?? bundle.addOn); onClose(); navigate("/cart"); }}
                    className="shrink-0 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Add bundle to basket
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BundleDrawer;
