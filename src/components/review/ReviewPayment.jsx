import { Link } from "react-router-dom";
import { FiCreditCard, FiEdit3, FiCheckCircle } from "react-icons/fi";

const ReviewPayment = () => {
  return (
    <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <FiCreditCard size={20} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-navy-950">Payment Method</h2>
            <p className="text-xs text-navy-900/50">Encrypted and secure</p>
          </div>
        </div>
        <Link
          to="/checkout"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
        >
          <FiEdit3 size={16} /> Edit
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-between rounded bg-navy-900/[0.02] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-14 items-center justify-center rounded-md border border-navy-900/10 bg-white font-bold text-navy-950">
            VISA
          </div>
          <div>
            <p className="text-sm font-bold text-navy-950">Visa ending in 4242</p>
            <p className="text-xs text-navy-900/50">Expires 12/28</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <FiCheckCircle size={14} /> Verified
        </span>
      </div>
    </div>
  );
};

export default ReviewPayment;