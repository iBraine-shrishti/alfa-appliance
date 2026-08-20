import product1 from "../assets/products/product1/product1.png";
import product1Side2 from "../assets/products/product1/side-images/side-img2.png";
import product1Side3 from "../assets/products/product1/side-images/side-img3.png";
import product1Side4 from "../assets/products/product1/side-images/side-img4.png";
import product1Side5 from "../assets/products/product1/side-images/side-img5.png";
import product2 from "../assets/products/product2/product2.png";
import product2Side2 from "../assets/products/product2/side-images/side-img2.png";
import product2Side3 from "../assets/products/product2/side-images/side-img3.png";
import product3 from "../assets/products/product3/product3.png";
import product3Side2 from "../assets/products/product3/side-images/side-img2.png";
import product3Side3 from "../assets/products/product3/side-images/side-img3.png";
import product4 from "../assets/products/product4/product4.png";
import product4Side2 from "../assets/products/product4/side-images/side-img2.png";
import product4Side3 from "../assets/products/product4/side-images/side-img3.png";

const galleriesByDefaultImage = new Map([
  [product1, [product1, product1Side2, product1Side3, product1Side4, product1Side5]],
  [product2, [product2, product2Side2, product2Side3]],
  [product3, [product3, product3Side2, product3Side3]],
  [product4, [product4, product4Side2, product4Side3]],
]);

export const getProductGallery = (defaultImage) =>
  galleriesByDefaultImage.get(defaultImage) ?? [defaultImage];