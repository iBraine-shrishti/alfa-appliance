import { FiTrash2 } from "react-icons/fi";

const WishlistBatchActions = ({
  selectedCount,
  totalCount,
  onToggleSelectAll,
  onRemoveSelected,
}) => {
  return (
    <div className="flex items-center justify-between rounded border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={selectedCount === totalCount && totalCount > 0}
          onChange={onToggleSelectAll}
          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
        />
        <span className="text-xs font-bold text-slate-900">
          Select All ({selectedCount}/{totalCount})
        </span>
      </label>

      {selectedCount > 0 && (
        <button
          type="button"
          onClick={onRemoveSelected}
          className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline"
        >
          <FiTrash2 size={14} /> Remove Selected
        </button>
      )}
    </div>
  );
};

export default WishlistBatchActions;