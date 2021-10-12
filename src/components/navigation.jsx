import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
          <Nav.Link href="#deets">LE LABORATOIRE</Nav.Link>
          <Nav.Link href="#memes">LES SERVICES </Nav.Link>
          <Nav.Link href="#features">GALERIE </Nav.Link>
          <Nav.Link href="#pricing">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
