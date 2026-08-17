import { FiStar } from "react-icons/fi";

const ProductRating = ({ average, count, size = "text-sm" }) => (
  <div className={`flex items-center gap-2 text-brand-blue ${size}`}>
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FiStar key={index} className={index < Math.round(average) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
      ))}
    </div>
    <span className="font-semibold">
      {average}/5 ({count} reviews)
    </span>
  </div>
);

export default ProductRating;
