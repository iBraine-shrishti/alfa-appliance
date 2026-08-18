import { FiStar } from "react-icons/fi";

const ProductRating = ({ average, count, size = "text-sm" }) => (
  <div className={`flex items-center gap-2 ${size}`}>
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FiStar
          key={index}
          className={
            index < Math.round(average)
              ? "fill-amber-400 text-amber-400"
              : "text-navy-900/15"
          }
        />
      ))}
    </div>
    <span className="font-semibold text-brand-blue">
      {average}/5 ({count} reviews)
    </span>
  </div>
);

export default ProductRating;
