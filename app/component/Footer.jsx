"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-100 py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={0}
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-extrabold text-orange-500 tracking-tight">
            Shanti Audio
          </h1>
          <p className="mt-3 text-sm text-gray-300 max-w-xs">
            Portfolio of a sound artist crafting unforgettable live audio
            experiences across India.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Clients
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Stay Tuned
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get updates on new events and tech setups I work with.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm text-white rounded-l outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-semibold rounded-r transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={3}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-400">Social</h3>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="#" className="hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaSpotify />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Shanti Audio Built with 🎧 passion.
        <p>
          Design & Develop by{" "}
          <Link href="https//www.powerhousetechsolutions.com">
            <span className="text-orange-400">Powerhouse Tech Solutions</span>
          </Link>
        </p>
      </motion.div>
    </footer>
  );
}
