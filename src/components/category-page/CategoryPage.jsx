import { useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import CategoryHero from "./CategoryHero";
import FilterSidebar from "./FilterSidebar";
import CategoryProductGrid from "./CategoryProductGrid";
import { categoryPages } from "../../data/categoryPages";

const CategoryPage = () => {
  const { slug } = useParams();
  const page = categoryPages[slug];
  const [viewMode, setViewMode] = useState("grid");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const products = [...(page?.products ?? [])];
    if (sortValue === "price-low") return products.sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") return products.sort((a, b) => b.price - a.price);
    return products;
  }, [page, sortValue]);

  if (!page) {
    return <Navigate to="/laundry" replace />;
  }

  return (
    <div className="bg-[#f7f7fb]">
      <CategoryHero {...page.hero} />

      <section className="container-page py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <FilterSidebar filters={page.filters} />
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
          />
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
