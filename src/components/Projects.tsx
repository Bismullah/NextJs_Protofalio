"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Zap, Shield } from "lucide-react";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  github: string;
  live: string;
  tags: string[];
  features: string[];
  icon: React.ElementType;
  color: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio showcasing professional web development skills",
    longDescription: "Built with Next.js 15, featuring advanced animations, TypeScript integration, and optimized performance. Demonstrates mastery of modern web development practices.",
    github: "https://github.com/Bismullah/NextJs_Protofalio",
    live: "https://next-js-protofalio.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Modern Animations"],
    icon: Sparkles,
    color: "blue"
  },
  {
    title: "IoT LED Controller",
    description: "Innovative web-based IoT solution for smart device control",
    longDescription: "A conceptual full-stack application demonstrating IoT integration with modern web technologies. Features real-time device control and monitoring capabilities.",
    github: "#",
    live: "#",
    tags: ["React", "Arduino", "IoT", "WebSocket"],
    features: ["Real-time Control", "Device Monitoring", "Responsive UI", "Secure Connection"],
    icon: Zap,
    color: "green"
  },
  {
    title: "Enterprise Dashboard",
    description: "Comprehensive business intelligence and analytics platform",
    longDescription: "A sophisticated dashboard solution built for enterprise clients, featuring advanced data visualization, real-time analytics, and comprehensive reporting capabilities.",
    github: "#",
    live: "#",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    features: ["Data Visualization", "Real-time Analytics", "Export Capabilities", "Role-based Access"],
    icon: Shield,
    color: "purple"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:border-blue-300"
  },
  green: {
    bg: "bg-green-600",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:border-green-300"
  },
  purple: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:border-purple-300"
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical expertise and creative problem-solving abilities
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-playfair">
                      {project.title}
                    </h3>
                    <p className={`${colorClasses[project.color as keyof typeof colorClasses].text} font-medium`}>Featured Project</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 border border-slate-200 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-2 h-2 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-full`}></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-300 text-slate-700 border border-slate-200"
                    >
                      <Github size={18} />
                      <span className="font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 ${colorClasses[project.color as keyof typeof colorClasses].bg} hover:opacity-90 rounded-lg transition-all duration-300 text-white font-medium shadow-md`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Visual */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-slate-50 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-200">
                      <div className={`w-24 h-24 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center opacity-80`}>
                        <project.icon size={40} className="text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Bismullah"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}