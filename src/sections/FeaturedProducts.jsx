import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import FilterTabs from "../components/product/FilterTabs";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";

const FILTER_TABS = ["Best Sellers", "New Arrivals", "Trendings", "Staff Picks"];

const FeaturedProducts = () => {
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
        <ProductGrid products={products} />
      </Container>
    </section>
  );
};

export default FeaturedProducts;