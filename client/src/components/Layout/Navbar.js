import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
