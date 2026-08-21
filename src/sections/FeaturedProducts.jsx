import { useEffect, useState } from "react";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import FilterTabs from "../components/product/FilterTabs";
import ProductGrid from "../components/product/ProductGrid";
import { products as fallbackProducts } from "../data/products";
import { fetchProducts } from "../services/api";

const FILTER_TABS = ["Best Sellers", "New Arrivals", "Trendings", "Staff Picks"];

const FeaturedProducts = () => {
  const [liveProducts, setLiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      if (data && data.length > 0) {
        setLiveProducts(data);
      } else {
        setLiveProducts(fallbackProducts);
      }
      setLoading(false);
    };
    loadProducts();
  }, []);

  const baseProducts = liveProducts.length > 0 ? liveProducts : fallbackProducts;
  const displayProducts = baseProducts.slice(0, 4);

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
        {loading ? (
          <div className="p-8 text-center text-sm font-semibold text-slate-500 bg-white rounded border border-slate-200">
            Loading featured appliances live from backend...
          </div>
        ) : (
          <ProductGrid products={displayProducts} />
        )}
      </Container>
    </section>
  );
};

export default FeaturedProducts;