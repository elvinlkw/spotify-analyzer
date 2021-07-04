import styled from 'styled-components';

export const StyledArrow = styled.div`
  i {
    position: fixed;
    right: 20px;
    bottom: 60px;
    font-size: 25px;
    z-index: 100;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    i {
      font-size: 15px;
    }
  }
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #eee;
  z-index: 99;
  -webkit-box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);
  -moz-box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);
  box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);

  &.hide-player {
    animation: slide-down 1s forwards;
  }

  &.show-player {
    animation: slide-up 1s forwards;
  }
`;

export const StyledControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px 10px;
`;
