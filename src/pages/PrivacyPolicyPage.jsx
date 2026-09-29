import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiCheckCircle,
  FiLock,
  FiPhone,
  FiMail,
  FiMapPin,
  FiPrinter,
  FiClock,
  FiArrowUp,
  FiChevronRight,
  FiFileText,
  FiUserCheck,
  FiShare2,
  FiEye,
  FiAlertCircle,
  FiServer,
  FiRefreshCw,
  FiTruck,
  FiCreditCard,
  FiHelpCircle,
  FiTool,
} from "react-icons/fi";
import heroBg from "../assets/repair/hero-bg.png";
import Container from "../components/common/Container";

const SECTIONS = [
  { id: "who-we-are", number: 1, title: "Who we are" },
  { id: "information-we-collect", number: 2, title: "Information we collect" },
  {
    id: "how-we-use-information",
    number: 3,
    title: "How we use your information & legal basis",
  },
  { id: "who-we-share-with", number: 4, title: "Who we share it with" },
  {
    id: "international-transfers",
    number: 5,
    title: "International transfers",
  },
  { id: "data-retention", number: 6, title: "How long we keep it" },
  { id: "data-security", number: 7, title: "How we keep it secure" },
  { id: "third-party-links", number: 8, title: "Links to other websites" },
  { id: "cookies-policy", number: 9, title: "Cookies & tracking technologies" },
  { id: "your-rights", number: 10, title: "Your legal rights" },
  { id: "complaints", number: 11, title: "Complaints & ICO" },
  { id: "children", number: 12, title: "Children's privacy" },
  { id: "changes-to-policy", number: 13, title: "Changes to this policy" },
];

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("who-we-are");
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
    <div className="bg-[#f4f7f6] text-navy-950 font-['Plus_Jakarta_Sans',_sans-serif]">
      {/* 1. HERO SECTION (Artigenius layout with Alfa Blue brand theme) */}
      <section className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-navy-950 flex items-center justify-center text-center text-white">
        <img
          src={heroBg}
          alt="Alfa Appliances Privacy Policy"
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
            <span className="text-brand-blue">Privacy Policy</span>
          </nav>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            How Alfa Appliances collects, uses, protects, and respects your
            personal data across all our sales, deliveries, installations, and
            repair services.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiClock size={13} className="text-brand-blue" />
              Effective: September 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiShield size={13} className="text-brand-blue" />
              UK GDPR &amp; DPA 2018 Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
              <FiCheckCircle size={13} className="text-brand-blue" />
              ICO Registered Controller
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Elevated Overlapping Info Box) */}
      <section className="relative z-20 pb-20 -mt-14 sm:-mt-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* STICKY SIDEBAR NAVIGATION (Desktop) */}
            <aside className="hidden lg:block sticky top-28 self-start bg-white rounded-xl border border-slate-200/90 p-5 shadow-lg shadow-navy-950/5">
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
                  <FiLock className="text-brand-blue" size={15} />
                  <span>Table of Contents</span>
                </div>
                <button
                  onClick={handlePrint}
                  title="Print Privacy Policy"
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
                <a
                  href="mailto:privacy@alfaappliances.co.uk"
                  className="w-full text-center py-2.5 px-3 rounded-lg bg-brand-blue text-white font-semibold text-xs hover:bg-brand-blue-dark transition-colors shadow-xs"
                >
                  Contact Privacy Team
                </a>
                <p className="text-[11px] text-slate-400 text-center">
                  Helpline: 0207 923 4080
                </p>
              </div>
            </aside>

            {/* MAIN LEGAL DOCUMENT CONTAINER */}
            <div className="bg-white rounded-xl p-5 sm:p-8 md:p-12 shadow-xl shadow-navy-950/5 border border-slate-200/90 min-w-0">
              {/* Introduction Callout Banner */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6 mb-10 flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mt-0.5">
                  <FiLock size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-950 text-sm sm:text-base">
                    Alfa Appliances Privacy Commitment
                  </h3>
                  <p className="mt-1 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    This policy explains what personal information Alfa
                    Appliances collects when you buy from us, book an appliance
                    repair, contact our team, or use our website. It details how
                    we handle your information, why we collect it, and your full
                    legal rights under UK Data Protection law.
                  </p>
                </div>
              </div>

              {/* Mobile Quick-Jump Dropdown */}
              <div className="lg:hidden mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <label
                  htmlFor="mobile-jump"
                  className="block text-xs font-bold text-navy-950 mb-2 uppercase tracking-wider"
                >
                  Jump to Section
                </label>
                <div className="relative">
                  <select
                    id="mobile-jump"
                    value={activeSection}
                    onChange={(e) => scrollToSection(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs text-navy-950 focus:border-brand-blue outline-none"
                  >
                    {SECTIONS.map((sec) => (
                      <option key={sec.id} value={sec.id}>
                        {sec.number}. {sec.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 1. WHO WE ARE */}
              <section id="who-we-are" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    1
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Who we are
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  <strong>Alfa Appliances Ltd</strong> (also trading as{" "}
                  <strong>RGA Appliances</strong>) is the data controller for
                  your personal information. This means we determine the
                  purposes for which and the means by which your personal data
                  is processed.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Company Registration
                    </p>
                    <p className="text-sm font-semibold text-navy-950 mt-1">
                      Registered in England and Wales
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      VAT Registration: 444 4353 02
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Trading Address &amp; Showroom
                    </p>
                    <p className="text-sm font-semibold text-navy-950 mt-1 flex items-start gap-1.5">
                      <FiMapPin
                        size={15}
                        className="text-brand-blue shrink-0 mt-0.5"
                      />
                      <span>
                        105 Stoke Newington High Street, London N16 0PH
                      </span>
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Supervisory Authority
                    </p>
                    <p className="text-sm font-semibold text-navy-950 mt-1">
                      Information Commissioner&apos;s Office (ICO)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      UK Data Protection Public Register
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Privacy &amp; Data Protection Officer
                    </p>
                    <p className="text-sm font-semibold text-navy-950 mt-1 flex items-center gap-1.5">
                      <FiMail size={14} className="text-brand-blue shrink-0" />
                      <a
                        href="mailto:privacy@alfaappliances.co.uk"
                        className="hover:text-brand-blue hover:underline"
                      >
                        privacy@alfaappliances.co.uk
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <FiPhone size={13} className="text-brand-blue shrink-0" />
                      <span>0207 923 4080</span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  You can send any privacy question, request, or formal data
                  rights complaint directly to the contact details above.
                </p>
              </section>

              {/* 2. INFORMATION WE COLLECT */}
              <section
                id="information-we-collect"
                className="scroll-mt-28 mb-12"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    2
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Information we collect
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We follow data minimization principles: we only collect the
                  information strictly necessary to sell, deliver, install, and
                  repair your domestic appliances safely and efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiUserCheck className="text-brand-blue" />
                      Identity &amp; Contact
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Your full name, phone number, and email address for order
                      confirmations, appointment coordination, and receipts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiMapPin className="text-brand-blue" />
                      Address &amp; Property Access
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Your delivery, installation, or repair address, plus
                      practical notes such as parking restrictions, floor
                      levels, or key collection instructions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiFileText className="text-brand-blue" />
                      Order &amp; Booking Details
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Products purchased, services booked, appointment time
                      windows (morning, afternoon, evening), delivery status,
                      and repair history.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiTool className="text-brand-blue" />
                      Appliance Information
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Appliance make, model number, serial number, description
                      of the fault, photos or videos submitted, engineer
                      diagnostic notes, and parts fitted.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiCreditCard className="text-brand-blue" />
                      Payment &amp; Billing
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Payment status, amounts paid, date of transaction, and any
                      applicable refunds. All card payments are processed
                      securely via authorized PCI-DSS compliant providers; we do
                      not store your full payment card numbers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiPhone className="text-brand-blue" />
                      Customer Communications
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Records of correspondence including emails, phone calls,
                      WhatsApp messages, SMS appointment notifications, reviews,
                      and feedback.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiServer className="text-brand-blue" />
                      Website &amp; Device Data
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      IP address, browser type, device type, pages viewed, time
                      spent on site, and necessary session cookies (see section
                      9).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                    <h4 className="font-semibold text-sm text-navy-950 flex items-center gap-2">
                      <FiCheckCircle className="text-brand-blue" />
                      Marketing Preferences
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Your chosen preferences regarding promotional newsletters,
                      appliance maintenance guides, and seasonal sale alerts.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <h4 className="text-sm font-bold text-navy-950 mb-2">
                    Where your information comes from:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
                    <li>
                      <strong>Directly from you:</strong> When you place an
                      order, request a repair online, call our team, visit our
                      showroom, or message us.
                    </li>
                    <li>
                      <strong>
                        Letting agents, landlords &amp; property managers:
                      </strong>{" "}
                      When they arrange a repair or replacement on behalf of a
                      tenant (including tenant name, contact number, and address
                      for entry access).
                    </li>
                    <li>
                      <strong>Payment and delivery partners:</strong> Such as
                      card processors confirming payment authorization, or
                      courier dispatch status updates.
                    </li>
                    <li>
                      <strong>Public reviews:</strong> Feedback you choose to
                      publish on Google, Trustpilot, or our website.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Booking on behalf of others:</strong> If you book a
                    repair or delivery for someone else (such as a tenant,
                    customer, or elderly relative), please confirm you have
                    their consent to share their contact details with Alfa
                    Appliances.
                  </p>
                  <p>
                    <strong>Special category (sensitive) data:</strong> We do
                    not intentionally collect health or sensitive data. If you
                    share specific accessibility or mobility requirements so our
                    team can safely deliver or install an appliance, we use that
                    information exclusively for that scheduled visit.
                  </p>
                  <p>
                    <strong>Do you have to provide details?</strong> Essential
                    contact, address, and appliance details are required under
                    our contract to deliver appliances and carry out repairs.
                    Without them, we cannot fulfill our services. Providing
                    marketing consent is entirely optional.
                  </p>
                  <p>
                    <strong>CCTV and call recordings:</strong> For security,
                    crime prevention, staff training, and resolving service
                    disputes, CCTV is in operation across our premises, and
                    inbound/outbound service calls may be recorded. Prominent
                    notices are displayed in store, and telephone callers are
                    informed at the outset of the call.
                  </p>
                </div>
              </section>

              {/* 3. HOW WE USE YOUR INFORMATION AND OUR LEGAL BASIS */}
              <section
                id="how-we-use-information"
                className="scroll-mt-28 mb-12"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    3
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    How we use your information and our legal basis
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  Under the UK GDPR and the Data Protection Act 2018, we must
                  have a lawful basis for each processing activity. Here is how
                  we use your data:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 text-navy-950 font-bold">
                      <tr>
                        <th className="p-3 border-b border-slate-200">
                          Purpose / Activity
                        </th>
                        <th className="p-3 border-b border-slate-200">
                          Lawful Basis under UK GDPR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="p-3">
                          Processing appliance orders, taking payments,
                          delivering, installing, and removing old appliances
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Performance of a Contract
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Booking, diagnosing, carrying out repairs, and sending
                          assigned engineers job briefs
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Performance of a Contract
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Checking your postcode for service coverage and
                          displaying available repair slots
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Pre-contractual Steps (at your request)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Sending booking confirmations, time window updates,
                          invoices, and customer service notices
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Performance of a Contract
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Honoring our 1-year repair guarantee, processing
                          warranty claims, returns, and dispute resolution
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Contract &amp; Legal Obligation (Consumer Rights Act
                          2015)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Maintaining financial records, VAT reporting, and tax
                          audits
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Legal Obligation (HMRC Compliance)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Coordinating with letting agents and landlords on
                          property maintenance bookings
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Legitimate Interests (fulfilling contracted works)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Website optimization, fraud prevention, IT network
                          security, and staff quality assurance
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Legitimate Interests
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Inviting post-service customer satisfaction reviews
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Legitimate Interests
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Direct marketing emails and SMS discounts
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Consent (or PECR Soft Opt-In for past customers)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Non-essential analytics or advertising cookies
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          Consent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Direct Marketing:</strong> We only send marketing
                    emails or SMS messages if you have explicitly opted in, or
                    where you are an existing customer and we are updating you
                    on closely related appliances or repair services. You can
                    opt out anytime by clicking &quot;unsubscribe&quot;,
                    replying STOP, or emailing us. We never sell your personal
                    information to third parties for their independent
                    marketing.
                  </p>
                  <p>
                    <strong>Automated Decisions &amp; Postcode Checker:</strong>{" "}
                    Our website checks your postcode solely to confirm engineer
                    availability in your geographic zone. This automated check
                    has no legal or discriminatory impact. We do not use
                    automated profiling algorithms.
                  </p>
                </div>
              </section>

              {/* 4. WHO WE SHARE IT WITH */}
              <section id="who-we-share-with" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    4
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Who we share it with
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We only share the minimum necessary information with vetted
                  parties who assist in delivering our products and services.
                  All third-party processors are bound by strict data processing
                  agreements.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiTool
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Our Engineers &amp; Trusted Partner Technicians:
                      </strong>{" "}
                      Receiving your name, phone number, address, and fault
                      description solely to carry out your diagnostic visit and
                      repairs.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiTruck
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Delivery &amp; Logistics Partners:
                      </strong>{" "}
                      For deliveries outside our direct van routes, trusted
                      carriers receive shipping details to fulfill your
                      delivery.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiCreditCard
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Payment Gateways &amp; Merchant Acquirers:
                      </strong>{" "}
                      Certified PCI-DSS compliant providers handling
                      credit/debit card authorization and processing refunds.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiServer
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Cloud Hosting, Booking &amp; IT Providers:
                      </strong>{" "}
                      Secure cloud infrastructure, database hosting, SMS
                      dispatch services, and customer management systems.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiShield
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Appliance Manufacturers &amp; Warranty Companies:
                      </strong>{" "}
                      When parts or labor fall under an official manufacturer
                      warranty claim.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <FiAlertCircle
                      className="text-brand-blue mt-0.5 shrink-0"
                      size={17}
                    />
                    <div>
                      <strong className="text-navy-950">
                        Law Enforcement, HMRC &amp; Regulators:
                      </strong>{" "}
                      Where disclosure is required by law, court order, or to
                      prevent fraud.
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  In the event of a business sale, merger, or reorganization,
                  customer data may transfer to the acquiring entity subject to
                  this Privacy Policy.
                </p>
              </section>

              {/* 5. INTERNATIONAL TRANSFERS */}
              <section
                id="international-transfers"
                className="scroll-mt-28 mb-12"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    5
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    International transfers
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-3">
                  We store and process customer data predominantly within the
                  United Kingdom and the European Economic Area (EEA).
                </p>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Where service providers (such as cloud backup or communication
                  gateways) process data outside the UK, we ensure adequate
                  safeguards are in place as required by UK GDPR, including UK
                  Adequacy Regulations, the UK-US Data Bridge, or the UK
                  International Data Transfer Agreement (IDTA).
                </p>
              </section>

              {/* 6. HOW LONG WE KEEP IT */}
              <section id="data-retention" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    6
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    How long we keep it
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We retain personal information only for as long as necessary
                  to fulfill the original purpose, comply with legal and tax
                  accounting obligations, and resolve potential disputes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-bold text-navy-950 text-sm">
                      Sales &amp; Financial Invoices
                    </p>
                    <p className="text-brand-blue font-semibold text-xs mt-1">
                      Retained for 6 years
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      In compliance with UK HMRC statutory accounting rules.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-bold text-navy-950 text-sm">
                      Repair &amp; Installation Logs
                    </p>
                    <p className="text-brand-blue font-semibold text-xs mt-1">
                      Retained for duration of guarantee + 6 years
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      To honor guarantees and protect against civil claims.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-bold text-navy-950 text-sm">
                      General Inquiries
                    </p>
                    <p className="text-brand-blue font-semibold text-xs mt-1">
                      Up to 12 months
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Where an inquiry does not lead to an order or service
                      booking.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-bold text-navy-950 text-sm">
                      Marketing Preferences
                    </p>
                    <p className="text-brand-blue font-semibold text-xs mt-1">
                      Until you unsubscribe / opt-out
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      We keep a suppression list record so we never contact you
                      again.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  When data reaches the end of its retention period, it is
                  permanently deleted or irreversibly anonymized.
                </p>
              </section>

              {/* 7. HOW WE KEEP IT SECURE */}
              <section id="data-security" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    7
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    How we keep it secure
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We maintain robust administrative, technical, and physical
                  safeguards designed to protect your personal information
                  against accidental, unauthorized, or unlawful destruction,
                  loss, alteration, disclosure, or access:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm mb-4">
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                    <FiLock className="text-brand-blue mb-2" size={18} />
                    <p className="font-bold text-navy-950">
                      TLS/SSL Encryption
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      All web traffic and form inputs are encrypted in transit.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                    <FiShield className="text-brand-blue mb-2" size={18} />
                    <p className="font-bold text-navy-950">
                      Strict Access Control
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Restricted to authorized personnel on a need-to-know
                      basis.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                    <FiCheckCircle className="text-brand-blue mb-2" size={18} />
                    <p className="font-bold text-navy-950">
                      PCI-DSS Tokenization
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Card data is handled through compliant payment vaults.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  In the unlikely event of a personal data breach posing high
                  risk to your rights, we will notify you and the Information
                  Commissioner&apos;s Office (ICO) in accordance with our legal
                  obligations.
                </p>
              </section>

              {/* 8. LINKS TO OTHER WEBSITES */}
              <section id="third-party-links" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    8
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Links to other websites
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Our website may provide hyperlinks to third-party websites,
                  such as appliance manufacturer product registration pages,
                  external review services, and social media platforms. We do
                  not control these external websites and are not responsible
                  for their independent privacy practices. We encourage you to
                  review their individual privacy statements.
                </p>
              </section>

              {/* 9. COOKIES & TRACKING TECHNOLOGIES */}
              <section id="cookies-policy" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    9
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Cookies &amp; tracking technologies
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We use cookies and similar browser storage technologies to
                  ensure our website operates properly:
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                    <p className="font-bold text-navy-950">
                      1. Strictly Necessary Cookies
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      Required for core functionality, such as maintaining your
                      shopping basket, processing checkout, and remembering
                      security sessions. These do not require user consent.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                    <p className="font-bold text-navy-950">
                      2. Performance &amp; Analytics Cookies
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      Help us understand how visitors navigate our pages (e.g.
                      popular appliance collections, page speed). Activated only
                      with your prior consent.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  You can set your browser to refuse all or some cookies, or to
                  alert you when websites set or access cookies. If you disable
                  or refuse cookies, please note that some parts of our website
                  may become inaccessible or fail to function properly.
                </p>
              </section>

              {/* 10. YOUR LEGAL RIGHTS */}
              <section id="your-rights" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    10
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Your legal rights
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  Under UK data protection legislation, you have significant
                  rights concerning your personal data:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm mb-6">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      1. Right to Access (Subject Access Request):
                    </strong>
                    You can request a copy of the personal information we hold
                    about you and check that we are processing it lawfully.
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      2. Right to Rectification:
                    </strong>
                    You have the right to request correction of any incomplete
                    or inaccurate data we hold about you.
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      3. Right to Erasure (&quot;Right to be Forgotten&quot;):
                    </strong>
                    You can ask us to delete personal data where there is no
                    good reason for us continuing to process it (unless retained
                    for statutory tax or legal defenses).
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      4. Right to Restrict Processing:
                    </strong>
                    You can ask us to suspend processing your personal data in
                    certain scenarios, such as verifying its accuracy.
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      5. Right to Object:
                    </strong>
                    You can object where we rely on legitimate interests, and
                    you have the absolute right to stop direct marketing at any
                    time.
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-navy-950 block mb-1">
                      6. Right to Withdraw Consent:
                    </strong>
                    Where processing is based on consent, you may withdraw it at
                    any moment without affecting prior lawful processing.
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white sm:col-span-2">
                    <strong className="text-navy-950 block mb-1">
                      7. Right to Data Portability:
                    </strong>
                    You have the right to receive your personal data in a
                    structured, commonly used, machine-readable format.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700">
                  <p className="font-bold text-navy-950 mb-1">
                    How to exercise your rights:
                  </p>
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <a
                      href="mailto:privacy@alfaappliances.co.uk"
                      className="text-brand-blue underline font-semibold"
                    >
                      privacy@alfaappliances.co.uk
                    </a>{" "}
                    or call <strong>0207 923 4080</strong>. We do not charge a
                    fee for standard requests and will respond within{" "}
                    <strong>one calendar month</strong>.
                  </p>
                </div>
              </section>

              {/* 11. COMPLAINTS */}
              <section id="complaints" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    11
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Complaints &amp; Regulatory Body
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  If you have concerns about our privacy practices, please
                  contact us first so we can resolve the matter promptly. We
                  acknowledge all formal privacy complaints within 30 days and
                  keep you apprised of the investigation outcome.
                </p>

                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-sm text-navy-950 mb-2">
                    Information Commissioner&apos;s Office (ICO)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    You also have the statutory right to lodge a complaint with
                    the UK data protection regulator at any time:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://ico.org.uk/make-a-complaint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                      >
                        ico.org.uk/make-a-complaint
                      </a>
                    </li>
                    <li>
                      <strong>Helpline:</strong> 0303 123 1113
                    </li>
                    <li>
                      <strong>Postal Address:</strong> Information
                      Commissioner&apos;s Office, Wycliffe House, Water Lane,
                      Wilmslow, Cheshire, SK9 5AF
                    </li>
                  </ul>
                </div>
              </section>

              {/* 12. CHILDREN */}
              <section id="children" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    12
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Children&apos;s privacy
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Our website, retail store, and repair booking services are
                  directed strictly to adults. We do not knowingly solicit or
                  collect personal information from children under the age of
                  18. If you become aware that a minor has provided us with
                  personal information, please contact us and we will delete it.
                </p>
              </section>

              {/* 13. CHANGES TO THIS POLICY */}
              <section id="changes-to-policy" className="scroll-mt-28">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    13
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                    Changes to this policy
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                  We review and update this Privacy Policy periodically to
                  reflect changes in our business operations, technology, or
                  legal requirements. The updated version will always be
                  published on this page with an updated &quot;Last
                  updated&quot; date.
                </p>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500">
                  <p>
                    <strong>Last Updated:</strong> 28 September 2026
                  </p>
                  <p className="mt-1">
                    Version 2.0 • Alfa Appliances Ltd (Trading as RGA
                    Appliances)
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white shadow-xl hover:bg-brand-blue-dark transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;
