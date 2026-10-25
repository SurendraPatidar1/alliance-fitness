import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { galleryData } from '../../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="THE ALLIANCE GALLERY"
          title="YOUR FITNESS"
          highlight="ENVIRONMENT"
          subtitle="Take a closer look at the training atmosphere. Every session is another opportunity to build strength, consistency, and confidence."
        />

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryData.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title} image`}
              className={`${item.span || ''} group relative h-72 w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 text-left sm:h-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-70" />

              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-lime-400/30 bg-zinc-950/50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-lime-400 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <h3 className="font-heading text-lg font-black uppercase text-white transition-colors group-hover:text-lime-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-300">
                    Explore the gallery
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-zinc-950">
                  <FaExpand className="text-sm" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={(event) => {
              if (event.key === 'Escape') closeLightbox();
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-3 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 shadow-2xl"
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close image modal"
                className="absolute right-3 top-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-lime-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <FaTimes className="text-lg" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full object-contain"
              />

              <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                    {selectedImage.category}
                  </span>
                  <h4 className="mt-1 font-heading text-lg font-black uppercase text-white sm:text-2xl">
                    {selectedImage.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="shrink-0 cursor-pointer rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-lime-400 hover:text-lime-400"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
