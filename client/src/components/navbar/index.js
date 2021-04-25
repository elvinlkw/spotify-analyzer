import React from "react";
import { StyledNavbar, StyledLogoWrapper, StyledNavItems } from "./styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = [
    {
      id: 0,
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      id: 1,
      name: "Search",
      route: "/search",
    },
    {
      id: 2,
      name: "Web Player",
      route: "/web-player",
    },
    {
      id: 3,
      name: "Top Tracks",
      route: "/tracks",
    },
    {
      id: 4,
      name: "Top Artists",
      route: "/artists",
    },
  ];

  const { display_name, images } = useSelector((state) => state.auth.user);

  const getFirstName = (display_name) => display_name.trim().split(" ")[0];

  return (
    <StyledNavbar>
      <div className="container">
        <StyledLogoWrapper>
          <i className="fab fa-spotify" />
          <p>Spotify Analyzer</p>
        </StyledLogoWrapper>
        <i className="hamburger fas fa-bars"></i>
        <StyledNavItems>
          {items.map((item) => (
            <NavLink key={item.id} activeClassName="active-nav" to={item.route}>
              <li>{item.name}</li>
            </NavLink>
          ))}
          <span />
          <li className="nav-account">
            <div>
              {getFirstName(display_name)}
              <i className="fas fa-caret-down"></i>
            </div>
            <img src={images[0].url} alt="profilePic" />
          </li>
        </StyledNavItems>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
