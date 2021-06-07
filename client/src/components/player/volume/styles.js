import styled from "styled-components";
import theme from "theme";

export const StyledVolumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    margin-right: 10px;
  }
`;

export const StyledVolumeKnob = styled.div`
  width: 100px;
  height: 6px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  display: flex;
  position: relative;
  background: #eee;

  &:hover > div {
    opacity: 1;
  }
`;

export const StyledVolume = styled.div`
  width: ${({ level }) => level}%;
  background: ${theme.colors.spotifyGreen};
  opacity: 0.7;
  border-radius: 5px;
  height: 100%;
`;

export const StyledVolumeIcon = styled.div`
  cursor: pointer;
`;
