import { useState } from "react";
import { FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";

const ProductReviewsSection = ({ product }) => {
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);
  const [selectedReviewAuthor, setSelectedReviewAuthor] = useState(null);

  const reviewsWithImages = product.reviews.filter((review) => review.image);
  const visibleReviews = product.reviews.slice(0, visibleReviewCount);
  const hasMoreReviews = visibleReviewCount < product.reviews.length;
  const selectedReview = product.reviews.find((review) => review.author === selectedReviewAuthor) ?? null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-navy-950">Ratings & Reviews</h2>
      <div className="mt-4 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-brand-blue/10 bg-brand-blue/5 p-5">
            <div className="text-4xl font-semibold text-navy-950">{product.ratingAverage}</div>
            <div className="mt-2 flex text-brand-blue">
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar key={index} className="fill-brand-blue text-brand-blue" />
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
                      <FiStar key={index} size={13} className={index < Math.round(item.score) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-navy-900/60">{item.score.toFixed(1)}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full rounded-2xl border border-brand-blue/30 px-4 py-3 font-semibold text-brand-blue">
            WRITE A PRODUCT REVIEW
          </button>
        </div>

        <div>
          {reviewsWithImages.length > 0 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Review with images</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {reviewsWithImages.map((review) => (
                  <button
                    key={review.author}
                    type="button"
                    onClick={() => setSelectedReviewAuthor((current) => (current === review.author ? null : review.author))}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border bg-white transition ${
                      selectedReviewAuthor === review.author ? "border-brand-blue ring-2 ring-brand-blue/20" : "border-navy-900/10 hover:border-brand-blue"
                    }`}
                  >
                    <img src={review.image} alt={`Review photo by ${review.author}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              {selectedReview && (
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-brand-blue/5 p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                    {selectedReview.author[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-navy-950">{selectedReview.author}</p>
                    <p className="text-xs text-navy-900/45">{selectedReview.time}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 text-brand-blue">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FiStar key={index} size={13} className={index < (selectedReview.rating ?? 5) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Top Reviews</p>
          <div className="mt-3 divide-y divide-navy-900/8">
            {visibleReviews.map((review) => (
              <div key={review.author} className={`py-4 first:pt-0 transition-colors ${selectedReviewAuthor === review.author ? "rounded-2xl bg-brand-blue/5 px-3" : ""}`}>
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
                    <FiStar key={index} size={13} className={index < (review.rating ?? 5) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-6 text-navy-900/70">{review.text}</p>
                {review.image && <img src={review.image} alt={`Photo from ${review.author}`} className="mt-3 h-16 w-16 rounded-xl border border-navy-900/10 object-cover" />}
              </div>
            ))}
          </div>

          {hasMoreReviews ? (
            <button
              type="button"
              onClick={() => setVisibleReviewCount((count) => count + 3)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-navy-900/15 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              View More Reviews <FiChevronDown size={16} />
            </button>
          ) : (
            product.reviews.length > 3 && (
              <button
                type="button"
                onClick={() => setVisibleReviewCount(3)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-navy-900/15 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                View Less <FiChevronUp size={16} />
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsSection;