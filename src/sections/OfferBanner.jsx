import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import CountdownUnit from "../components/banner/CountdownUnit";
import useCountdown from "../hooks/useCountdown";
import offerBannerImg from "../assets/offer-banner.png";

const OfferBanner = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="pb-12 sm:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900">
          <img
            src={offerBannerImg}
            alt="Front load washing machine with folded towels"
            className="h-[340px] w-full object-cover opacity-90 sm:h-[450px]"
          />
          <div className="absolute inset-0" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-md px-6 text-white sm:px-10 lg:px-14">
              <h2 className="font-['Instrument_Sans',_sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">
                Effortless drying,
                <br />
                everyday <span className="font-['Playfair_Display',_serif] italic font-light">luxury</span>
              </h2>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                Advanced drying technology that keeps every fabric soft, fresh, and perfectly cared for.
              </p>

              <div className="mt-6 flex items-center gap-2 sm:gap-3">
                <CountdownUnit value={days} label="Days" />
                <CountdownUnit value={hours} label="Hours" />
                <CountdownUnit value={minutes} label="Min" />
                <CountdownUnit value={seconds} label="Sec" />
              </div>

              <Link
                  to="/collections"
                   className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
                  >
                  Shop Collection
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                    <FiArrowRight size={14} />
                  </span>
                </Link>          
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfferBanner;