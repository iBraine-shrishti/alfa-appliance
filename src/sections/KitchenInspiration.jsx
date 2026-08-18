import { FiArrowRight } from "react-icons/fi";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import InspirationTile from "../components/banner/InspirationTile";

import kitchenImg from "../assets/inspiration/kitchen.png";
import washingMachineImg from "../assets/inspiration/washing-machine.png";
import ceramicHobsImg from "../assets/inspiration/ceramic-hobs.png";

const KitchenInspiration = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <Eyebrow>Kitchen Inspiration</Eyebrow>
           <h2 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl md:text-[44px]">
              Discover Inspiration for Your Dream Kitchen
            </h2>
          </div>

          <div className="w-full max-w-[600px]">
            <p className="text-sm text-navy-900/60 sm:text-base md:text-[17px]">
              Powerful washing machines with intelligent programmes, energy efficiency, and exceptional fabric care for every household.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Explore Laundry
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                  <FiArrowRight size={14} />
                </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-lg">
            <img
              src={kitchenImg}
              alt="Dream kitchen with premium appliances"
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <InspirationTile image={washingMachineImg} label="Washing Machine" />
            <InspirationTile image={ceramicHobsImg} label="Ceramic Hobs" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default KitchenInspiration;