// import { Link } from "react-router-dom";

// const CategoryCard = ({ category }) => {
//   return (
//     <Link
//       to={category.href}
//       className="group relative block aspect-[4/5] w-full overflow-hidden rounded-t-2xl shadow-sm transition-shadow hover:shadow-md"
//     >
//       <img
//         src={category.thumbnail}
//         alt={category.name}
//         className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//       />
//       <span className="absolute inset-x-0 bottom-0 bg-navy-950/85 py-2.5 text-center text-sm font-medium text-white">
//         {category.name}
//       </span>
//     </Link>
//   );
// };

// export default CategoryCard;
const CategoryCard = ({ category }) => {
  return (
    <button
      type="button"
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-t-2xl shadow-sm transition-shadow hover:shadow-md"
      aria-label={`View ${category.name}`}
    >
      <img
        src={category.thumbnail}
        alt={category.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <span className="absolute inset-x-0 bottom-0 bg-navy-950/85 py-2.5 text-center text-sm font-medium text-white">
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;