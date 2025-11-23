import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, Code, Database } from "lucide-react";

 import logistics from '../assets/logistics.png';
 import correlation from '../assets/03_correlation_matrix.png';
 import minmax from '../assets/minmax.png';
const projects = [
  {
    title: "Supply Chain Logistics Analysis",
    description: "Developed a script to analyze shipping bottlenecks, processing 600+ records to visualize the correlation between delivery delays and customer satisfaction.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib"],
    img: logistics, // Ensure this path is correct
    github: "https://github.com/aissamani/logistics-analysis",
    demo: null, // Set to a URL if you have a live demo
    color: "from-blue-400 to-cyan-300" // Custom glow color
  },
  {
    title: "Titanic Data Analysis Pipeline",
    description: "Engineered a data processing pipeline to analyze passenger survival, utilizing feature extraction (Regex) and data cleaning to identify key socio-economic trends.",
    tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    img: correlation,
    github: "https://github.com/aissamani/titanic-analysis-pipeline",
    demo: null,
    color: "from-emerald-400 to-teal-300"
  },
  {
    title: "AI Decision Algorithms Visualizer",
    description: "Built an interactive simulation to visualize how AI agents find optimal paths, implementing core graph algorithms like A* (A-Star) and BFS (Breadth-First Search) in real-time.",
    tags: ["React.js", "PyGame", "Algorithms", "Python"],
    img: minmax,
    github: "https://github.com/aissamani/my-website",
    demo: "https://my-website-three-cyan.vercel.app/",
    color: "from-purple-400 to-pink-300"
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center mb-24`}
    >
      {/* 1. The Image Showcase Area */}
      <div className="w-full md:w-3/5 group relative">
        {/* The Glow Effect behind the image */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition duration-500 rounded-full`}></div>
        
        {/* The Browser/App Window Frame */}
        <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Fake Browser Header */}
          <div className="h-8 bg-gray-800 flex items-center gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* The Image */}
          <div className="overflow-hidden">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>

      {/* 2. The Content Area */}
      <div className="w-full md:w-2/5 space-y-6 text-center md:text-left">
        <div>
          <span className={`text-sm font-bold tracking-wider uppercase bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
            Featured Project 0{index + 1}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <a 
            href={project.github} 
            target="_blank" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-700 transition shadow-lg hover:shadow-xl"
          >
            <Github size={18} /> Source Code
          </a>
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 border border-gray-200 font-medium hover:bg-gray-50 transition shadow-sm hover:shadow-md"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Grid Pattern (Optional Texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creative <span className="text-purple-600">&</span> Technical
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for data, algorithms, and user-centric design.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((p, index) => (
            <ProjectCard key={index} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}