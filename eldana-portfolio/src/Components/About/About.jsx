import React, { useState } from 'react';
import profile1 from '../../assets/profile.jpg'; // Update the path to your profile images
import profile2 from '../../assets/profile 2.jpg';
import profile3 from '../../assets/profile 3.jpg';
import profile4 from '../../assets/profile.jpg';

const About = () => {
  const images = [profile1, profile2, profile3, profile4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="flex items-center justify-between min-h-screen bg-gray-800 p-8">
      <div className="w-1/2 p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-400 mb-4">
          Hello! I’m Eldana Kibru Berta, a passionate software engineer with a love for technology and innovation.
        </p>
        <p className="text-gray-400 mb-4">
          With a strong foundation in both frontend and backend development, I specialize in the MERN stack (MongoDB, 
          Express.js, React.js, Node.js) and mobile app development using Flutter.
        </p>
        <p className="text-gray-400 mb-4">
          I believe in building applications that enhance user experience and solve real-world problems.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-green-500">My Skills</h2>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>MERN Stack Development</li>
          <li>Mobile App Development (Flutter)</li>
          <li>RESTful API Design</li>
          <li>Database Management (MongoDB)</li>
          <li>Version Control (Git)</li>
        </ul>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <div className="rounded-lg overflow-hidden shadow-lg w-full h-96 relative">
          <img 
            src={images[currentImageIndex]} 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <button 
            onClick={handlePrevImage} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#10094;
          </button>
          <button 
            onClick={handleNextImage} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#10095;
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;