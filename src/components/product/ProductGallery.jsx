import { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import SliderArrow from "../common/SliderArrow";
import ProductHeader from "./ProductHeader";

const ProductGallery = ({ product, gallery, activeImageIndex, setActiveImageIndex }) => {
  const activeImage = gallery[activeImageIndex] ?? product.image;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product, setActiveImageIndex]);

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % gallery.length);
  };

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

        <div className="relative flex h-[420px] items-center justify-center lg:h-[520px]">
          {gallery.length > 1 ? (
            <SliderArrow
              direction="left"
              onClick={showPreviousImage}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}

          <img
            src={activeImage}
            alt={product.name}
            className="h-full max-h-[600px] max-w-[82%] object-contain transition duration-300"
          />

          {gallery.length > 1 ? (
            <SliderArrow
              direction="right"
              onClick={showNextImage}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}
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
            <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-35 w-35 object-cover" />
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