const SortDropdown = ({ value, options, onChange }) => {
  return (
    <label className="inline-flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2 text-xs font-medium text-navy-900/70 shadow-sm">
      <span className="whitespace-nowrap">Sort by</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-transparent text-sm font-medium text-navy-900 outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SortDropdown;
