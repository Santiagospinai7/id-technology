import React from "react";
import { Color } from "./classes/Color";
import styled, { css } from "styled-components";
import anyDeskLogo from "../img/Partner_AnyDesk.png";

const Slider = () => {
  const slide = (
    <div className="logos-slide">
      <img src={anyDeskLogo} alt="anyDesk_logo" />
      <img src={anyDeskLogo} alt="anyDesk_logo" />
      <img src={anyDeskLogo} alt="anyDesk_logo" />
      <img src={anyDeskLogo} alt="anyDesk_logo" />
      <img src={anyDeskLogo} alt="anyDesk_logo" />
    </div>
  );

  return (
    <SliderBar>
      <div className="logos">
        {React.cloneElement(slide, {className: "logos-slide"})}
        {React.cloneElement(slide, {className: "logos-slide"})}
      </div>
    </SliderBar>
  );
}

const SliderBar = styled.div`
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    background: ${Color.getColor('grey_light')};
    overflow: hidden;
    padding: 2rem 0rem;
    white-space: nowrap;
    position: relative;
  }

  .logos:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 80%);
    z-index: 2;
  }
  
  .logos:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 80%);
    z-index: 2;
  }

  .logos-slide {
    display: inline-block;
    animation: 20s slide infinite linear;
  }

  .logos-slide img {
    height: 30px;
    margin: 0 2.5rem;
  }
`


export default Slider
