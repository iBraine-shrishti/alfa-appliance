import { useState } from "react";
import RepairHero from "../components/repair/RepairHero";
import RepairTrustSection from "../components/repair/RepairTrustSection";
import RepairHowItWorks from "../components/repair/RepairHowItWorks";
import RepairFaqSection from "../components/repair/RepairFaqSection";
import RepairPricingBanner from "../components/repair/RepairPricingBanner";
import BookingModal from "../components/repair/BookingModal";

const BookRepairPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledPostcode, setPrefilledPostcode] = useState("");

  const openModal = (code = "") => {
    if (typeof code === "string" && code.trim()) {
      setPrefilledPostcode(code.trim());
    }
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white">
      <RepairHero />

      <RepairTrustSection onOpenModal={openModal} />

      <RepairHowItWorks />

      <RepairFaqSection />

      <RepairPricingBanner onOpenModal={openModal} />

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialPostcode={prefilledPostcode}
      />
    </div>
  );
};

export default BookRepairPage;
