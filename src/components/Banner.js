import React from "react";
import home1 from "../img/home1.png";

const Banner = () => {
  return (
    <div>
      <div className="image">
          <img src={home1} alt="home_1" />
      </div>
      <div className="description">
        <div className="title">
          <h2>Una alianza que te conviene</h2>
        </div>
        <div className="text">
          <p>Ayudamos a las empresas a <strong> ahorrar su dinero, proteger su información y prevenir los riesgos del área tecnológica</strong>,a través de soluciones como soporte técnico, inteligencia de negocios, distribución de hardware, desarrollo y distribución de sofware.</p>
        </div>
        <div className="button">
          <button>AGENDA TU DIAGNOSTICO GRATIUTO</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
