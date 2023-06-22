import { useState, useEffect } from "react";
import LogoMicrosoft from "../../assets/img/Partner_Microsoft.png";
import '../../style/Slider.css'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [LogoMicrosoft, LogoMicrosoft, LogoMicrosoft, LogoMicrosoft, LogoMicrosoft];

  return (
    <div className=" flex items-center justify-center">
      {/* 1. */}
      <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
          {/* 3 */}
          {images.map((image, index) => {
            return (
              <div key={index} className="flex justify-center items-start w-[20rem]">
                <img src={image} />
              </div>
            );
          })}
          {images.map((image, index) => {
            return (
              <div key={index} className="flex justify-center items-start w-[20rem]">
                <img src={image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
