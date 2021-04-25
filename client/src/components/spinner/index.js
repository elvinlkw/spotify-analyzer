import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledImg } from "./styles";
import spinner from "../../assets/img/spinner.gif";

const Spinner = ({ width, height }) => {
  return (
    <StyledWrapper>
      <StyledImg src={spinner} alt="Loading..." width={width} height={height} />
    </StyledWrapper>
  );
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Spinner.defaultProps = {
  width: 100,
  height: 100,
};

export default Spinner;
