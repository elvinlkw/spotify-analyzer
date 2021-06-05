import styled from "styled-components";
import theme from "theme";

export const StyledWrapper = styled.div`
  display: flex;

  .image-container {
    width: 75px;
    height: 75px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .image-container.no-track {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.light};
  }

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
