import React, { useState } from 'react';
const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Machine Learning'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my journey through AI, machine learning, and cloud computing projects
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-emerald-500 text-white'
                  : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 hover:border-opacity-50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => openModal(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-emerald-500 bg-opacity-90 text-white px-2 py-1 rounded text-sm">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-emerald-400 text-sm">{project.category}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-700 bg-opacity-50 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 bg-opacity-50 text-gray-300 text-xs px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-emerald-400">{selectedProject.title}</h3>
                  <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl">×</button>
                </div>
                
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="border border-gray-600 text-gray-300 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded">
                    Live Demo
                  </button>
                  <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-2 rounded">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
