import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-slate-100 relative inline-block">
            About Me
            {/* <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-teal-400"></span> */}
          </h2>
          <p className="text-slate-400 mt-8 leading-relaxed">
            I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering 
            at Lovely Professional University, with an expected graduation in 2026. As a passionate 
            software developer enthusiast, I'm constantly expanding my knowledge and skills in 
            various programming languages and technologies.
          </p>
          
          <p className="text-slate-400 mt-4 leading-relaxed">
            My journey in software development started in my first semester with a music website project 
            using HTML, CSS, and JavaScript. Since then, I've developed more complex applications like an 
            Online Examination System using Java, JSP, Servlets, and MySQL. These projects have helped me 
            gain practical experience in both frontend and backend development.
          </p>
          
          <p className="text-slate-400 mt-4 leading-relaxed">
            I'm particularly interested in Java full-stack development and am currently focusing on expanding 
            my knowledge in Spring Boot. In the future, I plan to explore machine learning algorithms and AI 
            to implement in my projects, enabling me to create more intelligent and responsive applications.
          </p>
          
          <p className="text-slate-400 mt-4 leading-relaxed">
            Beyond coding, I enjoy swimming, sketching, and weight training to maintain a balanced lifestyle 
            and keep my mind fresh for problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;