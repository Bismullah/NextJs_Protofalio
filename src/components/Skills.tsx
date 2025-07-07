"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Zap,
  Layers,
  GitBranch,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 }
    ]
  },
  {
    title: "Styling & UI/UX",
    icon: Palette,
    color: "purple",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS3 & Flexbox/Grid", level: 92 },
      { name: "Sass/SCSS", level: 88 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    color: "green",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel & Netlify", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Webpack & Vite", level: 82 }
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "orange",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Firebase", level: 80 }
    ]
  }
];

const technologies = [
  { name: "React.js", icon: Layers, color: "text-cyan-600" },
  { name: "Next.js", icon: Monitor, color: "text-slate-800" },
  { name: "TypeScript", icon: Code2, color: "text-blue-700" },
  { name: "JavaScript", icon: Zap, color: "text-yellow-600" },
  { name: "Tailwind CSS", icon: Palette, color: "text-teal-600" },
  { name: "Node.js", icon: Database, color: "text-green-600" },
  { name: "Git", icon: GitBranch, color: "text-orange-700" },
  { name: "MongoDB", icon: Database, color: "text-green-700" },
  { name: "Vercel", icon: Globe, color: "text-slate-600" },
  { name: "Firebase", icon: Zap, color: "text-orange-600" }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    progress: "bg-blue-600"
  },
  purple: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    progress: "bg-purple-600"
  },
  green: {
    bg: "bg-green-600",
    text: "text-green-600",
    progress: "bg-green-600"
  },
  orange: {
    bg: "bg-orange-600",
    text: "text-orange-600",
    progress: "bg-orange-600"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-slate-800">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across modern web development technologies and best practices
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 rounded-2xl"
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`w-12 h-12 ${colorClasses[category.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon size={24} className="text-white" />
                  </motion.div>
                  <motion.h3
                    className={`text-lg font-semibold text-slate-800 group-hover:${colorClasses[category.color as keyof typeof colorClasses].text} transition-colors duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    {category.title}
                  </motion.h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + skillIndex * 0.1 + 0.3
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <motion.span
                          className="text-slate-700 font-medium"
                          whileHover={{ color: "#3b82f6", x: 5 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span
                          className="text-slate-500 text-sm font-mono bg-slate-100 px-2 py-1 rounded"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative">
                        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0, opacity: 0.7 }}
                            whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`h-full ${colorClasses[category.color as keyof typeof colorClasses].progress} rounded-full relative overflow-hidden`}
                            whileHover={{ scale: 1.02 }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Skill level indicator */}
                        <motion.div
                          className="absolute top-0 bg-white rounded-full w-3 h-3 border-2 border-current shadow-md"
                          style={{
                            left: `${skill.level}%`,
                            transform: "translateX(-50%)",
                            color: colorClasses[category.color as keyof typeof colorClasses].progress.replace('bg-', '#')
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + skillIndex * 0.1 + 1.5
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 font-playfair">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                }}
                className="group flex flex-col items-center gap-3 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <tech.icon
                      size={36}
                      className={`${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    />
                  </motion.div>

                  <motion.span
                    className="text-slate-700 text-sm font-medium group-hover:text-slate-800 transition-colors duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-200 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "25+", label: "Projects Delivered" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "98%", label: "Code Quality Score" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-blue-600 font-playfair mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}