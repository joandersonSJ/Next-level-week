import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap');

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  body {
    background: ${(props) => props.theme.colors.background.secondary_color};
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.colors.texts.text_color};
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.texts.title_color};
    font-family: Ubuntu;
  }

`;
