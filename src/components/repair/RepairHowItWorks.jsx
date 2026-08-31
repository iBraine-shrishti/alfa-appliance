import { useState } from "react";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { howItWorksData } from "../../data/repairPageData";

const DiagnosticPhoneIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    <circle cx="12" cy="8" r="2.5" />
    <path d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4" />
  </svg>
);

const RepairHowItWorks = () => {
  const [activeCardId, setActiveCardId] = useState(1);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <Eyebrow>{howItWorksData.tag}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {howItWorksData.title}
          </h2>
        </div>

        <div className="mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 items-start">
          {howItWorksData.cards.map((card, index) => {
            const isActive = activeCardId === card.id;
            const isStaggeredDown = index === 1 || index === 2;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                className={`group flex flex-col justify-start rounded-3xl p-7 transition-all duration-300 cursor-pointer min-h-[300px] ${
                  isStaggeredDown ? "lg:translate-y-8" : "lg:translate-y-0"
                } ${
                  isActive
                    ? "bg-white border-2 border-[#1D60FF] shadow-xl ring-4 ring-[#1D60FF]/5 -translate-y-1"
                    : "bg-[#F6F7F9] border-2 border-transparent hover:bg-white hover:border-[#1D60FF] hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
                    isActive
                      ? "bg-[#1D60FF] text-white"
                      : "bg-[#0B1528] text-white group-hover:bg-[#1D60FF]"
                  }`}
                >
                  <DiagnosticPhoneIcon />
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-navy-950">
                  {card.title}
                </h3>

                {card.description && (
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                )}

                {card.bullets && (
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-snug">
                        <span className="text-slate-400 shrink-0">•</span>
                        <span>
                          {bullet.prefix && (
                            <strong className="text-navy-950 mr-1">
                              {bullet.prefix}
                            </strong>
                          )}
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default RepairHowItWorks;
