import React from "react";
import styled from "styled-components";

import logoIdt from "../img/Logo_menu.png";

const Nav = () => {
  return (
    <StyledNav>
      <h1><a href="#"><img src={logoIdt} alt="logo_idt" /></a></h1>
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
          <a href="#">Agenda una llamada</a>
        </li>
      </ul>

    </StyledNav>
  )
};

const StyledNav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  color: green;
`

export default Nav;
