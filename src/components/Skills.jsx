import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "React & JS", type: "CS" },
  { title: "Python & AI", type: "CS" },
  { title: "Figma & Prototyping", type: "UX" },
  { title: "UX Research", type: "UX" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="card flex items-center justify-center h-28 font-semibold text-primary text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {s.title}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
