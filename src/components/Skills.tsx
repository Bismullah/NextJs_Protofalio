"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  Layers,
  GitBranch,
  Monitor,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 }
    ]
  },
  {
    title: "Styling & Design",
    icon: Palette,
    color: "purple",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    color: "green",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "npm/yarn", level: 90 }
    ]
  },
  {
    title: "Emerging Technologies",
    icon: Cpu,
    color: "orange",
    skills: [
      { name: "Arduino/IoT", level: 75 },
      { name: "WordPress", level: 80 },
      { name: "Mobile Dev", level: 70 },
      { name: "Web3", level: 65 }
    ]
  }
];

const technologies = [
  { name: "HTML5", icon: Globe, color: "text-orange-600" },
  { name: "CSS3", icon: Palette, color: "text-blue-600" },
  { name: "JavaScript", icon: Zap, color: "text-yellow-600" },
  { name: "TypeScript", icon: Code2, color: "text-blue-700" },
  { name: "React", icon: Layers, color: "text-cyan-600" },
  { name: "Next.js", icon: Monitor, color: "text-slate-800" },
  { name: "Tailwind", icon: Palette, color: "text-teal-600" },
  { name: "Git", icon: GitBranch, color: "text-orange-700" },
  { name: "Arduino", icon: Cpu, color: "text-green-600" },
  { name: "WordPress", icon: Database, color: "text-blue-800" }
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
    <section id="skills" className="py-24 px-6 md:px-16 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
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
            A comprehensive toolkit built through years of dedicated learning and professional experience
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${colorClasses[category.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-lg font-semibold text-slate-800 group-hover:${colorClasses[category.color as keyof typeof colorClasses].text} transition-colors duration-300`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full ${colorClasses[category.color as keyof typeof colorClasses].progress} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
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
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <tech.icon size={32} className={`${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-slate-700 text-sm font-medium group-hover:text-slate-800 transition-colors duration-300">
                  {tech.name}
                </span>
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
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
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