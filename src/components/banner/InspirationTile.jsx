import { Link } from "react-router-dom";

const InspirationTile = ({
  image,
  label,
  slug,
  className = "",
  imgClassName = "",
}) => {
  const content = (
    <div
      className={`group relative overflow-hidden rounded-lg bg-navy-950 ${className}`}
    >
      
      <img
        src={image}
        alt={label}
        className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" /> */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="absolute bottom-4 left-0 z-10">
        <span className="inline-block  bg-[linear-gradient(90deg,rgba(29,96,255,0.76)_40.59%,rgba(255,255,255,0)_90.38%)] px-2 py-2 text-xs font-medium text-white shadow-sm sm:text-sm">
          {label}
        </span>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link to={`/collection/${slug}`} className={`block ${className}`}>
        {content}
      </Link>
    );
  }

  return content;
};

export default InspirationTile;