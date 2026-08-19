import { useState } from "react";
import { FiMapPin, FiPlus, FiTrash2, FiEdit2, FiCheck } from "react-icons/fi";

const initialAddresses = [
  {
    id: "1",
    label: "Home (Primary)",
    fullName: "Alex Morgan",
    street: "124 Baker Street, Flat 4B",
    city: "London",
    postcode: "NW1 6XE",
    phone: "+44 7700 900077",
    isDefault: true,
  },
  {
    id: "2",
    label: "Holiday Home",
    fullName: "Alex Morgan",
    street: "88 Ocean Drive",
    city: "Brighton",
    postcode: "BN1 1AL",
    phone: "+44 7700 900077",
    isDefault: false,
  },
];

const AddressBookTab = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddModal, setShowAddModal] = useState(false);

  const setAsDefault = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({ ...addr, isDefault: addr.id === id }))
    );
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy-950">Saved Addresses</h2>
          <p className="mt-1 text-sm text-navy-900/60">Manage your delivery and billing locations.</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded bg-brand-blue px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-black"
        >
          <FiPlus size={16} /> Add Address
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`relative flex flex-col justify-between rounded border p-5 transition-all ${
              address.isDefault
                ? "border-brand-blue bg-white shadow-sm"
                : "border-navy-900/10 bg-white/70"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-navy-900/5 px-2.5 py-1 text-xs font-bold text-navy-950">
                  {address.label}
                </span>
                {address.isDefault && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                    <FiCheck size={12} /> Default Delivery
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <p className="font-bold text-navy-950">{address.fullName}</p>
                <p className="text-navy-900/70">{address.street}</p>
                <p className="text-navy-900/70">
                  {address.city}, {address.postcode}
                </p>
                <p className="pt-2 text-xs text-navy-900/50">{address.phone}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-navy-900/10 pt-4">
              {!address.isDefault ? (
                <button
                  type="button"
                  onClick={() => setAsDefault(address.id)}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Set as Default
                </button>
              ) : (
                <span />
              )}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="p-1.5 text-navy-900/50 transition-colors hover:text-navy-950"
                  title="Edit"
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => deleteAddress(address.id)}
                  className="p-1.5 text-navy-900/50 transition-colors hover:text-rose-600"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBookTab;