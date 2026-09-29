import { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiXCircle } from "react-icons/fi";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { repairTrustData } from "../../data/repairPageData";
import { checkPostcodeCoverage } from "../../data/repairZones";

const RepairTrustSection = ({ onOpenModal }) => {
  const [postcodeInput, setPostcodeInput] = useState("");
  const [postcodeStatus, setPostcodeStatus] = useState(null);
  const [coveredPostcode, setCoveredPostcode] = useState("");

  const handlePostcodeCheck = () => {
    const res = checkPostcodeCoverage(postcodeInput);
    setPostcodeStatus(res);
    if (res.covered) {
      setCoveredPostcode(res.outcode);
    }
  };

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <Container>
        {/* Header: Left-aligned on small screens (<=768px), centered on larger screens (md+) with single-line heading on large screens */}
        <div className="text-left md:text-center max-w-4xl xl:max-w-5xl mx-auto w-full">
          {/* Eyebrow */}
          <Eyebrow>{repairTrustData.tag}</Eyebrow>

          {/* Headline: Black prefix + Blue highlight (Single line on large screens, fluid responsive on smaller screens) */}
          <h2 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold tracking-tight text-navy-950 leading-tight sm:leading-snug text-left md:text-center lg:whitespace-nowrap">
            {repairTrustData.titlePrefix}{" "}
            <span className="text-[#1D60FF]">{repairTrustData.titleHighlight}</span>
          </h2>
        </div>

        {/* Inner components: Left-aligned on <=768px, middle-aligned on md+ */}
        <div className="mx-auto mt-6 sm:mt-8 md:mt-10 flex flex-col items-start md:items-center max-w-3xl w-full text-left md:text-center">
          {/* 3 Paragraphs */}
          <div className="space-y-3.5 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left md:text-center">
            {repairTrustData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* CTA Button & Subtle Price Note */}
          <div className="mt-7 sm:mt-8 flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center">
            <button
              type="button"
              onClick={() => onOpenModal && onOpenModal(coveredPostcode || "")}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#1D60FF] pl-7 pr-2.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#1D60FF]/25 transition-all duration-200 hover:scale-[1.02] hover:bg-[#1550DB] active:scale-[0.98]"
            >
              <span>{repairTrustData.buttonText}</span>
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-[#1D60FF] shadow-sm">
                <FiArrowRight size={16} />
              </span>
            </button>

            {/* Client requirement: understated pricing note */}
            <p className="mt-2.5 text-xs sm:text-sm font-medium text-slate-500 text-left md:text-center">
              {repairTrustData.priceNote}
            </p>
          </div>

          {/* Clean Divider */}
          <div className="my-7 sm:my-8 max-w-xl w-full md:mx-auto border-t border-slate-100" />

          {/* Quick Search Bar Underneath (Left-aligned on <=768px, centered on md+) */}
          <div className="w-full max-w-md md:mx-auto flex flex-col items-start md:items-center text-left md:text-center">
            <p className="font-bold text-sm sm:text-base text-navy-950 mb-3 text-left md:text-center">
              {repairTrustData.coverage.title}
            </p>

            <div className="flex flex-row items-center gap-2 sm:gap-2.5 w-full">
              <input
                type="text"
                value={postcodeInput}
                onChange={(event) => {
                  setPostcodeInput(event.target.value);
                  if (postcodeStatus) setPostcodeStatus(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handlePostcodeCheck();
                  }
                }}
                placeholder={repairTrustData.coverage.placeholder}
                className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-navy-950 uppercase placeholder:normal-case outline-none placeholder:text-slate-400 transition focus:border-[#1D60FF] focus:bg-white focus:ring-2 focus:ring-[#1D60FF]/15 text-left md:text-center sm:md:text-left"
              />
              <button
                type="button"
                onClick={handlePostcodeCheck}
                className="shrink-0 w-auto cursor-pointer rounded-xl bg-[#1D60FF] hover:bg-[#1550DB] px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all active:scale-95"
              >
                {repairTrustData.coverage.buttonText}
              </button>
            </div>

            {/* Coverage Status Message */}
            {postcodeStatus && (
              <div
                className={`mt-4 rounded-xl border p-4 text-xs sm:text-sm transition-all ${
                  postcodeStatus.covered
                    ? "border-emerald-200 bg-emerald-50/90 text-emerald-900"
                    : postcodeStatus.error
                    ? "border-amber-200 bg-amber-50/90 text-amber-900"
                    : "border-rose-200 bg-rose-50/90 text-rose-900"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {postcodeStatus.covered ? (
                    <FiCheckCircle
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={18}
                    />
                  ) : (
                    <FiXCircle
                      className="mt-0.5 shrink-0 text-rose-600"
                      size={18}
                    />
                  )}
                  <div className="flex-1 space-y-1">
                    <p className="font-semibold leading-snug">
                      {postcodeStatus.message}
                    </p>
                    {postcodeStatus.daysMessage && (
                      <p className="text-xs text-emerald-800/90 font-medium">
                        {postcodeStatus.daysMessage}
                      </p>
                    )}
                    {postcodeStatus.covered && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() =>
                            onOpenModal && onOpenModal(postcodeStatus.outcode)
                          }
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#1D60FF] hover:underline cursor-pointer"
                        >
                          <span>Proceed to book for {postcodeStatus.outcode}</span>
                          <span>→</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RepairTrustSection;
