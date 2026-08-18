import { FiTool } from "react-icons/fi";

const BreakdownSupport = ({ support }) => (
  <div className="rounded bg-brand-blue/5 p-5">
    <p className="text-base font-semibold text-brand-blue">Get breakdown support</p>
    <p className="mt-1 text-sm text-navy-900/70">Join over {support.customerCount} support plan customers.</p>
    <p className="mt-2 text-sm leading-6 text-navy-900/70">{support.description}</p>

    <button
      type="button"
      className="mt-4 flex w-full items-center justify-between rounded-xl border border-navy-900/10 bg-white px-4 py-3"
    >
      <span className="flex items-center gap-3 text-sm">
        <FiTool className="text-brand-blue" />
        <span>
          <span className="block font-semibold text-navy-950">Add Care & Repair</span>
          <span className="text-navy-900/55">From £{support.planPriceFrom.toFixed(2)}/mo</span>
        </span>
      </span>
      <span aria-hidden>{">"}</span>
    </button>
  </div>
);

export default BreakdownSupport;