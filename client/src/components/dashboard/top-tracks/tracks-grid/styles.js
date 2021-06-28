import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  text-align: center;
  margin-top: 2rem;
  opacity: 0;
  animation: ani1 1.5s ease-out 1.5s forwards;

  & img {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.sm};
    border-radius: 4px;
  }

  & p,
  & h3 {
    margin: 0;
    padding: 0;
  }

  & p {
    padding: 5px 0;
    font-size: ${({ theme }) => theme.text.fontSize.sm};
  }

  & h3 {
    font-size: ${({ theme }) => theme.text.fontSize.sm};
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledHeader = styled.h2`
  opacity: 0;
  animation: ani1 1.5s ease-out 1.5s forwards;
`;
