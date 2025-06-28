"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

type HeroProps = {
  name: string;
  title: string;
};

export default function Hero({ name, title }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2563eb" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-playfair text-slate-800"
        >
          Hello, I'm{" "}
          <span className="text-blue-600">{name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-slate-600 max-w-4xl leading-relaxed font-light"
        >
          {title}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
          >
            <span className="relative z-10">Explore My Work</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300"
          >
            <Download size={20} />
            <span>Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/Bismullah", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:Bismullahwafadar5@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full border-2 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}