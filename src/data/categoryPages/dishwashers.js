import heroImage from "../../assets/categories/heading-categories/dishwasher.png";
import product1 from "../../assets/products/product4.png";
import product2 from "../../assets/products/product3.png";

export const dishwashersPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Dishwashers" }],
    title: "Dishwashers",
    subtitle: "Quiet, efficient dishwashers with flexible loading and clean, modern styling.",
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Bosch", "Built In"],
    categories: [{ label: "Dishwashers", children: ["Slimline", "Full Size", "Integrated"] }],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 1800],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: [
    { id: "dish-1", brand: "Bosch", name: "Serie 4 Built-In Dishwasher", image: product1, rating: 4.7, reviews: 102, price: 899, oldPrice: null, discount: null, badge: "New" },
    { id: "dish-2", brand: "AEG", name: "Compact Slimline Dishwasher", image: product2, rating: 4.6, reviews: 75, price: 649, oldPrice: 749, discount: 13, badge: null },
  ],
};
