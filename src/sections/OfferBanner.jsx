import { FiArrowUpRight } from "react-icons/fi";
import Container from "../components/common/Container";
import CountdownUnit from "../components/banner/CountdownUnit";
import useCountdown from "../hooks/useCountdown";

const OfferBanner = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="pb-12 sm:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900">
          <img
            src="https://placehold.co/1280x420/16243b/ffffff?text=Washing+Machine"
            alt="Front load washing machine with folded towels"
            className="h-[280px] w-full object-cover opacity-90 sm:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-md px-6 text-white sm:px-10 lg:px-14">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Effortless drying,
                <br />
                everyday <span className="italic font-light">luxury</span>
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

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
              >
                Shop Collection
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                  <FiArrowUpRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfferBanner;