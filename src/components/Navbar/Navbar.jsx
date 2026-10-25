import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaDumbbell,
  FaWhatsapp
} from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import PrimaryButton from '../Button/PrimaryButton';

const GYM_PHONE = '917066968111';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(
    'Hi Alliance Fitness, I would like to enquire about membership plans.'
  )}`;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/15 bg-zinc-950/95 shadow-2xl shadow-black/30 backdrop-blur-2xl'
            : 'border-white/10 bg-zinc-950/60 shadow-lg backdrop-blur-xl'
        }`}
      >
        {/* Alliance Fitness Brand */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Alliance Fitness home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-lg text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.18)] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <FaDumbbell />
          </span>

          <span className="whitespace-nowrap text-sm font-black uppercase tracking-wide text-white sm:text-xl sm:tracking-wider">
            Alliance <span className="text-lime-400">Fitness</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md xl:flex"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(sectionId)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors 2xl:px-4 ${
                  isActive
                    ? 'text-lime-400'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="allianceActivePill"
                    className="absolute inset-0 rounded-full border border-lime-400/20 bg-lime-400/10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Membership CTA */}
        <div className="hidden xl:block">
          <PrimaryButton
            href="#pricing"
            variant="lime"
            className="!px-5 !py-2.5 text-xs"
          >
            Join Now
          </PrimaryButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-lime-400/40 hover:text-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 xl:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="alliance-mobile-menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>

      {/* Animated Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="alliance-mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-h-[calc(100dvh-100px)] max-w-7xl overflow-y-auto rounded-3xl border border-white/15 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-2xl sm:p-6 xl:hidden"
          >
            <p className="mb-4 px-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-lime-400">
              Train with Alliance
            </p>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(sectionId);
                      closeMobileMenu();
                    }}
                    className={`flex items-center justify-between rounded-xl border p-3 text-xs font-bold uppercase tracking-wider transition sm:text-sm ${
                      isActive
                        ? 'border-lime-400/30 bg-lime-400/10 text-lime-400'
                        : 'border-white/5 bg-white/[0.03] text-zinc-200 hover:border-lime-400/20 hover:text-lime-400'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FaChevronRight className="text-xs" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div onClick={closeMobileMenu}>
                <PrimaryButton
                  href="#pricing"
                  variant="lime"
                  className="w-full"
                >
                  View Memberships
                </PrimaryButton>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-lime-400 transition hover:bg-lime-400 hover:text-zinc-950"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp Enquiry
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-zinc-500">
              Call us: 7066968111
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;