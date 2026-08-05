import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;