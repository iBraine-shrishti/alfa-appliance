import { useMemo, useState } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import CategoryHero from "./CategoryHero";
import CategoryGateway from "./CategoryGateway";
import FilterSidebar from "./FilterSidebar";
import MobileFilterDrawer from "./MobileFilterDrawer";
import CategoryProductGrid from "./CategoryProductGrid";
import { categoryPages } from "../../data/categoryPages";
import { categoryGateways } from "../../data/categoryGateways";

const stripTrailingS = (str) => (str.endsWith("s") ? str.slice(0, -1) : str);

const CategoryPage = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const brandQuery = searchParams.get("brand");
  const page = categoryPages[slug];
  const [viewMode, setViewMode] = useState("grid");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const products = page?.subcategorySlugs?.includes(slug)
      ? page.products.filter((product) => product.subcategory === slug)
      : page?.products ?? [];
    if (!appliedFilters && !brandQuery) return products;

    return products.filter((product) => {
      if (brandQuery && product.brand !== brandQuery) return false;
      if (appliedFilters.categories?.length) {
        const haystack = product.name.toLowerCase();
        const matchesAny = appliedFilters.categories.some((cat) =>
          haystack.includes(stripTrailingS(cat).toLowerCase())
        );
        if (!matchesAny) return false;
      }

      if (appliedFilters.brands?.length && !appliedFilters.brands.includes(product.brand)) {
        return false;
      }

      if (appliedFilters.availability?.length) {
        const wantsInStock = appliedFilters.availability.includes("In Stock");
        const wantsOutOfStock = appliedFilters.availability.includes("Out of Stock");
        const isInStock = product.inStock !== false;
        if (wantsInStock && !wantsOutOfStock && !isInStock) return false;
        if (wantsOutOfStock && !wantsInStock && isInStock) return false;
      }

      if (typeof appliedFilters.priceMax === "number" && product.price > appliedFilters.priceMax) {
        return false;
      }

      return true;
    });
  }, [page, appliedFilters, brandQuery, slug]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    if (sortValue === "price-low") return products.sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") return products.sort((a, b) => b.price - a.price);
    return products;
  }, [filteredProducts, sortValue]);

  const handleFiltersChange = (selected) => {
    setAppliedFilters(selected);
    setCurrentPage(1);
  };

  if (!page) {
    return <Navigate to="/laundry" replace />;
  }

  if (categoryGateways[slug]) {
    return <CategoryGateway page={page} gateway={categoryGateways[slug]} />;
  }

  return (
    <div className="bg-[#f7f7fb]">
      <CategoryHero {...page.hero} />

      <section className="container-page py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar filters={page.filters} onChange={handleFiltersChange} />
          </div>

          <CategoryProductGrid
            totalResults={sortedProducts.length}
            products={sortedProducts}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortValue={sortValue}
            onSortChange={setSortValue}
            sortOptions={page.sortOptions}
            currentPage={currentPage}
            totalPages={page.totalPages}
            onPageChange={setCurrentPage}
            onOpenFilters={() => setMobileFiltersOpen(true)}
          />
        </div>
      </section>

      <MobileFilterDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filters={page.filters}
        onChange={handleFiltersChange}
      />
    </div>
  );
};

export default CategoryPage;