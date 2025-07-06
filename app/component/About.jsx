"use client";

import { motion } from "framer-motion";
import {
  FiHeadphones,
  FiShield,
  FiTruck,
  FiSettings,
  FiAward,
} from "react-icons/fi";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] py-28 overflow-hidden"
    >
      {/* Floating 3D spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-100/30 to-orange-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:120px_120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Showroom Image with creative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/shantiaudio1.jpg"
                alt="Shanti Audio Showroom"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />

              {/* Floating product badges */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <FiAward className="text-white" />
                  <span>New Arrivals</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/10 to-orange-600/10 backdrop-blur-sm border border-orange-200/30 shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.3 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-medium mb-4 tracking-wider bg-orange-50 px-4 py-1.5 rounded-full">
                YOUR TRUSTED AUDIO SUPPLIER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Premium Audio
                </span>{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Equipment
                </span>{" "}
                for Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2012, Shanti Audio has been supplying studios,
                broadcasters, and audio professionals with top-tier equipment
                from the world's leading brands. We combine expert knowledge
                with competitive pricing to deliver exceptional value to our
                customers.
              </p>
            </motion.div>

            {/* Retailer Features - Creative cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {[
                {
                  icon: <FiShield className="text-white text-xl" />,
                  title: "Authorized Dealer",
                  description: "Direct partnerships with major brands",
                },
                {
                  icon: <FiTruck className="text-white text-xl" />,
                  title: "Fast Shipping",
                  description: "Same-day dispatch on in-stock items",
                },
                {
                  icon: <FiSettings className="text-white text-xl" />,
                  title: "Tech Support",
                  description: "Pre- and post-sales assistance",
                },
                {
                  icon: <FiHeadphones className="text-white text-xl" />,
                  title: "Demo Units",
                  description: "Try before you buy in our showroom",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-600/10 backdrop-blur-sm rounded-xl border border-orange-200/30" />
                  <div className="relative p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all h-full border border-white">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-md">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Retailer Stats - Modern design */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-14 grid grid-cols-3 gap-2"
            >
              {[
                { value: "12+", label: "Years in Business" },
                { value: "200+", label: "Brands Available" },
                { value: "10K+", label: "Products Shipped" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm font-medium tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
