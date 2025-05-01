import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'B. Tech in Computer Science and Engineering',
      period: 'August 2022 – Expected July 2026',
      location: 'Jalandhar, Punjab',
      score: 'CGPA: 7.42'
    },
    {
      institution: 'Sita Devi Higher Secondary School',
      degree: '12th Standard',
      period: '2020 – 2021',
      location: 'Indore, Madhya Pradesh',
      score: 'CGPA: 8.4'
    },
    {
      institution: 'Good Shepherd Convent School',
      degree: '10th Standard',
      period: '2018 – 2019',
      location: 'Shahdol, Madhya Pradesh',
      score: 'CGPA: 8.4'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3 justify-center">
          <GraduationCap className="text-teal-400" />
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-slate-600">


            {education.map((item, index) => (
              <div key={index} className="relative mb-10 flex items-center">
                <div className="w-8 flex justify-center items-center relative z-10">
            <div className="w-4 h-4 rounded-full bg-teal-400 shadow-md shadow-teal-400/50"></div>
          </div>
                <div className="bg-slate-700/50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-100">{item.institution}</h3>
                  <p className="text-teal-400 font-medium">{item.degree}</p>
                  <p className="text-slate-400 text-sm mt-1">{item.period}</p>
                  <p className="text-slate-400 text-sm">{item.location}</p>
                  <p className="text-slate-100 mt-2 font-medium">{item.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;