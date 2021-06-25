import React from "react";
import GlobalStyle from "./styles/globalStyles";

import Container from "./components/Container";
import FirstCard from "./components/firstCard";
import SecondCard from "./components/secondCard";
import ThirdCard from "./components/thirdCard";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </Container>
    </>
  );
};

export default App;
