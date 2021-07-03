import { StyledCloseButton, StyledToast, StyledToastContainer } from './styles';
import PropTypes from 'prop-types';
import React from 'react';
import theme from 'theme';
import { useSelector } from 'react-redux';

const Toast = ({ showIcon, width, position }) => {
  const alerts = useSelector(state => state.alert);
  const hasAlerts = alerts !== null && alerts.length > 0;

  return (
    <StyledToastContainer className={position} width={width}>
      {hasAlerts &&
        alerts.map(alert => (
          <StyledToast
            key={alert.id}
            className={position}
            width={width}
            type={alert.type}
          >
            {showIcon && <i className={theme.icon[alert.type]} />}
            <div>
              <h3>{alert.title}</h3>
              <p>{alert.text}</p>
            </div>
            <StyledCloseButton>
              <i className={theme.icon.close} />
            </StyledCloseButton>
          </StyledToast>
        ))}
    </StyledToastContainer>
  );
};

Toast.defaultProps = {
  showIcon: false,
  width: 400,
  position: 'top-right',
};

Toast.propTypes = {
  showIcon: PropTypes.bool,
  width: PropTypes.number,
  position: PropTypes.string,
};

export default Toast;
