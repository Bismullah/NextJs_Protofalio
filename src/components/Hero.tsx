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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50 dark:from-purple-950 dark:via-neutral-900 dark:to-teal-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-teal-300 dark:from-purple-500 dark:to-teal-400 rounded-full blur-3xl opacity-40"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-200 to-purple-300 dark:from-teal-400 dark:to-purple-500 rounded-full blur-3xl opacity-30"
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-teal-200 dark:from-purple-400 dark:to-teal-300 rounded-full blur-3xl opacity-25"
        />
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
          <motion.span
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-medium text-blue-700 border border-blue-200 shadow-lg backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ✨ Available for Full-Time Opportunities
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-playfair text-slate-800 dark:text-neutral-100"
        >
          Hello, I'm{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {name}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-slate-600 dark:text-neutral-300 max-w-4xl leading-relaxed font-light"
        >
          {title}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Explore My Work</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -3,
              borderColor: "#14b8a6"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-slate-300 dark:border-neutral-600 text-slate-700 dark:text-neutral-300 font-semibold rounded-xl hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 backdrop-blur-sm bg-white/80 dark:bg-neutral-800/80"
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-white/90 text-slate-700 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg backdrop-blur-sm border border-slate-200"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Download size={20} />
            </motion.div>
            <span>Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/Bismullah", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/bismillah-wafadar", label: "LinkedIn" },
            { icon: Mail, href: "mailto:Bismullahwafadar5@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/90 rounded-full border-2 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm group"
              aria-label={label}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={24} />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="p-2 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-slate-200"
          >
            <ChevronDown size={32} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}