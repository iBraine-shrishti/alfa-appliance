import heroImage from "../../assets/categories/heading-categories/small-appliances.png";
import product1 from "../../assets/products/product1/product1.png";
import product2 from "../../assets/products//product2/product2.png";

export const smallAppliancesPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Small Appliances" }],
    title: "Small Appliances",
    subtitle: "Compact, useful appliances that make daily routines faster and a little more enjoyable.",
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Coffee", "Kitchen"],
    categories: [{ label: "Small Appliances", children: ["Coffee Machines", "Toasters", "Blenders"] }],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 1500],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: [
    { id: "small-1", brand: "Smeg", name: "Retro Drip Coffee Machine", image: product1, rating: 4.8, reviews: 52, price: 279, oldPrice: null, discount: null, badge: "New" },
    { id: "small-2", brand: "Dualit", name: "Classic Toaster", image: product2, rating: 4.6, reviews: 40, price: 159, oldPrice: null, discount: null, badge: null },
  ],
};
