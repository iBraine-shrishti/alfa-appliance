
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProductBySlug } from "../data/productCatalog";
import { categoryGateways } from "../data/categoryGateways"; // Adjust path as needed
import ProductGallery from "../components/product/ProductGallery";
import ProductBuyBox from "../components/product/ProductBuyBox";
import BuyTogetherSection from "../components/product/BuyTogetherSection";
// import ProductFeaturesSection from "../components/product/ProductFeaturesSection";
import ProductAccordion from "../components/product/ProductAccordion";
import productHeaderBg from "../assets/products/product-header.png";

const CATEGORY_KEY_MAP = {
  laundry: "laundry",
  refrigeration: "refrigerator",
  refrigerator: "refrigerator",
  refrigerators: "refrigerator",
  cooking: "cooking",
  dishwasher: "dishwashers",
  dishwashers: "dishwashers",
  "small appliances": "small-appliances",
  "small-appliances": "small-appliances",
};

const SUBCATEGORY_CATEGORY_MAP = {
  "washing-machines": "laundry",
  "tumble-dryers": "laundry",
  "washer-dryers": "laundry",
  "fridge-freezers": "refrigerator",
  fridges: "refrigerator",
  freezers: "refrigerator",
  "chest-freezers": "refrigerator",
  cookers: "cooking",
  ovens: "cooking",
  hobs: "cooking",
  "cooker-hoods": "cooking",
  "full-size-dishwashers": "dishwashers",
  "slimline-dishwashers": "dishwashers",
  kettles: "small-appliances",
  toasters: "small-appliances",
  microwaves: "small-appliances",
  "air-fryers": "small-appliances",
  hoovers: "small-appliances",
};

const CATEGORY_NAME_MAP = {
  laundry: "Laundry",
  refrigerator: "Refrigerators",
  cooking: "Cooking",
  dishwashers: "Dishwashers",
  "small-appliances": "Small Appliances",
};

const normalizeSlug = (value = "") =>
  value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const resolveProductTaxonomy = (product) => {
  const subcategory = normalizeSlug(product.subcategory);
  const name = normalizeSlug(product.name);
  const category =
    CATEGORY_KEY_MAP[product.category?.trim().toLowerCase()] ||
    SUBCATEGORY_CATEGORY_MAP[subcategory] ||
    (/(washing-machine|washer|dryer)/.test(name) ? "laundry" : null) ||
    (/(fridge|refrigerator|freezer)/.test(name) ? "refrigerator" : null) ||
    (/(dishwasher)/.test(name) ? "dishwashers" : null) ||
    (/(cooker|oven|hob|hood)/.test(name) ? "cooking" : null) ||
    (/(kettle|toaster|microwave|air-fryer|hoover)/.test(name) ? "small-appliances" : null);

  if (subcategory) return { category, subcategory };

  const inferredSubcategory =
    (/(washing-machine|front-load|washer)/.test(name) && "washing-machines") ||
    (/(tumble-dryer|dryer)/.test(name) && "tumble-dryers") ||
    (/(fridge-freezer|refrigerator)/.test(name) && "fridge-freezers") ||
    (/(chest-freezer|upright-freezer|freezer)/.test(name) && "freezers") ||
    (/(dishwasher)/.test(name) && "full-size-dishwashers") ||
    (/(cooker)/.test(name) && "cookers") ||
    (/(oven)/.test(name) && "ovens") ||
    (/(hob)/.test(name) && "hobs") ||
    (/(hood)/.test(name) && "cooker-hoods") ||
    (/(kettle)/.test(name) && "kettles") ||
    (/(toaster)/.test(name) && "toasters") ||
    (/(microwave)/.test(name) && "microwaves") ||
    (/(air-fryer)/.test(name) && "air-fryers") ||
    (/(hoover)/.test(name) && "hoovers");

  return { category, subcategory: inferredSubcategory };
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = findProductBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!product) return [];
    return product.gallery?.length ? product.gallery : [product.image];
  }, [product]);

  const taxonomy = useMemo(
    () => (product ? resolveProductTaxonomy(product) : { category: null, subcategory: null }),
    [product]
  );
  const gatewayKey = taxonomy.category;

  const categoryConfig = gatewayKey ? categoryGateways[gatewayKey] : null;

  const subcategoryTile = useMemo(() => {
    if (!categoryConfig?.tiles || !taxonomy.subcategory) return null;

    const target = taxonomy.subcategory;

    return categoryConfig.tiles.find((tile) => {
      const tileSlug = tile.slug?.toLowerCase();
      const tileName = tile.name?.toLowerCase().replace(/\s+/g, "-");
      return tileSlug === target || tileName === target;
    });
  }, [categoryConfig, taxonomy.subcategory]);
  const hasSubcategoryTrail = Boolean(taxonomy.subcategory && subcategoryTile);

  if (!product) {
    return <div className="container-page py-20">Product not found.</div>;
  }

  return (
    <div>
      <div className="relative flex min-h-[20px] md:h-6 lg:h-8 w-full items-center justify-between px-3 sm:px-6 overflow-hidden bg-white">
        {/* <img
            src={productHeaderBg}
            alt="Product Header Background"
            className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          /> */}
        <div className="absolute inset-0 " />

        <div className="container-page relative z-10 w-full border-b border-black/10 pb-2">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-black/70 sm:text-sm">
            {/* 1. Home */}
            <Link to="/" className="transition-colors hover:text-black">
              Home
            </Link>

            {/* 2. Main Category */}
            {gatewayKey && hasSubcategoryTrail && (
              <>
                <span className="text-black/40">/</span>
                <Link
                  to={`/${gatewayKey}`}
                  className="transition-colors hover:text-black capitalize"
                >
                  {CATEGORY_NAME_MAP[gatewayKey]}
                </Link>
              </>
            )}

            {/* 3. Subcategory */}
            {hasSubcategoryTrail && (
              <>
                <span className="text-black/40">/</span>
                <Link
                  to={`/collection/${subcategoryTile?.slug || taxonomy.subcategory}`}
                  className="transition-colors hover:text-black capitalize"
                >
                  {subcategoryTile?.name || taxonomy.subcategory.replace(/-/g, " ")}
                </Link>
              </>
            )}

            {/* 4. Product Name */}
            <span className="text-black/40">/</span>
            <span className="font-medium text-black truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
          {/* <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-3xl font-display">
          {product.name}
        </h1> */}
        </div>
      </div>

      <main className="container-page pb-16 pt-8">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery
            product={product}
            gallery={gallery}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
          />
          <ProductBuyBox product={product} />
        </section>

        <BuyTogetherSection product={product} />
         {/* <ProductFeaturesSection product={product} /> */}
        <ProductAccordion product={product} />
      </main>
    </div>
  );
};

export default ProductDetailPage;
