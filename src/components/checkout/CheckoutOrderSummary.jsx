import { Link } from "react-router-dom";
import { FiShield, FiTruck } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const money = (value) => `£${value.toFixed(2)}`;

const getServices = (product) => {
  const selection = product.essentialServicesSelection ?? {};
  if (selection.bundle) {
    return {
      total: 49,
      labels: ["Alfa Bundle — Delivery, Installation & Recycling · £49"],
    };
  }

  const delivery = product.price >= 399 ? 0 : 14.99;
  return {
    total: delivery + (selection.installation ? 29.99 : 0) + (selection.recycling ? 24.99 : 0),
    labels: [
      `Delivery — ${delivery === 0 ? "FREE" : money(delivery)}`,
      ...(selection.installation ? ["Installation — £29.99"] : []),
      ...(selection.recycling ? ["Disposal of old appliance — £24.99"] : []),
    ],
  };
};

const CheckoutOrderSummary = ({ children }) => {
  const { items } = useCart();
  const summary = items.reduce((result, item) => {
    const services = getServices(item.product);
    const productTotal = item.product.price * item.qty;
    const serviceTotal = services.total * item.qty;
    result.subtotal += productTotal + serviceTotal;
    result.rows.push({ item, services, productTotal, serviceTotal, itemTotal: productTotal + serviceTotal });
    return result;
  }, { subtotal: 0, rows: [] });
  const total = summary.subtotal;

  return (
    <aside className="space-y-4">
      <div className="sticky top-24 rounded border border-navy-900/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-navy-950">Order summary</h2>
        <div className="mt-2 flex justify-between text-sm text-navy-900/60">
          <span>{items.reduce((count, item) => count + item.qty, 0)} items</span>
          <span className="font-semibold text-navy-950">{money(summary.subtotal)}</span>
        </div>

        {summary.rows.length === 0 ? (
          <p className="mt-5 border-t border-navy-900/10 pt-4 text-sm text-navy-900/60">Your basket is empty.</p>
        ) : (
          <div className="mt-4 space-y-3 border-y border-navy-900/10 py-4">
            {summary.rows.map(({ item, services, productTotal, serviceTotal, itemTotal }, index) => (
              <div key={item.product.slug} className="rounded bg-navy-900/[0.03] p-3 text-sm">
                <div className="flex items-start gap-3">
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded border border-navy-900/10 bg-white"
                    aria-label={`View ${item.product.name}`}
                  >
                    {item.product.image ? (
                      <img src={item.product.image} alt="" className="h-full w-full object-contain" />
                    ) : (
                      <span className="text-[10px] text-navy-900/40">Product</span>
                    )}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <Link to={`/product/${item.product.slug}`} className="font-semibold text-navy-950 hover:text-brand-blue">
                        Item {index + 1} · {item.product.name}
                      </Link>
                      <span className="shrink-0 font-bold text-navy-950">{money(itemTotal)}</span>
                    </div>
                    <p className="mt-1 text-xs text-navy-900/60">Qty {item.qty} · Product {money(productTotal)}</p>
                  </div>
                </div>
                <div className="mt-1 space-y-0.5 text-xs text-navy-900/65">
                  <p>Essential services {money(serviceTotal)}</p>
                  {services.labels.map((label) => <p key={label}>{label}</p>)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm">
          <div className="flex justify-between text-navy-900/70"><span>Subtotal</span><span className="font-semibold text-navy-950">{money(summary.subtotal)}</span></div>
          <div className="flex justify-between text-navy-900/70"><span>Shipping</span><span className="font-semibold text-emerald-600">Included</span></div>
        </div>

        <div className="mt-4 flex items-baseline justify-between border-t border-navy-900/10 pt-4">
          <span className="text-base font-bold text-navy-950">Total</span>
          <span className="text-2xl font-extrabold text-brand-blue">{money(total)}</span>
        </div>

        {children}

        <div className="mt-6 space-y-2.5 rounded bg-navy-900/[0.03] p-4 text-xs text-navy-900/70">
          <div className="flex items-center gap-2"><FiTruck className="text-brand-blue" size={16} /><span>Delivery and essential services shown per item</span></div>
          <div className="flex items-center gap-2"><FiShield className="text-emerald-600" size={16} /><span>Insured & trackable shipment</span></div>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutOrderSummary;
