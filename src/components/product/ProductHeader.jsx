import ProductRating from "./ProductRating";

const ProductHeader = ({ product }) => (
  <div className="mb-6">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900/45">{product.categoryLabel}</p>
    <h1 className="mt-2 text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">{product.name}</h1>
    <div className="mt-3">
      <ProductRating average={product.ratingAverage} count={product.reviewCount} />
    </div>
  </div>
);

export default ProductHeader;