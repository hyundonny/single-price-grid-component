import React from "react";
import styled from "styled-components";

import StyledCard from "../styles/Card";

const StyledThirdCard = styled(StyledCard)`
  background-color: var(--lighter-cyan);

  .third-card__title {
    color: var(--white);
    padding-bottom: 1rem;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .third-card__list {
    list-style: none;

    & > * + * {
      padding-top: 0.3rem;
    }
  }

  .third-card__li {
    color: var(--light-gray);
    font-size: 0.75rem;
    opacity: 0.8;
  }

  @media (min-width: 1440px) {
    .third-card__li {
      font-size: 0.85rem;
      line-height: 1.35;
    }
  }
`;

const list = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our GitHub repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

const listItems = list.map((elem) => {
  return <li className="third-card__li">{elem}</li>;
});

const ThirdCard = () => {
  return (
    <StyledThirdCard type="third">
      <div className="title third-card__title">Why Us</div>
      <ul className="third-card__list">{listItems}</ul>
    </StyledThirdCard>
  );
};

export default ThirdCard;
