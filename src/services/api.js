// API Service for Alfa Appliances Frontend
export const API_BASE_URL = "http://127.0.0.1:8000/api";

// Helper to format image URLs nicely
export const formatImageUrl = (imageUrl) => {
  if (!imageUrl) return "/placeholder-appliance.png";
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  return `http://127.0.0.1:8000${imageUrl}`;
};

// Fetch Products from Backend API (with optional query filters)
export const fetchProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/products/${query ? `?${query}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.map((item) => ({
      ...item,
      id: item.id,
      name: item.title,
      image: formatImageUrl(item.image_display_url || item.image_url),
      price: parseFloat(item.price),
      oldPrice: item.old_price ? parseFloat(item.old_price) : null,
      rating: item.rating || 4.5,
      reviews: item.reviews ? item.reviews.length : 50,
      badge: item.is_sale ? "Offer" : null,
      brand: item.brand_name || "Alfa",
      capacity: item.capacity,
      energyRating: item.energy_rating,
      color: item.color,
    }));
  } catch (error) {
    console.error("Failed to fetch products from backend:", error);
    return null;
  }
};

// Fetch Single Product Detail
export const fetchProductDetail = async (idOrSlug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${idOrSlug}/`);
    if (!res.ok) return null;
    const item = await res.json();
    return {
      ...item,
      id: item.id,
      name: item.title,
      image: formatImageUrl(item.image_display_url || item.image_url),
      price: parseFloat(item.price),
      oldPrice: item.old_price ? parseFloat(item.old_price) : null,
      rating: item.rating || 4.5,
      brand: item.brand_name || "Alfa",
      reviewsList: item.reviews || [],
      faqsList: item.faqs || [],
      gallery: item.images && item.images.length > 0 
        ? item.images.map(img => formatImageUrl(img.url))
        : [formatImageUrl(item.image_display_url || item.image_url)]
    };
  } catch (error) {
    console.error("Failed to fetch product detail:", error);
    return null;
  }
};

// Fetch Categories
export const fetchCategories = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/categories/`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch Brands
export const fetchBrands = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/brands/`);
    if (!res.ok) throw new Error("Failed to fetch brands");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch Collections
export const fetchCollections = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/collections/`);
    if (!res.ok) throw new Error("Failed to fetch collections");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Place Order
export const placeOrder = async (orderData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/place-order/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    return await res.json();
  } catch (error) {
    console.error("Order placement failed:", error);
    throw error;
  }
};

// Verify Coupon Code
export const verifyCoupon = async (code, totalAmount) => {
  try {
    const res = await fetch(`${API_BASE_URL}/verify-coupon/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, total_amount: totalAmount }),
    });
    return await res.json();
  } catch (error) {
    console.error("Coupon verification failed:", error);
    return { valid: false, error: "Network connection error" };
  }
};

// User Login
export const loginUser = async (email, password) => {
  const res = await fetch(`${API_BASE_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
};

// User Registration
export const registerUser = async (userData) => {
  const res = await fetch(`${API_BASE_URL}/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await res.json();
};

// Submit Contact Inquiry
export const submitContactInquiry = async (contactData) => {
  const res = await fetch(`${API_BASE_URL}/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
  return await res.json();
};
