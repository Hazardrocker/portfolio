"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Zap,
  Code,
  Wrench,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "primary",
      skills: [
        { name: "AWS (EC2, Elastic Beanstalk, S3)", level: 85 },
        { name: "Azure Fundamentals", level: 75 },
        { name: "Cloud Architecture", level: 80 },
        { name: "Infrastructure as Code", level: 70 },
      ],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "accent",
      skills: [
        { name: "Network Defense", level: 80 },
        { name: "Threat Detection & Analysis", level: 85 },
        { name: "Vulnerability Assessment", level: 75 },
        { name: "Secure Coding", level: 80 },
      ],
    },
    {
      title: "DevOps & Automation",
      icon: Zap,
      color: "purple",
      skills: [
        { name: "Docker & Containerization", level: 80 },
        { name: "Kubernetes Orchestration", level: 70 },
        { name: "CI/CD Pipelines (GitHub Actions)", level: 75 },
        { name: "Infrastructure Automation", level: 78 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "C & C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "Bash Scripting", level: 75 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: TrendingUp,
      color: "orange",
      skills: [
        { name: "ML-based Threat Detection", level: 85 },
        { name: "NLP (DistilBERT)", level: 80 },
        { name: "Transformer Models", level: 75 },
        { name: "Security Analytics", level: 78 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "green",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Linux (Ubuntu, CentOS)", level: 80 },
        { name: "VS Code & IDEs", level: 90 },
        { name: "Monitoring & Logging Tools", level: 75 },
      ],
    },
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      primary: "text-primary-400 border-primary-500/30",
      accent: "text-accent-500 border-accent-500/30",
      purple: "text-purple-400 border-purple-500/30",
      blue: "text-blue-400 border-blue-500/30",
      orange: "text-orange-400 border-orange-500/30",
      green: "text-green-400 border-green-500/30",
    };
    return colors[color];
  };

  const getProgressColor = (color: string) => {
    const colors: Record<string, string> = {
      primary: "bg-gradient-to-r from-primary-500 to-primary-400",
      accent: "bg-gradient-to-r from-accent-500 to-accent-400",
      purple: "bg-gradient-to-r from-purple-500 to-purple-400",
      blue: "bg-gradient-to-r from-blue-500 to-blue-400",
      orange: "bg-gradient-to-r from-orange-500 to-orange-400",
      green: "bg-gradient-to-r from-green-500 to-green-400",
    };
    return colors[color];
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects, certifications,
            and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass glass-light p-6 rounded-lg border ${getColorClass(
                  category.color
                )} transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={28} className={getColorClass(category.color).split(" ")[0]} />
                  <h3 className="text-lg font-bold text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </p>
                        <span className="text-xs text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          className={`h-full ${getProgressColor(
                            category.color
                          )} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass glass-dark p-8 rounded-lg border border-primary-500/30"
        >
          <h3 className="text-2xl font-bold text-primary-400 mb-4">
            📚 Certifications in Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "AZ-900", status: "Planned" },
              { name: "SC-900", status: "Planned" },
              { name: "AZ-500", status: "Planned" },
              { name: "CKA", status: "Planned" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-dark-800/50 border border-primary-500/20 text-center"
              >
                <p className="font-semibold text-primary-300">{cert.name}</p>
                <p className="text-xs text-gray-400 mt-1">{cert.status}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
