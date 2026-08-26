import { products as homeProducts } from "./products";
import feature1 from "../assets/products/product-feature/feature1.png";
import feature2 from "../assets/products/product-feature/feature2.png";
import { getProductGallery } from "./productGalleries";

const createDefaultReviews = (image) => {
  const gallery = getProductGallery(image);
  const reviewTemplates = [
    { author: "Ramesh", time: "10:30 AM", rating: 5, text: "Excellent build and exceptional cooling. The controls feel intuitive and premium." },
    { author: "Suresh", time: "10:30 AM", rating: 5, text: "Beautiful finish and quiet operation. Very happy with the overall quality." },
    { author: "Priya", time: "9:15 AM", rating: 4, text: "Great value for the price. Setup was quick and the app integration works well." },
    { author: "Arjun", time: "6:42 PM", rating: 5, text: "Sleek design that fits our kitchen perfectly. Would definitely recommend." },
    { author: "Meera", time: "2:05 PM", rating: 4, text: "Does exactly what it promises. A few minor quirks with the touch controls but overall solid." },
  ];
  const reviewTexts = [
    "The finish looks premium and has stayed easy to clean after regular use.",
    "Delivery was straightforward, and the appliance was simple to set up.",
    "It runs quietly enough for our open-plan kitchen and performs consistently.",
    "The storage layout is practical, with plenty of room for our weekly shop.",
    "The controls are clear, responsive, and easy for everyone in the household.",
    "Good everyday performance and a design that fits neatly into our kitchen.",
    "The temperature stays stable, and food has been keeping fresh for longer.",
    "A dependable appliance with useful features and a solid overall build.",
    "The doors and drawers feel sturdy, and the interior is easy to organise.",
    "A worthwhile upgrade with good capacity and reliable day-to-day performance.",
  ];
  const reviewTimes = ["8:20 AM", "11:45 AM", "1:10 PM", "3:35 PM", "5:50 PM", "7:25 PM"];

  return Array.from({ length: 50 }, (_, index) => {
    const template = reviewTemplates[index % reviewTemplates.length];
    const isNamedReview = index < reviewTemplates.length;
    return {
      author: isNamedReview ? template.author : `Customer ${String(index + 1).padStart(2, "0")}`,
      time: isNamedReview ? template.time : reviewTimes[index % reviewTimes.length],
      rating: isNamedReview ? template.rating : [5, 4, 5, 4, 3][index % 5],
      text: isNamedReview ? template.text : reviewTexts[index % reviewTexts.length],
      image: index % 3 === 2 ? undefined : gallery[index % gallery.length],
    };
  });
};

const defaultColours = [];

const defaultFlexpay = {
  monthlyAmount: 28.32,
  months: 36,
  buyNowMonths: 9,
  settleByLabel: "16 May 2027",
  apr: 29.9,
  creditLimit: 1200,
};

const defaultDelivery = {
  fromPrice: 30,
  cutoffLabel: "order by 7pm",
  standardPrice: 20,
  perks: ["Choose your delivery day (Monday-Sunday)", "Morning, afternoon and evening slots"],
  collectionAvailable: false,
};

const defaultEssentialServices = [
  { label: "Add installation with door reversal", price: 40 },
  { label: "Add installation", price: 15 },
  { label: "Recycle my old appliance", price: 25 },
];

const defaultAccessories = [
  {
    badge: "Alfa Recommends",
    name: "WPRO Fridge Odour Absorber - Blue",
    rating: 5,
    reviewCount: 2,
    price: 5.99,
    oldPrice: 7.99,
    note: "Shop large appliances and save 25% on selected WPRO accessories",
  },
  {
    name: "WPRO Fridge Care Kit",
    rating: 4,
    reviewCount: 34,
    price: 16.49,
    oldPrice: 21.99,
    note: "Shop large appliances and save 25% on selected WPRO accessories",
  },
];

