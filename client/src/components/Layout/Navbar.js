import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';
// components
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();
  const signoutUser = () => {
    dispatch(signout());
  };
  const buttonsHandler = () => {
    if (userInfo) {
      return (
        <NavDropdown title={userInfo?.name?.split(' ')[0]}>
          <NavDropdown.Item href="#/action-1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#/action-2" onClick={() => signoutUser()}>
            Signout
          </NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <Link to="/signin" className="nav-link">
          Signin
        </Link>
      );
    }
  };
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
            {buttonsHandler()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ userState }) => {
  return { userInfo: userState.userInfo };
};

export default connect(mapStateToProps)(Header);
