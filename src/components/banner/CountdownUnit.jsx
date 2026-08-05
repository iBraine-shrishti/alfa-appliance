const CountdownUnit = ({ value, label }) => {
  return (
    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-white/30 bg-white/20 text-white shadow-[0px_0px_5.4px_0px_#00000014_inset] backdrop-blur-[58.1px] sm:h-16 sm:w-16">
      <span className="text-lg font-semibold sm:text-xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase text-white/70">{label}</span>
    </div>
  );
};

export default CountdownUnit;