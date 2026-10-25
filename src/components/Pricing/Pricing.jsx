import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import PrimaryButton from '../Button/PrimaryButton';
import { pricingData } from '../../data/pricing';

const GYM_PHONE = '917066968111';

const Pricing = () => {
  const handleEnquiry = (plan) => {
    const message = `Hi Alliance Fitness! I am interested in the ${plan.name} membership for ₹${plan.price} (${plan.period}). Please share the details.`;

    const whatsappUrl = `https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="ALLIANCE FITNESS MEMBERSHIPS"
          title="INVEST IN YOUR"
          highlight="STRONGER SELF"
          subtitle="Choose the membership that fits your fitness goals. Contact our team to learn more about joining Alliance Fitness."
        />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-shadow duration-300 sm:p-8 ${
                plan.highlighted
                  ? 'border-2 border-lime-400 bg-zinc-900 shadow-[0_0_35px_rgba(163,230,53,0.12)] lg:-translate-y-2'
                  : 'glass-card border border-white/10 hover:border-lime-400/40 hover:shadow-[0_0_30px_rgba(163,230,53,0.07)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-zinc-950 shadow-lg">
                  <FaCrown />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="mb-7">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                      {String(index + 1).padStart(2, '0')} / MEMBERSHIP
                    </span>

                    {!plan.highlighted && (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-3xl font-bold text-lime-400">₹</span>

                  <span className="font-heading text-5xl font-black tracking-tight text-white">
                    {Number(plan.price).toLocaleString('en-IN')}
                  </span>

                  <span className="text-sm font-medium text-zinc-400">
                    / {plan.period}
                  </span>
                </div>

                <div className="mb-7 h-px w-full bg-white/10" />

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-xs text-lime-400">
                        <FaCheck />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleEnquiry(plan)}
                  className={`group flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
                    plan.highlighted
                      ? 'bg-lime-400 text-zinc-950 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]'
                      : 'border border-white/15 bg-white/5 text-white hover:border-lime-400 hover:bg-lime-400 hover:text-zinc-950'
                  }`}
                >
                  <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  <span>{plan.buttonText}</span>
                </button>

                <p className="mt-3 text-center text-xs text-zinc-500">
                  Contact us: 7066968111
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;