import heroImage from "../../assets/categories/heading-categories/dishwasher.png";
import { products } from "../products";

export const dishwashersPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Dishwashers" }],
    title: "Dishwashers",
    subtitle: {
      before: "Quiet, efficient ",
      highlight: "dishwashers",
      after: " with flexible loading and clean, modern styling.",
    },
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Bosch", "Built In"],
    categories: [
      { label: "Dishwashers", children: ["Slimline", "Full Size", "Integrated"] },
      { label: "Built In", children: [] },
    ],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 1800],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: products.filter((product) => product.category === "dishwashers"),
  subcategorySlugs: ["full-size-dishwashers", "slimline-dishwashers"],
};
