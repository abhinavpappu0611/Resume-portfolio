import React from 'react';
const Header = ({ scrolled }) => {
  const generateResume = () => {
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Resume - Venkata Sriram Abhinav Pappu</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; border-bottom: 2px solid #059669; padding-bottom: 20px; margin-bottom: 30px; }
          .name { font-size: 28px; font-weight: bold; color: #059669; margin-bottom: 10px; }
          .title { font-size: 18px; color: #666; margin-bottom: 15px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 20px; font-weight: bold; color: #059669; border-bottom: 1px solid #ddd; }
          .project { margin-bottom: 15px; padding: 10px; border-left: 3px solid #059669; background: #f9f9f9; }
          .print-btn { background: #059669; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">Venkata Sriram Abhinav Pappu</div>
          <div class="title">AI/ML Engineer & Data Analyst</div>
          <div>📧 abhinavpappu2017@gmail.com | 📍 Melbourne, Australia</div>
        </div>
        <div class="section">
          <div class="section-title">Education</div>
          <p><strong>Master of Artificial Intelligence</strong> - Monash University (2024-Present)</p>
          <p><strong>Bachelor of Computer Science</strong> - GITAM University (2020-2024)</p>
        </div>
        <div class="section">
          <div class="section-title">Skills</div>
          <p><strong>Machine Learning:</strong> Linear Regression, Neural Networks, Deep Learning</p>
          <p><strong>Cloud:</strong> AWS EC2, Lambda, SageMaker</p>
          <p><strong>Programming:</strong> Python, R, SQL, JavaScript</p>
        </div>
        <button class="print-btn" onclick="window.print()">Download as PDF</button>
      </body>
      </html>
    `);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950 bg-opacity-95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-emerald-400">Abhinav</div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
          <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/abhinavpappu0611" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhinav-p-521739208/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
            LinkedIn
          </a>
          <button onClick={generateResume}
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950 px-3 py-1 rounded text-sm">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
