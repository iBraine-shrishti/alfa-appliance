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
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
            Shop by Category
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <SliderArrow direction="left" ref={prevRef} />
            <SliderArrow direction="right" ref={nextRef} />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={20}
          slidesPerView={2.5}
          breakpoints={{
            480: { slidesPerView: 3.2 },
            640: { slidesPerView: 4.2 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CategorySection;