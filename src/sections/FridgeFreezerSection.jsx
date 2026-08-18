import Container from "../components/common/Container";
import ProductGrid from "../components/product/ProductGrid";
import { fridgeFreezerProducts } from "../data/products";

const FridgeFreezerSection = () => {
  const rowOne = fridgeFreezerProducts.map((p) => ({ ...p, id: `${p.id}-row1` }));
  const rowTwo = fridgeFreezerProducts.map((p) => ({ ...p, id: `${p.id}-row2` }));

  return (
    <section className="py-12 sm:py-16">
      <Container>
          <h2 className="mb-8 text-center font-display text-3xl font-semibold text-navy-950 sm:text-4xl md:text-5xl lg:text-[44px]">   
            Fridge Freezer products
        </h2>
        
        <div className="flex flex-col gap-5">
          <ProductGrid products={rowOne} />
          <ProductGrid products={rowTwo} />
        </div>
      </Container>
    </section>
  );
};

export default FridgeFreezerSection;