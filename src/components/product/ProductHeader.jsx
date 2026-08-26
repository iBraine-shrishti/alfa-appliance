const ProductHeader = ({ product }) => (
  <div className="mb-6">
    {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900/45">{product.categoryLabel}</p> */}
    <h1 className="mt-2 text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">{product.name}</h1>
    <p className="mt-3 text-sm text-navy-900/65">
      Dimensions: {product.dimensions || product.specs?.find((spec) => spec.label.startsWith("Dimensions"))?.value || "Not specified"}
    </p>
  </div>
);

export default ProductHeader;