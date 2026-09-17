import { useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import SliderArrow from "../common/SliderArrow";
import ProductHeader from "./ProductHeader";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { isVideoUrl, getMediaThumbnail } from "../../services/api";

const ProductGallery = ({ product = {}, gallery = [], activeImageIndex = 0, setActiveImageIndex }) => {
  const currentGallery =
    Array.isArray(gallery) && gallery.length > 0
      ? gallery
      : product?.image
      ? [product.image]
      : [];

  const safeIndex =
    activeImageIndex >= 0 && activeImageIndex < currentGallery.length ? activeImageIndex : 0;
  const activeMedia = currentGallery[safeIndex] || product?.image || "";
  const isVideo = isVideoUrl(activeMedia);

  const { toggleWishlist, isWishlisted } = useWishlist();
  const { toggleCart, isInCart } = useCart();

  useEffect(() => {
    if (typeof setActiveImageIndex === "function") {
      setActiveImageIndex(0);
    }
  }, [product?.id, setActiveImageIndex]);

  const showPreviousImage = () => {
    if (!currentGallery.length || typeof setActiveImageIndex !== "function") return;
    setActiveImageIndex((currentIndex) => (currentIndex - 1 + currentGallery.length) % currentGallery.length);
  };

  const showNextImage = () => {
    if (!currentGallery.length || typeof setActiveImageIndex !== "function") return;
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % currentGallery.length);
  };

  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <ProductHeader product={product} />

      <div className="relative overflow-hidden rounded border border-navy-900/10 bg-white p-5 shadow-sm">
        <div className="absolute left-4 top-4 flex flex-col items-start gap-2 z-10">
          {product.isNewRelease ? (
            <span className="rounded-full bg-brand-blue px-3 py-1 text-[11px] font-semibold text-white">
              New Release
            </span>
          ) : null}
          {(product.badges || []).filter((badge) => badge.toLowerCase() !== "new release").map((badge) => (
            <span key={badge} className="rounded-full bg-navy-900/10 px-3 py-1 text-[11px] font-semibold text-navy-900">
              {badge}
            </span>
          ))}
        </div>

        {/* <div className="absolute right-4 top-4 flex gap-2">
          <button
            type="button"
            aria-label={isWishlisted(product) ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => toggleWishlist(product)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm ${isWishlisted(product) ? "text-brand-orange" : "text-navy-900"}`}
          >
            <FiHeart />
          </button>
          <button
            type="button"
            aria-label={isInCart(product) ? "Remove from cart" : "Add to cart"}
            onClick={() => toggleCart(product)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm ${isInCart(product) ? "text-emerald-600 ring-1 ring-emerald-200" : "text-navy-900"}`}
          >
            <FiShoppingCart />
          </button>
        </div> */}

        <div className="relative flex h-[420px] items-center justify-center lg:h-[520px]">
          {currentGallery.length > 1 ? (
            <SliderArrow
              direction="left"
              onClick={showPreviousImage}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}

          {isVideo ? (
            <video
              key={activeMedia}
              src={activeMedia}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-full max-h-[600px] max-w-[82%] object-contain rounded"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={activeMedia}
              src={activeMedia}
              alt={product?.name || "Product image"}
              className="h-full max-h-[600px] max-w-[82%] object-contain transition duration-300"
              onError={(e) => {
                if (product?.image && e.target.src !== product.image) {
                  e.target.src = product.image;
                }
              }}
            />
          )}

          {currentGallery.length > 1 ? (
            <SliderArrow
              direction="right"
              onClick={showNextImage}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
            />
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {currentGallery.map((item, index) => {
          const isItemVideo = isVideoUrl(item);
          const thumbSrc = isItemVideo ? getMediaThumbnail(item) : item;
          return (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => typeof setActiveImageIndex === "function" && setActiveImageIndex(index)}
              className={`relative shrink-0 overflow-hidden rounded border bg-white p-1 transition ${
                safeIndex === index ? "border-brand-blue ring-2 ring-brand-blue/15" : "border-navy-900/10"
              }`}
              aria-label={`Show ${isItemVideo ? "video" : "image"} ${index + 1}`}
            >
              <img
                src={thumbSrc}
                alt={`${product?.name || "Product"} thumbnail ${index + 1}`}
                className="h-35 w-35 object-contain"
                onError={(e) => {
                  if (product?.image && e.target.src !== product.image) {
                    e.target.src = product.image;
                  }
                }}
              />
              {isItemVideo && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow">
                    <svg className="ml-0.5 h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-center text-xs text-navy-900/45 lg:text-left">
        {currentGallery.length > 0 ? `${safeIndex + 1} / ${currentGallery.length}` : ""}
      </p>

      {(product?.colours || []).length > 1 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Colour</p>
          <div className="mt-3 flex items-center gap-3">
            {(product.colours || []).map((colour) => (
              <Link
                key={colour.name}
                to={colour.href || "#"}
                aria-label={`View ${colour.name}`}
                className="h-9 w-9 rounded-full border-2 border-navy-900/20 p-0.5"
              >
                <span className={`block h-full w-full rounded-full ${colour.swatchClass}`} />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductGallery;
