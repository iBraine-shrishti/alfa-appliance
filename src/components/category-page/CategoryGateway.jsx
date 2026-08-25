// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
// import CategoryHero from "./CategoryHero";

// const CategoryGateway = ({ page, gateway }) => (
//   <div className="bg-[#f5f5f7] min-h-screen py-6 sm:py-10">
//     {page?.hero && <CategoryHero {...page.hero} />}

//     <main className="container mx-auto  space-y-8 px-4 sm:px-6">
//       <section className="rounded border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
//         <div className="mb-8 text-center">
//           <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
//             Browse by type
//           </p>
//           <h2 className="mt-1 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
//             Find your appliance
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-xs text-gray-500">
//             Choose a section to explore appliances selected for your home.
//           </p>
//         </div>

//         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//           {gateway.tiles.map((tile) => (
//             <Link
//               key={tile.slug}
//               to={`/collection/${tile.slug}`}
//               className="group flex flex-col items-center w-55 sm:w-35 lg:w-78 text-center"
              
//             >
//               <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-[#f4f4f6] p-4 transition-all duration-300 group-hover:bg-blue-50/50 group-hover:shadow-md">
//                 <img
//                   src={tile.image}
//                   alt={tile.name}
//                   className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <span className="mt-3 text-xs font-semibold text-gray-800 transition-colors group-hover:text-blue-600 sm:text-sm">
//                 {tile.name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
//         {gateway.popularLinks?.length > 0 && (
//           <aside className="mx-auto w-full max-w-sm lg:mx-0">
//             <LinkList title="Popular links" links={gateway.popularLinks} />
//           </aside>
//         )}

//         <div className="min-w-0 space-y-8">
//           {gateway.brands?.length > 0 && (
//             <section className="mx-auto w-full rounded border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
//               <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
//                 Shop by brand
//               </p>
//               <h2 className="mt-1 text-center font-display text-2xl font-bold text-gray-900">
//                 Trusted names, selected for {gateway.eyebrow?.toLowerCase()}
//               </h2>
//               <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
//                 {gateway.brands.filter(Boolean).map((brand) => (
//                   <Link
//                     key={brand.id}
//                     to={`/collection/${gateway.tiles[0]?.slug}?brand=${encodeURIComponent(brand.name)}`}
//                     className="group flex flex-col items-center justify-between rounded border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
//                   >
//                     <div className="flex h-12 w-full items-center justify-center">
//                       <img
//                         src={brand.logo}
//                         alt={brand.name}
//                         className="max-h-8 w-full object-contain"
//                       />
//                     </div>
//                     <span className="mt-4 flex items-center justify-center gap-1 rounded-full border border-blue-600 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
//                       Shop now <FiArrowRight size={12} />
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </section>
//           )}
//           {gateway.considerations?.length > 0 && (
//             <section className="rounded bg-[#ebe8f0] p-6 sm:p-8">
//               <div className="mb-6 text-center">
//                 <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
//                   Helpful guidance
//                 </p>
//                 <h2 className="mt-1 font-display text-2xl font-bold text-gray-900">
//                   Things to consider
//                 </h2>
//               </div>
//               <div className="grid gap-6 sm:grid-cols-3">
//                 {gateway.considerations.map((item) => (
//                   <article
//                     key={item.title}
//                     className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="h-44 w-full object-cover"
//                     />
//                     <div className="p-5">
//                       <h3 className="font-display text-base font-bold text-gray-900">
//                         {item.title}
//                       </h3>
//                       <p className="mt-2 text-xs leading-relaxed text-gray-600">
//                         {item.text}
//                       </p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </section>
//           )}

//           {gateway.content && (
//             <section className="rounded border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
//               <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
//                 {gateway.eyebrow} overview
//               </p>
//               <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                 {gateway.content.title}
//               </h2>
//               <div className="mt-4 grid gap-6 text-xs sm:text-sm leading-relaxed text-gray-600 sm:grid-cols-2">
//                 {gateway.content.paragraphs.map((paragraph, index) => (
//                   <p key={index}>{paragraph}</p>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </main>
//   </div>
// );

