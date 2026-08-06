const ActiveFilterPill = ({ label, onRemove }) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/8 px-3 py-1.5 text-xs font-medium text-brand-blue transition-colors hover:bg-brand-blue/12"
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-sm leading-none">
        ×
      </span>
    </button>
  );
};

export default ActiveFilterPill;
