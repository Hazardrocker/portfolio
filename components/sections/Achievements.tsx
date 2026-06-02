"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp } from "lucide-react";

const Achievements = () => {
  const codingProfiles = [
    {
      name: "SkillRack",
      problems: 800,
      percentage: 95,
      color: "from-primary-500 to-primary-400",
      icon: "🎯",
      description: "Advanced problem solver across data structures and algorithms",
    },
    {
      name: "LeetCode",
      problems: 70,
      percentage: 65,
      color: "from-accent-500 to-accent-400",
      icon: "💻",
      description: "Strong fundamentals in coding interviews and competitions",
    },
    {
      name: "CodeChef",
      problems: 60,
      percentage: 60,
      color: "from-purple-500 to-purple-400",
      icon: "🚀",
      description: "Competitive programming and algorithmic challenges",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            <span className="gradient-text">Coding Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Problem-solving proficiency across multiple platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass glass-dark p-8 rounded-lg border border-gray-700/50 group-hover:border-primary-500/50 transition-all h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{profile.icon}</div>
                  <Code2 size={24} className="text-gray-600 group-hover:text-primary-400 transition-colors" />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-300">
                      Problems Solved
                    </span>
                    <span className="text-2xl font-bold gradient-text">
                      {profile.problems}+
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${profile.color}`}
                    />
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-primary-400">
                      {profile.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${profile.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.15 }}
                      className={`h-full bg-gradient-to-r ${profile.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass glass-light p-8 rounded-lg border border-accent-500/30"
        >
          <h3 className="text-2xl font-bold text-accent-400 mb-8 flex items-center gap-2">
            <TrendingUp size={28} />
            Overall Statistics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Total Problems Solved",
                value: "930+",
                trend: "↑ 50+ this year",
              },
              {
                label: "Average Completion Rate",
                value: "73%",
                trend: "Growing continuously",
              },
              {
                label: "Platforms Active",
                value: "3+",
                trend: "Expanding expertise",
              },
              {
                label: "Problem Categories",
                value: "50+",
                trend: "Full spectrum coverage",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 glass rounded-lg border border-gray-700/50"
              >
                <p className="text-3xl font-bold gradient-text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-gray-300 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400">{stat.trend}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass glass-dark p-8 rounded-lg border border-purple-500/30"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Problem-Solving Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            {[
              {
                title: "Data Structures",
                desc: "Expert in arrays, linked lists, trees, graphs, and advanced structures",
              },
              {
                title: "Algorithms",
                desc: "Proficient in sorting, searching, dynamic programming, and greedy approaches",
              },
              {
                title: "Optimization",
                desc: "Focus on time complexity, space optimization, and scalable solutions",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-purple-300 mb-2">
                  {item.title}
                </p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
