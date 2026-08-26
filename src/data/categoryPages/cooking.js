import heroImage from "../../assets/categories/heading-categories/cooking.png";
import { products } from "../products";

export const cookingPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Cooking" }],
    title: "Cooking",
    subtitle: {
      before: "Built-in ",
      highlight: "ovens, hobs, and cooking appliances",
      after: " that bring precision and confidence to every meal.",
    },
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Beko", "Built In"],
    categories: [
      { label: "Ovens", children: ["Single Oven", "Double Oven", "Steam Oven"] },
      { label: "Built In", children: [] },
    ],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 3000],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: products.filter((product) => product.category === "cooking"),
  subcategorySlugs: ["cookers", "ovens", "hobs", "cooker-hoods"],
};
