import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProductBySlug } from "../data/productCatalog";
import ProductGallery from "../components/product/ProductGallery";
import ProductBuyBox from "../components/product/ProductBuyBox";
import BuyTogetherSection from "../components/product/BuyTogetherSection";
// import ProductFeaturesSection from "../components/product/ProductFeaturesSection";
// import ProductSpecsSection from "../components/product/ProductSpecsSection";
// import ProductReviewsSection from "../components/product/ProductReviewsSection";
// import ProductDescriptionSection from "../components/product/ProductDescriptionSection";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = findProductBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!product) return [];
    return product.gallery?.length ? product.gallery : [product.image, product.image, product.image];
  }, [product]);

  if (!product) {
    return <div className="container-page py-20">Product not found.</div>;
  }

  return (
    <div className="bg-[#f5f5fb]">
      <div className="container-page py-4 text-sm text-navy-900/55">
        <Link to="/">Home</Link> <span className="px-1">/</span> <Link to="/refrigerator">Refrigeration</Link>
        <span className="px-1">/</span> <span className="text-navy-900">{product.name}</span>
      </div>

      <main className="container-page pb-16 pt-2">
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
        {/* <ProductSpecsSection specs={product.specs} />
        <ProductReviewsSection product={product} />
        <ProductDescriptionSection product={product} /> */}
      </main>
    </div>
  );
};

export default ProductDetailPage;