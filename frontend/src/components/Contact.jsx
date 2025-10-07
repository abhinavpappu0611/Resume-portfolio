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

    try {
      // Use Formspree - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/abhinavpappu2017@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

            {/* Direct Email Button */}
            <div className="bg-gradient-to-r from-emerald-500 bg-opacity-20 to-teal-500 bg-opacity-20 border border-emerald-400 border-opacity-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">📧 Email Me Directly</h4>
              <a 
                href="mailto:abhinavpappu2017@gmail.com?subject=Portfolio Inquiry&body=Hi Venkata, I saw your portfolio and would like to discuss..."
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-colors inline-flex items-center"
              >
                Send Email Now
              </a>
              <p className="text-gray-300 text-sm mt-2">
                This opens your email client directly - guaranteed delivery!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6">
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

              <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6">
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-emerald-400 text-6xl mb-4">✓</div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-400">Thank you! Your message has been sent to abhinavpappu2017@gmail.com</p>
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

                <div className="text-center text-sm text-gray-400">
                  <p>Messages will be delivered to <span className="text-emerald-400">abhinavpappu2017@gmail.com</span></p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
