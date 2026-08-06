import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiStar, FiPlay, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { findProductBySlug } from "../data/productCatalog";
import { TbLeaf } from "react-icons/tb";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = findProductBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!product) return [];
    return product.gallery?.length ? product.gallery : [product.image, product.image, product.image];
  }, [product]);

  const activeImage = gallery[activeImageIndex] ?? product?.image;

  if (!product) {
    return <div className="container-page py-20">Product not found.</div>;
  }

const [visibleReviewCount, setVisibleReviewCount] = useState(3);
const [selectedReviewAuthor, setSelectedReviewAuthor] = useState(null);

const reviewsWithImages = product.reviews.filter((review) => review.image);
const visibleReviews = product.reviews.slice(0, visibleReviewCount);
const hasMoreReviews = visibleReviewCount < product.reviews.length;
const selectedReview = product.reviews.find((review) => review.author === selectedReviewAuthor) ?? null;
  return (
    <div className="bg-[#f5f5fb]">
      <div className="container-page py-4 text-sm text-navy-900/55">
        <Link to="/">Home</Link> <span className="px-1">/</span> <Link to="/refrigerator">Refrigeration</Link>
        <span className="px-1">/</span> <span className="text-navy-900">{product.name}</span>
      </div>

      <main className="container-page pb-16 pt-2">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 lg:grid-cols-[84px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative shrink-0 overflow-hidden rounded border bg-white p-1 transition ${
                    activeImageIndex === index ? "border-brand-blue ring-2 ring-brand-blue/15" : "border-navy-900/10"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-16 w-16 object-contain" />
                  {activeImageIndex === index ? (
                    <span className="absolute inset-0 rounded ring-2 ring-brand-blue/20" />
                  ) : null}
                </button>
              ))}
            </div>

            <div className="order-1 relative overflow-hidden rounded border border-navy-900/10 bg-white p-5 shadow-sm lg:order-2">
              {/* Badges stacked vertically, not side by side */}
              <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                <span className="rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold text-white">
                  15% OFF
                </span>
                <span className="rounded-full bg-navy-900/10 px-3 py-1 text-[11px] font-semibold text-navy-900">
                  NEW RELEASE
                </span>
              </div>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 shadow-sm"
              >
                <FiHeart />
              </button>

              <div className="flex min-h-[520px] items-center justify-center">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-[720px] w-full object-contain transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* Flat info panel — no card border/shadow/background, matches target design */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900/45">Pro-series collection</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">{product.name}</h1>

            <div className="mt-4 flex items-center gap-2 text-brand-blue">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <FiStar key={index} className="fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <span className="text-sm font-semibold">128 Reviews</span>
            </div>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-3xl font-semibold text-navy-950">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-lg text-navy-900/40 line-through">
                ${(product.oldPrice ?? 4116).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-navy-900/70">{product.shortDescription}</p>

            <div className="mt-6 border-t border-navy-900/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">Finish</p>
              <div className="mt-3 flex items-center gap-3">
                <button type="button" className="h-9 w-9 rounded-full border-2 border-brand-blue bg-[#d7e2ff]" aria-label="Brushed stainless" />
                <button type="button" className="h-9 w-9 rounded-full border border-navy-900/20 bg-gradient-to-br from-white via-slate-300 to-slate-900" aria-label="Matte black" />
              </div>
            </div>

            <div className="mt-6 border-t border-navy-900/10 pt-5 text-sm text-brand-blue">
              <span className="font-semibold">{product.stockLabel}</span>
            </div>

            <div className="mt-4 grid gap-3">
              <Link to="/cart" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue px-5 py-4 font-semibold text-white">
                <FiShoppingCart />
                Add to Cart
              </Link>
              <button type="button" className="rounded-2xl border border-navy-900/15 bg-white px-5 py-4 font-semibold text-navy-900">
                Buy Now
              </button>
            </div>
          </aside>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Precision Engineered Features</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* Row 1: wide image card + narrow icon card */}
            <div className="relative overflow-hidden rounded bg-navy-900/90 p-6 text-white lg:col-span-2">
              <img
                src={product.features[0]?.image ?? product.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="relative flex min-h-[220px] max-w-md flex-col justify-end">
                <h3 className="text-2xl font-semibold">{product.features[0]?.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {product.features[0]?.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded border border-navy-900/10 bg-white p-6 text-center shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <TbLeaf size={22} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-navy-950">
                {product.features[1]?.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-navy-900/70">
                {product.features[1]?.description}
              </p>
            </div>

            {/* Row 2: narrow text card + wide image card */}
            <div className="relative rounded border border-navy-900/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-950">
                {product.features[2]?.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-navy-900/70">
                {product.features[2]?.description}
              </p>
              <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-900/50">
                <FiPlay size={14} />
              </span>
            </div>

            <div className="relative overflow-hidden rounded bg-navy-900/90 p-6 text-white lg:col-span-2">
              <img
                src={product.features[3]?.image ?? product.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="relative flex min-h-[220px] max-w-md flex-col justify-end">
                <h3 className="text-2xl font-semibold">{product.features[3]?.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {product.features[3]?.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Technical Specifications</h2>
          <div className="mt-4 overflow-hidden rounded border border-navy-900/10 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} className="border-t border-navy-900/8 first:border-t-0">
                    <th className="w-1/3 px-5 py-4 font-medium text-navy-900/70">{spec.label}</th>
                    <td className="px-5 py-4 text-navy-950">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Ratings & Reviews</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-[320px_1fr]">
           <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-brand-blue/10 bg-brand-blue/5 p-5">
                <div className="text-4xl font-semibold text-navy-950">{product.ratingAverage ?? "4.5"}</div>
                <div className="mt-2 flex text-brand-blue">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FiStar key={index} className="fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-navy-900/55">
                  Total {product.reviewCount ?? product.reviews.length} reviews
                </p>

                <div className="mt-5 flex flex-col gap-2">
                  {(product.ratingBreakdown ?? [
                    { star: 5, count: 108 },
                    { star: 4, count: 12 },
                    { star: 3, count: 4 },
                    { star: 2, count: 2 },
                    { star: 1, count: 2 },
                  ]).map(({ star, count }) => {
                    const max = product.reviewCount ?? 128;
                    const pct = Math.round((count / max) * 100);
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs text-navy-900/60">
                        <span className="w-10 shrink-0">{star} star</span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-900/10">
                          <span className="block h-full rounded-full bg-brand-blue" style={{ width: `${pct}%` }} />
                        </span>
                        <span className="w-6 shrink-0 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-brand-blue/10 bg-brand-blue/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">By Feature</p>
                <div className="mt-3 flex flex-col gap-3">
                  {(product.featureRatings ?? [
                    { label: "Value for money", score: 4.5 },
                    { label: "For Beginners", score: 5.0 },
                    { label: "Durability", score: 4.0 },
                  ]).map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-navy-900/70">{item.label}</span>
                      <span className="flex items-center gap-1 text-brand-blue">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FiStar key={index} size={13} className={index < Math.round(item.score) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                        ))}
                        <span className="ml-1 text-xs font-semibold text-navy-900/60">{item.score.toFixed(1)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full rounded-2xl border border-brand-blue/30 px-4 py-3 font-semibold text-brand-blue">
                WRITE A PRODUCT REVIEW
              </button>
            </div>

            <div>
              {reviewsWithImages.length > 0 && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">
                    Review with images
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {reviewsWithImages.map((review) => (
                      <button
                        key={review.author}
                        type="button"
                        onClick={() =>
                          setSelectedReviewAuthor((current) => (current === review.author ? null : review.author))
                        }
                        className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border bg-white transition ${
                          selectedReviewAuthor === review.author
                            ? "border-brand-blue ring-2 ring-brand-blue/20"
                            : "border-navy-900/10 hover:border-brand-blue"
                        }`}
                      >
                        <img src={review.image} alt={`Review photo by ${review.author}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>

                  {selectedReview && (
                    <div className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-brand-blue/5 p-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                        {selectedReview.author[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-navy-950">{selectedReview.author}</p>
                        <p className="text-xs text-navy-900/45">{selectedReview.time}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 text-brand-blue">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FiStar key={index} size={13} className={index < (selectedReview.rating ?? 5) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">
                Top Reviews
              </p>
              <div className="mt-3 divide-y divide-navy-900/8">
                {visibleReviews.map((review) => (
                  <div
                    key={review.author}
                    className={`py-4 first:pt-0 transition-colors ${
                      selectedReviewAuthor === review.author ? "rounded-2xl bg-brand-blue/5 px-3" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 font-semibold text-brand-blue">
                        {review.author[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-950">{review.author}</p>
                        <p className="text-xs text-navy-900/45">{review.time}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-brand-blue">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FiStar key={index} size={13} className={index < (review.rating ?? 5) ? "fill-brand-blue text-brand-blue" : "text-navy-900/15"} />
                      ))}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-navy-900/70">{review.text}</p>
                    {review.image && (
                      <img src={review.image} alt={`Photo from ${review.author}`} className="mt-3 h-16 w-16 rounded-xl border border-navy-900/10 object-cover" />
                    )}
                  </div>
                ))}
              </div>

              {hasMoreReviews ? (
              <button
                type="button"
                onClick={() => setVisibleReviewCount((count) => count + 3)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-navy-900/15 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                View More Reviews
                <FiChevronDown size={16} />
              </button>
            ) : (
              product.reviews.length > 3 && (
                <button
                  type="button"
                  onClick={() => setVisibleReviewCount(3)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-navy-900/15 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  View Less
                  <FiChevronUp size={16} />
                </button>
              )
            )}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Product Description</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-navy-900/10 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {[
                  ["Category", "Refrigerators"],
                  ["Brand", "ALFA APPLIANCES"],
                  ["Color", product.finish],
                  ["Material", "Premium Grade Stainless Steel"],
                  ["Weight", "142 kg"],
                  ["Dimensions", '70" x 35.75" x 31.5"'],
                  ["Department", "Home Appliances"],
                  ["Manufacturer", "ALFA Global Manufacturing Ltd."],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-navy-900/8 first:border-t-0">
                    <th className="w-1/3 px-5 py-4 font-medium text-navy-900/70">{label}</th>
                    <td className="px-5 py-4 text-navy-950">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;
