// import { FiSearch } from "react-icons/fi";

// const SearchBar = ({ className = "" }) => {
//   return (
//     <form
//       role="search"
//       className={`relative flex w-full items-center ${className}`}
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <input
//         type="search"
//         placeholder="Search Our Products, brands & services"
//         className="w-full rounded-full border border-navy-900/10 bg-navy-900/[0.03] py-2.5 pl-5 pr-12 text-sm text-navy-900 placeholder:text-navy-900/40 outline-none transition-colors focus:border-brand-blue focus:bg-white"
//       />
//       <button
//         type="submit"
//         aria-label="Search"
//         className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white transition-colors hover:bg-brand-blue-dark"
//       >
//         <FiSearch size={16} />
//       </button>
//     </form>
//   );
// };

// export default SearchBar;

// import { FiSearch } from "react-icons/fi";

// const SearchBar = ({ className = "" }) => {
//   return (
//     <div
//       role="search"
//       className={`relative flex w-full items-center ${className}`}
//     >
//       <FiSearch className="absolute left-3.5 text-navy-900/50" size={18} />

//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full rounded-lg border border-navy-900/10 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 outline-none transition focus:border-brand-blue"
//       />
//     </div>
//   );
// };

// export default SearchBar;

import { FiSearch } from "react-icons/fi";

const SearchBar = ({ className = "" }) => {
  return (
    <form
      role="search"
      className={`relative flex w-full items-center ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        placeholder="Search Our Products, brands & services"
        className="w-full rounded-full border border-navy-900/10 bg-navy-900/[0.03] py-2.5 pl-5 pr-12 text-sm text-navy-900 placeholder:text-navy-900/40 outline-none transition-colors focus:border-brand-blue focus:bg-white"
      />

      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white transition-colors hover:bg-brand-blue-dark"
      >
        <FiSearch size={16} />
      </button>
    </form>
  );
};

export default SearchBar;