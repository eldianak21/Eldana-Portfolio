import React from 'react';
import profile from '../../assets/profile.jpg'; // Update the path to your profile image

const Home = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-800">
      <div className="max-w-md text-center">
        <div className="rounded-full w-32 h-32 overflow-hidden mb-6">
          <img src={profile} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white">Eldana Kibru Berta</h1>
        <p className="text-gray-400 mb-8">
          I am a dedicated software engineer passionate about crafting innovative solutions that harness the power of technology. My expertise includes both frontend and backend development, with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, and Node.js). Additionally, I am skilled in mobile app development using Flutter, enabling the creation of cross-platform applications that provide seamless user experiences.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
          Let's Get Started
        </button>
      </div>
    </main>
  );
};

export default Home;