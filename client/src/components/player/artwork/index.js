import React, { Fragment } from "react";
import { StyledWrapper } from "./styles";
import { combineArtists } from "../utils";
import { isEmptyObject } from "utils";

const Artwork = ({ data }) => {
  return (
    <StyledWrapper>
      {isEmptyObject(data) ? (
        <div className="image-container"></div>
      ) : (
        <Fragment>
          <img
            src={data?.item.album.images[2].url}
            alt="Artwork"
            className="image-container"
          />
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
