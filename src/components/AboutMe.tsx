"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

export default function AboutMe() {
  const features = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Expert in React, Next.js, TypeScript with focus on maintainable, scalable architecture"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Proven ability to analyze complex requirements and deliver innovative solutions"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience mentoring junior developers and leading frontend initiatives"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Specialized in Core Web Vitals, SEO optimization, and accessibility standards"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              />

              <div className="relative z-10">
                <motion.p
                  className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I'm <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Bismullah Wafadar
                  </motion.span>,
                  a results-driven Frontend Developer with <span className="text-blue-600 font-medium">3+ years of experience</span>
                  building scalable web applications that serve thousands of users daily.
                </motion.p>

                <motion.p
                  className="text-lg text-slate-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I specialize in modern JavaScript frameworks including
                  <span className="text-blue-600 font-medium"> React, Next.js, TypeScript, and Tailwind CSS</span>,
                  with a proven track record of delivering high-performance applications that improve user engagement by up to 40%.
                </motion.p>

                <motion.p
                  className="text-base text-slate-500 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  My expertise spans the full frontend development lifecycle, from UI/UX implementation to performance optimization
                  and deployment. I've successfully collaborated with cross-functional teams to deliver projects on time and within budget.
                </motion.p>

                <motion.div
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className="text-sm text-blue-800 font-medium relative z-10">
                    🎯 Currently seeking full-time opportunities where I can contribute to innovative projects
                    and grow with a forward-thinking development team.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15 + 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                      }}
                    >
                      <feature.icon size={24} className="text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-slate-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-slate-200/50"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex -space-x-2">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-2 border-white shadow-md"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full border-2 border-white shadow-md"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full border-2 border-white shadow-md"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.span
              className="text-slate-600 font-medium"
              whileHover={{ color: "#3b82f6" }}
            >
              Delivering exceptional user experiences through code
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}