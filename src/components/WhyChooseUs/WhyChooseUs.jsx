import { motion } from 'framer-motion';
import {
  FaDumbbell,
  FaUsers,
  FaHeartbeat,
  FaClock,
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { images } from '../../data/images';

const features = [
  {
    icon: FaDumbbell,
    title: 'Train With Purpose',
    description:
      'Build strength, improve fitness, and work consistently toward your personal training goals.',
  },
  {
    icon: FaUsers,
    title: 'A Stronger Community',
    description:
      'Stay motivated in an energetic environment where every workout moves you forward.',
  },
  {
    icon: FaHeartbeat,
    title: 'Fitness For Every Goal',
    description:
      'Focus on strength, weight management, endurance, and building a healthier lifestyle.',
  },
  {
    icon: FaClock,
    title: 'Flexible Memberships',
    description:
      'Choose a membership plan that fits your schedule, fitness journey, and budget.',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-zinc-950 py-16 sm:py-28"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="THE ALLIANCE ADVANTAGE"
          title="MORE THAN"
          highlight="JUST A WORKOUT"
          subtitle="Your fitness journey deserves commitment, consistency, and the right environment. Start building a stronger version of yourself with Alliance Fitness."
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:col-span-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-lime-400/40 hover:bg-white/[0.06] sm:p-6"
                >
                  <div>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/10 text-lg text-lime-400 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-zinc-950 sm:mb-5 sm:h-12 sm:w-12 sm:text-2xl">
                      <Icon />
                    </div>

                    <h3 className="mb-2 font-heading text-xs font-bold uppercase leading-tight text-white transition-colors group-hover:text-lime-400 sm:text-xl">
                      {feature.title}
                    </h3>

                    <p className="text-[11px] font-normal leading-relaxed text-zinc-400 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-4 h-px w-8 bg-lime-400/50 transition-all duration-300 group-hover:w-16" />
                </motion.div>
              );
            })}
          </div>

          {/* Gym image showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl lg:col-span-5"
          >
            <img
              src={images.whyChooseUs}
              alt="Fitness training environment at Alliance Fitness"
              loading="lazy"
              className="h-[350px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-zinc-950/65 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Your Journey. Your Goals.
              </p>

              <p className="mt-1 font-heading text-base font-black uppercase text-white sm:text-lg">
                Stronger Starts Here
              </p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Show up. Stay consistent. Keep progressing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
