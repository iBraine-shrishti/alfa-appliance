import { FiTool, FiBox, FiCheckCircle, FiLifeBuoy, FiTag } from "react-icons/fi";

const FEATURES = [
  { icon: FiTool, label: "Problem? Book a Repair" },
  { icon: FiBox, label: "15+ Types of Appliances" },
  { icon: FiCheckCircle, label: "Expert Installation" },
  { icon: FiLifeBuoy, label: "Lifetime Support" },
  { icon: FiTag, label: "Price Match Guarantee" },
];

const AuthHero = () => {
  return (
    <div
      className="relative hidden flex-col justify-center overflow-hidden bg-navy-950 px-10 py-12 lg:flex lg:w-1/2 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 14, 30, 0.72), rgba(10, 14, 30, 0.72)), url('src/assets/auth.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl font-semibold leading-tight text-white">
        Alfa
        <br />
        Appliances
      </h1>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80">
        Elevating home living with precision-engineered appliances. Our
        commitment to innovation, durability, and customer satisfaction
        defines every product we offer. From the heart of your kitchen to the
        core of your laundry room, we provide the industrial-grade
        performance you deserve.
      </p>

      <p className="mt-6 text-sm font-bold tracking-widest text-blue-400">
        INNOVATION. QUALITY. RELIABILITY.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {FEATURES.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white/90 backdrop-blur-sm"
          >
            <Icon size={14} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AuthHero;
