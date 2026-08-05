const Eyebrow = ({ children }) => {
  return (
    // <span className="inline-block rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue">
    //   {children}
    // </span>
    <div className="inline-block rounded-full bg-[linear-gradient(90deg,#1D60FF_0%,#F6F9FF_100%)] p-[2px]">
  <span className="block rounded-full bg-[linear-gradient(90deg,#D9E4FF_0%,rgba(255,255,255,0)_100%)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue">
    {children}
  </span>
</div>
  );
};

export default Eyebrow;