// import { products as homeProducts } from "./products";
// import { categoryPages } from "./categoryPages";

// const allCategoryProducts = Object.values(categoryPages).flatMap((page) => page.products);

// export const productCatalog = [...homeProducts, ...allCategoryProducts].map((product) => ({
//   ...product,
//   slug:
//     product.slug ??
//     product.name
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-|-$/g, ""),
//   shortDescription:
//     product.shortDescription ??
//     "Engineered for precision cooling and minimalist aesthetics with durable materials and intuitive controls.",
//   longDescription:
//     product.longDescription ??
//     "A premium appliance built for modern homes, balancing performance, durability, and refined design.",
//   finish: product.finish ?? "Brushed Stainless",
//   stockLabel: product.stockLabel ?? "In Stock - Ships within 48 hours",
//   highlights:
//     product.highlights ?? [
//       "Dual precision system for efficient performance",
//       "Quiet operation for everyday comfort",
//       "Premium finish with easy-clean surfaces",
//     ],
//   features:
//     product.features ?? [
//       {
//         title: "Energy Efficient",
//         description: "Adaptive technology helps reduce power consumption without compromising performance.",
//       },
//       {
//         title: "Invisible Interface",
//         description: "A streamlined control layout keeps the look minimal and modern.",
//       },
//       {
//         title: "Filtered Purity",
//         description: "Multi-stage filtering keeps output clean, stable, and reliable.",
//       },
//     ],
//   specs:
//     product.specs ?? [
//       { label: "Capacity", value: "25.5 Cu. Ft. Total" },
//       { label: "Dimensions (HxWxD)", value: "70\" x 35.75\" x 31.5\"" },
//       { label: "Cooling System", value: "Dual Evaporator, Linear Compressor" },
//       { label: "Smart Features", value: "Wi-Fi Enabled, App Integration" },
//       { label: "Warranty", value: "5-Year Limited Warranty" },
//     ],
//   reviews:
//     product.reviewsData ?? [
//       {
//         author: "Ramesh",
//         time: "10:30 AM",
//         rating: 5,
//         text: "Excellent build and exceptional cooling. The controls feel intuitive and premium.",
//         image: product.image,
//       },
//       {
//         author: "Suresh",
//         time: "10:30 AM",
//         rating: 5,
//         text: "Beautiful finish and quiet operation. Very happy with the overall quality.",
//         image: product.image,
//       },
//       {
//         author: "Priya",
//         time: "9:15 AM",
//         rating: 4,
//         text: "Great value for the price. Setup was quick and the app integration works well.",
//       },
//       {
//         author: "Arjun",
//         time: "6:42 PM",
//         rating: 5,
//         text: "Sleek design that fits our kitchen perfectly. Would definitely recommend.",
//         image: product.image,
//       },
//       {
//         author: "Meera",
//         time: "2:05 PM",
//         rating: 4,
//         text: "Does exactly what it promises. A few minor quirks with the touch controls but overall solid.",
//         rating: 4,
//       },
//     ],
// }));

// export const findProductBySlug = (slug) => productCatalog.find((product) => product.slug === slug);
import { products as homeProducts } from "./products";
import { categoryPages } from "./categoryPages";

const allCategoryProducts = Object.values(categoryPages).flatMap((page) => page.products);

const defaultColours = [
  { name: "Stainless Steel", swatchClass: "bg-gradient-to-br from-slate-200 via-slate-400 to-slate-500" },
  { name: "White", swatchClass: "bg-white" },
];

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
    badge: "Currys Recommends",
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

const defaultBundles = [
  {
    id: "bundle-care-kit",
    addOn: {
      name: "WPRO Fridge Care Kit",
      image: "/assets/bundles/wpro-care-kit.png",
      rating: 4.5,
      reviewCount: 34,
      price: 21.99,
    },
    saving: 5.5,
  },
  {
    id: "bundle-induction-hob",
    addOn: {
      name: "BOSCH Series 2 PUG61RAA5B 59cm Plug-in Electric Induction Hob - Black",
      image: "/assets/bundles/bosch-induction-hob.png",
      rating: 4.5,
      reviewCount: 786,
      price: 299,
    },
    saving: 0,
  },
];

const defaultBreakdownSupport = {
  customerCount: "9 million",
  description:
    "If your tech breaks down, we'll fix it fast. If not we'll replace it on request. That's our 7 Day Fix Promise.",
  planPriceFrom: 4.5,
};

export const productCatalog = [...homeProducts, ...allCategoryProducts].map((product) => ({
  ...product,
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
  categoryLabel: product.categoryLabel ?? "Pro-series collection",
  badges: product.badges ?? ["NEW RELEASE"],
  discountBadge: product.discountBadge ?? "15% OFF",
  colours: product.colours ?? defaultColours,
  ratingAverage: product.ratingAverage ?? 4.5,
  reviewCount: product.reviewCount ?? 128,
  ratingBreakdown:
    product.ratingBreakdown ?? [
      { star: 5, count: 108 },
      { star: 4, count: 12 },
      { star: 3, count: 4 },
      { star: 2, count: 2 },
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
  essentialServices: product.essentialServices ?? defaultEssentialServices,
  accessories: product.accessories ?? defaultAccessories,
  bundles: product.bundles ?? defaultBundles,
  breakdownSupport: product.breakdownSupport ?? defaultBreakdownSupport,
  highlights:
    product.highlights ?? [
      "Dual precision system for efficient performance",
      "Quiet operation for everyday comfort",
      "Premium finish with easy-clean surfaces",
    ],
  features:
    product.features ?? [
      { title: "Energy Efficient", description: "Adaptive technology helps reduce power consumption without compromising performance." },
      { title: "Invisible Interface", description: "A streamlined control layout keeps the look minimal and modern." },
      { title: "Filtered Purity", description: "Multi-stage filtering keeps output clean, stable, and reliable." },
    ],
  specs:
    product.specs ?? [
      { label: "Capacity", value: "25.5 Cu. Ft. Total" },
      { label: "Dimensions (HxWxD)", value: "70\" x 35.75\" x 31.5\"" },
      { label: "Cooling System", value: "Dual Evaporator, Linear Compressor" },
      { label: "Smart Features", value: "Wi-Fi Enabled, App Integration" },
      { label: "Warranty", value: "5-Year Limited Warranty" },
    ],
  reviews:
    product.reviewsData ?? [
      { author: "Ramesh", time: "10:30 AM", rating: 5, text: "Excellent build and exceptional cooling. The controls feel intuitive and premium.", image: product.image },
      { author: "Suresh", time: "10:30 AM", rating: 5, text: "Beautiful finish and quiet operation. Very happy with the overall quality.", image: product.image },
      { author: "Priya", time: "9:15 AM", rating: 4, text: "Great value for the price. Setup was quick and the app integration works well." },
      { author: "Arjun", time: "6:42 PM", rating: 5, text: "Sleek design that fits our kitchen perfectly. Would definitely recommend.", image: product.image },
      { author: "Meera", time: "2:05 PM", rating: 4, text: "Does exactly what it promises. A few minor quirks with the touch controls but overall solid." },
    ],
    
}));

export const findProductBySlug = (slug) => productCatalog.find((product) => product.slug === slug);