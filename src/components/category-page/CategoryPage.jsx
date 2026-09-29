import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import CategoryHero from "./CategoryHero";
import CategoryGateway from "./CategoryGateway";
import FilterSidebar from "./FilterSidebar";
import MobileFilterDrawer from "./MobileFilterDrawer";
import CategoryProductGrid from "./CategoryProductGrid";
import { categoryPages } from "../../data/categoryPages";
import { categoryGateways } from "../../data/categoryGateways";
import { fetchProducts } from "../../services/api";

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

const CANONICAL_SLUG_MAP = {
  kettle: "kettles",
  kettles: "kettles",
  toaster: "toasters",
  toasters: "toasters",
  microwave: "microwaves",
  microwaves: "microwaves",
  "air-fryer": "air-fryers",
  "air-fryers": "air-fryers",
  hoover: "hoovers",
  hoovers: "hoovers",
  dryer: "tumble-dryers",
  dryers: "tumble-dryers",
  "tumble-dryer": "tumble-dryers",
  "tumble-dryers": "tumble-dryers",
  "washing-machine": "washing-machines",
  "washing-machines": "washing-machines",
  "washer-dryer": "washer-dryers",
  "washer-dryers": "washer-dryers",
  fridge: "fridges",
  fridges: "fridges",
  freezer: "freezers",
  freezers: "freezers",
  "fridge-freezer": "fridge-freezers",
  "fridge-freezers": "fridge-freezers",
  "chest-freezer": "chest-freezers",
  "chest-freezers": "chest-freezers",
  cooker: "cookers",
  cookers: "cookers",
  oven: "ovens",
  ovens: "ovens",
  hob: "hobs",
  hobs: "hobs",
  "cooker-hood": "cooker-hoods",
  "cooker-hoods": "cooker-hoods",
  dishwasher: "dishwashers",
  dishwashers: "dishwashers",
  "full-size-dishwasher": "full-size-dishwashers",
  "full-size-dishwashers": "full-size-dishwashers",
  "slimline-dishwasher": "slimline-dishwashers",
  "slimline-dishwashers": "slimline-dishwashers",
};

const SUBCATEGORY_ALIASES = {
  kettles: ["kettles", "kettle"],
  toasters: ["toasters", "toaster"],
  microwaves: ["microwaves", "microwave"],
  "air-fryers": ["air-fryers", "air-fryer", "airfryers", "airfryer"],
  hoovers: ["hoovers", "hoover", "vacuums", "vacuum"],
  "washing-machines": ["washing-machines", "washing-machine"],
  "washer-dryers": ["washer-dryers", "washer-dryer"],
  "tumble-dryers": ["tumble-dryers", "tumble-dryer", "dryers", "dryer"],
  "fridge-freezers": ["fridge-freezers", "fridge-freezer"],
  fridges: ["fridges", "fridge"],
  freezers: ["freezers", "freezer"],
  "chest-freezers": ["chest-freezers", "chest-freezer"],
  cookers: ["cookers", "cooker"],
  ovens: ["ovens", "oven"],
  hobs: ["hobs", "hob"],
  "cooker-hoods": ["cooker-hoods", "cooker-hood", "extractor-fans", "extractor-fan"],
  "full-size-dishwashers": ["full-size-dishwashers", "full-size-dishwasher", "full-size"],
  "slimline-dishwashers": ["slimline-dishwashers", "slimline-dishwasher", "slimline"],
  dishwashers: ["dishwashers", "dishwasher", "full-size-dishwashers", "slimline-dishwashers"],
};

