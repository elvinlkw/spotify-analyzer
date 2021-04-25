import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.header.fontSize.xl};
  color: ${(props) => props.theme.colors.dark};
  margin: 3rem 0 0 0;
`;

export const StyledLogo = styled.div`
  top: 10%;
  width: 200px;
  height: 200px;
  margin: 2rem 0;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.a`
  background-color: ${(props) => props.theme.colors.green};
  font-size: ${(props) => props.theme.text.fontSize.md};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
`;
