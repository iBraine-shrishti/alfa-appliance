import ProductCard from "./ProductCard";

const ProductListRow = ({ product }) => {
  const productSlug = product.slug ?? product.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const reviewCount = Array.isArray(product.reviews)
    ? product.reviews.length
    : typeof product.reviews === "number"
    ? product.reviews
    : (product.reviewCount ?? product.reviewsCount ?? 0);
  const ratingVal = typeof product.rating === "number" ? product.rating.toFixed(1) : (product.rating || "4.5");

  return (
    <div className="flex gap-4 rounded-lg border border-navy-900/10 bg-white p-3 shadow-sm">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#ffffff] p-2">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{product.brand}</p>
        <h3 className="text-sm font-medium text-navy-900">{product.name}</h3>
        <div className="flex items-center gap-2 text-sm text-navy-900/60">
          <span>{ratingVal} ★</span>
          <span>({reviewCount} reviews)</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-navy-950">${product.price}</span>
          {product.oldPrice && <span className="text-sm text-navy-900/40 line-through">${product.oldPrice}</span>}
          {product.discount && <span className="text-xs font-semibold text-brand-orange-dark">{product.discount}% off</span>}
        </div>
      </div>
      <a href={`/product/${productSlug}`} className="inline-flex items-center self-center rounded bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:bg-black">
        View
      </a>
    </div>
  );
};

const ProductGrid = ({ products, viewMode = "grid" }) => {
  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <ProductListRow key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;