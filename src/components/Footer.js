import React from "react";
import { Color } from "./classes/Color";
import styled from "styled-components";
import footerImg from "../img/Footer.png";
import footerLogo from "../img/Logo_footer.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              
              <h4><img src={footerLogo} alt="logo_id" /></h4>
              <ul>
                <li><a href="/">Acerca de nosotros</a></li>
                <li><a href="/">Nuestros servicios</a></li>
                <li><a href="/">Política de privacidad</a></li>
                <li><a href="/">Términos y condiciones</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="social-links">
                {/* <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a> */}
                <a href="/"><img src="" alt="instagram_icon" /></a>
                <a href="/"><img src="" alt="linkedin_icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  background-image: url(${footerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;

  .footer {
    background-image: url(${footerImg});
  }

  .container {
    max-width: 1170px;
    margin: auto;
    overflow: hidden;
    padding: 0 20px;
  }

  .footer-col {
    width: 25%;
    padding: 0 15px;
  }

  .footer-col h4 {
    font-size: 18px;
    color: ${Color.getColor('green_medium')};
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background: ${Color.getColor('green_medium')};
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: ${Color.getColor('black')};
    text-decoration: none;
    font-weight: 300;
    color: ${Color.getColor('black')};
    display: block;
    transition: all 0.3s ease;
  }

  .footer-col ul li a:hover {
    color: ${Color.getColor('black')};
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: ${Color.getColor('black')};
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  @media (max-width: 767px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
    }
  }
`;

export default Footer;
