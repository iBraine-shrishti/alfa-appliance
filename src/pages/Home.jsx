import Hero from "../sections/Hero";
import CategorySection from "../sections/CategorySection";
import FeaturedProducts from "../sections/FeaturedProducts";
import OfferBanner from "../sections/OfferBanner";
import FridgeFreezerSection from "../sections/FridgeFreezerSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <OfferBanner />
      <FridgeFreezerSection />
      {/* Next sections (Kitchen Inspiration, Brands, Features, Footer) added after confirmation */}
    </>
  );
};

export default Home;