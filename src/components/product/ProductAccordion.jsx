import { FiStar } from "react-icons/fi";
import AccordionItem from "./AccordionItem";
import ProductInfoContent from "./ProductInfoContent";
import ProductSpecsContent from "./ProductSpecsContent";
import ProductReviewsContent from "./ProductReviewsContent";
import DeliveryReturnsPanel from "./DeliveryReturnsPanel";
import ProductFeaturesSection from "../../components/product/ProductFeaturesSection";


const ReviewsSummaryBadge = ({ average, count }) => (
  <span className="flex items-center gap-1.5 text-sm text-navy-900/70">
    <span className="flex items-center gap-0.5 text-brand-blue">
      {Array.from({ length: 5 }, (_, index) => (
        <FiStar key={index} size={13} className={index < Math.round(average) ? "fill-amber-400 text-amber-400"     : "text-navy-900/15"} />
      ))}
    </span>
    <span className="font-medium text-navy-950">{average}/5</span>
    <span className="text-navy-900/45">{count.toLocaleString()} reviews</span>
  </span>
);

const ProductAccordion = ({ product }) => (
  <section className="mt-14">
    <div className="mx-auto flex max-w-7xl flex-col gap-4">

      <AccordionItem title="Product information">
        <ProductFeaturesSection product={product} />
        <ProductInfoContent product={product} />
      </AccordionItem>

      <AccordionItem title="Specifications">
        <ProductSpecsContent specs={product.specs} />
      </AccordionItem>

      <AccordionItem
        title="Reviews"
        rightContent={<ReviewsSummaryBadge average={product.ratingAverage} count={product.reviewCount} />}
      >
        <ProductReviewsContent product={product} />
      </AccordionItem>

      <AccordionItem title="Delivery & returns">
        <DeliveryReturnsPanel deliveryReturns={product.deliveryReturns} />
      </AccordionItem>
    </div>
  </section>
);

export default ProductAccordion;