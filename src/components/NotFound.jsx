import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import notFoundImage from '../img/not-found.jpg'; //  background image

const NotFound = () => {
  return (
    // Container with background image
    <div 
      className="not-found-container"
      style={{
        backgroundImage: `url(${notFoundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%', // Adjust to position the image

        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <Container className="d-flex justify-content-center align-items-center">
        <Card 
          className="text-center not-found-card"
          style={{
            maxWidth: '500px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
        >
          <Card.Body>
            <h1 className="display-1" style={{ color: '#dc3545', fontWeight: 'bold' }}>404</h1>
            <h2 className="display-6 mb-4">Oops! You've ventured too far</h2>
            <p className="lead mb-4">
              The page you're looking for seems to have vanished into the digital void.
            </p>
            
            <NavLink to="/" className="nav-link d-inline-block">
              <Button 
                variant="primary" 
                size="lg"
                className="pulse-button"
                style={{ 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  borderRadius: '50px',
                  padding: '0.75rem 2rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                Return to Safety
              </Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default NotFound;