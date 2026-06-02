"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Download, Mail } from "lucide-react";
import { Cloud, Shield, Zap } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <div className="glass glass-light px-4 py-2 rounded-full inline-block">
              <p className="text-sm font-medium text-primary-400">
                🚀 Cloud Security Engineer • DevSecOps Specialist
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Building{" "}
            <span className="gradient-text">Resilient, Secure,</span>
            <br />
            <span className="gradient-text-accent">Intelligent Cloud Systems</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            B.E CSE (Cybersecurity) student specializing in cloud infrastructure,
            AI-powered security, and DevOps automation. Transforming complex
            security challenges into elegant, scalable solutions.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
          >
            {[
              {
                icon: Shield,
                label: "Security Focused",
              },
              {
                icon: Cloud,
                label: "Cloud Native",
              },
              {
                icon: Zap,
                label: "Full Stack",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass glass-light p-3 rounded-lg">
                  <Icon size={24} className="mx-auto mb-2 text-primary-400" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-dark-950 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 transition-all glow-primary"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-primary-400 glass glass-light border border-primary-500/50 hover:border-primary-400 flex items-center justify-center gap-2 transition-all"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center mb-10"
          >
            {[
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
            ].map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg glass glass-light text-primary-400 hover:text-primary-300 hover:bg-primary-500/10"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <ChevronDown size={24} className="text-primary-400 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
