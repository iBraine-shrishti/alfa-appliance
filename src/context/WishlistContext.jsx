/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = window.localStorage.getItem("alfa-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("alfa-wishlist", JSON.stringify(items));
  }, [items]);

  const toggleWishlist = (product) => {
    if (!product) return;
    const slug = product.slug ?? product.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    if (!slug) return;
    setItems((current) =>
      current.some((item) => item.slug === slug || item.id === product.id)
        ? current.filter((item) => item.slug !== slug && item.id !== product.id)
        : [...current, { ...product, slug }]
    );
  };

  const removeFromWishlist = (slug) => setItems((current) => current.filter((item) => item.slug !== slug && item.id !== slug));
  const isWishlisted = (product) => {
    const slug = product?.slug ?? product?.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return items.some((item) => item.slug === slug || item.id === product?.id);
  };

  const value = useMemo(() => ({ items, toggleWishlist, removeFromWishlist, isWishlisted, itemCount: items.length }), [items, isWishlisted]);
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};
