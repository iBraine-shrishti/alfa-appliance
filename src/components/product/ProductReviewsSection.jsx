import { useState } from "react";
import { FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";
import WriteReviewModal from "../review/WriteReviewModal";

const ProductReviewsSection = ({ product }) => {
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);
  const [selectedReviewAuthor, setSelectedReviewAuthor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [reviewsList, setReviewsList] = useState(product?.reviews || []);

  const handleAddReview = (newReview) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  const reviewsWithImages = reviewsList.filter((review) => review.image);
  const visibleReviews = reviewsList.slice(0, visibleReviewCount);
  const hasMoreReviews = visibleReviewCount < reviewsList.length;
  const selectedReview =
    reviewsList.find((review) => review.author === selectedReviewAuthor) ?? null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-navy-950">Ratings & Reviews</h2>

      <div className="mt-4 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-4">

          <div className="rounded-3xl border border-brand-blue/10 bg-brand-blue/5 p-5">
            <div className="text-4xl font-semibold text-navy-950">
              {product.ratingAverage}
            </div>
            <div className="mt-2 flex text-brand-blue">
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar key={index} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-2 text-sm text-navy-900/55">
              Total {reviewsList.length} reviews
            </p>

            <div className="mt-5 flex flex-col gap-2">
              {product.ratingBreakdown.map(({ star, count }) => {
                const pct = Math.round((count / (product.reviewCount || 1)) * 100);
                return (
                  <div
                    key={star}
                    className="flex items-center gap-2 text-xs text-navy-900/60"
                  >
                    <span className="w-10 shrink-0">{star} star</span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-900/10">
                      <span
                        className="block h-full rounded-full bg-brand-blue"
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="w-6 shrink-0 text-right">{count}</span>
                  </div>
                );
              })}
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

          <div className="mt-3 divide-y divide-navy-900/8">
            {visibleReviews.map((review, i) => (
              <div key={i} className="py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950">{review.author}</p>
                    <p className="text-xs text-navy-900/45">{review.time}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-navy-900/70">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </section>
  );
};

export default ProductReviewsSection;