import React from "react";
import banner from "../img/Banner.png";

import styled from "styled-components";

const Banner = () => {
  return (
    <About>
      <div className="image">
          <img src={banner} alt="banner_img" />
      </div>
      <div className="description">
        <div className="title">
          <h2>Una alianza que te conviene</h2>
        </div>
        <div className="text">
          <p>Ayudamos a las empresas a <strong> ahorrar su dinero, proteger su información y prevenir los riesgos del área tecnológica</strong>, a través de soluciones como soporte técnico, inteligencia de negocios, distribución de hardware, desarrollo y distribución de sofware.</p>
        </div>
        <div className="button">
          <button>AGENDA TU DIAGNOSTICO GRATUITO</button>
        </div>
      </div>
    </About>
  );
}

//Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;
  color: black;

  .image{
    flex: 1;
    padding-right: 5rem;

    img {
      width: 25rem;
    }
  }
`;

export default Banner;
