import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-800" style={{ backgroundImage: "url('path/to/your/background.jpg')", backgroundSize: 'cover' }}>
      <div className="max-w-lg text-center p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">Contact Me</h1>
        <p className="text-gray-400 mb-8">
          I'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Message sent successfully!</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-gray-700 rounded-lg p-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
            />
          </div>
          <div className="flex items-center bg-gray-700 rounded-lg p-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
            />
          </div>
          <div className="flex items-start bg-gray-700 rounded-lg p-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105"
          >
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;