import Container from "../common/Container";
import FooterColumn from "./FooterColumn";
import ContactColumn from "./ContactColumn";
import SocialLinks from "./SocialLinks";
import DarkLogo from "./DarkLogo";
import { quickLinks, shopCategories, legalLinks } from "../../data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <DarkLogo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Experience smarter living with premium home appliances from the world's leading brands. From refrigeration and laundry to cooking and built-in solutions, we deliver quality products, expert installation, and trusted after-sales support for every home.
            </p>
          </div>
          <FooterColumn title="Quick Link" links={quickLinks} />
          <FooterColumn title="Shop Categories" links={shopCategories} />
          <ContactColumn />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alfa Appliances All Right Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <a href={link.href} className="transition-colors hover:text-white">{link.label}</a>
                {i < legalLinks.length - 1 && <span className="text-white/20">|</span>}
              </span>
            ))}
           <span className="text-white/30">
              Design &amp; Developed by{" "}
              <a
                href="https://ibraine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-onest text-[14px] font-bold text-[#1D60FF] underline transition-colors hover:text-[#4A7CFF]"
              >
                ibraine.
              </a>
            </span>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10 bg-navy-950">
        <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="max-w-xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            Designed for Modern Homes.<br />Built for Everyday Living.
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Follow us:</span>
            <SocialLinks />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;