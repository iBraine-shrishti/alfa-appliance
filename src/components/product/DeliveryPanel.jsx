import { FiTruck, FiHome, FiCheck } from "react-icons/fi";

const DeliveryPanel = ({ delivery }) => (
  <div className="space-y-3">
    <div className="rounded border border-navy-900/10 bg-white p-4">
      <div className="flex items-start gap-3">
        <FiTruck className="mt-0.5 text-brand-blue" />
        <div>
          <p className="font-semibold text-navy-950">
            Next day delivery from £{delivery.fromPrice} ({delivery.cutoffLabel})
          </p>
          <p className="mt-1 text-sm text-navy-900/60">Standard delivery: £{delivery.standardPrice}</p>
          <ul className="mt-2 space-y-1 text-sm text-navy-900/60">
            {delivery.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2">
                <FiCheck className="shrink-0 text-brand-blue" size={14} />
                {perk}
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 text-sm font-semibold text-brand-blue underline">
            Check delivery for your area
          </button>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3 rounded border border-navy-900/10 bg-white p-4 text-navy-900/60">
      <FiHome />
      <p className="text-sm">
        {delivery.collectionAvailable ? "Collection from store available" : "Collection from store not available"}
      </p>
    </div>
  </div>
);

export default DeliveryPanel;