import { motion } from 'framer-motion';
import {
  FaDumbbell,
  FaBolt,
  FaTrophy,
  FaCheckCircle,
} from 'react-icons/fa';
import { images } from '../../data/images';

const HeroImage = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center px-3 py-8 sm:px-6 lg:max-w-none lg:px-8">

      {/* Ambient lime glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute inset-8 rounded-full bg-lime-400/20 blur-[90px]"
      />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute h-[85%] w-[85%] rounded-full border border-lime-400/10" />
      <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full border border-white/5" />

      {/* Main athlete image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        className="group relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50 lg:max-w-lg"
      >
        <img
          src={images.heroAthlete}
          alt="Strength training at Alliance Fitness"
          loading="eager"
          fetchPriority="high"
          className="h-[380px] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 sm:h-[480px] xl:h-[540px]"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-zinc-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 to-transparent" />

        {/* Image caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">
              Alliance Fitness
            </span>
          </div>

          <h3 className="font-heading text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            Stronger Every Day.
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            Your goals. Your effort. Your transformation.
          </p>
        </div>
      </motion.div>

      {/* Floating card: training */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          x: { duration: 0.6, delay: 0.7 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute left-0 top-16 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-3 py-3 shadow-xl backdrop-blur-xl sm:left-0 sm:px-4 lg:-left-1 xl:-left-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/15 text-lg text-lime-400">
          <FaDumbbell />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Focus
          </p>
          <p className="text-sm font-extrabold text-white">
            Strength Training
          </p>
        </div>
      </motion.div>

      {/* Floating card: membership */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          x: { duration: 0.6, delay: 0.9 },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-20 right-0 z-20 flex items-center gap-3 rounded-2xl border border-lime-400/20 bg-zinc-900/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:right-0 sm:px-4 lg:-right-1 xl:-right-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/15 text-lg text-lime-400">
          <FaCheckCircle />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Memberships
          </p>
          <p className="text-sm font-extrabold text-white">
            Starting ₹1,500
          </p>
        </div>
      </motion.div>

      {/* Decorative achievement icon */}
      <motion.div
        initial={{ opacity: 0, rotate: -25, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute right-7 top-2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/30 bg-zinc-900 text-xl text-lime-400 shadow-xl sm:right-12"
      >
        <FaTrophy />
      </motion.div>
    </div>
  );
};

export default HeroImage;