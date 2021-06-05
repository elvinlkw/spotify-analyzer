import styled from "styled-components";

export const StyledControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    cursor: pointer;
  }

  i:active {
    transform: scale(0.92, 0.92);
  }

  i.controls-secondary {
    font-size: 20px;
    color: #aaa;
    transition: color 0.2s ease-in;
  }

  i.controls-secondary:hover,
  i#web-player-icon-play:hover {
    color: #000;
  }

  /* i.controls-secondary:active {
    transform: scale(0.92, 0.92);
  } */

  #web-player-icon-play {
    font-size: 40px;
    margin: 0 20px;
    color: #444;
  }
`;
