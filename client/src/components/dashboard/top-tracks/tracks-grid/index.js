import React, { Fragment } from 'react';
import { StyledHeader, StyledWrapper } from './styles';
import { isCurrentTrackPlaying, playSong } from 'utils';
import { useSelector } from 'react-redux';

const TracksGrid = ({ tracks }) => {
  const { deviceId, current, isPlaying } = useSelector(state => state.player);

  const handleClick = track => {
    playSong(track, current, isPlaying, deviceId);
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
