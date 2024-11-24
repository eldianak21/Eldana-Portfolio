import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError(''); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Here you would normally handle form submission (e.g., sending data to an API)
    console.log('Form submitted:', formData);

    // Optionally reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-lg text-center p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">Contact Me</h1>
        <p className="text-gray-400 mb-8">
          I would love to hear from you! Please fill out the form below to get in touch.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;