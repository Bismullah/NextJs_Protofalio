"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Clock, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { isValidEmail } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Bismullahwafadar5@gmail.com",
      href: "mailto:Bismullahwafadar5@gmail.com",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Professional Inquiry",
      value: "Open to full-time opportunities",
      href: "mailto:Bismullahwafadar5@gmail.com?subject=Job Opportunity",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Afghanistan (Remote Available)",
      href: "#",
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600"
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-slate-800">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Open to new opportunities and exciting projects. Let's discuss how I can contribute to your team's success.
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-playfair">Professional Contact</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm actively seeking new opportunities to contribute my frontend development expertise
                to innovative projects. Whether you're looking for a dedicated team member or have a
                specific project in mind, I'd be happy to discuss how I can add value to your organization.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15 + 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      x: 10,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}
                    className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-xl"
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10 flex items-center gap-4 w-full">
                      <motion.div
                        className={`w-14 h-14 ${colorClasses[info.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 360,
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon size={24} className="text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <motion.h4
                          className="text-slate-800 font-semibold group-hover:text-blue-600 transition-colors duration-300 text-lg"
                          whileHover={{ x: 5 }}
                        >
                          {info.title}
                        </motion.h4>
                        <motion.p
                          className="text-slate-600 text-sm mt-1"
                          whileHover={{ color: "#475569" }}
                        >
                          {info.value}
                        </motion.p>
                      </div>

                      {/* Arrow indicator */}
                      <motion.div
                        className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-blue-600" />
                  <span className="text-slate-800 font-semibold">Response Time</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Professional inquiries answered within 24 hours
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 font-playfair">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-slate-700 font-medium mb-3">Name *</label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-slate-700 font-medium mb-3">Email *</label>
                  <motion.input
                    type="email"
                    className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-slate-700 font-medium mb-3">Subject *</label>
                <motion.input
                  type="text"
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Job Opportunity / Project Discussion"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-slate-700 font-medium mb-3">Message *</label>
                <motion.textarea
                  rows={6}
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                  placeholder="Tell me about the opportunity or project you have in mind..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <Send size={20} />
                </motion.div>
                <span className="relative z-10">Send Message</span>
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
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 font-playfair">
              Ready to Discuss Opportunities?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's explore how my frontend development expertise can contribute to your team's success and project goals.
            </p>
            <motion.a
              href="mailto:Bismullahwafadar5@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              <span>Schedule a Discussion</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}