import { FaStar } from "react-icons/fa";

const StarRating = ({ rating = 0, reviews = 0 }) => {
  const numRating = typeof rating === "number" ? rating : parseFloat(rating) || 0;
  const reviewCount = Array.isArray(reviews)
    ? reviews.length
    : typeof reviews === "number"
    ? reviews
    : 0;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-star">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(numRating) ? "text-star" : "text-navy-900/15"}
            size={12}
          />
        ))}
      </div>
      <span className="text-xs text-navy-900/60">
        {numRating.toFixed(1)} ({reviewCount})
      </span>
    </div>
  );
};

export default StarRating;