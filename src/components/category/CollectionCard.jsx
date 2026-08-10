import { Link } from "react-router-dom";

const CollectionCard = ({ collection }) => {
  return (
    <Link
      to={`/collection/${collection.slug}`}
      className="group flex flex-col gap-3"
    >
      <div className="aspect-[4/3] overflow-hidden rounded bg-cream-50">
        <img
          src={collection.image}
          alt={collection.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-navy-950 group-hover:text-brand-blue">
          {collection.name}
        </h3>
        <p className="mt-1 text-sm text-navy-900/50">
          {collection.productCount} Products
        </p>
      </div>
    </Link>
  );
};

export default CollectionCard;