import { Link } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import { findProductBySlug } from "../data/productCatalog";

const cartItems = [
  { slug: "pro-series-smart-refrigerator", qty: 1 },
  { slug: "precision-induction-cooktop-30", qty: 1 },
];

const CartPage = () => {
  const items = cartItems.map((item) => ({ ...item, product: findProductBySlug(item.slug) ?? findProductBySlug("470l-frost-free-refrigerator") }));
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div >
      <CheckoutHeader actionLabel="Your Cart" />
      <main className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section>
            <div className="mb-5 flex items-end justify-between border-b border-navy-900/10 pb-4">
              <h1 className="text-3xl font-semibold text-navy-950">Your Cart</h1>
              <span className="text-sm text-navy-900/55">{items.length} items</span>
            </div>

            <div className="space-y-4">
              {items.map(({ product, qty }) => (
                <article key={product.slug} className="grid gap-4 rounded-3xl border border-navy-900/10 bg-white p-4 sm:grid-cols-[200px_1fr]">
                  <img src={product.image} alt={product.name} className="h-48 w-full rounded object-cover" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-navy-950">{product.name}</h2>
                    <p className="mt-2 text-sm text-navy-900/65">{product.brand}</p>
                    <p className="mt-2 text-xs text-navy-900/50">In Stock - Ships in 3-5 days</p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <div className="inline-flex items-center rounded-xl border border-navy-900/10">
                        <button className="px-3 py-2">-</button>
                        <span className="border-x border-navy-900/10 px-4 py-2">{qty}</span>
                        <button className="px-3 py-2">+</button>
                      </div>
                      <div className="text-2xl font-semibold text-navy-950">${product.price.toLocaleString()}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="mb-4 text-2xl font-semibold text-navy-950">Deal of the Day</h2>
              <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
                {items.slice(0, 2).map(({ product }) => (
                  <div key={product.slug} className="overflow-hidden rounded border border-navy-900/10 bg-white">
                    <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
                    <div className="p-3">
                      <p className="font-medium text-navy-950">{product.name}</p>
                      <p className="text-sm text-brand-orange-dark">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-3xl border border-navy-900/10 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy-950">Order Summary</h2>
            <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
              <div className="flex justify-between"><span>Subtotal ({items.length} items)</span><span>${subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
              <div className="flex justify-between"><span>Estimated Tax</span><span>Calculated at checkout</span></div>
            </div>
            <div className="mt-4 flex justify-between border-t border-navy-900/10 pt-4 text-2xl font-semibold">
              <span>Total</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <Link to="/checkout/delivery" className="mt-6 block rounded bg-brand-blue px-4 py-3 text-center font-semibold text-white">
              Proceed to Buy
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
