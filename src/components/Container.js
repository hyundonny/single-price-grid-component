import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 315px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-areas: "first" "second" "third";
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 0.5rem;

  @media (min-width: 900px) {
    max-width: 670px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "first first" "second third";
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
