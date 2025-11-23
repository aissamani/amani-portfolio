import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail, ArrowUpRight, Github, Linkedin, Dribbble } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/amani-aissaoui/",
    color: "hover:bg-[#0077b5] hover:text-white",
    text: "Connect professionally"
  },
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    link: "https://github.com/aissamani",
    color: "hover:bg-[#333] hover:text-white",
    text: "Check my repositories"
  },
  {
    name: "Behance",
    icon: <Dribbble className="w-6 h-6" />, // Lucide doesn't have Behance, using Dribbble or generic
    link: "https://www.behance.net/amaniaissaoui",
    color: "hover:bg-[#1769ff] hover:text-white",
    text: "View design portfolio"
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "amaniaiss24@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-white">
      
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* 1. The Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Opportunities
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Let's work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              together.
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            Have a project in mind? I am currently available for freelance projects and internship opportunities.
          </p>
        </motion.div>

        {/* 2. The Interactive Email Component */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <button
            onClick={handleCopy}
            className="group relative inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 md:px-10 md:py-6 rounded-full shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            <span className="text-lg md:text-xl font-medium">{email}</span>
            
            {/* The Icon Switch (Copy vs Check) */}
            <div className="relative w-6 h-6 ml-2">
              <AnimatePresence mode='wait'>
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 text-green-400"
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 text-gray-400 group-hover:text-white"
                  >
                    <Copy className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tooltip for feedback */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 20 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-lg border border-green-200"
                >
                  Copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* 3. Social Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-gray-50 transition-all duration-300 ${social.color}`}
            >
              <div className="mb-3 p-3 rounded-full bg-white shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                {social.icon}
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white">{social.name}</h3>
              <p className="text-xs text-gray-500 mt-1 group-hover:text-white/80">{social.text}</p>
            </motion.a>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amani Aissaoui. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-purple-600 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-purple-600 cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}