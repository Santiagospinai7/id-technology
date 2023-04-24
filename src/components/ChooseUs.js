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

        <div className="choose-cards">
          <div className="choose-card">
            <div className="content">
              <img src={escogernos_1} alt="escorgernos_1_img" />
              <p>
                <strong>Trabajamos juntos a partir de oportunidades de mejora identificadas</strong>
                <br /><br />
                Todos nuestros clientes disfrutan de un diagnostico inicial gratuito, que les ayudará a identificar oportunidades de mejora en su infraestructura tecnológica, lo que se traduce en optimización de recursos y rendmiento empresarial.
              </p>
              <button>AGENDA TU DIAGNOSTICO GRATUITO</button>
            </div>
          </div>
          <div className="choose-card">
            <div className="content">
              <img src={escogernos_2} alt="escorgernos_1_img" />
              <p>
                <strong>Nuestro propósito es convertirnos en tu aliado estratégico</strong>
                <br /><br />
                Nos consideramos aliados estrategicos de nuestros clientes, ya que prestamos un servicio holistico y completo que se adapta a sus necesidades especificas, lo que se traduce en lealtad y alta calidad de productos y servicios ofrecidos.
              </p>
              <button>CONOCE NUESTROS SERVICIOS</button>
            </div>
          </div>
        </div>
      </div>
    </StyledChooseUs>
  )
};

const StyledChooseUs = styled.div`
  padding: 2.5rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  background: ${Color.getColor('white')};

  .choose-us {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */

    h3 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .choose-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    gap: 7.5%;
  }

  .choose-card {
    flex-basis: 40%;
    height: 100%;
    min-width: 400px;
    max-width: 550px;
    width: 100%;
    /* background-color: green; */
    margin: 1rem 0rem;

    img {
      width: 7.5rem;
      height: 7.5rem;
    }

    strong {
      color: ${Color.getColor('black')};
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`

export default ChooseUs;