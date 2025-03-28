/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, hoverText, image, url = '/' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={url}
      className={`${
        isHovered ? 'bg-[#70ba8f]' : 'bg-[#80D5A3]'
      } rounded-lg shadow-lg relative p-6 text-center transition duration-300 transform scale-95 hover:scale-100 hover:text-white cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <img 
          src={image} 
          alt={title} 
          className="mx-auto object-contain mb-4 transition-transform duration-300"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        
        {/* <div className={`
          mt-4 font-medium
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          Leer más
        </div> */}
      </div>
    </Link>
  );
};

export default ServiceCard;
