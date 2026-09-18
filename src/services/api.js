// Alfa Appliances Frontend API Service
export const BACKEND_DOMAIN = "https://alfa-appliances-backend.onrender.com";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${BACKEND_DOMAIN}/api`;

// In-memory cache for fast navigation
let cachedProducts = null;
let cacheTimestamp = 0;
const CACHE_TTL = 30000; // 30 seconds

/**
 * Detects if a media URL points to a video
 */
export const isVideoUrl = (url) => {
  if (!url || typeof url !== "string") return false;
  return (
    /\.(mp4|webm|ogg|mov)($|\?)/i.test(url) ||
    /\/video\/upload\//i.test(url) ||
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com")
  );
};

/**
 * Returns an image thumbnail URL for any media URL (converts Cloudinary videos to jpg automatically)
 */
export const getMediaThumbnail = (url) => {
  if (!url || typeof url !== "string") return "";
  if (isVideoUrl(url)) {
    if (/\/video\/upload\//i.test(url)) {
      return url.replace(/\.(mp4|webm|ogg|mov)($|\?)/i, ".jpg$2");
    }
  }
  return url;
};

/**
 * Normalizes backend product object to conform to frontend schema
 */
export const formatBackendProduct = (p) => {
  if (!p) return null;
  const rawPrimaryImage = p.image_display_url || p.image_url || p.image || "";

  // 1. Gallery
  let gallery = [];
  if (Array.isArray(p.gallery) && p.gallery.length > 0) {
    gallery = p.gallery.filter((item) => typeof item === "string" && item.trim().length > 0);
  } else if (Array.isArray(p.images) && p.images.length > 0) {
    gallery = p.images
      .map((img) => (typeof img === "string" ? img : img?.url || img?.image_url || ""))
      .filter((item) => typeof item === "string" && item.trim().length > 0);
  }

  if (rawPrimaryImage && !gallery.includes(rawPrimaryImage)) {
    gallery.unshift(rawPrimaryImage);
  }
  if (gallery.length === 0 && rawPrimaryImage) {
    gallery = [rawPrimaryImage];
  }
  // Deduplicate while preserving order
  gallery = Array.from(new Set(gallery));

  let primaryImage = rawPrimaryImage;
  if (isVideoUrl(primaryImage)) {
    const firstNonVideo = gallery.find((u) => !isVideoUrl(u));
    primaryImage = firstNonVideo || getMediaThumbnail(primaryImage);
  }

  // 2. Brand & Category & Subcategory
  const brandName = p.brand_name || (typeof p.brand === "object" ? p.brand?.name : null) || p.brand || "Alfa";
  const collectionsList = Array.isArray(p.collections) ? p.collections : [];
  const primaryCollection = collectionsList[0];
  const subcategorySlug =
    p.subcategory ||
    primaryCollection?.slug ||
    (typeof p.category === "object" ? p.category?.slug : null) ||
    (p.category_name ? p.category_name.toLowerCase().replace(/\s+/g, "-") : "") ||
    "";

  // 3. Prices and discounts
  const numPrice = typeof p.price === "string" ? parseFloat(p.price) : (p.price || 0);
  const numOldPrice =
    p.old_price != null ? (typeof p.old_price === "string" ? parseFloat(p.old_price) : p.old_price) : null;
  const discountPercent =
    numOldPrice && numOldPrice > numPrice
      ? Math.round(((numOldPrice - numPrice) / numOldPrice) * 100)
      : null;

  // 4. Specs
  const specs =
    Array.isArray(p.specs) && p.specs.length > 0
      ? p.specs
      : [
          p.sku || p.model_number ? { label: "Product Code (SKU)", value: p.sku || p.model_number } : null,
          p.appliance_type ? { label: "Type", value: p.appliance_type } : null,
          p.color ? { label: "Colour / Finish", value: p.color } : null,
          p.warranty
            ? { label: "Manufacturer's guarantee", value: p.warranty }
            : { label: "Manufacturer's guarantee", value: "2 Years" },
          p.energy_rating ? { label: "Energy efficiency rating", value: p.energy_rating } : null,
          p.weight ? { label: "Weight", value: p.weight } : null,
          p.dimensions ? { label: "Dimensions (H x W x D)", value: p.dimensions } : null,
          p.capacity ? { label: "Capacity / Volume", value: p.capacity } : null,
          p.noise_level ? { label: "Noise level & class", value: p.noise_level } : null,
          p.power_consumption ? { label: "Power & Energy consumption", value: p.power_consumption } : null,
        ].filter(Boolean);

  // 5. Reviews
  const reviewsList =
    Array.isArray(p.reviews) && p.reviews.length > 0
      ? p.reviews.map((r) => ({
          author: r.name || "Verified Customer",
          time: r.created_at ? new Date(r.created_at).toLocaleDateString("en-GB") : "Recently",
          rating: r.rating || 5,
          text: r.comment || "Excellent appliance, highly recommended.",
        }))
      : [
          {
            author: "James M.",
            time: "10:30 AM",
            rating: 5,
            text: "Excellent build and quiet operation. Arrived well packaged and easy to set up.",
          },
          {
            author: "Sarah K.",
            time: "2:15 PM",
            rating: 5,
            text: "Modern finish and performs brilliantly. Very happy with this purchase.",
          },
          {
            author: "David T.",
            time: "4:45 PM",
            rating: 4,
            text: "Solid appliance for our kitchen. Efficient and easy to clean.",
          },
        ];

  const ratingAvg = p.rating || 4.7;
  const reviewsCount = p.reviews?.length || 48;

  return {
    ...p,
    id: String(p.id),
    slug: p.slug,
    name: p.title || p.name,
    title: p.title || p.name,
    brand: brandName,
    brand_name: brandName,
    category:
      p.category_name?.toLowerCase() ||
      (typeof p.category === "string" ? p.category.toLowerCase() : "appliances"),
    subcategory: subcategorySlug,
    image: primaryImage,
    gallery,
    rating: ratingAvg,
    ratingAverage: ratingAvg,
    reviews: reviewsList,
    reviewsData: reviewsList,
    reviewCount: reviewsCount,
    ratingBreakdown: [
      { star: 5, count: Math.round(reviewsCount * 0.6) },
      { star: 4, count: Math.round(reviewsCount * 0.25) },
      { star: 3, count: Math.round(reviewsCount * 0.08) },
      { star: 2, count: Math.round(reviewsCount * 0.04) },
      { star: 1, count: Math.round(reviewsCount * 0.03) },
    ],
    featureRatings: [
      { label: "Value for money", score: 4.8 },
      { label: "Ease of use", score: 4.9 },
      { label: "Build quality", score: 4.7 },
    ],
    price: numPrice,
    oldPrice: numOldPrice,
    discount: discountPercent,
    badge: p.is_sale ? "Offer" : discountPercent ? "Offer" : null,
    badges: p.is_sale ? ["Offer"] : ["Best Seller"],
    description: p.description || "High performance home appliance with precision engineering.",
    shortDescription: p.description || "High performance home appliance.",
    longDescription:
      p.long_description ||
      p.description ||
      "Engineered for optimal efficiency and long-lasting durability in modern households.",
    dimensions: p.dimensions || null,
    coreLine: p.stock_quantity > 0,
    isNewRelease: p.created_at
      ? Date.now() - new Date(p.created_at).getTime() <= 30 * 24 * 60 * 60 * 1000
      : false,
    specs,
    highlights: [
      "Precision engineered for maximum efficiency and daily reliability",
      "Quiet operation designed for modern open-plan living",
      "Durable premium exterior with easy-clean surfaces",
    ],
    features: [
      {
        title: "Precision Performance",
        description: p.description || "Delivers consistent, energy-saving performance for everyday household demands.",
      },
      {
        title: "Modern Build Quality",
        description: "Engineered with durable components and refined aesthetic.",
      },
      {
        title: "Energy Efficient",
        description: `Rated ${p.energy_rating || "5 Star"} to minimize energy consumption and utility bills.`,
      },
    ],
    deliveryReturns: {
      standardDelivery: {
        label: "Get it in 4 working days",
        options: [
          { label: "Anytime delivery from 7am - 8pm", fromPrice: 20 },
          { label: "Choose a 4-hour time slot delivery", fromPrice: 35 },
        ],
      },
      nextDayDelivery: {
        label: "Only valid on weekdays & Sunday",
        options: [
          { label: "Anytime delivery from 7am - 8pm", fromPrice: 30 },
          { label: "Choose a 4-hour time slot delivery", fromPrice: 45 },
        ],
      },
      tracking: "Delivery updates sent via SMS & email tracking link.",
      restrictions: [
        "Weekend and next-day delivery is available in most areas, but not all.",
        "And, of course, delivery is always dependent upon stock availability.",
        "You can use the availability checker to quickly find out about stock availability and delivery information.",
      ],
      largeItems: "If you're getting a large item delivered to a room or flat, our team will safely deliver it when they arrive.",
      collectService: ["Safe and free store pickup in as little as 1 hour."],
      returns: ["30-day money-back return policy for complete peace of mind."],
    },
    accessories: [
      {
        badge: "Alfa Recommends",
        name: "Universal Appliance Care & Descaling Kit",
        rating: 5,
        reviewCount: 18,
        price: 9.99,
        oldPrice: 14.99,
        note: "Save 30% when purchased with large appliances",
      },
    ],
    colours: p.color
      ? [{ name: p.color, swatchClass: "bg-slate-400" }]
      : [],
    bundles: [],
    flexpay: {
      monthlyAmount: Number((numPrice / 36).toFixed(2)),
      months: 36,
      buyNowMonths: 9,
      apr: 29.9,
      creditLimit: 1200,
    },
    delivery: {
      fromPrice: 30,
      cutoffLabel: "order by 7pm",
      standardPrice: 20,
      perks: ["Choose your delivery day (Monday-Sunday)", "Morning, afternoon and evening slots"],
      collectionAvailable: true,
    },
    essentialServices: [
      { label: "Add installation with door reversal", price: 40 },
      { label: "Add installation", price: 15 },
      { label: "Recycle my old appliance", price: 25 },
    ],
    carePlans: [
      { id: "monthly", label: "Monthly plan", price: 6, priceLabel: "£6.00 a month", note: "Annual equivalent £72.00" },
      { id: "3yr", label: "3 Years plan", price: 170, priceLabel: "£170.00" },
      { id: "5yr", label: "5 Years plan", price: 190, priceLabel: "£190.00" },
    ],
    deliveryInfo: {
      deliveryAvailable: true,
      collectionAvailable: true,
      collectionNote: "FREE in-store collection in as little as 1 hour",
    },
  };
};

/**
 * Fetch all products from Django backend with caching
 */
export const fetchProducts = async (params = {}, forceFresh = false) => {
  try {
    const hasParams = Object.keys(params).length > 0;
    const now = Date.now();

    if (!hasParams && !forceFresh && cachedProducts && now - cacheTimestamp < CACHE_TTL) {
      return cachedProducts;
    }

    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/products/${query ? `?${query}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);

    const data = await res.json();
    const formatted = Array.isArray(data) ? data.map(formatBackendProduct) : [];

    if (!hasParams) {
      cachedProducts = formatted;
      cacheTimestamp = now;
    }

    return formatted;
  } catch (err) {
    console.warn("Backend products fetch failed, using fallback:", err.message);
    return cachedProducts || [];
  }
};

/**
 * Fetch a single product by its slug or ID from backend
 */
export const fetchProductBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const res = await fetch(`${API_BASE_URL}/products/${encodeURIComponent(slug)}/`);
    if (res.ok) {
      const data = await res.json();
      return formatBackendProduct(data);
    }
    // If slug lookup failed, check in cached or fresh products list
    const all = await fetchProducts();
    const matched = all.find(
      (p) =>
        p.slug === slug ||
        p.slug?.toLowerCase() === slug?.toLowerCase() ||
        String(p.id) === String(slug)
    );
    return matched || null;
  } catch (err) {
    console.warn(`Product detail fetch failed for ${slug}:`, err.message);
    return null;
  }
};
