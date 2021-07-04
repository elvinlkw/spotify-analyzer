import React from 'react';
import { StyledInfo, StyledImageWrapper, TopTrackWrapper } from './styles';
import { useSelector } from 'react-redux';
import { isCurrentTrackPlaying, playSong } from 'utils';

const TracksMain = ({ tracks }) => {
  const { deviceId, current, isPlaying } = useSelector(state => state.player);
  const track = tracks[0];

  const handleClick = async () => {
    await playSong(track, current, isPlaying, deviceId);
  };

  return (
    <TopTrackWrapper>
      <StyledImageWrapper>
        <button>
          <i
            onClick={handleClick}
            className={`fas fa-${
              isCurrentTrackPlaying(track, current, isPlaying)
                ? 'pause'
                : 'play'
            }`}
          />
        </button>
        <img src={track.album.images[0].url} alt='top-track-artwork' />
      </StyledImageWrapper>
      <div>
        <StyledInfo>
          <div>
            <p>{track.artists.map(artist => artist.name).join(', ')}</p>
            <h2>{track.name}</h2>
          </div>
        </StyledInfo>
      </div>
    </TopTrackWrapper>
  );
};

export default TracksMain;
