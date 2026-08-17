const EssentialServices = ({ services }) => (
  <div>
    <p className="text-sm font-semibold text-navy-950">Essential services</p>
    <div className="mt-2 divide-y divide-navy-900/8 rounded border border-navy-900/10 bg-white">
      {services.map((service) => (
        <label key={service.label} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
          <span className="flex items-center gap-3 text-navy-900/80">
            <input type="checkbox" className="h-4 w-4 accent-brand-blue" />
            {service.label}
          </span>
          <span className="font-semibold text-navy-950">£{service.price.toFixed(2)}</span>
        </label>
      ))}
    </div>
  </div>
);

export default EssentialServices;
