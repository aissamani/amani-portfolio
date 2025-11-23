import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Brain, Code2, Sparkles } from "lucide-react";

// 1. Data with Icons
const skills = [
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive user experiences with Figma & Adobe XD. Wireframing and prototyping for real-world applications.",
    icon: <Palette className="w-6 h-6 text-purple-500" />,
    color: "group-hover:bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "AI & ML",
    desc: "Developing smart solutions using Python, scikit-learn, and TensorFlow to solve complex problems.",
    icon: <Brain className="w-6 h-6 text-emerald-500" />,
    color: "group-hover:bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Web Development",
    desc: "Building responsive, modern web apps with React, Tailwind CSS, and Vite.",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    color: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
];

// 2. Interactive "Spotlight" Card Component
const SpotlightCard = ({ skill, index }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl overflow-hidden ${skill.border}`}
    >
      {/* The Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.04), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 transition-colors duration-300 bg-gray-50 ${skill.color}`}>
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {skill.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Blobs for "Life" */}
      <div className="absolute top-20 left-[-10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-20 right-[-10%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-600 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>Passion & Purpose</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight"
          >
            Bridging Logic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Creativity</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            I am a <span className="font-semibold text-gray-900">Computer Science Student</span> and <span className="font-semibold text-gray-900">UI/UX Designer</span>. 
            I combine technical knowledge with artistic intuition to build engaging, intelligent, 
            and user-friendly digital experiences. Driven by curiosity, I strive to make technology 
            <span className="italic text-gray-900"> simple yet beautiful.</span>
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SpotlightCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}