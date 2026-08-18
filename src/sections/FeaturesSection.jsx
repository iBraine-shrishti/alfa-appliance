import { TbPackage, TbRotate, TbWallet, TbMedal } from "react-icons/tb";
import Eyebrow from "../components/common/Eyebrow";
import FeatureCard from "../components/common/FeatureCard";
import { features } from "../data/features";
import advantageImg from "../assets/advantages.png";

const FEATURE_ICONS = {
  delivery: TbPackage,
  returns: TbRotate,
  checkout: TbWallet,
  support: TbMedal,
};

const FeaturesSection = () => {
  return (
    <section className="grid grid-cols-1 items-stretch bg-[#f8fafc] lg:grid-cols-2">
      <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <Eyebrow>The Alfa Advantage</Eyebrow>
        <h2 className="mt-3 w-full max-w-xl font-display text-2xl font-semibold leading-tight text-navy-950 sm:text-3xl md:text-[44px] lg:max-w-xl">
  Your Trusted Partner for Home Appliances
</h2>

             
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={FEATURE_ICONS[feature.id]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="min-h-[320px]">
        <img
          src={advantageImg}
          alt="Premium appliance lineup"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;