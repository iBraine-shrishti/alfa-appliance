import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import BrandLogo from "../components/common/BrandLogo";
import { brands } from "../data/brands";

const BrandSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-10 text-center">
          <Eyebrow>Welcome to Our store</Eyebrow>
          <h2 className="mb-8 mt-8 text-center font-display text-3xl font-semibold text-navy-950 sm:text-4xl md:text-5xl lg:text-[44px]">   
            Our premium brands
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {brands.map((brand) => (
            <BrandLogo key={brand.id} name={brand.name} logo={brand.logo} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandSection;