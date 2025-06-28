"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

export default function AboutMe() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed, accessibility, and user experience"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                My name is <span className="text-white font-semibold gradient-text">Bismullah Wafadar</span>, 
                a passionate frontend developer from Afghanistan with a deep commitment to crafting exceptional digital experiences.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I specialize in building responsive, performant, and accessible web applications using cutting-edge technologies like 
                <span className="text-blue-300 font-medium"> React, Next.js, TypeScript, and Tailwind CSS</span>.
              </p>

              <p className="text-base text-white/70 leading-relaxed">
                My mission extends beyond code – I'm dedicated to building impactful digital products and sharing knowledge 
                with aspiring developers, especially in underrepresented communities. Currently expanding my expertise in 
                mobile development and IoT technologies.
              </p>
            </div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
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
          <div className="inline-flex items-center gap-4 glass-effect rounded-full px-8 py-4 border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-white/80 font-medium">Building the future, one line of code at a time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}