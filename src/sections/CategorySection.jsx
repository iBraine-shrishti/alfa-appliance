import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../components/common/Container";
import CategoryCard from "../components/category/CategoryCard";
import SliderArrow from "../components/common/SliderArrow";
import { categories } from "../data/categories";

const CategorySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const displayCategories =
    categories.length < 8 ? [...categories, ...categories] : categories;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center font-display text-3xl font-semibold text-navy-950 sm:text-4xl md:text-5xl lg:text-[44px]">   
          Shop by Category
        </h2>

        <div className="relative">
          <div
            ref={prevRef}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full !bg-blue-600 !text-white shadow-md transition-opacity hover:opacity-90 sm:-left-6"
          >
            <SliderArrow direction="left" className="!bg-transparent !text-white" />
          </div>

          <div
            ref={nextRef}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full !bg-blue-600 !text-white shadow-md transition-opacity hover:opacity-90 sm:-right-6"
          >
            <SliderArrow direction="right" className="!bg-transparent !text-white" />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            loopAddBlankSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={16}
            slidesPerView="auto"
            breakpoints={{
              640: {
                spaceBetween: 24,
                slidesPerView: "auto",
              },
              1024: {
                spaceBetween: 66,
                slidesPerView: "auto",
              },
            }}
            className="!px-2"
          >
            {displayCategories.map((category, idx) => (
              <SwiperSlide key={`${category.id}-${idx}`} className="!w-auto">
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;