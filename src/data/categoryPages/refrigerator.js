import heroImage from "../../assets/categories/heading-categories/fridge.png";
import { products } from "../products";

export const refrigeratorPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Refrigerations" }],
    title: "Refrigerators",
    subtitle: {
      before: "Space-saving ",
      highlight: "cooling solutions",
      after: " that preserve freshness and fit beautifully into modern kitchens.",
    },
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Samsung", "Fridge Freezer"],
    categories: [{ label: "Fridge Freezers", children: ["Single Door", "Double Door", "Side by Side"] }],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 2500],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: products.filter((product) => product.category === "refrigerator"),
  subcategorySlugs: ["fridge-freezers", "fridges", "freezers", "chest-freezers"],
};
