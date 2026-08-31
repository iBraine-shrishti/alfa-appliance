import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiCheck, FiX, FiChevronDown } from "react-icons/fi";

const ApplianceIcons = {
  washingMachine: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="3" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 10a3 3 0 0 1 3 3" />
      <circle cx="8" cy="6" r="1" fill="currentColor" />
      <circle cx="11" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  fridge: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="10" x2="19" y2="10" />
      <line x1="8" y1="5" x2="8" y2="7" />
      <line x1="8" y1="14" x2="8" y2="17" />
    </svg>
  ),
  oven: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" rx="2" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
      <rect x="6" y="11" width="12" height="7" rx="1" />
    </svg>
  ),
  dishwasher: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <circle cx="12" cy="14" r="3.5" />
      <circle cx="7" cy="5" r="1" fill="currentColor" />
      <circle cx="10" cy="5" r="1" fill="currentColor" />
    </svg>
  ),
  dryer: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <line x1="10" y1="11" x2="14" y2="15" />
      <line x1="14" y1="11" x2="10" y2="15" />
      <circle cx="8" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  cooker: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v15H4z" rx="2" />
      <circle cx="7" cy="9" r="1.5" />
      <circle cx="17" cy="9" r="1.5" />
      <circle cx="12" cy="9" r="1.5" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <rect x="7" y="15" width="10" height="3" rx="0.5" />
    </svg>
  ),
  microwave: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <rect x="6" y="8" width="8" height="8" rx="1" />
      <line x1="17" y1="9" x2="18" y2="9" />
      <line x1="17" y1="12" x2="18" y2="12" />
      <line x1="17" y1="15" x2="18" y2="15" />
    </svg>
  ),
  other: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

const APPLIANCE_OPTIONS = [
  { id: "washing-machine", name: "Washing Machine", icon: ApplianceIcons.washingMachine },
  { id: "fridge-freezer", name: "Fridge/Freezer", icon: ApplianceIcons.fridge },
  { id: "oven-range", name: "Oven/Range", icon: ApplianceIcons.oven },
  { id: "dishwasher", name: "Dishwasher", icon: ApplianceIcons.dishwasher },
  { id: "tumble-dryer", name: "Tumble Dryer", icon: ApplianceIcons.dryer },
  { id: "cooker", name: "Cooker", icon: ApplianceIcons.cooker },
  { id: "microwave", name: "Microwave", icon: ApplianceIcons.microwave },
  { id: "other", name: "Other", icon: ApplianceIcons.other },
];

const BRANDS = [
  "Bosch",
  "Samsung",
  "LG",
  "Beko",
  "Miele",
  "Smeg",
  "Hotpoint",
  "Whirlpool",
  "Siemens",
  "Neff",
  "Blomberg",
  "Other",
];

const DAYS = [
  { dayName: "Mon", dateNum: "22" },
  { dayName: "Tue", dateNum: "23" },
  { dayName: "Wed", dateNum: "24" },
  { dayName: "Thu", dateNum: "25" },
  { dayName: "Fri", dateNum: "26" },
  { dayName: "Sat", dateNum: "27" },
  { dayName: "Sun", dateNum: "28" },
];

const TIME_SLOTS = [
  { id: "morning", label: "Morning", time: "8am–12pm" },
  { id: "afternoon", label: "Afternoon", time: "12pm–5pm" },
  { id: "evening", label: "Evening", time: "5pm–8pm" },
];

const BookingModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedAppliance, setSelectedAppliance] = useState("washing-machine");
  const [applianceBrand, setApplianceBrand] = useState("Bosch");
  const [modelNumber, setModelNumber] = useState("");
  const [faultDescription, setFaultDescription] = useState(
    "The washing machine will not drain and is displaying an E18 error code on the control display panel. Water is stuck in the drum."
  );

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [selectedDayIndex, setSelectedDayIndex] = useState(3); // Thu 25
  const [selectedSlot, setSelectedSlot] = useState("morning");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingRef, setBookingRef] = useState("ALF-2026-00847");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentApplianceName =
    APPLIANCE_OPTIONS.find((a) => a.id === selectedAppliance)?.name || "Appliance";

  const handleNext = () => {
    setErrorMessage("");

    if (step === 1) {
      if (!selectedAppliance) {
        setErrorMessage("Please select an appliance.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!applianceBrand) {
        setErrorMessage("Please select an appliance brand.");
        return;
      }
      if (!faultDescription.trim()) {
        setErrorMessage("Please describe the fault with your appliance.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!fullName.trim()) {
        setErrorMessage("Please enter your full name.");
        return;
      }
      if (!emailAddress.trim() || !emailAddress.includes("@")) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
      if (!mobileNumber.trim()) {
        setErrorMessage("Please enter your UK mobile number.");
        return;
      }
      if (!postcode.trim()) {
        setErrorMessage("Please enter your postcode.");
        return;
      }
      if (!fullAddress.trim()) {
        setErrorMessage("Please enter your full address.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      const randomRef = `ALF-2026-00${Math.floor(100 + Math.random() * 900)}`;
      setBookingRef(randomRef);
      setStep(5);
    }
  };

  const handleBack = () => {
    setErrorMessage("");
    if (step > 1 && step < 5) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setStep(1);
    setErrorMessage("");
    onClose();
  };

  const handleBackToHome = () => {
    handleClose();
    navigate("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <FiX size={18} />
        </button>

        {step === 5 ? (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold text-navy-950">
              Booking Confirmed!
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              Your repair has been successfully booked. A confirmation email has been sent to{" "}
              <strong className="text-navy-950 block mt-0.5">{emailAddress || "john@example.com"}</strong>
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-left shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <span className="font-bold text-sm text-navy-950">Booking Details</span>
                <span className="font-bold text-sm text-brand-blue">{bookingRef}</span>
              </div>

              <div className="mt-4 space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Appliance</span>
                  <span className="font-semibold text-navy-950">{currentApplianceName}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Appointment</span>
                  <span className="font-semibold text-navy-950 text-right">
                    {DAYS[selectedDayIndex]?.dayName} {DAYS[selectedDayIndex]?.dateNum} Sept 2026 (
                    {TIME_SLOTS.find((s) => s.id === selectedSlot)?.time})
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Repair Location</span>
                  <span className="font-semibold text-navy-950 text-right max-w-[200px] truncate">
                    {fullAddress || "42 Privet Drive, London"}, {postcode || "GU1 1AA"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Engineer</span>
                  <span className="font-semibold text-brand-blue">Will be assigned 24hrs before</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleBackToHome}
                className="rounded-full border border-slate-300 bg-white px-8 py-2.5 text-sm font-semibold text-navy-950 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <span className="text-xs font-semibold text-brand-blue">
                Step {step} of 4
              </span>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-navy-950">
                {step === 4 ? "Choose Your Appointment" : "Select Your Appliance"}
              </h2>
            </div>

            <div className="mt-5 border-b border-slate-100 pb-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      step > 1
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={`font-medium ${step === 1 ? "text-navy-950 font-bold" : "text-slate-500"}`}>
                    Appliance
                  </span>
                </div>

                <div className={`h-px flex-1 mx-2 ${step > 1 ? "bg-emerald-500" : "bg-slate-200"}`} />

                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      step > 2
                        ? "bg-emerald-600 text-white"
                        : step === 2
                        ? "bg-brand-blue text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {step > 2 ? "✓" : "2"}
                  </span>
                  <span className={`font-medium ${step === 2 ? "text-navy-950 font-bold" : "text-slate-500"}`}>
                    Fault Details
                  </span>
                </div>

                <div className={`h-px flex-1 mx-2 ${step > 2 ? "bg-emerald-500" : "bg-slate-200"}`} />

                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      step > 3
                        ? "bg-emerald-600 text-white"
                        : step === 3
                        ? "bg-brand-blue text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {step > 3 ? "✓" : "3"}
                  </span>
                  <span className={`font-medium ${step === 3 ? "text-navy-950 font-bold" : "text-slate-500"}`}>
                    Your Details
                  </span>
                </div>

                <div className={`h-px flex-1 mx-2 ${step > 3 ? "bg-emerald-500" : "bg-slate-200"}`} />

                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      step === 4
                        ? "bg-brand-blue text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    4
                  </span>
                  <span className={`font-medium ${step === 4 ? "text-navy-950 font-bold" : "text-slate-500"}`}>
                    Appointment
                  </span>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs text-red-600 border border-red-200">
                {errorMessage}
              </div>
            )}

            {step === 1 && (
              <div className="mt-5">
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Select the appliance that needs repairing.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {APPLIANCE_OPTIONS.map((item) => {
                    const isSelected = selectedAppliance === item.id;
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedAppliance(item.id)}
                        className={`flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all cursor-pointer min-h-[110px] ${
                          isSelected
                            ? "border-brand-blue bg-[#F0F5FF] text-brand-blue ring-1 ring-brand-blue"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className={isSelected ? "text-brand-blue" : "text-slate-700"}>
                          <IconComp />
                        </div>
                        <span className="mt-2.5 text-xs font-semibold leading-tight">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-5 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600">
                  Tell us about your <span className="text-brand-blue font-semibold">{currentApplianceName}</span>.
                </p>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                    Appliance Brand*
                  </label>
                  <div className="relative">
                    <select
                      value={applianceBrand}
                      onChange={(e) => setApplianceBrand(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-navy-950 outline-none focus:border-brand-blue"
                    >
                      {BRANDS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" size={16} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                    Model Number <span className="font-normal italic text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., WAN28201GB/01"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                    Describe the Fault *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue with your appliance..."
                    value={faultDescription}
                    onChange={(e) => setFaultDescription(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-5 space-y-3.5">
                <p className="text-xs sm:text-sm text-slate-600">
                  Your personal and address <span className="text-brand-blue font-semibold">details</span>.
                </p>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-800">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. James Mitchell"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-800">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. james@example.co.uk"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-800">
                    UK Mobile Number*
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 07700 900123"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-800">
                    Postcode*
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SW1A 1AA"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-navy-950 uppercase outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-800">
                    Full Address*
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 14 Maple Street, London"
                    value={fullAddress}
                    onChange={(e) => setFullAddress(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-brand-blue"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2.5">
                    Select date (September 2026)
                  </p>

                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    {DAYS.map((d, index) => {
                      const isSelected = selectedDayIndex === index;
                      return (
                        <button
                          key={d.dateNum}
                          type="button"
                          onClick={() => setSelectedDayIndex(index)}
                          className={`flex flex-col items-center justify-center rounded-xl p-2 sm:py-3 transition-all cursor-pointer ${
                            isSelected
                              ? "bg-brand-blue text-white shadow-md"
                              : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span className={`text-[10px] font-medium ${isSelected ? "text-white/80" : "text-slate-400"}`}>
                            {d.dayName}
                          </span>
                          <span className="text-sm sm:text-base font-bold mt-0.5">
                            {d.dateNum}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2.5">
                    Select Time Slot
                  </p>

                  <div className="space-y-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedSlot === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`flex w-full items-center justify-between rounded-xl border p-3 sm:px-4 sm:py-3.5 transition-all cursor-pointer ${
                            isSelected
                              ? "border-brand-blue bg-[#F0F5FF] text-navy-950"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                                isSelected ? "border-brand-blue bg-brand-blue" : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-navy-950">
                              {slot.label}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-brand-blue">
                            {slot.time}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <div>
                <span className="text-[11px] text-slate-400 block leading-tight">
                  Callout & diagnostic
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-brand-blue">
                  $89.99
                </span>
              </div>

              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-navy-950 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-xl bg-brand-blue px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-brand-blue-dark transition-all cursor-pointer"
                >
                  {step === 4 ? "Confirm Booking" : "Next Step"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
