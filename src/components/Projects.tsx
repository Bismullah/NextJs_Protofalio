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
  gradient: string;
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
    gradient: "from-blue-500 to-purple-600"
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
    gradient: "from-green-500 to-blue-600"
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
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
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
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair">
                      {project.title}
                    </h3>
                    <p className="text-blue-300 font-medium">Featured Project</p>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6 border border-white/10">
                  <p className="text-lg text-white/90 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-white/70">{feature}</span>
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
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-white/80 hover:text-white border border-white/20"
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
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-blue-500/25 rounded-lg transition-all duration-300 text-white font-medium`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Visual */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="relative glass-effect rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className={`w-24 h-24 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center opacity-80`}>
                        <project.icon size={40} className="text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
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