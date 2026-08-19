import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import SavedAddresses from "../components/delivery/SavedAddresses";
import AddressForm from "../components/delivery/AddressForm";

const INITIAL_SAVED_ADDRESSES = [
  {
    id: "home",
    label: "Home",
    firstName: "Alex",
    lastName: "Carter",
    company: "Apex Ltd.",
    address: "123 Horizon View Drive",
    apartment: "Suite 400",
    city: "Seattle",
    state: "WA",
    postalCode: "98109",
    country: "United States",
    phone: "+1 (555) 234-5678",
  },
];

const EMPTY_FORM = {
  country: "United States",
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  postalCode: "",
  phone: "",
};

const CheckoutDeliveryPage = () => {
  const navigate = useNavigate();
  const [savedAddresses, setSavedAddresses] = useState(INITIAL_SAVED_ADDRESSES);
  const [selectedAddressId, setSelectedAddressId] = useState("home");
  const [useNewAddress, setUseNewAddress] = useState(false);

  const [formData, setFormData] = useState(INITIAL_SAVED_ADDRESSES[0]);

  const handleSelectAddress = (address) => {
    setSelectedAddressId(address.id);
    setUseNewAddress(false);
    setFormData(address);
  };

  const handleAddNewClick = () => {
    setUseNewAddress(true);
    setSelectedAddressId("");
    setFormData(EMPTY_FORM);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (useNewAddress) {

      const newAddressObj = {
        ...formData,
        id: `addr-${Date.now()}`,
        label: "New Address",
      };
      setSavedAddresses((prev) => [...prev, newAddressObj]);
      setSelectedAddressId(newAddressObj.id);
    } else {
 
      setSavedAddresses((prev) =>
        prev.map((item) => (item.id === selectedAddressId ? { ...formData } : item))
      );
    }

    navigate("/checkout/payment");
  };

  return (
    <div className="min-h-screen bg-navy-900/[0.02]">
      <CheckoutHeader actionLabel="Secure Checkout" />

      <main className="container-page py-8 lg:py-12">
        <CheckoutSteps currentStep={1} />

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section className="space-y-6">
            <SavedAddresses
              addresses={savedAddresses}
              selectedAddressId={selectedAddressId}
              onSelectAddress={handleSelectAddress}
              onAddNewClick={handleAddNewClick}
              useNewAddress={useNewAddress}
            />
            <AddressForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              useNewAddress={useNewAddress}
            />
          </section>

          <OrderSummaryCard
            subtotal="3,499.00"
            shippingLabel="FREE"
            tax="349.90"
            total="3,848.90"
          />
        </div>
      </main>
    </div>
  );
};

export default CheckoutDeliveryPage;