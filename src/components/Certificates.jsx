import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, CheckCircle2 } from "lucide-react";

// Enhanced Data Structure
const certificates = [
  {
    name: "Introduction to data and Data Science",
    issuer: "365 Data Science",
    date: "2025",
    skills: ["Data Strategy", "AI Fundamentals", "EDA"],
    link: "https://learn.365datascience.com/c/3a956f5788/",
    image: "/public/A4 - 1 (3).png", // Ensure this path matches your folder
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2023",
    skills: ["Neural Networks", "TensorFlow", "CNNs"],
    link: "#",
    image: "/cert2.jpg", 
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    name: "Machine Learning Certificate",
    issuer: "Stanford Online",
    date: "2023",
    skills: ["Supervised Learning", "Regression", "Python"],
    link: "#",
    image: "/cert3.jpg", 
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {/* 1. Top Image Section with Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {/* The 'Holographic' Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 z-20 translate-x-[-100%] group-hover:animate-shine pointer-events-none" />
        
        <img 
          src={cert.image} 
          alt={cert.name} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-600 flex items-center gap-1 shadow-sm">
          <Calendar size={12} /> {cert.date}
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Issuer Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cert.bg} ${cert.color}`}>
            <Award size={18} />
          </div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {cert.issuer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
          {cert.name}
        </h3>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-medium uppercase tracking-wide rounded-md border border-gray-100">
              {skill}
            </span>
          ))}
        </div>

        {/* Footer / Button */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
             <CheckCircle2 size={14} />
             <span>Verified</span>
          </div>
          
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors"
          >
            View Credential <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Certifications & <span className="text-purple-600">Awards</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning is at the core of my journey. Here are the milestones I've achieved in Data Science and AI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}