import heroImage from "../../assets/categories/heading-categories/laundry.png";
import { products } from "../products";

const baseFilters = {
  featured: ["Featured", "Price Low to High", "Price High to Low", "Discount High to Low"],
  active: ["Samsung", "Front Load"],
  categories: [
    { label: "Washing Machines", children: ["Front Load", "Top Load", "Washer Dryer Combo"] },
    { label: "Dryers", children: ["Heat Pump", "Vented"] },
    { label: "Others", children: ["Dishwashers", "Microwaves"] },
  ],
  brands: ["Beko", "Hisense", "Teknix", "LG", "Samsung", "Miele", "Smeg"],
  priceRange: [0, 2000],
};

const laundryProducts = products.filter((product) => product.category === "laundry");

export const laundryPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Laundry" }],
    title: "Laundry",
    subtitle: {
      before: "Discover high-performance ",
      highlight: "washing machines, dryers, and washer dryers",
      after: " designed to make everyday care easier, cleaner, and faster.",
    },
    image: heroImage,
  },
  filters: baseFilters,
  sortOptions: [
    { value: "featured", label: "Default Sorting" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ],
  totalPages: 3,
  products: laundryProducts,
  subcategorySlugs: ["washing-machines", "tumble-dryers", "washer-dryers"],
};
