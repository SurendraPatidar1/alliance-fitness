import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const GYM_PHONE = '917066968111';
const DISPLAY_PHONE = '7066968111';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(
    'Hi Alliance Fitness, I would like to know more about your gym memberships.'
  )}`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-zinc-400">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400 text-xl font-black text-zinc-950">
                AF
              </span>
              <span className="text-xl font-black uppercase tracking-wider text-white">
                Alliance <span className="text-lime-400">Fitness</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-zinc-400">
              Train with purpose. Build strength. Make fitness part of your
              lifestyle. Start your fitness journey with Alliance Fitness.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Alliance Fitness on WhatsApp"
                className="flex h-10 items-center gap-2 rounded-full bg-lime-400 px-4 text-xs font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-lime-300"
              >
                <FaWhatsapp className="text-base" />
                Enquire Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ['Home', '#home'],
                ['About Us', '#about'],
                ['Programs', '#programs'],
                ['Gallery', '#gallery'],
                ['Membership Plans', '#pricing'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-lime-400"
                  >
                    <span className="text-lime-400">↗</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white">
              Membership
            </h3>

            <p className="mb-4 text-sm leading-6">
              Find a membership plan that fits your fitness goals.
            </p>

            <div className="space-y-3">
              <a
                href="#pricing"
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-lime-400/50"
              >
                <span className="text-sm text-zinc-300">Monthly Plan</span>
                <span className="font-bold text-lime-400">₹1,500</span>
              </a>

              <a
                href="#pricing"
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-lime-400/50"
              >
                <span className="text-sm text-zinc-300">3-Month Plan</span>
                <span className="font-bold text-lime-400">₹3,000</span>
              </a>

              <a
                href="#pricing"
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-lime-400/50"
              >
                <span className="text-sm text-zinc-300">6-Month Plan</span>
                <span className="font-bold text-lime-400">₹8,000</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <p className="mb-5 text-sm leading-6">
              Have questions about memberships? Contact us to learn more.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="flex items-center gap-3 text-sm transition hover:text-lime-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lime-400">
                  <FaPhoneAlt />
                </span>
                {DISPLAY_PHONE}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition hover:text-lime-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lime-400">
                  <FaWhatsapp className="text-lg" />
                </span>
                WhatsApp Enquiry
              </a>

              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lime-400">
                  <FaMapMarkerAlt />
                </span>
                <span>Contact us for gym location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="font-bold text-white">Alliance Fitness</span>.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="font-semibold transition hover:text-lime-400"
          >
            Built for your fitness journey ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;