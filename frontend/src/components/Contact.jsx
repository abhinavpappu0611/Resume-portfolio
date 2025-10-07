import React, { useState } from 'react';
const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on AI projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently seeking opportunities in AI/ML engineering and data analysis roles. 
                Whether you have a project in mind, want to collaborate, or just want to chat about AI, 
                I'm always excited to connect with like-minded professionals.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-r from-emerald-500 bg-opacity-10 to-teal-500 bg-opacity-10 border border-emerald-400 border-opacity-30 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Available for Opportunities</h4>
                  <p className="text-gray-300">Open to AI/ML roles and exciting projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-emerald-400 text-6xl mb-4">✓</div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:border-emerald-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white py-3 rounded transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
