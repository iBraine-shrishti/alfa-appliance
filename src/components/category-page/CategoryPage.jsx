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

const requestedBrandNames = [
  "Belling",
  "Bosch",
  "Fridgemaster",
  "Haier",
  "Hoover",
  "Hotpoint",
  "Indesit",
  "Leisure",
  "Neff",
  "Rangemaster",
  "Siemens",
  "Zanussi",
  "AEG",
];

const CategoryPage = () => {
  const { category, slug: childSlug } = useParams();
  const slug = childSlug || category;
  const [searchParams] = useSearchParams();
  const brandQuery = searchParams.get("brand");
  const page = categoryPages[slug];
  const parentSlug = childSlug ? category : null;
  const parentGateway = parentSlug ? categoryGateways[parentSlug] : null;
  const subcategory = parentGateway?.tiles?.find((tile) => tile.slug === slug);
  const hero = page
    ? {
        ...page.hero,
        breadcrumb: subcategory
          ? [
              { label: "Home", href: "/" },
              { label: parentGateway.eyebrow, href: `/${parentSlug}` },
              { label: subcategory.name },
            ]
          : page.hero.breadcrumb,
        title: subcategory?.name || page.hero.title,
      }
    : null;
  const [viewMode, setViewMode] = useState("grid");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    if (!page) return [];
    return page.subcategorySlugs?.includes(slug)
      ? page.products.filter((product) => product.subcategory === slug)
      : page.products;
  }, [page, slug]);

  const categoryOptions = useMemo(() => {
    const normalizedVisibleCategories = [...new Set(visibleProducts.map((product) => product.subcategory).filter(Boolean))];

    if (normalizedVisibleCategories.length > 0) {
      return normalizedVisibleCategories.map((label) => ({
        label: label
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" "),
        children: [],
      }));
    }

    return page?.filters?.categories ?? [];
  }, [page, visibleProducts]);

  const brandOptions = useMemo(() => {
    const productBrands = visibleProducts.map((product) => product.brand).filter(Boolean);
    const matchingRequestedBrands = requestedBrandNames.filter((brand) => productBrands.includes(brand));
    return [...new Set([...productBrands, ...matchingRequestedBrands])].sort((a, b) => a.localeCompare(b));
  }, [visibleProducts]);

  const sidebarFilters = useMemo(
    () => ({ ...page?.filters, categories: categoryOptions, brands: brandOptions }),
    [page, categoryOptions, brandOptions]
  );

  const filteredProducts = useMemo(() => {
    const products = visibleProducts;
    const activeFilters = appliedFilters ?? {};

    if (!activeFilters.categories?.length && !activeFilters.brands?.length && !activeFilters.availability?.length && !brandQuery && typeof activeFilters.priceMax !== "number") {
      return products;
    }

    return products.filter((product) => {
      if (brandQuery && product.brand !== brandQuery) return false;

      if (activeFilters.categories?.length) {
        const matchesAny = activeFilters.categories.some((cat) => {
          const categoryName = stripTrailingS(cat).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
          const subcategory = (product.subcategory ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
          const category = (product.category ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
          return subcategory.includes(categoryName) || category.includes(categoryName) || product.name.toLowerCase().includes(categoryName);
        });

        if (!matchesAny) return false;
      }

      if (activeFilters.brands?.length && !activeFilters.brands.includes(product.brand)) {
        return false;
      }

      if (activeFilters.availability?.length) {
        const wantsInStock = activeFilters.availability.includes("In Stock");
        const wantsOutOfStock = activeFilters.availability.includes("Out of Stock");
        const isInStock = product.inStock !== false;
        if (wantsInStock && !wantsOutOfStock && !isInStock) return false;
        if (wantsOutOfStock && !wantsInStock && isInStock) return false;
      }

      if (typeof activeFilters.priceMax === "number" && product.price > activeFilters.priceMax) {
        return false;
      }

      return true;
    });
  }, [visibleProducts, appliedFilters, brandQuery, slug]);

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
    return <CategoryGateway page={page} gateway={categoryGateways[slug]} parentSlug={slug} />;
  }

  return (
    <div className="bg-[#f7f7fb]">
      <CategoryHero {...hero} />

      <section className="container-page py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar filters={sidebarFilters} onChange={handleFiltersChange} />
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
        filters={sidebarFilters}
        onChange={handleFiltersChange}
      />
    </div>
  );
};

export default CategoryPage;