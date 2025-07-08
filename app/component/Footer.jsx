"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-100 pt-20 pb-10 px-6 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/5 to-amber-500/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/5 to-amber-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Shanti Audio
              </h1>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Crafting immersive sound experiences for events, studios, and
              installations across India.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhoneAlt className="text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-orange-500" />
                <span>contact@shantiaudio.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>123 Sound Street, Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Equipment", href: "/equipment" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to get updates on our latest projects and audio tech
              innovations.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
              Connect With Us
            </h3>
            <p className="text-gray-400">
              Follow us for behind-the-scenes content and audio tech tips.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
                { icon: <FaSpotify />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-orange-500 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={`Follow on ${social.icon.type.displayName}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Shanti Audio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p>
              Crafted by{" "}
              <Link
                href="https://powerhousetechsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-amber-400 transition-colors"
              >
                Powerhouse Tech Solutions
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