const createMatchingBundle = (product) => {
  const matchingSubcategories = {
    "washing-machines": "tumble-dryers",
    "washer-dryers": "tumble-dryers",
    "tumble-dryers": "washing-machines",
  };
  const matchingSubcategory = matchingSubcategories[product.subcategory];
  const sameBrand = homeProducts.filter(
    (candidate) => candidate.id !== product.id && candidate.brand === product.brand
  );
  const preferred = sameBrand.filter(
    (candidate) => matchingSubcategory && candidate.subcategory === matchingSubcategory
  );
  const sameType = sameBrand.filter(
    (candidate) => candidate.category === product.category && candidate.subcategory === product.subcategory
  );
  const recommendations = [...preferred, ...sameType, ...sameBrand].filter(
    (candidate, index, list) => list.findIndex((item) => item.id === candidate.id) === index
  ).slice(0, 3);

  return recommendations.map((matchingProduct, index) => ({
    id: `${product.id}-matching-set-${index + 1}`,
    addOn: {
      product: matchingProduct,
      slug: matchingProduct.slug,
      name: matchingProduct.name,
      image: matchingProduct.image,
      rating: matchingProduct.rating ?? 4.5,
      reviewCount: matchingProduct.reviews ?? 0,
      price: matchingProduct.price,
    },
    saving: Number((matchingProduct.price * 0.05).toFixed(2)),
  }));
};
const defaultCarePlans = [
  { id: "monthly", label: "Monthly plan", price: 6, priceLabel: "£6.00 a month", note: "Annual equivalent £72.00" },
  { id: "3yr", label: "3 Years plan", price: 170, priceLabel: "£170.00" },
  { id: "5yr", label: "5 Years plan", price: 190, priceLabel: "£190.00" },
];

const defaultDeliveryInfo = {
  deliveryAvailable: false,
  collectionAvailable: true,
  collectionNote: "FREE in-store collection in as little as 1 hour",
};
const defaultDeliveryReturns = {
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
  tracking:
    "Make sure to add your mobile number when you place your order, so we can text you with delivery updates. Our Track It service also allows you to see where your order is at.",
  restrictions: [
    "Weekend and next-day delivery is available in most areas, but not all.",
    "And, of course, delivery is always dependent upon stock availability.",
    "You can use the availability checker to quickly find out about stock availability and delivery information.",
  ],
  largeItems:
    "If you're getting a large item delivered to a room or flat above the first floor of your home or block, our team will only be able to decide if they can safely deliver it when they arrive. You can let us know at the checkout for any limitations (e.g. no lift, nearest parking) you may have.",
  collectService: [
    "You can order your item(s) online, and safely collect them from your chosen store within an hour of placing your order.",
    "Pop in store to collect your items within an hour of ordering them, free of charge (depending on stock availability). You can also choose your collection day. You're welcome!",
    "Once you've selected \"collect in store\" at the online checkout, we'll email you your confirmation & collection details. When you do come to collect your item(s) make sure you bring this confirmation email, and the last four digits of your payment/gift card or voucher.",
  ],
  returns: [
    "If you purchased online and you have changed your mind you can return your items within 30 days even if you have opened it for inspection. It must be returned as new and where possible, in its original packaging.",
    "If your item develops a fault we will offer either a repair, exchange or refund if the fault occurs within 30 days of purchase (or delivery or installation). If the fault with your product occurs within its guarantee period (normally 12 months from delivery) we will offer you a prompt repair service. In all cases we reserve the right to inspect the product and verify the fault.",
  ],
  // returnsInfoLink: "More info on returns and refunds.",
};
const defaultBreakdownSupport = {
  customerCount: "9 million",
  description:
    "If your tech breaks down, we'll fix it fast. If not we'll replace it on request. That's our 7 Day Fix Promise.",
  planPriceFrom: 4.5,
};

