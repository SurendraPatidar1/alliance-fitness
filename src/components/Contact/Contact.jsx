import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaDumbbell,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

import SectionTitle from '../SectionTitle';
import { GYM_INFO } from '../../utils/constants';

const WHATSAPP_NUMBER = '917066968111';

const fitnessPrograms = [
  'Strength Training',
  'Muscle Building',
  'Weight Management',
  'General Fitness',
  'Functional Fitness',
  'Personal Training',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Strength Training',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      'Hello Alliance Fitness!',
      '',
      'I would like to enquire about gym membership.',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Fitness Goal: ${formData.program}`,
      `Message: ${formData.message || 'Not specified'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'Strength Training',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="LET'S GET STARTED"
          title="YOUR FITNESS"
          highlight="JOURNEY STARTS HERE"
          subtitle="Have questions about membership or training? Connect with Alliance Fitness and take the next step towards your fitness goals."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-xl text-lime-400">
                  <FaDumbbell />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                    Alliance Fitness
                  </p>
                  <h3 className="mt-1 text-xl font-black uppercase text-white">
                    Get In Touch
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM_INFO.address || 'Alliance Fitness')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Our Location</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {GYM_INFO.address || 'Contact us for the gym address'}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Call Us</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      {GYM_INFO.phone || '7066968111'}
                    </p>
                  </div>
                </a>

                {GYM_INFO.email && (
                  <a
                    href={`mailto:${GYM_INFO.email}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">
                      <FaEnvelope />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">Email Us</p>
                      <p className="mt-1 break-all text-sm text-zinc-400">
                        {GYM_INFO.email}
                      </p>
                    </div>
                  </a>
                )}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Ready to take the first step?
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Alliance Fitness! I would like to know more about gym membership.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-lime-400 px-5 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                  <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Map preview */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2">
              <iframe
                title="Alliance Fitness map search"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(GYM_INFO.address || 'Alliance Fitness')}&output=embed`}
                className="h-64 w-full rounded-2xl border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="px-3 py-3 text-xs text-zinc-500">
                Map results depend on the gym address configured in the website.
              </p>
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/10">
                    <FaCheckCircle className="text-4xl text-lime-400" />
                  </div>

                  <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">
                    You're One Step Closer!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                    Your enquiry details have been prepared in WhatsApp.
                    Complete sending the message there so the gym can receive
                    your request.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 rounded-xl border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-lime-400">
                      Membership Enquiry
                    </p>
                    <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                      Let's Build Your
                      <span className="block text-lime-400">Stronger Future.</span>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      Tell us a little about yourself and your fitness goals.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          autoComplete="name"
                          required
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          autoComplete="tel"
                          required
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-program"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                      >
                        Your Fitness Goal *
                      </label>
                      <select
                        id="contact-program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition focus:border-lime-400"
                      >
                        {fitnessPrograms.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                      >
                        Additional Details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals or ask a question..."
                        className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-lime-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-lime-300"
                    >
                      <FaWhatsapp className="text-lg" />
                      Send Enquiry on WhatsApp
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-xs leading-5 text-zinc-500">
                      Your message opens in WhatsApp. You must press Send there
                      to deliver your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;