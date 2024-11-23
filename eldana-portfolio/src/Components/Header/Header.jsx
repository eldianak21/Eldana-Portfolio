import React from 'react'

const Header = () => {
  return (
    <div className="bg-gray-900 text-white">
    <header className="bg-gray-800 py-4 px-6">
      <nav className="flex justify-between items-center">
        <div>
          <a href="#" className="text-lg font-bold text-white">ELDANA KIBRU</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Testimonials</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Skills</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Get in Touch</a></li>
        </ul>
      </nav>
    </header>
  </div>
  )
}

export default Header