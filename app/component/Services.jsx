"use client";

import { motion } from "framer-motion";
import {
  FiVolume2,
  FiSpeaker,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";

export default function ProfessionalGearShowcase() {
  const equipmentList = [
    {
      name: "Line Array Systems",
      description: "High-output systems for 5,000+ capacity venues",
      image: "/line-array-system.jpg",
      features: [
        "120dB continuous SPL",
        "40Hz-18kHz frequency range",
        "Weather-resistant enclosures",
      ],
    },
    {
      name: "Subwoofer Arrays",
      description: "Ground-shaking bass for outdoor festivals",
      image: "/subwoofer-array.jpg",
      features: [
        'Dual 18" drivers',
        "Cardioid configuration",
        "5000W RMS power",
      ],
    },
    {
      name: "Power Amplifiers",
      description: "Tour-grade amplification systems",
      image: "/power-amps.jpg",
      features: [
        "DSP-controlled",
        "8-channel capability",
        "Overload protection",
      ],
    },
  ];

  return (
    <section id="equipment" className="relative py-24 overflow-hidden">
      {/* Floating audio waves decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-orange-200/30"
            style={{
              width: `${Math.random() * 800 + 400}px`,
              height: `${Math.random() * 800 + 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.02, 0.08, 0.02],
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
        {/* Section Header with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FiVolume2 className="text-orange-500 text-xl" />
            <span className="text-sm font-medium tracking-wider text-orange-500">
              PROFESSIONAL GEAR
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Premium Audio</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-orange-400/40 to-orange-500/40 -z-0"></span>
            </span>{" "}
            <span className="text-orange-500">Equipment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
            Cutting-edge sound systems designed for flawless performance at any
            scale
          </p>
        </motion.div>

        {/* Equipment Showcase - Creative Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Decorative element */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>

              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                {/* Equipment Image with hover effect */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
                </div>

                {/* Equipment Details */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg">
                      <FiSpeaker className="text-orange-500 text-xl" />
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
                    View details{" "}
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative CTA */}
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
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-400/30 transition-all"
            >
              Request Full Equipment Catalog
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              Complete specs, pricing, and technical drawings available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
