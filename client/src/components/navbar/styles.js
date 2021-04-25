import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 60px;
  opacity: 0.9;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  i.hamburger {
    display: none;
    font-size: ${({ theme }) => theme.text.fontSize.xl};
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
    @media (max-width: 900px) {
      display: block;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.light};
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
  height: 100%;
  font-size: ${({ theme }) => theme.text.fontSize.md};
  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.text.fontSize.sm};
  }
  @media (max-width: 900px) {
    display: none;
  }

  a.active-nav li {
    color: #ffdead;
  }

  a:hover li {
    color: #fdf5e6;
  }

  span {
    display: block;
    height: 100;
    width: 3px;
    border-right: 2px solid ${({ theme }) => theme.colors.light};
  }

  li {
    padding: 0 0.6rem;
    color: ${({ theme }) => theme.colors.light};
  }

  li.nav-account {
    display: flex;
  }

  li.nav-account div {
    margin-right: 7px;
  }

  li.nav-account img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  /* li:last-child {
    padding-right: 0;
  } */
`;
