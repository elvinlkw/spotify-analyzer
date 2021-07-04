import React, { useEffect } from 'react';
import {
  StyledContainer,
  StyledLogoWrapper,
  StyledButton,
  StyledLogo,
  StyledTitle,
  StyledImg,
  StyledWrapper,
} from './styles';
import bgLogin from 'assets/img/bg-login.png';
import logo from 'assets/img/lp-logo.png';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const API_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_LOCAL_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPES}`;

const Login = () => {
  const { loading, isLoggedIn } = useSelector(state => state.auth);
  const { push } = useHistory();

  useEffect(() => {
    if (!loading && isLoggedIn) {
      push('/');
    }
  }, [loading, isLoggedIn, push]);

  return (
    <StyledContainer>
      <StyledLogoWrapper>
        <img src={bgLogin} alt='bg-login' />
        <i className='fab fa-spotify'></i>
      </StyledLogoWrapper>
      <StyledWrapper>
        <StyledTitle>Spotify Data Analyzer</StyledTitle>
        <StyledLogo>
          <StyledImg src={logo} alt='logo' />
        </StyledLogo>
        <StyledButton href={API_URL}>Login via Spotify</StyledButton>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Login;
