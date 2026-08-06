import heroImage from "../../assets/categories/heading-categories/fridge.png";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product4.png";

export const refrigeratorPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Refrigerators" }],
    title: "Refrigerators",
    subtitle: "Space-saving cooling solutions that preserve freshness and fit beautifully into modern kitchens.",
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
  products: [
    { id: "ref-1", brand: "Samsung", name: "470L Frost Free Refrigerator", image: product1, rating: 4.8, reviews: 214, price: 2499, oldPrice: null, discount: null, badge: "New" },
    { id: "ref-2", brand: "LG", name: "Multi Door Fridge Freezer", image: product2, rating: 4.7, reviews: 97, price: 1749, oldPrice: 1899, discount: 8, badge: null },
  ],
};
