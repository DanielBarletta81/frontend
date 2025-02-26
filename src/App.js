import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import HomePage from './components/HomePage.jsx';
import Navigation from './components/Navigation.jsx';
import NotFound from './components/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<h1>Products Page</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}


export default App;
