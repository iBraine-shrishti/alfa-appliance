import heroImage from "../../assets/categories/heading-categories/small-appliances.png";
import { products } from "../products";

export const smallAppliancesPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Small Appliances" }],
    title: "Small Appliances",
    subtitle: {
      before: "Compact, useful ",
      highlight: "appliances",
      after: " that make daily routines faster and a little more enjoyable.",
    },
    image: heroImage,
  },
  filters: {
    featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
    active: ["Smeg", "Coffee Machines"],
    categories: [{ label: "Small Appliances", children: ["Kettles", "Toasters", "Microwaves","Air Fryers","Hoovers"] }],
    brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
    priceRange: [0, 1500],
  },
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 1,
  products: products.filter((product) => product.category === "small-appliances"),
  subcategorySlugs: ["kettles", "toasters", "microwaves", "air-fryers", "hoovers"],
};
