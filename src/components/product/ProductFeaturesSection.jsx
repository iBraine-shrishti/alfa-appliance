import { TbLeaf } from "react-icons/tb";
import { FiPlay } from "react-icons/fi";

const ProductFeaturesSection = ({ product }) => (
  <section className="mt-14">
    <h2 className="text-2xl font-semibold text-navy-950">Precision Engineered Features</h2>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <div className="relative overflow-hidden rounded bg-navy-900/90 p-6 text-white lg:col-span-2">
        <img src={product.features[0]?.image ?? product.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative flex min-h-[220px] max-w-md flex-col justify-end">
          <h3 className="text-2xl font-semibold">{product.features[0]?.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/85">{product.features[0]?.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded border border-navy-900/10 bg-white p-6 text-center shadow-sm">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <TbLeaf size={22} />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-navy-950">{product.features[1]?.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-navy-900/70">{product.features[1]?.description}</p>
      </div>

      <div className="relative rounded border border-navy-900/10 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-navy-950">{product.features[2]?.title}</h3>
        <p className="mt-2 text-sm leading-6 text-navy-900/70">{product.features[2]?.description}</p>
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-900/50">
          <FiPlay size={14} />
        </span>
      </div>

      <div className="relative overflow-hidden rounded bg-navy-900/90 p-6 text-white lg:col-span-2">
        <img src={product.features[3]?.image ?? product.image} alt={product.features[3]?.title || product.name} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative flex min-h-[220px] max-w-md flex-col justify-end">
          <h3 className="text-2xl font-semibold">{product.features[3]?.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/85">{product.features[3]?.description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductFeaturesSection;