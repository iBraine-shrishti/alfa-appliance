const DeliveryRow = ({ label, fromPrice }) => (
  <div className="flex items-center justify-between border-t border-navy-900/8 py-3 pl-4 text-sm">
    <span className="text-navy-900/70">{label}</span>
    <span className="font-medium text-navy-950">From £{fromPrice}</span>
  </div>
);

const DeliveryReturnsPanel = ({ deliveryReturns }) => (
  <div className="text-sm">
    <p className="text-base font-medium text-navy-950">Delivering your online order</p>

    <div className="mt-4 overflow-hidden rounded border border-navy-900/10">
      <div className="flex items-center justify-between bg-navy-900/5 px-4 py-3">
        <span className="font-medium text-navy-950">Standard Delivery</span>
        <span className="text-navy-900/70">{deliveryReturns.standardDelivery.label}</span>
      </div>
      {deliveryReturns.standardDelivery.options.map((option) => (
        <DeliveryRow key={option.label} label={option.label} fromPrice={option.fromPrice} />
      ))}

      <div className="flex items-center justify-between border-t border-navy-900/8 bg-navy-900/5 px-4 py-3">
        <span className="font-medium text-navy-950">Next day delivery</span>
        <span className="text-navy-900/70">{deliveryReturns.nextDayDelivery.label}</span>
      </div>
      {deliveryReturns.nextDayDelivery.options.map((option) => (
        <DeliveryRow key={option.label} label={option.label} fromPrice={option.fromPrice} />
      ))}
    </div>

    <div className="mt-6 space-y-6 text-navy-900/70">
      <div>
        <p className="font-medium text-navy-950">Tracking your delivery</p>
        <p className="mt-2 leading-6">{deliveryReturns.tracking}</p>
      </div>

      <div>
        <p className="font-medium text-navy-950">Delivery restrictions</p>
        <div className="mt-2 space-y-1 leading-6">
          {deliveryReturns.restrictions.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="font-medium text-navy-950">Delivering large items</p>
        <p className="mt-2 leading-6">{deliveryReturns.largeItems}</p>
      </div>

      <div>
        <p className="text-base font-medium text-navy-950">Our FREE order & collect service</p>
        <div className="mt-2 space-y-2 leading-6">
          {deliveryReturns.collectService.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-base font-medium text-navy-950">Returns and refunds</p>
        <div className="mt-2 space-y-2 leading-6">
          {deliveryReturns.returns.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {/* <button type="button" className="mt-2 text-brand-blue underline">
          {deliveryReturns.returnsInfoLink}
        </button> */}
      </div>
    </div>
  </div>
);

export default DeliveryReturnsPanel;