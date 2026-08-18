const QuantitySelector = ({ qty, onChange }) => (
  <select
    value={qty}
    onChange={(event) => onChange(Number(event.target.value))}
    className="rounded border border-navy-900/15 px-3 py-1.5 text-sm text-navy-950"
  >
    {[1, 2, 3, 4, 5].map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
);

export default QuantitySelector;