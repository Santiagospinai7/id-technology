import React from "react";
import styled from "styled-components";
import { Color } from "./classes/Color";

import logoIdt from "../img/Logo_menu.png";

const Nav = () => {
  // console.log("colors", Color.colors);
  return (
    <StyledNav>
      <div className="logo">
        <h1><a href="#"><img id="logo" src={logoIdt} alt="logo_idt" /></a></h1>
      </div>
      <div className="options">
        <ul>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <div className="button-agenda-llamada">
              <a href="#">Agenda una llamada</a>
            </div>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1.25rem 5rem;
  flex-wrap: wrap;

  .logo {
    flex-basis: 20%;
  }

  .options {
    flex-basis: 70%;
  }

  .button-agenda-llamada {
    background: ${Color.getColor('green_medium')};
    padding: 0.5rem 1rem;
    border-radius: 50px;
    transition: all 0.5s ease;

    a {
      color: ${Color.getColor('white')};

      &:hover {
        color: ${Color.getColor('white')};
      }
    }

    &:hover {
      color: ${Color.getColor('white')};
      background: ${Color.getColor('green_dark')};
    }
  }

  a {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${Color.getColor('green_dark')};
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      color: ${Color.getColor('green_medium')};
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 3rem;
    position: relative;

    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logo {
    width: 100%;
    height: 100%;
  }
`

export default Nav;
