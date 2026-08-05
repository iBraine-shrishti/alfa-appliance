const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3 pr-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon size={20} />
      </span>
      <h3 className="font-display text-base font-semibold text-navy-950">{title}</h3>
      <p className="text-sm leading-relaxed text-navy-900/60">{description}</p>
    </div>
  );
};

export default FeatureCard;