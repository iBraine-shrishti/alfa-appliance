import product1 from "../assets/products/product1/product1.png";
import product2 from "../assets/products/product2/product2.png";
import product3 from "../assets/products/product3/product3.png";
import product4 from "../assets/products/product4/product4.png";

export const products = [
  {
    id: "p1",
    brand: "Samsung",
    name: "480L Frost Free Double Door Refrigerator",
    image: product1,
    rating: 4.8,
    reviews: 214,
    price: 749,
    oldPrice: 863,
    discount: 13,
    badge: "Offer",
  },
  {
    id: "p2",
    brand: "Bosch",
    name: "9kg Front Load Washing Machine",
    image: product2,
    rating: 4.8,
    reviews: 214,
    price: 445,
    oldPrice: null,
    discount: null,
    badge: null,
  },
  {
    id: "p3",
    brand: "Miele",
    name: "Built-in Induction Hob, 4 Zone",
    image: product3,
    rating: 4.8,
    reviews: 214,
    price: 609,
    oldPrice: 667,
    discount: 9,
    badge: "Offer",
  },
  {
    id: "p4",
    brand: "LG",
    name: "14-Place Setting Dishwasher",
    image: product4,
    rating: 4.6,
    reviews: 97,
    price: 475,
    oldPrice: null,
    discount: null,
    badge: null,
  },
];

export const fridgeFreezerProducts = [...products];