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
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Georgia', 'Times New Roman', serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px; 
            background: white;
          }
          .header { 
            text-align: center; 
            border-bottom: 3px solid #059669; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
          }
          .name { 
            font-size: 32px; 
            font-weight: bold; 
            color: #059669; 
            margin-bottom: 8px;
            letter-spacing: 1px;
          }
          .title { 
            font-size: 20px; 
            color: #444; 
            margin-bottom: 15px; 
            font-style: italic;
          }
          .contact-info {
            font-size: 14px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
          }
          .section { 
            margin-bottom: 30px; 
            page-break-inside: avoid;
          }
          .section-title { 
            font-size: 22px; 
            font-weight: bold; 
            color: #059669; 
            border-bottom: 2px solid #059669; 
            padding-bottom: 5px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .summary {
            font-size: 16px;
            line-height: 1.8;
            color: #444;
            text-align: justify;
            margin-bottom: 20px;
          }
          .education-item, .project { 
            margin-bottom: 20px; 
            padding: 15px; 
            border-left: 4px solid #059669; 
            background: #f8f9fa;
            border-radius: 0 8px 8px 0;
          }
          .project-title, .degree { 
            font-weight: bold; 
            color: #333; 
            font-size: 18px;
            margin-bottom: 5px;
          }
          .school, .project-tech { 
            color: #059669; 
            font-weight: bold; 
            font-size: 16px;
            margin-bottom: 5px;
          }
          .year, .project-year { 
            color: #666; 
            font-style: italic; 
            font-size: 14px;
            margin-bottom: 8px;
          }
          .project-desc, .education-desc {
            color: #555;
            line-height: 1.6;
            margin-bottom: 10px;
          }
          .technologies { 
            font-size: 13px; 
            color: #059669; 
            font-weight: bold;
            background: #e6f7f1;
            padding: 5px 10px;
            border-radius: 15px;
            display: inline-block;
          }
          .skills-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 20px; 
          }
          .skill-category { 
            background: #f8f9fa; 
            padding: 15px; 
            border-radius: 8px;
            border-left: 4px solid #059669;
          }
          .skill-category-title { 
            font-weight: bold; 
            color: #059669; 
            margin-bottom: 8px;
            font-size: 16px;
          }
          .skill-list { 
            font-size: 14px; 
            color: #555;
            line-height: 1.5;
          }
          .achievements ul {
            padding-left: 20px;
          }
          .achievements li {
            margin-bottom: 8px;
            color: #555;
            line-height: 1.6;
          }
          .print-btn { 
            background: #059669; 
            color: white; 
            border: none; 
            padding: 12px 25px; 
            border-radius: 6px; 
            cursor: pointer; 
            margin: 30px auto;
            font-size: 16px;
            font-weight: bold;
            display: block;
            transition: background 0.3s;
          }
          .print-btn:hover {
            background: #047857;
          }
          @media print { 
            .print-btn { display: none; }
            body { padding: 20px 0; font-size: 12px; }
            .section { margin-bottom: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">Venkata Sriram Abhinav Pappu</div>
          <div class="title">AI/ML Engineer & Data Analyst</div>
          <div class="contact-info">
            <span>📧 abhinavpappu2017@gmail.com</span>
            <span>📍 Melbourne, Australia</span>
            <span>💼 linkedin.com/in/abhinav-p-521739208</span>
            <span>🐙 github.com/abhinavpappu0611</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <div class="summary">
            Passionate AI/ML engineer with expertise in cloud computing, deep learning, and data analysis. Currently pursuing Masters in AI at Monash University with hands-on experience in AWS services, machine learning algorithms, and computer vision. Demonstrated ability to develop scalable solutions using cloud infrastructure and advanced regression techniques for real-world problem solving.
          </div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <div class="education-item">
            <div class="degree">Master of Artificial Intelligence</div>
            <div class="school">Monash University</div>
            <div class="year">Melbourne, Australia | 2024 - Present</div>
            <div class="education-desc">Specializing in machine learning, deep learning, and AI systems with focus on practical applications and cutting-edge research.</div>
          </div>
          <div class="education-item">
            <div class="degree">Bachelor of Computer Science and Engineering</div>
            <div class="school">GITAM University</div>
            <div class="year">Visakhapatnam, India | 2020 - 2024</div>
            <div class="education-desc">Comprehensive computer science education with emphasis on software development, data structures, and foundational AI concepts.</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Featured Projects</div>
          
          <div class="project">
            <div class="project-title">Cloud Pose Detection System</div>
            <div class="project-tech">AWS • Computer Vision • Real-time Processing</div>
            <div class="project-year">2024</div>
            <div class="project-desc">
              Built a comprehensive pose detection solution using AWS services including EC2 for compute, Lambda for serverless processing, and SageMaker for model deployment. Integrated CloudPose algorithms to achieve high-accuracy pose estimation with low latency for real-time applications.
            </div>
            <div class="technologies">AWS EC2 • AWS Lambda • SageMaker • CloudPose • Python • OpenCV</div>
          </div>

          <div class="project">
            <div class="project-title">Alzheimer's Disease Prediction Model</div>
            <div class="project-tech">Machine Learning • Healthcare AI • Predictive Analytics</div>
            <div class="project-year">2024</div>
            <div class="project-desc">
              Developed predictive models using Linear Regression and Kernel Regression algorithms to analyze Darwin dataset for early Alzheimer's disease detection. Achieved significant accuracy in early-stage detection through advanced feature engineering and model optimization techniques.
            </div>
            <div class="technologies">Python • Scikit-learn • Pandas • NumPy • Linear Regression • Kernel Regression</div>
          </div>

          <div class="project">
            <div class="project-title">Advanced Image & Video Analysis System</div>
            <div class="project-tech">Computer Vision • Object Detection • Deep Learning</div>
            <div class="project-year">2024</div>
            <div class="project-desc">
              Comprehensive computer vision solution implementing state-of-the-art object detection and face recognition algorithms. Capable of processing both static images and real-time video streams with high accuracy and performance optimization.
            </div>
            <div class="technologies">OpenCV • TensorFlow • YOLO • Face Recognition • Python • Deep Learning</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div class="skill-category">
              <div class="skill-category-title">Machine Learning & AI</div>
              <div class="skill-list">Linear Regression, Kernel Regression, Neural Networks, Deep Learning, Computer Vision, Feature Engineering</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Cloud Platforms</div>
              <div class="skill-list">AWS EC2, AWS Lambda, SageMaker, S3, CloudWatch, Cloud Architecture</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Programming Languages</div>
              <div class="skill-list">Python, R, SQL, JavaScript, Java</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Frameworks & Libraries</div>
              <div class="skill-list">TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy, React</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Data Analysis & Visualization</div>
              <div class="skill-list">Statistical Analysis, Data Visualization, Model Evaluation, Tableau, Power BI</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Development Tools</div>
              <div class="skill-list">Jupyter, Git, Docker, VS Code, Google Colab</div>
            </div>
          </div>
        </div>

        <div class="section achievements">
          <div class="section-title">Key Achievements</div>
          <ul>
            <li>Successfully deployed ML models on AWS cloud infrastructure with scalable architecture</li>
            <li>Developed high-accuracy pose detection system with real-time processing capabilities</li>
            <li>Implemented advanced regression techniques for medical data analysis and early disease detection</li>
            <li>Built comprehensive computer vision solutions for object and face detection applications</li>
            <li>Demonstrated proficiency in full-stack development with modern web technologies</li>
          </ul>
        </div>

        <button class="print-btn" onclick="window.print()">📄 Download as PDF</button>
      </body>
      </html>
    `);
    resumeWindow.document.close();
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
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950 px-3 py-1 rounded text-sm transition-colors">
            📄 Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
