import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navigation = () => {
  return (
    <Navbar
      className="px-3"
      collapseOnSelect
      scrolling
      dark
      expand="md"
      fixed="top"
      variant="light"
      bg="light"
    >
      <Navbar.Brand href="#home">Octave-lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Link>
            <Link to="laboratoire">LE LABORATOIRE</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="services">LES SERVICES</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="galerie">GALERIE</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact">CONTACT</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
