import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen bg-navy-950/70 backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue/10 text-5xl text-brand-blue">
            ✓
          </div>
          <h1 className="text-4xl font-semibold text-navy-950">Order Successful !!</h1>
          <p className="mt-4 text-lg text-navy-900/65">
            Thank you so much for your order. We are processing it with the utmost precision.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/checkout/review" className="flex-1 rounded-2xl border border-navy-900/15 px-5 py-3 font-semibold text-brand-blue">
              View Order
            </Link>
            <Link to="/" className="flex-1 rounded-2xl bg-brand-blue px-5 py-3 font-semibold text-white">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
