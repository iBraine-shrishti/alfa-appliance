import { useState } from "react";
import WishlistBreadcrumb from "../components/wishlist/WishlistBreadcrumb";
import WishlistBatchActions from "../components/wishlist/WishlistBatchActions";
import WishlistItemCard from "../components/wishlist/WishlistItemCard";
import WishlistSummarySidebar from "../components/wishlist/WishlistSummarySidebar";
import WishlistEmptyState from "../components/wishlist/WishlistEmptyState";

import refrigeratorImage from "../assets/products/product1/product1.png";
import washingMachineImage from "../assets/products/product2/product2.png";
import rangeCookerImage from "../assets/products/product3/product3.png";

const INITIAL_WISHLIST = [
  {
    id: "1",
    name: "ALFA Precision French Door Refrigerator",
    sku: "ALFA-RF-9051X",
    category: "Refrigeration",
    price: 3499.0,
    originalPrice: 3899.0,
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    image: refrigeratorImage,
  },
  {
    id: "2",
    name: "ALFA Ultra-Quiet Front Load Washing Machine",
    sku: "ALFA-WM-3011S",
    category: "Laundry",
    price: 899.0,
    originalPrice: 1049.0,
    rating: 4.6,
    reviewsCount: 89,
    inStock: true,
    image: washingMachineImage,
  },
  {
    id: "3",
    name: "ALFA Industrial Induction Range Cooker",
    sku: "ALFA-CK-7720V",
    category: "Cooking",
    price: 1899.0,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 42,
    inStock: false,
    image: rangeCookerImage,
  },
];

const WishlistPage = () => {
  const [items, setItems] = useState(INITIAL_WISHLIST);
  const [selectedItems, setSelectedItems] = useState(INITIAL_WISHLIST.map((i) => i.id));

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((i) => i.id));
    }
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((i) => i !== id));
  };

  const removeSelected = () => {
    setItems((prev) => prev.filter((i) => !selectedItems.includes(i.id)));
    setSelectedItems([]);
  };

  const activeItems = items.filter((item) => selectedItems.includes(item.id));
  const subtotal = activeItems.reduce((acc, item) => acc + item.price, 0);
  const totalSavings = activeItems.reduce(
    (acc, item) => acc + (item.originalPrice ? item.originalPrice - item.price : 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <WishlistBreadcrumb itemCount={items.length} />

      <main className="container-page py-8 lg:py-12">
        {items.length === 0 ? (
          <WishlistEmptyState />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <section className="space-y-4">
              <WishlistBatchActions
                selectedCount={selectedItems.length}
                totalCount={items.length}
                onToggleSelectAll={toggleSelectAll}
                onRemoveSelected={removeSelected}
              />

              <div className="space-y-4">
                {items.map((product) => (
                  <WishlistItemCard
                    key={product.id}
                    product={product}
                    isSelected={selectedItems.includes(product.id)}
                    onToggleSelect={toggleSelect}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </section>

            <WishlistSummarySidebar
              selectedCount={selectedItems.length}
              subtotal={subtotal}
              totalSavings={totalSavings}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistPage;