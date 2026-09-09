import { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiXCircle } from "react-icons/fi";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import engineerTrustImg from "../../assets/repair/engineer-trust.png";
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
        message:
          "Please enter the first part of your postcode to check coverage.",
      });
      return;
    }

    const isCovered = postcodeCoverage.some(
      (prefix) => area === prefix || area.startsWith(prefix),
    );

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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <Eyebrow>{repairTrustData.tag}</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-[44px] leading-tight">
              {repairTrustData.title}
            </h2>

            <div className="mt-6 space-y-4">
              {repairTrustData.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#1D60FF] pl-6 pr-2.5 py-2.5 text-base font-semibold text-white shadow-md shadow-[#1D60FF]/25 transition-all hover:scale-[1.02] hover:bg-[#1550DB]"
            >
              <span>{repairTrustData.buttonText}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1D60FF]">
                <FiArrowRight size={15} />
              </span>
            </button>
          </div>

          {/* Right Column: Pricing & Coverage Card */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
            <div className="rounded-3xl border border-[#DCE8FF] bg-[#F5F9FF] p-6 sm:p-8 shadow-sm">
              {/* Header Badge */}
              <p className="text-xs font-bold uppercase tracking-widest text-[#1D60FF]">
                Diagnostic Visit
              </p>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
                  £59.99
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  Fixed Call-Out Charge
                </span>
              </div>

              {/* Card Subtitle */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Fixed-price diagnostic visit by our certified engineers. No
                hidden charges.
              </p>

              <hr className="my-6 border-[#DCE8FF]" />

              {/* Postcode Checker */}
              <div>
                <label className="block text-sm font-bold text-navy-950">
                  Check coverage area
                </label>
                <div className="mt-2.5 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    value={postcodeInput}
                    onChange={(event) => setPostcodeInput(event.target.value)}
                    placeholder="e.g. SW1A"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-[#1D60FF] focus:ring-1 focus:ring-[#1D60FF]"
                  />
                  <button
                    type="button"
                    onClick={handlePostcodeCheck}
                    className="shrink-0 rounded-xl bg-[#1D60FF] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1550DB]"
                  >
                    Check
                  </button>
                </div>

                {/* Status Message */}
                {postcodeStatus && (
                  <div
                    className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 text-sm leading-snug ${
                      postcodeStatus.type === "success"
                        ? "border-emerald-200 bg-emerald-50/80 text-emerald-800"
                        : postcodeStatus.type === "danger"
                          ? "border-rose-200 bg-rose-50/80 text-rose-800"
                          : "border-amber-200 bg-amber-50/80 text-amber-800"
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RepairTrustSection;
