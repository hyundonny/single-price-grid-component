import React from "react";
import styled from "styled-components";

import StyledCard from "../styles/Card";

const StyledSecondCard = styled(StyledCard)`
  background-color: var(--cyan);

  .second-card__title {
    color: var(--white);
    font-weight: 700;
    font-size: 1.1rem;
    padding-bottom: 1rem;
  }

  .second-card__subtitle {
    color: var(--light-gray);
    padding-bottom: 0.65rem;
    display: flex;
    align-items: center;
    font-size: 1rem;

    &-price {
      color: var(--white);
      font-size: 2rem;
      padding-right: 0.7rem;
    }

    &-text {
      opacity: 0.6;
    }
  }

  .second-card__body {
    color: var(--light-gray);
    padding-bottom: 1.9rem;
    opacity: 0.9;
    font-size: 1rem;
  }

  .second-card__button {
    background-color: var(--bright-yellow);
    color: var(--white);
    cursor: pointer;
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SecondCard = () => {
  return (
    <StyledSecondCard type="second">
      <h1 className="title second-card__title">Monthly Subscription</h1>
      <h2 className="second-card__subtitle">
        <span className="second-card__subtitle-price">$29</span>
        <span className="second-card__subtitle-text">per month</span>
      </h2>
      <p className="second-card__body">Full access for less than $1 a day</p>
      <button className="second-card__button" type="button">
        Sign Up
      </button>
    </StyledSecondCard>
  );
};

export default SecondCard;
