import React, { Fragment } from 'react';
import { StyledHeader, StyledWrapper } from './styles';
import controlsService from 'services/controlsService';
import { isCurrentTrackPlaying, isCurrentTrackLoaded } from 'utils';
import { useSelector } from 'react-redux';

const TracksGrid = ({ tracks }) => {
  const { deviceId, current, isPlaying } = useSelector(state => state.player);

  const handleClick = track => {
    if (isCurrentTrackLoaded(track, current)) {
      if (isPlaying) {
        return controlsService.pause();
      }
      // resume track
      return controlsService.play();
    }

    controlsService.play([track.uri], deviceId);
  };

  return (
    <Fragment>
      <StyledHeader>Your other top tracks</StyledHeader>
      <StyledWrapper>
        {tracks.slice(1).map(track => (
          <div key={track.id}>
            <div className='artwork-container'>
              <button>
                <i
                  onClick={() => handleClick(track)}
                  className={`fas fa-${
                    isCurrentTrackPlaying(track, current, isPlaying)
                      ? 'pause'
                      : 'play'
                  }`}
                />
              </button>
              <img src={track.album.images[1].url} alt='track-artwork' />
            </div>
            <p>{track.artists.map(artist => artist.name).join(', ')}</p>
            <h3>{track.name}</h3>
          </div>
        ))}
      </StyledWrapper>
    </Fragment>
  );
};

export default TracksGrid;
