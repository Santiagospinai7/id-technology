import "../../style/Slider.css";
import logos from "../../utils/logos";

const Slider = () => {
  return (
    <div className="flex items-center justify-center bg-[#f7f7f7] py-8">
      <div className="w-full">
        {/* Optional header for context */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm font-medium">Empresas que confían en nosotros</p>
        </div>
        
        <div className="w-full h-28 overflow-hidden relative flex items-center">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling logos container */}
          <div 
            className="flex items-center gap-16 animate"
            style={{ width: 'max-content' }}
            role="marquee"
            aria-label="Logo carousel of client companies"
          >
            {/* Duplicate logos twice for seamless infinite scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex justify-center items-center min-w-[10rem] logo-item cursor-pointer"
                title={logo.alt}
              >
                <img 
                  src={logo.image} 
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
