const InspirationTile = ({ image, label }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img src={image} alt={label} className="h-full w-full object-cover" />
      <span
        className="
            absolute bottom-3 left-0 flex h-10 items-center px-2 text-sm font-medium text-white
            bg-[linear-gradient(90deg,rgba(29,96,255,0.76)_40.59%,rgba(255,255,255,0)_90.38%)]"
        >
            {label}
       </span>
    </div>
  );
};

export default InspirationTile;