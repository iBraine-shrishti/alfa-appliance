import { FiArrowRight } from "react-icons/fi";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import pricingEngineerImg from "../../assets/repair/pricing-engineer.png";
import { pricingBannerData } from "../../data/repairPageData";

const RepairPricingBanner = ({ onOpenModal }) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#F6F8FD] via-[#EEF4FF] to-[#E9F0FD] mt-20 pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-visible border-t border-blue-50">
      <Container className="relative">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr] items-center">
          
          <div className="flex flex-col items-start z-10 pt-2 pb-8 sm:pb-12 lg:py-12">
            <Eyebrow>{pricingBannerData.tag}</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl leading-tight">
              {pricingBannerData.titlePrefix}
              <br />
              {pricingBannerData.titleMain}{" "}
              <span className="inline-block rounded-lg bg-[#1D60FF] px-3.5 py-0.5 text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl align-middle ml-1">
                {pricingBannerData.price}
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-xs sm:text-sm leading-relaxed text-slate-600">
              {pricingBannerData.description}
            </p>

            <button
              type="button"
              onClick={onOpenModal}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1D60FF] pl-6 pr-2.5 py-2.5 text-base font-semibold text-white shadow-md shadow-[#1D60FF]/25 hover:bg-[#1550DB] transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{pricingBannerData.buttonText}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1D60FF]">
                <FiArrowRight size={15} />
              </span>
            </button>
          </div>
          <div className="w-full flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:w-auto pointer-events-none z-10 self-end mt-4 lg:mt-0">
            <img
              src={pricingEngineerImg}
              alt="Alfa Appliances Certified Engineer"
              className="max-h-[300px] sm:max-h-[420px] lg:max-h-[520px] xl:max-h-[580px] w-auto object-contain object-bottom block -mb-px"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default RepairPricingBanner;