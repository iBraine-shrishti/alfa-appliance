import { Link } from "react-router-dom";
import { FiCheckCircle, FiMapPin, FiTruck } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const money = (value) => `£${value.toFixed(2)}`;
const serviceBreakdown = (product) => {
  const selected = product.essentialServicesSelection ?? {};
  if (selected.bundle) return { total: 49, labels: ["Alfa Bundle — Delivery, Installation & Recycling · £49"] };
  const delivery = product.price >= 399 ? 0 : 14.99;
  return { total: delivery + (selected.installation ? 29.99 : 0) + (selected.recycling ? 24.99 : 0), labels: [`Delivery — ${delivery ? money(delivery) : "FREE"}`, ...(selected.installation ? ["Installation — £29.99"] : []), ...(selected.recycling ? ["Disposal of old appliance — £24.99"] : [])] };
};

const OrderSuccessPage = () => {
  const { items } = useCart();
  const savedOrder = (() => { try { return JSON.parse(localStorage.getItem("alfa-last-order") || "{}"); } catch { return {}; } })();
  const orderNumber = savedOrder.orderNumber || `ALFA-${Date.now().toString().slice(-8)}`;
  const email = savedOrder.email || localStorage.getItem("alfa-customer-email") || "alex.morgan@example.com";
  const collection = savedOrder.method === "collection";
  const rows = items.map((item) => { const services = serviceBreakdown(item.product); return { ...item, services, clickCollect: Boolean(item.product.deliveryInfo?.collectionAvailable), total: (item.product.price + services.total) * item.qty }; });
  const total = rows.reduce((sum, row) => sum + row.total, 0);

  return <div className="min-h-screen bg-navy-900/[0.02] py-10 lg:py-14"><main className="container-page mx-auto max-w-5xl">
    <section className="rounded border border-navy-900/10 bg-white p-6 text-center shadow-sm sm:p-10">
      <FiCheckCircle className="mx-auto text-emerald-600" size={64} strokeWidth={1.8} />
      <h1 className="mt-4 text-3xl font-bold text-navy-950 sm:text-4xl">Thank you for your order</h1>
      <p className="mt-2 text-base text-navy-900/70">Your order is confirmed. Order number: <strong>{orderNumber}</strong></p>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-900/60">We've received your order and payment — you're all set. A confirmation email with your full receipt and order details is on its way to <strong>{email}</strong>.</p>
    </section>
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
      <section className="rounded border border-navy-900/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-navy-950">What happens next</h2>{collection ? <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-navy-900/70"><li>Your order will be ready to collect from our store at 105 Stoke Newington High Street, London N16 0PH.</li><li>We'll text you the moment it's ready — usually within the hour for in-stock items.</li><li>Bring your order number and photo ID when you come to collect.</li></ul> : <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-navy-900/70"><li>Your delivery is booked and our team will confirm your delivery slot shortly.</li><li>We'll text you the night before to confirm your delivery is going ahead the next day.</li><li>On the morning of delivery, you'll get a text with a 2-hour arrival window.</li><li>Need to change anything? Get in touch via Contact us and we'll sort it.</li></ul>}</section>
      <aside className="rounded border border-navy-900/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-navy-950">Your order</h2><div className="mt-4 space-y-4 border-y border-navy-900/10 py-4">{rows.map((row) => <div key={row.product.slug} className="flex gap-3"><Link to={`/product/${row.product.slug}`} className="h-16 w-16 shrink-0 overflow-hidden rounded border border-navy-900/10 bg-white"><img src={row.product.image} alt="" className="h-full w-full object-contain" /></Link><div className="min-w-0 flex-1 text-sm"><Link to={`/product/${row.product.slug}`} className="font-semibold text-navy-950 hover:text-brand-blue">{row.product.name}</Link><p className="mt-1 text-xs text-navy-900/60">Qty {row.qty} · {money(row.product.price * row.qty)}</p><p className="mt-1 text-xs font-semibold text-brand-blue">{row.clickCollect ? "Click & Collect: Available" : "Delivery: Available"}</p><div className="mt-1 space-y-0.5 text-xs text-navy-900/60">{row.services.labels.map((label) => <p key={label}>{label}</p>)}</div></div></div>)}</div><div className="space-y-2 py-4 text-sm"><div className="flex justify-between"><span>Subtotal</span><strong>{money(total)}</strong></div><div className="flex justify-between"><span>{collection ? "Collection" : "Delivery"}</span><strong className="text-emerald-600">{collection ? "FREE" : "Included above"}</strong></div><div className="flex justify-between border-t border-navy-900/10 pt-3 text-base"><strong>Total paid</strong><strong className="text-xl text-brand-blue">{money(total)}</strong></div></div><p className="flex items-center gap-2 text-xs text-navy-900/60">{collection ? <FiMapPin /> : <FiTruck />} {collection ? "105 Stoke Newington High Street, London N16 0PH" : "Delivery address confirmed at checkout"}</p></aside>
    </div>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/track-order" className="rounded bg-brand-blue px-6 py-3 text-center font-bold text-white hover:bg-navy-950">Track Order</Link><Link to="/" className="rounded border border-navy-900/15 bg-white px-6 py-3 text-center font-bold text-brand-blue">Continue Shopping</Link></div>
  </main></div>;
};
export default OrderSuccessPage;
