import { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import SliderArrow from "../common/SliderArrow";
import ProductHeader from "./ProductHeader";

const ProductGallery = ({ product = {}, gallery = [], activeImageIndex = 0, setActiveImageIndex }) => {
  const activeImage = (gallery && gallery.length > 0) ? (gallery[activeImageIndex] ?? product.image) : product.image;
  const badgesList = Array.isArray(product.badges) ? product.badges : ["NEW RELEASE"];

  useEffect(() => {
    if (setActiveImageIndex) {
      setActiveImageIndex(0);
    }
  }, [product, setActiveImageIndex]);

  const showPreviousImage = () => {
    if (gallery.length > 0) {
      setActiveImageIndex((currentIndex) => (currentIndex - 1 + gallery.length) % gallery.length);
    }
  };

  const showNextImage = () => {
    if (gallery.length > 0) {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % gallery.length);
    }
  };

  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <ProductHeader product={product} />

      <div className="relative overflow-hidden rounded border border-navy-900/10 bg-white p-5 shadow-sm">
        <div className="absolute left-4 top-4 flex flex-col items-start gap-2 z-10">
          {product.discountBadge ? (
            <span className="rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold text-white">
              {product.discountBadge}
            </span>
          ) : null}
          {badgesList.map((badge) => (
            <span key={badge} className="rounded-full bg-navy-900/10 px-3 py-1 text-[11px] font-semibold text-navy-900">
              {badge}
            </span>
          ))}
        </div>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 shadow-sm"
        >
          <FiHeart />
        </button>

        <div className="relative flex h-[420px] items-center justify-center lg:h-[520px]">
          {gallery && gallery.length > 1 ? (
            <SliderArrow
              direction="left"
              onClick={showPreviousImage}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}

          <img
            src={activeImage || "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80"}
            alt={product.name || product.title || "Appliance Product"}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80";
            }}
            className="h-full max-h-[600px] max-w-[82%] object-contain transition duration-300"
          />

          {gallery && gallery.length > 1 ? (
            <SliderArrow
              direction="right"
              onClick={showNextImage}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}
        </div>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImageIndex && setActiveImageIndex(index)}
              className={`relative shrink-0 overflow-hidden rounded border bg-white p-1 transition ${
                activeImageIndex === index ? "border-brand-blue ring-2 ring-brand-blue/15" : "border-navy-900/10"
              }`}
              aria-label={`Show image ${index + 1}`}
            >
              <img 
                src={image} 
                alt={`${product.name || "Product"} thumbnail ${index + 1}`} 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80";
                }}
                className="h-20 w-20 object-cover" 
              />
            </button>
          ))}
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <p className="mt-2 text-center text-xs text-navy-900/45 lg:text-left">
          {activeImageIndex + 1} / {gallery.length}
        </p>
      )}
    </div>
  );
};

export default ProductGallery;