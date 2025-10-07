import React from 'react';
const Skills = ({ skills }) => {
  const getSkillLevel = (skill) => {
    const skillLevels = {
      'Python': 95, 'AWS EC2': 90, 'Linear Regression': 88, 'TensorFlow': 85,
      'Machine Learning': 90, 'Deep Learning': 85, 'Computer Vision': 88,
      'Statistical Analysis': 82, 'JavaScript': 80, 'Docker': 75
    };
    return skillLevels[skill] || Math.floor(Math.random() * 30) + 70;
  };

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for AI, machine learning, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={category} 
              className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:border-opacity-50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                {category}
              </h3>
              
              <div className="space-y-3">
                {skillList.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{skill}</span>
                      <span className="text-emerald-400 text-sm">{getSkillLevel(skill)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${getSkillLevel(skill)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-emerald-400">3+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-emerald-400">5+</div>
            <div className="text-gray-400">AWS Services</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-emerald-400">10+</div>
            <div className="text-gray-400">ML Algorithms</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-emerald-400">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
