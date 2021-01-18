import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          shopify
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
