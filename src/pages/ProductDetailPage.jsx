import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProductBySlug } from "../data/productCatalog";
import ProductGallery from "../components/product/ProductGallery";
import ProductBuyBox from "../components/product/ProductBuyBox";
import BuyTogetherSection from "../components/product/BuyTogetherSection";
import ProductAccordion from "../components/product/ProductAccordion";
import productHeaderBg from "../assets/products/product-header.png";
import { fetchProductDetail } from "../services/api";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const fallbackProduct = findProductBySlug(slug);
  const [liveProduct, setLiveProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const loadDetail = async () => {
      const data = await fetchProductDetail(slug);
      if (data) {
        setLiveProduct(data);
      }
    };
    loadDetail();
  }, [slug]);

  const product = liveProduct || fallbackProduct;

  const gallery = useMemo(() => {
    if (!product) return [];
    if (product.gallery?.length) return product.gallery;
    return [product.image];
  }, [product]);

  if (!product) {
    return <div className="container-page py-20 text-center font-semibold text-slate-600">Appliance product not found.</div>;
  }

  return (
    <div>
      <div className="relative flex h-[140px] sm:h-[180px] lg:h-[200px] w-full items-center overflow-hidden bg-navy-950">
        <img
          src={productHeaderBg}
          alt="Product Header Background"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />

        <div className="absolute inset-0 bg-navy-950/60" />

        <div className="container-page relative z-10 w-full">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/70 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link to="/refrigerator" className="transition-colors hover:text-white">
              Refrigeration
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-medium text-white truncate max-w-[250px] sm:max-w-none">
              {product.name || product.title}
            </span>
          </nav>

          <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-3xl font-display">
            {product.name || product.title}
          </h1>
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
        <ProductAccordion product={product} />
      </main>
    </div>
  );
};

export default ProductDetailPage;