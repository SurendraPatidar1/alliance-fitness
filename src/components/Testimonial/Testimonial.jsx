import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { testimonialsData } from '../../data/testimonials';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonialsData.length;

  useEffect(() => {
    if (total <= 1) return undefined;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total]);

  if (total === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 bg-zinc-950/90 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FITNESS COMMUNITY"
          title="REAL PEOPLE."
          highlight="REAL PROGRESS."
          subtitle="Every fitness journey is different. Find your motivation, stay consistent, and keep moving toward your personal goals."
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id ?? currentIndex}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-10 lg:p-12"
            >
              <FaQuoteLeft className="absolute left-6 top-6 text-4xl text-lime-400/15 sm:left-10 sm:top-8 sm:text-6xl" />

              <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Member Avatar */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-lime-400 shadow-lg shadow-lime-400/10 sm:h-24 sm:w-24">
                  <img
                    src={current.avatar}
                    alt={`Demo profile for ${current.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div
                    className="mb-4 flex justify-center gap-1 text-sm text-amber-400 sm:justify-start"
                    aria-label={`${current.rating} out of 5 stars`}
                  >
                    {Array.from({ length: current.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p className="mb-6 text-base font-normal italic leading-relaxed text-zinc-200 sm:text-lg">
                    “{current.quote}”
                  </p>

                  <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="font-heading text-lg font-black uppercase text-white">
                        {current.name}
                      </h4>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-lime-400">
                        {current.role}
                      </p>
                    </div>

                    {current.transformation && (
                      <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3.5 py-1.5 text-xs font-bold text-lime-400">
                        {current.transformation}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <FaChevronLeft />
              </button>

              <div className="flex items-center gap-2">
                {testimonialsData.map((item, index) => (
                  <button
                    key={item.id ?? index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : undefined}
                    className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-lime-400'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <FaChevronRight />
              </button>
            </div>
          )}

          <p className="mt-5 text-center text-xs text-zinc-500">
            Replace demo reviews with verified Alliance Fitness member feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;