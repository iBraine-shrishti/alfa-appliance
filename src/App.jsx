import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CategoryPage from "./components/category-page/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutDeliveryPage from "./pages/CheckoutDeliveryPage";
import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";
import CheckoutReviewPage from "./pages/CheckoutReviewPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import AllCollectionsPage from "./pages/AllCollectionsPage";
import Contact from "./sections/Contact";
import Auth from "./pages/Auth";
import WishlistPage from "./pages/WishlistPage";
import ProfilePage from "./pages/ProfilePage";
import TrackOrderPage from "./pages/TrackOrderPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:slug" element={<CategoryPage />} />
        <Route path="/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/delivery" element={<CheckoutDeliveryPage />} />
        <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
        <Route path="/checkout/review" element={<CheckoutReviewPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/collections" element={<AllCollectionsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/account" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
