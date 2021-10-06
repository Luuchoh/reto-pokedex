import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import pokedex from "../assets/img/pokedex.png";

import { Colors, LINK } from "../assets/styles/style";

import { logoutFirebase } from "../redux/actions/authActions";

const NavbarComp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutFirebase());
    history.push("/");
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              src={pokedex}
              width="40"
              height="40"
              className="d-inline-block align-top mr-3"
              alt="Pokedex | pokeapi"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            id="navbar-dark-example"
            className="justify-content-end"
          >
            <LINK color={Colors.primaryTextColor} hoverColor={Colors.dividerColor} width={'20%'} to="/">Home</LINK>
            <Nav>
              {auth.isAuthenticated ? (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={auth.name}
                  menuVariant="dark"
                >
                  <LINK to="/mypokemons">My pokemons</LINK>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={auth.name}
                  menuVariant="dark"
                >
                  <LINK to="/login">Login</LINK>
                  <LINK to="/signup">Register</LINK>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
