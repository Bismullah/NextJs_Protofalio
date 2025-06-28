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
    <footer className="bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
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
                  <h3 className="text-2xl font-bold font-playfair text-white mb-4">
                    Bismullah Wafadar
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
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
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 border border-slate-600 hover:border-slate-500"
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
                        className="text-slate-400 hover:text-white transition-all duration-300 block"
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
                  <p className="text-slate-400 text-sm">
                    Ready to work together?
                  </p>
                  <motion.a
                    href="mailto:Bismullahwafadar5@gmail.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-600 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm flex items-center gap-2"
              >
                &copy; {new Date().getFullYear()} Bismullah Wafadar. Made with 
                <Heart size={16} className="text-red-500" />
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
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 border border-slate-600 hover:border-slate-500"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-blue-600"></div>
      </div>
    </footer>
  );
}