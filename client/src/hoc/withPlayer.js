import React, { useEffect } from "react";

const withPlayer = (Component) => {
  const Player = (props) => {
    useEffect(() => {}, []);
    return <Component {...props} />;
  };
  return Player;
};

export default withPlayer;
