import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../components/common/Container";
import CategoryCard from "../components/category/CategoryCard";
import SliderArrow from "../components/common/SliderArrow";
import { categories } from "../data/categories";

const CategorySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
          Shop by Category
        </h2>

        <div className="relative">
          <SliderArrow
            direction="left"
            variant="filled"
            ref={prevRef}
            className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2"
          />
          <SliderArrow
            direction="right"
            variant="filled"
            ref={nextRef}
            className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2"
          />

          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            loop
            spaceBetween={20}
            slidesPerView={2.3}
            breakpoints={{
              480: { slidesPerView: 3.2 },
              640: { slidesPerView: 4.2 },
              1024: { slidesPerView: 5.5 },
              1280: { slidesPerView: 6.5 },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
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