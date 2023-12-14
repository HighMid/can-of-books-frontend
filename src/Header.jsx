import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header(){
  return(
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand>Favorite Books</Navbar.Brand>      
      <Nav>
        <Nav.Link as={Link} to ="/">Home</Nav.Link>
        <Nav.Link as={Link} to ="/about">About</Nav.Link>
        <Nav.Link as={Link} to ="/createform">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
