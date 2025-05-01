import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certificates = [
    {
      title: 'Software Engineer Intern Certified',
      issuer: 'HackerRank',
      date: 'Feb 2025'
    },
    {
      title: 'SQL Basics',
      issuer: 'HackerRank',
      date: 'Feb 2025'
    },
    {
      title: 'Programming in C++ Certified',
      issuer: 'Coursera',
      date: 'Feb 2024'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-100 flex items-center gap-3 justify-center">
          <Award className="text-teal-400" />
          Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-700/50 p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/10"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-3">{cert.title}</h3>
              <p className="text-teal-400 font-medium">{cert.issuer}</p>
              <p className="text-slate-400 text-sm mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;