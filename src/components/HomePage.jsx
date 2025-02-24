import React from 'react';
import { Container, Button, Card, Row, Col, Image } from 'react-bootstrap';
import './HomePage.css';
import chanelImage from '../img/chanel.jpg';

const HomePage = () => {
  return (
    <Container 
      fluid 
      className="home-page-container"
      style={{
        backgroundColor: '#f8f9fa',
        color: '#2c3e50',
        minHeight: '100vh',
        padding: '2rem',
        border: '2px solid #dee2e6',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)'
      }}
    >
    <Image 
      src={chanelImage}
        fluid
        className="homepage-image"
        style={{
          width: '100%',
          height: '50vh',
          objectFit: 'cover',
          marginBottom: '2rem',
          borderRadius: '8px'
        }}
      />
    
      <h1 className="display-4">Welcome to The E-Commerce App</h1>
      <p className="lead">Discover amazing products at great prices!!!</p>
      
      <Button 
        variant="primary" 
        size="lg"
        className="shop-now-btn"
        style={{ 
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          marginBottom: '2rem'
        }}
      >
        Shop Now
      </Button>

      <Row className="mt-5">
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>New Arrivals</Card.Title>
              <Card.Text>
                Check out our latest collection of trending items.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Get up to 50% off on selected items this week.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Member Benefits</Card.Title>
              <Card.Text>
                Join our membership program for exclusive deals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
