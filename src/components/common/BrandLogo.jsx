const BrandLogo = ({ name, logo }) => {
  return (
    <img
      src={logo}
      alt={name}
      className="h-6 w-auto object-contain opacity-70 grayscale brightness-70 transition-opacity hover:opacity-100 sm:h-8"
    />
  );
};

export default BrandLogo;