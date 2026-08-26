import { useState } from "react";
import { FiMapPin, FiMail, FiMessageCircle, FiPhone, FiCheck, FiX } from "react-icons/fi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";

const CONTACT_ITEMS = [
  {
    icon: FiMapPin,
    title: "Our Location",
    lines: ["105 Stoke Newington high street N16 0PH"],
  },
  {
    icon: FiMail,
    title: "Mail Us",
    lines: ["alfaappliancesltd@gmail.com"],
  },
  {
    icon: FiMessageCircle,
    title: "Chat With Us",
    lines: ["Get live chat support"],
  },
  {
    icon: FiPhone,
    title: "Call Us",
    lines: ["0207 923 4080"],
  },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Alfa+Appliances,105+Stoke+Newington+High+St,London+N16+0PH&z=16&output=embed";
const DIRECTIONS_URL = "https://maps.app.goo.gl/DWjEHX56tcvevond8";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setIsMessageSent(true);
  };

  return (
    <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div>
       <Eyebrow>Reach Us</Eyebrow>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-navy-950 sm:text-5xl">
          We&apos;re Always Here To Help &ndash; Just One Click Away!
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500">
          Have questions or need assistance? Our support team is always ready
          to help. Reach out to us with just a click and get the answers you
          need!
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACT_ITEMS.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon size={20} />
              </div>
              <div>
                <dt className="font-bold text-navy-950">{title}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-slate-500">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-semibold text-navy-950"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-semibold text-navy-950"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-navy-950"
            >
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-navy-950"
            >
              Phone number
            </label>
            <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white">
              <span className="flex items-center border-r border-slate-200 bg-slate-50 px-3.5 text-sm font-semibold text-navy-950">
                UK
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+44 000 000 000"
                className="w-full px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-navy-950"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Is there anything particular you need help with?"
              className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg border border-navy-950 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="relative h-[420px] overflow-hidden rounded border border-slate-200 bg-slate-100 lg:h-full lg:min-h-[780px]">
        <iframe
          title="Alfa Appliances showroom location"
          src={MAP_EMBED_SRC}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />

        <div className="absolute inset-x-4 bottom-4 rounded bg-white p-5 shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-6">
          <h3 className="text-lg font-extrabold text-navy-950 sm:text-xl uppercase">
            Alfa Appliances
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            105 Stoke Newington High St
            <br />
            London, N16 0PH
          </p>
          <div className="mt-3 flex gap-6">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-blue-600 hover:underline"
            >
              Get Directions
            </a>
            <a
              href="#book-appointment"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline"
            >
              <FaScrewdriverWrench aria-hidden="true" /> Book an Repair
            </a>
          </div>
        </div>
      </div>

      {isMessageSent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setIsMessageSent(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-sent-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsMessageSent(false)}
              aria-label="Close message confirmation"
              className="absolute right-4 top-4 rounded-full p-1.5 text-navy-900/45 transition-colors hover:bg-navy-900/5 hover:text-navy-950"
            >
              <FiX size={20} />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
              <FiCheck size={28} />
            </div>
            <h2 id="message-sent-title" className="mt-5 text-2xl font-bold text-navy-950">
              Message sent
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Thank you for contacting us. Our support team will get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setIsMessageSent(false)}
              className="mt-6 rounded-lg bg-navy-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Contact;
