import { useState } from "react";
import { FiStar, FiX } from "react-icons/fi";
import WriteReviewModal from "../review/WriteReviewModal";

const REVIEWS_PER_PAGE = 10;

const ProductReviewsContent = ({ product }) => {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [selectedReviewAuthor, setSelectedReviewAuthor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isRemainingImagesOpen, setIsRemainingImagesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState(product.reviews || []);

  const reviewsWithImages = reviewsList.filter((review) => review.image);
  const visibleReviewImages = reviewsWithImages.slice(0, 5);
  const remainingReviewImageCount = reviewsWithImages.length - visibleReviewImages.length;
  const totalReviewPages = Math.max(1, Math.ceil(reviewsList.length / REVIEWS_PER_PAGE));
  const visibleReviews = reviewsList.slice(
    (currentReviewPage - 1) * REVIEWS_PER_PAGE,
    currentReviewPage * REVIEWS_PER_PAGE,
  );
  const selectedReview = reviewsList.find((review) => review.author === selectedReviewAuthor) ?? null;

  const handleAddReview = (newReview) => {
    setReviewsList((previousReviews) => [newReview, ...previousReviews]);
    setCurrentReviewPage(1);
  };

  const pageNumbers = totalReviewPages <= 5
    ? Array.from({ length: totalReviewPages }, (_, index) => index + 1)
    : [1, 2, 3, "ellipsis", totalReviewPages];

  const handleOpenImage = (image, author) => {
    setSelectedReviewAuthor(author);
    setSelectedImage({ image, author });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="flex flex-col gap-4">
        <div className="rounded border border-brand-blue/10 bg-brand-blue/5 p-5">
          <div className="text-4xl font-semibold text-navy-950">{product.ratingAverage}</div>
          <div className="mt-2 flex text-brand-blue">
            {Array.from({ length: 5 }, (_, index) => (
              <FiStar key={index} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-2 text-sm text-navy-900/55">Total {product.reviewCount} reviews</p>

          <div className="mt-5 flex flex-col gap-2">
            {product.ratingBreakdown.map(({ star, count }) => {
              const pct = Math.round((count / product.reviewCount) * 100);
              return (
                <div key={star} className="flex items-center gap-2 text-xs text-navy-900/60">
                  <span className="w-10 shrink-0">{star} star</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-900/10">
                    <span className="block h-full rounded-full bg-brand-blue" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="w-6 shrink-0 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-brand-blue/10 bg-brand-blue/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">By Feature</p>
          <div className="mt-3 flex flex-col gap-3">
            {product.featureRatings.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-navy-900/70">{item.label}</span>
                <span className="flex items-center gap-1 text-brand-blue">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FiStar key={index} size={13} className={index < Math.round(item.score) ?"fill-amber-400 text-amber-400"
      : "text-navy-900/15"} />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-navy-900/60">{item.score.toFixed(1)}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full rounded border border-brand-blue/30 px-4 py-3 font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
        >
          WRITE A PRODUCT REVIEW
        </button>
      </div>

      <div>
        {reviewsWithImages.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Review with images</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {visibleReviewImages.map((review) => (
                <button
                  key={review.author}
                  type="button"
                  onClick={() => handleOpenImage(review.image, review.author)}
                  className={`h-25 w-25 shrink-0 overflow-hidden rounded border bg-white transition ${
                    selectedReviewAuthor === review.author ? "border-brand-blue ring-2 ring-brand-blue/20" : "border-navy-900/10 hover:border-brand-blue"
                  }`}
                >
                  <img
                    src={review.image}
                    alt={`Review photo by ${review.author}`}
                    className="h-full w-full cursor-zoom-in object-cover"
                  />
                </button>
              ))}
              {remainingReviewImageCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsRemainingImagesOpen(true)}
                  aria-label={`Open ${remainingReviewImageCount} more review photos`}
                  className="flex h-25 w-25 shrink-0 items-center justify-center rounded border border-navy-900/10 bg-navy-900/5 text-lg font-bold text-navy-950 transition-colors hover:border-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue"
                >
                  +{remainingReviewImageCount}
                </button>
              )}
            </div>

            {selectedReview && (
              <div className="mt-3 flex items-center gap-3 rounded border border-brand-blue/15 bg-brand-blue/5 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                  {selectedReview.author[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-navy-950">{selectedReview.author}</p>
                  <p className="text-xs text-navy-900/45">{selectedReview.time}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1 text-brand-blue">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FiStar key={index} size={13} className={index < (selectedReview.rating ?? 5) ?"fill-amber-400 text-amber-400"
      : "text-navy-900/15"} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Top Reviews</p>
        <div className="mt-3 divide-y divide-navy-900/8">
          {visibleReviews.map((review) => (
            <div key={review.author} className={`py-4 first:pt-0 transition-colors ${selectedReviewAuthor === review.author ? "rounded bg-brand-blue/5 px-3" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-navy-950">{review.author}</p>
                  <p className="text-xs text-navy-900/45">{review.time}</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-brand-blue">
                {Array.from({ length: 5 }, (_, index) => (
                  <FiStar key={index} size={13} className={index < (review.rating ?? 5) ?"fill-amber-400 text-amber-400"
      : "text-navy-900/15"} />
                ))}
              </div>
              <p className="mt-2 text-sm leading-6 text-navy-900/70">{review.text}</p>
              {review.image && (
                <button
                  type="button"
                  onClick={() => handleOpenImage(review.image, review.author)}
                  className="mt-3 block h-25 w-25 cursor-zoom-in overflow-hidden rounded border border-navy-900/10"
                  aria-label={`Open photo from ${review.author}`}
                >
                  <img src={review.image} alt={`Photo from ${review.author}`} className="h-full w-full object-cover" />
                </button>
              )}
            </div>
          ))}
        </div>

        {totalReviewPages > 1 && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {pageNumbers.map((page, index) => (
              page === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-1 text-sm text-navy-900/45">...</span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentReviewPage(page)}
                  aria-current={currentReviewPage === page ? "page" : undefined}
                  className={`flex h-9 min-w-9 items-center justify-center rounded border px-3 text-sm font-semibold transition-colors ${
                    currentReviewPage === page
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-navy-900/15 text-navy-900 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {page}
                </button>
              )
            ))}
          </div>
        )}
      </div>

      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />

      {isRemainingImagesOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsRemainingImagesOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsRemainingImagesOpen(false)}
              aria-label="Close remaining review photos"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-950 shadow-md transition-colors hover:bg-navy-950 hover:text-white"
            >
              <FiX size={20} />
            </button>
            <h3 className="pr-12 text-lg font-bold text-navy-950">More review photos</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {reviewsWithImages.slice(5).map((review) => (
                <button
                  key={review.author}
                  type="button"
                  onClick={() => handleOpenImage(review.image, review.author)}
                  className="aspect-square overflow-hidden rounded-lg border border-navy-900/10 bg-navy-900/5 hover:border-brand-blue"
                  aria-label={`Open photo from ${review.author}`}
                >
                  <img src={review.image} alt={`Review photo by ${review.author}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label={`Close photo from ${selectedImage.author}`}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-950 shadow-md transition-colors hover:bg-navy-950 hover:text-white"
            >
              <FiX size={20} />
            </button>
            <img
              src={selectedImage.image}
              alt={`Review photo by ${selectedImage.author}`}
              className="max-h-[calc(90vh-1rem)] max-w-[calc(90vw-1rem)] rounded object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReviewsContent;