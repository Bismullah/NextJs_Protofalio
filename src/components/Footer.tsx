"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Bismullah", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Bismullahwafadar5@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold font-playfair gradient-text mb-4">
                    Bismullah Wafadar
                  </h3>
                  <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                    Frontend Developer passionate about creating exceptional digital experiences 
                    and building the future of web technology, one line of code at a time.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "#hero" },
                    { name: "About", href: "#about" },
                    { name: "Projects", href: "#projects" },
                    { name: "Skills", href: "#skills" }
                  ].map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/60 hover:text-white transition-all duration-300 block"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <p className="text-white/60 text-sm">
                    Ready to work together?
                  </p>
                  <motion.a
                    href="mailto:Bismullahwafadar5@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm flex items-center gap-2"
              >
                &copy; {new Date().getFullYear()} Bismullah Wafadar. Made with 
                <Heart size={16} className="text-red-500 animate-pulse" />
                in Afghanistan
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
    </footer>
  );
}