export const productCatalog = homeProducts.map((product) => ({
  ...product,
  gallery: product.gallery?.length ? product.gallery : getProductGallery(product.image),
  slug:
    product.slug ??
    product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
  shortDescription:
    product.shortDescription ??
    "Engineered for precision cooling and minimalist aesthetics with durable materials and intuitive controls.",
  longDescription:
    product.longDescription ??
    "A premium appliance built for modern homes, balancing performance, durability, and refined design.",
  finish: product.finish ?? "Brushed Stainless",
  stockLabel: product.stockLabel ?? "In Stock - Ships within 48 hours",
  categoryLabel: product.categoryLabel ?? "",
  badges: product.badges ?? [],
  discountBadge: product.discountBadge ?? "15% OFF",
  colours: product.colours ?? defaultColours,
  dimensions: product.dimensions ?? null,
  coreLine: product.coreLine ?? false,
  isNewRelease: product.uploadedAt
    ? Date.now() - new Date(product.uploadedAt).getTime() <= 30 * 24 * 60 * 60 * 1000
    : false,
  ratingAverage: product.ratingAverage ?? 4.5,
  reviewCount: product.reviewCount ?? 50,
  ratingBreakdown:
    product.ratingBreakdown ?? [
      { star: 5, count: 30 },
      { star: 4, count: 10 },
      { star: 3, count: 5 },
      { star: 2, count: 3 },
      { star: 1, count: 2 },
    ],
  featureRatings:
    product.featureRatings ?? [
      { label: "Value for money", score: 4.5 },
      { label: "For Beginners", score: 5.0 },
      { label: "Durability", score: 4.0 },
    ],
  flexpay: product.flexpay ?? defaultFlexpay,
  delivery: product.delivery ?? defaultDelivery,
  deliveryReturns: product.deliveryReturns ?? defaultDeliveryReturns,
  essentialServices: product.essentialServices ?? defaultEssentialServices,
  accessories: product.accessories ?? defaultAccessories,
  bundles: product.bundles ?? createMatchingBundle(product),
  breakdownSupport: product.breakdownSupport ?? defaultBreakdownSupport,
  oldPrice: product.oldPrice ?? null,
  savingAmount: product.savingAmount ?? null,
  wasPriceNote: product.wasPriceNote ?? null,
  carePlans: product.carePlans ?? defaultCarePlans,
  deliveryInfo: product.deliveryInfo ?? defaultDeliveryInfo,
  highlights:
    product.highlights ?? [
      "Dual precision system for efficient performance",
      "Quiet operation for everyday comfort",
      "Premium finish with easy-clean surfaces",
    ],
  features:
    product.features ?? [
      {
        title: "Dual Precision Cooling",
        description:
          "Independent systems for fridge and freezer maintain optimal humidity levels, ensuring produce stays fresher longer while preventing freezer burn.",
        image: feature1,
      },
      {
        title: "Invisible Interface",
        description:
          "Touch controls seamlessly integrated into the steel facade. They only illuminate when needed, preserving the minimalist exterior.",
      },
      {
        title: "Energy Efficient",
        description:
          "A+ Energy rating with adaptive cooling algorithms that learn your usage patterns to minimize power consumption.",
      },
      {
        title: "Filtered Purity",
        description:
          "Advanced multi-stage filtration system delivers crisp, clean water and ice instantly, seamlessly integrated into the door profile.",
        image: feature2,
      },
    ],
 specs: product.specs ?? [
    { label: "Product Code (SKU)", value: product.sku ?? "ALFA-RF-9051X" },
    { label: "Type", value: "Freestanding" },
    { label: "Colour / Finish", value: "Black Stainless Steel" },
    { label: "Manufacturer’s guarantee", value: "5 Years" },
    { label: "Energy efficiency rating", value: "Class C" },
    { label: "Weight", value: "82 kg (Unboxed) / 91 kg (Boxed)" },
    { label: "Fridge / Freezer split", value: "70/30" },
    { label: "Dimensions (H x W x D)", value: "178 cm x 91.2 cm x 71.6 cm" },
    { label: "Capacity / Volume", value: "530 Litres (360L Fridge / 170L Freezer)" },
    { label: "Noise level & class", value: "37 dB(A), Class B" },
    { label: "Power & Energy consumption", value: "215 kWh/annum" },
    { label: "Safety features", value: "Child lock, Door open alarm, Overflow protection" },
    { label: "Smart / Connectivity", value: "Wi-Fi Enabled (App Control)" },
  ],
  reviews:
    product.reviewsData ?? createDefaultReviews(product.image),
    
}));

export const findProductBySlug = (slug) => productCatalog.find((product) => product.slug === slug);
