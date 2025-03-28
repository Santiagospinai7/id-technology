/* eslint-disable react/prop-types */
import { useState } from 'react';

const ServiceDetailBanner = ({ title, description, image, buttonTitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <img src={image} alt="Desarrollo de Software" className="mx-auto lg:h-64 h-48" />
      <h1 className="text-4xl font-bold text-center my-6">{title}</h1>
      <div className="max-w-3xl mx-auto px-4 text-center">
        {description}
      </div>
      <button 
        onClick={() => window.open('https://wa.me/+573159266621?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          bg-green-200 text-white mt-8 px-10 py-2 rounded-3xl text-sm
          transition-all duration-300 ease-in-out
          transform ${isHovered ? 'scale-105 bg-green-300 shadow-lg' : ''}
          relative overflow-hidden
        `}
      >
        <span className="relative z-10">{buttonTitle.toUpperCase()}</span>
        
        {/* Animated background effect */}
        <span 
          className={`
            absolute inset-0 bg-green-300
            transition-all duration-500 ease-out
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transform: isHovered ? 'scale(1)' : 'scale(0)',
            transformOrigin: 'center',
            borderRadius: '1.5rem'
          }}
        />
      </button>
    </div>
  );
}

export default ServiceDetailBanner;