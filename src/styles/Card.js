import styled from "styled-components";

const StyledCard = styled.div`
  grid-area: ${(props) => props.type};
  padding: 1.5rem 1.25rem;

  @media (min-width: 900px) {
    padding: 2.25rem 3rem;
  }

  .title {
    color: var(--white);
    font-weight: 700;
    font-size: 1.1rem;
    padding-bottom: 1.25rem;
    opacity: 0.8;
  }
`;

export default StyledCard;
