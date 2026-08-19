import { FiMapPin, FiCheck, FiPlus } from "react-icons/fi";

const SavedAddresses = ({
  addresses,
  selectedAddressId,
  onSelectAddress,
  onAddNewClick,
  useNewAddress,
}) => {
  return (
    <div className="rounded border border-navy-900/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <FiMapPin size={20} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-navy-950">Saved Delivery Addresses</h2>
            <p className="text-xs text-navy-900/50">Select an address from your account</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
      
        {addresses.map((addr) => {
          const isSelected = selectedAddressId === addr.id && !useNewAddress;

          return (
            <div
              key={addr.id}
              onClick={() => onSelectAddress(addr)}
              className={`relative cursor-pointer rounded border p-4 transition-all ${
                isSelected
                  ? "border-brand-blue bg-brand-blue/[0.03] shadow-sm"
                  : "border-navy-900/10 bg-white hover:border-navy-900/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-900/50">
                  {addr.label || "Address"}
                </span>
                {isSelected && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white">
                    <FiCheck size={12} />
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-bold text-navy-950">
                {addr.firstName} {addr.lastName}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-900/70">
                {addr.address} {addr.apartment ? `, ${addr.apartment}` : ""}<br />
                {addr.city}, {addr.state} {addr.postalCode}
              </p>
            </div>
          );
        })}

  
        <div
          onClick={onAddNewClick}
          className={`flex cursor-pointer flex-col items-center justify-center rounded border border-dashed p-4 transition-all ${
            useNewAddress
              ? "border-brand-blue bg-brand-blue/[0.03]"
              : "border-navy-900/20 bg-navy-900/[0.01] hover:border-navy-900/40"
          }`}
        >
          <FiPlus className="text-brand-blue" size={20} />
          <span className="mt-1 text-sm font-bold text-navy-950">Add New Address</span>
          <span className="text-[11px] text-navy-900/50">Enter custom shipping details</span>
        </div>
      </div>
    </div>
  );
};

export default SavedAddresses;