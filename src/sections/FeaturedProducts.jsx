import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import FilterTabs from "../components/product/FilterTabs";
import ProductCard from "../components/product/ProductCard";
import SliderArrow from "../components/common/SliderArrow";
import { products } from "../data/products";

const FILTER_TABS = ["Best Sellers", "New Arrivals"];

const FeaturedProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false);

  const featuredList = products.slice(0, 12);

  return (
    <section className="py-12 sm:py-16">
      <Container>

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Featured Products</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Handpicked appliances
              <br className="hidden sm:block" /> our customers love
            </h2>
          </div>
          <FilterTabs tabs={FILTER_TABS} defaultTab="Best Sellers" />
        </div>

        <div className="relative">
          <div
            ref={prevRef}
            className={`absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full !bg-blue-600 !text-white shadow-md transition-all hover:opacity-90 sm:-left-5 ${
              !hasMoved ? "invisible pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <SliderArrow direction="left" className="!bg-transparent !text-white" />
          </div>

          <div
            ref={nextRef}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full !bg-blue-600 !text-white shadow-md transition-all hover:opacity-90 sm:-right-5"
          >
            <SliderArrow direction="right" className="!bg-transparent !text-white" />
          </div>

          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => {
              if (swiper.realIndex > 0) {
                setHasMoved(true);
              } else {
                setHasMoved(false);
              }
            }}
            loop={true}
            slidesPerGroup={4}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 24,
              },
            }}
            className="!px-1"
          >
            {featuredList.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;