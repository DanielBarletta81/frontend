import { useState, useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(response => setMessage(response.data.message));
  }, []);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Flask + React + Bootstrap App</Card.Title>
          <Card.Text>{message}</Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
