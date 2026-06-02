"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manoj.d2024csecs@sece.ac.in",
      href: "mailto:manoj.d2024csecs@sece.ac.in",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9543956750",
      href: "tel:+919543956750",
      color: "accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manoj-bragatheeshwar",
      href: "https://linkedin.com/in/manoj-bragatheeshwar",
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Hazardrocker",
      href: "https://github.com/Hazardrocker",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "orange",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations
            about cloud security and DevSecOps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colorMap: Record<string, Record<string, string>> = {
                primary: "border-primary-500/30 hover:border-primary-500/60",
                accent: "border-accent-500/30 hover:border-accent-500/60",
                blue: "border-blue-500/30 hover:border-blue-500/60",
                purple: "border-purple-500/30 hover:border-purple-500/60",
                orange: "border-orange-500/30 hover:border-orange-500/60",
              };

              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`glass glass-light p-4 rounded-lg border ${colorMap[info.color]} transition-all group flex items-start gap-4`}
                >
                  <Icon size={24} className="text-primary-400 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-sm text-gray-300 break-all group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass glass-dark p-8 rounded-lg border border-primary-500/30">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5 }}
                    className="text-6xl mb-4"
                  >
                    ✓
                  </motion.div>
                  <h4 className="text-2xl font-bold text-accent-400 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-dark-800/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:border-primary-500/50 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-dark-800/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:border-primary-500/50 focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-dark-800/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:border-primary-500/50 focus:outline-none transition-all"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-dark-800/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:border-primary-500/50 focus:outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-lg font-semibold text-dark-950 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 disabled:opacity-50 transition-all flex items-center justify-center gap-2 glow-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass glass-light p-8 rounded-lg border border-accent-500/30 text-center"
        >
          <MessageSquare size={32} className="mx-auto mb-4 text-accent-400" />
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Let&apos;s Talk About Your Needs
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re looking to hire, collaborate on a project, or just want
            to discuss cloud security and DevSecOps, I&apos;m always interested in
            having conversations with like-minded professionals.
          </p>
          <motion.a
            href="mailto:manoj.d2024csecs@sece.ac.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-400 glass glass-light border border-primary-500/50 hover:text-primary-300 transition-all"
          >
            <Mail size={20} />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
