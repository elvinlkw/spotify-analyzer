import React from "react";
import UserService from "services/userService";
import { useQuery } from "react-query";
import { StyledContainer } from "./styles";
import Spinner from "components/spinner";
import TracksMain from "./tracks-main";
import TracksGrid from "./tracks-grid";

const TopTracks = () => {
  const { data: tracks, isLoading } = useQuery("getTopTracks", () =>
    UserService.getMyTop("tracks", "long_term", 6)
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledContainer className="container">
      <h1>My Top Tracks</h1>
      <TracksMain tracks={tracks.items} />
      <TracksGrid tracks={tracks.items} />
    </StyledContainer>
  );
};

export default TopTracks;
