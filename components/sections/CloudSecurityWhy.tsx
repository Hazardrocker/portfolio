"use client";

import { motion } from "framer-motion";
import { Heart, Target, Zap, Lightbulb } from "lucide-react";

const CloudSecurityWhy = () => {
  const reasons = [
    {
      icon: Target,
      title: "Protecting Critical Infrastructure",
      description:
        "Cloud systems power the backbone of modern organizations. Securing them means protecting billions of users and critical data globally.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Solving Complex Security Challenges",
      description:
        "Cloud security isn't just about firewalls—it's about designing resilient systems that detect, respond, and recover from threats intelligently.",
      color: "accent",
    },
    {
      icon: Heart,
      title: "Passionate About Technology",
      description:
        "I'm driven by the challenge of understanding how systems work, where they fail, and how to build them better and more securely.",
      color: "purple",
    },
    {
      icon: Lightbulb,
      title: "Innovation Through AI & ML",
      description:
        "The future of security is intelligent and automated. I'm excited to leverage AI/ML to create next-generation threat detection systems.",
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
            <span className="gradient-text">Why Cloud Security?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My passion for building secure, resilient, and intelligent cloud systems
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colorMap: Record<string, Record<string, string>> = {
              primary: "border-primary-500/30 bg-primary-500/5",
              accent: "border-accent-500/30 bg-accent-500/5",
              purple: "border-purple-500/30 bg-purple-500/5",
              orange: "border-orange-500/30 bg-orange-500/5",
            };

            const iconColorMap: Record<string, string> = {
              primary: "text-primary-400",
              accent: "text-accent-400",
              purple: "text-purple-400",
              orange: "text-orange-400",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass glass-light p-8 rounded-lg border ${
                  colorMap[reason.color]
                } group transition-all`}
              >
                <div
                  className={`p-3 rounded-lg inline-block mb-4 ${colorMap[reason.color]}`}
                >
                  <Icon
                    size={24}
                    className={`${iconColorMap[reason.color]} group-hover:scale-110 transition-transform`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass glass-dark p-8 rounded-lg border border-primary-500/30 mb-12"
        >
          <h3 className="text-2xl font-bold text-primary-400 mb-4">My Philosophy</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I believe that <strong>security is not a feature, it&apos;s a foundation</strong>.
              Cloud systems should be designed with security at their core, not as an
              afterthought. Every architectural decision, every line of code, and every
              deployment must prioritize both security and resilience.
            </p>
            <p>
              The most effective security systems are those that combine <strong>human
              intelligence with machine learning</strong>. By automating threat detection
              and response through AI, we free security teams to focus on strategic thinking
              and architecture. This is where my passion lies—at the intersection of
              automation, intelligence, and security.
            </p>
            <p>
              As I grow in this field, I&apos;m committed to staying ahead of evolving threats,
              contributing to open-source security projects, and helping organizations
              build cloud systems that are not just secure, but <strong>intelligently
              resilient</strong>.
            </p>
          </div>
        </motion.div>

        {/* Career Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Next 2 Years",
              icon: "🚀",
              goals: [
                "Complete cloud security certifications",
                "Build production ML security systems",
                "Contribute to security open source",
                "Master Kubernetes security",
              ],
            },
            {
              title: "5-Year Vision",
              icon: "🎯",
              goals: [
                "Lead security architecture projects",
                "Specialize in cloud-native security",
                "Mentor junior security engineers",
                "Research advanced threat detection",
              ],
            },
            {
              title: "Ultimate Goal",
              icon: "⭐",
              goals: [
                "Build intelligent, self-healing security systems",
                "Contribute to industry security standards",
                "Help organizations achieve zero-trust architecture",
                "Advance the field of AI-powered cybersecurity",
              ],
            },
          ].map((vision, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass glass-light p-6 rounded-lg border border-gradient group"
            >
              <p className="text-4xl mb-3">{vision.icon}</p>
              <h4 className="text-lg font-bold text-gray-100 mb-4">
                {vision.title}
              </h4>
              <ul className="space-y-2">
                {vision.goals.map((goal, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-primary-400 mt-1 flex-shrink-0">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSecurityWhy;
