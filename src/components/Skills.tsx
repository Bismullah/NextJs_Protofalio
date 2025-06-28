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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-green-500 to-emerald-500",
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
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Arduino/IoT", level: 75 },
      { name: "WordPress", level: 80 },
      { name: "Mobile Dev", level: 70 },
      { name: "Web3", level: 65 }
    ]
  }
];

const technologies = [
  { name: "HTML5", icon: Globe, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "JavaScript", icon: Zap, color: "text-yellow-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-600" },
  { name: "React", icon: Layers, color: "text-cyan-500" },
  { name: "Next.js", icon: Monitor, color: "text-white" },
  { name: "Tailwind", icon: Palette, color: "text-teal-500" },
  { name: "Git", icon: GitBranch, color: "text-orange-600" },
  { name: "Arduino", icon: Cpu, color: "text-green-500" },
  { name: "WordPress", icon: Database, color: "text-blue-700" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
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
              className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
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
          <h3 className="text-2xl font-bold text-white mb-8 font-playfair">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group flex flex-col items-center gap-2 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <tech.icon size={32} className={`${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
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
                className="text-3xl md:text-4xl font-bold gradient-text font-playfair mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}