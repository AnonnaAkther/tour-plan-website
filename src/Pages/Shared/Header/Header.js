import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
          <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">WorldTour</Navbar.Brand>
    <NavbarToggle/>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#latestProducts">Latest_Tour_Place</Nav.Link>
      <Nav.Link as={HashLink} to="/home#tourism">MainOffer</Nav.Link>
      <Nav.Link as={HashLink} to="/home#studyTour">Study_Tour</Nav.Link>
      {user?.email ? 
          <Button onClick={logOut} variant="light">LogOut</Button>:
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
            <Navbar.Text>
       Welcome To: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>   
        </>
    );
};

export default Header;