import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={category.href}
      className="group relative block w-full max-w-[166px] flex-shrink-0 overflow-hidden rounded-t-md shadow-sm transition-shadow hover:shadow-md sm:w-[166px]"
    >
      <div className="h-[178px] w-full">
        <img
          src={category.thumbnail}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="absolute inset-x-0 bottom-0 bg-navy-950/85 py-2.5 text-center text-sm font-medium text-white">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryCard;