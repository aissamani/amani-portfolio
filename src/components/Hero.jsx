import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-2 gap-12 items-center py-20 px-8 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 rounded-3xl overflow-hidden">
      
      {/* Blurred floating shapes for soft background effect */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-700/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>

      {/* Text & buttons */}
      <motion.div 
        className="space-y-6 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Amani Aissaoui
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Passionate about coding, AI, and design to build impactful and user-friendly solutions          </p>

        <div className="flex flex-wrap gap-4">
          <a href="/resume.pdf" className="px-6 py-3 rounded-full border border-white/70 hover:bg-white/20 text-white transition backdrop-blur-md">
            View CV
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition backdrop-blur-md">
            Contact Me
          </a>
        </div>

        <div className="flex gap-4 mt-4 text-3xl text-white">
          <a href="https://github.com/aissamani" target="_blank" className="hover:text-gray-200 transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-200 transition"><FaLinkedin /></a>
        </div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        className="flex justify-center md:justify-end z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white/30 shadow-lg">
          <img src="/placeholder-profile.jpg" alt="Amani" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
