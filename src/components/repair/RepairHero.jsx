import heroBg from "../../assets/repair/hero-bg.png";
import Container from "../common/Container";

const RepairHero = () => {
  return (
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[460px] lg:h-[720px] bg-navy-950">
   
      <img
        src={heroBg}
        alt="Alfa Appliance Repair Service"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent">
        <Container className="w-full">
          <div className="max-w-2xl text-white">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md">
             
              <span>Trusted by 100,000+ UK households</span>
            </div>

            <h1 className="font-['Instrument_Sans',_sans-serif] text-4xl font-semibold leading-tight sm:text-5xl md:text-[56px] lg:text-[66px] text-white">
              Keep Your Home
              <br />
              Running{" "}
              <span className="font-['Playfair_Display',_serif] text-4xl font-light italic sm:text-5xl md:text-[56px] lg:text-[66px]">
                Perfectly
              </span>
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RepairHero;
