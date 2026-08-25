import { Link } from "react-router-dom";

const CategoryHero = ({ breadcrumb, title, subtitle, image }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[220px] min-h-[220px] sm:h-[280px] lg:h-[320px]">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/72 via-navy-950/42 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />

        <div className="container-page relative flex h-full flex-col justify-end pb-8 sm:pb-10">
          <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/75">
            {breadcrumb.map((item, index) => (
              <span key={`${item.label}-${item.href ?? index}`} className="flex items-center gap-2">
                {item.href ? (
                  <Link to={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && <span className="text-white/35">/</span>}
              </span>
            ))}
          </nav>

          <div className="max-w-2xl text-white">
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {typeof subtitle === "string" ? subtitle : (
                <>
                  {subtitle.before}
                  <span className="font-bold text-white">{subtitle.highlight}</span>
                  {subtitle.after}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
