import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "UI/UX Landing Page",
    description: "A modern landing page concept designed with clean grids, bold typography, and soft gradients.",
    img: "/project1.jpg",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive data dashboard using React + Charts. Focused on clarity, accessibility, and UX.",
    img: "/project2.jpg",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "AI Chatbot Mini-Project",
    description: "Simple AI chatbot interface that demonstrates UI logic, clean components, and micro-interactions.",
    img: "/project3.jpg",
    github: "https://github.com/yourusername/project3"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {projects.map((p, index) => (
          <div
            key={index}
            className="fade-card backdrop-blur-xl bg-white/20 rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{p.description}</p>

              <a
                href={p.github}
                target="_blank"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
