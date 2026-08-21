import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import CollectionCard from "../components/category/CollectionCard";
import { collections } from "../data/collections";
import headerBg from "../assets/collections/collection-header.png";

const AllCollectionsPage = () => {
  return (
    <div>
      <div className="relative flex h-[240px] sm:h-[280px] lg:h-[320px] w-full items-center overflow-hidden bg-navy-950">
        <img
          src={headerBg}
          alt="All Collections Header"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />

        <div className="absolute inset-0 bg-navy-950/65" />

        <Container className="relative z-10 w-full">
          <div className="max-w-2xl text-white">
            <nav className="mb-2 flex items-center gap-2 text-xs text-white/70">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-white">Collections</span>
            </nav>

            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              All Collections
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Explore our comprehensive range of precision-engineered appliances.
              Designed for modern living, delivering uncompromising performance and
              sophisticated industrial minimalism.
            </p>
          </div>
        </Container>
      </div>

      <div className="py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllCollectionsPage;