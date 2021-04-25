import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
