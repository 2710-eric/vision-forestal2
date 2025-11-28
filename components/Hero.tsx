import React, { useState, useEffect } from 'react';

// Array of high-quality forest and animal images for the carousel
const images = [
  'https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2', // Forest path with sun rays
  'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Fox
  'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Lush green forest floor
  'https://images.pexels.com/photos/52973/roe-deer-wildlife-nature-52973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Deer
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Parrot on a branch
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Misty forest with tall trees
  'https://images.pexels.com/photos/927512/pexels-photo-927512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Bear
  'https://images.pexels.com/photos/68314/squirrel-animal-cute-rodents-68314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Squirrel
  'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Another bird
];

interface HeroProps {
  onDiscoverMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscoverMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    onDiscoverMore();
    
    // After a short delay to allow content to render, scroll to it.
    setTimeout(() => {
        const problemSection = document.getElementById('problema');
        if (problemSection) {
            problemSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  }

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Images Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Guardianes del Bosque: IA para un Futuro Verde</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Tecnología de vanguardia para detectar y combatir incendios forestales antes de que comiencen.
        </p>
        <button 
          onClick={handleClick}
          className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Descubre Cómo
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;