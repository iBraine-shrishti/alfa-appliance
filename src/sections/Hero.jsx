import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import slide1 from "../assets/slider-imgs/slider1.png";
import slide2 from "../assets/slider-imgs/slider2.png";
import slide3 from "../assets/slider-imgs/slider3.png";
import slide4 from "../assets/slider-imgs/slider4.png";

const slides = [slide1, slide2, slide3, slide4];

const Hero = () => {
  return (
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[460px] lg:h-[620px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-brand-blue"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Modern kitchen appliances ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-navy-950/50 via-navy-950/10 to-transparent">
        <div className="w-full max-w-[1280px] px-6 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-md">
            <h1 className="font-['Instrument_Sans',_sans-serif] text-4xl font-semibold leading-tight text-white lg:text-black sm:text-5xl">
              Designed for
              <br />
              Modern{" "}
              <span className="font-['Playfair_Display',_serif] text-4xl font-light italic sm:text-5xl">
                Living
              </span>
            </h1>
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
    </section>
  );
};

export default Hero;