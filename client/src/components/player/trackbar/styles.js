import styled from "styled-components";
import theme from "theme";

export const StyledTrackbarWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}%;
  margin: 0 auto;
`;

export const StyledProgressContainer = styled.div`
  background: #eee;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 8px;
  width: 100%;
  display: flex;
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`;

export const StyledProgress = styled.div`
  background-color: ${theme.colors.spotifyGreen};
  opacity: 0.7;
  border-radius: 5px;
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 0.1s linear;
`;
