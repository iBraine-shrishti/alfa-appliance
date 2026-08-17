const ColourSelector = ({ colours, selectedColour, onSelect }) => (
  <div className="border-t border-navy-900/10 pt-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/45">
      Colour: {selectedColour?.name}
    </p>
    <div className="mt-3 flex items-center gap-3">
      {colours.map((colour) => (
        <button
          key={colour.name}
          type="button"
          onClick={() => onSelect(colour)}
          aria-label={colour.name}
          className={`h-9 w-9 rounded-full border-2 ${colour.swatchClass} ${
            selectedColour?.name === colour.name ? "border-brand-blue ring-2 ring-brand-blue/15" : "border-navy-900/20"
          }`}
        />
      ))}
    </div>
  </div>
);

export default ColourSelector;
