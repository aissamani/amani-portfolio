import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

 import Thumbnail from '../assets/Thumbnail.png';
 import Frame from '../assets/Frame.jpg';
 import edu from '../assets/edu.jpg';
 import Dri from '../assets/Dri.png';

const designs = [
  { 
    title: "UNI GUIDE", 
    category: "Mobile App", 
    // LOCAL USE: Uncomment the line below and delete the placeholder line
    image: Thumbnail, 
    link: "https://www.behance.net/gallery/239023995/UNI-GUIDE" 
  },
  { 
    title: "A9DILI - APP", 
    category: "Service Platform", 
    image: Frame,
    link: "https://www.behance.net/gallery/239023535/A9DILI-APP" 
  },
  { 
    title: "DZ Estate", 
    category: "Real Estate", 
    image:Dri,
    link: "https://www.behance.net/gallery/238991043/DZ-estate-Commission-Free-Property-Marketplace" 
  },
  { 
    title: "Edu+", 
    category: "LMS System", 
    image:edu,
    link: "https://www.behance.net/gallery/238981947/EduStu-dent-Learning-Career-Platform" 
  },
];

export default function Designs() {
  return (
    <section id="designs" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">UI/UX Gallery</h2>
            <p className="text-gray-600">Crafting pixel-perfect experiences.</p>
          </div>
          <a href="https://www.behance.net/amaniaissaoui" className="hidden md:flex items-center gap-2 text-pink-600 font-medium hover:gap-4 transition-all">
            View all on Behance <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((design, i) => (
            <motion.a
              href={design.link}
              target="_blank"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title} 
                  onError={(e) => {
                    e.target.src = "https://placehold.co/800x600/png?text=Image+Not+Found";
                  }}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75" 
                />
              </div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-pink-500 uppercase tracking-wider">{design.category}</p>
                    <h3 className="text-lg font-bold text-gray-900">{design.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}