import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-100 text-center">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-teal-400 mt-1" />
                <div>
                  <h4 className="text-slate-100 font-medium">Email</h4>
                  <a 
                    href="mailto:vikashpatel80000@gmail.com" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    vikashpatel80000@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-teal-400 mt-1" />
                <div>
                  <h4 className="text-slate-100 font-medium">Phone</h4>
                  <a 
                    href="tel:+917987554820" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    +91 7987554820
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-teal-400 mt-1" />
                <div>
                  <h4 className="text-slate-100 font-medium">Location</h4>
                  <p className="text-slate-400">Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-700 border border-slate-600 rounded p-3 text-slate-300 focus:border-teal-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-700 border border-slate-600 rounded p-3 text-slate-300 focus:border-teal-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-slate-700 border border-slate-600 rounded p-3 text-slate-300 focus:border-teal-400 focus:outline-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-teal-400 text-slate-900 px-6 py-3 rounded font-medium hover:bg-teal-300 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;