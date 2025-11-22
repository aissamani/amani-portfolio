import React from 'react';

const designs = [
  { title: "UI Design for App", image: "/placeholder-profile.jpg" },
  { title: "Web Dashboard Mockup", image: "/placeholder-profile.jpg" },
];

export default function Designs() {
  return (

    <section id="designs" className="py-32 fade-up">
    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Designs</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="card hover:shadow-lg transition">
        <img src="/design1.jpg" alt="Design 1" className="w-full h-40 object-cover rounded-lg"/>
        <h3 className="mt-2 font-semibold">Mobile App UI</h3>
        <a href="https://www.behance.net/yourusername" target="_blank" className="text-accent text-sm">View on Behance</a>
        </div>
        <div className="card hover:shadow-lg transition">
        <img src="/design2.jpg" alt="Design 2" className="w-full h-40 object-cover rounded-lg"/>
        <h3 className="mt-2 font-semibold">Web Dashboard</h3>
        <a href="https://www.behance.net/yourusername" target="_blank" className="text-accent text-sm">View on Behance</a>
        </div>
    </div>
    </section>
  );
}
