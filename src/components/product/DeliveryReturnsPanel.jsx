const defaultDeliveryReturns = {
  standardDelivery: {
    label: "Get it in 4 working days",
    options: [
      { label: "Anytime delivery from 7am - 8pm", fromPrice: 20 },
      { label: "Choose a 4-hour time slot delivery", fromPrice: 35 },
    ],
  },
  nextDayDelivery: {
    label: "Only valid on weekdays & Sunday",
    options: [
      { label: "Anytime delivery from 7am - 8pm", fromPrice: 30 },
      { label: "Choose a 4-hour time slot delivery", fromPrice: 45 },
    ],
  },
  tracking:
    "Make sure to add your mobile number when you place your order, so we can text you with delivery updates. Our Track It service also allows you to see where your order is at.",
  restrictions: [
    "Weekend and next-day delivery is available in most areas, but not all.",
    "And, of course, delivery is always dependent upon stock availability.",
  ],
  largeItems:
    "If you're getting a large item delivered to a room or flat above the first floor of your home or block, our team will only be able to decide if they can safely deliver it when they arrive.",
  collectService: [
    "You can order your item(s) online, and safely collect them from your chosen store within an hour of placing your order.",
    "Pop in store to collect your items within an hour of ordering them, free of charge.",
  ],
  returns: [
    "If you purchased online and you have changed your mind you can return your items within 30 days even if you have opened it for inspection.",
    "If your item develops a fault we will offer either a repair, exchange or refund if the fault occurs within 30 days of purchase.",
  ],
};

const DeliveryRow = ({ label, fromPrice }) => (
  <div className="flex items-center justify-between border-t border-navy-900/8 py-3 pl-4 text-sm">
    <span className="text-navy-900/70">{label}</span>
    <span className="font-medium text-navy-950">From £{fromPrice}</span>
  </div>
);

const DeliveryReturnsPanel = ({ deliveryReturns }) => {
  const data = deliveryReturns || defaultDeliveryReturns;

  return (
    <div className="text-sm">
      <p className="text-base font-medium text-navy-950">Delivering your online order</p>

      <div className="mt-4 overflow-hidden rounded border border-navy-900/10">
        <div className="flex items-center justify-between bg-navy-900/5 px-4 py-3">
          <span className="font-medium text-navy-950">Standard Delivery</span>
          <span className="text-navy-900/70">{data.standardDelivery?.label}</span>
        </div>
        {(data.standardDelivery?.options || []).map((option) => (
          <DeliveryRow key={option.label} label={option.label} fromPrice={option.fromPrice} />
        ))}

        <div className="flex items-center justify-between border-t border-navy-900/8 bg-navy-900/5 px-4 py-3">
          <span className="font-medium text-navy-950">Next day delivery</span>
          <span className="text-navy-900/70">{data.nextDayDelivery?.label}</span>
        </div>
        {(data.nextDayDelivery?.options || []).map((option) => (
          <DeliveryRow key={option.label} label={option.label} fromPrice={option.fromPrice} />
        ))}
      </div>

      <div className="mt-6 space-y-6 text-navy-900/70">
        <div>
          <p className="font-medium text-navy-950">Tracking your delivery</p>
          <p className="mt-2 leading-6">{data.tracking}</p>
        </div>

        <div>
          <p className="font-medium text-navy-950">Delivery restrictions</p>
          <div className="mt-2 space-y-1 leading-6">
            {(data.restrictions || []).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium text-navy-950">Delivering large items</p>
          <p className="mt-2 leading-6">{data.largeItems}</p>
        </div>

        <div>
          <p className="text-base font-medium text-navy-950">Our FREE order & collect service</p>
          <div className="mt-2 space-y-2 leading-6">
            {(data.collectService || []).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base font-medium text-navy-950">Returns and refunds</p>
          <div className="mt-2 space-y-2 leading-6">
            {(data.returns || []).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReturnsPanel;