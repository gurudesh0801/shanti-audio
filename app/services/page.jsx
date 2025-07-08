"use client";

import { motion } from "framer-motion";
import {
  FiMic,
  FiHeadphones,
  FiRadio,
  FiMusic,
  FiSpeaker,
  FiMonitor,
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function page() {
  const featuredServices = [
    {
      icon: <FiMic className="text-3xl" />,
      title: "Live Sound Engineering",
      description:
        "Professional audio solutions for concerts, festivals, and events with our premium equipment and expert engineers.",
      features: [
        "Line array systems for perfect coverage",
        "On-site sound mixing",
        "System tuning and optimization",
      ],
      image: "/live-sound.jpg",
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: "Studio Production",
      description:
        "High-quality recording, mixing, and mastering services in our state-of-the-art studios.",
      features: [
        "Analog and digital recording",
        "Professional mixing/mastering",
        "Vocal production",
      ],
      image: "/studio-production.jpg",
    },
    {
      icon: <FiRadio className="text-3xl" />,
      title: "System Installation",
      description:
        "Custom audio system design and installation for venues, houses of worship, and commercial spaces.",
      features: [
        "Acoustic analysis",
        "Custom system design",
        "Installation & calibration",
      ],
      image: "/system-installation.jpg",
    },
  ];

  const allServices = [
    {
      icon: <FiMusic className="text-2xl" />,
      title: "Event Sound",
      description:
        "Complete audio solutions for concerts, weddings, and corporate events.",
    },
    {
      icon: <FiSpeaker className="text-2xl" />,
      title: "Installations",
      description:
        "Custom audio systems for venues, houses of worship, and more.",
    },
    {
      icon: <FiMonitor className="text-2xl" />,
      title: "Broadcast Audio",
      description:
        "Professional audio for TV, radio, and streaming productions.",
    },
    {
      icon: <FiSettings className="text-2xl" />,
      title: "Equipment Rental",
      description: "High-end audio gear for your productions and events.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/audio-pattern.jpg')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <span className="inline-block text-orange-400 font-medium mb-4 tracking-wider bg-orange-900/30 px-4 py-1.5 rounded-full">
              PROFESSIONAL AUDIO SERVICES
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Sound
              </span>{" "}
              Solutions For Every Need
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive audio services tailored to your specific
              requirements, delivered with technical excellence and creative
              vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services (3-column) */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-500 font-medium mb-4 tracking-wider bg-orange-50 px-4 py-1.5 rounded-full">
              OUR SPECIALTIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core services where we excel with specialized expertise and
              premium equipment.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    Learn more
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Services (4-column) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-400 font-medium mb-4 tracking-wider bg-gray-800 px-4 py-1.5 rounded-full">
              COMPLETE OFFERINGS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All Our <span className="text-orange-400">Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive audio solutions for every need, from small
              gatherings to large productions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-orange-500/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-orange-500/20 transition-shadow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className="inline-flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors">
                  Details
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 transition-all">
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-500 font-medium mb-4 tracking-wider bg-orange-50 px-4 py-1.5 rounded-full">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-orange-500">Clients</span> Say
            </h2>
          </motion.div>

          {/* Testimonial cards would go here */}
        </div>
      </section>
    </div>
  );
}
