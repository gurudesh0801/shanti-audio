"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiVolume2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function ShantiAudioHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/soundbg.jpeg" // Professional audio control room
          alt="Shanti Audio Control Room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating Audio Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border border-orange-400/20"
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
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-orange-400/30"
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
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Service Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-block p-4 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-400/20">
            <FiVolume2 className="text-2xl text-orange-400" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-white"
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
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Premium sound engineering services for events, broadcasts, and studio
          productions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#ea580c" }} // Darker orange on hover
              whileTap={{ scale: 0.98 }}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-colors"
            >
              Our Services <FiArrowRight />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-orange-400/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-colors"
            >
              Book Consultation
            </motion.button>
          </Link>
        </motion.div>

        {/* Orange Sound Wave Visualizer */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="flex justify-center gap-1 h-8">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-orange-400 to-orange-500 rounded-full"
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

      {/* Floating Sound Engineer */}
      <motion.div
        className="absolute bottom-20 right-20 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="relative w-32 h-32">
          <Image
            src="/sound-engineer.png"
            alt="Professional Sound Engineer"
            fill
            className="object-contain drop-shadow-lg"
          />
          <div className="absolute inset-0 bg-orange-400/10 rounded-full backdrop-blur-sm -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
}
