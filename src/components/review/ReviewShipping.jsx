import { Link } from "react-router-dom";
import { FiMapPin, FiTruck, FiEdit3 } from "react-icons/fi";

const ReviewShipping = () => {
  return (
    <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <FiMapPin size={20} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-navy-950">Shipping Address</h2>
            <p className="text-xs text-navy-900/50">Delivering to Alex Carter</p>
          </div>
        </div>
        <Link
          to="/checkout"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
        >
          <FiEdit3 size={16} /> Edit
        </Link>
      </div>

      <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
        <div className="rounded bg-navy-900/[0.02] p-4">
          <p className="font-bold text-navy-950">Alex Carter</p>
          <p className="mt-1 leading-relaxed text-navy-900/70">
            123 Horizon View Drive<br />
            Suite 400<br />
            Seattle, WA 98109
          </p>
          <p className="mt-2 text-xs font-semibold text-navy-900/50">+1 (555) 234-5678</p>
        </div>

        <div className="rounded border border-brand-blue/20 bg-brand-blue/[0.03] p-4">
          <div className="flex items-center gap-2 text-brand-blue">
            <FiTruck size={18} />
            <span className="font-bold">Standard Delivery</span>
          </div>
          <p className="mt-2 text-xs text-navy-900/70">Estimated Delivery Date:</p>
          <p className="mt-1 text-base font-bold text-navy-950">Thursday, Oct 26</p>
          <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
            Free Shipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewShipping;