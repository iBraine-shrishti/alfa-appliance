import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const money = (value) => `£${value.toFixed(2)}`;
const servicesFor = (product) => {
  const selected = product.essentialServicesSelection ?? {};
  if (selected.bundle) return { total: 49, labels: ["Alfa Bundle — Delivery, Installation & Recycling · £49"] };
  const delivery = product.price >= 399 ? 0 : 14.99;
  return { total: delivery + (selected.installation ? 29.99 : 0) + (selected.recycling ? 24.99 : 0), labels: [`Delivery — ${delivery ? money(delivery) : "FREE"}`, ...(selected.installation ? ["Installation — £29.99"] : []), ...(selected.recycling ? ["Disposal of old appliance — £24.99"] : [])] };
};
const categoryFor = (product) => {
  const source = `${product.category || ""} ${product.categoryLabel || ""} ${product.slug || ""}`.toLowerCase();
  if (source.includes("wash") || source.includes("dryer") || source.includes("laundry")) return "Laundry";
  if (source.includes("fridge") || source.includes("freezer") || source.includes("refriger")) return "Refrigeration";
  if (source.includes("dishwasher")) return "Dishwashers";
  if (source.includes("oven") || source.includes("cooker") || source.includes("hob")) return "Cooking";
  return "Small Appliances";
};

const ReviewOrderItems = () => {
  const { items } = useCart();
  return (
    <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <h2 className="border-b border-navy-900/10 pb-4 text-lg font-bold text-navy-950">Order Items ({items.length})</h2>
      <div className="mt-4 space-y-4">
        {items.length === 0 && <p className="text-sm text-navy-900/60">No items in your basket.</p>}
        {items.map((item) => {
          const services = servicesFor(item.product);
          const clickCollect = Boolean(item.product.deliveryInfo?.collectionAvailable);
          return <div key={item.product.slug} className="flex flex-col gap-4 rounded border border-navy-900/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link to={`/product/${item.product.slug}`} className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-navy-900/10 bg-white p-2">
                {item.product.image ? <img src={item.product.image} alt="" className="h-full w-full object-contain" /> : <span className="text-xs text-navy-900/40">Product Image</span>}
              </Link>
              <div>
                <span className="rounded bg-navy-900/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-900/60">{categoryFor(item.product)}</span>
                <Link to={`/product/${item.product.slug}`} className="mt-1 block text-base font-bold text-navy-950 hover:text-brand-blue">{item.product.name}</Link>
                <p className="mt-1 text-xs text-navy-900/60">{item.product.model || item.product.sku || "Model details available on product page"} | Qty: {item.qty}</p>
                <p className="mt-2 text-xs font-semibold text-emerald-600">In Stock · Ready to ship</p>
                <p className="mt-2 text-xs font-semibold text-brand-blue">{clickCollect ? "Click & Collect: Available" : "Delivery: Available"}</p>
                <div className="mt-2 space-y-0.5 text-xs text-navy-900/60">{services.labels.map((label) => <p key={label}>{label}</p>)}</div>
                <div className="mt-3 rounded bg-navy-900/[0.03] p-3 text-xs leading-5 text-navy-900/65">
                  <p className="font-bold text-navy-950">What happens next</p>
                  {clickCollect ? <ul className="mt-1 list-disc space-y-0.5 pl-4"><li>Your order will be ready to collect from our store at 105 Stoke Newington High Street, London N16 0PH.</li><li>We'll text you the moment it's ready — usually within the hour for in-stock items.</li><li>Bring your order number and photo ID when you come to collect.</li></ul> : <ul className="mt-1 list-disc space-y-0.5 pl-4"><li>Your delivery is booked and our team will confirm your delivery date and slot.</li><li>We'll text you the night before and send a 2-hour arrival window on the morning.</li></ul>}
                </div>
              </div>
            </div>
            <div className="text-right sm:self-center"><p className="text-lg font-bold text-navy-950">{money(item.product.price * item.qty)}</p><p className="text-xs text-navy-900/50">Services: {money(services.total * item.qty)}</p></div>
          </div>;
        })}
      </div>
    </div>
  );
};
export default ReviewOrderItems;
