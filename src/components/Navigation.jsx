import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import shoppingTagLogo from '../img/shopping-tag.png'; // Import the logo

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <div 
            className="logo-container me-2" 
            style={{
              background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
              borderRadius: '12px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            <Image 
              src={shoppingTagLogo} 
              alt="E-Commerce Logo" 
              style={{
                height: '40px',
                width: 'auto',
                filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.2))'
              }}
            />
          </div>
          <span className="ms-2">E-Commerce App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/offers">
              Special Offers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;