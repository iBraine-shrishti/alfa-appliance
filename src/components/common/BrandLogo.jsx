const BrandLogo = ({ name, logo }) => {
  return (
    <img
  src={logo}
  alt={name}
  className="h-10 w-auto object-contain opacity-70 grayscale brightness-70 transition-opacity hover:opacity-100 sm:h-12 md:h-[60px]"
/>
  );
};

export default BrandLogo;