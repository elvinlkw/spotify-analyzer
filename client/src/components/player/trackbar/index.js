import React, { useRef } from "react";
import {
  StyledTrackbarWrapper,
  StyledProgressContainer,
  StyledProgress,
} from "./styles";
import controlsService from "services/controlsService";

const sizeObj = {
  sm: 25,
  md: 50,
  lg: 80,
};

const Trackbar = ({ progress, size, totalDuration }) => {
  const trackbarRef = useRef(null);

  const handleSeek = async (e) => {
    const newWidth = e.nativeEvent.offsetX;
    const totalWidth = trackbarRef.current.offsetWidth;
    const newSeekTime = Math.floor((newWidth / totalWidth) * totalDuration);

    await controlsService.seek(newSeekTime);
  };

  return (
    <StyledTrackbarWrapper size={sizeObj[size]}>
      <StyledProgressContainer onClick={handleSeek} ref={trackbarRef}>
        <StyledProgress width={progress} />
      </StyledProgressContainer>
    </StyledTrackbarWrapper>
  );
};

export default Trackbar;
