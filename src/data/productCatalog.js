import { products as homeProducts } from "./products";
import { categoryPages } from "./categoryPages";

const allCategoryProducts = Object.values(categoryPages).flatMap((page) => page.products);

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
  highlights:
    product.highlights ?? [
      "Dual precision system for efficient performance",
      "Quiet operation for everyday comfort",
      "Premium finish with easy-clean surfaces",
    ],
  features:
    product.features ?? [
      {
        title: "Energy Efficient",
        description: "Adaptive technology helps reduce power consumption without compromising performance.",
      },
      {
        title: "Invisible Interface",
        description: "A streamlined control layout keeps the look minimal and modern.",
      },
      {
        title: "Filtered Purity",
        description: "Multi-stage filtering keeps output clean, stable, and reliable.",
      },
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
      {
        author: "Ramesh",
        time: "10:30 AM",
        rating: 5,
        text: "Excellent build and exceptional cooling. The controls feel intuitive and premium.",
        image: product.image,
      },
      {
        author: "Suresh",
        time: "10:30 AM",
        rating: 5,
        text: "Beautiful finish and quiet operation. Very happy with the overall quality.",
        image: product.image,
      },
      {
        author: "Priya",
        time: "9:15 AM",
        rating: 4,
        text: "Great value for the price. Setup was quick and the app integration works well.",
      },
      {
        author: "Arjun",
        time: "6:42 PM",
        rating: 5,
        text: "Sleek design that fits our kitchen perfectly. Would definitely recommend.",
        image: product.image,
      },
      {
        author: "Meera",
        time: "2:05 PM",
        rating: 4,
        text: "Does exactly what it promises. A few minor quirks with the touch controls but overall solid.",
        rating: 4,
      },
    ],
}));

export const findProductBySlug = (slug) => productCatalog.find((product) => product.slug === slug);
