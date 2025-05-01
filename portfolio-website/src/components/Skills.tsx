import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python', 'HTML', 'CSS']
    },
    {
      title: 'Technologies/Frameworks',
      skills: ['Hibernate' , 'Servlets' , 'JSP' , 'Junit']
    },
    {
      title: 'Tools',
      skills: ['Maven', 'Git', 'Tomcat', 'GitHub', 'IntelliJ IDEA', 'Eclipse']
    },
    {
      title: 'Databases',
      skills: ['MySQL','JDBC']
    },
    {
      title: 'Data Analysis',
      skills: ['Tableau','Poer BI' , 'Excel']
    },
    {
      title: 'Soft Skills',
      skills: ['Adaptability', 'Friendly', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-100 text-center">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-700/50 rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-600 text-slate-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;