import { FiTruck, FiHome } from "react-icons/fi";

const DeliveryOptionsBox = ({ deliveryInfo }) => (
  <div className="rounded border border-navy-900/10 bg-white p-4">
    <p className="text-sm font-semibold text-navy-950">
      🏢 Stair Heroes: Delivery To Any Floor (Small Fee)
    </p>
    <p className="mt-1 text-xs text-navy-900/60">
      No "sorry, stairs are too hard" nonsense here. We go up so you don't have to.
    </p>

    <div className="mt-3 space-y-3 text-sm">
      <div className="flex items-center gap-2 text-navy-900/70">
        <FiTruck className="shrink-0 text-navy-900/50" />
        <span>
          {deliveryInfo.deliveryAvailable
            ? "Multi-floor & room-of-choice delivery available"
            : "Delivery not available"}
        </span>
      </div>

      {deliveryInfo.collectionAvailable && (
        <div className="flex items-start gap-2 text-navy-900/70">
          <FiHome className="mt-0.5 shrink-0 text-brand-blue" />
          <div>
            <p>{deliveryInfo.collectionNote}</p>
            <button
              type="button"
              className="mt-1 font-semibold text-brand-blue underline"
            >
              Check availability now
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default DeliveryOptionsBox;