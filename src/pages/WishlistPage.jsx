import { useState } from "react";
import WishlistBreadcrumb from "../components/wishlist/WishlistBreadcrumb";
import WishlistBatchActions from "../components/wishlist/WishlistBatchActions";
import WishlistItemCard from "../components/wishlist/WishlistItemCard";
import WishlistSummarySidebar from "../components/wishlist/WishlistSummarySidebar";
import WishlistEmptyState from "../components/wishlist/WishlistEmptyState";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    setSelectedItems((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };
  const toggleSelectAll = () => setSelectedItems(effectiveSelectedItems.length === items.length ? [] : items.map((item) => item.slug ?? item.id));
  const removeItem = (id) => {
    removeFromWishlist(id);
    setSelectedItems((current) => current.filter((item) => item !== id));
  };
  const removeSelected = () => effectiveSelectedItems.forEach(removeItem);
  const effectiveSelectedItems = selectedItems.length === 0 && items.length > 0
    ? items.map((item) => item.slug ?? item.id)
    : selectedItems;
  const activeItems = items.filter((item) => effectiveSelectedItems.includes(item.slug ?? item.id));
  const subtotal = activeItems.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = activeItems.reduce((sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0), 0);
  const moveSelectedToCart = () => activeItems.forEach((item) => addToCart(item));

  return (
    <div className="min-h-screen bg-slate-50">
      <WishlistBreadcrumb itemCount={items.length} />
      <main className="container-page py-8 lg:py-12">
        {items.length === 0 ? <WishlistEmptyState /> : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <section className="space-y-4">
            <WishlistBatchActions selectedCount={effectiveSelectedItems.length} totalCount={items.length} onToggleSelectAll={toggleSelectAll} onRemoveSelected={removeSelected} />
              <div className="space-y-4">
                {items.map((product) => {
                  const id = product.slug ?? product.id;
                  return <WishlistItemCard key={id} product={product} isSelected={selectedItems.includes(id)} onToggleSelect={() => toggleSelect(id)} onRemove={() => removeItem(id)} />;
                })}
              </div>
            </section>
            <WishlistSummarySidebar selectedCount={effectiveSelectedItems.length} subtotal={subtotal} totalSavings={totalSavings} onMoveSelected={moveSelectedToCart} />
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistPage;
