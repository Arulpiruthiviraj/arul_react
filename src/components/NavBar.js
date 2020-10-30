import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import portFolioSvg from "../assets/images/portfolio.svg";

function NavBar({ routes }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={NavLink} to={"/"} activeClassName="active" exact>
        <img
          alt=""
          src={portFolioSvg}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {"Arulpiruthiviraj"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="">
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
