"use client";

import { motion } from "framer-motion";
import { FiPlay, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function PortfolioShowcase() {
  const portfolioItems = [
    {
      id: 1,
      title: "Music Festival",
      category: "Live Sound",
      description:
        "Full audio production for 3-day outdoor festival with 20,000+ attendees",
      image: "/image5.jpg",
      videoLink: "https://example.com/videos/festival",
      detailsLink: "/portfolio/festival",
    },
    {
      id: 2,
      title: "Political Speech",
      category: "Corporate AV",
      description:
        "Audio solutions for main stage and breakout rooms at international tech conference",
      image: "/image18.jpg",
      videoLink: "https://example.com/videos/conference",
      detailsLink: "/portfolio/conference",
    },
    {
      id: 3,
      title: "Live Event",
      category: "Event Handle",
      description:
        "Custom sound system design and installation for premium event venue",
      image: "/image15.jpg",
      videoLink: "https://example.com/videos/jazzclub",
      detailsLink: "/portfolio/jazzclub",
    },
    {
      id: 3,
      title: "Live Event",
      category: "Event Handle",
      description:
        "Custom sound system design and installation for premium event venue",
      image: "/image23.jpg",
      videoLink: "https://example.com/videos/jazzclub",
      detailsLink: "/portfolio/jazzclub",
    },
    {
      id: 3,
      title: "Live Event",
      category: "Event Handle",
      description:
        "Custom sound system design and installation for premium event venue",
      image: "/image16.jpg",
      videoLink: "https://example.com/videos/jazzclub",
      detailsLink: "/portfolio/jazzclub",
    },
    {
      id: 3,
      title: "Live Event",
      category: "Event Handle",
      description:
        "Custom sound system design and installation for premium event venue",
      image: "/image13.jpg",
      videoLink: "https://example.com/videos/jazzclub",
      detailsLink: "/portfolio/jazzclub",
    },
  ];

  const categories = [
    "All Projects",
    "Live Sound",
    "Corporate AV",
    "Permanent Installation",
    "Special Events",
  ];

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-orange-200/20"
            style={{
              width: `${Math.random() * 600 + 300}px`,
              height: `${Math.random() * 600 + 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.01, 0.05, 0.01],
            }}
            transition={{
              duration: Math.random() * 40 + 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Our</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-orange-400/40 to-orange-500/40 -z-0"></span>
            </span>{" "}
            <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
            Explore our successful projects and events where we delivered
            exceptional audio experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
            >
              {/* Portfolio Item Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Portfolio Item Content */}
              <div className="p-6">
                <span className="inline-block text-orange-500 text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.detailsLink}
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  View case study
                  <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
              View More Projects
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              We've completed 200+ successful events and installations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
