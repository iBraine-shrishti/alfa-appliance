/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = window.localStorage.getItem("alfa-cart");
      const parsed = saved ? JSON.parse(saved) : [];
      return parsed.filter((item) => item?.product).map((item) => ({
        ...item,
        product: {
          ...item.product,
          deliveryInfo: item.product.deliveryInfo ?? { deliveryAvailable: false, collectionAvailable: false },
          carePlans: item.product.carePlans ?? [],
        },
      }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("alfa-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    if (!product) return;
    const slug = product.slug ?? product.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    if (!slug) return;
    const cartProduct = {
      ...product,
      slug,
      deliveryInfo: product.deliveryInfo ?? { deliveryAvailable: false, collectionAvailable: false },
      carePlans: product.carePlans ?? [],
    };
    setItems((current) => {
      const existing = current.find((item) => item.product.slug === slug);
      const next = existing
        ? current.map((item) =>
          item.product.slug === slug
            ? { ...item, qty: item.qty + quantity }
            : item
        )
        : [...current, { product: cartProduct, qty: quantity }];
      window.localStorage.setItem("alfa-cart", JSON.stringify(next));
      return next;
    });
  };

  const updateQuantity = (slug, quantity) => {
    setItems((current) =>
      quantity > 0
        ? current.map((item) => (item.product.slug === slug ? { ...item, qty: quantity } : item))
        : current.filter((item) => item.product.slug !== slug)
    );
  };

  const removeFromCart = (slug) => {
    setItems((current) => current.filter((item) => item.product.slug !== slug));
  };
  const isInCart = (product) => items.some((item) => item.product.slug === product?.slug);
  const updateItemServices = (slug, essentialServicesSelection) => {
    setItems((current) => current.map((item) => item.product.slug === slug ? { ...item, product: { ...item.product, essentialServicesSelection } } : item));
  };
  const toggleCart = (product) => {
    if (isInCart(product)) removeFromCart(product.slug);
    else addToCart(product);
  };

  const value = useMemo(
    () => ({ items, addToCart, toggleCart, updateQuantity, updateItemServices, removeFromCart, isInCart, itemCount: items.reduce((sum, item) => sum + item.qty, 0) }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
