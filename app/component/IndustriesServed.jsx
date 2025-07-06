"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiMusic,
  FiCalendar,
  FiMic,
  FiFilm,
  FiArrowRight,
} from "react-icons/fi";

export default function IndustriesServed() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const industries = [
    {
      name: "Festivals & Religious Events",
      description:
        "High-power sound systems for Holi, Ganesh Chaturthi, and other large gatherings",
      icon: <FiCalendar className="text-orange-400 text-2xl" />,
    },
    {
      name: "Live Shows & Events",
      description: "Elegant audio solutions for Live shows and events",
      icon: <FiMusic className="text-orange-400 text-2xl" />,
    },
    {
      name: "Corporate Events",
      description:
        "Clear, professional audio for conferences and product launches",
      icon: <FiMic className="text-orange-400 text-2xl" />,
    },
    {
      name: "Entertainment Industry",
      description: "Tour-grade equipment for concerts and film productions",
      icon: <FiFilm className="text-orange-400 text-2xl" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Sound Wave Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 h-1 bg-orange-400"
            style={{
              left: `${i * 5}%`,
              width: "4%",
              height: `${Math.random() * 100}%`,
              opacity: 0.3,
              transform: `scaleY(${Math.random() * 3})`,
              transformOrigin: "bottom",
              animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Floating Audio Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-orange-400/20"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div className="relative z-10 px-6 max-w-6xl py-20" style={{ y }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 inline-block"
          >
            <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-2xl font-light tracking-widest text-white">
                SA
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6 text-white"
          >
            <span className="font-medium">EVENTS</span>
            <motion.span
              className="text-orange-400 ml-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              WE POWER
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Professional audio solutions for every type of gathering
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/30 transition-all shadow-lg hover:shadow-xl">
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-400/10 p-2 rounded-full border border-orange-400/20">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-white/80 mb-4">{industry.description}</p>

                  <button className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center gap-1 transition-colors">
                    View Solutions{" "}
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Audio Visualizer */}
        <motion.div
          className="mt-20 mx-auto max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="flex justify-center gap-1 h-12">
            {[...Array(21)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-orange-400 rounded-full"
                animate={{
                  height: [
                    `${Math.random() * 20 + 10}px`,
                    `${Math.random() * 40 + 20}px`,
                    `${Math.random() * 20 + 10}px`,
                  ],
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Add some sound equipment silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10">
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-gradient-to-t from-orange-400 to-transparent clip-path-speaker"></div>
        <div className="absolute bottom-0 right-20 w-60 h-60 bg-gradient-to-t from-orange-400 to-transparent clip-path-mixer"></div>
      </div>

      <style jsx>{`
        .clip-path-speaker {
          clip-path: polygon(0% 100%, 30% 0%, 70% 0%, 100% 100%);
        }
        .clip-path-mixer {
          clip-path: polygon(
            0% 100%,
            10% 0%,
            30% 20%,
            50% 0%,
            70% 20%,
            90% 0%,
            100% 100%
          );
        }
        @keyframes pulse {
          0% {
            transform: scaleY(0.5);
            opacity: 0.2;
          }
          100% {
            transform: scaleY(1.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
