import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    // colors
    --cyan: hsl(179, 62%, 43%);
    --bright-yellow: hsl(71, 73%, 54%);
    --light-gray: hsl(204, 43%, 93%);
    --grayish-blue: hsl(218, 22%, 67%);

    // screen widths
    --mobile: 375px;
    --desktop: 1440px;
  }

  *,
  *::before,
  *::after {
	  box-sizing: inherit;
	  margin: 0;
	  padding: 0;
    font-family: 'Karla', sans-serif;
  }
`;

export default GlobalStyle;
