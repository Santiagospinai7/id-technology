import React from "react";
import styled from "styled-components";
import { Color } from "./classes/Color";
import desarrolloDeSoftware from "../img/Desarollo_Normal.png";
import soporteTecnico from "../img/Soporte_Hoover.png";
import distribucion from "../img/Distribucion_Normal.png";
import inteligenciaNegocio from "../img/Inteligencia_Normal.png";

const Services = () => {
  return (
    <ServicesStyled>
      <div className="services">
        <h3>Ayudamos a fortalecer tu empresa por medio de:</h3>

        <div className="container">

          <div className="service-card">
            <div className="content">
              <img src={desarrolloDeSoftware} alt="icon_img" />
              <h3>Desarrollo de Software</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <a href="#">Leer más</a>
            </div>
          </div>

          <div className="service-card">
            <div className="content">
              <img src={soporteTecnico} alt="icon_img" />
              <h3>Soporte técnico</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <a href="#">Leer más</a>
            </div>
          </div>

          <div className="service-card">
            <div className="content">
              <img src={distribucion} alt="icon_img" />
              <h3>Distribución de hardware y software</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <a href="#">Leer más</a>
            </div>
          </div>

          <div className="service-card">
            <div className="content">
              <img src={inteligenciaNegocio} alt="icon_img" />
              <h3>Inteligencia de negocios</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <a href="#">Leer más</a>
            </div>
          </div>
          
        </div>
      </div>
    </ServicesStyled>
  )
}

const ServicesStyled = styled.div`
  height: 80vh;
  width: 100%;
  background: ${Color.getColor('grey_light')};

  .container {
    width: 85%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`

export default Services;