import { useMemo } from "react";

const ProductInfoContent = ({ product = {} }) => {
  const rows = [
    ["Category", product.category_name || (typeof product.category === "string" ? product.category : "Home Appliances")],
    ["Brand", product.brand_name || product.brand || "Alfa Appliances"],
    ["Type", product.appliance_type || "Freestanding Appliance"],
    ["Color / Finish", product.color || product.finish || "Standard Finish"],
    ["Warranty", product.warranty || "2 Years Manufacturer Guarantee"],
    ["Dimensions", product.dimensions || "Standard Domestic Dimensions"],
    ["Capacity", product.capacity || "Standard Volume"],
    ["Department", "Home Appliances"],
  ];

  const cleanDescription = useMemo(() => {
    const content =
      product.rawLongDescription ||
      product.long_description ||
      product.longDescription ||
      "";
    if (!content) return "";
    // Clean relative media URLs to backend domain
    return content.replace(
      /src=["'](\/media\/[^"']+)["']/g,
      'src="https://alfa-appliances-backend.onrender.com$1"'
    );
  }, [product]);

  const hasRichDescription = Boolean(cleanDescription && cleanDescription.trim());

  return (
    <div className="space-y-6">
      {/* 1. Quick Key Specs Overview Table */}
      <div className="overflow-hidden rounded-lg border border-navy-900/10 bg-slate-50/50 p-4">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          Key Product Information
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <span className="text-xs text-navy-900/60 font-medium">{label}</span>
              <span className="font-semibold text-navy-950 mt-0.5">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Full Big Description (with rich HTML, images, diagrams, badges, and specs tables as saved in Admin) */}
      {hasRichDescription ? (
        <div className="border-t border-navy-900/10 pt-6">
          <div
            className="rich-product-description"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </div>
      ) : product.description ? (
        <div className="border-t border-navy-900/10 pt-4 text-sm leading-relaxed text-navy-900/80">
          <p>{product.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProductInfoContent;