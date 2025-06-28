"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Bismullahwafadar5@gmail.com",
      href: "mailto:Bismullahwafadar5@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      value: "Available for freelance",
      href: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Afghanistan",
      href: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair gradient-text">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-playfair">Get In Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-white/70 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-blue-400" />
                  <span className="text-white font-semibold">Response Time</span>
                </div>
                <p className="text-white/80 text-sm">
                  I typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-playfair">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-white/80 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 rounded-xl text-white font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              From concept to deployment, I'll help you build exceptional web experiences that engage users and drive results.
            </p>
            <motion.a
              href="mailto:Bismullahwafadar5@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 rounded-full text-white font-semibold transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}