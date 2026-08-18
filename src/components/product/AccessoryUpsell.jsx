import { FiStar } from "react-icons/fi";

const AccessoryUpsell = ({ accessories }) => (
  <div className="rounded bg-navy-900/[0.03] p-5">
    <p className="text-base font-semibold text-navy-950">
      What you'll need to make it <span className="text-brand-blue">even better</span>
    </p>

    <div className="mt-4 space-y-3">
      {accessories.map((item) => (
        <label
          key={item.name}
          className="flex items-start gap-3 rounded border border-navy-900/10 bg-white p-4 text-sm"
        >
          <input type="checkbox" className="mt-1 h-4 w-4 accent-brand-blue" />
          <div>
            {item.badge ? (
              <span className="mb-1 inline-block rounded-full bg-brand-blue px-2 py-0.5 text-[10px] font-semibold text-white">
                {item.badge}
              </span>
            ) : null}
            <p className="font-semibold text-navy-950">{item.name}</p>
            <div className="mt-1 flex items-center gap-1 text-brand-blue">
              {Array.from({ length: 5 }, (_, index) => (
               <FiStar
                key={index}
                size={12}
                className={
                  index < item.rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-navy-900/15"
                }
              />
              ))}
              <span className="ml-1 text-xs text-navy-900/45">({item.reviewCount})</span>
            </div>
            <p className="mt-1">
              <span className="font-semibold text-navy-950">£{item.price.toFixed(2)}</span>{" "}
              {item.oldPrice ? <span className="text-navy-900/40 line-through">£{item.oldPrice.toFixed(2)}</span> : null}
            </p>
            {item.note ? <p className="mt-1 text-xs text-brand-orange">{item.note}</p> : null}
          </div>
        </label>
      ))}
    </div>
  </div>
);

export default AccessoryUpsell;