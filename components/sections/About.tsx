"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const About = () => {
  const highlights = [
    "Passionate about cloud security and DevSecOps practices",
    "Building intelligent security systems with AI/ML",
    "Expertise in infrastructure automation and reliability",
    "Strong foundation in cybersecurity fundamentals",
    "Active learner pursuing industry certifications",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From student to security engineer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-3">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    I&apos;m a B.E CSE (Cybersecurity) student at Sri Eshwar College of
                  Engineering with a passion for cloud infrastructure, security
                  automation, and intelligent threat detection systems. My
                  journey in cybersecurity began with a curiosity about how
                  systems fail and how to build them to be resilient.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-3">
                  My Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I envision myself as a Cloud Security Engineer who bridges the
                  gap between development and security operations. By combining
                  DevSecOps practices with advanced ML-based threat detection,
                  I&apos;m working to create cloud systems that are not just secure,
                  but intelligently resilient.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-3">
                  What Drives Me
                </h3>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check
                        size={20}
                        className="text-accent-500 flex-shrink-0"
                      />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass glass-light p-6 rounded-lg border border-primary-500/30">
              <h3 className="text-lg font-semibold text-primary-400 mb-4">
                Current Focus
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Cloud Platforms:</strong> AWS & Azure infrastructure
                </p>
                <p>
                  <strong>Security:</strong> Application & cloud security
                  hardening
                </p>
                <p>
                  <strong>DevOps:</strong> Kubernetes, Docker, CI/CD pipelines
                </p>
                <p>
                  <strong>AI/ML:</strong> Security detection & threat analysis
                </p>
              </div>
            </div>

            <div className="glass glass-light p-6 rounded-lg border border-accent-500/30">
              <h3 className="text-lg font-semibold text-accent-500 mb-4">
                Academic Profile
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Degree:</strong> B.E CSE (Cybersecurity)
                </p>
                <p>
                  <strong>CGPA:</strong> 8.07 (till 2nd Semester)
                </p>
                <p>
                  <strong>Institution:</strong> Sri Eshwar College of Engineering
                </p>
                <p>
                  <strong>Period:</strong> 2024-2028
                </p>
              </div>
            </div>

            <div className="glass glass-light p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">
                {[
                  "Cloud Architecture",
                  "Network Security",
                  "Threat Detection",
                  "Infrastructure as Code",
                  "Secure Development",
                  "Vulnerability Assessment",
                  "Incident Response",
                  "Security Automation",
                ].map((comp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-primary-400">▸</span>
                    {comp}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
