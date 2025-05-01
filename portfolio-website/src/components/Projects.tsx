import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Market Trends Analyzer Dashboard',
      description: 'Created an interactive dashboard analyzing sales trends and customer behavior patterns. Utilized Power BI Query Editor for data preprocessing and cleaning of Kaggle datasets. Developed comprehensive visualizations showcasing key metrics, sales trends, and customer insights, enabling data-driven decision making and strategic planning.',
      date: 'Apr 2025',
      technologies: ['Power BI', 'Power Query Editor', 'Data Analysis', 'Data Visualization'],
      image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        github: 'https://github.com/sonic-beast/music-website',
      }
    },
    {
      title: 'Online Examination System',
      description: 'Designed and developed a secure system for exam creation, real-time result processing, and user authentication. Built the front-end using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly interface. Used Advanced Java and Spring Boot for back-end development and MySQL for database management.',
      date: 'Oct 2024 - present',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'JDBC' , 'Servlets' , 'MySQL'],
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        github: 'https://github.com/sonic-beast/online-exam-system',
      }
    },
    {
      title: 'Music Website',
      description: 'Designed and developed a responsive music website to showcase music albums and playlists. Utilized HTML for structuring content and CSS for styling, ensuring a clean and visually appealing user interface. Implemented a mobile-friendly design to ensure seamless access across different devices.',
      date: 'Nov - Dec 2022',
      technologies: ['HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        github: 'https://github.com/sonic-beast/music-website',
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-100 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-teal-400 font-mono">{project.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/70 text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;