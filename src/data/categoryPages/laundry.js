import heroImage from "../../assets/categories/heading-categories/laundry.png";
import product1 from "../../assets/products/product2/product2.png";
import product2 from "../../assets/products/product1/product1.png";
import product3 from "../../assets/products/product2/product2.png";
import product4 from "../../assets/products/product1/product1.png";
import product5 from "../../assets/products/product2/product2.png";
import product6 from "../../assets/products/product1/product1.png";
import product7 from "../../assets/products/product2/product2.png";
import product8 from "../../assets/products/product1/product1.png";

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

const laundryProducts = [
  { id: "laundry-1", brand: "Samsung", name: "Eco Bubble 9kg Front Load Washing Machine", image: product1, rating: 4.8, reviews: 214, price: 749, oldPrice: 863, discount: 13, badge: "Offer" },
  { id: "laundry-2", brand: "Bosch", name: "Serie 4 Front Load Washing Machine", image: product2, rating: 4.7, reviews: 91, price: 905, oldPrice: null, discount: null, badge: null },
  { id: "laundry-3", brand: "Miele", name: "Heat Pump Tumble Dryer", image: product3, rating: 4.8, reviews: 126, price: 1199, oldPrice: 1320, discount: 9, badge: "New" },
  { id: "laundry-4", brand: "LG", name: "TurboWash 8kg Washing Machine", image: product4, rating: 4.6, reviews: 74, price: 945, oldPrice: null, discount: null, badge: null },
  { id: "laundry-5", brand: "Samsung", name: "10kg Front Load Washing Machine", image: product5, rating: 4.7, reviews: 88, price: 999, oldPrice: null, discount: null, badge: null },
  { id: "laundry-6", brand: "Beko", name: "Series 6 Heat Pump Tumble Dryer", image: product6, rating: 4.7, reviews: 63, price: 849, oldPrice: null, discount: null, badge: "New" },
  { id: "laundry-7", brand: "Miele", name: "W1 Front Load Washing Machine", image: product7, rating: 4.8, reviews: 55, price: 1499, oldPrice: 1599, discount: 6, badge: "Offer" },
  { id: "laundry-8", brand: "Bosch", name: "Serie 4 Front Load Washing Machine", image: product8, rating: 4.7, reviews: 78, price: 599, oldPrice: 699, discount: 14, badge: null },
];

export const laundryPage = {
  hero: {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Laundry" }],
    title: "Laundry",
    subtitle: "Discover high-performance washing machines and dryers designed to make everyday care easier, cleaner, and faster.",
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
};
