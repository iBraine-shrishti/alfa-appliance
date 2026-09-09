import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const SOCIALS = [
  { id: "facebook", icon: FiFacebook, href: "https://facebook.com" },
  { id: "tiktok", icon: FaTiktok, href: "https://tiktok.com" },
  { id: "instagram", icon: FiInstagram, href: "https://instagram.com" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ id, icon: Icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={id}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-blue hover:text-white"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
