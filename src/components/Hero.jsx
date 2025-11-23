import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

// --- IMPORTANT FOR YOUR LOCAL SETUP ---
// 1. Uncomment the line below on your computer:
 import meImg from '../assets/placeholder-profile.jpg'; 

// 2. Delete this placeholder line below when working locally:

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gray-50  md:pt-32">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT SIDE --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 text-purple-600 text-xs font-medium shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            CS Student & Creative Thinker
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Hi, I'm Amani <motion.span 
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block origin-bottom-right"
            >👋</motion.span>
            <br />
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">smart</span> & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500"> beautiful</span> things.
          </h1>

          {/* Bio */}
          <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-md">
            I’m a Computer Science Engineering student exploring the intersection of <strong>AI</strong> and <strong>UI/UX Design</strong>. 
            I might not know everything yet, but I love solving problems and turning code into reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              See My Projects
            </motion.a>
            
            {/* 3. FIXED RESUME LINK (Rename your PDF file in the public folder to 'resume.pdf') */}
            <motion.a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-white text-gray-900 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-5 text-gray-400">
            <a href="https://github.com/aissamani" className="hover:text-gray-900 transition-colors transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/amani-aissaoui/" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:amaniaiss24@gmail.com" className="hover:text-purple-600 transition-colors transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: YOUR PHOTO --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Floating Background Circle */}
          <div className="absolute w-64 h-64 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          
          {/* YOUR PHOTO CONTAINER */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-2 bg-white shadow-2xl border border-gray-100"
          >
            {/* 4. USE THE VARIABLE HERE */}
            <img 
              src={meImg} 
              alt="Amani Aissaoui" 
              className="w-full h-full object-cover rounded-full" 
            />
            
            {/* Floating Badge 1 */}
            <div className="absolute -right-2 top-8 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-slow">
              <span className="text-lg">🎨</span>
              <span className="text-[10px] font-bold text-gray-700">UI Designer</span>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -left-2 bottom-8 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-slow animation-delay-2000">
              <span className="text-lg">💻</span>
              <span className="text-[10px] font-bold text-gray-700">Coder</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
