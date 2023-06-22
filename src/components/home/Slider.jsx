import LogoMicrosoft from "../../assets/img/Partner_Microsoft.png";
import "../../style/Slider.css";

const Slider = () => {
  const images = [LogoMicrosoft, LogoMicrosoft, LogoMicrosoft, LogoMicrosoft, LogoMicrosoft];

  return (
    <div className="flex items-center justify-center">
      <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        <div className="w-[550%] sm:w-[300%] md:w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
          {images.map((image, index) => {
            return (
              <div key={index} className="flex justify-center items-start w-[20rem]">
                <img src={image} alt={`logo-${index}`} />
              </div>
            );
          })}
          {images.map((image, index) => {
            return (
              <div key={index} className="flex justify-center items-start w-[20rem]">
                <img src={image} alt={`logo-${index}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
