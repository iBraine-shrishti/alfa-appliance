import { FiArrowRight } from "react-icons/fi";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import engineerTrustImg from "../../assets/repair/engineer-trust.png";
import { repairTrustData } from "../../data/repairPageData";

const RepairTrustSection = ({ onOpenModal }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Engineer Image */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
            <img
              src={engineerTrustImg}
              alt="Alfa Appliances Certified Engineer"
              className="h-full w-full object-cover max-h-[500px]"
            />
          </div>

          {/* Right Column: Copy & Book Button */}
          <div className="flex flex-col items-start">
            {/* Eyebrow Component */}
            <Eyebrow>{repairTrustData.tag}</Eyebrow>

            {/* Heading */}
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-[44px] leading-tight">
              {repairTrustData.title}
            </h2>

            {/* Paragraphs mapped from JS */}
            <div className="mt-6 space-y-4">
              {repairTrustData.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base leading-relaxed text-slate-600"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* CTA Button matching button-css.png */}
            <button
              type="button"
              onClick={onOpenModal}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1D60FF] pl-6 pr-2.5 py-2.5 text-base font-semibold text-white shadow-md shadow-[#1D60FF]/25 hover:bg-[#1550DB] transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{repairTrustData.buttonText}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1D60FF]">
                <FiArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RepairTrustSection;
