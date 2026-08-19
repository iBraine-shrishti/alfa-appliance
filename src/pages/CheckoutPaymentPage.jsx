import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import PaymentMethods from "../components/payment/PaymentMethods";

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("card");

  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout/review");
  };

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Cancel Checkout" />

      <main className="container-page py-8 lg:py-12">
        <CheckoutSteps currentStep={2} />

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section className="space-y-6">
            <PaymentMethods
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
              cardDetails={cardDetails}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </section>

          <OrderSummaryCard
            subtotal="2,499.00"
            shippingLabel="$150.00"
            shippingIsFree={false}
            tax="211.92"
            total="2,860.92"
            badgeText="256-bit SSL Secure Checkout"
          />
        </div>
      </main>
    </div>
  );
};

export default CheckoutPaymentPage;