import Container from "../components/common/Container";

const brands = [
  {
    name: 'Beko',
    url: '#',
    svg: (
      <svg className="h-10 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 50" fill="currentColor">
        <text 
          x="10" 
          y="35" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="36" 
          fontStyle="italic"
          letterSpacing="-1.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#00529b]"
        >
          beko
        </text>
        <path 
          d="M 10 44 Q 80 40, 105 38" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#00529b]"
        />
      </svg>
    ),
  },
  {
    name: 'Hisense',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 40" fill="currentColor">
        <text 
          x="5" 
          y="28" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="28" 
          letterSpacing="-0.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#009999]"
        >
          Hisense
        </text>
      </svg>
    ),
  },
  {
    name: 'Teknix',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 40" fill="currentColor">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#111827]">
          <circle cx="18" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M 11 15 L 25 15 M 18 15 L 18 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text 
            x="36" 
            y="26" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="20" 
            letterSpacing="2"
          >
            TEKNIX
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: 'LG',
    url: '#',
    svg: (
      <svg className="h-11 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 120 45" fill="none">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#A50034]">
          <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="3.2" fill="none" />
          <path d="M 14 17 A 8 8 0 1 0 22 14" stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <path d="M 22 22 L 28 22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="17" cy="18" r="2" fill="currentColor" />
        </g>
        <text 
          x="48" 
          y="30" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="24"
          className="transition-colors duration-300 fill-slate-700 group-hover:fill-[#6b7280]"
        >
          LG
        </text>
      </svg>
    ),
  },
  {
    name: 'Samsung',
    url: '#',
    svg: (
      <svg className="h-8 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 30" fill="currentColor">
        <text 
          x="5" 
          y="22" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="21" 
          letterSpacing="2"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#1428A0]"
        >
          SAMSUNG
        </text>
      </svg>
    ),
  },
  {
    name: 'Miele',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="currentColor">
        <text 
          x="5" 
          y="27" 
          fontFamily="Georgia, serif" 
          fontWeight="900" 
          fontSize="30" 
          fontStyle="italic"
          letterSpacing="-0.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#D40000]"
        >
          Miele
        </text>
      </svg>
    ),
  },
  {
    name: 'Smeg',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 36" fill="currentColor">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#000000]">
          <circle cx="8" cy="24" r="3.2" />
          <circle cx="16" cy="24" r="3.2" />
          <circle cx="24" cy="24" r="3.2" />
          <circle cx="16" cy="16" r="3.2" />
          <circle cx="24" cy="16" r="3.2" />
          <circle cx="32" cy="16" r="3.2" />
          <text 
            x="40" 
            y="26" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="26" 
            letterSpacing="-1"
          >
            smeg
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: 'AEG',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 120 36" fill="currentColor">
        <text 
          x="5" 
          y="28" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="32" 
          letterSpacing="1"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#D3072A]"
        >
          AEG
        </text>
      </svg>
    ),
  },
  {
    name: 'Belling',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="currentColor">
        <text 
          x="5" 
          y="27" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="26" 
          letterSpacing="-0.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#000000]"
        >
          belling
        </text>
      </svg>
    ),
  },
  {
    name: 'Bosch',
    url: '#',
    svg: (
      <svg className="h-10 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 40" fill="currentColor">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#EA1D25]">
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
          <rect x="15" y="11" width="10" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <text 
            x="44" 
            y="28" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="24" 
            letterSpacing="1.5"
          >
            BOSCH
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: 'Fridgemaster',
    url: '#',
    svg: (
      <svg className="h-8 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 180 30" fill="currentColor">
        <text 
          x="5" 
          y="22" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="20" 
          letterSpacing="0"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#0066B3]"
        >
          fridgemaster
        </text>
      </svg>
    ),
  },
  {
    name: 'Haier',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 130 36" fill="currentColor">
        <text 
          x="5" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="26" 
          letterSpacing="0.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#005A9C]"
        >
          Haier
        </text>
      </svg>
    ),
  },
  {
    name: 'Hoover',
    url: '#',
    svg: (
      <svg className="h-10 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 40" fill="none">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#D6001C]">
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3.5" fill="none" />
          <path d="M 8 20 L 32 20" stroke="currentColor" strokeWidth="3" />
          <path d="M 12 10 L 28 30" stroke="currentColor" strokeWidth="2.5" />
          <text 
            x="42" 
            y="29" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="25" 
            letterSpacing="-1"
            fill="currentColor"
          >
            HOOVER
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: 'Hotpoint',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 36" fill="currentColor">
        <text 
          x="5" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="24" 
          letterSpacing="-0.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#E30613]"
        >
          Hotpoint
        </text>
      </svg>
    ),
  },
  {
    name: 'Indesit',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 36" fill="currentColor">
        <g className="transition-colors duration-300 text-slate-700 group-hover:text-[#053769]">
          <path d="M 8 12 A 10 10 0 0 1 24 12 L 24 24 A 10 10 0 0 1 8 24 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="16" cy="18" r="3" fill="currentColor" />
          <text 
            x="32" 
            y="26" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="800" 
            fontSize="22" 
            letterSpacing="0.5"
          >
            INDESIT
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: 'Leisure',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 36" fill="currentColor">
        <text 
          x="5" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="24" 
          letterSpacing="1.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#111827]"
        >
          LEISURE
        </text>
      </svg>
    ),
  },
  {
    name: 'Neff',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 130 36" fill="currentColor">
        <text 
          x="5" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="26" 
          letterSpacing="2"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#E2001A]"
        >
          NEFF
        </text>
      </svg>
    ),
  },
  {
    name: 'Rangemaster',
    url: '#',
    svg: (
      <svg className="h-8 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 190 30" fill="currentColor">
        <text 
          x="5" 
          y="22" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="19" 
          letterSpacing="1"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#000000]"
        >
          RANGEmaster
        </text>
      </svg>
    ),
  },
  {
    name: 'Siemens',
    url: '#',
    svg: (
      <svg className="h-8 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 30" fill="currentColor">
        <text 
          x="5" 
          y="22" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="21" 
          letterSpacing="2.5"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#00646E]"
        >
          SIEMENS
        </text>
      </svg>
    ),
  },
  {
    name: 'Zanussi',
    url: '#',
    svg: (
      <svg className="h-9 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 36" fill="currentColor">
        <text 
          x="5" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="24" 
          letterSpacing="1"
          className="transition-colors duration-300 text-slate-700 group-hover:text-[#FFCC00]"
        >
          ZANUSSI
        </text>
      </svg>
    ),
  },
];

