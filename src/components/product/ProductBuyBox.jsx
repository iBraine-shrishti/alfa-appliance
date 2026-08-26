import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
import AccessoryUpsell from "./AccessoryUpsell";
import EssentialServices from "./EssentialServices";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductBuyBox = ({ product }) => {
  const [selectedServices, setSelectedServices] = useState({ bundle: false, installation: false, recycling: false });
  const { toggleCart, isInCart } = useCart();
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const deliveryPrice = product.price >= 399 ? 0 : 14.99;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-navy-950">&pound;{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          {product.oldPrice ? <span className="text-lg text-navy-900/40 line-through">&pound;{product.oldPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span> : null}
        </div>
        {product.discount ? <p className="mt-1 text-sm font-semibold text-brand-orange">{product.discount}% off</p> : null}
        <p className={`mt-4 inline-flex rounded px-3 py-2 text-sm font-semibold ${product.coreLine ? "bg-emerald-50 text-emerald-700" : "bg-navy-900/5 text-navy-900/55"}`}>
          Click &amp; Collect: {product.coreLine ? "Available" : "Not Available"}
        </p>
      </div>

      <div>
        <EssentialServices compact deliveryPrice={deliveryPrice} onSelectionChange={setSelectedServices} />
        <button type="button" className="mt-3 text-sm font-semibold text-brand-blue underline">Check delivery availability for your postcode</button>
      </div>

      <div className="grid gap-3">
        <button type="button" onClick={() => toggleCart({ ...product, essentialServicesSelection: selectedServices })} className={`inline-flex items-center justify-center gap-2 rounded px-5 py-4 font-semibold text-white ${isInCart(product) ? "bg-emerald-600 hover:bg-emerald-700" : "bg-brand-blue hover:bg-black"}`}><FiShoppingCart />{isInCart(product) ? "Remove from Cart" : "Add to Cart"}</button>
        <button type="button" onClick={() => { if (!isInCart(product)) toggleCart({ ...product, essentialServicesSelection: selectedServices }); navigate("/checkout/delivery"); }} className="rounded border border-navy-900/15 bg-white px-5 py-4 font-semibold text-navy-900 hover:border-brand-blue hover:text-brand-blue">Buy Now</button>
      </div>

      <div className="flex items-center justify-between text-sm text-navy-900/70">
        <button type="button" onClick={() => toggleWishlist(product)} className={`flex items-center gap-2 ${isWishlisted(product) ? "text-brand-orange" : ""}`}><FiHeart /> {isWishlisted(product) ? "Saved" : "Save for later"}</button>
        <button type="button" className="flex items-center gap-2"><FiShare2 /> Share</button>
      </div>

      <AccessoryUpsell accessories={product.accessories} />
      <div className="mt-2 flex items-center justify-between rounded border border-brand-blue/20 bg-brand-blue/5 px-5 py-4">
        <span className="text-base font-bold text-navy-950">Order total</span>
        <span className="text-2xl font-bold text-brand-blue">&pound;{product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductBuyBox;