// const LinkList = ({ title, links }) => (
//   <section className="rounded border border-gray-100 bg-white p-5 shadow-sm">
//     <h2 className="mb-4 font-display text-lg font-bold text-gray-900">{title}</h2>
//     <div className="space-y-2">
//       {links.map((link) => (
//         <Link
//           key={`${link.label}-${link.slug}`}
//           to={`/collection/${link.slug}${
//             link.brand ? `?brand=${encodeURIComponent(link.brand)}` : ""
//           }`}
//           className="flex items-center justify-between gap-10 rounded border border-gray-100 bg-white px-3.5 py-2.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
//         >
//           {link.label}
//           <FiArrowRight size={14} />
//         </Link>
//       ))}
//     </div>
//   </section>
// );

// export default CategoryGateway;

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import CategoryHero from "./CategoryHero";

const CategoryGateway = ({ page, gateway }) => (
  <div className=" min-h-screen pb-16">
    {page?.hero && <CategoryHero {...page.hero} />}

    <main className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8 space-y-10">
      {/* Hero / Browse By Type Card */}
      <section className="mx-auto w-full overflow-hidden rounded border border-gray-200/60 bg-white p-6 sm:p-10 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Browse by type
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            {gateway.title || "Find your appliance"}
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-gray-500">
            {gateway.description || "Choose a section to explore appliances selected for your home."}
          </p>
        </div>

        {/* Large Prominent Category Tiles */}
        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-8">
          {gateway.tiles.map((tile) => (
            <Link
              key={tile.slug}
              to={`/collection/${tile.slug}`}
              className="group flex flex-col items-center w-40 sm:w-52 lg:w-56 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded bg-[#f2f2f5] p-5 border border-gray-100 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/40 group-hover:shadow-md">
                <img
                  src={tile.image}
                  alt={tile.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 text-xs sm:text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                {tile.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Popular Links Sidebar */}
        {gateway.popularLinks?.length > 0 && (
          <aside className="w-full">
            <LinkList title="Popular links" links={gateway.popularLinks} />
          </aside>
        )}

        <div className="min-w-0 space-y-10">
          {/* Shop by Brand Section */}
          {gateway.brands?.length > 0 && (
            <section className="rounded border border-gray-200/60 bg-white p-6 sm:p-8 shadow-sm">
              <div className="text-center mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Shop by brand
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-gray-900">
                  Trusted names, selected for {gateway.eyebrow?.toLowerCase()}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {gateway.brands.filter(Boolean).map((brand) => (
                  <Link
                    key={brand.id || brand.name}
                    to={`/collection/${gateway.tiles[0]?.slug}?brand=${encodeURIComponent(brand.name)}`}
                    className="group flex flex-col items-center justify-between rounded border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-300"
                  >
                    <div className="flex h-14 w-full items-center justify-center p-2">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-10 w-full object-contain"
                      />
                    </div>
                    <span className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-blue-600 px-3.5 py-1 text-xs font-semibold text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      Shop now <FiArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Helpful Guidance Section */}
          {gateway.considerations?.length > 0 && (
            <section className="rounded bg-[#eeeef3] p-6 sm:p-8">
              <div className="mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Helpful guidance
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-gray-900">
                  Things to consider
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {gateway.considerations.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md flex flex-col"
                  >
                    <div className="h-44 sm:h-48 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-display text-base font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Category Overview Text Box */}
         
        </div>
        
      </div>
       {gateway.content && (
            <section className="rounded border border-gray-200/60 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                {gateway.eyebrow} overview
              </p>
              <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {gateway.content.title}
              </h2>
              <div className="mt-5 grid gap-6 text-xs sm:text-sm leading-relaxed text-gray-600 sm:grid-cols-2">
                {gateway.content.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}
    </main>
  </div>
);

const LinkList = ({ title, links }) => (
  <section className="rounded border border-gray-200/60 bg-white p-5 shadow-sm">
    <h2 className="mb-4 font-display text-lg font-bold text-gray-900">{title}</h2>
    <div className="space-y-2.5">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.slug}`}
          to={`/collection/${link.slug}${
            link.brand ? `?brand=${encodeURIComponent(link.brand)}` : ""
          }`}
          className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3 text-xs sm:text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-xs"
        >
          {link.label}
          <FiArrowRight size={14} className="shrink-0 ml-2" />
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGateway;