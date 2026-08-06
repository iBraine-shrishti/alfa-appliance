import Hero from "../sections/Hero";
import CategorySection from "../sections/CategorySection";
import FeaturedProducts from "../sections/FeaturedProducts";
import OfferBanner from "../sections/OfferBanner";
import FridgeFreezerSection from "../sections/FridgeFreezerSection";
import KitchenInspiration from "../sections/KitchenInspiration";
import BrandSection from "../sections/BrandSection";
import FeaturesSection from "../sections/FeaturesSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <OfferBanner />
      <FridgeFreezerSection />
      <KitchenInspiration />
      <BrandSection />
      <FeaturesSection />     
    </>
  );
};

export default Home;