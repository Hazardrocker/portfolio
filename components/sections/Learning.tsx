"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Cloud, Trophy } from "lucide-react";

const Learning = () => {
  const learningPaths = [
    {
      title: "Cloud Architecture & Security",
      icon: Cloud,
      color: "primary",
      topics: [
        "AWS Solutions Architecture",
        "Azure Security & Compliance",
        "Multi-cloud strategies",
        "Cloud-native security patterns",
      ],
      progress: 65,
    },
    {
      title: "Kubernetes & Container Security",
      icon: Code,
      color: "accent",
      topics: [
        "Kubernetes internals & security",
        "Network policies & RBAC",
        "Container vulnerability scanning",
        "RuntimeSecurity for containers",
      ],
      progress: 55,
    },
    {
      title: "Advanced ML for Security",
      icon: Trophy,
      color: "purple",
      topics: [
        "Advanced NLP for threat detection",
        "Anomaly detection algorithms",
        "Time-series analysis for incidents",
        "Reinforcement learning for security",
      ],
      progress: 60,
    },
    {
      title: "DevSecOps & Automation",
      icon: BookOpen,
      color: "orange",
      topics: [
        "Infrastructure as Code security",
        "CI/CD security hardening",
        "Automated compliance checking",
        "Security policy as code",
      ],
      progress: 70,
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
            <span className="gradient-text">Current Learning Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Active areas of study and continuous improvement
          </p>
        </motion.div>

        {/* Learning Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {learningPaths.map((path, index) => {
            const Icon = path.icon;
            const colorMap: Record<string, string> = {
              primary: "border-primary-500/30 text-primary-400",
              accent: "border-accent-500/30 text-accent-400",
              purple: "border-purple-500/30 text-purple-400",
              orange: "border-orange-500/30 text-orange-400",
            };

            const progressColorMap: Record<string, string> = {
              primary: "bg-gradient-to-r from-primary-500 to-primary-400",
              accent: "bg-gradient-to-r from-accent-500 to-accent-400",
              purple: "bg-gradient-to-r from-purple-500 to-purple-400",
              orange: "bg-gradient-to-r from-orange-500 to-orange-400",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass glass-light p-6 rounded-lg border ${colorMap[path.color]} group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={28} className={colorMap[path.color].split(" ")[2]} />
                  <h3 className="text-lg font-bold text-gray-100">
                    {path.title}
                  </h3>
                </div>

                {/* Topics */}
                <div className="space-y-2 mb-6">
                  {path.topics.map((topic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="text-lg">→</span>
                      {topic}
                    </motion.div>
                  ))}
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-400">
                      Learning Progress
                    </span>
                    <span className={`text-sm font-bold ${colorMap[path.color].split(" ")[2]}`}>
                      {path.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${path.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full ${progressColorMap[path.color]} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass glass-dark p-8 rounded-lg border border-accent-500/30"
        >
          <h3 className="text-2xl font-bold text-accent-400 mb-6">
            Learning Resources & Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Online Courses",
                items: ["Udemy", "Pluralsight", "A Cloud Guru", "Linux Academy"],
              },
              {
                title: "Certifications",
                items: ["Microsoft Azure", "AWS", "Linux Foundation", "EC Council"],
              },
              {
                title: "Open Source",
                items: ["GitHub Projects", "Security Tools", "Kubernetes", "OWASP"],
              },
              {
                title: "Community",
                items: [
                  "Security Conferences",
                  "Meetups",
                  "Webinars",
                  "Security Communities",
                ],
              },
            ].map((category, i) => (
              <div key={i}>
                <h4 className="font-semibold text-gray-200 mb-3">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="text-accent-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass glass-light p-8 rounded-lg border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-6">
            2025-2026 Learning Goals
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-purple-300 mb-3">
                Certifications to Achieve
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Azure Administrator (AZ-104)",
                  "Azure Security Engineer (AZ-500)",
                  "AWS Security Specialty",
                  "Kubernetes Administrator (CKA)",
                ].map((cert, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-3">
                Project Goals
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Build 2-3 production ML security systems",
                  "Contribute to major security open source projects",
                  "Develop advanced threat detection platform",
                  "Publish technical blogs & case studies",
                ].map((goal, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
