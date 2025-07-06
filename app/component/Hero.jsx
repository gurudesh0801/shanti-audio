"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function ShantiAudioHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/soundbg.jpeg"
          alt="Shanti Audio Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Floating Audio Elements */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-1/4 w-16 h-16 rounded-full border border-white/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-orange-400/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 text-white leading-tight"
        >
          <span className="font-medium">SHANTI</span>
          <motion.span
            className="text-orange-400 ml-2"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AUDIO
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto px-2"
        >
          Precision sound engineering for the most demanding audio
          professionals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-white font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            Explore Gear <FiArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/30 text-white hover:bg-white/10 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium backdrop-blur-sm text-sm sm:text-base"
          >
            Book Consultation
          </motion.button>
        </motion.div>

        {/* Audio Visual Indicator */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="flex justify-center gap-[2px] h-8 px-2">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-[2px] sm:w-1 bg-orange-400 rounded-full"
                animate={{
                  height: [
                    `${Math.random() * 10 + 5}px`,
                    `${Math.random() * 20 + 10}px`,
                    `${Math.random() * 15 + 5}px`,
                  ],
                }}
                transition={{
                  duration: 1 + Math.random(),
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
    </section>
  );
}
