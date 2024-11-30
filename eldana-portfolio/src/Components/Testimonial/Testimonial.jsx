import React from 'react';
import Ezedin from "../../assets/ezedin.jpeg";
import Abreham from "../../assets/abreham.jpg";
import Junid from "../../assets/junid.jpeg";

// Sample testimonial data including images
const testimonials = [
  {
    name: "Ezedin Kamil",
    title: "CEO at Ibex Ethiopia Technology and Promotion, Tech Innovators",
    quote: "Eldana's expertise in software development has transformed our projects. Her attention to detail and innovative solutions are unmatched!",
    image: Ezedin, // Directly use the imported image
  },
  {
    name: "Abreham Assefa",
    title: "CEO at Ahadu Web",
    quote: "Working with Eldana was a game-changer for our team. She delivered high-quality work on time and exceeded our expectations.",
    image: Abreham, // Directly use the imported image
  },
  {
    name: "Junid Mohammed",
    title: "CEO at Hex Lab",
    quote: "Eldana has a unique ability to understand client needs and translate them into effective technical solutions. Highly recommend!",
    image: Junid, // Directly use the imported image
  },
];

const Testimonial = () => {
  return (
    <main className="min-h-screen bg-gray-800 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Testimonials</h1>
        <div className="flex justify-center space-x-8 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="rounded-full w-10 h-10 mr-4" 
                />
                <div>
                  <h2 className="text-xl font-semibold text-white">{testimonial.name}</h2>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonial;