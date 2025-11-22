import React from 'react';

export default function Navbar(){
  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur z-30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Amani Aissaoui</div>
        <nav className="space-x-4 text-sm">
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#designs">Designs</a>
          <a className="hover:underline" href="#certificates">Certificates</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
