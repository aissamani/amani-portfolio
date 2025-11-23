import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-primary antialiased">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Hero />
        
        <Projects /> 
        <Designs />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
