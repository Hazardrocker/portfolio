"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Lock,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ML-Based Web Application Firewall",
      category: "AI Security | Threat Detection",
      description:
        "Intelligent WAF using DistilBERT transformer model to detect and block malicious web requests in real-time.",
      icon: Zap,
      color: "primary",
      highlights: [
        "SQL Injection Detection",
        "Cross-Site Scripting (XSS) Prevention",
        "Real-Time Threat Monitoring",
        "Security Dashboard",
      ],
      problem:
        "Web applications face evolving attack vectors that traditional rule-based firewalls struggle to detect, especially novel attack patterns.",
      solution:
        "Built an intelligent ML-based firewall using DistilBERT, a lightweight transformer model, to analyze incoming traffic and classify requests as malicious or benign in real-time.",
      architecture: [
        "DistilBERT Transformer Model",
        "Real-time Request Classification",
        "Threat Monitoring Dashboard",
        "Alert & Blocking System",
      ],
      techStack: [
        "Python",
        "DistilBERT",
        "Hugging Face",
        "TensorFlow",
        "Flask",
        "React",
      ],
      impact:
        "99%+ detection accuracy for SQL Injection and XSS attacks with minimal false positives.",
      metrics: [
        { label: "Detection Accuracy", value: "99%+" },
        { label: "Response Time", value: "<100ms" },
        { label: "False Positives", value: "<1%" },
        { label: "Threats Blocked", value: "Real-time" },
      ],
    },
    {
      title: "Cloud Resilience Platform",
      category: "Cloud Reliability | DevOps",
      description:
        "Automated platform for monitoring, detecting failures, and orchestrating recovery in cloud environments.",
      icon: Shield,
      color: "accent",
      highlights: [
        "Continuous Health Monitoring",
        "Automated Failure Detection",
        "Automated Recovery Actions",
        "Analytics Dashboard",
      ],
      problem:
        "Cloud applications require constant monitoring to detect failures early and minimize downtime, which is complex when managing multiple services.",
      solution:
        "Developed a comprehensive platform that continuously monitors system health, automatically detects failures, and orchestrates recovery actions to maintain high availability.",
      architecture: [
        "Health Monitoring System",
        "Failure Detection Engine",
        "Automated Recovery Orchestration",
        "Real-time Analytics Dashboard",
        "Incident Management",
      ],
      techStack: [
        "AWS",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Terraform",
        "Python",
      ],
      impact:
        "99.95% uptime with automated recovery reducing MTTR by 80%.",
      metrics: [
        { label: "Uptime SLA", value: "99.95%" },
        { label: "MTTR Reduction", value: "80%" },
        { label: "Detection Speed", value: "<1min" },
        { label: "Recovery Time", value: "<5min" },
      ],
    },
    {
      title: "Secure Delete Data Sanitization",
      category: "Data Security | System Utilities",
      description:
        "Advanced tool for permanent, irrecoverable data deletion on HDDs and SSDs using military-grade sanitization standards.",
      icon: Lock,
      color: "purple",
      highlights: [
        "DoD 5220.22-M Standard",
        "NIST 800-88 Compliance",
        "SSD Wear Leveling",
        "Verification Logging",
      ],
      problem:
        "Simply deleting files doesn't permanently remove data. Advanced recovery tools can retrieve sensitive information from both HDDs and SSDs, posing security risks.",
      solution:
        "Engineered a sophisticated data sanitization tool implementing military-grade erasure standards with special handling for SSD wear-leveling and cryptographic key destruction.",
      architecture: [
        "Multi-pass Overwrite Engine",
        "NIST 800-88 Algorithm Suite",
        "Cryptographic Key Destruction",
        "SSD-aware Sanitization",
        "Verification & Logging",
      ],
      techStack: [
        "C/C++",
        "NIST Standards",
        "DoD 5220.22-M",
        "Cryptography",
        "System APIs",
      ],
      impact:
        "Ensures irrecoverable data deletion meeting government security standards.",
      metrics: [
        { label: "Erasure Passes", value: "7-35" },
        { label: "Standards", value: "DoD/NIST" },
        { label: "Coverage", value: "100%" },
        { label: "Recovery Risk", value: "0%" },
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming security challenges into intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colorMap: Record<string, Record<string, string>> = {
              primary: {
                border: "border-primary-500/30",
                text: "text-primary-400",
                bg: "bg-primary-500/10",
              },
              accent: {
                border: "border-accent-500/30",
                text: "text-accent-400",
                bg: "bg-accent-500/10",
              },
              purple: {
                border: "border-purple-500/30",
                text: "text-purple-400",
                bg: "bg-purple-500/10",
              },
            };

            const colors = colorMap[project.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass glass-dark p-8 rounded-lg border ${colors.border} overflow-hidden group relative`}
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${colors.bg}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`p-3 rounded-lg ${colors.bg} flex-shrink-0`}
                      >
                        <Icon size={28} className={colors.text} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-100 mb-1">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium ${colors.text}`}>
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Problem & Solution */}
                    <div className="space-y-4">
                      <div className="glass p-4 rounded-lg border border-gray-700/50">
                        <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center gap-2">
                          <Target size={16} className="text-orange-400" />
                          Problem
                        </h4>
                        <p className="text-sm text-gray-400">
                          {project.problem}
                        </p>
                      </div>

                      <div className="glass p-4 rounded-lg border border-gray-700/50">
                        <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center gap-2">
                          <Zap size={16} className="text-yellow-400" />
                          Solution
                        </h4>
                        <p className="text-sm text-gray-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architecture & Tech Stack */}
                    <div className="space-y-4">
                      <div className="glass p-4 rounded-lg border border-gray-700/50">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">
                          Architecture Components
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.architecture.map((arch, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                            >
                              {arch}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="glass p-4 rounded-lg border border-gray-700/50">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 p-4 glass rounded-lg border border-gray-700/50">
                    <h4 className="text-sm font-semibold text-gray-200 mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className={`${colors.text} mt-0.5`}>✓</span>
                          <span className="text-sm text-gray-400">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Metrics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-4 glass rounded-lg border border-gray-700/50">
                      <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center gap-2">
                        <BarChart3 size={16} className={colors.text} />
                        Security Impact
                      </h4>
                      <p className="text-sm text-gray-400">{project.impact}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-3 glass rounded-lg border border-gray-700/50 text-center"
                        >
                          <p className={`text-lg font-bold ${colors.text}`}>
                            {metric.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Hazardrocker"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glass-light border border-primary-500/50 text-primary-300 hover:text-primary-200 font-semibold transition-all"
          >
            View All Projects on GitHub
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
