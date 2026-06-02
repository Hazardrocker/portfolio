"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E CSE (Cybersecurity)",
      institution: "Sri Eshwar College of Engineering",
      period: "2024-2028",
      location: "India",
      cgpa: "8.07 (till 2nd Semester)",
      achievements: [
        "Specialization in Cybersecurity",
        "Focus on Cloud Security & DevOps",
        "Active in Technical Clubs",
        "Competitive Programming Participant",
      ],
      highlights:
        "Pursuing specialized degree in cybersecurity with focus on cloud infrastructure and secure development practices.",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "KKN Matric Higher Secondary School",
      period: "2022-2024",
      location: "India",
      cgpa: "84%",
      achievements: [
        "Science Stream",
        "Strong foundation in Physics, Chemistry, Mathematics",
        "Participated in Science Exhibitions",
        "Excellent academic performance",
      ],
      highlights:
        "Developed strong analytical and problem-solving skills during higher secondary education.",
    },
    {
      degree: "Secondary Education (SSLC)",
      institution: "KKN Matric Higher Secondary School",
      period: "2021-2022",
      location: "India",
      cgpa: "90.6%",
      achievements: [
        "Top performer in academics",
        "Excellent in Mathematics and Science",
        "School merit holder",
        "Foundation for advanced studies",
      ],
      highlights:
        "Exceptional performance with strong foundation in core subjects, particularly mathematics and science.",
    },
  ];

  return (
    <section id="education" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Academic journey and continuous growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full lg:w-auto">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`glass glass-light p-6 rounded-lg border ${
                      index === 0
                        ? "border-primary-500/30"
                        : index === 1
                          ? "border-accent-500/30"
                          : "border-purple-500/30"
                    } transition-all`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap
                        size={24}
                        className={`flex-shrink-0 ${
                          index === 0
                            ? "text-primary-400"
                            : index === 1
                              ? "text-accent-400"
                              : "text-purple-400"
                        }`}
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-100">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Period & CGPA */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs font-semibold">
                          PERIOD
                        </p>
                        <p className="text-gray-300 font-medium">{edu.period}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold">
                          PERFORMANCE
                        </p>
                        <p className="text-accent-400 font-medium">
                          {edu.cgpa}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {edu.highlights}
                    </p>

                    {/* Achievements */}
                    <div>
                      <p className="text-xs font-semibold text-gray-400 mb-2">
                        HIGHLIGHTS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot for timeline */}
                <div className="hidden lg:flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 rounded-full border-4 ${
                      index === 0
                        ? "border-primary-500 bg-primary-500/20"
                        : index === 1
                          ? "border-accent-500 bg-accent-500/20"
                          : "border-purple-500 bg-purple-500/20"
                    } flex items-center justify-center`}
                  >
                    <BookOpen size={14} className="text-gray-300" />
                  </motion.div>
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass glass-dark p-8 rounded-lg border border-gradient gradient-text-primary"
        >
          <h3 className="text-2xl font-bold text-primary-400 mb-4">
            Educational Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            {[
              {
                title: "Core Cybersecurity",
                items: [
                  "Network Security",
                  "Cryptography",
                  "Access Control",
                  "Threat Analysis",
                ],
              },
              {
                title: "Cloud & DevOps",
                items: [
                  "Cloud Architecture",
                  "Infrastructure Automation",
                  "Container Orchestration",
                  "CI/CD Pipelines",
                ],
              },
              {
                title: "Development & Systems",
                items: [
                  "Secure Coding",
                  "System Administration",
                  "Network Protocols",
                  "Database Security",
                ],
              },
            ].map((area, i) => (
              <div key={i}>
                <h4 className="font-semibold text-gray-100 mb-3">
                  {area.title}
                </h4>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-primary-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
