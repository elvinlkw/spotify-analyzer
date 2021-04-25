import React from "react";
import {
  StyledWrapper,
  StyledButton,
  StyledLogo,
  StyledTitle,
  StyledImg,
} from "./styles";
import logo from "../../assets/img/lp-logo.png";

const API_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_LOCAL_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPES}`;

const Login = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Spotify Data Analyzer</StyledTitle>
      <StyledLogo>
        <StyledImg src={logo} alt="logo" />
      </StyledLogo>
      <StyledButton href={API_URL}>Login</StyledButton>
    </StyledWrapper>
  );
};

export default Login;
