import { createGlobalStyle } from 'styled-components';
// import { Color } from './classes/Color';

// const black = new Color('#000000');
// const green-lighter = new Color('#80D5A3');

const color = {
  white: '#ffffff',
  black: '#000000',
  green_lighter: '#80D5A3',
  green_light: '#3DCC79',
  green_medium: '#2E995B',
  green_dark: '#174D2D',
  green_darkness: '#2E4D3B',
}

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: effra, sans-serif;
}

body{
    background: ${color.white};
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: ${color.green_medium};
    color: ${color.white};
    transition: all 0.5s ease;
    border-radius: 20px;
    border: 3px solid transparent;

    &:hover {
      background-color: ${color.green_dark};
      color: ${color.white};
    }
}

h2 {
  font-weight: ${color.black};
  font-size: 3rem;
}

h3 {
  color: ${color.black};
}

h4 {
  font-weight: bold;
}

p {
  padding: 2rem 0rem;
  color: ${color.black};
  font-size: 1.1rem;

  strong {
    color: ${color.green_medium};
  }
}
`

export default GlobalStyle;