const CategoryPage = () => {
  const { category, slug: routeSlug } = useParams();
  const hasParentCategory = Boolean(category);
  const parentSlug = hasParentCategory ? category : null;
  const childSlug = hasParentCategory ? routeSlug : null;
  const slug = childSlug || routeSlug || category;
  const rawSlug = (slug || "").toLowerCase();
  const canonicalSlug = CANONICAL_SLUG_MAP[rawSlug] || rawSlug;
  const [searchParams] = useSearchParams();
  const brandQuery = searchParams.get("brand");
  const page = categoryPages[canonicalSlug] || categoryPages[rawSlug] || categoryPages[slug];
  const parentGateway = parentSlug ? categoryGateways[parentSlug] : null;
  const subcategory = parentGateway?.tiles?.find(
    (tile) => tile.slug === canonicalSlug || tile.slug === rawSlug
  );

  const formattedSubName = (canonicalSlug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const hero = page
    ? {
        ...page.hero,
        breadcrumb: childSlug
          ? [
              { label: "Home", href: "/" },
              {
                label:
                  parentGateway?.eyebrow ||
                  (category || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
                  "Category",
                href: `/${category}`,
              },
              { label: subcategory?.name || formattedSubName },
            ]
          : page.hero.breadcrumb,
        title: childSlug ? (subcategory?.name || formattedSubName) : page.hero.title,
      }
    : null;
  const [viewMode, setViewMode] = useState("grid");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [backendProducts, setBackendProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchProducts().then((res) => {
      if (isMounted) {
        if (res && res.length > 0) {
          setBackendProducts(res);
        }
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [slug, childSlug, category]);

  const visibleProducts = useMemo(() => {
    const rawTarget = (childSlug || slug || "").toLowerCase();
    const targetSlug = CANONICAL_SLUG_MAP[rawTarget] || rawTarget;
    const isSubcategory = Boolean(childSlug) || Boolean(SUBCATEGORY_ALIASES[targetSlug]);

    if (isSubcategory && SUBCATEGORY_ALIASES[targetSlug]) {
      const aliases = SUBCATEGORY_ALIASES[targetSlug];
      return backendProducts.filter((p) => {
        const pCat = (p.category || "").toString().toLowerCase();
        const pCatName = (p.category_name || "").toLowerCase();
        const pSub = (p.subcategory || "").toLowerCase();
        const pCollections = (p.collections || []).map((c) =>
          (c.slug || c.title || "").toLowerCase(),
        );

        const collMatch = pCollections.some((c) => aliases.includes(c));
        const subMatch = aliases.includes(pSub);
        const catMatch =
          (targetSlug === "microwaves" && (pCatName === "microwave" || pCatName === "microwaves")) ||
          (targetSlug === "dishwashers" && (pCatName === "dishwasher" || pCatName === "dishwashers"));

        if (collMatch || subMatch || catMatch) {
          // Disambiguate fridges and freezers from fridge-freezers and chest-freezers
          if (targetSlug === "fridges" && pCollections.includes("fridge-freezers")) return false;
          if (
            targetSlug === "freezers" &&
            (pCollections.includes("fridge-freezers") || pCollections.includes("chest-freezers"))
          )
            return false;
          return true;
        }
        return false;
      });
    }

    const pageSubSlugs = (page?.subcategorySlugs || []).map((s) => s.toLowerCase());

    const CATEGORY_ALIASES = {
      refrigerator: [
        "refrigerator",
        "refrigeration",
        "fridges",
        "freezers",
        "fridge-freezers",
        "chest-freezers",
      ],
      refrigeration: [
        "refrigerator",
        "refrigeration",
        "fridges",
        "freezers",
        "fridge-freezers",
        "chest-freezers",
      ],
      cooking: [
        "cooking",
        "cookers",
        "ovens",
        "hobs",
        "cooker-hoods",
        "microwaves",
        "microwave",
      ],
      laundry: [
        "laundry",
        "washing-machines",
        "tumble-dryers",
        "washer-dryers",
      ],
      dishwashers: [
        "dishwashers",
        "dishwasher",
        "full-size-dishwashers",
        "slimline-dishwashers",
      ],
      dishwasher: [
        "dishwashers",
        "dishwasher",
        "full-size-dishwashers",
        "slimline-dishwashers",
      ],
      "small-appliances": [
        "small-appliances",
        "small appliances",
        "kettles",
        "toasters",
        "microwaves",
        "air-fryers",
        "hoovers",
      ],
    };

    const targetAliases = CATEGORY_ALIASES[targetSlug] || [targetSlug];

    return backendProducts.filter((p) => {
      const pCat = (p.category || "").toString().toLowerCase();
      const pCatName = (p.category_name || "").toLowerCase();
      const pSub = (p.subcategory || "").toLowerCase();
      const pCollections = (p.collections || []).map((c) =>
        (c.slug || c.title || "").toLowerCase(),
      );

      // 1. Match on subcategory or collection
      if (pSub === targetSlug || pCollections.includes(targetSlug)) return true;

      // 2. Match on category
      if (pCat === targetSlug || pCatName === targetSlug) return true;
      if (targetAliases.includes(pCat) || targetAliases.includes(pCatName))
        return true;

      // 3. Match on page subcategory slugs
      if (pageSubSlugs.includes(pSub)) return true;
      if (pageSubSlugs.some((sub) => pCollections.includes(sub))) return true;

      return false;
    });
  }, [page, childSlug, category, backendProducts]);

  const categoryOptions = useMemo(() => {
    const normalizedVisibleCategories = [
      ...new Set(
        visibleProducts.map((product) => product.subcategory).filter(Boolean),
      ),
    ];

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
    const productBrands = visibleProducts
      .map((product) => product.brand)
      .filter(Boolean);
    const matchingRequestedBrands = requestedBrandNames.filter((brand) =>
      productBrands.includes(brand),
    );
    return [...new Set([...productBrands, ...matchingRequestedBrands])].sort(
      (a, b) => a.localeCompare(b),
    );
  }, [visibleProducts]);

  const sidebarFilters = useMemo(
    () => ({
      ...page?.filters,
      categories: categoryOptions,
      brands: brandOptions,
    }),
    [page, categoryOptions, brandOptions],
  );

  const filteredProducts = useMemo(() => {
    const products = visibleProducts;
    const activeFilters = appliedFilters ?? {};

    if (
      !activeFilters.categories?.length &&
      !activeFilters.brands?.length &&
      !activeFilters.availability?.length &&
      !brandQuery &&
      typeof activeFilters.priceMax !== "number"
    ) {
      return products;
    }

    return products.filter((product) => {
      if (brandQuery && product.brand !== brandQuery) return false;

      if (activeFilters.categories?.length) {
        const matchesAny = activeFilters.categories.some((cat) => {
          const categoryName = stripTrailingS(cat)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
          const subcategory = (product.subcategory ?? "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
          const category = (product.category ?? "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
          return (
            subcategory.includes(categoryName) ||
            category.includes(categoryName) ||
            product.name.toLowerCase().includes(categoryName)
          );
        });

        if (!matchesAny) return false;
      }

      if (
        activeFilters.brands?.length &&
        !activeFilters.brands.includes(product.brand)
      ) {
        return false;
      }

      if (activeFilters.availability?.length) {
        const wantsInStock = activeFilters.availability.includes("In Stock");
        const wantsOutOfStock =
          activeFilters.availability.includes("Out of Stock");
        const isInStock = product.inStock !== false;
        if (wantsInStock && !wantsOutOfStock && !isInStock) return false;
        if (wantsOutOfStock && !wantsInStock && isInStock) return false;
      }

      if (
        typeof activeFilters.priceMax === "number" &&
        product.price > activeFilters.priceMax
      ) {
        return false;
      }

      return true;
    });
  }, [visibleProducts, appliedFilters, brandQuery, slug]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    if (sortValue === "price-low")
      return products.sort((a, b) => a.price - b.price);
    if (sortValue === "price-high")
      return products.sort((a, b) => b.price - a.price);
    return products;
  }, [filteredProducts, sortValue]);

  const PAGE_SIZE = 20;
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return sortedProducts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [sortedProducts, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFiltersChange = (selected) => {
    setAppliedFilters(selected);
    setCurrentPage(1);
  };

  if (!page) {
    return <Navigate to="/laundry" replace />;
  }

  if (categoryGateways[slug]) {
    return (
      <CategoryGateway
        page={page}
        gateway={categoryGateways[slug]}
        parentSlug={slug}
      />
    );
  }

  return (
    <div>
      <CategoryHero {...hero} />

      <section className="container-page py-4 sm:py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[270px_1fr] xl:grid-cols-[280px_1fr] 2xl:grid-cols-[300px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar
              filters={sidebarFilters}
              onChange={handleFiltersChange}
            />
          </div>

          <CategoryProductGrid
            totalResults={sortedProducts.length}
            products={paginatedProducts}
            loading={loading}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortValue={sortValue}
            onSortChange={setSortValue}
            sortOptions={page.sortOptions}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
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
