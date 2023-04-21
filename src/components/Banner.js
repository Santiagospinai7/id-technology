import React from "react";
import banner from "../img/Banner.png";

import styled, { css } from "styled-components";

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

const About = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .text {
    max-width: 100%;
    min-width: 100%;
    line-height: 1.25;
    text-align: left;
    padding-left: 0;
  }

  .image {
    flex-basis: 25%;
    margin-right: 5rem;

    img {
      height: 100%;
      width: 25rem;
      aspect-ratio: 0.99 / 1;
    }
  }

  .description {
    flex-basis: 50%;
  }

  @media (max-width: 768px) {
    display: block;
    align-items: center;
    justify-content: center;
    padding: 0rem  5rem;
    

    .description {
      text-align: center;
      padding: 1rem;

      p {
        text-align: center;
      }
    }

    .image {
      /* center image */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0 !important;

      img {
        width: 50%;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 0rem 1.5rem;
  }
`;

export default Banner;
