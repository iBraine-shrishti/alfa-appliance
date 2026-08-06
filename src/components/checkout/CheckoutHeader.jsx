const CheckoutHeader = ({ title }) => {
  return (
    <header className="border-b border-navy-900/10 bg-white">
      {title ? (
        <div className="border-t border-navy-900/5 bg-[#f5f5fb]">
          <div className="container-page py-4 text-sm text-navy-900/55">{title}</div>
        </div>
      ) : null}
    </header>
  );
};

export default CheckoutHeader;
