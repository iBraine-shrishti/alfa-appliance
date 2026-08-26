import { useMemo, useState } from "react";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CartLineItem from "../components/cart/CartLineItem";
import CartOrderSummary from "../components/cart/CartOrderSummary";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { items: cartItems, updateQuantity, updateItemServices, removeFromCart } = useCart();
  const [checkedSlugs, setCheckedSlugs] = useState({});

  const toggleChecked = (slug) => {
    setCheckedSlugs((current) => ({ ...current, [slug]: !current[slug] }));
  };

  const updateQty = (slug, qty) => {
    updateQuantity(slug, qty);
  };

  const removeItem = (slug) => {
    removeFromCart(slug);
    setCheckedSlugs((current) => {
      const next = { ...current };
      delete next[slug];
      return next;
    });
  };

  const selectedItems = useMemo(
    () => cartItems.filter((item) => checkedSlugs[item.product.slug] !== false),
    [cartItems, checkedSlugs]
  );

  const itemServiceTotal = (item) => {
    const selection = item.product.essentialServicesSelection ?? {};
    if (selection.bundle) return 49;
    return (item.product.price >= 399 ? 0 : 14.99) + (selection.installation ? 29.99 : 0) + (selection.recycling ? 24.99 : 0);
  };
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.product.price + itemServiceTotal(item)) * item.qty, 0);
  const totalSavings = selectedItems.reduce(
    (sum, item) => sum + (item.product.savingAmount ?? 0) * item.qty,
    0
  );

  const flexpay = selectedItems[0]?.product.flexpay ?? {
    monthlyAmount: subtotal / 24 || 0,
    months: 24,
    buyNowMonths: 9,
    settleByLabel: "—",
    apr: 29.9,
    creditLimit: 1200,
  };

  return (
    <div>
      <CheckoutHeader actionLabel="Your Cart" />
      <main className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section>
            <div className="mb-2 flex items-end justify-between border-b border-navy-900/10 pb-4">
              <h1 className="text-3xl font-semibold text-navy-950">Your Cart</h1>
              <span className="text-sm text-navy-900/55">{cartItems.length} items</span>
            </div>

            <div>
              {cartItems.map((item) => (
                <CartLineItem
                  key={item.product.slug}
                  product={item.product}
                  qty={item.qty}
                  checked={checkedSlugs[item.product.slug] !== false}
                  onToggle={() => toggleChecked(item.product.slug)}
                  onQtyChange={(qty) => updateQty(item.product.slug, qty)}
                  onServicesChange={(services) => updateItemServices(item.product.slug, services)}
                  onRemove={() => removeItem(item.product.slug)}
                />
              ))}
            </div>
          </section>

          <CartOrderSummary
            itemCount={selectedItems.length}
            subtotal={subtotal}
            totalSavings={totalSavings}
            flexpay={flexpay}
            items={selectedItems}
          />
        </div>
      </main>
    </div>
  );
};

export default CartPage;
