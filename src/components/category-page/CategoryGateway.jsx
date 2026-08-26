
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import CategoryHero from "./CategoryHero";

const CategoryGateway = ({ page, gateway, parentSlug }) => (
  <div className=" min-h-screen pb-16">
    {page?.hero && <CategoryHero {...page.hero} />}

    <main className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8 space-y-10">
  
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

        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-8">
          {gateway.tiles.map((tile) => (
            <Link
              key={tile.slug}
              to={`/${parentSlug}/${tile.slug}`}
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

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {gateway.popularLinks?.length > 0 && (
          <aside className="w-full">
            <LinkList title="Popular links" links={gateway.popularLinks} parentSlug={parentSlug} />
          </aside>
        )}

        <div className="min-w-0 space-y-10">
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
                    to={`/${parentSlug}/${gateway.tiles[0]?.slug}?brand=${encodeURIComponent(brand.name)}`}
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

const LinkList = ({ title, links, parentSlug }) => (
  <aside className="w-full rounded border border-gray-200/60 bg-white p-5 shadow-sm">
    <h2 className="mb-4 font-display text-lg font-bold text-gray-900">{title}</h2>
    <div className="space-y-2.5">{links.map((link) => <Link key={`${link.label}-${link.slug}`} to={`/${parentSlug}/${link.slug}${link.brand ? `?brand=${encodeURIComponent(link.brand)}` : ""}`} className="flex items-center justify-between rounded border border-gray-100 px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600">{link.label}<FiArrowRight size={14} /></Link>)}</div>
  </aside>
);

export default CategoryGateway;
