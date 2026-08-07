import Container from "../components/common/Container";
import CollectionCard from "../components/category/CollectionCard";
import { collections } from "../data/collections";

/**
 * "All Collections" — full grid of every product category,
 * linked from the Hero's "Shop Collection" button.
 */
const AllCollectionsPage = () => {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            All Collections
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
            Explore our comprehensive range of precision-engineered appliances.
            Designed for modern living, delivering uncompromising performance
            and sophisticated industrial minimalism.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllCollectionsPage;