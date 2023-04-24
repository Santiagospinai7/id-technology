import React from "react";
import { Color } from "./classes/Color";
import styled from "styled-components";
import escogernos_1 from "../img/Escogernos_1.png";
import escogernos_2 from "../img/Escogernos_2.png";
import microsoft from "../img/Partner_Microsoft.png";
import anyDesk from "../img/Partner_AnyDesk.png";
import eset from "../img/Partner_Eset.png";

const ChooseUs = () => {
  return (
    <StyledChooseUs>
      <div className="choose-us">
        <h3 className="title">¿Por qué escogernos como tu aliado tecnológico?</h3>
          <div className="choose-us__item">
            <div className="choose-us__item__icon">
              <img src={escogernos_1} alt="escorgernos_1_img" />
              <p>
                <strong>Experiencia</strong> en el mercado de TI
              </p>
            </div>
            <div className="choose-us__item__icon">
              <img src={escogernos_2} alt="escorgernos_1_img" />
              <p>
                <strong>Capacitación</strong> constante de nuestros colaboradores
              </p>
            </div>
          </div>
      </div>
    </StyledChooseUs>
  )
};

const StyledChooseUs = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: ${Color.getColor('white')};

  .choose-us {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem;
  }

  .choose-us__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  .choose-us__item__icon {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
  }
`

export default ChooseUs;