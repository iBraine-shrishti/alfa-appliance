const CartItemCheckbox = ({ checked, onChange, label }) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    aria-label={label}
    onClick={onChange}
    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
      checked ? "border-navy-950 bg-navy-950" : "border-navy-900/30 bg-white"
    }`}
  >
    {checked && (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white">
        <path d="M6.4 11.2 3.2 8l1.1-1.1 2.1 2.1 4.3-4.3L11.8 6z" />
      </svg>
    )}
  </button>
);

export default CartItemCheckbox;