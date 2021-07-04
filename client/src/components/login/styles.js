import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const StyledLogoWrapper = styled.div`
  flex: 1 1 0%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: ${({ theme }) => theme.boxShadow.sm};
  }

  i {
    z-index: 1;
    font-size: 120px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledWrapper = styled.div`
  flex: 1 1 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: ${props => props.theme.header.fontSize.xl};
  color: ${props => props.theme.colors.dark};
  margin: 0;
`;

export const StyledLogo = styled.div`
  top: 10%;
  width: 200px;
  height: 200px;
  margin: 2rem 0;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.a`
  background-color: ${props => props.theme.colors.green};
  font-size: ${props => props.theme.text.fontSize.md};
  color: ${props => props.theme.colors.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.colors.spotifyGreen};
  }

  &:active {
    transform: scale(0.97, 0.97);
  }
`;
