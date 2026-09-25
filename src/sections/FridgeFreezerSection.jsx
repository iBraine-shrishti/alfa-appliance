import { useEffect, useState } from "react";
import Container from "../components/common/Container";
import ProductGrid from "../components/product/ProductGrid";
import { fetchProducts } from "../services/api";

const FridgeFreezerSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchProducts().then((res) => {
      if (isMounted && res) {
        const filtered = res.filter((p) => {
          const cat = (p.category || "").toLowerCase();
          const catName = (p.category_name || "").toLowerCase();
          const sub = (p.subcategory || "").toLowerCase();
          const coll = (p.collections || []).map((c) => (c.slug || c.title || "").toLowerCase());
          return (
            cat === "refrigeration" ||
            cat === "refrigerator" ||
            catName === "refrigeration" ||
            catName === "refrigerator" ||
            sub.includes("fridge") ||
            coll.some((c) => c.includes("fridge"))
          );
        });
        setItems(filtered.slice(0, 8));
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  if (!items.length) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center font-display text-3xl font-semibold text-navy-950 sm:text-4xl md:text-5xl lg:text-[44px]">
          Fridge Freezer products
        </h2>

        <ProductGrid products={items} />
      </Container>
    </section>
  );
};

export default FridgeFreezerSection;