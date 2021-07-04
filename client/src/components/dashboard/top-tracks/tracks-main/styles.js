import styled from 'styled-components';

export const TopTrackWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  & > div {
    display: flex;
    width: 100%;
  }

  & > div:last-child {
    justify-content: flex-start;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > div {
      width: auto;
      margin-bottom: 1rem;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  justify-content: flex-end;
  position: relative;

  & > button {
    position: absolute;
    display: none;
    bottom: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.spotifyGreen};
    justify-content: center;
    align-items: center;
    padding: 0;
    z-index: 5;
  }

  &:hover > button {
    display: flex;
  }

  & > button > i {
    font-size: 25px;
  }

  & > button:hover {
    transform: scale(1.1);
  }

  & > button:active {
    transform: scale(1.2);
  }

  & > img {
    z-index: 1;
    border-radius: 4px;
    width: 400px;
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    opacity: 0;
    animation: ani1 0.75s ease-out 1s forwards;

    @media (max-width: 900px) {
      width: 300px;
    }

    @media (max-width: 767px) {
      width: 200px;
    }
  }
`;

export const StyledInfo = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  padding: 20px 100px;
  background: ${({ theme }) => theme.colors.spotifyGreen};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  z-index: 2;
  text-align: center;
  transform: skew(-20deg);
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  opacity: 0;
  animation: ani1 1s ease-out 1.25s forwards;

  & > div {
    transform: skew(20deg);
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
  }

  & h2,
  & p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  & p {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.text.fontSize.md};
  }

  & h2 {
    font-size: ${({ theme }) => theme.header.fontSize.md};
  }

  @media (max-width: 900px) {
    & p {
      font-size: ${({ theme }) => theme.text.fontSize.sm};
    }
    & h2 {
      font-size: ${({ theme }) => theme.header.fontSize.sm};
    }
  }

  @media (max-width: 767px) {
    transform: skew(0deg);
    -webkit-transform: skew(0deg);
    -moz-transform: skew(0deg);
    -o-transform: skew(0deg);
    background: none;
    box-shadow: none;

    & > div {
      transform: skew(0deg);
      -webkit-transform: skew(0deg);
      -moz-transform: skew(0deg);
      -o-transform: skew(0deg);
    }

    & h2 {
      font-size: ${({ theme }) => theme.header.fontSize.xs};
    }
  }
`;
