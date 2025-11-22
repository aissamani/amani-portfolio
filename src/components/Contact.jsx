import React from "react";

import { FaGithub, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

      <div className="flex flex-wrap justify-center gap-8">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-4 hover:scale-105 transition-transform"
        >
          <FaEnvelope className="text-xl text-primary" />
          <span>Email Me</span>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-4 hover:scale-105 transition-transform"
        >
          <FaGithub className="text-xl text-primary" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-4 hover:scale-105 transition-transform"
        >
          <FaLinkedin className="text-xl text-primary" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.behance.net/yourusername"
          target="_blank"
          className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-4 hover:scale-105 transition-transform"
        >
          <FaBehance className="text-xl text-primary" />
          <span>Behance</span>
        </a>
      </div>

      {/* Optional floating background shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary opacity-10 rounded-full animate-pulse-slow"></div>
    </section>
  );
}
