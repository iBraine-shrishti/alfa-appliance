const FlexpayBanner = ({ flexpay }) => (
  <div className="border-l-2 border-brand-blue bg-brand-blue/5 p-5">
    <div className="flex items-center justify-between">
      <p className="font-semibold text-navy-950">Spread the cost with Alfa Flexpay</p>
      <button type="button" className="text-xs font-semibold text-brand-blue">
        Learn more
      </button>
    </div>

    <div className="mt-4 space-y-3 text-sm text-navy-900/70">
      <div>
        <p className="font-semibold text-navy-950">Make monthly payments</p>
        <p>
          From £{flexpay.monthlyAmount.toFixed(2)} per month for {flexpay.months} months*
        </p>
      </div>
      <div>
        <p className="font-semibold text-navy-950">Or buy now, pay later</p>
        <p>
          Pay as much or as little as you like for {flexpay.buyNowMonths} months. Settle in full by{" "}
          {flexpay.settleByLabel} & pay no interest
        </p>
      </div>
    </div>

    <button
      type="button"
      className="mt-4 flex w-full items-center justify-between rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm font-semibold text-navy-900"
    >
      View all flexpay options
      <span aria-hidden>{">"}</span>
    </button>

    <p className="mt-3 text-[11px] leading-5 text-navy-900/45">
      *Illustrative example: Pay {flexpay.months} monthly payments of £{flexpay.monthlyAmount.toFixed(2)}. The
      interest rate for this purchase is {flexpay.apr}%. Representative APR {flexpay.apr}% (variable). Assumed
      Credit Limit £{flexpay.creditLimit}.
    </p>
  </div>
);

export default FlexpayBanner;