const BrandSection = () => {
  return (
  <section className="py-12 sm:py-16">
    {/* Inline styles for custom keyframe slider */}
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 80s linear infinite; /* Increased from 35s to 80s */
      }
    `}</style>

    <Container>
      <div className="mb-10 text-center">        
        <h2 className="mb-8 mt-8 text-center font-display text-sm font-semibold text-navy-950 sm:text-xl md:text-2xl lg:text-[20px]">   
          Welcome to Our store
        </h2>

        <div className="inline-block rounded-full bg-[linear-gradient(90deg,#1D60FF_0%,#F6F9FF_100%)] p-[2px]">
          <span className="block rounded-full bg-[linear-gradient(90deg,#D9E4FF_0%,rgba(255,255,255,0)_100%)] px-4 py-1.5 text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-semibold tracking-wide text-brand-blue md:text-[16px]">
            Our premium brands
          </span>
        </div>
      </div>

      {/* Sliding Slider Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="group flex w-max gap-12 sm:gap-16 items-center animate-marquee hover:[animation-play-state:paused]">
          {/* Render array twice to make animation loop seamlessly */}
          {[...brands, ...brands].map((brand, index) => (
            <a
              key={`${brand.name}-${index}`}
              href={brand.url}
              aria-label={brand.name}
              className="flex-none flex items-center justify-center p-3 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {brand.svg}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
};

export default BrandSection;