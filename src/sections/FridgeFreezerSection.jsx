import Container from "../components/common/Container";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products"; 

const FridgeFreezerSection = () => {
  const selectedProducts = products.slice(0, 8);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center font-display text-3xl font-semibold text-navy-950 sm:text-4xl md:text-5xl lg:text-[44px]">
          Fridge Freezer products
        </h2>

        <ProductGrid products={selectedProducts} />
      </Container>
    </section>
  );
};

export default FridgeFreezerSection;