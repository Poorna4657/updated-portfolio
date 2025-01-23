import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Trophy, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 text-center px-4">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">John Doe</h1>
          <p className="text-xl mb-8 text-gray-300">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-opacity-90 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Award className="mr-2" /> Certificates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">AWS Certified Solutions Architect</h3>
                <p className="text-gray-400 mb-4">Amazon Web Services</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                  View Certificate <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <BookOpen className="mr-2" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white bg-opacity-10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-156665${item}19831-5e88dd9def09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                  <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                      Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                      Code <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-opacity-90 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Trophy className="mr-2" /> Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-xl">Projects Completed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Phone className="mr-2" /> Contact Me
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-white bg-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white bg-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white bg-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-white bg-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;