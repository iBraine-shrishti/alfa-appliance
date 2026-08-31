import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { repairFaqData } from "../../data/repairPageData";

const RepairFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left Column: Heading */}
          <div>
            <Eyebrow>{repairFaqData.tag}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl leading-tight whitespace-pre-line">
              {repairFaqData.title}
            </h2>
          </div>

          {/* Right Column: Accordion mapped from JS data */}
          <div className="space-y-4">
            {repairFaqData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 bg-white transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-navy-950 pr-4">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-brand-blue text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FiChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RepairFaqSection;
