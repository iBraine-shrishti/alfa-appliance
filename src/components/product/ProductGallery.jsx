import { FiHeart } from "react-icons/fi";
import ProductHeader from "./ProductHeader";

const ProductGallery = ({ product, gallery, activeImageIndex, setActiveImageIndex }) => {
  const activeImage = gallery[activeImageIndex] ?? product.image;

  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <ProductHeader product={product} />

      <div className="relative overflow-hidden rounded border border-navy-900/10 bg-white p-5 shadow-sm">
        <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
          {product.discountBadge ? (
            <span className="rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold text-white">
              {product.discountBadge}
            </span>
          ) : null}
          {product.badges.map((badge) => (
            <span key={badge} className="rounded-full bg-navy-900/10 px-3 py-1 text-[11px] font-semibold text-navy-900">
              {badge}
            </span>
          ))}
        </div>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 shadow-sm"
        >
          <FiHeart />
        </button>

        <div className="flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
          <img src={activeImage} alt={product.name} className="max-h-[600px] w-full object-contain transition duration-300" />
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {gallery.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImageIndex(index)}
            className={`relative shrink-0 overflow-hidden rounded border bg-white p-1 transition ${
              activeImageIndex === index ? "border-brand-blue ring-2 ring-brand-blue/15" : "border-navy-900/10"
            }`}
            aria-label={`Show image ${index + 1}`}
          >
            <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-16 w-16 object-contain" />
          </button>
        ))}
      </div>

      <p className="mt-2 text-center text-xs text-navy-900/45 lg:text-left">
        {activeImageIndex + 1} / {gallery.length}
      </p>
    </div>
  );
};

export default ProductGallery;