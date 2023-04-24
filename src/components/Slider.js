import React from "react";
import { Color } from "./classes/Color";
import styled, { css } from "styled-components";
import anyDeskLogo from "../img/Partner_AnyDesk.png";

const Slider = () => {
  return (
    <SliderBar>
      <div className="slide-track">
        <div className="slide">
          <img src={anyDeskLogo} alt="anyDesk_logo" />
        </div>
        <div className="slide">
          <img src={anyDeskLogo} alt="anyDesk_logo" />
        </div>
        <div className="slide">
          <img src={anyDeskLogo} alt="anyDesk_logo" />
        </div>
        <div className="slide">
          <img src={anyDeskLogo} alt="anyDesk_logo" />
        </div>
        <div className="slide">
          <img src={anyDeskLogo} alt="anyDesk_logo" />
        </div>
      </div>
    </SliderBar>
  )
}

const SliderBar = styled.div`
  width: 100%;
  height: 15vh;
  margin: auto;
  overflow: hidden;
  position: relative;
  background: ${Color.getColor('grey_light')};
  align-items: center;
  justify-content: center;

  /* @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 30));
    }
  } */

  .slide-track {
    animation: scroll 10s linear infinite;
    display: flex;
    width: calc(5px * 14);
  }

`


export default Slider
