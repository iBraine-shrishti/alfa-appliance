import { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiXCircle } from "react-icons/fi";
import {
  LuShieldCheck,
  LuWrench,
  LuThumbsUp,
  LuMapPin,
  LuTruck,
  LuClock,
} from "react-icons/lu";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { repairTrustData } from "../../data/repairPageData";

const postcodeCoverage = [
  "NW",
  "SE",
  "SW",
  "W",
  "E",
  "N",
  "EC",
  "WC",
  "IG",
  "RM",
  "DA",
  "BR",
  "CR",
  "KT",
  "TW",
  "UB",
  "HA",
  "WD",
  "EN",
  "AL",
  "CM",
  "SS",
  "TN",
  "ME",
  "CT",
  "BN",
  "RH",
  "GU",
  "SO",
  "PO",
  "BH",
  "DT",
  "EX",
  "PL",
  "TR",
  "TQ",
  "SA",
  "CF",
  "NP",
  "LL",
  "CH",
  "L",
  "M",
  "SK",
  "WA",
  "HD",
  "HX",
  "LS",
  "BD",
  "S",
  "DE",
  "NG",
  "NN",
  "LE",
  "CV",
  "B",
  "DY",
  "WV",
  "ST",
  "WS",
  "TF",
  "WR",
  "HR",
  "OX",
  "GL",
  "SN",
  "BA",
  "BS",
  "TA",
];

const RepairTrustSection = ({ onOpenModal }) => {
  const [postcodeInput, setPostcodeInput] = useState("");
  const [postcodeStatus, setPostcodeStatus] = useState(null);

  const handlePostcodeCheck = () => {
    const trimmed = postcodeInput
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    const area = trimmed.replace(/\d.*$/, "");

    if (!trimmed || trimmed.length < 2) {
      setPostcodeStatus({
        type: "error",
        message: "Please enter the first part of your postcode to check coverage.",
      });
      return;
    }

    const isCovered = postcodeCoverage.includes(area);

    if (isCovered) {
      setPostcodeStatus({
        type: "success",
        message: "Fantastic — you’re in luck! We cover your postcode.",
      });
      return;
    }

    setPostcodeStatus({
      type: "danger",
      message:
        "Unfortunately we don’t currently cover your area — we’re working on expanding, so please check back soon.",
    });
  };

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow */}
            <Eyebrow>{repairTrustData.tag}</Eyebrow>

            {/* Headline */}
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-[42px] leading-[1.18]">
              {repairTrustData.titlePrefix}{" "}
              <span className="text-[#1D60FF]">
                {repairTrustData.titleHighlight}
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4">
              {repairTrustData.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-[15px] leading-relaxed text-slate-600"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* CTA Button & Subtle Price Note */}
            <div className="mt-8 flex flex-col items-start">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#1D60FF] pl-6 pr-2 py-2 sm:pl-7 sm:pr-2.5 sm:py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#1D60FF]/25 transition-all duration-200 hover:scale-[1.02] hover:bg-[#1550DB] active:scale-[0.98]"
              >
                <span>{repairTrustData.buttonText}</span>
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-[#1D60FF] shadow-sm">
                  <FiArrowRight size={16} />
                </span>
              </button>

              {/* Client requirement: price is NOT dominant, kept clean and understated */}
              <p className="mt-2.5 text-xs sm:text-sm font-medium text-slate-500">
                {repairTrustData.priceNote}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6 sm:gap-8 w-full">
              <div className="flex items-center gap-2.5">
                <LuShieldCheck className="text-[#1D60FF] shrink-0" size={20} />
                <span className="text-sm font-semibold text-slate-800">
                  {repairTrustData.trustBadges[0].label}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <LuWrench className="text-[#1D60FF] shrink-0" size={19} />
                <span className="text-sm font-semibold text-slate-800">
                  {repairTrustData.trustBadges[1].label}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <LuThumbsUp className="text-[#1D60FF] shrink-0" size={19} />
                <span className="text-sm font-semibold text-slate-800">
                  {repairTrustData.trustBadges[2].label}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Coverage Checker Card */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none lg:col-span-5">
            {/* Playful Annotation */}
            <div className="hidden sm:flex items-center justify-end gap-1.5 mb-2.5 text-[#1D60FF]">
              <span className="font-['Instrument_Sans',_sans-serif] italic font-semibold text-xs sm:text-sm tracking-tight">
                Reliable Repairs • Happier Homes
              </span>
              <span className="text-base leading-none select-none">⤵</span>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D60FF]">
                <LuMapPin size={16} className="text-[#1D60FF] shrink-0" />
                <span>{repairTrustData.coverage.tag}</span>
              </div>

              {/* Title */}
              <h3 className="mt-3 font-display text-2xl sm:text-[28px] font-extrabold tracking-tight text-navy-950">
                {repairTrustData.coverage.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {repairTrustData.coverage.subtitle}
              </p>

              {/* Postcode Form */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
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
                  placeholder="e.g. SW1A"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-medium text-navy-950 outline-none placeholder:text-slate-400 transition focus:border-[#1D60FF] focus:bg-white focus:ring-2 focus:ring-[#1D60FF]/20"
                />
                <button
                  type="button"
                  onClick={handlePostcodeCheck}
                  className="shrink-0 cursor-pointer rounded-xl bg-[#1D60FF] px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#1550DB] active:scale-95"
                >
                  Check
                </button>
              </div>

              {/* Status Message */}
              {postcodeStatus && (
                <div
                  className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 text-xs sm:text-sm leading-snug transition-all ${
                    postcodeStatus.type === "success"
                      ? "border-emerald-200 bg-emerald-50/90 text-emerald-800"
                      : postcodeStatus.type === "danger"
                        ? "border-rose-200 bg-rose-50/90 text-rose-800"
                        : "border-amber-200 bg-amber-50/90 text-amber-800"
                  }`}
                >
                  {postcodeStatus.type === "success" ? (
                    <FiCheckCircle
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={18}
                    />
                  ) : postcodeStatus.type === "danger" ? (
                    <FiXCircle
                      className="mt-0.5 shrink-0 text-rose-600"
                      size={18}
                    />
                  ) : (
                    <span className="mt-0.5 shrink-0 font-bold text-amber-600">
                      •
                    </span>
                  )}
                  <span>{postcodeStatus.message}</span>
                </div>
              )}

              {/* 3 Badges inside Card */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 divide-x divide-slate-100">
                <div className="flex flex-col items-center text-center px-2">
                  <LuTruck className="text-[#1D60FF] mb-2" size={22} />
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 leading-snug">
                    {repairTrustData.coverage.features[0].text}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center px-2">
                  <LuClock className="text-[#1D60FF] mb-2" size={22} />
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 leading-snug">
                    {repairTrustData.coverage.features[1].text}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center px-2">
                  <LuShieldCheck className="text-[#1D60FF] mb-2" size={22} />
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 leading-snug">
                    {repairTrustData.coverage.features[2].text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RepairTrustSection;
