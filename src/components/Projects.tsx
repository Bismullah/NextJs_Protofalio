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
    title: "Professional Portfolio",
    description: "Modern, performance-optimized portfolio built with Next.js 15 and TypeScript",
    longDescription: "A comprehensive portfolio website showcasing advanced frontend development skills. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring server-side rendering, optimized performance (95+ Lighthouse score), and modern animations.",
    github: "https://github.com/Bismullah/NextJs_Protofalio",
    live: "https://next-js-protofalio.vercel.app",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: ["95+ Lighthouse Score", "SEO Optimized", "Mobile-First Design", "Smooth Animations"],
    icon: Sparkles,
    color: "blue"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern payment integration",
    longDescription: "A complete e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
    github: "https://github.com/Bismullah/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
    features: ["Payment Integration", "Admin Dashboard", "User Authentication", "Inventory Management"],
    icon: Shield,
    color: "green"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription: "A sophisticated task management application built with React and Firebase, featuring real-time collaboration, drag-and-drop functionality, team management, and progress tracking.",
    github: "https://github.com/Bismullah/task-manager",
    live: "https://taskmanager-pro.vercel.app",
    tags: ["React", "Firebase", "Material-UI", "Real-time DB", "PWA"],
    features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Analytics"],
    icon: Zap,
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
    <section id="projects" className="py-24 px-6 md:px-16 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world applications demonstrating technical expertise, problem-solving skills, and business impact
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
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-playfair">
                      {project.title}
                    </h3>
                    <p className={`${colorClasses[project.color as keyof typeof colorClasses].text} font-medium`}>Production Ready</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50">
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 bg-gradient-to-r from-slate-100 to-blue-50 rounded-full text-sm text-slate-700 border border-slate-200 font-mono shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-full`}></div>
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
                      className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 rounded-xl transition-all duration-300 text-slate-700 border border-slate-200 shadow-md hover:shadow-lg"
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
                      className={`flex items-center gap-2 px-5 py-3 ${colorClasses[project.color as keyof typeof colorClasses].bg} hover:opacity-90 rounded-xl transition-all duration-300 text-white font-medium shadow-lg`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50">
                    <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-200/50 shadow-inner">
                      <motion.div 
                        className={`w-24 h-24 bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses].bg.replace('bg-', 'from-')} to-blue-600 rounded-full flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <project.icon size={40} className="text-white" />
                      </motion.div>
                      
                      <div className="absolute top-4 left-4 right-4">
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
