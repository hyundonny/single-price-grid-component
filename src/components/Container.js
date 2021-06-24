import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 330px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-areas: "first" "second" "third";
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "first first" "second third";
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
