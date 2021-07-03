import styled from 'styled-components';

export const StyledToastContainer = styled.div`
  position: fixed;
  margin-top: 14px;
  box-sizing: border-box;
  z-index: 999999;
  top: 0;

  &.top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.5s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.top-center {
    left: ${({ width }) => `calc(50% - ${width / 2}px)`};
    transition: transform 0.5s ease-in-out;
    animation: toast-in-top 0.7s;
  }

  &.top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.5s ease-in-out;
    animation: toast-in-left 0.7s;
  }
`;

export const StyledToast = styled.div`
  ${({ width, type, theme }) =>
    `
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: ${width}px;
      background: ${theme.notification.background[type]};
      color: ${theme.notification.text[type]};
      position: relative;
      pointer-events: auto;
      overflow: hidden;
      margin: 0 0 6px;
      padding: 15px;
      margin-bottom: 15px;
      max-height: 100px;
      border-radius: 4px;
      box-shadow: 0 0 10px #999;
      opacity: .9;
      background-position: 15px;
      background-repeat: no-repeat;

      &.top-right {
        top: 12px;
        right: 12px;
        transition: transform 0.5s ease-in-out;
        animation: toast-in-right 0.7s;
      }

      &.top-center {
        left: ${({ width }) => `calc(50% - ${width / 2}px)`};
        transition: transform 0.5s ease-in-out;
        animation: toast-in-top 0.7s;
      }

      &.top-left {
        top: 12px;
        left: 12px;
        transition: transform 0.5s ease-in-out;
        animation: toast-in-left 0.7s;
      }

      & p,
      & h3 {
        margin: 0;
        padding: 0;
      }

      & h3 {
        margin-bottom: 3px;
        text-transform: capitalize;
      }

      & > i {
        padding: 0 15px;
        color: ${theme.notification.text[type]};
        font-size: 22px;
      }
  `}
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  height: 100%;

  & i {
    font-size: 15px;
  }
`;
