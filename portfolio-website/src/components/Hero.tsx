// import React from 'react';
// import { Github, Linkedin, Code } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section 
//       id="home" 
//       className="min-h-screen flex items-center pt-16 relative overflow-hidden"
//     >
//       <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex items-center justify-between">
//           <div className="max-w-2xl">
//             <p className="text-teal-400 font-mono mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               Hello, my name is
//             </p>
//             <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//               Vikash Patel.
//             </h1>
//             <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//               I build things for the web.
//             </h2>
//             <p className="text-slate-400 text-lg mb-8 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
//               I'm a computer science student and aspiring software developer with 
//               a passion for creating responsive web applications and solving complex problems.
//             </p>
//             <div className="flex flex-col gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
//               <div className="flex gap-4">
//                 <a 
//                   href="#projects" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   View My Work
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   Contact Me
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   Resume
//                 </a>
//               </div>
//               <div className="flex gap-6">
//                 <a 
//                   href="https://github.com/sonic-beast" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="GitHub Profile"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a 
//                   href="https://linkedin.com/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <a 
//                   href="https://leetcode.com/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="LeetCode Profile"
//                 >
//                   <Code size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-teal-400/20">
//               <img 
//                 src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import { Github, Linkedin, Code } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section 
//       id="home" 
//       className="min-h-screen flex items-center pt-16 relative overflow-hidden"
//     >
//       {/* Background Blur Effects */}
//       <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex items-center justify-between pl-10">
//           {/* Left Side - Text */}
//           <div className="max-w-2xl">
//             <p 
//               className="text-teal-400 font-mono mb-4 opacity-0 animate-fade-in" 
//               style={{ animationDelay: '0.2s' }}
//             >
//               Hello, my name is
//             </p>
//             <h1 
//               className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 opacity-0 animate-fade-in" 
//               style={{ animationDelay: '0.4s' }}
//             >
//               Vikash Patel.
//             </h1>
//             <h2 
//               className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 opacity-0 animate-fade-in" 
//               style={{ animationDelay: '0.6s' }}
//             >
//               I build things for the web.
//             </h2>
//             <p 
//               className="text-slate-400 text-lg mb-8 max-w-xl opacity-0 animate-fade-in" 
//               style={{ animationDelay: '0.8s' }}
//             >
//               I'm a computer science student and aspiring software developer with 
//               a passion for creating responsive web applications and solving complex problems.
//             </p>

//             {/* Buttons and Social Links */}
//             <div className="flex flex-col gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
//               <div className="flex gap-4">
//                 <a 
//                   href="#projects" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   View My Work
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   Contact Me
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
//                 >
//                   Resume
//                 </a>
//               </div>
//               <div className="flex gap-6">
//                 <a 
//                   href="https://github.com/sonic-beast" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="GitHub Profile"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a 
//                   href="https://linkedin.com/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <a 
//                   href="https://leetcode.com/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-400 hover:text-teal-400 transition-colors"
//                   aria-label="LeetCode Profile"
//                 >
//                   <Code size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Profile Image */}
//           <div className="hidden md:block ml-8">
//             <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-400/20">
//               <img 
//                 src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left Side - Text */}
          <div className="max-w-2xl text-center md:text-left md:pl-12 flex-1">
            <p 
              className="text-teal-400 font-mono mb-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Hello, my name is
            </p>
            <h1 
              className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: '0.4s' }}
            >
              Vikash Patel.
            </h1>
            <h2 
              className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: '0.6s' }}
            >
              I build things for the web.
            </h2>
            <p 
              className="text-slate-400 text-lg mb-8 max-w-xl opacity-0 animate-fade-in" 
              style={{ animationDelay: '0.8s' }}
            >
              I'm a computer science student and aspiring software developer with 
              a passion for creating responsive web applications and solving complex problems.
            </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col gap-6 items-center md:items-start opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
                >
                  Contact Me
                </a>
                <a 
                  href="/public/resume.pdf" 
                  className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors"
                >
                  Resume
                </a>
              </div>
              <div className="flex gap-6 mt-4">
                <a 
                  href="https://github.com/sonic-beast" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vikash--patel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://leetcode.com/u/sonic_beast/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center items-start mt-12 md:mt-0">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-400/20 shadow-lg">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHOFcMp5sg8Cw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697705336963?e=1751500800&v=beta&t=3J356-QfFjyQ8HS9MdZLT3MOQVZZAY26WuZ8lpAt6hA" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
