import React from "react";
import { StyledControlsWrapper } from "./styles";
import ControlsService from "services/controlsService";

const Controls = ({ isPlaying }) => {
  const handlePlayButton = () => {
    switch (isPlaying) {
      case true:
        return handlePauseTrack();
      case false:
        return handlePlayTrack();
      default:
        return;
    }
  };

  const handlePlayTrack = async () => await ControlsService.play();
  const handlePauseTrack = async () => await ControlsService.pause();
  const handleNextTrack = async () => await ControlsService.next();
  const handlePrevTrack = async () => await ControlsService.prev();

  return (
    <StyledControlsWrapper>
      <div onClick={handlePrevTrack}>
        <i className="fas fa-step-backward controls-secondary" />
      </div>
      <div>
        <i
          id="web-player-icon-play"
          onClick={handlePlayButton}
          className={`fas fa-${isPlaying ? "pause" : "play"}-circle`}
        />
      </div>
      <div onClick={handleNextTrack}>
        <i className="fas fa-step-forward controls-secondary" />
      </div>
    </StyledControlsWrapper>
  );
};

export default Controls;
