import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import FlexpayBanner from "./FlexpayBanner";
import ColourSelector from "./ColourSelector";
import DeliveryPanel from "./DeliveryPanel";
import EssentialServices from "./EssentialServices";
import AccessoryUpsell from "./AccessoryUpsell";
import BreakdownSupport from "./BreakdownSupport";

const defaultColours = [
  { name: "Stainless Steel", swatchClass: "bg-gradient-to-br from-slate-200 via-slate-400 to-slate-500" },
  { name: "White", swatchClass: "bg-white" },
];

const ProductBuyBox = ({ product = {} }) => {
  const coloursList = Array.isArray(product.colours) && product.colours.length > 0 ? product.colours : defaultColours;
  const [selectedColour, setSelectedColour] = useState(coloursList[0]);

  const priceVal = typeof product.price === "number" ? product.price : parseFloat(product.price || 0);
  const oldPriceVal = typeof product.oldPrice === "number" ? product.oldPrice : (product.oldPrice ? parseFloat(product.oldPrice) : null);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-navy-950">
            £{priceVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
          </span>
          {oldPriceVal ? (
            <span className="text-lg text-navy-900/40 line-through">
              £{oldPriceVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
            </span>
          ) : null}
        </div>

        <p className="mt-5 max-w-xl leading-7 text-navy-900/70">{product.shortDescription || product.description || "Premium appliance built for modern living."}</p>
      </div>

      {product.flexpay && <FlexpayBanner flexpay={product.flexpay} />}

      <ColourSelector colours={coloursList} selectedColour={selectedColour} onSelect={setSelectedColour} />

      <div className="border-t border-navy-900/10 pt-5 text-sm text-brand-blue">
        <span className="font-semibold">{product.stockLabel || "In Stock - Ships within 48 hours"}</span>
      </div>

      <div className="grid gap-3">
        <Link
          to="/cart"
          className="inline-flex items-center justify-center gap-2 rounded bg-brand-blue hover:bg-black px-5 py-4 font-semibold text-white"
        >
          <FiShoppingCart />
          Add to Cart
        </Link>
        <button type="button" className="rounded border border-navy-900/15 bg-white hover:border-brand-blue hover:text-brand-blue px-5 py-4 font-semibold text-navy-900">
          Buy Now
        </button>
      </div>

      {product.delivery && <DeliveryPanel delivery={product.delivery} />}
      {product.essentialServices && <EssentialServices services={product.essentialServices} />}
      {product.accessories && <AccessoryUpsell accessories={product.accessories} />}
      {product.breakdownSupport && <BreakdownSupport support={product.breakdownSupport} />}
    </div>
  );
};

export default ProductBuyBox;