"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiVolume2 } from "react-icons/fi";

export default function CaseStudies() {
  const events = [
    {
      title: "National Political Summit",
      description: "High-clarity audio setup for political leaders and press.",
      image: "/political-summit.jpg",
      logo: "/client-logo-political.png",
      category: "Political Event",
      stats: [
        { value: "10", label: "Mics" },
        { value: "5000+", label: "Attendees" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
    {
      title: "Indie Music Night",
      description: "Power-packed concert featuring indie artists.",
      image: "/indie-music.jpg",
      logo: "/client-logo-music.png",
      category: "Musical Event",
      stats: [
        { value: "15kW", label: "Power" },
        { value: "8", label: "Performers" },
        { value: "20", label: "Speakers" },
      ],
    },
    {
      title: "Cultural Fest Parade",
      description:
        "Festival-wide audio coverage for dance, drama, and speeches.",
      image: "/cultural-fest.jpg",
      logo: "/client-logo-festival.png",
      category: "Festival Event",
      stats: [
        { value: "3", label: "Zones" },
        { value: "25", label: "Speakers" },
        { value: "12hr", label: "Coverage" },
      ],
    },
    {
      title: "Startup Product Launch",
      description: "Live event audio + visual setup for a tech product reveal.",
      image: "/product-launch.jpg",
      logo: "/client-logo-live.png",
      category: "Live Event",
      stats: [
        { value: "100+", label: "Guests" },
        { value: "4", label: "Screens" },
        { value: "6", label: "Mics" },
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#faf5f0]">
      {/* Floating organic shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-300/40"
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(20px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border border-orange-200 mb-6"
          >
            <FiVolume2 className="text-orange-700 text-xl" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Events <span className="text-orange-700">We've Powered</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional audio solutions for memorable experiences
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-md transition-all hover:border-orange-200">
                {/* Image */}
                <div className="relative h-40">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Client logo */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white p-1 shadow-sm border border-orange-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={event.logo}
                        alt="Client Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {event.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ x: 2 }}
                      className="hidden group-hover:block"
                    >
                      <FiArrowRight className="text-orange-600" />
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between mt-4 pt-4 border-t border-orange-100">
                    {event.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <p className="text-orange-700 font-bold">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600 uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-colors shadow-sm hover:shadow-md">
            View All Case Studies
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
