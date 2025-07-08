"use client";

import { motion } from "framer-motion";
import {
  FiVolume2,
  FiMic,
  FiCheckCircle,
  FiArrowRight,
  FiCalendar,
} from "react-icons/fi";
import Image from "next/image";

export default function ProfessionalServicesShowcase() {
  const serviceList = [
    {
      name: "Live Event Sound",
      description: "Professional audio solutions for concerts and festivals",
      image: "/image12.jpg",
      features: [
        "Line array systems for perfect coverage",
        "Expert sound engineering team",
        "Complete setup and teardown",
      ],
    },
    {
      name: "Corporate AV",
      description: "Flawless audio for conferences and presentations",
      image: "/image23.jpg",
      features: [
        "Clear speech reinforcement",
        "Wireless microphone systems",
        "Live streaming audio support",
      ],
    },
    {
      name: "Musical Events",
      description: "Professional recording and sound services",
      image: "/image5.jpg",
      features: [
        "High-end studio equipment",
        "Experienced audio engineers",
        "Post-production services",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-gray-50"
    >
      {/* Floating audio waves decoration - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-orange-200/20"
            style={{
              width: `${Math.random() * 800 + 400}px`,
              height: `${Math.random() * 800 + 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.01, 0.05, 0.01],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with updated content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FiMic className="text-orange-500 text-xl" />
            <span className="text-sm font-medium tracking-wider text-orange-500">
              PROFESSIONAL SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Premium Sound</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-orange-400/40 to-orange-500/40 -z-0"></span>
            </span>{" "}
            <span className="text-orange-500">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
            Comprehensive audio services tailored to your event's specific needs
          </p>
        </motion.div>

        {/* Services Showcase - Updated Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Decorative element - more subtle */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-400/5 to-orange-600/5 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>

              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                {/* Service Image with hover effect */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg">
                      {index === 0 && (
                        <FiVolume2 className="text-orange-500 text-xl" />
                      )}
                      {index === 1 && (
                        <FiMic className="text-orange-500 text-xl" />
                      )}
                      {index === 2 && (
                        <FiCheckCircle className="text-orange-500 text-xl" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    Learn more{" "}
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Updated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-400/30 transition-all flex items-center gap-3"
            >
              <FiCalendar className="text-white" />
              Book a Consultation
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              Let's discuss how we can make your event sound perfect
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
