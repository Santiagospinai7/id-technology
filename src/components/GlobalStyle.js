import { createGlobalStyle } from 'styled-components';
import { Color } from './classes/Color';

// Create colors
new Color({name: 'black', code: '#000000'});
new Color({name: 'white', code: '#ffffff'});
new Color({name: 'green_lighter', code: '#80D5A3'});
new Color({name: 'green_light', code: '#3DCC79'});
new Color({name: 'green_medium', code: '#2E995B'});
new Color({name: 'green_dark', code: '#174D2D'});
new Color({name: 'green_darkness', code: '#2E4D3B'});
new Color({name: 'grey_light', code: '#F5F5F5'});

const isLight = true;

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "effra", sans-serif;
}

body{
    background: ${(isLight) ? Color.getColor('white') : Color.getColor('black')};
}

button{
    font-weight: medium;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: ${Color.getColor('green_medium')};
    color: ${Color.getColor('white')};
    transition: all 0.5s ease;
    border-radius: 50px;
    border: 3px solid transparent;
    box-shadow: 0px 0px 2px ${Color.getColor('green_medium')};

    &:hover {
      background-color: ${Color.getColor('green_dark')};
      box-shadow: 0px 0px 1px ${Color.getColor('green_darkness')};
      color: ${Color.getColor('white')};
    }
}

h2 {
  font-weight: ${(isLight) ? Color.getColor('black') : Color.getColor('white')};
  font-size: 2.5rem;
}

h3 {
  color: ${(isLight) ? Color.getColor('black') : Color.getColor('white')};
}

h4 {
  font-weight: bold;
}

p {
  padding: 2rem 0rem;
  color: ${(isLight) ? Color.getColor('black') : Color.getColor('white')};
  font-size: 1.1rem;

  strong {
    color: ${Color.getColor('green_medium')};
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    padding: 1rem 0rem;
    color: ${(isLight) ? Color.getColor('black') : Color.getColor('white')};
    font-size: 1rem;

    strong {
      color: ${Color.getColor('green_medium')};
    }
  }

  button {
    font-weight: medium;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: ${Color.getColor('green_medium')};
    color: ${Color.getColor('white')};
    /* transition: all 0.5s ease; */
    border-radius: 50px;
    border: 3px solid transparent;
    box-shadow: 0px 0px 2px ${Color.getColor('green_medium')};


    &:hover {
      background-color: ${Color.getColor('green_dark')};
      box-shadow: 0px 0px 1px ${Color.getColor('green_darkness')};
      color: ${Color.getColor('white')};
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.75rem;
    }
  }
}

`

export default GlobalStyle;