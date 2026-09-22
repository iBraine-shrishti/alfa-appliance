import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiPrinter,
  FiClock,
  FiTool,
  FiGift,
  FiArrowUp,
  FiChevronRight,
} from "react-icons/fi";
import heroBg from "../assets/repair/hero-bg.png";
import Container from "../components/common/Container";

const SECTIONS = [
  { id: "scope-of-service", number: 1, title: "Scope of service" },
  { id: "diagnostic-fee", number: 2, title: "Call-out and diagnostic fee" },
  { id: "diagnosis-quotation", number: 3, title: "Diagnosis and quotation" },
  {
    id: "beyond-economical-repair",
    number: 4,
    title: "Where an appliance is beyond economical repair",
  },
  { id: "parts-and-repairs", number: 5, title: "Parts and repairs" },
  { id: "repair-guarantee", number: 6, title: "Repair guarantee" },
  { id: "access-preparation", number: 7, title: "Access and preparation" },
  {
    id: "missed-appointments",
    number: 8,
    title: "Missed appointments and no access",
  },
  { id: "accurate-information", number: 9, title: "Accurate information" },
  { id: "staff-conduct", number: 10, title: "Staff conduct and safety" },
  {
    id: "liability-contents",
    number: 11,
    title: "Liability and appliance contents",
  },
  { id: "payment", number: 12, title: "Payment" },
  {
    id: "cancellation-timeframes",
    number: 13,
    title: "Cancellation, rescheduling, and timeframes",
  },
  { id: "governing-law", number: 14, title: "General and governing law" },
];

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState("scope-of-service");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll position for active section & back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Track active section
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#f4f7f6] text-navy-950">
      {/* 1. HERO SECTION (Artigenius layout with Alfa Blue brand theme) */}
      <section className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-navy-950 flex items-center justify-center text-center text-white">
        <img
          src={heroBg}
          alt="Alfa Appliances Terms & Conditions"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950/95" />

        <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-white/70 mb-4">
            <Link
              to="/"
              className="text-white/80 hover:text-brand-blue transition-colors"
            >
              Home
            </Link>
            <span className="text-white/40">&gt;</span>
            <Link
              to="/book-repair"
              className="text-white/80 hover:text-brand-blue transition-colors"
            >
              Alfa Repairs
            </Link>
            <span className="text-white/40">&gt;</span>
            <span className="text-brand-blue">Terms &amp; Conditions</span>
          </nav>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white leading-tight">
            Terms &amp; Conditions
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-medium">
            Terms and conditions governing domestic appliance repairs,
            diagnostic visits, and customer services.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiClock size={13} className="text-brand-blue" />
              Effective: September 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiShield size={13} className="text-brand-blue" />
              Governed by English Law
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiCheckCircle size={13} className="text-brand-blue" />
              Consumer Rights Protected
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Elevated Overlapping Info Box) */}
      <section className="relative z-20 pb-20 -mt-14 sm:-mt-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* STICKY SIDEBAR NAVIGATION (Desktop) */}
            <aside className="hidden lg:block sticky top-28 self-start bg-white rounded border border-slate-200/90 p-5 shadow-lg shadow-navy-950/5">
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
                  <FiTool className="text-brand-blue" size={15} />
                  <span>Table of Contents</span>
                </div>
                <button
                  onClick={handlePrint}
                  title="Print Terms"
                  className="text-slate-400 hover:text-navy-950 p-1 rounded transition-colors cursor-pointer"
                >
                  <FiPrinter size={15} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left px-3 py-2 rounded-lg font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        isActive
                          ? "bg-brand-blue/10 text-brand-blue font-bold border-l-2 border-brand-blue"
                          : "text-slate-600 hover:bg-slate-50 hover:text-navy-950"
                      }`}
                    >
                      <span className="truncate">
                        <span className="text-slate-400 mr-1.5 font-normal">
                          {sec.number}.
                        </span>
                        {sec.title}
                      </span>
                      {isActive && (
                        <FiChevronRight
                          size={12}
                          className="shrink-0 text-brand-blue"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to="/book-repair"
                  className="w-full text-center py-2.5 px-3 rounded-lg bg-brand-blue text-white font-semibold text-xs hover:bg-brand-blue-dark transition-colors shadow-xs"
                >
                  Book a Repair (£59.99)
                </Link>
                <p className="text-[11px] text-slate-400 text-center">
                  Questions? Call 0207 923 4080
                </p>
              </div>
            </aside>

            {/* MAIN LEGAL DOCUMENT CONTAINER */}
            <div className="bg-white rounded p-5 sm:p-8 md:p-12 shadow-xl shadow-navy-950/5 border border-slate-200/90 font-['Plus_Jakarta_Sans',_sans-serif] min-w-0">
              {/* Introduction Callout Banner */}
              <div className="rounded border border-blue-100 bg-blue-50/70 p-5 sm:p-6 mb-10 flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mt-0.5">
                  <FiShield size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-950 text-sm sm:text-base">
                    Terms and Conditions for Alfa Repairs
                  </h3>
                  <p className="mt-1 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    By booking a repair and paying the call-out and diagnostic
                    fee, you confirm that you have read, understood, and
                    accepted these Terms.
                  </p>
                </div>
              </div>

              {/* Mobile Quick-Jump Dropdown */}
              <div className="lg:hidden mb-8 p-4 bg-slate-50 rounded border border-slate-200">
                <label
                  htmlFor="mobile-jump"
                  className="block text-xs font-bold text-navy-950 mb-2 uppercase tracking-wider"
                >
                  Jump to Section:
                </label>
                <select
                  id="mobile-jump"
                  value={activeSection}
                  onChange={(e) => scrollToSection(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-navy-950 outline-none focus:border-brand-blue"
                >
                  {SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.number}. {sec.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* 14 NUMBERED LEGAL SECTIONS */}
              <div className="space-y-12">
                {/* SECTION 1 */}
                <div id="scope-of-service" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      1
                    </span>
                    Scope of Service
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      We provide repairs to domestic (household) appliances
                      only, across the following categories: laundry (including
                      washing machines and dryers), refrigeration, dishwashers,
                      and cooking appliances.
                    </p>
                    <p>
                      We do not provide repairs to commercial or industrial
                      appliances, and we reserve the right to decline any repair
                      that falls outside our expertise or the categories above.
                    </p>
                    <p>
                      Our Service is available only within the postcode areas we
                      cover. Coverage can be checked on our website before
                      booking. If your address falls outside our coverage area,
                      we will be unable to attend.
                    </p>
                  </div>
                </div>

                {/* SECTION 2 */}
                <div id="diagnostic-fee" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      2
                    </span>
                    Call-Out and Diagnostic Fee
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <div className="rounded border border-blue-200 bg-blue-50/50 p-4 sm:p-5 my-3">
                      <p className="font-semibold text-navy-950 mb-2">
                        A fixed call-out and diagnostic fee of{" "}
                        <span className="text-brand-blue font-bold text-lg">
                          £59.99
                        </span>{" "}
                        applies to every booking. This fee covers:
                      </p>
                      <ul className="space-y-2 pl-6">
                        <li className="relative">
                          <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                            •
                          </span>
                          The engineer's attendance at your address at the
                          agreed date and time; and
                        </li>
                        <li className="relative">
                          <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                            •
                          </span>
                          A full diagnosis of the fault by a qualified engineer.
                        </li>
                      </ul>
                    </div>

                    <p>
                      The call-out and diagnostic fee is paid online at the time
                      of booking, before the engineer attends. It covers the
                      engineer's attendance at your address and a full diagnosis
                      of the fault. Because it pays for the reserved appointment
                      and the engineer's time and diagnosis, it is
                      non-refundable once the engineer has attended — including
                      where the appliance is found to be beyond economical
                      repair (see{" "}
                      <button
                        type="button"
                        onClick={() =>
                          scrollToSection("beyond-economical-repair")
                        }
                        className="text-brand-blue font-medium underline hover:text-brand-blue-dark cursor-pointer"
                      >
                        section 4
                      </button>
                      ), and in the missed-appointment and no-access cases in{" "}
                      <button
                        type="button"
                        onClick={() => scrollToSection("missed-appointments")}
                        className="text-brand-blue font-medium underline hover:text-brand-blue-dark cursor-pointer"
                      >
                        section 8
                      </button>
                      . The fee is separate from, and does not count toward, the
                      cost of any subsequent repair, parts, or labour.
                    </p>
                  </div>
                </div>

                {/* SECTION 3 */}
                <div id="diagnosis-quotation" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      3
                    </span>
                    Diagnosis and Quotation
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      Once the engineer has diagnosed the fault, we will provide
                      a quotation for the repair, covering parts and labour
                      where applicable.
                    </p>
                    <p>
                      No repair work will proceed beyond the initial diagnosis
                      without your approval of the quotation. You are under no
                      obligation to accept the quotation. If you choose not to
                      proceed, the call-out and diagnostic fee remains payable
                      as set out in{" "}
                      <button
                        type="button"
                        onClick={() => scrollToSection("diagnostic-fee")}
                        className="text-brand-blue font-medium underline hover:text-brand-blue-dark cursor-pointer"
                      >
                        section 2
                      </button>
                      .
                    </p>
                  </div>
                </div>

                {/* SECTION 4 */}
                <div id="beyond-economical-repair" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      4
                    </span>
                    Where an Appliance is Beyond Economical Repair
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      Following diagnosis, an appliance may be found to be
                      beyond economical repair. This can happen for several
                      reasons, including but not limited to:
                    </p>
                    <ul className="space-y-2 pl-6 my-2">
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Required parts are no longer available or have been
                        discontinued by the manufacturer;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        The cost of the repair is disproportionate to the value
                        or age of the appliance; or
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        The fault is such that a safe, reliable repair cannot be
                        carried out.
                      </li>
                    </ul>
                    <p>
                      In these cases the call-out and diagnostic fee remains
                      payable, as it covers the engineer's attendance and
                      diagnosis.
                    </p>

                    {/* Goodwill Gesture Callout */}
                    <div className="rounded border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5 my-4 flex items-start gap-3.5">
                      <div className="h-9 w-9 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center mt-0.5">
                        <FiGift size={18} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-emerald-950 text-sm sm:text-base">
                          Customer Goodwill Gesture (£20 Replacement Credit)
                        </h4>
                        <p className="mt-1 text-emerald-900 text-sm leading-relaxed">
                          As a goodwill gesture, if your appliance is found to
                          be beyond economical repair, we will{" "}
                          <strong>
                            credit £20 of your £59.99 diagnostic fee
                          </strong>{" "}
                          toward a replacement appliance purchased from us
                          within <strong>7 days</strong> of your diagnostic
                          visit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 5 */}
                <div id="parts-and-repairs" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      5
                    </span>
                    Parts and Repairs
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      Where the necessary parts are available and carried on the
                      engineer's van, the repair can be completed during the
                      first visit. If you would like the repair carried out
                      there and then, payment for the repair must be made in
                      full before any work begins. A secure payment link will be
                      sent to your phone to complete instantly on site.
                    </p>
                    <p>
                      If the repair cannot be completed on the first visit —
                      whether because payment has not been made, or because the
                      required parts are not available on the day — the engineer
                      will not proceed with the repair. We will send you a
                      written quotation for the work required. Once the
                      quotation is accepted and paid, we will order any parts
                      needed and arrange a return visit to complete the repair.
                    </p>
                    <p className="rounded-lg bg-slate-50 border border-slate-200 p-3.5 text-navy-900 font-medium">
                      <strong>No Return Visit Charge:</strong> No additional
                      call-out or travel charge applies to any return visits
                      required to complete the same repair. Once you have
                      approved and paid for a repair, all visits necessary to
                      complete that repair — including collecting or fitting
                      ordered parts — are included.
                    </p>
                  </div>
                </div>

                {/* SECTION 6 */}
                <div id="repair-guarantee" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      6
                    </span>
                    Repair Guarantee (12 Months)
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <div className="rounded border border-blue-200 bg-blue-50/60 p-4 sm:p-5 my-2 flex items-start gap-3.5">
                      <div className="h-9 w-9 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center mt-0.5">
                        <FiCheckCircle size={18} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-navy-950 text-sm sm:text-base">
                          Full 12-Month Guarantee Protection
                        </h4>
                        <p className="mt-1 text-slate-700 text-sm leading-relaxed">
                          Completed repairs are covered by a{" "}
                          <strong>12-month guarantee</strong>. The guarantee
                          applies to the specific repair carried out and any
                          parts we supplied and fitted as part of that repair.
                        </p>
                      </div>
                    </div>

                    <p>
                      If the same fault recurs within the guarantee period, we
                      will re-attend and put it right at no further charge. The
                      guarantee does not cover:
                    </p>
                    <ul className="space-y-2 pl-6 my-2">
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        New or unrelated faults, or faults in other parts of the
                        appliance;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Damage caused by misuse, accident, neglect, or continued
                        use of a faulty appliance;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Any repair, modification, or interference carried out by
                        a third party after our visit; or
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Faults arising from the age or general wear of the
                        appliance rather than the repair itself.
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 italic">
                      This guarantee is in addition to, and does not affect,
                      your statutory rights.
                    </p>
                  </div>
                </div>

                {/* SECTION 7 */}
                <div id="access-preparation" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      7
                    </span>
                    Access and Preparation
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      To allow the engineer to work safely and effectively,
                      please ensure that:
                    </p>
                    <ul className="space-y-2 pl-6 my-2">
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        There is safe, clear, and unobstructed access to the
                        appliance;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        The relevant power and, where applicable, water supply
                        are switched on;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        The appliance has been emptied — for example, food
                        removed from a fridge or freezer, and laundry removed
                        from a washing machine or dryer;
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Someone aged 18 or over is present for the duration of
                        the visit; and
                      </li>
                      <li className="relative">
                        <span className="absolute -left-5 text-brand-blue font-black text-xl leading-none top-0.5">
                          •
                        </span>
                        Any pets are secured away from the working area.
                      </li>
                    </ul>
                    <p>
                      If the engineer is unable to work because these conditions
                      are not met, the visit may be treated as a missed
                      appointment under{" "}
                      <button
                        type="button"
                        onClick={() => scrollToSection("missed-appointments")}
                        className="text-brand-blue font-medium underline hover:text-brand-blue-dark cursor-pointer"
                      >
                        section 8
                      </button>
                      .
                    </p>
                  </div>
                </div>

                {/* SECTION 8 */}
                <div id="missed-appointments" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      8
                    </span>
                    Missed Appointments and No Access
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      If you are not present at the agreed appointment time and
                      the engineer is unable to gain access, the engineer will
                      wait for up to 5 minutes and will attempt to make contact.
                    </p>
                    <p>
                      If there is no response or access cannot be gained, the
                      visit will be treated as a missed appointment. In these
                      circumstances the call-out and diagnostic fee will not be
                      refunded, as the engineer has attended and reserved the
                      time. A further visit will be subject to a new call-out
                      and diagnostic fee.
                    </p>
                    <p>
                      This also applies where access is refused, where the
                      working conditions are unreasonable or unsafe, or where
                      the preparation requirements in{" "}
                      <button
                        type="button"
                        onClick={() => scrollToSection("access-preparation")}
                        className="text-brand-blue font-medium underline hover:text-brand-blue-dark cursor-pointer"
                      >
                        section 7
                      </button>{" "}
                      have not been met.
                    </p>
                  </div>
                </div>

                {/* SECTION 9 */}
                <div id="accurate-information" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      9
                    </span>
                    Accurate Information
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      You are responsible for providing accurate and complete
                      information when booking, including your address, contact
                      details, and details of the appliance and fault.
                    </p>
                    <p>
                      Where false, misleading, or incomplete information has
                      been provided, we reserve the right to decline to carry
                      out or continue the repair, and we are under no obligation
                      to refund any call-out fee or other sums paid in respect
                      of a booking made on that basis.
                    </p>
                  </div>
                </div>

                {/* SECTION 10 */}
                <div id="staff-conduct" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      10
                    </span>
                    Staff Conduct and Safety
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <div className="rounded border border-rose-200 bg-rose-50/60 p-4 sm:p-5 my-2">
                      <div className="flex items-center gap-2 text-rose-900 font-bold mb-1.5 text-sm">
                        <FiAlertCircle
                          className="text-rose-600 shrink-0"
                          size={17}
                        />
                        Zero Tolerance Policy
                      </div>
                      <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                        We are committed to the safety and wellbeing of our
                        staff, and our engineers in particular. We do not
                        tolerate abusive, threatening, aggressive, or
                        discriminatory behaviour toward any member of our team.
                      </p>
                    </div>

                    <p>
                      If an engineer is treated in this way, they have the right
                      to stop work, leave the premises, and decline to complete
                      the repair. In such cases the call-out and diagnostic fee
                      will not be refunded. We reserve the right to refuse
                      future bookings from any customer who has behaved in this
                      manner.
                    </p>
                    <p>
                      Our engineers also have the right to refuse to begin or to
                      stop a repair where conditions are unsafe — for example,
                      hazards relating to gas, electrics, water, infestation, or
                      any other risk to their health and safety.
                    </p>
                  </div>
                </div>

                {/* SECTION 11 */}
                <div id="liability-contents" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      11
                    </span>
                    Liability and Appliance Contents
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      Before the engineer's visit, please remove all food and
                      other contents from the appliance and back up or remove
                      anything of value. We are not responsible for spoiled
                      food, lost contents, or laundry left in an appliance.
                    </p>
                    <p>
                      We are not liable for pre-existing damage, or for faults
                      or wear elsewhere in the appliance that are unrelated to
                      the repair we carry out. Older appliances may reveal
                      further faults once dismantled; we will inform you if this
                      occurs, but we accept no liability for such pre-existing
                      conditions.
                    </p>
                    <p>
                      Our total liability in connection with any repair is
                      limited to the amount paid by you for that repair. We are
                      not liable for any indirect or consequential loss. Nothing
                      in these Terms excludes or limits our liability where it
                      would be unlawful to do so, including liability for death
                      or personal injury caused by our negligence.
                    </p>
                  </div>
                </div>

                {/* SECTION 12 */}
                <div id="payment" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      12
                    </span>
                    Payment
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      The call-out and diagnostic fee is paid online at the time
                      of booking, before the engineer attends. Payment for any
                      repair carried out on the first visit is made on site via
                      a secure payment link, before work begins. Where parts
                      need to be ordered, payment for those parts is required
                      before they are ordered.
                    </p>
                    <p>
                      All prices include VAT where applicable. We accept the
                      payment methods shown at the point of booking or as
                      advised by the engineer.
                    </p>
                  </div>
                </div>

                {/* SECTION 13 */}
                <div id="cancellation-timeframes" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      13
                    </span>
                    Cancellation, Rescheduling, and Timeframes
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      If you need to cancel or reschedule, please give us as
                      much notice as possible, and at least{" "}
                      <strong>24 hours</strong> before the appointment.
                    </p>
                    <p>
                      As a consumer booking online, you normally have the right
                      to cancel within 14 days of booking. However, if you ask
                      us to attend and begin the Service within that 14-day
                      period, you agree that the Service is starting, and you
                      may be charged for the work carried out (including the
                      call-out and diagnostic fee) if you then cancel.
                    </p>
                    <p>
                      We will always try to attend and complete repairs
                      promptly, but appointment times and completion dates are
                      estimates and are not guaranteed. Some delays — for
                      example, parts lead times — are outside our control.
                    </p>
                  </div>
                </div>

                {/* SECTION 14 */}
                <div id="governing-law" className="scroll-mt-28">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                      14
                    </span>
                    General and Governing Law
                  </h2>
                  <div className="space-y-3.5 text-slate-700 text-[16px] leading-[1.8] font-normal">
                    <p>
                      We may update these Terms from time to time. The version
                      in force is the one published on our website at the time
                      of your booking.
                    </p>
                    <p>
                      Nothing in these Terms affects your statutory rights as a
                      consumer under UK law. These Terms are governed by the law
                      of England and Wales, and any disputes are subject to the
                      exclusive jurisdiction of its courts.
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM CONTACT & SUPPORT BOX */}
              <div className="mt-16 rounded-2xl border border-slate-200 bg-[#faf8f5] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy-950">
                      Need Assistance or Have Questions?
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Our customer care team is available to assist you with any
                      questions regarding our terms or repair services.
                    </p>
                  </div>
                  <Link
                    to="/book-repair"
                    className="shrink-0 rounded-lg bg-brand-blue px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors shadow-xs cursor-pointer"
                  >
                    Book a Repair Online
                  </Link>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <FiPhone size={17} />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-950 text-xs">
                        Telephone
                      </div>
                      <a
                        href="tel:02079234080"
                        className="text-slate-600 hover:text-brand-blue transition-colors font-medium"
                      >
                        0207 923 4080
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <FiMail size={17} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-navy-950 text-xs">
                        Email Us
                      </div>
                      <a
                        href="mailto:alfaappliancesltd@gmail.com"
                        className="text-slate-600 hover:text-brand-blue transition-colors font-medium break-all block"
                        title="alfaappliancesltd@gmail.com"
                      >
                        alfaappliancesltd@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <FiMapPin size={17} />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-950 text-xs">
                        Location
                      </div>
                      <div className="text-slate-600 font-medium leading-snug">
                        105 Stoke Newington High St, N16 0PH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO TOP FLOATING BUTTON */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          title="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-white shadow-lg shadow-navy-950/20 hover:bg-brand-blue transition-all cursor-pointer"
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default TermsPage;
