import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import FilterTabs from "../components/product/FilterTabs";
import ProductCard from "../components/product/ProductCard";
import SliderArrow from "../components/common/SliderArrow";
import { products } from "../data/products";

const FILTER_TABS = ["Best Sellers", "New Arrivals", "Deals"];

const FeaturedProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Best Sellers");

  // Filter products based on selected tab
  const getFilteredProducts = () => {
    let list = [];
    if (activeTab === "Deals") {
      list = products.filter(
        (p) => p.discount || p.oldPrice || p.badge === "Offer"
      );
    } else if (activeTab === "New Arrivals") {
      list = products.filter((p) => p.badge === "New" || p.id.includes("p4") || p.id.includes("p3"));
      if (list.length < 8) {
        list = [...products].reverse();
      }
    } else {
      // Best Sellers
      list = products.filter((p) => p.badge === "Best Seller" || p.rating >= 4.7);
    }

    if (list.length < 8) {
      list = products.slice(0, 12);
    }

    // Ensure we have enough items for continuous looping
    return list.length < 8 ? [...list, ...list] : list;
  };

  const currentProducts = getFilteredProducts();

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

          <FilterTabs
            tabs={FILTER_TABS}
            defaultTab="Best Sellers"
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="relative">
          <div
            ref={prevRef}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full !bg-blue-600 !text-white shadow-md transition-all hover:opacity-90 sm:-left-5"
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
            key={activeTab}
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            loopAddBlankSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            slidesPerGroup={2}
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 24,
              },
            }}
            className="!px-1"
          >
            {currentProducts.map((product, idx) => (
              <SwiperSlide key={`${product.id}-${idx}`}>
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