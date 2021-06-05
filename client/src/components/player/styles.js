import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #eee;
  -webkit-box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);
  -moz-box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);
  box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.5);
`;

export const StyledControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px 10px;
`;
