import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import BrandLogo from "../components/common/BrandLogo";
import { brands } from "../data/brands";

const BrandSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-10 text-center">         
         <h2 className="mb-8 mt-8 text-center font-display text-sm font-semibold text-navy-950 sm:text-xl md:text-2xl lg:text-[20px]">   
          Welcome to Our store
          </h2>

           <div className="inline-block rounded-full bg-[linear-gradient(90deg,#1D60FF_0%,#F6F9FF_100%)] p-[2px]">
            <span className="block rounded-full bg-[linear-gradient(90deg,#D9E4FF_0%,rgba(255,255,255,0)_100%)] px-4 py-1.5 text-2xl  sm:text-3xl md:text-4xl lg:text-[34px] font-semibold  tracking-wide text-brand-blue md:text-[16px]">
                Our premium brands
              </span>
            </div>
         
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