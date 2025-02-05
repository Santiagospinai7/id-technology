import "../../style/Slider.css";
import logos from "../../utils/logos";

const Slider = () => {

  return (
    <div className="flex items-center justify-center bg-[#f7f7f7]">
      <div className="w-[100%] h-28 overflow-hidden relative flex items-center ">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate ">
          {logos.map((logo, index) => {
            return (
              <div key={index} className="flex justify-center items-start min-w-[10rem] ">
                <img src={logo.image} alt={`logo-${logo.alt}`} />
              </div>
            );
          })}
          {logos.map((logo, index) => {
            return (
              <div key={index} className="flex justify-center items-start min-w-[10rem]">
                <img src={logo.image} alt={`logo-${logo.alt}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
