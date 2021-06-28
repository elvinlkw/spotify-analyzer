import React from "react";
import { useQuery } from "react-query";
import UserService from "services/userService";
import Spinner from "components/spinner";

const TopArtists = () => {
  const { data: artists, isLoading } = useQuery("myTopArtists", () =>
    UserService.getMyTop("artists", "long_term")
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {artists.items.map((artist) => (
        <p key={artist.id}>{artist.name}</p>
      ))}
    </div>
  );
};

export default TopArtists;
