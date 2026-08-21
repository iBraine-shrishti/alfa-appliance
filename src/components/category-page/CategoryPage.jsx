import { useEffect, useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import CategoryHero from "./CategoryHero";
import FilterSidebar from "./FilterSidebar";
import MobileFilterDrawer from "./MobileFilterDrawer";
import CategoryProductGrid from "./CategoryProductGrid";
import { categoryPages } from "../../data/categoryPages";
import { fetchProducts } from "../../services/api";

const stripTrailingS = (str) => (str.endsWith("s") ? str.slice(0, -1) : str);

const CategoryPage = () => {
  const { slug } = useParams();
  const page = categoryPages[slug] || categoryPages["laundry"];
  const [liveProducts, setLiveProducts] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const loadApiProducts = async () => {
      const data = await fetchProducts();
      if (data && data.length > 0) {
        setLiveProducts(data);
      }
    };
    loadApiProducts();
  }, []);

  const baseProducts = useMemo(() => {
    if (liveProducts && liveProducts.length > 0) {
      return liveProducts;
    }
    return page?.products ?? [];
  }, [liveProducts, page]);

  const filteredProducts = useMemo(() => {
    if (!appliedFilters) return baseProducts;

    return baseProducts.filter((product) => {
      // 1. Category / Subcategory Filter
      if (appliedFilters.categories?.length > 0) {
        const titleStr = (product.name || product.title || "").toLowerCase();
        const catStr = (product.categoryName || product.category_name || product.category || "").toLowerCase();
        const typeStr = (product.appliance_type || "").toLowerCase();

        const matchesAnyCat = appliedFilters.categories.some((cat) => {
          const target = stripTrailingS(cat).toLowerCase();
          return (
            titleStr.includes(target) ||
            catStr.includes(target) ||
            typeStr.includes(target)
          );
        });

        if (!matchesAnyCat) return false;
      }

      // 2. Brand Filter
      if (appliedFilters.brands?.length > 0) {
        const prodBrand = (product.brand || product.brand_name || "").toLowerCase();
        const matchesBrand = appliedFilters.brands.some((b) => {
          const bTarget = b.toLowerCase();
          return prodBrand.includes(bTarget) || bTarget.includes(prodBrand);
        });
        if (!matchesBrand) return false;
      }

      // 3. Availability Filter
      if (appliedFilters.availability?.length > 0) {
        const wantsInStock = appliedFilters.availability.includes("In Stock");
        const wantsOutOfStock = appliedFilters.availability.includes("Out of Stock");
        const isInStock = product.stock_quantity !== 0 && product.inStock !== false;

        if (wantsInStock && !wantsOutOfStock && !isInStock) return false;
        if (wantsOutOfStock && !wantsInStock && isInStock) return false;
      }

      // 4. Price Filter
      if (typeof appliedFilters.priceMax === "number" && product.price > appliedFilters.priceMax) {
        return false;
      }

      return true;
    });
  }, [baseProducts, appliedFilters]);

  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];

    // Radio option / Select sort handling
    const activeSort = appliedFilters?.featured || sortValue;

    if (activeSort === "price-low" || activeSort === "Price Low to High") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (activeSort === "price-high" || activeSort === "Price High to Low") {
      return products.sort((a, b) => b.price - a.price);
    }
    if (activeSort === "Discount High to Low") {
      return products.sort((a, b) => {
        const discA = a.oldPrice ? a.oldPrice - a.price : 0;
        const discB = b.oldPrice ? b.oldPrice - b.price : 0;
        return discB - discA;
      });
    }

    return products;
  }, [filteredProducts, appliedFilters, sortValue]);

  const handleFiltersChange = (selected) => {
    setAppliedFilters(selected);
    setCurrentPage(1);
  };

  if (!page) {
    return <Navigate to="/laundry" replace />;
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
            totalPages={page.totalPages || 1}
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