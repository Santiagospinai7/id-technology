/* eslint-disable react/prop-types */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, hoverText, image, url = '/' }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isHovered ? 'bg-[#70ba8f]' : 'bg-[#80D5A3]'
      } rounded-lg shadow-lg relative p-6 text-center transition duration-300 transform scale-95 hover:scale-100 hover:text-white cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(url)}
    >
      <img src={image} alt={title} className="mx-auto mb-4" />
      <p className="font-bold mb-2">{title}</p>
      <p className="mb-4">{description}</p>
      <p
        className={`absolute bottom-6 left-0 right-0 mx-auto text-white ${
          isHovered ? 'block' : 'hidden'
        }`}
      >
        {hoverText}
      </p>
    </div>
  );
};

export default ServiceCard;
