import { FiStar } from "react-icons/fi";

const ProductRatingInline = ({ average, count }) => (
  <div className="flex items-center gap-1 text-brand-blue">
    {Array.from({ length: 5 }, (_, index) => (
      <FiStar key={index} size={12} className={index < Math.round(average) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
    ))}
    <span className="ml-1 text-xs text-navy-900/55">
      {average}/5 {count ? `${count} reviews` : ""}
    </span>
  </div>
);

export default ProductRatingInline;