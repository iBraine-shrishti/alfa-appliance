import { FiUser, FiShield } from "react-icons/fi";

const ROLES = [
  { key: "customer", label: "Customer", icon: FiUser },

];

const RoleToggle = ({ role, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1">
      {ROLES.map(({ key, label, icon: Icon }) => {
        const isActive = role === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-white text-navy-950 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default RoleToggle;
