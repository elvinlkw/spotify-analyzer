import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.9;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ddd;
    height: 100%;
  }

  i.hamburger {
    display: none;
    font-size: ${({ theme }) => theme.text.fontSize.xl};
    cursor: pointer;
    @media (max-width: 900px) {
      display: block;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ theme }) => theme.text.fontSize.lg};

  i {
    margin-right: 8px;
    font-size: ${({ theme }) => theme.header.fontSize.lg};
  }
`;

export const StyledNavItems = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.text.fontSize.md};
  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.text.fontSize.sm};
  }
  @media (max-width: 900px) {
    display: none;
  }

  a.active-nav li {
    border-bottom: 2px black solid;
  }

  a:hover li {
    border-bottom: 2px #ccc solid;
  }

  span {
    display: block;
    height: 40%;
    width: 1px;
    background: ${({ theme }) => theme.colors.dark};
  }

  li {
    margin: 0 0.6rem;
  }

  li.nav-account {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.nav-account > div {
    cursor: pointer;
  }

  li.nav-account i {
    margin: 0 7px 0 4px;
  }

  li.nav-account img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
