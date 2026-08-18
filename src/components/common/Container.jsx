const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-9 sm:px-[44px] md:px-[80px] lg:px-[120px] xl:px-[160px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;