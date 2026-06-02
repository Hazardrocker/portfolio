"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Hazardrocker",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manoj-bragatheeshwar",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:manoj.d2024csecs@sece.ac.in",
      label: "Email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-700/30 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text-primary mb-2">
              MANOJ.D
            </h3>
            <p className="text-gray-400 text-sm">
              Cloud Security & DevSecOps Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-200 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-200 mb-3">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg glass glass-light text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Manoj D. All rights reserved. | Crafted with ✨ by
            Manoj
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg glass glass-light text-primary-400 hover:text-primary-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
