import React from 'react';
import { Button } from 'react-bootstrap';

//Task 1: Integrating React-Bootstrap and Adding Buttons

const Home = () => {
  return (
    <div>
      <h1>Welcome to the E- Commerce Home Page</h1>
      <p>This is the home page content.</p>
      <Button variant="primary">Shop Now!</Button>
    </div>
  );
};

export default Home;