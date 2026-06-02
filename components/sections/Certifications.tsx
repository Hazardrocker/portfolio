"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Mastering Data Structures and Algorithm using C and C++",
      provider: "Udemy",
      year: "2025",
      status: "completed",
      icon: "📊",
      description: "Comprehensive course on DSA fundamentals",
    },
    {
      title: "Completion of C Training",
      provider: "Spoken Tutorial Project at IIT Bombay",
      year: "2024",
      status: "completed",
      icon: "💻",
      description: "Advanced C programming and system-level coding",
    },
    {
      title: "Cloud Fundamentals (AWS)",
      provider: "Amazon Web Services",
      year: "2025",
      status: "completed",
      icon: "☁️",
      description: "AWS core services and cloud architecture",
    },
    {
      title: "Oracle Java Certificate",
      provider: "Oracle University",
      year: "2025",
      status: "completed",
      icon: "☕",
      description: "Java programming and OOP principles",
    },
    {
      title: "Network Defense Essentials",
      provider: "EC Council",
      year: "2025",
      status: "in-progress",
      icon: "🛡️",
      description: "Network security and threat defense",
    },
  ];

  const futureCertifications = [
    {
      title: "AZ-900",
      provider: "Microsoft Azure",
      description: "Azure Fundamentals",
      color: "blue",
    },
    {
      title: "SC-900",
      provider: "Microsoft",
      description: "Security, Compliance, and Identity Fundamentals",
      color: "purple",
    },
    {
      title: "AZ-500",
      provider: "Microsoft Azure",
      description: "Azure Security Engineer Associate",
      color: "red",
    },
    {
      title: "CKA",
      provider: "Linux Foundation",
      description: "Certified Kubernetes Administrator",
      color: "orange",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Completed Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-2">
            <CheckCircle size={28} className="text-accent-500" />
            Completed Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass glass-light p-6 rounded-lg border border-accent-500/30 group"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <div className="mb-3">
                  <h4 className="font-bold text-gray-100 mb-1 line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-accent-400 font-semibold">
                    {cert.provider}
                  </p>
                </div>
                <p className="text-xs text-gray-400 mb-3">{cert.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                  <span className="text-xs text-gray-500">{cert.year}</span>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-accent-500/20 text-accent-400">
                    Completed
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-2">
            <Zap size={28} className="text-primary-400" />
            Upcoming Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureCertifications.map((cert, index) => {
              const colorMap: Record<string, string> = {
                blue: "border-blue-500/30 bg-blue-500/5",
                purple: "border-purple-500/30 bg-purple-500/5",
                red: "border-red-500/30 bg-red-500/5",
                orange: "border-orange-500/30 bg-orange-500/5",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`glass p-6 rounded-lg border ${colorMap[cert.color] || colorMap.blue} group cursor-pointer transition-all`}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-100 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-400 mb-3">
                      {cert.provider}
                    </p>
                    <p className="text-sm text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
                    <span className="text-xs font-medium text-gray-400">
                      Planned for 2025-2026
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certification Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass glass-dark p-8 rounded-lg border border-primary-500/30"
        >
          <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
            <Award size={24} />
            Certification Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-primary-300 mb-2">
                Cloud Certifications
              </h4>
              <p className="text-sm mb-3">
                Azure fundamentals (AZ-900, SC-900) and advanced certification
                (AZ-500) to establish cloud security expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-accent-300 mb-2">
                Infrastructure Certifications
              </h4>
              <p className="text-sm">
                Kubernetes (CKA) and DevOps certifications to complement cloud
                security skills with infrastructure automation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
