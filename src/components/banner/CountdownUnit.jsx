const CountdownUnit = ({ value, label }) => {
  return (
    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white/95 text-navy-950 shadow-sm sm:h-16 sm:w-16">
      <span className="text-lg font-semibold sm:text-xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase text-navy-900/50">{label}</span>
    </div>
  );
};

export default CountdownUnit;