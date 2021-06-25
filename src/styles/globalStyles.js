import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    // colors
    --cyan: hsl(179, 62%, 43%);
    --lighter-cyan: hsl(179, 62%, 48%);
    --bright-yellow: hsl(71, 73%, 54%);
    --light-gray: hsl(204, 43%, 93%);
    --grayish-blue: hsl(218, 22%, 67%);
    --white: #fff;

    // screen widths
    --mobile: 375px;
    --desktop: 1440px;
  }

  *,
  *::before,
  *::after {
	  box-sizing: border-box;
	  margin: 0;
	  padding: 0;
    font-family: 'Karla', sans-serif;
  }

  html {
    background-color: var(--light-gray);
    height: 100%;
  }

  body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
