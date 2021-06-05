import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;

  .track-info {
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p {
      margin: 0;
      font-size: ${({ theme }) => theme.text.fontSize.md};
    }

    & > p:last-child {
      font-size: ${({ theme }) => theme.text.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
