import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: center;
  font-weight: 300;

  & > h1 {
    padding: 1rem;
    font-size: ${({ theme }) => theme.header.fontSize.xl};
  }
`;
