import { Link } from "react-router-dom";

const CheckoutHeader = ({ title, actionLabel = "Secure Checkout" }) => {
  return (
    <header className="border-b border-navy-900/10 bg-white">
      <div className="container-page flex items-center justify-between py-4 sm:py-5">
        {/* <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-[40px]">
          ALFA APPLIANCES
        </Link> */}
        <div className="flex items-center gap-2 text-sm font-medium text-navy-900/75">
          <span className="text-brand-blue">🔒</span>
          <span>{actionLabel}</span>
        </div>
      </div>
      {title ? (
        <div className="border-t border-navy-900/5 bg-[#f5f5fb]">
          <div className="container-page py-4 text-sm text-navy-900/55">{title}</div>
        </div>
      ) : null}
    </header>
  );
};

export default CheckoutHeader;
