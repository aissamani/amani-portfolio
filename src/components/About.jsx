import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "UI/UX Design", desc: "Crafting intuitive user experiences with Figma & Adobe XD. Wireframing and prototyping for real-world applications." },
  { title: "AI & ML", desc: "Developing smart solutions using Python, scikit-learn, and TensorFlow to solve complex problems." },
  { title: "Web Development", desc: "Building responsive, modern web apps with React, Tailwind CSS, and Vite." },
];

export default function About() {
  return (
    <section id="about" className="py-32 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h2>
      <p className="text-center text-gray-700 mb-12 leading-relaxed text-lg">
        I am a passionate Computer Science Engineering student and UI/UX designer. 
        I combine technical knowledge and creativity to build engaging, intelligent, 
        and user-friendly digital experiences. My work is driven by curiosity, problem-solving, 
        and the desire to make technology simple and beautiful.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-3xl shadow-xl bg-white/40 backdrop-blur-md border border-white/30 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
