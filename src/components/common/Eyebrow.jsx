const Eyebrow = ({ children }) => {
  return (
    <span className="inline-block rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue">
      {children}
    </span>
  );
};

export default Eyebrow;