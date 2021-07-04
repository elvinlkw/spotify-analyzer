import React from 'react';
import { StyledControlsWrapper } from './styles';
import ControlsService from 'services/controlsService';

const Controls = ({ playerState: { isPlaying, isShuffle, isRepeat } }) => {
  const handlePlayButton = () => {
    if (isPlaying) {
      handlePauseTrack();
    } else {
      handlePlayTrack();
    }
  };

  const handlePlayTrack = async () => await ControlsService.play();
  const handlePauseTrack = async () => await ControlsService.pause();
  const handleNextTrack = async () => await ControlsService.next();
  const handlePrevTrack = async () => await ControlsService.prev();
  const handleShuffleTrack = async () =>
    await ControlsService.shuffle(!isShuffle);

  return (
    <StyledControlsWrapper>
      <div onClick={handleShuffleTrack}>
        <i
          className={`fas fa-random controls-${
            isShuffle ? 'active' : 'inactive'
          }`}
        />
      </div>
      <div onClick={handlePrevTrack}>
        <i className='fas fa-step-backward controls-secondary' />
      </div>
      <div>
        <i
          id='web-player-icon-play'
          onClick={handlePlayButton}
          className={`fas fa-${isPlaying ? 'pause' : 'play'}-circle`}
        />
      </div>
      <div onClick={handleNextTrack}>
        <i className='fas fa-step-forward controls-secondary' />
      </div>
    </StyledControlsWrapper>
  );
};

export default Controls;
