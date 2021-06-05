import React, { Fragment } from "react";
import { StyledWrapper } from "./styles";
import { combineArtists } from "../utils";

const Artwork = ({ data }) => {
  return (
    <StyledWrapper>
      {data && (
        <Fragment>
          <img src={data.item.album.images[2].url} alt="Artwork" />
          <div className="track-info">
            <p>{data.item.name}</p>
            <p>{combineArtists(data.item.artists)}</p>
          </div>
        </Fragment>
      )}
    </StyledWrapper>
  );
};

export default Artwork;
