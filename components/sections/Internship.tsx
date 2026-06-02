"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Target, CheckCircle } from "lucide-react";

const Internship = () => {
  const internships = [
    {
      company: "Elevate Labs",
      position: "Cybersecurity Intern",
      duration: "2 Months",
      period: "2024",
      description:
        "Enhanced cloud and network security infrastructure through advanced threat detection and vulnerability assessment.",
      achievements: [
        {
          title: "Security Implementation",
          description:
            "Implemented secure authentication mechanisms and protocols for enhanced access control",
          metrics: "Multi-factor authentication, OAuth 2.0",
        },
        {
          title: "Vulnerability Assessment",
          description:
            "Conducted comprehensive vulnerability assessments across cloud and network infrastructure",
          metrics: "Identified 15+ critical vulnerabilities",
        },
        {
          title: "Threat Monitoring",
          description:
            "Developed and deployed systems to monitor potential cyber threats in real-time",
          metrics: "24/7 threat detection coverage",
        },
        {
          title: "Phishing Detection Research",
          description:
            "Researched and developed ML-based phishing detection methods and URL classification systems",
          metrics: "95%+ detection accuracy",
        },
        {
          title: "Security Hardening",
          description:
            "Implemented security hardening tasks across applications and infrastructure",
          metrics: "Reduced attack surface by 40%",
        },
        {
          title: "Documentation & Reporting",
          description:
            "Created detailed security reports with findings, recommendations, and mitigation strategies",
          metrics: "Comprehensive security audit reports",
        },
      ],
      skills: [
        "Cloud Security",
        "Network Defense",
        "Vulnerability Assessment",
        "ML-based Threat Detection",
        "Security Hardening",
        "Incident Response",
      ],
      impact:
        "Directly contributed to reducing security incidents and strengthening the organization's cloud and network security posture.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-world experience in cybersecurity and cloud infrastructure
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass glass-dark p-8 rounded-lg border border-primary-500/30"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={24} className="text-primary-400" />
                    <h3 className="text-2xl font-bold text-gray-100">
                      {internship.position}
                    </h3>
                  </div>
                  <p className="text-lg text-primary-300 font-semibold">
                    {internship.company}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {internship.duration} • {internship.period}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {internship.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {internship.skills.length > 3 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300">
                      +{internship.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                {internship.description}
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                {internship.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass p-4 rounded-lg border border-gray-700/50 group hover:border-primary-500/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle
                        size={18}
                        className="text-accent-500 flex-shrink-0 mt-0.5"
                      />
                      <h4 className="font-semibold text-gray-100 text-sm">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-accent-400 font-medium">
                      {achievement.metrics}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Impact */}
              <div className="p-4 glass rounded-lg border border-accent-500/30 bg-accent-500/5">
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-accent-400 mb-1">
                      Impact & Outcomes
                    </h4>
                    <p className="text-sm text-gray-300">
                      {internship.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internship Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass glass-light p-8 rounded-lg border border-purple-500/30"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Security Expertise",
                desc: "Deepened understanding of cloud and network security best practices",
              },
              {
                title: "Practical Skills",
                desc: "Hands-on experience with vulnerability assessment and threat detection",
              },
              {
                title: "Team Collaboration",
                desc: "Worked effectively in a professional security team environment",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-semibold text-gray-100 mb-2">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
