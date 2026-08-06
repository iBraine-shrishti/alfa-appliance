import heroImage from "../../assets/categories/heading-categories/cooking.png";
import product1 from "../../assets/products/product3/product3.png";
import product2 from "../../assets/products/product4/product4.png";

export const cookingPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Cooking" }],
    title: "Cooking",
    subtitle: "Built-in ovens, hobs, and cooking appliances that bring precision and confidence to every meal.",
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Beko", "Built In"],
    categories: [{ label: "Ovens", children: ["Single Oven", "Double Oven", "Steam Oven"] }],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 3000],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: [
    { id: "cook-1", brand: "Miele", name: "Built-in Single Oven", image: product1, rating: 4.8, reviews: 143, price: 2149, oldPrice: null, discount: null, badge: "New" },
    { id: "cook-2", brand: "Bosch", name: "Ceramic Hob", image: product2, rating: 4.7, reviews: 88, price: 599, oldPrice: 669, discount: 10, badge: null },
  ],
};
