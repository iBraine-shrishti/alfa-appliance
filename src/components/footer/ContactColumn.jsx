import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { contactInfo } from "../../data/footerLinks";

const ICONS = { address: FiMapPin, phone: FiPhone, email: FiMail };

const ContactColumn = () => {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-white">Contact Information</h4>
      <ul className="mt-4 flex flex-col gap-4">
        {contactInfo.map((item) => {
          const Icon = ICONS[item.id];
          return (
            <li key={item.id} className="flex items-start gap-3">
              <Icon size={16} className="mt-0.5 shrink-0 text-brand-blue" />
              <span className="text-sm leading-relaxed text-white/60">{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactColumn;