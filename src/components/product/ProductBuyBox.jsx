import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
import FlexpayBanner from "./FlexpayBanner";
import ColourSelector from "./ColourSelector";
import DeliveryPanel from "./DeliveryPanel";
import EssentialServices from "./EssentialServices";
import AccessoryUpsell from "./AccessoryUpsell";
import BreakdownSupport from "./BreakdownSupport";

const ProductBuyBox = ({ product }) => {
  const [selectedColour, setSelectedColour] = useState(product.colours[0]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-navy-950">
            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
          {product.oldPrice ? (
            <span className="text-lg text-navy-900/40 line-through">
              ${product.oldPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          ) : null}
        </div>

        <p className="mt-5 max-w-xl leading-7 text-navy-900/70">{product.shortDescription}</p>
      </div>

      <FlexpayBanner flexpay={product.flexpay} />

      <ColourSelector colours={product.colours} selectedColour={selectedColour} onSelect={setSelectedColour} />

      <div className="border-t border-navy-900/10 pt-5 text-sm text-brand-blue">
        <span className="font-semibold">{product.stockLabel}</span>
      </div>

      <div className="grid gap-3">
        <Link
          to="/cart"
          className="inline-flex items-center justify-center gap-2 rounded bg-brand-blue px-5 py-4 font-semibold text-white"
        >
          <FiShoppingCart />
          Add to Cart
        </Link>
        <button type="button" className="rounded border border-navy-900/15 bg-white px-5 py-4 font-semibold text-navy-900">
          Buy Now
        </button>
      </div>

      <div className="flex items-center justify-between text-sm text-navy-900/70">
        <button type="button" className="flex items-center gap-2">
          <FiHeart /> Save for later
        </button>
        <button type="button" className="flex items-center gap-2">
          <FiShare2 /> Share
        </button>
      </div>

      <DeliveryPanel delivery={product.delivery} />
      <EssentialServices services={product.essentialServices} />
      <AccessoryUpsell accessories={product.accessories} />
      <BreakdownSupport support={product.breakdownSupport} />
    </div>
  );
};

export default ProductBuyBox;