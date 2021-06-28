import React, { Fragment } from "react";
import { StyledHeader, StyledWrapper } from "./styles";
import controlsService from "services/controlsService";
import { useSelector } from "react-redux";

const TracksGrid = ({ tracks }) => {
  const { deviceId } = useSelector((state) => state.player);

  const handleClick = (track) => {
    controlsService.play([track.uri], deviceId);
  };

  return (
    <Fragment>
      <StyledHeader>Your other top tracks</StyledHeader>
      <StyledWrapper>
        {tracks.slice(1).map((track) => (
          <div key={track.id}>
            <img
              onClick={() => handleClick(track)}
              src={track.album.images[1].url}
              alt="track-artwork"
            />
            <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
            <h3>{track.name}</h3>
          </div>
        ))}
      </StyledWrapper>
    </Fragment>
  );
};

export default TracksGrid;
