import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { Link } from "react-router-dom";
import { heroSlides } from "../data/heroSlides";

const Hero = () => {
  const [transitionCount, setTransitionCount] = useState(0);

  return (
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[460px] lg:h-[620px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        speed={1400}
        pagination={{ clickable: true }}
        loop
        onSlideChangeTransitionStart={() => setTransitionCount((count) => count + 1)}
        className="h-full w-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-brand-blue"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={`Modern kitchen appliances ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-navy-950/50 via-navy-950/10 to-transparent">
                <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-6 lg:px-8">
                  <div
                    key={`${i}-${transitionCount}`}
                    className={`max-w-md ${slide.animate ? "hero-anim" : ""}`}
                    style={slide.animate ? { animationDelay: "0.2s" } : undefined}
                  >
                    <h1 className={`font-['Instrument_Sans',_sans-serif] text-4xl font-semibold leading-tight sm:text-5xl ${slide.textColor}`}>
                      {slide.heading1}
                      <br />
                      {slide.heading2}{" "}
                      <span className="font-['Playfair_Display',_serif] text-4xl font-light italic sm:text-5xl">
                        {slide.accent}
                      </span>
                    </h1>
                    {/* <Link
                      to="/collections"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
                    >
                      Shop Collection
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                        <FiArrowRight size={14} />
                      </span>
                    </Link> */}
                    <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
              >
                Shop Collection
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                  <FiArrowRight size={14} />
                </span>
              </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
