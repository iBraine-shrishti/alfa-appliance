import CartItemCheckbox from "./CartItemCheckbox";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";
import EssentialServices from "../product/EssentialServices";

const CartLineItem = ({ product, qty, checked, onToggle, onQtyChange, onRemove, onServicesChange }) => (
  <article className="grid gap-6 border-b border-navy-900/10 py-6 first:pt-0 lg:grid-cols-[24px_140px_1fr]">
    <CartItemCheckbox checked={checked} onChange={onToggle} label={`Include ${product.name} in total`} />

    <Link to={`/product/${product.slug}`} className="block">
      <img src={product.image} alt={product.name} className="h-auto w-full object-contain rounded lg:h-64 lg:object-cover" />
    </Link>

    <div>
      <Link to={`/product/${product.slug}`} className="block text-lg font-semibold text-navy-950 hover:text-brand-blue">{product.name}</Link>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <span className="text-navy-900/60">Quantity</span>
        <QuantitySelector qty={qty} onChange={onQtyChange} />
        <button type="button" onClick={onRemove} className="font-semibold text-brand-blue underline">
          Remove item
        </button>
        <button type="button" className="font-semibold text-brand-blue underline">
          Save for later
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-navy-950">£{product.price.toFixed(2)}</span>
            {product.savingAmount ? (
              <span className="text-sm font-semibold text-brand-blue">Save £{product.savingAmount.toFixed(2)}</span>
            ) : null}
          </div>
          {product.wasPriceNote && <p className="mt-1 text-xs text-navy-900/45">{product.wasPriceNote}</p>}
        </div>

        {/* <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">A</span>
          <button type="button" className="text-sm font-semibold text-brand-blue underline">
            Product fiche
          </button>
        </div> */}
      </div>

      <div className="mt-5"><EssentialServices deliveryPrice={product.price >= 399 ? 0 : 14.99} initialSelected={product.essentialServicesSelection} onSelectionChange={onServicesChange} /></div>
      <p className="mt-4 flex items-center justify-between border-t border-navy-900/10 pt-4 text-base font-bold text-navy-950">
        <span>Item subtotal</span>
        <span>£{((product.price + (product.essentialServicesSelection?.bundle ? 49 : (product.price >= 399 ? 0 : 14.99) + (product.essentialServicesSelection?.installation ? 29.99 : 0) + (product.essentialServicesSelection?.recycling ? 24.99 : 0))) * qty).toFixed(2)}</span>
      </p>
    </div>
  </article>
);

export default CartLineItem;
