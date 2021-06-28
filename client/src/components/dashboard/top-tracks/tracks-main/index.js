import React from "react";
import { StyledInfo, StyledImageWrapper, TopTrackWrapper } from "./styles";

const TracksMain = ({ tracks }) => {
  return (
    <TopTrackWrapper>
      <StyledImageWrapper>
        <img src={tracks[0].album.images[0].url} alt="top-track-artwork" />
      </StyledImageWrapper>
      <div>
        <StyledInfo>
          <div>
            <p>{tracks[0].artists.map((artist) => artist.name).join(", ")}</p>
            <h2>{tracks[0].name}</h2>
          </div>
        </StyledInfo>
      </div>
    </TopTrackWrapper>
  );
};

export default TracksMain;
