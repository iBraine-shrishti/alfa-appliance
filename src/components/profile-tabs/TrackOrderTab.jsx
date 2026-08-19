import { useState } from "react";
import { FiSearch, FiTruck, FiCheck, FiMapPin, FiClock, FiShield } from "react-icons/fi";

const TrackOrderTab = () => {
  const [trackingNumber, setTrackingNumber] = useState("ALFA-904218");

  const trackingSteps = [
    { title: "Order Placed & Confirmed", date: "14 Aug, 09:30 AM", completed: true },
    { title: "Dispatched from Central Warehouse", date: "15 Aug, 02:15 PM", completed: true },
    { title: "Out for Delivery (Stair Heroes Crew Assigned)", date: "16 Aug, 08:00 AM", completed: true, current: true },
    { title: "Delivered & Installed", date: "Estimated Today by 4:00 PM", completed: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-950">Track Shipment</h2>
        <p className="mt-1 text-sm text-navy-900/60">Monitor your appliance delivery and driver status in real-time.</p>
      </div>

      <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
        <label className="block text-xs font-bold uppercase tracking-wider text-navy-900/60">
          Enter Order ID or Tracking Number
        </label>
        <div className="mt-2 flex gap-2">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full rounded border border-navy-900/15 pl-10 pr-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              placeholder="e.g. ALFA-904218"
            />
          </div>
          <button
            type="button"
            className="rounded bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-black"
          >
            Track
          </button>
        </div>
      </div>

      <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 pb-4">
          <div>
            <span className="text-xs font-bold text-navy-900/50">ACTIVE SHIPMENT</span>
            <h3 className="text-lg font-bold text-navy-950">#ALFA-904218</h3>
          </div>
          <div className="flex items-center gap-2 rounded bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-700">
            <FiTruck size={16} /> Driver on Route (ETA: 2 Hours)
          </div>
        </div>

        <div className="my-6 rounded border border-brand-blue/20 bg-brand-blue/[0.03] p-4 text-xs">
          <div className="flex items-center gap-2 font-bold text-navy-950">
            <span>🏢 Stair Heroes Active Delivery</span>
          </div>
          <p className="mt-1 text-navy-900/60">
            Your package includes multi-floor placement. Our crew will safely carry your appliance to your chosen room.
          </p>
        </div>

        <div className="relative my-8 ml-4 border-l-2 border-navy-900/10 space-y-8 pl-6">
          {trackingSteps.map((step, idx) => (
            <div key={idx} className="relative">

              <div
                className={`absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  step.completed
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-navy-900/20 bg-white text-transparent"
                }`}
              >
                {step.completed && <FiCheck size={12} />}
              </div>

              <div>
                <h4
                  className={`text-sm font-bold ${
                    step.current ? "text-brand-blue" : step.completed ? "text-navy-950" : "text-navy-900/40"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="mt-0.5 text-xs text-navy-900/50">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOrderTab;