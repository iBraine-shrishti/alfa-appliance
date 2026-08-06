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

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/delivery" element={<CheckoutDeliveryPage />} />
        <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
        <Route path="/checkout/review" element={<CheckoutReviewPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;
