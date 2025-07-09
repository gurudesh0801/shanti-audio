"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiMusic,
  FiHeadphones,
  FiMic,
  FiVolume2,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", href: "/", icon: <FiVolume2 /> },
    { name: "Services", href: "/services", icon: <FiHeadphones /> },
    { name: "Portfolio", href: "/portfolio", icon: <FiMusic /> },
    { name: "Contact", href: "/contact", icon: <FiVolume2 /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-[99] transition-colors duration-300 ${
        scrolled
          ? "bg-[#f9f7f5] text-gray-800 shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold flex items-center space-x-2"
            >
              {/* Logo Image */}
              <Image
                src="/logo.png"
                alt="Shanti Audio Logo"
                width={120}
                height={100}
                className={`rounded ${scrolled ? "invert" : ""}`}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-6"
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md transition duration-300 group ${
                    scrolled
                      ? "hover:bg-[#FF9B45] hover:bg-opacity-20"
                      : "hover:bg-[#D5451B] hover:bg-opacity-30"
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      scrolled ? "text-[#D5451B]" : "text-[#FF9B45]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="group-hover:text-inherit">{item.name}</span>
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              <button
                className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "bg-gradient-to-r from-[#D5451B] to-[#FF9B45] text-white"
                    : "bg-[#D5451B] hover:bg-[#FF9B45] text-white"
                }`}
              >
                Get a Quote
              </button>
            </motion.li>
          </motion.ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden mt-3 rounded-lg overflow-hidden ${
              scrolled ? "bg-white/90 text-gray-800" : "bg-black/90 text-white"
            }`}
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-1 pb-4"
            >
              {navItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200 ${
                      scrolled
                        ? "hover:bg-[#FF9B45] hover:bg-opacity-20"
                        : "hover:bg-[#D5451B] hover:bg-opacity-30"
                    }`}
                  >
                    <span
                      className={`mr-3 ${
                        scrolled ? "text-[#D5451B]" : "text-[#FF9B45]"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="mt-2 px-4">
                <button
                  className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    scrolled
                      ? "bg-gradient-to-r from-[#D5451B] to-[#FF9B45] text-white"
                      : "bg-[#D5451B] hover:bg-[#FF9B45] text-white"
                  }`}
                >
                  Get a Quote
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
