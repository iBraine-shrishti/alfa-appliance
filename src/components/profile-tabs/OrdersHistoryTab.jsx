import { FiPackage, FiExternalLink, FiTruck, FiRotateCcw, FiCheckCircle } from "react-icons/fi";

const mockOrders = [
  {
    id: "ALFA-904218",
    date: "14 August 2026",
    status: "In Transit",
    statusColor: "bg-amber-500/10 text-amber-700 border-amber-200",
    total: 3529.0,
    items: [
      {
        name: "ALFA Precision French Door Refrigerator",
        sku: "ALFA-RF-9051X",
        price: 3499.0,
        image: "https://via.placeholder.com/100",
        services: ["🏢 Stair Heroes Delivery", "♻️ Free Removal & Recycling"],
      },
    ],
  },
  {
    id: "ALFA-881204",
    date: "28 June 2026",
    status: "Delivered",
    statusColor: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    total: 929.0,
    items: [
      {
        name: "ALFA Ultra-Quiet Front Load Washing Machine",
        sku: "ALFA-WM-3011S",
        price: 899.0,
        image: "https://via.placeholder.com/100",
        services: ["Pro Installation & Setup (£30.00)"],
      },
    ],
  },
];

const OrdersHistoryTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-950">Order History</h2>
        <p className="mt-1 text-sm text-navy-900/60">Manage your past appliance orders and download invoices.</p>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 pb-4">
              <div>
                <span className="text-xs font-bold text-navy-900/50">ORDER ID</span>
                <p className="text-base font-bold text-navy-950">#{order.id}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-navy-900/50">DATE PLACED</span>
                <p className="text-sm font-semibold text-navy-950">{order.date}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-navy-900/50">TOTAL AMOUNT</span>
                <p className="text-sm font-extrabold text-brand-blue">£{order.total.toFixed(2)}</p>
              </div>
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${order.statusColor}`}
                >
                  <FiCheckCircle size={12} /> {order.status}
                </span>
              </div>
            </div>


            <div className="divide-y divide-navy-900/5 py-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 rounded border border-navy-900/10 bg-navy-900/5 p-2">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-950">{item.name}</h4>
                      <p className="text-xs text-navy-900/50">SKU: {item.sku}</p>
                      
     
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.services.map((svc, sIdx) => (
                          <span key={sIdx} className="rounded bg-navy-900/5 px-2 py-0.5 text-[10px] font-semibold text-navy-900/70">
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-bold text-navy-950">£{item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

     
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/10 pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
                >
                  <FiExternalLink size={14} /> Download Tax Invoice
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded border border-navy-900/15 px-4 py-2 text-xs font-bold text-navy-950 transition-colors hover:bg-navy-900/5"
                >
                  <FiRotateCcw size={14} /> Reorder Items
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded bg-brand-blue hover:bg-black px-4 py-2 text-xs font-bold text-white transition-all"
                >
                  <FiTruck size={14} /> Track Delivery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersHistoryTab;