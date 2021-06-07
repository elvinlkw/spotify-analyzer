import {
  StyledVolumeWrapper,
  StyledVolumeKnob,
  StyledVolume,
  StyledVolumeIcon,
} from "./styles";
import React, { useRef } from "react";
import { getVolumeIcon } from "../utils";
import controlsService from "services/controlsService";

const Volume = ({ level }) => {
  const volumeRef = useRef(null);

  const volumeIcon = getVolumeIcon(level);

  const handleVolume = async (e) => {
    const newWidth = e.nativeEvent.offsetX;
    const totalWidth = volumeRef.current.offsetWidth;
    const newVolume = Math.floor((newWidth / totalWidth) * 100);

    await controlsService.volume(newVolume);
  };
  return (
    <StyledVolumeWrapper>
      <StyledVolumeIcon>
        <i className={`fas fa-volume-${volumeIcon}`}></i>
      </StyledVolumeIcon>
      <StyledVolumeKnob onClick={handleVolume} ref={volumeRef}>
        <StyledVolume level={level} />
      </StyledVolumeKnob>
    </StyledVolumeWrapper>
  );
};

export default Volume;
