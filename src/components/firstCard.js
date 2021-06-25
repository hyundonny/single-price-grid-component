import React from "react";
import styled from "styled-components";

import StyledCard from "../styles/Card";

const StyledFirstCard = styled(StyledCard)`
  background-color: var(--white);

  .first-card__title {
    color: var(--cyan);
  }

  .first-card__subtitle {
    color: var(--bright-yellow);
    font-weight: 400;
    padding-bottom: 1rem;
  }

  .first-card__body {
    color: var(--grayish-blue);
    font-weight: 400;
    opacity: 0.6;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  @media (min-width: 1440px) {
    .first-card__body {
      font-size: 1rem;
    }
  }
`;

const FirstCard = () => {
  return (
    <StyledFirstCard type="first">
      <div className="title first-card__title">Join our community</div>
      <div className="first-card__subtitle">
        30-day, hassle-free money back guarantee
      </div>
      <div className="first-card__body">
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills
      </div>
    </StyledFirstCard>
  );
};

export default FirstCard;
