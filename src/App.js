import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Container from "./components/Container";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
};

export default App;
