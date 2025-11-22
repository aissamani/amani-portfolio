import React from 'react';

const certificates = [
  { name: "Machine Learning Certificate", link: "#" },
  { name: "Deep Learning Certificate", link: "#" },
];

export default function Certificates() {
  return (

    <section id="certificates" className="py-32 fade-up">
    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Certificates</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="card hover:shadow-lg transition">
        <img src="/cert1.jpg" alt="Certificate 1" className="w-full h-40 object-cover rounded-lg"/>
        <h3 className="mt-2 font-semibold">Machine Learning</h3>
        <a href="https://certificate-link.com" target="_blank" className="text-accent text-sm">View Certificate</a>
        </div>
        <div className="card hover:shadow-lg transition">
        <img src="/cert2.jpg" alt="Certificate 2" className="w-full h-40 object-cover rounded-lg"/>
        <h3 className="mt-2 font-semibold">Deep Learning</h3>
        <a href="https://certificate-link.com" target="_blank" className="text-accent text-sm">View Certificate</a>
        </div>
    </div>
    </section>

  );
}